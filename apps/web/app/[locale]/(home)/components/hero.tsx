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
    <div className="w-full bg-gradient-to-br from-[#2E8B57] to-[#1F5C3D]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-20 py-24 md:flex-row lg:py-28">
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-12 md:w-1/2">
            <div className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-white/10 p-3">
                <Image
                  src="/ventriloquist-logo.svg"
                  alt="Ventriloquist"
                  width={48}
                  height={48}
                  className="rounded-full"
                  unoptimized
                  priority
                />
              </div>
              <h2 className="font-bold text-3xl text-white tracking-wider">
                VENTRILOQUIST
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              <h1 className="font-bold text-6xl text-white leading-[1.15] tracking-tight">
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

            <div className="flex flex-row gap-6">
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

            <div className="flex flex-row flex-wrap gap-12">
              <div className="flex flex-row items-center gap-3">
                <div className="rounded-full bg-emerald-400/20 p-2">
                  <HeadphonesIcon className="h-5 w-5 text-emerald-300" />
                </div>
                <span className="text-base text-white/90">
                  Customer support
                </span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className="rounded-full bg-emerald-400/20 p-2">
                  <ShieldCheckIcon className="h-5 w-5 text-emerald-300" />
                </div>
                <span className="text-base text-white/90">
                  Secure Puppeteer library
                </span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className="rounded-full bg-emerald-400/20 p-2">
                  <BoxIcon className="h-5 w-5 text-emerald-300" />
                </div>
                <span className="text-base text-white/90">
                  Real-time action preview
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Demo Terminal */}
          <div className="md:w-1/2 md:pl-8">
            <Card className="overflow-hidden rounded-xl border-none bg-black/30 p-5 shadow-xl backdrop-blur-sm">
              <div className="rounded-lg bg-black/80 p-4">
                {/* Terminal Header */}
                <div className="mb-4 flex items-center justify-between border-white/10 border-b pb-3">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="font-medium text-sm text-white/70">
                    n8n.local.node — Ventriloquist Browser
                  </div>
                  <div className="w-16" /> {/* Empty space for balance */}
                </div>

                {/* Action Setup */}
                <div className="mb-4 rounded-t-lg bg-[#1A232E] p-3 text-sm">
                  <div className="flex items-center gap-1 text-white/70">
                    <span className="font-medium text-emerald-300">
                      Ventriloquist Node
                    </span>
                    <span>›</span>
                    <span>Configure operation</span>
                  </div>
                  <div className="mt-3 rounded bg-[#0D1117] p-3 font-mono">
                    <div className="flex items-start">
                      <span className="mr-2 text-purple-400">operation:</span>
                      <span className="text-yellow-300">"browser"</span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 text-purple-400">url:</span>
                      <span className="text-yellow-300">
                        "https://example.com"
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 text-purple-400">actions:</span>
                      <span className="text-emerald-300">[</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-emerald-300">&#123;</span>
                      <span className="text-purple-400"> type: </span>
                      <span className="text-yellow-300">"extract"</span>
                      <span className="text-purple-400">, selector: </span>
                      <span className="text-yellow-300">"h1"</span>
                      <span className="text-emerald-300"> &#125;</span>
                    </div>
                    <div className="text-emerald-300">]</div>
                  </div>
                </div>

                {/* Terminal Results */}
                <div className="rounded-b-lg bg-[#0D1117] p-3 font-mono text-sm">
                  <div className="text-emerald-300">
                    ▶ Running browser task...
                  </div>
                  <div className="mt-2 text-white/70">
                    <span className="text-emerald-400">✓</span> Connected to
                    Chrome browser
                  </div>
                  <div className="text-white/70">
                    <span className="text-emerald-400">✓</span> Navigated to{' '}
                    <span className="text-blue-400">https://example.com</span>
                  </div>
                  <div className="text-white/70">
                    <span className="text-emerald-400">✓</span> Extracted
                    element with selector: h1
                  </div>
                  <div className="mt-2 text-white/70">Output:</div>
                  <div className="mt-1 rounded bg-[#1A232E] p-2">
                    <pre className="text-white">
                      {JSON.stringify(
                        {
                          success: true,
                          data: {
                            content: 'Example Domain',
                            html: '<h1>Example Domain</h1>',
                          },
                        },
                        null,
                        2
                      )}
                    </pre>
                  </div>
                  <div className="mt-3 text-emerald-300">
                    Task completed in 0.58s
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
