/**
 * Seed script — populates categories for TradeX.
 * Safe to run multiple times: existing rows are detected and skipped.
 *
 * Category types:
 *   'listing'   → Marketplace + List New Item only
 *   'lostfound' → Lost & Found only
 *   'both'      → appears in BOTH contexts
 *
 * Usage:
 *   cd server && npm run seed
 *   DATABASE_URL="<DIRECT_URL>" npm run seed   ← for production DB
 *   railway run npm run seed
 */

'use strict';

try { require('dotenv').config(); } catch (_) {}

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
// Use type:'both' for any category that should appear in BOTH the Marketplace
// and Lost & Found dropdowns. The frontend filters on  type === 'listing' || 'both'
// and type === 'lostfound' || 'both'  respectively.

const CATEGORIES = [
    // Listing-only
    { name: 'Textbooks & Notes',    type: 'listing' },
    { name: 'Furniture & Appliances', type: 'listing' },
    { name: 'Musical Instruments',  type: 'listing' },
    { name: 'Art & Crafts',         type: 'listing' },
    { name: 'Food & Groceries',     type: 'listing' },
    { name: 'Services',             type: 'listing' },
    { name: 'Stationery',           type: 'listing' },

    // Lost & Found-only
    { name: 'ID & Documents',       type: 'lostfound' },
    { name: 'Bags & Luggage',       type: 'lostfound' },
    { name: 'Keys',                 type: 'lostfound' },
    { name: 'Books & Stationery',   type: 'lostfound' },
    { name: 'Glasses & Eyewear',    type: 'lostfound' },
    { name: 'Jewellery & Watches',  type: 'lostfound' },

    // Both — appear in Marketplace AND Lost & Found
    { name: 'Electronics',          type: 'both' },
    { name: 'Clothing & Accessories', type: 'both' },
    { name: 'Sports & Fitness',     type: 'both' },
    { name: 'Sports Equipment',     type: 'both' },
    { name: 'Other',                type: 'both' },
];

async function main() {
    console.log('🌱 Seeding categories...\n');

    let created = 0;
    let updated = 0;
    let skipped = 0;

    for (const cat of CATEGORIES) {
        const existing = await prisma.category.findUnique({ where: { name: cat.name } });

        if (!existing) {
            await prisma.category.create({ data: cat });
            console.log(`  ✓  created  [${cat.type.padEnd(9)}]  ${cat.name}`);
            created++;
        } else if (existing.type !== cat.type) {
            // Fix any rows that have the wrong type (e.g. 'listing' that should be 'both')
            await prisma.category.update({ where: { name: cat.name }, data: { type: cat.type } });
            console.log(`  ↑  updated  [${existing.type} → ${cat.type}]  ${cat.name}`);
            updated++;
        } else {
            console.log(`  –  exists   [${cat.type.padEnd(9)}]  ${cat.name}`);
            skipped++;
        }
    }

    console.log(`\n✅ Done — ${created} created, ${updated} updated, ${skipped} already correct.`);
}

main()
    .catch((err) => {
        console.error('\n❌ Seed failed:', err.message);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
