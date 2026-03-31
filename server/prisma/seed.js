/**
 * Seed script — populates categories for TradeX.
 * Safe to run multiple times: existing rows are detected and skipped.
 *
 * Usage:
 *   cd server && npm run seed
 *
 * For production DB, use the direct connection string (not pgBouncer):
 *   DATABASE_URL="<DIRECT_URL value>" npm run seed
 *   — or —
 *   railway run npm run seed
 */

'use strict';

// Load .env when running locally. Silently ignored if the file doesn't exist.
try { require('dotenv').config(); } catch (_) {}

// The generated client lives at src/generated/prisma relative to the server root.
// This script lives at prisma/seed.js — one level deeper — so the path is ../src/...
const { PrismaClient } = require('../src/generated/prisma');
const { PrismaPg }     = require('@prisma/adapter-pg');

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) {
    console.error('ERROR: Neither DIRECT_URL nor DATABASE_URL is set.');
    process.exit(1);
}

const adapter = new PrismaPg({ connectionString });
const prisma  = new PrismaClient({ adapter });

// ── Category definitions ──────────────────────────────────────────────────────
// type: 'listing'   → Marketplace filter bar + List New Item dropdown
// type: 'lostfound' → Report Lost/Found Item dropdown

const LISTING_CATEGORIES = [
    'Textbooks & Notes',
    'Electronics',
    'Clothing & Accessories',
    'Furniture & Appliances',
    'Sports & Fitness',
    'Musical Instruments',
    'Art & Crafts',
    'Food & Groceries',
    'Services',
    'Other',
];

const LOSTFOUND_CATEGORIES = [
    'Electronics',
    'ID & Documents',
    'Clothing & Accessories',
    'Bags & Luggage',
    'Keys',
    'Books & Stationery',
    'Jewellery & Watches',
    'Sports Equipment',
    'Other',
];

async function main() {
    console.log('🌱 Seeding categories...\n');

    const all = [
        ...LISTING_CATEGORIES.map(name  => ({ name, type: 'listing' })),
        ...LOSTFOUND_CATEGORIES.map(name => ({ name, type: 'lostfound' })),
    ];

    let created = 0;
    let skipped = 0;

    for (const cat of all) {
        const existing = await prisma.category.findUnique({ where: { name: cat.name } });

        if (existing) {
            console.log(`  –  exists   [${cat.type.padEnd(9)}]  ${cat.name}`);
            skipped++;
        } else {
            await prisma.category.create({ data: cat });
            console.log(`  ✓  created  [${cat.type.padEnd(9)}]  ${cat.name}`);
            created++;
        }
    }

    console.log(`\n✅ Done — ${created} created, ${skipped} already existed.`);
}

main()
    .catch((err) => {
        console.error('\n❌ Seed failed:', err.message);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
