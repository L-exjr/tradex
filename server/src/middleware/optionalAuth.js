const jwt = require('jsonwebtoken');

/** Sets req.user when a valid Bearer token is present; otherwise leaves req.user unset. */
module.exports = function optionalAuth(req, res, next) {
    req.user = undefined;
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next();
    }
    const token = authHeader.split(' ')[1];
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
    } catch (_) {
        // invalid token — treat as anonymous for public read
    }
    next();
};
