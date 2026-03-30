const express      = require('express');
const router       = express.Router();
const multer       = require('multer');
const supabase     = require('../supabase');
const prisma       = require('../prisma');
const auth         = require('../middleware/auth');
const asyncHandler = require('../middleware/asyncHandler');
const validate     = require('../middleware/validate');
const log          = require('../lib/logger');
const { createLostFoundSchema, updateLostFoundSchema } = require('../lib/schemas');

const upload = multer({
    storage: multer.memoryStorage(),
    limits:  { fileSize: 5 * 1024 * 1024 }
});

async function uploadImages(files, postId) {
    for (const file of files) {
        const fileName = `lostfound/${Date.now()}-${file.originalname}`;
        const { error } = await supabase
            .storage
            .from('item-images')
            .upload(fileName, file.buffer, { contentType: file.mimetype, upsert: true });
        if (error) throw error;
        const { data } = supabase.storage.from('item-images').getPublicUrl(fileName);
        await prisma.image.create({ data: { url: data.publicUrl, postId } });
    }
}

// GET /api/lostfound
router.get('/', asyncHandler(async (req, res) => {
    const { type, status, categoryId, search } = req.query;

    const posts = await prisma.lostFoundPost.findMany({
        where: {
            ...(type       && { type }),
            ...(status     && { status }),
            ...(categoryId && { categoryId: parseInt(categoryId) }),
            ...(search     && {
                OR: [
                    { title:        { contains: search, mode: 'insensitive' } },
                    { description:  { contains: search, mode: 'insensitive' } },
                    { locationText: { contains: search, mode: 'insensitive' } }
                ]
            })
        },
        include: { images: true, category: true, user: { select: { id: true, name: true, email: true } } },
        orderBy: { createdAt: 'desc' }
    });

    res.ok(posts);
}));

// GET /api/lostfound/:id
router.get('/:id', asyncHandler(async (req, res) => {
    const post = await prisma.lostFoundPost.findUnique({
        where:   { id: parseInt(req.params.id) },
        include: { images: true, category: true, user: { select: { id: true, name: true, email: true } } }
    });
    if (!post) return res.notFound('Post not found');
    res.ok(post);
}));

// POST /api/lostfound
router.post('/', auth, upload.array('images', 5), validate(createLostFoundSchema), asyncHandler(async (req, res) => {
    const { title, description, categoryId, type, locationText, dateLostFound } = req.body;
    const userId = req.user.userId;

    const post = await prisma.lostFoundPost.create({
        data: { title, description, categoryId, type, locationText, dateLostFound: new Date(dateLostFound), userId }
    });

    if (req.files?.length > 0) await uploadImages(req.files, post.id);

    const full = await prisma.lostFoundPost.findUnique({
        where:   { id: post.id },
        include: { images: true, category: true }
    });

    log.info('Lost & Found post created', { postId: post.id, userId, type });
    res.created(full);
}));

// PUT /api/lostfound/:id  (owner only)
router.put('/:id', auth, validate(updateLostFoundSchema), asyncHandler(async (req, res) => {
    const { title, description, categoryId, locationText, dateLostFound, status } = req.body;
    const userId = req.user.userId;
    const postId = parseInt(req.params.id);

    const existing = await prisma.lostFoundPost.findUnique({ where: { id: postId } });
    if (!existing)                  return res.notFound('Post not found');
    if (existing.userId !== userId) return res.forbidden();

    const updated = await prisma.lostFoundPost.update({
        where: { id: postId },
        data: {
            ...(title         && { title }),
            ...(description   && { description }),
            ...(categoryId    && { categoryId }),
            ...(locationText  && { locationText }),
            ...(dateLostFound && { dateLostFound: new Date(dateLostFound) }),
            ...(status        && { status })
        },
        include: { images: true, category: true }
    });

    res.ok(updated);
}));

// DELETE /api/lostfound/:id  (owner only)
router.delete('/:id', auth, asyncHandler(async (req, res) => {
    const userId = req.user.userId;
    const postId = parseInt(req.params.id);

    const existing = await prisma.lostFoundPost.findUnique({ where: { id: postId } });
    if (!existing)                  return res.notFound('Post not found');
    if (existing.userId !== userId) return res.forbidden();

    await prisma.lostFoundPost.delete({ where: { id: postId } });
    log.info('Lost & Found post deleted', { postId, userId });
    res.noContent();
}));

module.exports = router;
