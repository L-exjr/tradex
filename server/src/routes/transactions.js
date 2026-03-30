const express      = require('express');
const router       = express.Router();
const prisma       = require('../prisma');
const auth         = require('../middleware/auth');
const asyncHandler = require('../middleware/asyncHandler');
const validate     = require('../middleware/validate');
const log          = require('../lib/logger');
const { createTransactionSchema, updateTransactionSchema } = require('../lib/schemas');

const TX_INCLUDE = {
    listing: { include: { images: true } },
    buyer:   { select: { id: true, name: true, email: true } },
    seller:  { select: { id: true, name: true, email: true } }
};

// GET /api/transactions
router.get('/', auth, asyncHandler(async (req, res) => {
    const userId = req.user.userId;
    const { role, status } = req.query;

    const transactions = await prisma.transaction.findMany({
        where: {
            ...(role === 'buyer'  && { buyerId: userId }),
            ...(role === 'seller' && { sellerId: userId }),
            ...(!role             && { OR: [{ buyerId: userId }, { sellerId: userId }] }),
            ...(status            && { status })
        },
        include: TX_INCLUDE,
        orderBy: { createdAt: 'desc' }
    });

    res.ok(transactions);
}));

// GET /api/transactions/:id
router.get('/:id', auth, asyncHandler(async (req, res) => {
    const userId        = req.user.userId;
    const transactionId = parseInt(req.params.id);

    const transaction = await prisma.transaction.findUnique({
        where:   { id: transactionId },
        include: TX_INCLUDE
    });

    if (!transaction) return res.notFound('Transaction not found');
    if (transaction.buyerId !== userId && transaction.sellerId !== userId) return res.forbidden();

    res.ok(transaction);
}));

// POST /api/transactions
router.post('/', auth, validate(createTransactionSchema), asyncHandler(async (req, res) => {
    const { listingId } = req.body;
    const buyerId = req.user.userId;

    const listing = await prisma.listing.findUnique({ where: { id: listingId } });
    if (!listing)                       return res.notFound('Listing not found');
    if (listing.status !== 'active')    return res.badRequest('Listing is not available');
    if (listing.userId === buyerId)     return res.badRequest('Cannot buy your own listing');

    const existing = await prisma.transaction.findFirst({ where: { listingId, status: 'pending' } });
    if (existing) return res.conflict('A pending transaction already exists for this listing');

    const transaction = await prisma.transaction.create({
        data:    { listingId, buyerId, sellerId: listing.userId, price: listing.price },
        include: TX_INCLUDE
    });

    log.info('Transaction created', { transactionId: transaction.id, buyerId, listingId });
    res.created(transaction);
}));

// PUT /api/transactions/:id
router.put('/:id', auth, validate(updateTransactionSchema), asyncHandler(async (req, res) => {
    const { status }    = req.body;
    const userId        = req.user.userId;
    const transactionId = parseInt(req.params.id);

    const transaction = await prisma.transaction.findUnique({ where: { id: transactionId } });
    if (!transaction) return res.notFound('Transaction not found');

    if (transaction.buyerId !== userId && transaction.sellerId !== userId) return res.forbidden();
    if (status === 'completed' && transaction.sellerId !== userId) return res.forbidden('Only the seller can mark as completed');
    if (status === 'cancelled' && transaction.buyerId  !== userId) return res.forbidden('Only the buyer can cancel');

    const updated = await prisma.transaction.update({
        where:   { id: transactionId },
        data:    { status },
        include: TX_INCLUDE
    });

    if (status === 'completed') {
        await prisma.listing.update({ where: { id: transaction.listingId }, data: { status: 'sold' } });
    }

    log.info('Transaction status updated', { transactionId, status, userId });
    res.ok(updated);
}));

module.exports = router;
