import './styles.css';
import { AuthProvider } from '@repo/auth/provider';
import { Toolbar as CMSToolbar } from '@repo/cms/components/toolbar';
import { DesignSystemProvider } from '@repo/design-system';
import { fonts } from '@repo/design-system/lib/fonts';
import { cn } from '@repo/design-system/lib/utils';
import { Toolbar } from '@repo/feature-flags/components/toolbar';
import { getDictionary } from '@repo/internationalization';
import type { ReactNode } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';

type RootLayoutProperties = {
  readonly children: ReactNode;
  readonly params: Promise<{
    locale: string;
  }>;
};

const RootLayout = async ({ children, params }: RootLayoutProperties) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <html
      lang="en"
      className={cn(fonts, 'scroll-smooth')}
      suppressHydrationWarning
    >
      <body className="bg-gradient-to-br from-[#2E8B57] via-[#267349] to-[#1F5C3D] text-white">
        <AuthProvider>
          <DesignSystemProvider>
            <Header dictionary={dictionary} />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </DesignSystemProvider>
          <Toolbar />
          <CMSToolbar />
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
