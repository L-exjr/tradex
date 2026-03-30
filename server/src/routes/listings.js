const express = require('express');
const router = express.Router();
const multer = require('multer');
const supabase = require('../supabase');
const prisma = require('../prisma');
const auth = require('../middleware/auth');
const optionalAuth = require('../middleware/optionalAuth');

const upload = multer({ storage: multer.memoryStorage() });

// GET all listings
router.get('/', async (req, res) => {
    try {
        const { categoryId, status, search, minPrice, maxPrice, userId } = req.query;

        const statusClause =
            status && status !== 'undefined'
                ? { status }
                : { status: { not: 'deleted' } };

        const listings = await prisma.listing.findMany({
            where: {
                ...(userId && { userId }),
                ...statusClause,
                ...(categoryId && { categoryId: parseInt(categoryId) }),
                ...((minPrice || maxPrice) && {
                    price: {
                        ...(minPrice && { gte: parseFloat(minPrice) }),
                        ...(maxPrice && { lte: parseFloat(maxPrice) })
                    }
                }),
                ...(search && {
                    OR: [
                        { title: { contains: search, mode: 'insensitive' } },
                        { description: { contains: search, mode: 'insensitive' } }
                    ]
                })
            },
            include: {
                images: true,
                category: true,
                user: {
                    select: { id: true, name: true, email: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        res.json(listings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// GET single listing (soft-deleted hidden unless viewer is the owner)
router.get('/:id', optionalAuth, async (req, res) => {
    try {
        const listing = await prisma.listing.findUnique({
            where: { id: parseInt(req.params.id) },
            include: {
                images: true,
                category: true,
                user: {
                    select: { id: true, name: true, email: true }
                }
            }
        });

        if (!listing) return res.status(404).json({ error: 'Listing not found' });

        if (listing.status === 'deleted') {
            const viewerId = req.user?.userId;
            if (!viewerId || viewerId !== listing.userId) {
                return res.status(404).json({ error: 'Listing not found' });
            }
        }

        res.json(listing);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// POST create listing (protected)
router.post('/', auth, upload.array('images', 5), async (req, res) => {
    try {
        const { title, description, price, categoryId, pickupLocation } = req.body;
        const userId = req.user.userId;
        const files = req.files;

        const listing = await prisma.listing.create({
            data: {
                title,
                description,
                price: parseFloat(price),
                userId,
                categoryId: parseInt(categoryId),
                ...(pickupLocation && { pickupLocation })
            }
        });

        if (files && files.length > 0) {
            for (const file of files) {
                const fileName = `${Date.now()}-${file.originalname}`;

                const { error } = await supabase
                    .storage
                    .from('item-images')
                    .upload(fileName, file.buffer, {
                        contentType: file.mimetype,
                        upsert: true
                    });

                if (error) throw error;

                const { data } = supabase
                    .storage
                    .from('item-images')
                    .getPublicUrl(fileName);

                await prisma.image.create({
                    data: { url: data.publicUrl, listingId: listing.id }
                });
            }
        }

        const full = await prisma.listing.findUnique({
            where: { id: listing.id },
            include: { images: true, category: true }
        });

        res.status(201).json(full);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// PUT update listing (protected, owner only)
router.put('/:id', auth, upload.array('images', 5), async (req, res) => {
    try {
        const { title, description, price, categoryId, status, pickupLocation } = req.body;
        const userId = req.user.userId;
        const listingId = parseInt(req.params.id);
        const files = req.files;

        const existing = await prisma.listing.findUnique({
            where: { id: listingId }
        });

        if (!existing) return res.status(404).json({ error: 'Listing not found' });
        if (existing.userId !== userId) return res.status(403).json({ error: 'Forbidden' });

        const updated = await prisma.listing.update({
            where: { id: listingId },
            data: {
                ...(title && { title }),
                ...(description && { description }),
                ...(price && { price: parseFloat(price) }),
                ...(categoryId && { categoryId: parseInt(categoryId) }),
                ...(status && { status }),
                ...(pickupLocation !== undefined && { pickupLocation })
            },
            include: { images: true, category: true }
        });

        // Upload new images if provided
        if (files && files.length > 0) {
            for (const file of files) {
                const fileName = `${Date.now()}-${file.originalname}`;

                const { error } = await supabase
                    .storage
                    .from('item-images')
                    .upload(fileName, file.buffer, {
                        contentType: file.mimetype,
                        upsert: true
                    });

                if (error) throw error;

                const { data } = supabase
                    .storage
                    .from('item-images')
                    .getPublicUrl(fileName);

                await prisma.image.create({
                    data: { url: data.publicUrl, listingId: listingId }
                });
            }
        }

        const full = await prisma.listing.findUnique({
            where: { id: listingId },
            include: { images: true, category: true }
        });

        res.json(full);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// DELETE listing — soft delete (protected, owner only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const userId = req.user.userId;
        const listingId = parseInt(req.params.id);

        const existing = await prisma.listing.findUnique({
            where: { id: listingId }
        });

        if (!existing) return res.status(404).json({ error: 'Listing not found' });
        if (existing.userId !== userId) return res.status(403).json({ error: 'Forbidden' });

        await prisma.listing.update({
            where: { id: listingId },
            data: { status: 'deleted' }
        });

        res.json({ success: true, message: 'Listing deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;