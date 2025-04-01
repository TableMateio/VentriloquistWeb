import './styles.css';
import { ClerkProvider } from '@clerk/nextjs';
import { DesignSystemProvider } from '@repo/design-system';
import { fonts } from '@repo/design-system/lib/fonts';
import { Toolbar } from '@repo/feature-flags/components/toolbar';
import type { ReactNode } from 'react';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body>
      <ClerkProvider>
        <DesignSystemProvider>{children}</DesignSystemProvider>
        <Toolbar />
      </ClerkProvider>
    </body>
  </html>
);

export default RootLayout;
