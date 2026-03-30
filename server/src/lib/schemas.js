const { z } = require('zod');

const KNUST_EMAIL = z
    .string()
    .email('Invalid email address')
    .refine((e) => e.toLowerCase().endsWith('@st.knust.edu.gh'), {
        message: 'Only KNUST student emails are allowed (@st.knust.edu.gh)',
    });

// ── Auth ─────────────────────────────────────────────────────────────────────

const registerSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(80),
    email: KNUST_EMAIL,
    password: z.string().min(8, 'Password must be at least 8 characters').max(128),
    studentId: z.string().max(20).optional(),
});

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
});

const forgotPasswordSchema = z.object({
    email: KNUST_EMAIL,
});

const resetPasswordSchema = z.object({
    token: z.string().min(1, 'Token is required'),
    password: z.string().min(8, 'Password must be at least 8 characters').max(128),
});

const updateProfileSchema = z.object({
    name: z.string().min(2).max(80).optional(),
    studentId: z.string().max(20).optional().nullable(),
});

// ── Listings ─────────────────────────────────────────────────────────────────

const createListingSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters').max(120),
    description: z.string().min(10, 'Description must be at least 10 characters').max(2000),
    price: z.coerce.number().positive('Price must be a positive number').max(100000),
    categoryId: z.coerce.number().int().positive('categoryId must be a positive integer'),
    pickupLocation: z.string().max(200).optional(),
});

const updateListingSchema = z.object({
    title: z.string().min(3).max(120).optional(),
    description: z.string().min(10).max(2000).optional(),
    price: z.coerce.number().positive().max(100000).optional(),
    categoryId: z.coerce.number().int().positive().optional(),
    status: z.enum(['active', 'sold', 'deleted']).optional(),
    pickupLocation: z.string().max(200).optional().nullable(),
});

// ── Lost & Found ──────────────────────────────────────────────────────────────

const createLostFoundSchema = z.object({
    title: z.string().min(3).max(120),
    description: z.string().min(10).max(2000),
    categoryId: z.coerce.number().int().positive(),
    type: z.enum(['lost', 'found']),
    locationText: z.string().min(2).max(200),
    dateLostFound: z.string().refine((d) => !isNaN(Date.parse(d)), {
        message: 'dateLostFound must be a valid date string',
    }),
});

const updateLostFoundSchema = z.object({
    title: z.string().min(3).max(120).optional(),
    description: z.string().min(10).max(2000).optional(),
    categoryId: z.coerce.number().int().positive().optional(),
    locationText: z.string().min(2).max(200).optional(),
    dateLostFound: z
        .string()
        .refine((d) => !isNaN(Date.parse(d)), { message: 'Invalid date' })
        .optional(),
    status: z.enum(['open', 'resolved']).optional(),
});

// ── Messages ──────────────────────────────────────────────────────────────────

const sendMessageSchema = z.object({
    receiverId: z.string().uuid('receiverId must be a valid UUID'),
    content: z.string().min(1, 'Message cannot be empty').max(2000),
});

// ── Transactions ──────────────────────────────────────────────────────────────

const createTransactionSchema = z.object({
    listingId: z.coerce.number().int().positive('listingId must be a positive integer'),
});

const updateTransactionSchema = z.object({
    status: z.enum(['pending', 'completed', 'cancelled'], {
        errorMap: () => ({ message: "status must be 'pending', 'completed', or 'cancelled'" }),
    }),
});

// ── Reports ───────────────────────────────────────────────────────────────────

const createReportSchema = z.object({
    listingId: z.coerce.number().int().positive().optional(),
    postId: z.coerce.number().int().positive().optional(),
    reason: z.string().min(5, 'Please provide a reason (min 5 characters)').max(500),
});

// ── Categories ────────────────────────────────────────────────────────────────

const createCategorySchema = z.object({
    name: z.string().min(2).max(60),
    type: z.string().min(2).max(40),
});

const updateCategorySchema = z.object({
    name: z.string().min(2).max(60).optional(),
    type: z.string().min(2).max(40).optional(),
});

module.exports = {
    registerSchema,
    loginSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    updateProfileSchema,
    createListingSchema,
    updateListingSchema,
    createLostFoundSchema,
    updateLostFoundSchema,
    sendMessageSchema,
    createTransactionSchema,
    updateTransactionSchema,
    createReportSchema,
    createCategorySchema,
    updateCategorySchema,
};
