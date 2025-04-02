import { PrismaClient } from './generated/client';

async function testWrite() {
  const prisma = new PrismaClient();

  try {
    // Create a new page
    const newPage = await prisma.page.create({
      data: {
        name: 'Welcome to Ventriloquist on Supabase',
      },
    });

    console.log('Successfully created page in Supabase!');
    console.log('New page:', newPage);

    // Fetch all pages to verify
    const allPages = await prisma.page.findMany();
    console.log('All pages:', allPages);
  } catch (error) {
    console.error('Error writing to Supabase:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testWrite();
