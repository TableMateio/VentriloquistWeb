import { redirect } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Redirect to /en on root access
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    if (pathname === '/') {
      redirect('/en');
    }
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 