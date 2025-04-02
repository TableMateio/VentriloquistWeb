import { env } from '@/env';
import { Button } from '@repo/design-system/components/ui/button';
import { Card } from '@repo/design-system/components/ui/card';
import type { Dictionary } from '@repo/internationalization';
import {
  BoxIcon,
  HeadphonesIcon,
  MoveRight,
  ShieldCheckIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type HeroProps = {
  dictionary: Dictionary;
};

export const Hero = async ({ dictionary }: HeroProps) => {
  return (
    <div className="w-full bg-[#2E8B57]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-14 py-16 md:flex-row lg:py-20">
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-8 md:w-1/2">
            <div className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-white/10 p-3">
                <Image
                  src="/ventriloquist-logo.svg"
                  alt="Ventriloquist"
                  width={48}
                  height={48}
                  className="rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="font-bold text-3xl tracking-wider">
                VENTRILOQUIST
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-bold text-[3.5rem] leading-tight tracking-wide md:text-[4rem]">
                <div className="flex items-center">
                  <span className="text-[2.5rem] text-white/70 md:text-[3rem]">
                    write
                  </span>{' '}
                  <span className="ml-6 md:ml-8">COMMANDS</span>
                </div>
                <div className="mt-1 flex items-center">
                  <span className="text-[2.5rem] text-white/70 md:text-[3rem]">
                    with
                  </span>{' '}
                  <span className="ml-6 md:ml-8">N8N NODE</span>
                </div>
                <div className="mt-1 flex items-center">
                  <span className="text-[2.5rem] text-white/70 md:text-[3rem]">
                    or
                  </span>{' '}
                  <span className="ml-6 md:ml-8">SEE</span>{' '}
                  <span className="ml-2 text-[2.5rem] text-white/70 md:text-[3rem]">
                    live
                  </span>
                </div>
                <div className="mt-1 flex items-center">
                  <span>ACTIONS</span> <MoveRight className="ml-6 h-12 w-12" />
                </div>
              </div>

              <p className="mt-2 max-w-xl text-white/80 text-xl leading-relaxed">
                Quickly create deep web crawling and scraping jobs within n8n
                and see live results in Bright Data via the secure Puppeteer
                library
              </p>
            </div>

            <div className="mt-6 flex flex-row gap-6">
              <Button
                size="lg"
                className="border-none bg-white/20 px-8 py-6 text-lg hover:bg-white/30"
                asChild
              >
                <Link href={env.NEXT_PUBLIC_APP_URL || '#'}>
                  Sign Up <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-row flex-wrap gap-12">
              <div className="flex flex-row items-center gap-3">
                <HeadphonesIcon className="h-6 w-6" />
                <span className="text-base">Customer support</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <ShieldCheckIcon className="h-6 w-6" />
                <span className="text-base">Secure Puppeteer library</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <BoxIcon className="h-6 w-6" />
                <span className="text-base">Real-time action preview</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image/Demo */}
          <div className="md:w-1/2">
            <Card className="overflow-hidden rounded-xl border-none bg-white/5 p-4 shadow-lg">
              <div className="rounded-lg bg-[#4CA365]/20 p-4">
                <div className="mb-3 flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-white/30" />
                  <div className="h-3 w-3 rounded-full bg-white/30" />
                  <div className="h-3 w-3 rounded-full bg-white/30" />
                </div>
                <div className="flex items-center justify-center p-8">
                  <div className="rounded-full bg-[#2E8B57]/40 p-6">
                    <Image
                      src="/ventriloquist-logo.svg"
                      alt="Ventriloquist"
                      width={140}
                      height={140}
                      className="rounded-full"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <div className="h-5 w-full rounded-full bg-white/10" />
                  <div className="h-5 w-4/5 rounded-full bg-white/10" />
                  <div className="h-5 w-5/6 rounded-full bg-white/10" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
