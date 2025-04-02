import { BoxIcon, HeadphonesIcon, ShieldCheckIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => (
  <footer className="w-full bg-gradient-to-br from-[#2E8B57] to-[#1F5C3D]">
    <div className="container mx-auto px-6 py-16 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-3">
              <Image
                src="/ventriloquist-logo.svg"
                alt="Ventriloquist Logo"
                width={40}
                height={40}
                className="rounded-full"
                unoptimized
              />
              <span className="font-bold text-xl tracking-wide">
                VENTRILOQUIST
              </span>
            </div>
            <p className="max-w-md text-lg text-white/90 leading-relaxed">
              Quickly create deep web crawling and scraping jobs within n8n and
              see live results in Bright Data via the secure Puppeteer library
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h3 className="font-semibold text-xl">Product</h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/features"
                  className="text-base text-white/80 transition-colors hover:text-white"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-base text-white/80 transition-colors hover:text-white"
                >
                  Pricing
                </Link>
                <Link
                  href="/docs"
                  className="text-base text-white/80 transition-colors hover:text-white"
                >
                  Documentation
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-semibold text-xl">Company</h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/about"
                  className="text-base text-white/80 transition-colors hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="text-base text-white/80 transition-colors hover:text-white"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-base text-white/80 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-white/10 border-t pt-10 md:flex-row">
          <p className="text-base text-white/70">
            © {new Date().getFullYear()} Ventriloquist. All rights reserved.
          </p>

          <div className="flex flex-row flex-wrap justify-center gap-12">
            <div className="flex flex-row items-center gap-3">
              <HeadphonesIcon className="h-6 w-6 text-white/80" />
              <span className="text-base text-white/80">Customer support</span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <ShieldCheckIcon className="h-6 w-6 text-white/80" />
              <span className="text-base text-white/80">
                Secure Puppeteer library
              </span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <BoxIcon className="h-6 w-6 text-white/80" />
              <span className="text-base text-white/80">
                Real-time action preview
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
