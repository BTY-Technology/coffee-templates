'use client'

import { useEffect, useRef } from 'react'

export function useScrollAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      const animatedElements = currentRef.querySelectorAll('.animate-fade-slide-in')
      animatedElements.forEach((el) => {
        el.classList.add('opacity-0', '[animation-play-state:paused]')
        observer.observe(el)
      })

      // Observe the element itself if it has animation class
      if (currentRef.classList.contains('animate-fade-slide-in')) {
        currentRef.classList.add('opacity-0', '[animation-play-state:paused]')
        observer.observe(currentRef)
      }
    }

    return () => {
      if (currentRef) {
        observer.disconnect()
      }
    }
  }, [])

  return ref
}
