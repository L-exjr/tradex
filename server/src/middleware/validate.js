const { ZodError } = require('zod');

/**
 * Returns an Express middleware that validates req.body against a Zod schema.
 * On failure it responds 400 with a flat array of field errors.
 * On success it replaces req.body with the parsed (coerced + stripped) value.
 *
 * Usage:
 *   router.post('/register', validate(registerSchema), async (req, res) => { ... })
 */
function validate(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const errors = result.error.errors.map((e) => ({
                field: e.path.join('.'),
                message: e.message,
            }));
            return res.status(400).json({ error: 'Validation failed', errors });
        }
        req.body = result.data;
        next();
    };
}

module.exports = validate;
