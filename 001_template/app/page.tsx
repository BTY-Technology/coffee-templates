import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { FeaturedGallery } from '@/components/sections/FeaturedGallery'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'
import { RoastingProcess } from '@/components/sections/RoastingProcess'
import { ValueProposition } from '@/components/sections/ValueProposition'
import { PricingPlans } from '@/components/sections/PricingPlans'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Background Aura Effect */}
      <div
        className="bg-aura"
        style={{
          backgroundImage:
            'url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e8a73c34-737c-4f43-bbd4-ce204f94152c_3840w.webp)',
        }}
      />

      <Header />

      <main className="relative">
        <Hero />
        <FeaturedGallery />
        <TestimonialsCarousel />
        <RoastingProcess />
        <ValueProposition />
        <PricingPlans />
      </main>

      <Footer />
    </div>
  )
}
