// Type definitions for the coffee roastery template

export interface Testimonial {
  id: string
  name: string
  location: string
  role: string
  quote: string
  avatar: string
  rating: number
}

export interface PricingPlan {
  id: string
  name: string
  price: number | 'Custom'
  frequency: string
  badge?: string
  badgeColor?: string
  description: string
  features: string[]
  highlighted?: boolean
  rotation?: string
  buttonText: string
  buttonVariant: 'primary' | 'secondary'
}

export interface Product {
  id: string
  name: string
  image: string
  category: string
  description?: string
}

export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
  metric?: {
    value: string
    label: string
    sublabel: string
  }
  progress: number[]
}

export interface NavigationLink {
  label: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  icon: 'instagram' | 'facebook' | 'twitter'
}

export interface FooterSection {
  title: string
  links: {
    label: string
    href: string
  }[]
}

export interface NewsletterFormData {
  email: string
}

export interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}
