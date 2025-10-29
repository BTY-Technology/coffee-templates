import type { Testimonial, PricingPlan, Product, ProcessStep, NavigationLink, FooterSection } from '@/types'

export const navigationLinks: NavigationLink[] = [
  { label: 'Our Story', href: '#story' },
  { label: 'Coffee Selection', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    location: 'Seattle',
    role: 'Coffee Enthusiast',
    quote: 'This is the best coffee I\'ve ever had. The Ethiopian blend has notes I never knew existed. Worth every penny.',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&h=200&fit=crop&crop=faces',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    location: 'Portland',
    role: 'Café Owner',
    quote: 'As a café owner, I\'ve tried dozens of roasters. Roasted Roots is now our exclusive supplier. Our customers notice the difference.',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&h=200&fit=crop&crop=faces',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emma Thompson',
    location: 'San Francisco',
    role: 'Designer',
    quote: 'The subscription service is brilliant. Fresh roasted beans delivered every two weeks. My mornings have never been better.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop&crop=faces',
    rating: 5,
  },
  {
    id: '4',
    name: 'Alex Morgan',
    location: 'Austin',
    role: 'Environmental Consultant',
    quote: 'Finally found a roastery that cares about sustainability and flavor equally. The transparency is refreshing.',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&fit=crop&crop=faces',
    rating: 5,
  },
  {
    id: '5',
    name: 'Priya Patel',
    location: 'Austin',
    role: 'Software Engineer',
    quote: 'The cold brew blend changed my life. Smooth, complex, and perfect for summer mornings. Can\'t recommend enough.',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&h=200&fit=crop&crop=faces',
    rating: 5,
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    id: 'explorer',
    name: 'Explorer',
    price: 24,
    frequency: 'Bi-weekly',
    description: 'Perfect for discovering new coffee origins and flavor profiles.',
    features: [
      '12oz bag of single-origin coffee',
      'Roasted within 48 hours of shipping',
      'Tasting notes & brewing guide',
      'Free shipping',
    ],
    buttonText: 'Start Exploring',
    buttonVariant: 'secondary',
    rotation: '',
  },
  {
    id: 'enthusiast',
    name: 'Enthusiast',
    price: 38,
    frequency: 'Weekly',
    badge: 'Popular',
    badgeColor: 'amber',
    description: 'For serious coffee lovers who want variety and premium selections.',
    features: [
      'Two 12oz bags per shipment',
      'Early access to limited releases',
      'Priority customer support',
      '15% discount on extras',
    ],
    highlighted: true,
    buttonText: 'Go Enthusiast',
    buttonVariant: 'primary',
    rotation: '',
  },
  {
    id: 'connoisseur',
    name: 'Connoisseur',
    price: 'Custom',
    frequency: 'Custom',
    description: 'Curated selections and exclusive micro-lots for the discerning palate.',
    features: [
      'Exclusive micro-lot selections',
      'Custom roast profiles available',
      'Virtual cupping sessions',
      'Dedicated coffee consultant',
    ],
    buttonText: 'Contact Us',
    buttonVariant: 'secondary',
    rotation: '',
  },
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Steaming Latte',
    image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dfb3b1af-e254-413c-9eee-298cb5f9a877_800w.jpg',
    category: 'Beverages',
  },
  {
    id: '2',
    name: 'Latte Art',
    image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e91ebfd7-5404-48d3-a52f-3b1820ecc451_800w.webp',
    category: 'Beverages',
  },
  {
    id: '3',
    name: 'Coffee & Tech',
    image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9135951f-bf3a-47d0-b8e0-04b5cecefaac_800w.webp',
    category: 'Lifestyle',
  },
  {
    id: '4',
    name: 'Premium Bags',
    image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b480f873-fdea-4b10-95db-08a8ebc3d830_800w.webp',
    category: 'Products',
  },
]

export const processSteps: ProcessStep[] = [
  {
    id: 'selection',
    step: 1,
    title: 'Bean Selection',
    description: 'We source beans directly from sustainable farms, ensuring fair trade practices and exceptional quality. Each origin is carefully vetted for flavor profile and ethical standards.',
    metric: {
      value: '12',
      label: 'origins',
      sublabel: 'Worldwide farm partnerships',
    },
    progress: [100, 60, 40, 20],
  },
  {
    id: 'roasting',
    step: 2,
    title: 'Precision Roasting',
    description: 'Our expert roasters use state-of-the-art equipment to bring out each bean\'s unique characteristics. Temperature and time are carefully controlled for perfect results.',
    metric: {
      value: '205°C',
      label: 'optimal temp',
      sublabel: 'Average roast temperature',
    },
    progress: [100, 100, 60, 20],
  },
  {
    id: 'quality',
    step: 3,
    title: 'Quality Control',
    description: 'Every batch is cupped and evaluated by our Q-graders. We ensure consistency and excellence in every bag before packaging.',
    metric: {
      value: '100%',
      label: 'tested',
      sublabel: 'Quality guaranteed',
    },
    progress: [100, 100, 100, 40],
  },
  {
    id: 'shipping',
    step: 4,
    title: 'Fresh Delivery',
    description: 'Beans are packaged immediately after roasting and shipped within 48 hours. You receive coffee at peak freshness.',
    metric: {
      value: '48h',
      label: 'roast to ship',
      sublabel: 'Maximum freshness',
    },
    progress: [100, 100, 100, 100],
  },
]

export const footerSections: FooterSection[] = [
  {
    title: 'Coffee',
    links: [
      { label: 'Single Origin', href: '#single-origin' },
      { label: 'Signature Blends', href: '#blends' },
      { label: 'Decaf', href: '#decaf' },
      { label: 'Cold Brew', href: '#cold-brew' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Brewing Guides', href: '#brewing' },
      { label: 'Coffee Origins', href: '#origins' },
      { label: 'Roasting Process', href: '#roasting' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '#about' },
      { label: 'Sustainability', href: '#sustainability' },
      { label: 'Wholesale', href: '#wholesale' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]
