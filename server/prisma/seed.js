const { PrismaClient } = require('../src/generated/prisma');
const { PrismaPg } = require('@prisma/adapter-pg');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const daysAgo = (n) => new Date(Date.now() - n * 24 * 60 * 60 * 1000);

// Realistic Unsplash photos keyed by topic
const IMAGES = {
  laptop:      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
  phone:       'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
  headphones:  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
  calculator:  'https://images.unsplash.com/photo-1564473185935-58f8d912fc95?w=800',
  textbook:    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800',
  textbook2:   'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800',
  jersey:      'https://images.unsplash.com/photo-1580089595767-4307e1f3f0ac?w=800',
  sneakers:    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
  backpack:    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
  desk:        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800',
  chair:       'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800',
  guitar:      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800',
  keyboard:    'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800',
  watch:       'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
  fan:         'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800',
  dumbbells:   'https://images.unsplash.com/photo-1516567727048-57d86b70cf3e?w=800',
  printer:     'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800',
  wallet:      'https://images.unsplash.com/photo-1627123424574-724758594785?w=800',
  keys:        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  idcard:      'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800',
};

async function main() {

  // CATEGORIES
  console.log('Seeding categories...');

  const categoryDefs = [
    { name: 'Electronics',          type: 'listing'   },
    { name: 'Clothing',             type: 'listing'   },
    { name: 'Books',                type: 'listing'   },
    { name: 'Furniture',            type: 'listing'   },
    { name: 'Accessories',          type: 'listing'   },
    { name: 'Sports & Fitness',     type: 'listing'   },
    { name: 'Music & Instruments',  type: 'listing'   },
    { name: 'Gaming',               type: 'listing'   },
    { name: 'Kitchen & Appliances', type: 'listing'   },
    { name: 'Services',             type: 'listing'   },
    { name: 'Other',                type: 'listing'   },
    { name: 'LF - Electronics',     type: 'lostfound' },
    { name: 'LF - Clothing',        type: 'lostfound' },
    { name: 'LF - Accessories',     type: 'lostfound' },
    { name: 'LF - Books',           type: 'lostfound' },
    { name: 'LF - Keys',            type: 'lostfound' },
    { name: 'LF - Bags & Luggage',  type: 'lostfound' },
    { name: 'LF - Documents & ID',  type: 'lostfound' },
    { name: 'LF - Jewelry',         type: 'lostfound' },
    { name: 'LF - Sports Equipment',type: 'lostfound' },
    { name: 'LF - Other',           type: 'lostfound' },
  ];

  for (const cat of categoryDefs) {
    await prisma.category.upsert({
      where:  { name: cat.name },
      update: { type: cat.type },
      create: { name: cat.name, type: cat.type },
    });
  }

  // Fetch all categories into a lookup map  { name -> id }
  const allCats = await prisma.category.findMany();
  const cat = Object.fromEntries(allCats.map((c) => [c.name, c.id]));

  console.log(`✔  ${categoryDefs.length} categories`);

  // USERS
  console.log('Seeding users...');

  const passwordHash = await bcrypt.hash('password123', 10);

  const userDefs = [
    {
      id: 'user-ama-001',
      name: 'Ama Boateng',
      email: 'ama.boateng@st.knust.edu.gh',
      studentId: '8834521',
      avatarUrl: 'https://i.pravatar.cc/150?img=47',
    },
    {
      id: 'user-kwame-002',
      name: 'Kwame Asante',
      email: 'kwame.asante@st.knust.edu.gh',
      studentId: '8821034',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 'user-abena-003',
      name: 'Abena Mensah',
      email: 'abena.mensah@st.knust.edu.gh',
      studentId: '8809871',
      avatarUrl: 'https://i.pravatar.cc/150?img=45',
    },
    {
      id: 'user-kofi-004',
      name: 'Kofi Darko',
      email: 'kofi.darko@st.knust.edu.gh',
      studentId: '8876543',
      avatarUrl: 'https://i.pravatar.cc/150?img=15',
    },
    {
      id: 'user-efua-005',
      name: 'Efua Oppong',
      email: 'efua.oppong@st.knust.edu.gh',
      studentId: '8812345',
      avatarUrl: 'https://i.pravatar.cc/150?img=44',
    },
    {
      id: 'user-yaw-006',
      name: 'Yaw Tetteh',
      email: 'yaw.tetteh@st.knust.edu.gh',
      studentId: '8867890',
      avatarUrl: 'https://i.pravatar.cc/150?img=18',
    },
    {
      id: 'user-akosua-007',
      name: 'Akosua Frimpong',
      email: 'akosua.frimpong@st.knust.edu.gh',
      studentId: '8856789',
      avatarUrl: 'https://i.pravatar.cc/150?img=41',
    },
    {
      id: 'user-nana-008',
      name: 'Nana Osei',
      email: 'nana.osei@st.knust.edu.gh',
      studentId: '8845678',
      avatarUrl: 'https://i.pravatar.cc/150?img=20',
    },
  ];

  for (const u of userDefs) {
    await prisma.user.upsert({
      where:  { email: u.email },
      update: {},
      create: { ...u, passwordHash },
    });
  }

  // Convenience id map  { shortKey -> full id string }
  const uid = {
    ama:    'user-ama-001',
    kwame:  'user-kwame-002',
    abena:  'user-abena-003',
    kofi:   'user-kofi-004',
    efua:   'user-efua-005',
    yaw:    'user-yaw-006',
    akosua: 'user-akosua-007',
    nana:   'user-nana-008',
  };

  console.log(`✔  ${userDefs.length} users  (password: password123)`);

  // LISTINGS
  console.log('Seeding listings...');

  const listingDefs = [
    {
      userId: uid.kwame,
      title: 'HP Pavilion Laptop — 8GB RAM, 512GB SSD',
      description:
        'Barely used HP Pavilion 15. Intel Core i5, 8 GB RAM, 512 GB SSD. ' +
        'Perfect for engineering coursework and CAD software. Charger included. ' +
        'Selling because I upgraded to a MacBook.',
      price: 2800,
      categoryId: cat['Electronics'],
      status: 'active',
      pickupLocation: 'Unity Hall, KNUST',
      createdAt: daysAgo(12),
      images: [IMAGES.laptop],
    },
    {
      userId: uid.ama,
      title: 'Samsung Galaxy A54 — Excellent Condition',
      description:
        'Samsung Galaxy A54 5G, 128 GB storage, 6 GB RAM. Comes with original ' +
        'box, charger, and a tempered-glass screen protector already applied. ' +
        'No scratches. Bought in January, moving abroad.',
      price: 1650,
      categoryId: cat['Electronics'],
      status: 'active',
      pickupLocation: 'Republic Hall, KNUST',
      createdAt: daysAgo(7),
      images: [IMAGES.phone],
    },
    {
      userId: uid.abena,
      title: 'Sony WH-1000XM4 Noise Cancelling Headphones',
      description:
        'Sony WH-1000XM4 in mint condition. Industry-leading ANC — ideal for ' +
        'studying in the library or the hostels. Battery lasts 30 hrs. ' +
        'Includes carry case and USB-C cable.',
      price: 900,
      categoryId: cat['Electronics'],
      status: 'active',
      pickupLocation: 'KNUST Main Library',
      createdAt: daysAgo(5),
      images: [IMAGES.headphones],
    },
    {
      userId: uid.yaw,
      title: 'Casio FX-991EX ClassWiz Scientific Calculator',
      description:
        'Casio FX-991EX — approved for all KNUST engineering exams. Spreadsheet ' +
        'function, QR code integration, 552 math functions. Works perfectly, ' +
        'selling after graduation.',
      price: 180,
      categoryId: cat['Electronics'],
      status: 'active',
      pickupLocation: 'College of Engineering, KNUST',
      createdAt: daysAgo(3),
      images: [IMAGES.calculator],
    },
    {
      userId: uid.kofi,
      title: 'Engineering Mathematics — Stroud (8th Edition)',
      description:
        'Stroud Engineering Mathematics, 8th edition. Light pencil annotations ' +
        'in the first five chapters only. Great condition overall. Must-have for ' +
        'first and second year engineering students.',
      price: 120,
      categoryId: cat['Books'],
      status: 'active',
      pickupLocation: 'Brunei Hall, KNUST',
      createdAt: daysAgo(9),
      images: [IMAGES.textbook],
    },
    {
      userId: uid.efua,
      title: 'Introduction to Algorithms — CLRS (3rd Edition)',
      description:
        'CLRS third edition, clean copy. Used for one semester of CS 361. ' +
        'No highlighting. Perfect for CS and Comput students.',
      price: 150,
      categoryId: cat['Books'],
      status: 'active',
      pickupLocation: 'Department of Computer Science, KNUST',
      createdAt: daysAgo(4),
      images: [IMAGES.textbook2],
    },
    {
      userId: uid.akosua,
      title: 'KNUST Football Jersey — Size L',
      description:
        'Official KNUST FC jersey, size Large. Worn twice, washed and in great ' +
        'shape. Selling because it is a size too big for me.',
      price: 95,
      categoryId: cat['Clothing'],
      status: 'active',
      pickupLocation: 'Katanga Hall, KNUST',
      createdAt: daysAgo(6),
      images: [IMAGES.jersey],
    },
    {
      userId: uid.nana,
      title: 'Nike Air Max 270 — Size 43',
      description:
        'Nike Air Max 270 in white/black. EU size 43 (UK 9). Worn a handful of ' +
        'times. Original box included. Perfect for campus life.',
      price: 420,
      categoryId: cat['Clothing'],
      status: 'active',
      pickupLocation: 'Independence Hall, KNUST',
      createdAt: daysAgo(2),
      images: [IMAGES.sneakers],
    },
    {
      userId: uid.ama,
      title: 'Jansport SuperBreak Backpack — 34L',
      description:
        'Classic JanSport SuperBreak in navy blue, 34 L capacity. Spacious ' +
        'enough for a 15" laptop plus books. Water bottle pocket on the side. ' +
        'Barely used — bought a hiking pack instead.',
      price: 130,
      categoryId: cat['Accessories'],
      status: 'active',
      pickupLocation: 'Republic Hall, KNUST',
      createdAt: daysAgo(11),
      images: [IMAGES.backpack],
    },
    {
      userId: uid.kwame,
      title: 'Study Desk — Solid Wood, Good Condition',
      description:
        'Solid wood study desk, 120 × 60 cm. One small drawer. Minor scuff on ' +
        'the left corner, otherwise sturdy. Great for a hostel room upgrade. ' +
        'Buyer to arrange own transport from Unity Hall.',
      price: 350,
      categoryId: cat['Furniture'],
      status: 'active',
      pickupLocation: 'Unity Hall, KNUST',
      createdAt: daysAgo(14),
      images: [IMAGES.desk],
    },
    {
      userId: uid.kofi,
      title: 'Adjustable Study Chair — Padded Seat',
      description:
        'Height-adjustable office-style chair with padded seat and back. Makes ' +
        'long study sessions bearable. Four wheels, all rolling smoothly.',
      price: 220,
      categoryId: cat['Furniture'],
      status: 'active',
      pickupLocation: 'Brunei Hall, KNUST',
      createdAt: daysAgo(8),
      images: [IMAGES.chair],
    },
    {
      userId: uid.yaw,
      title: 'Acoustic Guitar — Yamaha F310',
      description:
        'Yamaha F310 full-size acoustic guitar. Lovely warm tone, perfect for a ' +
        'beginner or casual player. Includes a soft gig bag and a set of spare ' +
        'strings. Selling to focus on exams.',
      price: 480,
      categoryId: cat['Music & Instruments'],
      status: 'active',
      pickupLocation: 'University Hotel Area, KNUST',
      createdAt: daysAgo(10),
      images: [IMAGES.guitar],
    },
    {
      userId: uid.efua,
      title: 'Mechanical Keyboard — TKL, Brown Switches',
      description:
        'Tenkeyless mechanical keyboard with tactile brown switches. Compact ' +
        'design, RGB backlight. Clicky but not too loud for library use. USB-C ' +
        'detachable cable.',
      price: 280,
      categoryId: cat['Electronics'],
      status: 'active',
      pickupLocation: 'Department of Computer Science, KNUST',
      createdAt: daysAgo(1),
      images: [IMAGES.keyboard],
    },
    {
      userId: uid.abena,
      title: 'Casio Vintage Watch — Gold Tone',
      description:
        'Casio vintage A168WG gold-tone digital watch. Classic look, working ' +
        'perfectly. Battery recently replaced. Great everyday accessory.',
      price: 115,
      categoryId: cat['Accessories'],
      status: 'active',
      pickupLocation: 'KNUST Main Campus Gate',
      createdAt: daysAgo(3),
      images: [IMAGES.watch],
    },
    {
      userId: uid.nana,
      title: 'Standing Fan — Binatone 16" (3 Speed)',
      description:
        'Binatone 16-inch standing fan, 3 speed settings. Works perfectly — ' +
        'essential for hostel life during harmattan season. Selling at end of ' +
        'semester.',
      price: 160,
      categoryId: cat['Kitchen & Appliances'],
      status: 'active',
      pickupLocation: 'Independence Hall, KNUST',
      createdAt: daysAgo(5),
      images: [IMAGES.fan],
    },
    {
      userId: uid.akosua,
      title: 'Adjustable Dumbbells — 2 × 5 kg',
      description:
        'A pair of 5 kg rubber hex dumbbells. Perfect for a hostel room workout ' +
        'routine. No rust, rubber coating intact.',
      price: 200,
      categoryId: cat['Sports & Fitness'],
      status: 'active',
      pickupLocation: 'Katanga Hall, KNUST',
      createdAt: daysAgo(7),
      images: [IMAGES.dumbbells],
    },
    // One sold listing so the demo shows mixed statuses
    {
      userId: uid.yaw,
      title: 'Canon PIXMA Printer — Wireless',
      description:
        'Canon PIXMA wireless inkjet printer. Print, scan, and copy. Works over ' +
        'Wi-Fi. Ink cartridges included (about 40% remaining).',
      price: 750,
      categoryId: cat['Electronics'],
      status: 'sold',
      pickupLocation: 'University Hotel Area, KNUST',
      createdAt: daysAgo(20),
      images: [IMAGES.printer],
    },
  ];

  const createdListings = [];
  for (const { images, ...data } of listingDefs) {
    const listing = await prisma.listing.create({
      data: {
        ...data,
        images: {
          create: images.map((url) => ({ url })),
        },
      },
    });
    createdListings.push(listing);
  }

  console.log(`✔  ${createdListings.length} listings`);

  // LOST & FOUND POSTS
  console.log('Seeding lost & found posts...');

  const lfDefs = [
    {
      userId: uid.kofi,
      title: 'Lost: Brown Leather Wallet near SRC',
      description:
        'Lost my brown bifold leather wallet somewhere around the SRC building ' +
        'on Wednesday afternoon. Contains my KNUST ID, GH card, and some cash. ' +
        'Please contact me if found — willing to offer a reward.',
      categoryId: cat['LF - Accessories'],
      type: 'lost',
      locationText: 'SRC Building, KNUST',
      dateLostFound: daysAgo(3),
      status: 'open',
      createdAt: daysAgo(3),
      images: [IMAGES.wallet],
    },
    {
      userId: uid.ama,
      title: 'Found: Set of Keys at the Main Library',
      description:
        'Found a bunch of keys (looks like room key + padlock key) on a table ' +
        'at the main library, second floor. Handed in to the library info desk. ' +
        'Describe the keyring to claim.',
      categoryId: cat['LF - Keys'],
      type: 'found',
      locationText: 'KNUST Main Library, 2nd Floor',
      dateLostFound: daysAgo(1),
      status: 'open',
      createdAt: daysAgo(1),
      images: [IMAGES.keys],
    },
    {
      userId: uid.abena,
      title: 'Lost: KNUST Student ID Card — Abena Asare',
      description:
        'Lost my KNUST student ID card (ID: 8801234). Last seen in the College ' +
        'of Engineering area on Monday. I urgently need it for exams next week. ' +
        'Please DM me if found.',
      categoryId: cat['LF - Documents & ID'],
      type: 'lost',
      locationText: 'College of Engineering, KNUST',
      dateLostFound: daysAgo(5),
      status: 'open',
      createdAt: daysAgo(5),
      images: [IMAGES.idcard],
    },
    {
      userId: uid.kwame,
      title: 'Found: Black JanSport Backpack at Great Hall',
      description:
        'Found a black JanSport bag outside the Great Hall after the convocation ' +
        'rehearsal. Contains what looks like lecture notes and a pencil case. ' +
        'Contact me with a description to identify it.',
      categoryId: cat['LF - Bags & Luggage'],
      type: 'found',
      locationText: 'Great Hall, KNUST',
      dateLostFound: daysAgo(2),
      status: 'open',
      createdAt: daysAgo(2),
      images: [IMAGES.backpack],
    },
    {
      userId: uid.efua,
      title: 'Lost: Casio FX-82ES Calculator — Exam Hall',
      description:
        'Left my Casio FX-82ES calculator in Exam Hall 3 after the MATH 153 ' +
        'paper on Friday. Name "E. Oppong" written in marker on the back. ' +
        'Please message if found.',
      categoryId: cat['LF - Electronics'],
      type: 'lost',
      locationText: 'Exam Hall 3, KNUST',
      dateLostFound: daysAgo(4),
      status: 'open',
      createdAt: daysAgo(4),
      images: [IMAGES.calculator],
    },
    // A resolved one for variety
    {
      userId: uid.nana,
      title: 'Lost: Silver Chain Bracelet — Republic Hall',
      description:
        'Lost a thin silver chain bracelet somewhere in Republic Hall. Has a ' +
        'small star pendant. Sentimental value. Reward offered.',
      categoryId: cat['LF - Jewelry'],
      type: 'lost',
      locationText: 'Republic Hall, KNUST',
      dateLostFound: daysAgo(10),
      status: 'resolved',
      createdAt: daysAgo(10),
      images: [],
    },
  ];

  for (const { images, ...data } of lfDefs) {
    await prisma.lostFoundPost.create({
      data: {
        ...data,
        images: images.length ? { create: images.map((url) => ({ url })) } : undefined,
      },
    });
  }

  console.log(`✔  ${lfDefs.length} lost & found posts`);

  // TRANSACTIONS
  console.log('Seeding transactions...');

  // listing index reference from createdListings array
  // [0]=laptop  [1]=phone  [2]=headphones  [3]=calculator  [16]=printer(sold)
  const txDefs = [
    {
      listingId: createdListings[16].id,   // Canon printer (sold)
      buyerId:   uid.abena,
      sellerId:  uid.yaw,
      price:     750,
      status:    'completed',
      createdAt: daysAgo(15),
    },
    {
      listingId: createdListings[1].id,    // Samsung Galaxy
      buyerId:   uid.kofi,
      sellerId:  uid.ama,
      price:     1650,
      status:    'pending',
      createdAt: daysAgo(2),
    },
    {
      listingId: createdListings[4].id,    // Stroud textbook
      buyerId:   uid.efua,
      sellerId:  uid.kofi,
      price:     120,
      status:    'completed',
      createdAt: daysAgo(6),
    },
    {
      listingId: createdListings[11].id,   // Yamaha guitar
      buyerId:   uid.nana,
      sellerId:  uid.yaw,
      price:     480,
      status:    'pending',
      createdAt: daysAgo(1),
    },
  ];

  for (const tx of txDefs) {
    await prisma.transaction.create({ data: tx });
  }

  console.log(`✔  ${txDefs.length} transactions`);

  // SAVED LISTINGS
  console.log('Seeding saved listings...');

  const savedDefs = [
    { userId: uid.ama,    listingId: createdListings[0].id  },  // laptop
    { userId: uid.ama,    listingId: createdListings[2].id  },  // headphones
    { userId: uid.abena,  listingId: createdListings[0].id  },  // laptop
    { userId: uid.kofi,   listingId: createdListings[5].id  },  // CLRS book
    { userId: uid.kofi,   listingId: createdListings[12].id },  // keyboard
    { userId: uid.efua,   listingId: createdListings[13].id },  // watch
    { userId: uid.nana,   listingId: createdListings[3].id  },  // calculator
    { userId: uid.akosua, listingId: createdListings[8].id  },  // backpack
  ];

  for (const s of savedDefs) {
    await prisma.savedListing.upsert({
      where:  { userId_listingId: s },
      update: {},
      create: { ...s, createdAt: daysAgo(Math.floor(Math.random() * 7)) },
    });
  }

  console.log(`✔  ${savedDefs.length} saved listings`);

  // MESSAGES
  console.log('Seeding messages...');

  // A short realistic conversation between two buyers and sellers
  const messageDefs = [
    // Kofi → Ama: inquiring about the Samsung phone
    {
      senderId:   uid.kofi,
      receiverId: uid.ama,
      content:    'Hi Ama! Is the Samsung Galaxy A54 still available?',
      readStatus: true,
      createdAt:  daysAgo(2),
    },
    {
      senderId:   uid.ama,
      receiverId: uid.kofi,
      content:    'Yes, still available! Are you on campus?',
      readStatus: true,
      createdAt:  daysAgo(2),
    },
    {
      senderId:   uid.kofi,
      receiverId: uid.ama,
      content:    "Yes, I'm in Brunei. Can we meet at the SRC tomorrow around 3pm?",
      readStatus: true,
      createdAt:  daysAgo(2),
    },
    {
      senderId:   uid.ama,
      receiverId: uid.kofi,
      content:    "Works for me! See you there. I'll bring the box and receipt.",
      readStatus: false,
      createdAt:  daysAgo(1),
    },
    // Nana → Yaw: asking about the guitar
    {
      senderId:   uid.nana,
      receiverId: uid.yaw,
      content:    'Hey, is the Yamaha guitar still available? Does it need new strings?',
      readStatus: true,
      createdAt:  daysAgo(3),
    },
    {
      senderId:   uid.yaw,
      receiverId: uid.nana,
      content:    'Still available! Strings are fairly new — changed them two months ago.',
      readStatus: true,
      createdAt:  daysAgo(3),
    },
    {
      senderId:   uid.nana,
      receiverId: uid.yaw,
      content:    'Great. Would you take GHS 440 for it?',
      readStatus: true,
      createdAt:  daysAgo(2),
    },
    {
      senderId:   uid.yaw,
      receiverId: uid.nana,
      content:    "Best I can do is 460 — it's in mint condition. Deal?",
      readStatus: false,
      createdAt:  daysAgo(1),
    },
    // Abena → Kwame: laptop inquiry
    {
      senderId:   uid.abena,
      receiverId: uid.kwame,
      content:    "Hi! Is the HP laptop still up for sale? What's the battery life like?",
      readStatus: true,
      createdAt:  daysAgo(5),
    },
    {
      senderId:   uid.kwame,
      receiverId: uid.abena,
      content:    'Yes! Battery gives about 5–6 hours on normal use. Comes with the charger too.',
      readStatus: false,
      createdAt:  daysAgo(5),
    },
  ];

  for (const m of messageDefs) {
    await prisma.message.create({ data: m });
  }

  console.log(`✔  ${messageDefs.length} messages`);

  // Done
  console.log('\n🎉 TradeX demo data seeded successfully!');
  console.log('   All users share the password: password123');
  console.log('   Login with any @st.knust.edu.gh email to explore.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });