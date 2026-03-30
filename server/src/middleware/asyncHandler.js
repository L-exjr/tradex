/**
 * Wraps an async route handler and forwards any thrown error to Express's
 * next(err) — eliminating the try/catch boilerplate from every route.
 *
 * Usage:
 *   router.get('/', asyncHandler(async (req, res) => {
 *       const data = await someAsyncOp();
 *       res.json(data);
 *   }));
 */
const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
