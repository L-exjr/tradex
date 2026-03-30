const express      = require('express');
const router       = express.Router();
const prisma       = require('../prisma');
const auth         = require('../middleware/auth');
const requireAdmin = require('../middleware/requireAdmin');
const asyncHandler = require('../middleware/asyncHandler');
const validate     = require('../middleware/validate');
const { createCategorySchema, updateCategorySchema } = require('../lib/schemas');

// GET /api/categories
router.get('/', asyncHandler(async (req, res) => {
    const categories = await prisma.category.findMany({ orderBy: { name: 'asc' } });
    res.ok(categories);
}));

// GET /api/categories/:id
router.get('/:id', asyncHandler(async (req, res) => {
    const category = await prisma.category.findUnique({ where: { id: parseInt(req.params.id) } });
    if (!category) return res.notFound('Category not found');
    res.ok(category);
}));

// POST /api/categories  (admin only)
router.post('/', auth, requireAdmin, validate(createCategorySchema), asyncHandler(async (req, res) => {
    const { name, type } = req.body;
    try {
        const category = await prisma.category.create({ data: { name, type } });
        res.created(category);
    } catch (err) {
        if (err.code === 'P2002') return res.conflict('Category name already exists');
        throw err;
    }
}));

// PUT /api/categories/:id  (admin only)
router.put('/:id', auth, requireAdmin, validate(updateCategorySchema), asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, type } = req.body;

    const existing = await prisma.category.findUnique({ where: { id } });
    if (!existing) return res.notFound('Category not found');

    const updated = await prisma.category.update({
        where: { id },
        data:  { ...(name && { name }), ...(type && { type }) }
    });
    res.ok(updated);
}));

// DELETE /api/categories/:id  (admin only)
router.delete('/:id', auth, requireAdmin, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);

    const existing = await prisma.category.findUnique({ where: { id } });
    if (!existing) return res.notFound('Category not found');

    try {
        await prisma.category.delete({ where: { id } });
        res.noContent();
    } catch (err) {
        if (err.code === 'P2003') return res.conflict('Category is in use and cannot be deleted');
        throw err;
    }
}));

module.exports = router;
