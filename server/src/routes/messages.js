const express      = require('express');
const router       = express.Router();
const prisma       = require('../prisma');
const auth         = require('../middleware/auth');
const asyncHandler = require('../middleware/asyncHandler');
const validate     = require('../middleware/validate');
const log          = require('../lib/logger');
const { sendMessageSchema } = require('../lib/schemas');

// GET /api/messages/conversations
router.get('/conversations', auth, asyncHandler(async (req, res) => {
    const userId = req.user.userId;

    const messages = await prisma.message.findMany({
        where:   { OR: [{ senderId: userId }, { receiverId: userId }] },
        include: {
            sender:   { select: { id: true, name: true, email: true, avatarUrl: true } },
            receiver: { select: { id: true, name: true, email: true, avatarUrl: true } }
        },
        orderBy: { createdAt: 'desc' }
    });

    const conversations = {};
    for (const msg of messages) {
        const partnerId = msg.senderId === userId ? msg.receiverId : msg.senderId;
        if (!conversations[partnerId]) {
            conversations[partnerId] = {
                partner:     msg.senderId === userId ? msg.receiver : msg.sender,
                lastMessage: msg,
                unreadCount: 0
            };
        }
        if (msg.receiverId === userId && !msg.readStatus) {
            conversations[partnerId].unreadCount++;
        }
    }

    res.ok(Object.values(conversations));
}));

// GET /api/messages/:partnerId
router.get('/:partnerId', auth, asyncHandler(async (req, res) => {
    const userId    = req.user.userId;
    const partnerId = req.params.partnerId;

    // Run fetch + mark-read in parallel — saves one round-trip
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
