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
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-12 py-20 md:flex-row lg:py-32">
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
              <h2 className="font-bold text-3xl">VENTRILOQUIST</h2>
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-bold text-[3.5rem] leading-tight md:text-[4rem]">
                <div className="flex items-center">
                  <span className="text-white/70">write</span>{' '}
                  <span className="ml-4">COMMANDS</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white/70">with</span>{' '}
                  <span className="ml-4">N8N NODE</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white/70">or</span>{' '}
                  <span className="ml-4">SEE</span>{' '}
                  <span className="ml-2 text-white/70">live</span>
                </div>
                <div className="flex items-center">
                  <span>ACTIONS</span> <MoveRight className="ml-4 h-12 w-12" />
                </div>
              </div>

              <p className="max-w-xl text-lg text-white/80">
                Quickly create deep web crawling and scraping jobs within n8n
                and see live results in Bright Data via the secure Puppeteer
                library
              </p>
            </div>

            <div className="mt-6 flex flex-row gap-6">
              <Button
                size="lg"
                className="border-none bg-white/20 hover:bg-white/30"
                asChild
              >
                <Link href={env.NEXT_PUBLIC_APP_URL || '#'}>
                  Sign Up <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-row gap-12">
              <div className="flex flex-row items-center gap-3">
                <HeadphonesIcon className="h-6 w-6" />
                <span className="text-sm">Customer support</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <ShieldCheckIcon className="h-6 w-6" />
                <span className="text-sm">Secure Puppeteer library</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <BoxIcon className="h-6 w-6" />
                <span className="text-sm">Real-time action preview</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image/Demo */}
          <div className="md:w-1/2">
            <Card className="overflow-hidden rounded-xl border-white/10 bg-white/5 p-4">
              <div className="rounded-lg bg-white/5 p-3">
                <div className="mb-3 flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-white/30" />
                  <div className="h-3 w-3 rounded-full bg-white/30" />
                  <div className="h-3 w-3 rounded-full bg-white/30" />
                </div>
                <div className="flex items-center justify-center p-10">
                  <div className="rounded-full bg-[#2E8B57]/40 p-4">
                    <Image
                      src="/ventriloquist-logo.svg"
                      alt="Ventriloquist"
                      width={120}
                      height={120}
                      className="rounded-full"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="h-4 w-full rounded-full bg-white/10" />
                  <div className="h-4 w-3/4 rounded-full bg-white/10" />
                  <div className="h-4 w-5/6 rounded-full bg-white/10" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
