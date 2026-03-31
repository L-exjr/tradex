const express      = require('express');
const router       = express.Router();
const auth         = require('../middleware/auth');
const asyncHandler = require('../middleware/asyncHandler');
const validate     = require('../middleware/validate');
const log          = require('../lib/logger');
const {
    createTransaction,
    updateTransactionStatus,
    TX_INCLUDE
} = require('../lib/transactionService');
const prisma = require('../prisma');
const { createTransactionSchema, updateTransactionSchema } = require('../lib/schemas');

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

// POST /api/transactions  — business rules live in transactionService
router.post('/', auth, validate(createTransactionSchema), asyncHandler(async (req, res) => {
    const { listingId } = req.body;
    const buyerId = req.user.userId;

    // createTransaction throws typed errors (with .status) for rule violations;
    // asyncHandler forwards them to the global error handler which reads err.status
    const transaction = await createTransaction(listingId, buyerId);

    log.info('Transaction created', { transactionId: transaction.id, buyerId, listingId });
    res.created(transaction);
}));

// PUT /api/transactions/:id  — business rules live in transactionService
router.put('/:id', auth, validate(updateTransactionSchema), asyncHandler(async (req, res) => {
    const { status }    = req.body;
    const userId        = req.user.userId;
    const transactionId = parseInt(req.params.id);

    const updated = await updateTransactionStatus(transactionId, status, userId);

    log.info('Transaction status updated', { transactionId, status, userId });
    res.ok(updated);
}));

module.exports = router;
