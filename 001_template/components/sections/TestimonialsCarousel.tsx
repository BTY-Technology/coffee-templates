'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { Card } from '@/components/ui/Card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const TestimonialsCarousel: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLElement>()
  const railRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scrollDistance = 540

  const updateScrollButtons = () => {
    if (!railRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = railRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return

    updateScrollButtons()
    rail.addEventListener('scroll', updateScrollButtons)
    window.addEventListener('resize', updateScrollButtons)

    return () => {
      rail.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (!railRef.current) return
    const distance = direction === 'left' ? -scrollDistance : scrollDistance
    railRef.current.scrollBy({ left: distance, behavior: 'smooth' })
  }

  return (
    <section
      id="story"
      ref={sectionRef}
      className="z-10 sm:p-8 opacity-0 animate-fade-slide-in bg-secondary w-full max-w-7xl border-amber-900/30 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-2xl"
    >
      <div className="flex gap-6 sm:px-0 pr-1 pl-1 items-center flex-wrap">
        <h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-white font-sans tracking-tighter">
          Testimonials.
        </h2>
        <span
          aria-hidden="true"
          role="separator"
          aria-orientation="vertical"
          className="w-px bg-amber-900/30 h-10 hidden sm:block"
        />
        <p className="sm:text-base text-sm text-neutral-400 mt-1 font-sans tracking-tight">
          Real stories from our coffee community. Taste the difference quality makes.
        </p>
      </div>
      <div className="h-px bg-amber-900/30 mt-4" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 sm:mt-8 mt-6 items-center">
        <div className="lg:col-span-12 relative">
          <div className="relative overflow-hidden h-[420px] rounded-3xl mt-6">
            {/* Gradient Overlays */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-secondary to-transparent z-10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-secondary to-transparent z-10"
            />

            {/* Testimonials Rail */}
            <div
              ref={railRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => {
                const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', '-rotate-1']
                return (
                  <Card
                    key={testimonial.id}
                    className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-primary border border-amber-900/40 rounded-[24px] p-8 text-neutral-100 hover:-translate-y-0.5 backdrop-blur-sm snap-center shadow-2xl"
                    rotation={rotations[index % rotations.length]}
                  >
                    <p className="text-lg sm:text-xl md:text-2xl text-neutral-100 font-sans tracking-tight">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-xl object-cover"
                      />
                      <div>
                        <div className="text-sm font-sans tracking-tight">{testimonial.name}</div>
                        <div className="text-xs text-neutral-400 font-sans tracking-tight">
                          {testimonial.role}, {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
              <button
                aria-label="Previous"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="hover:bg-amber-900/40 transition-colors inline-flex text-neutral-100 bg-amber-950/40 w-10 h-10 border-amber-900/40 border rounded-full items-center justify-center disabled:opacity-50 disabled:pointer-events-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                aria-label="Next"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="w-10 h-10 rounded-full text-primary bg-accent hover:bg-amber-300 transition-colors inline-flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
