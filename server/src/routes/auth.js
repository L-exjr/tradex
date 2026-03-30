const auth = require('../middleware/auth');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../prisma');
const supabase = require('../supabase');
const multer = require('multer');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

const uploadAvatar = multer({ storage: multer.memoryStorage() });
const router = express.Router();

// Register account
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, studentId } = req.body;

        if(!email.toLowerCase().endsWith('@st.knust.edu.gh')) {
            return res.status(400).json({ error: 'Only KNUST emails are allowed' });
        }

        // Check for existing user
        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                passwordHash,
                studentId: studentId || null
            }
        });

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.status(201).json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                studentId: user.studentId
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const valid = await bcrypt.compare(password, user.passwordHash);
        if (!valid) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                studentId: user.studentId
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});



// Get current user
router.get('/me', require('../middleware/auth'), async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.userId },
            select: {
                id: true,
                name: true,
                email: true,
                studentId: true,
                avatarUrl: true,
                createdAt: true
            }
        });

        if (!user) return res.status(404).json({ error: 'User not found' });

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Forgot password
router.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) return res.status(400).json({ error: 'Email is required' });

        if (!email.toLowerCase().endsWith('@st.knust.edu.gh')) {
            return res.status(400).json({ error: 'Only KNUST student emails are allowed' });
        }

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.json({ success: true, message: "If that email exists, a reset link has been sent" });
        }

        const token = crypto.randomBytes(32).toString('hex');
        const expiry = new Date(Date.now() + 1000 * 60 * 60);

        await prisma.user.update({
            where: { email },
            data: {
                resetToken: token,
                resetTokenExpiry: expiry
            }
        });

        const clientOrigin = (
            process.env.CLIENT_ORIGIN ||
            process.env.PUBLIC_APP_URL ||
            'http://localhost:5173'
        ).replace(/\/$/, '');
        const resetUrl = `${clientOrigin}/reset-password?token=${token}`;

        await transporter.sendMail({
            from: `"TradeX" <${process.env.EMAIL_USER}>` ,
            to: email,
            subject: 'Reset your TradeX password',
            html: `
                    <p>Hi ${user.name},</p>
                    <p>Click the link below to reset your password. This link expires in 1 hour.</p>
                    <a href="${resetUrl}">${resetUrl}</a>
                    <p>If you didn't request this, ignore this email.</p>
                `
        });

        res.json({ success: true, message: 'If that email exists, a reset link has been sent' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Reset password
router.post('/reset-password', async (req, res) => {
    try {
        const { token, password }= req.body;

        if (!token || !password) {
            return res.status(400).json({ error: 'Token and password are required' });
        }

        const user = await prisma.user.findFirst({
            where: {
                resetToken: token,
                resetTokenExpiry: { gt: new Date() }
            }
        });

        if (!user) {
            return res.status(400).json({ error: 'Invalid or expired reset token' });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        await prisma.user.update({
            where: { id: user.id },
            data: {
                passwordHash,
                resetToken: null,
                resetTokenExpiry: null
            }
        });

        res.json({ success: true, message: 'Password updated successfully' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.put('/me', auth, uploadAvatar.single('avatar'), async (req, res) => {
    try {
        const { name, studentId } = req.body;
        const file = req.file;
        let avatarUrl;

        if (file) {
            const fileName = `avatars/${req.user.userId}-${Date.now()}`;
            const { error } = await supabase.storage.from('item-images').upload(fileName, file.buffer, {
                contentType: file.mimetype,
                upsert: true
            });
            if (error) throw error;
            const { data } = supabase.storage.from('item-images').getPublicUrl(fileName);
            avatarUrl = data.publicUrl;
        }

        const user = await prisma.user.update({
            where: { id: req.user.userId },
            data: {
                ...(name && { name }),
                ...(studentId !== undefined && { studentId }),
                ...(avatarUrl && { avatarUrl })
            },
            select: {
                id: true,
                name: true,
                email: true,
                studentId: true,
                avatarUrl: true,
                createdAt: true
            }
        });
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message })
    }
});

module.exports = router;