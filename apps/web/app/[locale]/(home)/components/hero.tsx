import { env } from '@/env';
import { Button } from '@repo/design-system/components/ui/button';
import { Card } from '@repo/design-system/components/ui/card';
import type { Dictionary } from '@repo/internationalization';
import {
  BoxIcon,
  CheckCircleIcon,
  HeadphonesIcon,
  MoveRight,
  ShieldCheckIcon,
  TerminalIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type HeroProps = {
  dictionary: Dictionary;
};

export const Hero = async ({ dictionary }: HeroProps) => {
  return (
    <div className="w-full bg-gradient-to-br from-[#2E8B57] to-[#1F5C3D]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-16 py-20 md:flex-row lg:py-24">
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-10 md:w-1/2">
            <div className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-white/10 p-3">
                <Image
                  src="/assets/ventriloquist-logo.svg"
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

            <div className="flex flex-col gap-8">
              <h1 className="font-bold text-6xl leading-[1.15] tracking-tight">
                <span className="block">Create deep web crawling</span>
                <span className="mt-2 block">
                  jobs with <span className="text-emerald-300">N8N</span>
                </span>
                <span className="mt-2 block">See live results</span>
              </h1>

              <p className="max-w-xl text-white/90 text-xl leading-relaxed">
                Quickly create deep web crawling and scraping jobs within n8n
                and see live results in Bright Data via the secure Puppeteer
                library
              </p>
            </div>

            <div className="mt-8 flex flex-row gap-6">
              <Button
                size="lg"
                className="rounded-full border-none bg-white px-10 py-6 font-medium text-[#2E8B57] text-lg hover:bg-white/90"
                asChild
              >
                <Link href={env.NEXT_PUBLIC_APP_URL || '#'}>
                  Get Started <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white bg-transparent px-10 py-6 font-medium text-lg text-white hover:bg-white/10"
                asChild
              >
                <Link href="/docs">Documentation</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-row flex-wrap gap-14">
              <div className="flex flex-row items-center gap-3">
                <div className="rounded-full bg-emerald-400/20 p-2">
                  <HeadphonesIcon className="h-5 w-5 text-emerald-300" />
                </div>
                <span className="text-base">Customer support</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className="rounded-full bg-emerald-400/20 p-2">
                  <ShieldCheckIcon className="h-5 w-5 text-emerald-300" />
                </div>
                <span className="text-base">Secure Puppeteer library</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className="rounded-full bg-emerald-400/20 p-2">
                  <BoxIcon className="h-5 w-5 text-emerald-300" />
                </div>
                <span className="text-base">Real-time action preview</span>
              </div>
            </div>
          </div>

          {/* Right Side - Demo Terminal */}
          <div className="md:w-1/2 md:pl-8">
            <Card className="overflow-hidden rounded-xl border-none bg-black/30 p-5 shadow-lg backdrop-blur-sm">
              <div className="rounded-lg bg-black/80 p-4">
                {/* Terminal Header */}
                <div className="mb-4 flex items-center justify-between border-white/10 border-b pb-3">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="font-medium text-sm text-white/70">
                    Ventriloquist Web Crawler
                  </div>
                  <div className="w-16" /> {/* Empty space for balance */}
                </div>

                {/* Command Entry */}
                <div className="mb-4 rounded bg-[#0D1117] p-3 font-mono text-sm">
                  <div className="flex items-center gap-2 text-white/90">
                    <TerminalIcon className="h-4 w-4 text-emerald-300" />
                    <span className="text-emerald-300">$</span>
                    <span className="font-semibold text-white">
                      ventriloquist.navigate(
                      <span className="text-yellow-300">
                        "https://example.com"
                      </span>
                      )
                    </span>
                  </div>
                </div>

                {/* Response */}
                <div className="mb-4 rounded bg-[#0D1117] p-3 font-mono text-sm">
                  <div className="font-semibold text-emerald-300">
                    Response:
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-emerald-400">
                    <CheckCircleIcon className="h-4 w-4" /> Success: Page loaded
                  </div>
                  <div className="mt-1 text-white/70">
                    title: <span className="text-white">"Example Domain"</span>
                  </div>
                  <div className="text-white/70">
                    status: <span className="text-white">200</span>
                  </div>
                </div>

                {/* Command Entry 2 */}
                <div className="mb-4 rounded bg-[#0D1117] p-3 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <TerminalIcon className="h-4 w-4 text-emerald-300" />
                    <span className="text-emerald-300">$</span>
                    <span className="font-semibold text-white">
                      ventriloquist.extract(
                      <span className="text-yellow-300">
                        {'{ selector: "h1", text: true }'}
                      </span>
                      )
                    </span>
                  </div>
                </div>

                {/* Result */}
                <div className="rounded bg-[#0D1117] p-3 font-mono text-sm">
                  <div className="font-semibold text-emerald-300">Result:</div>
                  <div className="mt-1 flex items-center gap-2 text-white/90">
                    <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
                    <span className="text-white">"Example Domain"</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
