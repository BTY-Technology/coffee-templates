'use client'

import React from 'react'
import Image from 'next/image'
import { Star, Shield, Check } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const ValueProposition: React.FC = () => {
  const ref = useScrollAnimation<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="xl:mt-20 xl:mb-20 opacity-0 animate-fade-slide-in bg-secondary max-w-7xl border-amber-900/30 border rounded-3xl mt-20 mr-auto mb-20 ml-auto pt-8 pr-8 pb-8 pl-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - Featured Image Card */}
        <Card className="overflow-hidden bg-center bg-cover rounded-2xl ring-amber-900/30 ring-1 relative min-h-[520px]">
          <Image
            src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70fcd867-fd43-4c84-9ad4-393392e5c36e_800w.jpg"
            alt="Coffee with conscience"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="sm:h-[520px] sm:p-8 flex flex-col pt-6 pr-6 pb-6 pl-6 relative bg-gradient-to-t from-primary/90 via-primary/40 to-transparent">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-sm text-amber-300 font-sans">Our Promise</p>
                <p className="text-xs sm:text-sm mt-1 text-neutral-400 font-sans">
                  Ethical & Sustainable
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="sm:text-4xl text-2xl text-white tracking-tight mb-4 font-sans font-medium">
                Coffee with
                <span className="inline text-amber-400 ml-2 font-sans font-medium">Conscience</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-200 mb-6">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <div className="h-2 w-2 rounded-full bg-amber-600" />
                  <div className="h-2 w-2 rounded-full bg-amber-700" />
                </div>
                <p className="text-sm font-sans">Direct trade partnerships</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                Learn our story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
          </div>
        </Card>

        {/* Middle - Stats & Philosophy */}
        <Card className="sm:p-8 overflow-hidden border-amber-900/40 border bg-amber-950/20 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
          <div className="relative">
            <p className="text-sm text-amber-400/80 font-sans">Proven Quality:</p>
            <h3 className="mt-2 text-2xl sm:text-3xl tracking-tight text-neutral-100 font-sans font-medium">
              <span className="text-amber-400 font-sans font-medium">98%</span> customer retention,{' '}
              <span className="text-amber-500 font-sans font-medium">5-star</span> average rating
            </h3>

            <p className="mt-8 text-sm text-amber-400/80 font-sans">Our Philosophy:</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3 text-sm text-neutral-200 font-sans">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Small Batch Roasting
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-200 font-sans">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                Single-Origin Focus
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-200 font-sans">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-700" />
                Farm-Direct Sourcing
              </div>
            </div>

            <div className="mt-8 rounded-xl border p-5 border-amber-900/40 bg-primary/60">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-neutral-300 mt-3 font-sans">
                &ldquo;Roasted Roots elevated our coffee program. The quality and consistency are
                unmatched in the industry.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop&crop=faces"
                  alt="James Wilson"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="text-sm">
                  <p className="text-neutral-200 font-sans">James Wilson</p>
                  <p className="text-xs text-neutral-500 font-sans">Head Barista, Brew Collective</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right - Two Stacked Cards */}
        <div className="grid grid-rows-2 gap-6">
          {/* Quality Promise */}
          <Card className="sm:p-8 border-amber-900/40 border bg-amber-950/20 rounded-2xl pt-6 pr-6 pb-6 pl-6 flex items-center justify-center">
            <div className="flex items-center sm:block">
              <div className="relative h-28 w-28 flex-shrink-0 sm:mx-auto">
                <div className="absolute inset-0 rounded-full bg-amber-500" />
                <div className="absolute inset-[10px] rounded-full bg-primary/80 flex items-center justify-center">
                  <Shield className="text-amber-400" size={32} />
                </div>
              </div>
              <div className="ml-5 sm:ml-0 sm:mt-6 sm:text-center text-left">
                <h4 className="text-lg font-medium tracking-tight text-white font-sans">
                  Quality Promise
                </h4>
                <p className="mt-2 text-sm text-neutral-400 font-sans">
                  Fresh roasted to order. If you&rsquo;re not satisfied, we&rsquo;ll make it right.
                </p>
              </div>
            </div>
          </Card>

          {/* Metrics Card */}
          <Card className="sm:p-8 border-amber-900/40 border bg-amber-950/20 rounded-2xl pt-6 pr-6 pb-6 pl-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-2xl tracking-tight text-white font-sans font-medium">8+</div>
                <p className="text-xs mt-1 text-neutral-400 font-sans">Years roasting</p>
              </div>
              <div>
                <div className="text-2xl tracking-tight text-white font-sans font-medium">48h</div>
                <p className="text-xs mt-1 text-neutral-400 font-sans">Roast to ship</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm font-sans">
                <span className="text-neutral-300 font-sans">Bean Quality</span>
                <span className="text-amber-500 font-sans">Premium</span>
              </div>
              <div className="flex items-center justify-between text-sm font-sans">
                <span className="text-neutral-300 font-sans">Roast Profile</span>
                <span className="text-amber-500 font-sans">Custom</span>
              </div>
              <div className="flex items-center justify-between text-sm font-sans">
                <span className="text-neutral-300 font-sans">Sustainability</span>
                <span className="text-amber-500 font-sans">Certified</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-900/30">
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                <Check className="text-green-400" size={12} />
                Fair Trade Certified
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
