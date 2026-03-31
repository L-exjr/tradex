const express      = require('express');
const router       = express.Router();
const prisma       = require('../prisma');
const auth         = require('../middleware/auth');
const asyncHandler = require('../middleware/asyncHandler');
const validate     = require('../middleware/validate');
const log          = require('../lib/logger');
const { sendMessageSchema } = require('../lib/schemas');

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/messages/conversations
//
// BEFORE: loaded every message ever sent/received by this user into JS memory,
//         then built the conversation map with a for-loop. O(N) in total
//         messages — gets slow with heavy usage.
//
// AFTER:  one raw SQL query that uses DISTINCT ON (partner_id) to fetch only
//         the latest message per conversation partner, plus the unread count,
//         all at the database level. Returns the same response shape.
// ─────────────────────────────────────────────────────────────────────────────
router.get('/conversations', auth, asyncHandler(async (req, res) => {
    const userId = req.user.userId;

    // Fetch the last message per conversation partner + unread count in one query.
    // DISTINCT ON is a PostgreSQL extension — safe here because we're on Supabase/pg.
    const rows = await prisma.$queryRaw`
        SELECT DISTINCT ON (partner_id)
            CASE WHEN m."senderId" = ${userId} THEN m."receiverId"
                 ELSE m."senderId" END                     AS partner_id,
            m.id                                           AS last_message_id,
            m.content                                      AS last_message_content,
            m."createdAt"                                  AS last_message_at,
            m."senderId"                                   AS last_message_sender_id,
            m."readStatus"                                 AS last_message_read,
            u.id                                           AS partner_user_id,
            u.name                                         AS partner_name,
            u.email                                        AS partner_email,
            u."avatarUrl"                                  AS partner_avatar,
            (
                SELECT COUNT(*)::int
                FROM "Message" unread
                WHERE unread."receiverId" = ${userId}
                  AND unread."senderId"   = u.id
                  AND unread."readStatus" = false
            )                                              AS unread_count
        FROM "Message" m
        JOIN "User"    u ON u.id = CASE WHEN m."senderId" = ${userId}
                                        THEN m."receiverId"
                                        ELSE m."senderId" END
        WHERE m."senderId" = ${userId} OR m."receiverId" = ${userId}
        ORDER BY partner_id, m."createdAt" DESC
    `;

    // Shape the raw rows into the same format the frontend already expects
    const conversations = rows.map((row) => ({
        partner: {
            id:        row.partner_user_id,
            name:      row.partner_name,
            email:     row.partner_email,
            avatarUrl: row.partner_avatar ?? null,
        },
        lastMessage: {
            id:         row.last_message_id,
            content:    row.last_message_content,
            createdAt:  row.last_message_at,
            senderId:   row.last_message_sender_id,
            readStatus: row.last_message_read,
        },
        unreadCount: Number(row.unread_count),
    }));

    // Sort by most recent message descending (DISTINCT ON doesn't guarantee order)
    conversations.sort((a, b) =>
        new Date(b.lastMessage.createdAt) - new Date(a.lastMessage.createdAt)
    );

    res.ok(conversations);
}));

// GET /api/messages/:partnerId
router.get('/:partnerId', auth, asyncHandler(async (req, res) => {
    const userId    = req.user.userId;
    const partnerId = req.params.partnerId;

    // Fetch thread + mark-read in parallel
    const [messages] = await Promise.all([
        prisma.message.findMany({
            where: {
                OR: [
                    { senderId: userId,    receiverId: partnerId },
                    { senderId: partnerId, receiverId: userId }
                ]
            },
            include: {
                sender:   { select: { id: true, name: true, email: true, avatarUrl: true } },
                receiver: { select: { id: true, name: true, email: true, avatarUrl: true } }
            },
            orderBy: { createdAt: 'asc' }
        }),
        prisma.message.updateMany({
            where: { senderId: partnerId, receiverId: userId, readStatus: false },
            data:  { readStatus: true }
        })
    ]);

    res.ok(messages);
}));

// POST /api/messages
router.post('/', auth, validate(sendMessageSchema), asyncHandler(async (req, res) => {
    const { receiverId, content } = req.body;
    const senderId = req.user.userId;

    if (senderId === receiverId) return res.badRequest('Cannot send message to yourself');

    const receiver = await prisma.user.findUnique({ where: { id: receiverId } });
    if (!receiver) return res.notFound('Receiver not found');

    const message = await prisma.message.create({
        data:    { senderId, receiverId, content },
        include: {
            sender:   { select: { id: true, name: true, email: true, avatarUrl: true } },
            receiver: { select: { id: true, name: true, email: true, avatarUrl: true } }
        }
    });

    res.created(message);
}));

// DELETE /api/messages/:id  (sender only)
router.delete('/:id', auth, asyncHandler(async (req, res) => {
    const userId    = req.user.userId;
    const messageId = parseInt(req.params.id);

    const existing = await prisma.message.findUnique({ where: { id: messageId } });
    if (!existing)                    return res.notFound('Message not found');
    if (existing.senderId !== userId) return res.forbidden();

    await prisma.message.delete({ where: { id: messageId } });
    log.info('Message deleted', { messageId, userId });
    res.noContent();
}));

module.exports = router;
