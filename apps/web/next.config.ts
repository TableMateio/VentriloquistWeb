import { env } from '@/env';
import { withCMS } from '@repo/cms/next-config';
import { withToolbar } from '@repo/feature-flags/lib/toolbar';
import { config, withAnalyzer } from '@repo/next-config';
import { withLogging, withSentry } from '@repo/observability/next-config';
import type { NextConfig } from 'next';

let nextConfig: NextConfig = withToolbar(withLogging(config));

// Ensure public assets are properly included in the build
nextConfig = {
  ...nextConfig,
  output: 'standalone',
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
  images: {
    ...(nextConfig.images || {}),
    unoptimized: true,
    domains: ['localhost', '192.168.1.193'],
    remotePatterns: [
      ...(nextConfig.images?.remotePatterns || []),
      {
        protocol: 'https',
        hostname: 'assets.basehub.com',
      }
    ],
  }
};

if (process.env.NODE_ENV === 'production') {
  const redirects: NextConfig['redirects'] = async () => [
    {
      source: '/legal',
      destination: '/legal/privacy',
      statusCode: 301,
    },
  ];

  nextConfig.redirects = redirects;
}

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

export default withCMS(nextConfig);
