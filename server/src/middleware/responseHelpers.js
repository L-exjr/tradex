/**
 * Tiny response helpers — enforces a consistent envelope across every route.
 *
 * Success shape  → the resource itself (no extra wrapper needed for GETs)
 * Created shape  → res.created(data)   → 201 + data
 * Error shape    → { error: string, errors?: [{field, message}] }
 * No-content     → res.noContent()     → 204 (for DELETEs)
 *
 * These are attached directly to the Express response object so every route
 * can call res.ok(data) / res.created(data) / res.noContent() without
 * importing anything.
 *
 * Usage (in index.js, before routes):
 *   app.use(require('./middleware/responseHelpers'));
 */
module.exports = function responseHelpers(_req, res, next) {
    /** 200 OK with a JSON body. */
    res.ok = function (data) {
        return this.status(200).json(data);
    };

    /** 201 Created with a JSON body. */
    res.created = function (data) {
        return this.status(201).json(data);
    };

    /** 204 No Content — used for successful DELETEs. */
    res.noContent = function () {
        return this.status(204).end();
    };

    /** 400 Bad Request. */
    res.badRequest = function (message, errors) {
        const body = { error: message || 'Bad request' };
        if (errors) body.errors = errors;
        return this.status(400).json(body);
    };

    /** 401 Unauthorized. */
    res.unauthorized = function (message) {
        return this.status(401).json({ error: message || 'Unauthorized' });
    };

    /** 403 Forbidden. */
    res.forbidden = function (message) {
        return this.status(403).json({ error: message || 'Forbidden' });
    };

    /** 404 Not Found. */
    res.notFound = function (message) {
        return this.status(404).json({ error: message || 'Not found' });
    };

    /** 409 Conflict. */
    res.conflict = function (message) {
        return this.status(409).json({ error: message || 'Conflict' });
    };

    next();
};
