import { database } from '@repo/database';

async function testAppDatabase() {
  try {
    // Test connection by querying the Page model
    const pages = await database.page.findMany();
    console.log('App successfully connected to Supabase!');
    console.log('Pages:', pages);
  } catch (error) {
    console.error('Error connecting to Supabase from app:', error);
  } finally {
    await database.$disconnect();
  }
}

testAppDatabase();
