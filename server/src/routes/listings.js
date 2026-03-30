const express      = require('express');
const router       = express.Router();
const multer       = require('multer');
const supabase     = require('../supabase');
const prisma       = require('../prisma');
const auth         = require('../middleware/auth');
const optionalAuth = require('../middleware/optionalAuth');
const asyncHandler = require('../middleware/asyncHandler');
const validate     = require('../middleware/validate');
const log          = require('../lib/logger');
const { createListingSchema, updateListingSchema } = require('../lib/schemas');

const upload = multer({
    storage: multer.memoryStorage(),
    limits:  { fileSize: 5 * 1024 * 1024 } // 5 MB per file
});

/** Upload files to Supabase and create Image DB records for a listing. */
async function uploadImages(files, listingId) {
    for (const file of files) {
        const fileName = `listings/${Date.now()}-${file.originalname}`;
        const { error } = await supabase
            .storage
            .from('item-images')
            .upload(fileName, file.buffer, { contentType: file.mimetype, upsert: true });
        if (error) throw error;
        const { data } = supabase.storage.from('item-images').getPublicUrl(fileName);
        await prisma.image.create({ data: { url: data.publicUrl, listingId } });
    }
}

// GET /api/listings  (paginated)
router.get('/', asyncHandler(async (req, res) => {
    const { categoryId, status, search, minPrice, maxPrice, userId } = req.query;

    const page  = Math.max(1, parseInt(req.query.page)  || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 20));
    const skip  = (page - 1) * limit;

    const statusClause =
        status && status !== 'undefined'
            ? { status }
            : { status: { not: 'deleted' } };

    const where = {
        ...(userId     && { userId }),
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
                { title:       { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } }
            ]
        })
    };

    const [listings, total] = await Promise.all([
        prisma.listing.findMany({
            where,
            include: {
                images:   true,
                category: true,
                user:     { select: { id: true, name: true, email: true } }
            },
            orderBy: { createdAt: 'desc' },
            skip,
            take: limit
        }),
        prisma.listing.count({ where })
    ]);

    res.ok({ data: listings, pagination: { page, limit, total, pages: Math.ceil(total / limit) } });
}));

// GET /api/listings/:id
router.get('/:id', optionalAuth, asyncHandler(async (req, res) => {
    const listing = await prisma.listing.findUnique({
        where:   { id: parseInt(req.params.id) },
        include: { images: true, category: true, user: { select: { id: true, name: true, email: true } } }
    });

    if (!listing) return res.notFound('Listing not found');

    if (listing.status === 'deleted') {
        const viewerId = req.user?.userId;
        if (!viewerId || viewerId !== listing.userId) return res.notFound('Listing not found');
    }

    res.ok(listing);
}));

// POST /api/listings
router.post('/', auth, upload.array('images', 5), validate(createListingSchema), asyncHandler(async (req, res) => {
    const { title, description, price, categoryId, pickupLocation } = req.body;
    const userId = req.user.userId;

    const listing = await prisma.listing.create({
        data: { title, description, price, userId, categoryId, ...(pickupLocation && { pickupLocation }) }
    });

    if (req.files?.length > 0) await uploadImages(req.files, listing.id);

    const full = await prisma.listing.findUnique({
        where:   { id: listing.id },
        include: { images: true, category: true }
    });

    log.info('Listing created', { listingId: listing.id, userId });
    res.created(full);
}));

// PUT /api/listings/:id
router.put('/:id', auth, upload.array('images', 5), validate(updateListingSchema), asyncHandler(async (req, res) => {
    const { title, description, price, categoryId, status, pickupLocation } = req.body;
    const userId    = req.user.userId;
    const listingId = parseInt(req.params.id);

    const existing = await prisma.listing.findUnique({ where: { id: listingId } });
    if (!existing)                      return res.notFound('Listing not found');
    if (existing.userId !== userId)     return res.forbidden();

    await prisma.listing.update({
        where: { id: listingId },
        data: {
            ...(title             && { title }),
            ...(description       && { description }),
            ...(price             && { price }),
            ...(categoryId        && { categoryId }),
            ...(status            && { status }),
            ...(pickupLocation !== undefined && { pickupLocation })
        }
    });

    if (req.files?.length > 0) await uploadImages(req.files, listingId);

    const full = await prisma.listing.findUnique({
        where:   { id: listingId },
        include: { images: true, category: true }
    });

    res.ok(full);
}));

// DELETE /api/listings/:id  — soft delete
router.delete('/:id', auth, asyncHandler(async (req, res) => {
    const userId    = req.user.userId;
    const listingId = parseInt(req.params.id);

    const existing = await prisma.listing.findUnique({ where: { id: listingId } });
    if (!existing)                  return res.notFound('Listing not found');
    if (existing.userId !== userId) return res.forbidden();

    await prisma.listing.update({ where: { id: listingId }, data: { status: 'deleted' } });
    log.info('Listing soft-deleted', { listingId, userId });
    res.noContent();
}));

module.exports = router;
