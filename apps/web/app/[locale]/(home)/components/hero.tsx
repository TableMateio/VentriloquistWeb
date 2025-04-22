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
                  <span className="font-light italic">Multi-step </span> 
                  Web Scraping <span className="font-light italic">without letting go </span>
                  of the strings
              </h1>

              <p className="max-w-xl text-white/90 text-xl leading-relaxed">
                Popups. 2FA. Conditional logic. Smart forms. AI-formatted extraction. All handled by n8n nodes and orchestrated by you.
              </p>
            </div>

            <div className="flex flex-col gap-4 max-w-md">
              <p className="text-white/90 text-lg font-medium">Be the first to know when we launch</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 h-12 px-4 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                />
                <button className="h-12 px-6 rounded-md bg-white text-[#2E8B57] font-medium hover:bg-white/90 transition-colors">
                  Get Early Access
                </button>
              </div>
              <p className="text-white/70 text-sm">Join our waitlist for exclusive early access</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6 w-full max-w-3xl">
              <div className="flex flex-row items-center gap-3 bg-white/5 rounded-lg p-3 transition-all hover:bg-white/10">
                <div className="rounded-full bg-emerald-400/20 p-2 shrink-0">
                  <HeadphonesIcon className="h-5 w-5 text-emerald-300" />
                </div>
                <span className="text-base text-white/90">Supports Local & Browserless</span>
              </div>
              <div className="flex flex-row items-center gap-3 bg-white/5 rounded-lg p-3 transition-all hover:bg-white/10">
                <div className="rounded-full bg-emerald-400/20 p-2 shrink-0">
                  <ShieldCheckIcon className="h-5 w-5 text-emerald-300" />
                </div>
                <span className="text-base text-white/90">Powered by Puppeteer</span>
              </div>
              <div className="flex flex-row items-center gap-3 bg-white/5 rounded-lg p-3 transition-all hover:bg-white/10">
                <div className="rounded-full bg-emerald-400/20 p-2 shrink-0">
                  <BoxIcon className="h-5 w-5 text-emerald-300" />
                </div>
                <span className="text-base text-white/90">
                  n8n Native
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 md:pl-8 flex justify-center">
            <div className="relative w-[600px] h-[550px] transform perspective-1000 -mt-12">
              <div className="absolute inset-0 bg-white/10 rounded-xl shadow-2xl transform -rotate-3 scale-110"></div>
              <div 
                className="relative w-full h-full rounded-xl overflow-hidden border-8 border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.4)] transform rotate-3 transition-transform hover:rotate-0 duration-500"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(-8deg) rotateX(3deg)'
                }}
              >
                <img 
                  src="/assets/hero.png" 
                  alt="Ventriloquist Node Interface" 
                  className="w-full h-full object-contain bg-gradient-to-b from-[#1F5C3D]/5 to-[#2E8B57]/10 p-4"
                />
              </div>
            </div>
          </div>

          {/* 
            ORIGINAL NODE CODE - SAVED FOR LATER USE
            
          <div className="md:w-1/2 md:pl-8">
            <div className="relative">
              <div className="-left-6 absolute top-[120px] h-px w-6 bg-gray-300" />
              <div className="-left-8 -translate-y-1/2 absolute top-[120px] h-2 w-2 transform rounded-sm bg-gray-300" />
            </div>

            <Card className="!p-0 relative w-[380px] overflow-hidden rounded-2xl border-none bg-[#f6ffe7] shadow-lg">
              <div className="-right-4 absolute top-[140px] h-px w-4 bg-[#43af65]/80" />
              <div className="-right-6 -translate-y-1/2 absolute top-[140px] h-2 w-2 transform rounded-sm bg-[#43af65]/80" />
              <div className="-right-4 absolute top-[280px] h-px w-4 bg-[#43af65]/80" />
              <div className="-right-6 -translate-y-1/2 absolute top-[280px] h-2 w-2 transform rounded-sm bg-[#43af65]/80" />

              <div className="rounded-t-2xl bg-[#43af65] px-4 py-2">
                <span className="font-medium text-[#f6ffe7] text-sm">
                  Action Node
                </span>
              </div>

              <div className="flex flex-col gap-3 p-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[#43af65] text-sm">Condition</span>
                  <div className="rounded-lg border border-[#43af65]/20 bg-[#f6ffe7] p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#43af65] text-sm">
                        Element exists
                      </span>
                      <svg
                        className="h-3.5 w-3.5 text-[#43af65]"
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

                <div className="flex items-center gap-1.5">
                  <div className="flex h-3.5 w-3.5 items-center justify-center rounded-sm border border-[#43af65]">
                    <div className="h-2 w-2 rounded-sm bg-[#43af65]" />
                  </div>
                  <div className="flex-1 rounded-lg border border-[#43af65]/20 bg-[#f6ffe7] p-2 font-mono text-[#43af65] text-sm">
                    #contactsList
                  </div>
                </div>

                <div className="border-[#43af65]/20 border-t" />

                <div>
                  <span className="font-medium text-[#43af65] text-sm">
                    Action
                  </span>
                </div>

                <div className="rounded-lg border border-[#43af65]/20 bg-[#f6ffe7] p-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#43af65] text-sm">Fill Form</span>
                    <svg
                      className="h-3.5 w-3.5 text-[#43af65]"
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

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#43af65] text-sm">Element</span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-3.5 w-3.5 items-center justify-center rounded-sm border border-[#43af65]">
                        <div className="h-2 w-2 rounded-sm bg-[#43af65]" />
                      </div>
                      <div className="flex-1 rounded-lg border border-[#43af65]/20 bg-[#f6ffe7] p-2 font-mono text-[#43af65] text-sm">
                        #search
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[#43af65] text-sm">Value</span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-3.5 w-3.5 items-center justify-center rounded-sm border border-[#43af65]">
                        <div className="h-2 w-2 rounded-sm bg-[#43af65]" />
                      </div>
                      <div className="flex-1 rounded-lg border border-[#43af65]/20 bg-[#f6ffe7] p-2 font-mono text-[#43af65] text-sm">
                        &#123;&#123; $json.fullName &#125;&#125;
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <div className="flex h-3.5 w-3.5 items-center justify-center rounded-sm border border-[#43af65]">
                      <div className="h-2 w-2 rounded-sm bg-[#43af65]" />
                    </div>
                    <span className="text-[#43af65] text-sm">
                      Submit form after fill
                    </span>
                  </div>
                </div>

                <div className="border-[#43af65]/20 border-t" />

                <div className="flex flex-col gap-1.5">
                  <span className="text-[#43af65] text-sm">Backup action</span>
                  <div className="rounded-lg border border-[#43af65]/20 bg-[#f6ffe7] p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#43af65] text-sm">
                        Click element
                      </span>
                      <svg
                        className="h-3.5 w-3.5 text-[#43af65]"
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

                <div className="flex items-center gap-1.5">
                  <div className="flex h-3.5 w-3.5 items-center justify-center rounded-sm border border-[#43af65]">
                    <div className="h-2 w-2 rounded-sm bg-[#43af65]" />
                  </div>
                  <div className="flex-1 rounded-lg border border-[#43af65]/20 bg-[#f6ffe7] p-2 font-mono text-[#43af65] text-sm">
                    &#123;&#123; $json.browse &#125;&#125;
                  </div>
                </div>
              </div>
            </Card>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};
