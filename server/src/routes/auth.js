const express      = require('express');
const bcrypt       = require('bcryptjs');
const jwt          = require('jsonwebtoken');
const crypto       = require('crypto');
const multer       = require('multer');
const nodemailer   = require('nodemailer');
const prisma       = require('../prisma');
const supabase     = require('../supabase');
const auth         = require('../middleware/auth');
const asyncHandler = require('../middleware/asyncHandler');
const validate     = require('../middleware/validate');
const log          = require('../lib/logger');
const { assertImageMime } = require('../lib/uploadImages');
const {
    registerSchema,
    loginSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    updateProfileSchema,
} = require('../lib/schemas');

const router       = express.Router();
const uploadAvatar = multer({
    storage: multer.memoryStorage(),
    limits:  { fileSize: 2 * 1024 * 1024 }
});

const transporter =
    process.env.EMAIL_USER && process.env.EMAIL_PASS
        ? nodemailer.createTransport({
              service: 'gmail',
              auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
          })
        : null;

function signToken(user) {
    return jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
}

function publicUser(user) {
    return { id: user.id, name: user.name, email: user.email, studentId: user.studentId };
}

// GET /api/auth/public-config
router.get('/public-config', (_req, res) => {
    res.ok({ forgotPasswordEmailEnabled: !!transporter });
});

// POST /api/auth/register
router.post('/register', validate(registerSchema), asyncHandler(async (req, res) => {
    const { name, email, password, studentId } = req.body;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.conflict('Email already in use');

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: { name, email, passwordHash, studentId: studentId || null }
    });

    log.info('User registered', { userId: user.id, email });
    res.created({ token: signToken(user), user: publicUser(user) });
}));

// POST /api/auth/login
router.post('/login', validate(loginSchema), asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user  = await prisma.user.findUnique({ where: { email } });
    const valid = user && await bcrypt.compare(password, user.passwordHash);

    if (!valid) {
        log.warn('Failed login attempt', { email });
        return res.unauthorized('Invalid credentials');
    }

    log.info('User logged in', { userId: user.id });
    res.ok({ token: signToken(user), user: publicUser(user) });
}));

// GET /api/auth/me
router.get('/me', auth, asyncHandler(async (req, res) => {
    const user = await prisma.user.findUnique({
        where:  { id: req.user.userId },
        select: { id: true, name: true, email: true, studentId: true, avatarUrl: true, createdAt: true }
    });
    if (!user) return res.notFound('User not found');
    res.ok(user);
}));

// POST /api/auth/forgot-password
router.post('/forgot-password', validate(forgotPasswordSchema), asyncHandler(async (req, res) => {
    const { email } = req.body;
    const SAFE = { success: true, message: 'If that email exists, a reset link has been sent' };

    if (!transporter) return res.ok(SAFE);

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.ok(SAFE);

    const token  = crypto.randomBytes(32).toString('hex');
    const expiry = new Date(Date.now() + 60 * 60 * 1000);

    await prisma.user.update({ where: { email }, data: { resetToken: token, resetTokenExpiry: expiry } });

    const base     = (process.env.CLIENT_ORIGIN || 'http://localhost:5173').replace(/\/$/, '');
    const resetUrl = `${base}/reset-password?token=${token}`;

    await transporter.sendMail({
        from:    `"TradeX" <${process.env.EMAIL_USER}>`,
        to:      email,
        subject: 'Reset your TradeX password',
        html: `
            <p>Hi ${user.name},</p>
            <p>Click the link below to reset your password. It expires in 1 hour.</p>
            <a href="${resetUrl}">${resetUrl}</a>
            <p>If you didn't request this, ignore this email.</p>
        `
    });

    log.info('Password reset email sent', { email });
    res.ok(SAFE);
}));

// POST /api/auth/reset-password
router.post('/reset-password', validate(resetPasswordSchema), asyncHandler(async (req, res) => {
    const { token, password } = req.body;

    const user = await prisma.user.findFirst({
        where: { resetToken: token, resetTokenExpiry: { gt: new Date() } }
    });
    if (!user) return res.badRequest('Invalid or expired reset token');

    await prisma.user.update({
        where: { id: user.id },
        data: {
            passwordHash:     await bcrypt.hash(password, 10),
            resetToken:       null,
            resetTokenExpiry: null
        }
    });

    log.info('Password reset completed', { userId: user.id });
    res.ok({ success: true, message: 'Password updated successfully' });
}));

// PUT /api/auth/me — update profile + optional avatar upload
router.put('/me', auth, uploadAvatar.single('avatar'), validate(updateProfileSchema), asyncHandler(async (req, res) => {
    const { name, studentId } = req.body;
    let avatarUrl, avatarPath;

    if (req.file) {
        assertImageMime(req.file);

        const safeName = req.file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
        const fileName = `avatars/${req.user.userId}-${Date.now()}-${safeName}`;

        const { error } = await supabase.storage
            .from('item-images')
            .upload(fileName, req.file.buffer, { contentType: req.file.mimetype, upsert: true });
        if (error) throw error;

        const { data } = supabase.storage.from('item-images').getPublicUrl(fileName);
        avatarUrl  = data.publicUrl;
        avatarPath = fileName; // <-- save path for deletion later
        log.info('Avatar uploaded', { userId: req.user.userId });
    }

    const user = await prisma.user.update({
        where: { id: req.user.userId },
        data: {
            ...(name && { name }),
            ...(studentId !== undefined && { studentId }),
            ...(avatarUrl && { avatarUrl }),
            ...(avatarPath && { avatarPath })
        },
        select: { id: true, name: true, email: true, studentId: true, avatarUrl: true, createdAt: true }
    });

    res.ok(user);
}));

// DELETE /api/auth/me/avatar — remove profile photo (sets avatarUrl to null + delete storage)
router.delete('/me/avatar', auth, asyncHandler(async (req, res) => {
    // Fetch the user first to get the avatarPath
    const userRecord = await prisma.user.findUnique({
        where: { id: req.user.userId },
        select: { avatarUrl: true, avatarPath: true }
    });

    if (userRecord?.avatarPath) {
        // Delete from Supabase storage
        const { error } = await supabase.storage
            .from('item-images')
            .remove([userRecord.avatarPath]);
        if (error) {
            console.error('Supabase avatar deletion error:', error);
        }
    }

    // Remove avatar from DB
    const user = await prisma.user.update({
        where: { id: req.user.userId },
        data: { avatarUrl: null, avatarPath: null },
        select: { id: true, name: true, email: true, studentId: true, avatarUrl: true, createdAt: true }
    });

    log.info('Avatar removed', { userId: req.user.userId });
    res.ok(user);
}));

module.exports = router;
