/**
 * Shared image-upload helper used by listings, lostfound, and auth routes.
 *
 * Security:
 *  - MIME type validated against an explicit allowlist BEFORE any Supabase call
 *  - All files are checked before any upload begins (fail-fast, no partial uploads)
 *  - Original filenames sanitised to prevent path traversal
 *  - Per-file size limit (5 MB) enforced at the multer level in each route
 *
 * Exports:
 *  - uploadImages(files, folder, assoc)  — main upload function
 *  - ALLOWED_MIMES                       — import this in auth.js to avoid duplication
 *  - assertImageMime(file)               — call directly for single-file validation
 */

const supabase = require('../supabase');
const prisma   = require('../prisma');

/**
 * Canonical MIME allowlist.
 * Note: both 'image/jpg' and 'image/jpeg' are included because some browsers
 * and mobile clients send 'image/jpg' even though the spec says 'image/jpeg'.
 */
const ALLOWED_MIMES = [
    'image/jpeg',
    'image/jpg',   // non-standard but seen in the wild
    'image/png',
    'image/webp',
    'image/gif',
];

/**
 * Throws a 400-typed error if the file MIME is not in the allowlist.
 * Exported so single-file upload paths (avatar) can reuse the same check.
 */
function assertImageMime(file) {
    if (!ALLOWED_MIMES.includes(file.mimetype)) {
        const err  = new Error(
            `Invalid file type "${file.mimetype}". Only JPEG, PNG, WebP, and GIF images are allowed.`
        );
        err.status = 400;
        err.code   = 'INVALID_FILE_TYPE';
        throw err;
    }
}

/**
 * Upload an array of multer files to Supabase storage and create the
 * corresponding Prisma Image records.
 *
 * @param {Express.Multer.File[]} files   — req.files from multer
 * @param {string}               folder  — storage path prefix: 'listings' | 'lostfound'
 * @param {object}               assoc   — Prisma relation: { listingId } or { postId }
 */
async function uploadImages(files, folder, assoc) {
    // Validate every file BEFORE uploading any — no partial state on failure
    for (const file of files) {
        assertImageMime(file);
    }

    for (const file of files) {
        // Sanitise filename to prevent path traversal or storage collisions
        const safeName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
        const fileName = `${folder}/${Date.now()}-${safeName}`;

        const { error } = await supabase
            .storage
            .from('item-images')
            .upload(fileName, file.buffer, { contentType: file.mimetype, upsert: true });

        if (error) throw error;

        const { data } = supabase.storage.from('item-images').getPublicUrl(fileName);
        await prisma.image.create({ data: { url: data.publicUrl, ...assoc } });
    }
}

module.exports = uploadImages;
module.exports.ALLOWED_MIMES   = ALLOWED_MIMES;
module.exports.assertImageMime = assertImageMime;
