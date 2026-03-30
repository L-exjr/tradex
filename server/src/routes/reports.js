const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
const auth = require('../middleware/auth');
const { isAdminEmail } = require('../lib/admin');

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
                reporter: {
                    select: { id: true, name: true, email: true }
                },
                listing: {
                    select: { id: true, title: true, status: true }
                },
                post: {
                    select: { id: true, title: true, status: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        res.json(reports);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
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
                reporter: {
                    select: { id: true, name: true, email: true }
                },
                listing: {
                    select: { id: true, title: true, status: true }
                },
                post: {
                    select: { id: true, title: true, status: true }
                }
            }
        });

        if (!report) return res.status(404).json({ error: 'Report not found' });

        if (!admin && report.reporterId !== userId) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        res.json(report);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// POST submit a report (protected)
router.post('/', auth, async (req, res) => {
    try {
        const { listingId, postId, reason } = req.body;
        const reporterId = req.user.userId;

        // Must report either a listing or a post, not both or neither
        if (!listingId && !postId) {
            return res.status(400).json({ error: 'Either listingId or postId is required' });
        }

        if (listingId && postId) {
            return res.status(400).json({ error: 'Cannot report both a listing and a post at once' });
        }

        if (!reason || reason.trim().length === 0) {
            return res.status(400).json({ error: 'reason is required' });
        }

        // Check target exists
        if (listingId) {
            const listing = await prisma.listing.findUnique({
                where: { id: parseInt(listingId) }
            });
            if (!listing) return res.status(404).json({ error: 'Listing not found' });

            // Prevent reporting your own listing
            if (listing.userId === reporterId) {
                return res.status(400).json({ error: 'Cannot report your own listing' });
            }
        }

        if (postId) {
            const post = await prisma.lostFoundPost.findUnique({
                where: { id: parseInt(postId) }
            });
            if (!post) return res.status(404).json({ error: 'Post not found' });

            // Prevent reporting your own post
            if (post.userId === reporterId) {
                return res.status(400).json({ error: 'Cannot report your own post' });
            }
        }

        // Prevent duplicate reports from same user
        const duplicate = await prisma.report.findFirst({
            where: {
                reporterId,
                ...(listingId && { listingId: parseInt(listingId) }),
                ...(postId && { postId: parseInt(postId) })
            }
        });

        if (duplicate) {
            return res.status(400).json({ error: 'You have already reported this' });
        }

        const report = await prisma.report.create({
            data: {
                reporterId,
                reason: reason.trim(),
                ...(listingId && { listingId: parseInt(listingId) }),
                ...(postId && { postId: parseInt(postId) })
            },
            include: {
                reporter: {
                    select: { id: true, name: true, email: true }
                },
                listing: {
                    select: { id: true, title: true }
                },
                post: {
                    select: { id: true, title: true }
                }
            }
        });

        res.status(201).json(report);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// DELETE report (protected, reporter only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const userId = req.user.userId;
        const reportId = parseInt(req.params.id);

        const report = await prisma.report.findUnique({
            where: { id: reportId }
        });

        if (!report) return res.status(404).json({ error: 'Report not found' });
        if (report.reporterId !== userId) return res.status(403).json({ error: 'Forbidden' });

        await prisma.report.delete({
            where: { id: reportId }
        });

        res.json({ success: true, message: 'Report deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;