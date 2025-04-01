import './styles.css';
import { AuthProvider } from '@repo/auth/provider';
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
      <AuthProvider>
        <DesignSystemProvider>{children}</DesignSystemProvider>
        <Toolbar />
      </AuthProvider>
    </body>
  </html>
);

export default RootLayout;
