'use client';

import { env } from '@/env';
import { Button } from '@repo/design-system/components/ui/button';
import {} from '@repo/design-system/components/ui/navigation-menu';
import { Menu, MoveRight, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import type { Dictionary } from '@repo/internationalization';
import Image from 'next/image';

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
    <header className="sticky top-0 left-0 z-40 w-full bg-[#2E8B57]">
      <div className="container mx-auto flex min-h-20 flex-row items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/ventriloquist-logo.svg"
            alt="Ventriloquist Logo"
            width={40}
            height={40}
            className="rounded-full"
            unoptimized
          />
          <span className="whitespace-nowrap font-bold text-xl tracking-wide">
            VENTRILOQUIST
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <nav className="mr-8 flex gap-12">
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
            className="rounded-full bg-white px-6 py-2 font-medium text-[#2E8B57] text-base hover:bg-white/90"
            asChild
          >
            <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-up`}>Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setOpen(!isOpen)}
            className="p-1"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {isOpen && (
            <div className="absolute top-20 right-0 left-0 flex w-full flex-col gap-6 border-white/10 border-t bg-[#2E8B57] p-6 shadow-lg">
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
              <div className="mt-4 border-white/10 border-t pt-4">
                <Button
                  className="w-full bg-white font-medium text-[#2E8B57] hover:bg-white/90"
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
