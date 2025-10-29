'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Star, Trophy, ArrowRight, PlayCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const Hero: React.FC = () => {
  const ref = useScrollAnimation<HTMLElement>()
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  const handleWatchVideo = () => {
    setVideoModalOpen(true)
  }

  const handleCloseModal = () => {
    setVideoModalOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <section ref={ref} className="overflow-hidden relative">
      {/* Background Gradient Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-amber-800/10 blur-3xl"></div>
        <div className="absolute -right-32 top-48 h-80 w-80 rounded-full bg-orange-700/10 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pb-28">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-12 items-center opacity-0 animate-fade-slide-in">
          {/* Copy */}
          <div className="lg:col-span-7 lg:my-20 my-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-700/30 bg-amber-900/20 px-3 py-1.5 text-xs text-amber-200/90 font-sans">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Single-origin beans sourced directly from farms
            </div>

            <h1 className="sm:text-6xl lg:text-7xl leading-[1.05] text-5xl font-medium tracking-tight">
              Craft Coffee
              <span className="block font-medium italic text-amber-400 font-script mt-2">
                Roasted with Purpose
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-neutral-300/90 font-sans">
              From bean to cup, we honor the journey. Each batch is small,
              thoughtful, and roasted to unlock the unique character of every
              origin.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => scrollToSection('#gallery')}
                className="group relative w-auto cursor-pointer select-none text-base leading-7 flex transition-all duration-200 ease-out focus:outline-none hover:brightness-95 active:brightness-90 font-semibold text-primary bg-accent pt-3 pr-8 pb-3 pl-8 items-center justify-center rounded font-sans gap-2 shadow-[3px_3px_0px_0px_rgba(26,22,20,1)] hover:shadow-[2px_2px_0px_0px_rgba(26,22,20,1)] active:shadow-[1px_1px_0px_0px_rgba(26,22,20,1)]"
              >
                Explore Our Beans
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={handleWatchVideo}
                className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-amber-400 transition font-sans"
              >
                <PlayCircle size={20} />
                Watch Our Process
              </button>
            </div>

            {/* Metrics */}
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-amber-400" fill="currentColor" />
                <div>
                  <p className="text-3xl tracking-tight font-medium font-sans">4.9</p>
                  <span className="text-xs text-neutral-400 font-sans">
                    from 2,400+ reviews
                  </span>
                </div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-amber-900/30"></div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-400" />
                <p className="text-sm text-neutral-300 font-sans">
                  2024 Best Craft Roastery
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative ml-0 sm:ml-8">
              <Image
                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b4de7807-d550-431a-b3c2-07885c82aef4_1600w.jpg"
                alt="Forest-inspired coffee bag under studio spotlight"
                width={600}
                height={800}
                className="z-10 w-full max-w-md object-cover rounded-xl relative shadow-2xl"
                priority
              />
            </div>
            <p className="absolute right-0 top-12 hidden lg:block max-w-[11rem] text-right text-sm text-neutral-300/90 font-sans">
              Every bean tells a story. Let us share ours with you.
            </p>
          </div>
        </div>

        {/* Testimonial Strip */}
        <div className="mt-16 rounded-2xl border border-amber-900/30 bg-amber-950/20 backdrop-blur-sm opacity-0 animate-fade-slide-in [animation-delay:300ms]">
          <div className="flex flex-col md:flex-row gap-6 px-6 py-5 items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&h=200&fit=crop&crop=faces"
                alt="Elena Martinez"
                width={44}
                height={44}
                className="w-11 h-11 object-cover ring-amber-700/30 ring-2 rounded-full"
              />
              <p className="text-sm text-neutral-300 font-sans">
                &ldquo;The depth of flavor is incredible. You can taste the care in
                every cup.&rdquo; —{' '}
                <span className="font-medium text-white">Elena Martinez</span>
              </p>
            </div>
            <div className="hidden md:block h-px w-full bg-amber-900/30 md:h-8 md:w-px"></div>
            <div className="flex items-center gap-6 text-sm text-neutral-300 font-sans">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-amber-400"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Trusted by 12,000+ coffee lovers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div className="relative w-full max-w-5xl mx-4">
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition"
              aria-label="Close video"
            >
              <X size={32} />
            </button>
            <div className="relative aspect-video bg-secondary rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Coffee Roasting Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
