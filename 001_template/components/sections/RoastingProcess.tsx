'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { processSteps } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const RoastingProcess: React.FC = () => {
  const ref = useScrollAnimation<HTMLElement>()
  const [currentStep, setCurrentStep] = useState(0)

  const goToPrevious = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const goToNext = () => {
    setCurrentStep((prev) => (prev < processSteps.length - 1 ? prev + 1 : prev))
  }

  const step = processSteps[currentStep]

  return (
    <section id="process" ref={ref} className="max-w-7xl mt-24 mr-auto mb-24 ml-auto pr-6 pl-6">
      <div className="relative overflow-hidden rounded-3xl col-span-1 md:col-span-3 lg:col-span-6 flex flex-col bg-[#0f0d0c] border-amber-900/40 border opacity-0 animate-fade-slide-in">
        <div className="sm:p-8 md:p-9 pt-6 pr-6 pb-6 pl-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-amber-400/80 font-sans">Our Roasting Process</p>
            <div className="flex items-center gap-1.5">
              {step.progress.map((value, index) => (
                <span
                  key={index}
                  className="size-2 rounded-full bg-amber-500 transition-opacity"
                  style={{ opacity: value / 100 }}
                />
              ))}
            </div>
          </div>

          <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl tracking-tight font-medium text-neutral-100 font-sans">
            Stage {step.step} — {step.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl font-sans">
            {step.description}
          </p>

          {step.metric && (
            <div className="mt-8">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-100 font-sans">
                  {step.metric.value}
                </span>
                <span className="text-xs uppercase text-neutral-400 font-sans">
                  {step.metric.label}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-sans">
                {step.metric.sublabel}
              </p>
            </div>
          )}
        </div>

        <div className="sm:px-8 md:px-9 sm:pb-8 md:pb-9 border-amber-900/30 border-t mt-auto pr-6 pb-6 pl-6 pt-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <button
                onClick={goToPrevious}
                disabled={currentStep === 0}
                aria-label="Previous step"
                className="inline-flex items-center justify-center size-9 rounded-xl bg-amber-950/40 border border-amber-900/40 hover:border-amber-700/60 transition disabled:opacity-50 disabled:pointer-events-none"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goToNext}
                disabled={currentStep === processSteps.length - 1}
                aria-label="Next step"
                className="inline-flex items-center justify-center size-9 rounded-xl bg-amber-950/40 border border-amber-900/40 hover:border-amber-700/60 transition disabled:opacity-50 disabled:pointer-events-none"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-sans">
              <span>
                {currentStep + 1}/{processSteps.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
