import { HeadphonesIcon, ShieldCheckIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => (
  <footer className="w-full border-white/10 border-t py-16">
    <div className="container mx-auto">
      <div className="flex flex-col gap-12">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/ventriloquist-logo.svg"
                alt="Ventriloquist Logo"
                width={40}
                height={40}
                className="rounded-full"
                unoptimized
              />
              <span className="font-bold text-xl">VENTRILOQUIST</span>
            </div>
            <p className="max-w-md text-white/70">
              Quickly create deep web crawling and scraping jobs within n8n and
              see live results in Bright Data via the secure Puppeteer library
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg">Product</h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/features"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Pricing
                </Link>
                <Link
                  href="/docs"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Documentation
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg">Company</h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/about"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-white/10 border-t pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Ventriloquist. All rights reserved.
          </p>

          <div className="mt-6 flex flex-row gap-8 md:mt-0">
            <div className="flex flex-row items-center gap-3">
              <HeadphonesIcon className="h-5 w-5 text-white/70" />
              <span className="text-sm text-white/70">Customer support</span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <ShieldCheckIcon className="h-5 w-5 text-white/70" />
              <span className="text-sm text-white/70">Secure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
