import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/en');
  
  // This won't run, but Next.js needs something to return
  return null;
} 