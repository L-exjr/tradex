const { isAdminEmail } = require('../lib/admin');

/**
 * Express middleware that allows only admin emails (from ADMIN_EMAILS env var).
 * Must be placed after the `auth` middleware so req.user is populated.
 *
 * Usage:
 *   router.post('/', auth, requireAdmin, asyncHandler(async (req, res) => { ... }))
 */
module.exports = function requireAdmin(req, res, next) {
    if (!isAdminEmail(req.user?.email)) {
        return res.status(403).json({ error: 'Forbidden' });
    }
    next();
};
