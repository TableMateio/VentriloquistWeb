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
    <header className="sticky top-0 left-0 z-40 w-full border-white/10 border-b bg-transparent">
      <div className="container relative mx-auto flex min-h-20 flex-row items-center gap-4 lg:grid lg:grid-cols-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <Image
              src="/ventriloquist-logo.svg"
              alt="Ventriloquist Logo"
              width={40}
              height={40}
              className="rounded-full"
              unoptimized
            />
            <span className="whitespace-nowrap font-bold text-xl">
              VENTRILOQUIST
            </span>
          </div>
        </div>

        <div className="hidden flex-row items-center justify-center gap-8 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-white transition-colors hover:text-white/80"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex w-full justify-end gap-4">
          <Button className="bg-white text-[#2E8B57] hover:bg-white/90" asChild>
            <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-up`}>Sign Up</Link>
          </Button>
        </div>

        <div className="flex w-12 shrink items-end justify-end lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          {isOpen && (
            <div className="container absolute top-20 right-0 flex w-full flex-col gap-8 border-white/10 border-t bg-[#2E8B57] py-4 shadow-lg">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between"
                      target={
                        item.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        item.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      <span className="text-lg">{item.title}</span>
                      <MoveRight className="h-4 w-4 stroke-1 text-white/70" />
                    </Link>
                  </div>
                </div>
              ))}
              <div className="mt-4 border-white/10 border-t pt-4">
                <Button
                  className="w-full bg-white text-[#2E8B57] hover:bg-white/90"
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
