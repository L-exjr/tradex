/**
 * Minimal structured logger — no dependencies, no config files.
 *
 * Uses console under the hood but formats every line as JSON so Railway /
 * Vercel log drains (Papertrail, Datadog, etc.) can parse them later
 * without any changes to this file.
 *
 * Log levels:
 *   log.info(msg, meta?)   – normal events  (hidden in test env)
 *   log.warn(msg, meta?)   – recoverable issues
 *   log.error(msg, meta?)  – errors (always shown)
 *   log.http(msg, meta?)   – request/response lines (hidden in production)
 *
 * Usage:
 *   const log = require('./logger');
 *   log.info('Server started', { port: 8000 });
 *   log.error('DB query failed', { err: err.message });
 */

const IS_PROD = process.env.NODE_ENV === 'production';
const IS_TEST = process.env.NODE_ENV === 'test';

function write(level, msg, meta = {}) {
    const entry = {
        time:  new Date().toISOString(),
        level,
        msg,
        ...(Object.keys(meta).length ? { meta } : {})
    };
    const line = JSON.stringify(entry);
    if (level === 'error' || level === 'warn') {
        console.error(line);
    } else {
        console.log(line);
    }
}

const log = {
    info:  (msg, meta) => { if (!IS_TEST)              write('info',  msg, meta); },
    warn:  (msg, meta) => {                             write('warn',  msg, meta); },
    error: (msg, meta) => {                             write('error', msg, meta); },
    // HTTP-level noise: visible in dev, hidden in production log streams
    http:  (msg, meta) => { if (!IS_PROD && !IS_TEST)  write('http',  msg, meta); },
};

module.exports = log;
