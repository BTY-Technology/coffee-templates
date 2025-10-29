'use client'

import React, { useState } from 'react'
import { Instagram, Facebook, Twitter, Send } from 'lucide-react'
import { footerSections } from '@/lib/data'
import type { NewsletterFormData, FormState } from '@/types'

export const Footer: React.FC = () => {
  const [formData, setFormData] = useState<NewsletterFormData>({ email: '' })
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ isSubmitting: true, isSuccess: false, error: null })

    // Simulate API call
    setTimeout(() => {
      setFormState({ isSubmitting: false, isSuccess: true, error: null })
      setFormData({ email: '' })

      setTimeout(() => {
        setFormState({ isSubmitting: false, isSuccess: false, error: null })
      }, 3000)
    }, 1000)
  }

  return (
    <footer className="sm:px-8 max-w-full mr-auto ml-auto pt-16 pr-6 pb-12 pl-6 border-t border-amber-900/20">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-sm text-amber-400/60 font-sans mb-6">(Connect)</div>

        <div className="text-center">
          <h2 className="sm:text-6xl lg:text-7xl leading-none uppercase text-5xl font-medium text-white/95 tracking-tight">
            JOIN OUR
          </h2>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none text-white/95 tracking-tight uppercase mt-1 font-sans font-medium">
            COFFEE CLUB
          </h2>

          <div className="mt-6 flex items-center gap-2 text-amber-400/40">
            <span className="text-base font-sans">+</span>
            <div className="h-px flex-1 bg-amber-900/30"></div>
            <span className="text-base font-sans">+</span>
          </div>

          <p className="sm:text-2xl text-xl font-medium text-neutral-300/90 tracking-tight max-w-3xl mt-6 mr-auto ml-auto">
            Handcrafted coffee roasted with care. Expert guidance, premium beans, and worldwide shipping.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div className="rounded-2xl overflow-hidden border border-amber-900/30 bg-amber-950/20 p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 ring-1 ring-amber-500/20 px-3 py-2 text-sm text-amber-500 mb-4 font-sans">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
              Newsletter
            </div>
            <h4 className="text-xl text-white tracking-tight mb-4 font-sans">
              Stay fresh
            </h4>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ email: e.target.value })}
                className="w-full h-10 px-4 rounded-xl border text-sm placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/20 backdrop-blur border-amber-900/30 bg-primary/60 text-white"
                disabled={formState.isSubmitting}
              />
              <button
                type="submit"
                disabled={formState.isSubmitting}
                className="w-full inline-flex items-center gap-2 h-10 px-4 rounded-xl ring-1 text-sm transition ring-amber-900/30 text-white bg-amber-950/40 hover:bg-amber-900/40 justify-center font-sans disabled:opacity-50"
              >
                {formState.isSuccess ? 'Subscribed!' : formState.isSubmitting ? 'Subscribing...' : 'Subscribe'}
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="rounded-2xl overflow-hidden border border-amber-900/30 bg-amber-950/20 p-6">
              <h5 className="text-sm uppercase tracking-wider font-medium mb-4 text-white/80 font-sans">
                {section.title}
              </h5>
              <ul className="space-y-3 text-base text-white/70">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a className="transition hover:text-white font-sans" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-3xl italic text-white tracking-tight font-script">
              Roasted Roots
            </span>
            <div className="flex items-center gap-4 text-base text-white/60">
              <span className="font-sans">© 2025</span>
              <span className="hidden sm:inline text-amber-900/30 font-sans">|</span>
              <a href="#privacy" className="transition hover:text-white font-sans">
                Privacy
              </a>
              <span className="text-amber-900/30 font-sans">/</span>
              <a href="#terms" className="transition hover:text-white font-sans">
                Terms
              </a>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <a
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-amber-950/40 text-white/70 hover:text-white hover:bg-amber-900/40"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={20} />
            </a>
            <a
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-amber-950/40 text-white/70 hover:text-white hover:bg-amber-900/40"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={20} />
            </a>
            <a
              aria-label="Twitter/X"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-amber-950/40 text-white/70 hover:text-white hover:bg-amber-900/40"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
