'use client'

import React, { useState } from 'react'
import { Check, Zap, MessageCircle, X } from 'lucide-react'
import { pricingPlans } from '@/lib/data'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/utils/cn'

export const PricingPlans: React.FC = () => {
  const ref = useScrollAnimation<HTMLDivElement>()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  const handlePlanSelect = (planId: string, planName: string) => {
    if (planId === 'connoisseur') {
      // For custom plan, show contact form
      setSelectedPlan(planId)
      setShowModal(true)
    } else {
      // For other plans, show subscription modal
      setSelectedPlan(planId)
      setShowModal(true)
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedPlan(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your payment/subscription service
    alert(`Thank you! Your ${selectedPlan} subscription request has been received. We'll contact you shortly.`)
    handleCloseModal()
  }

  return (
    <div id="pricing" ref={ref} className="sm:px-8 lg:px-10 lg:pt-20 lg:pb-20 max-w-7xl mr-auto mb-24 ml-auto pt-10 pr-6 pb-10 pl-6">
      <div className="flex flex-col opacity-0 animate-fade-slide-in text-center mb-16 items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 ring-1 ring-amber-500/20 text-amber-300 text-sm font-medium mb-8 font-sans">
          <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-medium font-sans">Subscriptions</span>
        </div>
        <h2 className="text-4xl md:text-5xl text-white mb-6 font-sans font-medium tracking-tighter">
          Fresh Coffee{' '}
          <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent font-sans font-medium tracking-tighter">
            Delivered
          </span>
        </h2>
        <p className="leading-relaxed text-lg text-white/70 max-w-2xl mr-auto ml-auto">
          Choose a plan that fits your coffee ritual. Cancel or adjust anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 opacity-0 animate-fade-slide-in [animation-delay:300ms]">
        {pricingPlans.map((plan, index) => {
          const isHighlighted = plan.highlighted
          const cardClasses = cn(
            'relative overflow-hidden rounded-3xl bg-gradient-to-b from-secondary/90 via-secondary/95 to-primary/90 border border-amber-900/30 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/40',
            isHighlighted && 'ring-1 ring-amber-500/20 transform scale-105'
          )

          const BadgeIcon = index === 0 ? Check : index === 1 ? Zap : MessageCircle

          return (
            <Card key={plan.id} className={cardClasses} rotation={plan.rotation}>
              {isHighlighted && (
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 rounded-3xl blur-xl animate-pulse" />
              )}

              <CardHeader className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 text-white/60">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10 text-white/80 text-xs font-medium font-sans">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(3)].map((_, i) => (
                        <span
                          key={i}
                          className={cn(
                            'h-1.5 w-1.5 rounded-full',
                            i <= index ? 'bg-amber-400' : 'bg-amber-400/20'
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <div
                    className={cn(
                      'inline-flex items-center gap-2 px-2 py-1 rounded-lg ring-1 text-xs font-sans',
                      isHighlighted
                        ? 'bg-amber-500/20 ring-amber-500/30 text-amber-300'
                        : 'bg-white/[0.06] ring-white/10 text-white/70'
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6v6l4 2" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    {plan.frequency}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl text-white mb-2 font-sans font-medium tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 font-sans">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl text-white font-sans font-medium tracking-tight">
                      {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                    </span>
                    <span className="text-white/50 text-sm font-sans">
                      {typeof plan.price === 'number' ? '/shipment' : 'pricing'}
                    </span>
                  </div>
                </div>

                <Button
                  variant={plan.buttonVariant}
                  onClick={() => handlePlanSelect(plan.id, plan.name)}
                  className={cn(
                    'w-full mb-8',
                    isHighlighted &&
                      'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-primary shadow-lg shadow-amber-500/25'
                  )}
                >
                  {plan.buttonText}
                  {isHighlighted && <Zap size={16} />}
                </Button>

                <div className="space-y-4">
                  <p
                    className={cn(
                      'text-xs font-medium tracking-widest uppercase mb-4 font-sans',
                      isHighlighted ? 'text-amber-300' : 'text-white/50'
                    )}
                  >
                    {index === 0 ? 'What\'s included' : index === 1 ? 'Everything in Explorer, plus' : 'Everything in Enthusiast, plus'}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div
                          className={cn(
                            'mt-0.5 h-5 w-5 rounded-full ring-1 flex items-center justify-center flex-shrink-0',
                            isHighlighted
                              ? 'bg-amber-500/20 ring-amber-500/30'
                              : index === 2
                              ? 'bg-orange-500/20 ring-orange-500/30'
                              : 'bg-amber-500/20 ring-amber-500/30'
                          )}
                        >
                          <Check
                            className={cn(
                              'w-3 h-3',
                              isHighlighted
                                ? 'text-amber-400'
                                : index === 2
                                ? 'text-orange-400'
                                : 'text-amber-400'
                            )}
                          />
                        </div>
                        <span className="text-sm text-white/80 font-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      <div className="flex flex-col opacity-0 animate-fade-slide-in [animation-delay:400ms] text-center mt-16 items-center">
        <p className="text-white/50 text-sm font-sans">
          Questions about subscriptions?{' '}
          <a
            href="#"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors font-sans"
          >
            We&rsquo;re here to help
          </a>
        </p>
      </div>

      {/* Subscription Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-sm p-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-md bg-secondary border border-amber-900/40 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white/70 hover:text-amber-400 transition"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <h3 className="text-2xl font-medium text-white mb-2 font-sans">
                {selectedPlan === 'connoisseur' ? 'Contact Us' : 'Start Your Subscription'}
              </h3>
              <p className="text-neutral-400 text-sm mb-6 font-sans">
                {selectedPlan === 'connoisseur'
                  ? 'Tell us about your coffee preferences and we\'ll create a custom plan for you.'
                  : 'Fill out the form below and we\'ll get you started with fresh coffee deliveries.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-neutral-300 mb-2 font-sans">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full h-10 px-4 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/20 backdrop-blur border-amber-900/30 bg-primary/60 text-white placeholder-white/40"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-neutral-300 mb-2 font-sans">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full h-10 px-4 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/20 backdrop-blur border-amber-900/30 bg-primary/60 text-white placeholder-white/40"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-neutral-300 mb-2 font-sans">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full h-10 px-4 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/20 backdrop-blur border-amber-900/30 bg-primary/60 text-white placeholder-white/40"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {selectedPlan === 'connoisseur' && (
                  <div>
                    <label htmlFor="message" className="block text-sm text-neutral-300 mb-2 font-sans">
                      Tell us about your preferences
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/20 backdrop-blur border-amber-900/30 bg-primary/60 text-white placeholder-white/40 resize-none"
                      placeholder="Preferred roast level, flavor profiles, brewing methods..."
                    />
                  </div>
                )}

                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 h-11 px-4 rounded-xl ring-1 text-sm transition ring-amber-900/30 text-white bg-amber-950/40 hover:bg-amber-900/40 font-sans"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 h-11 px-4 rounded-xl text-sm transition text-primary bg-amber-400 hover:bg-amber-500 font-semibold font-sans"
                  >
                    {selectedPlan === 'connoisseur' ? 'Send Request' : 'Subscribe Now'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
