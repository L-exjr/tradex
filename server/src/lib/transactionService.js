/**
 * transactionService — business logic extracted from the transactions route.
 *
 * Rules enforced here (not in the route):
 *  - Buyer cannot purchase their own listing
 *  - Listing must be 'active' to be purchased
 *  - Only one 'pending' transaction per listing at a time
 *  - Completing a transaction automatically marks the listing as 'sold'
 *  - Only the seller can complete; only the buyer can cancel
 */

const prisma = require('../prisma');

/** Shared Prisma include — avoids copy-pasting across route handlers. */
const TX_INCLUDE = {
    listing: { include: { images: true } },
    buyer:   { select: { id: true, name: true, email: true } },
    seller:  { select: { id: true, name: true, email: true } }
};

/**
 * Create a new transaction (buyer initiates).
 * Throws typed errors { message, status } for every business-rule violation.
 */
async function createTransaction(listingId, buyerId) {
    const listing = await prisma.listing.findUnique({ where: { id: listingId } });

    if (!listing) {
        const err = new Error('Listing not found');                                err.status = 404; throw err;
    }
    if (listing.status !== 'active') {
        const err = new Error('Listing is not available');                         err.status = 400; throw err;
    }
    if (listing.userId === buyerId) {
        const err = new Error('Cannot buy your own listing');                      err.status = 400; throw err;
    }

    const existing = await prisma.transaction.findFirst({ where: { listingId, status: 'pending' } });
    if (existing) {
        const err = new Error('A pending transaction already exists for this listing'); err.status = 409; throw err;
    }

    return prisma.transaction.create({
        data:    { listingId, buyerId, sellerId: listing.userId, price: listing.price },
        include: TX_INCLUDE
    });
}

/**
 * Update transaction status with role-based permission checks.
 * Also handles the 'completed' → mark listing 'sold' side-effect.
 */
async function updateTransactionStatus(transactionId, newStatus, userId) {
    const tx = await prisma.transaction.findUnique({ where: { id: transactionId } });

    if (!tx) {
        const err = new Error('Transaction not found');                  err.status = 404; throw err;
    }
    if (tx.buyerId !== userId && tx.sellerId !== userId) {
        const err = new Error('Forbidden');                              err.status = 403; throw err;
    }
    if (newStatus === 'completed' && tx.sellerId !== userId) {
        const err = new Error('Only the seller can mark as completed'); err.status = 403; throw err;
    }
    if (newStatus === 'cancelled' && tx.buyerId !== userId) {
        const err = new Error('Only the buyer can cancel');             err.status = 403; throw err;
    }

    const updated = await prisma.transaction.update({
        where:   { id: transactionId },
        data:    { status: newStatus },
        include: TX_INCLUDE
    });

    if (newStatus === 'completed') {
        await prisma.listing.update({ where: { id: tx.listingId }, data: { status: 'sold' } });
    }

    return updated;
}

module.exports = { createTransaction, updateTransactionStatus, TX_INCLUDE };
