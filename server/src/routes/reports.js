const express      = require('express');
const router       = express.Router();
const prisma       = require('../prisma');
const auth         = require('../middleware/auth');
const asyncHandler = require('../middleware/asyncHandler');
const validate     = require('../middleware/validate');
const log          = require('../lib/logger');
const { isAdminEmail } = require('../lib/admin');
const { createReportSchema } = require('../lib/schemas');

const REPORT_INCLUDE = {
    reporter: { select: { id: true, name: true, email: true } },
    listing:  { select: { id: true, title: true, status: true } },
    post:     { select: { id: true, title: true, status: true } }
};

// GET /api/reports
router.get('/', auth, asyncHandler(async (req, res) => {
    const { listingId, postId } = req.query;
    const userId = req.user.userId;
    const admin  = isAdminEmail(req.user.email);

    const reports = await prisma.report.findMany({
        where: {
            ...(!admin && { reporterId: userId }),
            ...(listingId && { listingId: parseInt(listingId) }),
            ...(postId    && { postId:    parseInt(postId) })
        },
        include: REPORT_INCLUDE,
        orderBy: { createdAt: 'desc' }
    });

    res.ok(reports);
}));

// GET /api/reports/:id
router.get('/:id', auth, asyncHandler(async (req, res) => {
    const userId = req.user.userId;
    const admin  = isAdminEmail(req.user.email);

    const report = await prisma.report.findUnique({
        where:   { id: parseInt(req.params.id) },
        include: REPORT_INCLUDE
    });

    if (!report) return res.notFound('Report not found');
    if (!admin && report.reporterId !== userId) return res.forbidden();

    res.ok(report);
}));

// POST /api/reports
router.post('/', auth, validate(createReportSchema), asyncHandler(async (req, res) => {
    const { listingId, postId, reason } = req.body;
    const reporterId = req.user.userId;

    if (!listingId && !postId)    return res.badRequest('Either listingId or postId is required');
    if (listingId  && postId)     return res.badRequest('Cannot report both a listing and a post at once');

    if (listingId) {
        const listing = await prisma.listing.findUnique({ where: { id: listingId } });
        if (!listing)                    return res.notFound('Listing not found');
        if (listing.userId === reporterId) return res.badRequest('Cannot report your own listing');
    }

    if (postId) {
        const post = await prisma.lostFoundPost.findUnique({ where: { id: postId } });
        if (!post)                        return res.notFound('Post not found');
        if (post.userId === reporterId)   return res.badRequest('Cannot report your own post');
    }

    const duplicate = await prisma.report.findFirst({
        where: { reporterId, ...(listingId && { listingId }), ...(postId && { postId }) }
    });
    if (duplicate) return res.conflict('You have already reported this');

    const report = await prisma.report.create({
        data: {
            reporterId,
            reason: reason.trim(),
            ...(listingId && { listingId }),
            ...(postId    && { postId })
        },
        include: REPORT_INCLUDE
    });

    log.info('Report submitted', { reportId: report.id, reporterId, listingId, postId });
    res.created(report);
}));

// DELETE /api/reports/:id  (reporter only)
router.delete('/:id', auth, asyncHandler(async (req, res) => {
    const userId   = req.user.userId;
    const reportId = parseInt(req.params.id);

    const report = await prisma.report.findUnique({ where: { id: reportId } });
    if (!report)                        return res.notFound('Report not found');
    if (report.reporterId !== userId)   return res.forbidden();

    await prisma.report.delete({ where: { id: reportId } });
    res.noContent();
}));

module.exports = router;
