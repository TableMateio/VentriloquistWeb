import { database } from './index';

async function testConnection() {
  try {
    // Test connection by querying the Page model
    const pages = await database.page.findMany();
    console.log('Successfully connected to Supabase!');
    console.log('Pages:', pages);
  } catch (error) {
    console.error('Error connecting to Supabase:', error);
  } finally {
    await database.$disconnect();
  }
}

testConnection();
