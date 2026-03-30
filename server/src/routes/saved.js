const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
const auth = require('../middleware/auth');

// GET my saved listings
router.get('/', auth, async (req, res) => {
    try {
        const userId = req.user.userId;

        const saved = await prisma.savedListing.findMany({
            where: { userId },
            include: {
                listing: {
                    include: {
                        images: true,
                        category: true,
                        user: {
                            select: { id: true, name: true, email: true }
                        }
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        res.json(saved);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// POST save a listing
router.post('/:listingId', auth, async (req, res) => {
    try {
        const userId = req.user.userId;
        const listingId = parseInt(req.params.listingId);

        const listing = await prisma.listing.findUnique({
            where: { id: listingId }
        });

        if (!listing) return res.status(404).json({ error: 'Listing not found' });

        if (listing.userId === userId) {
            return res.status(400).json({ error: 'Cannot save your own listing' });
        }

        const saved = await prisma.savedListing.create({
            data: { userId, listingId }
        });

        res.status(201).json(saved);
    } catch (err) {
        if (err.code === 'P2002') {
            return res.status(400).json({ error: 'Listing already saved' });
        }
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// DELETE unsave a listing
router.delete('/:listingId', auth, async (req, res) => {
    try {
        const userId = req.user.userId;
        const listingId = parseInt(req.params.listingId);

        await prisma.savedListing.delete({
            where: {
                userId_listingId: { userId, listingId }
            }
        });

        res.json({ success: true, message: 'Listing unsaved' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;