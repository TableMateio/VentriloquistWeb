import { PrismaClient } from './generated/client';

async function testConnection() {
  const prisma = new PrismaClient();

  try {
    // Test connection by querying the Page model
    const pages = await prisma.page.findMany();
    console.log('Successfully connected to Supabase!');
    console.log('Pages:', pages);
  } catch (error) {
    console.error('Error connecting to Supabase:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
