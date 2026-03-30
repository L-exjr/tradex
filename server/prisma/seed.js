const { PrismaClient } = require('../src/generated/prisma');
const { PrismaPg } = require('@prisma/adapter-pg');
require('dotenv').config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Seeding categories...');

    const categories = [
        // Listing categories
        { name: 'Electronics', type: 'listing' },
        { name: 'Clothing', type: 'listing' },
        { name: 'Books', type: 'listing' },
        { name: 'Furniture', type: 'listing' },
        { name: 'Accessories', type: 'listing' },
        { name: 'Sports & Fitness', type: 'listing' },
        { name: 'Music & Instruments', type: 'listing' },
        { name: 'Gaming', type: 'listing' },
        { name: 'Kitchen & Appliances', type: 'listing' },
        { name: 'Services', type: 'listing' },
        { name: 'Other', type: 'listing' },

        // Lost & Found categories — prefixed to keep names unique
        { name: 'LF - Electronics', type: 'lostfound' },
        { name: 'LF - Clothing', type: 'lostfound' },
        { name: 'LF - Accessories', type: 'lostfound' },
        { name: 'LF - Books', type: 'lostfound' },
        { name: 'LF - Keys', type: 'lostfound' },
        { name: 'LF - Bags & Luggage', type: 'lostfound' },
        { name: 'LF - Documents & ID', type: 'lostfound' },
        { name: 'LF - Jewelry', type: 'lostfound' },
        { name: 'LF - Sports Equipment', type: 'lostfound' },
        { name: 'LF - Other', type: 'lostfound' },
    ];

    for (const category of categories) {
        await prisma.category.upsert({
            where: { name: category.name },
            update: { type: category.type },
            create: { name: category.name, type: category.type }
        });
    }

    console.log(`Seeded ${categories.length} categories.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });