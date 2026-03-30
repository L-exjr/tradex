const express = require('express');
const router = express.Router();
const multer = require('multer');
const supabase = require("../supabase");
const prisma = require('../prisma');
const auth = require('../middleware/auth');

const upload = multer({ storage: multer.memoryStorage() });

// GET all posts (with optional filters)
router.get('/', async (req, res) => {
    try {
        const { type, status, categoryId, search } = req.query;

        const posts = await prisma.lostFoundPost.findMany({
            where: {
                ...(type && { type }),
                ...(status && { status }),
                ...(categoryId && { categoryId: parseInt(categoryId) }),
                ...(search && {
                    OR: [
                        { title: { contains: search, mode: 'insensitive' } },
                        { description: { contains: search, mode: 'insensitive' } },
                        { locationText: { contains: search, mode: 'insensitive' } }
                    ]
                })
            },
            include: {
                images: true,
                category: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// GET single post
router.get('/:id', async (req, res) => {
    try {
        const post = await prisma.lostFoundPost.findUnique({
            where: { id: parseInt(req.params.id) },
            include: {
                images: true,
                category: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            }
        });

        if (!post) return res.status(404).json({ error: 'Post not found' });

        res.json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// POST create post (protected)
router.post('/', auth, upload.array('images', 5), async (req, res) => {
    try {
        const {
            title,
            description,
            categoryId,
            type,
            locationText,
            dateLostFound
        } = req.body;
        const userId = req.user.userId;
        const files = req.files;

        if (!title || !description || !categoryId || !type || !locationText || !dateLostFound) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const post = await prisma.lostFoundPost.create({
            data: {
                title,
                description,
                categoryId: parseInt(categoryId),
                type,
                locationText,
                dateLostFound: new Date(dateLostFound),
                userId
            }
        });

        // Upload images if provided
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
                    data: {
                        url: data.publicUrl,
                        postId: post.id
                    }
                });
            }
        }

        // Return post with images
        const full = await prisma.lostFoundPost.findUnique({
            where: { id: post.id },
            include: { images: true, category: true }
        });

        res.status(201).json(full);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// PUT update post (protected, owner only)
router.put('/:id', auth, async (req, res) => {
    try {
        const {
            title,
            description,
            categoryId,
            locationText,
            dateLostFound,
            status
        } = req.body;
        const userId = req.user.userId;
        const postId = parseInt(req.params.id);

        const existing = await prisma.lostFoundPost.findUnique({
            where: { id: postId }
        });

        if (!existing) return res.status(404).json({ error: 'Post not found' });
        if (existing.userId !== userId) return res.status(403).json({ error: 'Forbidden' });

        const updated = await prisma.lostFoundPost.update({
            where: { id: postId },
            data: {
                ...(title && { title }),
                ...(description && { description }),
                ...(categoryId && { categoryId: parseInt(categoryId) }),
                ...(locationText && { locationText }),
                ...(dateLostFound && { dateLostFound: new Date(dateLostFound) }),
                ...(status && { status })
            },
            include: { images: true, category: true }
        });

        res.json(updated);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// DELETE post (protected, owner only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const userId = req.user.userId;
        const postId = parseInt(req.params.id);

        const existing = await prisma.lostFoundPost.findUnique({
            where: { id: postId }
        });

        if (!existing) return res.status(404).json({ error: 'Post not found' });
        if (existing.userId !== userId) return res.status(403).json({ error: 'Forbidden' });

        await prisma.lostFoundPost.delete({
            where: { id: postId }
        });

        res.json({ success: true, message: 'Post deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;