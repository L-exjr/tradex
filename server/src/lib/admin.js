/** Comma-separated list in ADMIN_EMAILS (lowercase match). Parsed once at startup. */
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

function isAdminEmail(email) {
    if (!email) return false;
    return ADMIN_EMAILS.includes(String(email).toLowerCase());
}

module.exports = { isAdminEmail };
