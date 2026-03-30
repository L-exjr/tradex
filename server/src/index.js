const dotenv = require('dotenv');
dotenv.config();

const express    = require('express');
const cors       = require('cors');
const helmet     = require('helmet');
const compression = require('compression');
const rateLimit  = require('express-rate-limit');

const app = express();

// ── Security & compression ─────────────────────────────────────────────────────
// helmet sets sensible HTTP security headers (X-Frame-Options, CSP, etc.)
// compression gzip-encodes responses — cuts JSON payload size ~70 %
app.use(helmet());
app.use(compression());

// ── CORS ──────────────────────────────────────────────────────────────────────
// Origins are controlled entirely via the ALLOWED_ORIGINS env var.
// Local dev:  ALLOWED_ORIGINS=http://localhost:5173
// Production: ALLOWED_ORIGINS=https://your-app.vercel.app
//             (comma-separate multiple origins if needed)

const parseAllowedOrigins = () =>
    (process.env.ALLOWED_ORIGINS || 'http://localhost:5173')
        .split(',')
        .map((o) => o.trim())
        .filter(Boolean);

app.use(
    cors({
        origin(origin, callback) {
            const allowed = parseAllowedOrigins();
            // Allow server-to-server / curl calls (no Origin header) in dev only
            if (!origin) {
                if (process.env.NODE_ENV !== 'production') return callback(null, true);
                return callback(new Error('Origin header required in production'));
            }
            if (allowed.includes(origin)) return callback(null, true);
            return callback(new Error(`Origin ${origin} not allowed by CORS`));
        },
        credentials: true
    })
);

app.use(express.json());

// Trust the first proxy hop (required for correct IP in rate limiters on Railway/Render)
app.set('trust proxy', 1);

// ── Rate limiters ─────────────────────────────────────────────────────────────

// Strict: 10 attempts / 15 min per IP — blocks brute-force on auth endpoints
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many attempts, please try again in 15 minutes.' },
});

// Relaxed: 5 per hour — prevents email-flooding on forgot-password
const forgotPasswordLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many password reset requests, please try again in an hour.' },
});

// General backstop: 200 req / 15 min — light protection against scrapers
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

// Health check — Railway and uptime monitors hit this
app.get('/api', (req, res) => {
    res.json({ message: 'TradeX backend is running.', env: process.env.NODE_ENV });
});

// ── Global error handler ──────────────────────────────────────────────────────
// Never leak stack traces in production
app.use((err, req, res, _next) => {
    console.error('[unhandled error]', err);
    const isDev = process.env.NODE_ENV !== 'production';
    res.status(err.status || 500).json({
        error: isDev ? err.message : 'Internal server error',
    });
});

// ── Start ─────────────────────────────────────────────────────────────────────

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => {
    console.log(`[TradeX] Server running on http://${HOST}:${PORT} (${process.env.NODE_ENV || 'development'})`);
});
