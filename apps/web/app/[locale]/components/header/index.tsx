'use client';

import { env } from '@/env';
import { Button } from '@repo/design-system/components/ui/button';
import {} from '@repo/design-system/components/ui/navigation-menu';
import { Menu, MoveRight, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import type { Dictionary } from '@repo/internationalization';

type HeaderProps = {
  dictionary: Dictionary;
};

export const Header = ({ dictionary }: HeaderProps) => {
  const navigationItems = [
    {
      title: 'Docs',
      href: '/docs',
      description: '',
    },
    {
      title: 'Support',
      href: '/support',
      description: '',
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 z-40 w-full bg-gradient-to-r from-[#2E8B57] via-[#267349] to-[#1F5C3D] shadow-md">
      <div className="container mx-auto flex min-h-20 flex-row items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Ventriloquist Logo"
            >
              <circle cx="12" cy="12" r="12" fill="white" />
              <path
                d="M7 9V15M17 9V15M12 5.5V18.5M7.5 18.5H16.5"
                stroke="#2E8B57"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="whitespace-nowrap font-bold text-xl tracking-wide">
            VENTRILOQUIST
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <nav className="mr-10 flex gap-14">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="font-medium text-lg text-white transition-colors hover:text-white/80"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <Button
            className="relative overflow-hidden rounded-full bg-white px-8 py-3 font-semibold text-[#2E8B57] text-base shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
            asChild
          >
            <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-up`}>
              <span className="relative z-10">Sign Up</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white to-white/80 opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setOpen(!isOpen)}
            className="p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {isOpen && (
            <div className="absolute top-20 right-0 left-0 flex w-full flex-col gap-6 border-white/10 border-t bg-gradient-to-r from-[#2E8B57] via-[#267349] to-[#1F5C3D] p-8 shadow-lg">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    <span className="font-medium text-lg">{item.title}</span>
                    <MoveRight className="h-4 w-4 stroke-1 text-white/70" />
                  </Link>
                </div>
              ))}
              <div className="mt-6 border-white/10 border-t pt-6">
                <Button
                  className="w-full rounded-full bg-white py-4 font-semibold text-[#2E8B57] text-base shadow-md hover:bg-white/90 hover:shadow-lg"
                  asChild
                >
                  <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-up`}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
