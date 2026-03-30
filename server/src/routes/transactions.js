const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const { createTransactionSchema, updateTransactionSchema } = require('../lib/schemas');

// GET my transactions (purchases + sales)
router.get('/', auth, async (req, res) => {
    try {
        const userId = req.user.userId;
        const { role, status } = req.query;

        const transactions = await prisma.transaction.findMany({
            where: {
                ...(role === 'buyer' && { buyerId: userId }),
                ...(role === 'seller' && { sellerId: userId }),
                ...(!role && { OR: [{ buyerId: userId }, { sellerId: userId }] }),
                ...(status && { status })
            },
            include: {
                listing: { include: { images: true } },
                buyer: { select: { id: true, name: true, email: true } },
                seller: { select: { id: true, name: true, email: true } }
            },
            orderBy: { createdAt: 'desc' }
        });

        res.json(transactions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET single transaction
router.get('/:id', auth, async (req, res) => {
    try {
        const userId = req.user.userId;
        const transactionId = parseInt(req.params.id);

        const transaction = await prisma.transaction.findUnique({
            where: { id: transactionId },
            include: {
                listing: { include: { images: true } },
                buyer: { select: { id: true, name: true, email: true } },
                seller: { select: { id: true, name: true, email: true } }
            }
        });

        if (!transaction) return res.status(404).json({ error: 'Transaction not found' });

        if (transaction.buyerId !== userId && transaction.sellerId !== userId) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        res.json(transaction);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST create transaction (buyer initiates)
router.post('/', auth, validate(createTransactionSchema), async (req, res) => {
    try {
        const { listingId } = req.body;
        const buyerId = req.user.userId;

        const listing = await prisma.listing.findUnique({
            where: { id: listingId }
        });

        if (!listing) return res.status(404).json({ error: 'Listing not found' });
        if (listing.status !== 'active') return res.status(400).json({ error: 'Listing is not available' });
        if (listing.userId === buyerId) return res.status(400).json({ error: 'Cannot buy your own listing' });

        const existing = await prisma.transaction.findFirst({
            where: { listingId, status: 'pending' }
        });

        if (existing) {
            return res.status(400).json({ error: 'A pending transaction already exists for this listing' });
        }

        const transaction = await prisma.transaction.create({
            data: { listingId, buyerId, sellerId: listing.userId, price: listing.price },
            include: {
                listing: { include: { images: true } },
                buyer: { select: { id: true, name: true, email: true } },
                seller: { select: { id: true, name: true, email: true } }
            }
        });

        res.status(201).json(transaction);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT update transaction status (protected)
router.put('/:id', auth, validate(updateTransactionSchema), async (req, res) => {
    try {
        const { status } = req.body;
        const userId = req.user.userId;
        const transactionId = parseInt(req.params.id);

        const transaction = await prisma.transaction.findUnique({
            where: { id: transactionId }
        });

        if (!transaction) return res.status(404).json({ error: 'Transaction not found' });

        if (transaction.buyerId !== userId && transaction.sellerId !== userId) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        if (status === 'completed' && transaction.sellerId !== userId) {
            return res.status(403).json({ error: 'Only the seller can mark as completed' });
        }

        if (status === 'cancelled' && transaction.buyerId !== userId) {
            return res.status(403).json({ error: 'Only the buyer can cancel' });
        }

        const updated = await prisma.transaction.update({
            where: { id: transactionId },
            data: { status },
            include: {
                listing: { include: { images: true } },
                buyer: { select: { id: true, name: true, email: true } },
                seller: { select: { id: true, name: true, email: true } }
            }
        });

        if (status === 'completed') {
            await prisma.listing.update({
                where: { id: transaction.listingId },
                data: { status: 'sold' }
            });
        }

        res.json(updated);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
