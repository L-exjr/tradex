const express      = require('express');
const router       = express.Router();
const prisma       = require('../prisma');
const auth         = require('../middleware/auth');
const asyncHandler = require('../middleware/asyncHandler');
const log          = require('../lib/logger');

const SAVED_INCLUDE = {
    listing: {
        include: {
            images:   true,
            category: true,
            user:     { select: { id: true, name: true, email: true } }
        }
    }
};

// GET /api/saved
router.get('/', auth, asyncHandler(async (req, res) => {
    const saved = await prisma.savedListing.findMany({
        where:   { userId: req.user.userId },
        include: SAVED_INCLUDE,
        orderBy: { createdAt: 'desc' }
    });
    res.ok(saved);
}));

// POST /api/saved/:listingId
router.post('/:listingId', auth, asyncHandler(async (req, res) => {
    const userId    = req.user.userId;
    const listingId = parseInt(req.params.listingId);

    const listing = await prisma.listing.findUnique({ where: { id: listingId } });
    if (!listing)                   return res.notFound('Listing not found');
    if (listing.userId === userId)  return res.badRequest('Cannot save your own listing');

    try {
        const saved = await prisma.savedListing.create({ data: { userId, listingId } });
        res.created(saved);
    } catch (err) {
        if (err.code === 'P2002') return res.conflict('Listing already saved');
        throw err;
    }
}));

// DELETE /api/saved/:listingId
router.delete('/:listingId', auth, asyncHandler(async (req, res) => {
    const userId    = req.user.userId;
    const listingId = parseInt(req.params.listingId);

    try {
        await prisma.savedListing.delete({
            where: { userId_listingId: { userId, listingId } }
        });
        res.noContent();
    } catch (err) {
        if (err.code === 'P2025') return res.notFound('Saved listing not found');
        throw err;
    }
}));

module.exports = router;
