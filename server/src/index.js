const dotenv = require('dotenv');
dotenv.config();

const express     = require('express');
const cors        = require('cors');
const helmet      = require('helmet');
const compression = require('compression');
const rateLimit   = require('express-rate-limit');
const multer      = require('multer');

const log             = require('./lib/logger');
const responseHelpers = require('./middleware/responseHelpers');

const app = express();

// ── Security & compression ────────────────────────────────────────────────────
app.use(helmet());
app.use(compression());

// ── CORS ──────────────────────────────────────────────────────────────────────
const parseAllowedOrigins = () =>
    (process.env.ALLOWED_ORIGINS || 'http://localhost:5173')
        .split(',')
        .map((o) => o.trim())
        .filter(Boolean);

app.use(
    cors({
        origin(origin, callback) {
            // No Origin header = server-to-server request (Railway healthcheck,
            // curl, Prisma probes, etc.) — always allow.
            if (!origin) return callback(null, true);

            const allowed = parseAllowedOrigins();
            if (allowed.includes(origin)) return callback(null, true);
            return callback(new Error(`Origin ${origin} not allowed by CORS`));
        },
        credentials: true
    })
);

app.use(express.json());
app.set('trust proxy', 1);

// ── Consistent response helpers on every res object ───────────────────────────
app.use(responseHelpers);

// ── HTTP request logger ───────────────────────────────────────────────────────
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        log.http(`${req.method} ${req.path}`, {
            status: res.statusCode,
            ms:     Date.now() - start,
            ip:     req.ip,
        });
    });
    next();
});

// ── Rate limiters ─────────────────────────────────────────────────────────────
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many attempts, please try again in 15 minutes.' },
});

const forgotPasswordLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many password reset requests, please try again in an hour.' },
});

const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests, please slow down.' },
});

app.use('/api', generalLimiter);

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/auth/login',           authLimiter);
app.use('/api/auth/register',        authLimiter);
app.use('/api/auth/forgot-password', forgotPasswordLimiter);

app.use('/api/auth',         require('./routes/auth'));
app.use('/api/listings',     require('./routes/listings'));
app.use('/api/categories',   require('./routes/categories'));
app.use('/api/lostfound',    require('./routes/lostfound'));
app.use('/api/messages',     require('./routes/messages'));
app.use('/api/transactions', require('./routes/transactions'));
app.use('/api/reports',      require('./routes/reports'));
app.use('/api/saved',        require('./routes/saved'));

// Health check
app.get('/api', (_req, res) => {
    res.json({ ok: true, env: process.env.NODE_ENV || 'development' });
});

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, req, res, _next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE')      return res.status(400).json({ error: 'File too large. Maximum size is 5 MB per image.' });
        if (err.code === 'LIMIT_UNEXPECTED_FILE') return res.status(400).json({ error: 'Unexpected file field in upload.' });
        return res.status(400).json({ error: err.message });
    }

    if (err.status && err.status < 500) {
        return res.status(err.status).json({ error: err.message });
    }

    log.error('Unhandled error', {
        method:  req.method,
        path:    req.path,
        message: err.message,
        stack:   process.env.NODE_ENV !== 'production' ? err.stack : undefined,
    });

    const isDev = process.env.NODE_ENV !== 'production';
    res.status(500).json({ error: isDev ? err.message : 'Internal server error' });
});

// ── Start ─────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
    log.info('Server started', {
        host:    HOST,
        port:    PORT,
        env:     process.env.NODE_ENV || 'development',
        origins: parseAllowedOrigins(),
    });
});
