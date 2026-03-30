const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const { isAdminEmail } = require('../lib/admin');
const { createReportSchema } = require('../lib/schemas');

// GET reports: own reports only, unless ADMIN_EMAILS includes your email
router.get('/', auth, async (req, res) => {
    try {
        const { listingId, postId } = req.query;
        const userId = req.user.userId;
        const admin = isAdminEmail(req.user.email);

        const reports = await prisma.report.findMany({
            where: {
                ...(!admin && { reporterId: userId }),
                ...(listingId && { listingId: parseInt(listingId) }),
                ...(postId && { postId: parseInt(postId) })
            },
            include: {
                reporter: { select: { id: true, name: true, email: true } },
                listing: { select: { id: true, title: true, status: true } },
                post: { select: { id: true, title: true, status: true } }
            },
            orderBy: { createdAt: 'desc' }
        });

        res.json(reports);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET single report (reporter or admin)
router.get('/:id', auth, async (req, res) => {
    try {
        const userId = req.user.userId;
        const admin = isAdminEmail(req.user.email);

        const report = await prisma.report.findUnique({
            where: { id: parseInt(req.params.id) },
            include: {
                reporter: { select: { id: true, name: true, email: true } },
                listing: { select: { id: true, title: true, status: true } },
                post: { select: { id: true, title: true, status: true } }
            }
        });

        if (!report) return res.status(404).json({ error: 'Report not found' });

        if (!admin && report.reporterId !== userId) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        res.json(report);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST submit a report (protected)
router.post('/', auth, validate(createReportSchema), async (req, res) => {
    try {
        const { listingId, postId, reason } = req.body;
        const reporterId = req.user.userId;

        if (!listingId && !postId) {
            return res.status(400).json({ error: 'Either listingId or postId is required' });
        }

        if (listingId && postId) {
            return res.status(400).json({ error: 'Cannot report both a listing and a post at once' });
        }

        if (listingId) {
            const listing = await prisma.listing.findUnique({ where: { id: listingId } });
            if (!listing) return res.status(404).json({ error: 'Listing not found' });
            if (listing.userId === reporterId) {
                return res.status(400).json({ error: 'Cannot report your own listing' });
            }
        }

        if (postId) {
            const post = await prisma.lostFoundPost.findUnique({ where: { id: postId } });
            if (!post) return res.status(404).json({ error: 'Post not found' });
            if (post.userId === reporterId) {
                return res.status(400).json({ error: 'Cannot report your own post' });
            }
        }

        const duplicate = await prisma.report.findFirst({
            where: {
                reporterId,
                ...(listingId && { listingId }),
                ...(postId && { postId })
            }
        });

        if (duplicate) {
            return res.status(400).json({ error: 'You have already reported this' });
        }

        const report = await prisma.report.create({
            data: {
                reporterId,
                reason: reason.trim(),
                ...(listingId && { listingId }),
                ...(postId && { postId })
            },
            include: {
                reporter: { select: { id: true, name: true, email: true } },
                listing: { select: { id: true, title: true } },
                post: { select: { id: true, title: true } }
            }
        });

        res.status(201).json(report);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE report (protected, reporter only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const userId = req.user.userId;
        const reportId = parseInt(req.params.id);

        const report = await prisma.report.findUnique({ where: { id: reportId } });

        if (!report) return res.status(404).json({ error: 'Report not found' });
        if (report.reporterId !== userId) return res.status(403).json({ error: 'Forbidden' });

        await prisma.report.delete({ where: { id: reportId } });

        res.json({ success: true, message: 'Report deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
