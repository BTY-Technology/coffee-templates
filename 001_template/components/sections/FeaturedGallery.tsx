'use client'

import React from 'react'
import Image from 'next/image'
import { products } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const FeaturedGallery: React.FC = () => {
  const ref = useScrollAnimation<HTMLDivElement>()

  return (
    <div id="gallery" ref={ref} className="w-full max-w-7xl mt-12 mr-auto mb-24 ml-auto pt-6 pr-6 pb-6 pl-6">
      <div className="relative">
        <div className="text-center opacity-0 animate-fade-slide-in">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none text-white/95 tracking-tight uppercase font-sans font-medium">
            HANDCRAFTED
          </h2>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none text-white/95 tracking-tight uppercase mt-1 font-sans font-medium">
            PERFECTION
          </h2>

          <div className="flex gap-2 text-amber-400/40 mt-6 items-center">
            <span className="text-base font-sans">+</span>
            <div className="h-px flex-1 bg-amber-900/30"></div>
            <span className="text-base font-sans">+</span>
          </div>

          <p className="mt-6 text-xl sm:text-2xl text-neutral-300/90 tracking-tight max-w-3xl mx-auto font-sans font-medium">
            Small-batch roasting that honors tradition while embracing innovation.
            Each blend crafted to perfection.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 animate-fade-slide-in [animation-delay:300ms]">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl overflow-hidden border border-amber-900/30 bg-amber-950/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-72 sm:h-80 lg:h-[360px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
