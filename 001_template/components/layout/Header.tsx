'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navigationLinks } from '@/lib/data'
import { Button } from '@/components/ui/Button'

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  const handleSubscribe = () => {
    const pricingSection = document.querySelector('#pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="relative border-b border-amber-900/20 sticky top-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="text-3xl italic text-white tracking-tight font-script">
              Roasted Roots
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300 font-sans">
            {navigationLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="hover:text-amber-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleSubscribe}
              className="hidden sm:flex group relative w-auto cursor-pointer select-none text-base leading-7 transition-all duration-200 ease-out focus:outline-none hover:brightness-95 active:brightness-90 font-semibold text-primary bg-accent pt-2.5 pr-6 pb-2.5 pl-6 items-center justify-center rounded font-sans shadow-[3px_3px_0px_0px_rgba(26,22,20,1)] hover:shadow-[2px_2px_0px_0px_rgba(26,22,20,1)] active:shadow-[1px_1px_0px_0px_rgba(26,22,20,1)]"
            >
              Subscribe
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:text-amber-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-amber-900/20 mt-4 pt-4">
            <div className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-neutral-300 hover:text-amber-400 transition-colors font-sans text-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={handleSubscribe}
                className="sm:hidden w-full cursor-pointer select-none text-base leading-7 flex transition-all duration-200 ease-out focus:outline-none hover:brightness-95 active:brightness-90 font-semibold text-primary bg-accent pt-2.5 pr-6 pb-2.5 pl-6 items-center justify-center rounded font-sans shadow-[3px_3px_0px_0px_rgba(26,22,20,1)] hover:shadow-[2px_2px_0px_0px_rgba(26,22,20,1)] active:shadow-[1px_1px_0px_0px_rgba(26,22,20,1)]"
              >
                Subscribe
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
