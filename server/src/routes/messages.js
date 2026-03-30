const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const { sendMessageSchema } = require('../lib/schemas');

// GET all conversations for current user
router.get('/conversations', auth, async (req, res) => {
    try {
        const userId = req.user.userId;

        const messages = await prisma.message.findMany({
            where: {
                OR: [
                    { senderId: userId },
                    { receiverId: userId }
                ]
            },
            include: {
                sender: { select: { id: true, name: true, email: true } },
                receiver: { select: { id: true, name: true, email: true } }
            },
            orderBy: { createdAt: 'desc' }
        });

        const conversations = {};
        for (const msg of messages) {
            const partnerId = msg.senderId === userId ? msg.receiverId : msg.senderId;

            if (!conversations[partnerId]) {
                conversations[partnerId] = {
                    partner: msg.senderId === userId ? msg.receiver : msg.sender,
                    lastMessage: msg,
                    unreadCount: 0
                };
            }

            if (msg.receiverId === userId && !msg.readStatus) {
                conversations[partnerId].unreadCount++;
            }
        }

        res.json(Object.values(conversations));
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET messages between current user and another user
router.get('/:partnerId', auth, async (req, res) => {
    try {
        const userId = req.user.userId;
        const partnerId = req.params.partnerId;

        const messages = await prisma.message.findMany({
            where: {
                OR: [
                    { senderId: userId, receiverId: partnerId },
                    { senderId: partnerId, receiverId: userId }
                ]
            },
            include: {
                sender: { select: { id: true, name: true, email: true } },
                receiver: { select: { id: true, name: true, email: true } }
            },
            orderBy: { createdAt: 'asc' }
        });

        await prisma.message.updateMany({
            where: { senderId: partnerId, receiverId: userId, readStatus: false },
            data: { readStatus: true }
        });

        res.json(messages);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST send a message (protected)
router.post('/', auth, validate(sendMessageSchema), async (req, res) => {
    try {
        const { receiverId, content } = req.body;
        const senderId = req.user.userId;

        if (senderId === receiverId) {
            return res.status(400).json({ error: 'Cannot send message to yourself' });
        }

        const receiver = await prisma.user.findUnique({ where: { id: receiverId } });
        if (!receiver) return res.status(404).json({ error: 'Receiver not found' });

        const message = await prisma.message.create({
            data: { senderId, receiverId, content },
            include: {
                sender: { select: { id: true, name: true, email: true } },
                receiver: { select: { id: true, name: true, email: true } }
            }
        });

        res.status(201).json(message);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE message (protected, sender only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const userId = req.user.userId;
        const messageId = parseInt(req.params.id);

        const existing = await prisma.message.findUnique({ where: { id: messageId } });

        if (!existing) return res.status(404).json({ error: 'Message not found' });
        if (existing.senderId !== userId) return res.status(403).json({ error: 'Forbidden' });

        await prisma.message.delete({ where: { id: messageId } });

        res.json({ success: true, message: 'Message deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
