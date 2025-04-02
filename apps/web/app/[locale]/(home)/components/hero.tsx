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
            <div className="flex flex-col gap-8">
              <h1 className="font-bold text-7xl text-white leading-[1.1] tracking-tight">
                <span className="block">
                  <span className="font-light italic">deep</span> WEB
                </span>
                <span className="mt-1 block">
                  CRAWLING <span className="font-light italic">with</span>
                </span>
                <span className="mt-1 block">
                  N8N <span className="font-light italic">made</span>
                </span>
                <span className="mt-1 flex items-center">
                  SIMPLE <MoveRight className="ml-4 h-12 w-12" />
                </span>
              </h1>

              <p className="max-w-xl text-white/90 text-xl leading-relaxed">
                Quickly create crawling and scraping jobs with n8n and see live
                results in Bright Data via the secure Puppeteer library
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
                <span className="text-base text-white/90">24/7 Support</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className="rounded-full bg-emerald-400/20 p-2">
                  <ShieldCheckIcon className="h-5 w-5 text-emerald-300" />
                </div>
                <span className="text-base text-white/90">Secure Library</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className="rounded-full bg-emerald-400/20 p-2">
                  <BoxIcon className="h-5 w-5 text-emerald-300" />
                </div>
                <span className="text-base text-white/90">
                  Real-time Preview
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Demo Terminal */}
          <div className="md:w-1/2 md:pl-8">
            <Card className="overflow-hidden rounded-2xl border-none bg-white/90 shadow-lg">
              {/* Green Banner */}
              <div className="bg-[#2E8B57] px-6 py-3">
                <span className="font-semibold text-lg text-white">
                  Action Node
                </span>
              </div>

              <div className="flex flex-col gap-4 p-6">
                {/* Condition Section */}
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-[#2E8B57] text-sm">
                    Condition
                  </span>
                  <div className="rounded-lg border border-[#2E8B57]/20 bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[#2E8B57]">Element exists</span>
                      <svg
                        className="h-5 w-5 text-[#2E8B57]/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Search Input */}
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded border border-[#2E8B57]/20">
                    <div className="h-3 w-3 rounded-sm bg-[#2E8B57]" />
                  </div>
                  <div className="flex-1 rounded-lg border border-[#2E8B57]/20 bg-white p-3 font-mono text-[#2E8B57]/80 text-sm">
                    #contactsList
                  </div>
                </div>

                {/* Action Label */}
                <div className="mt-2">
                  <span className="font-medium text-[#2E8B57] text-sm">
                    Action
                  </span>
                </div>

                {/* Fill Form Action */}
                <div className="rounded-lg border border-[#2E8B57]/20 bg-white p-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#2E8B57]">Fill Form</span>
                    <svg
                      className="h-5 w-5 text-[#2E8B57]/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-3">
                  {/* Element Field */}
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-[#2E8B57]/70 text-sm">
                      Element
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded border border-[#2E8B57]/20">
                        <div className="h-3 w-3 rounded-sm bg-[#2E8B57]" />
                      </div>
                      <div className="flex-1 rounded-lg border border-[#2E8B57]/20 bg-white p-3 font-mono text-[#2E8B57]/80 text-sm">
                        #search
                      </div>
                    </div>
                  </div>

                  {/* Value Field */}
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-[#2E8B57]/70 text-sm">
                      Value
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded border border-[#2E8B57]/20">
                        <div className="h-3 w-3 rounded-sm bg-[#2E8B57]" />
                      </div>
                      <div className="flex-1 rounded-lg border border-[#2E8B57]/20 bg-white p-3 font-mono text-[#2E8B57]/80 text-sm">
                        &#123;&#123; $json.fullName &#125;&#125;
                      </div>
                    </div>
                  </div>

                  {/* Submit Checkbox */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded border border-[#2E8B57]/20">
                      <div className="h-3 w-3 rounded-sm bg-[#2E8B57]" />
                    </div>
                    <span className="text-[#2E8B57]/80">
                      Submit form after fill
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-[#2E8B57]/10 border-t" />

                {/* Backup Action Section */}
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-[#2E8B57]/70 text-sm">
                    Backup action
                  </span>
                  <div className="rounded-lg border border-[#2E8B57]/20 bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[#2E8B57]">Click element</span>
                      <svg
                        className="h-5 w-5 text-[#2E8B57]/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Browse Input */}
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded border border-[#2E8B57]/20">
                    <div className="h-3 w-3 rounded-sm bg-[#2E8B57]" />
                  </div>
                  <div className="flex-1 rounded-lg border border-[#2E8B57]/20 bg-white p-3 font-mono text-[#2E8B57]/80 text-sm">
                    &#123;&#123; $json.browse &#125;&#125;
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
