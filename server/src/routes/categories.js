const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
const auth = require('../middleware/auth');
const { isAdminEmail } = require('../lib/admin');

// GET all categories
router.get('/', async (req, res) => {
    try {
        const categories = await prisma.category.findMany({
            orderBy: { name: 'asc' }
        });
        res.json(categories);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// GET single category
router.get('/:id', async (req, res) => {
    try {
        const category = await prisma.category.findUnique({
            where: { id: parseInt(req.params.id) }
        });

        if (!category) return res.status(404).json({ error: 'Category not found' });

        res.json(category);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// POST create category (admin only — set ADMIN_EMAILS in env)
router.post('/', auth, async (req, res) => {
    try {
        if (!isAdminEmail(req.user.email)) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        const { name, type } = req.body;

        if (!name || !type) {
            return res.status(400).json({ error: 'name and type are required' });
        }

        const category = await prisma.category.create({
            data: { name, type }
        });

        res.status(201).json(category);
    } catch (err) {
        // Handle unique constraint violation
        if (err.code === 'P2002') {
            return res.status(400).json({ error: 'Category name already exists' });
        }
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// PUT update category (admin only)
router.put('/:id', auth, async (req, res) => {
    try {
        if (!isAdminEmail(req.user.email)) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        const { name, type } = req.body;

        const existing = await prisma.category.findUnique({
            where: { id: parseInt(req.params.id) }
        });

        if (!existing) return res.status(404).json({ error: 'Category not found' });

        const updated = await prisma.category.update({
            where: { id: parseInt(req.params.id) },
            data: {
                ...(name && { name }),
                ...(type && { type })
            }
        });

        res.json(updated);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// DELETE category (admin only)
router.delete('/:id', auth, async (req, res) => {
    try {
        if (!isAdminEmail(req.user.email)) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        const existing = await prisma.category.findUnique({
            where: { id: parseInt(req.params.id) }
        });

        if (!existing) return res.status(404).json({ error: 'Category not found' });

        await prisma.category.delete({
            where: { id: parseInt(req.params.id) }
        });

        res.json({ success: true, message: 'Category deleted' });
    } catch (err) {
        // Handle foreign key constraint — category in use
        if (err.code === 'P2003') {
            return res.status(400).json({ error: 'Category is in use and cannot be deleted' });
        }
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;