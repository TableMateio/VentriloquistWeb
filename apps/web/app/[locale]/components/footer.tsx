import { BoxIcon, HeadphonesIcon, ShieldCheckIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => (
  <footer className="w-full bg-gradient-to-br from-[#2E8B57] to-[#1F5C3D]">
    <div className="container mx-auto px-6 py-20 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-start justify-between gap-16 md:flex-row">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-2">
                <Image
                  src="/ventriloquist-logo.svg"
                  alt="Ventriloquist Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                  unoptimized
                  priority
                />
              </div>
              <span className="font-semibold text-white text-xl tracking-wide">
                Ventriloquist
              </span>
            </div>
            <p className="max-w-md text-lg text-white/80 leading-relaxed">
              Create powerful web automation workflows for data extraction and
              browser testing. Integrate seamlessly with n8n and Bright Data for
              enterprise-grade performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-24 gap-y-12 md:grid-cols-3">
            <div className="flex flex-col gap-6">
              <h3 className="font-semibold text-white text-xl">Product</h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/features"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Pricing
                </Link>
                <Link
                  href="/docs"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Documentation
                </Link>
                <Link
                  href="/api"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  API Reference
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-semibold text-white text-xl">Company</h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/about"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  href="/careers"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Careers
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-semibold text-white text-xl">Legal</h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/privacy"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/security"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-10 border-white/10 border-t pt-10 md:flex-row">
          <p className="text-white/60">
            © {new Date().getFullYear()} Ventriloquist. All rights reserved.
          </p>

          <div className="flex flex-row flex-wrap justify-center gap-12">
            <div className="flex flex-row items-center gap-3">
              <div className="rounded-full bg-emerald-400/20 p-2">
                <HeadphonesIcon className="h-5 w-5 text-emerald-300" />
              </div>
              <span className="text-white/80">24/7 Customer support</span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="rounded-full bg-emerald-400/20 p-2">
                <ShieldCheckIcon className="h-5 w-5 text-emerald-300" />
              </div>
              <span className="text-white/80">Enterprise-grade security</span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="rounded-full bg-emerald-400/20 p-2">
                <BoxIcon className="h-5 w-5 text-emerald-300" />
              </div>
              <span className="text-white/80">Real-time action preview</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
