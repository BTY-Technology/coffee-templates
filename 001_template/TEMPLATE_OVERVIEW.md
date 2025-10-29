# Roasted Roots Coffee Template - Overview

## 🎯 Template Summary

This is a **production-ready, premium coffee roastery website template** built with Next.js 14, TypeScript, and Tailwind CSS. It features a sophisticated dark theme with warm amber accents, designed specifically for artisan coffee businesses.

## ✅ What's Included

### 1. **Complete Page Sections** (7 sections)

#### Hero Section
- Full-width hero with background gradient effects
- Dual CTAs (primary "Explore Our Beans" + secondary "Watch Our Process")
- Social proof metrics (4.9 rating, 2,400+ reviews)
- Award badge (2024 Best Craft Roastery)
- Responsive hero image with overlay text
- Testimonial strip with customer quote

#### Featured Gallery
- 4-column responsive grid (1 col mobile → 2 col tablet → 4 col desktop)
- Hover-lift animations on product images
- High-quality coffee imagery
- Smooth scale transitions on hover

#### Testimonials Carousel
- Horizontal scrolling carousel with 5 testimonials
- Left/right navigation controls
- Gradient fade overlays on edges
- Auto-disable buttons at scroll limits
- Customer avatars, quotes, and locations
- Subtle rotation effects on cards

#### Roasting Process
- 4-step interactive process (Selection → Roasting → Quality → Shipping)
- Progress indicator dots
- Navigation controls (prev/next)
- Step counter (1/4, 2/4, etc.)
- Metrics for each step (12 origins, 205°C, 100%, 48h)

#### Value Proposition
- 3-column layout with featured image card
- Stats and philosophy section (98% retention, 5-star rating)
- Quality promise badge with shield icon
- Metrics grid (8+ years, 48h roast-to-ship)
- Quality attributes (Premium, Custom, Certified)
- Embedded customer testimonial

#### Pricing Plans
- 3-tier subscription model:
  - **Explorer** ($24, bi-weekly)
  - **Enthusiast** ($38, weekly) - Highlighted
  - **Connoisseur** (Custom pricing)
- Feature lists with checkmarks
- Badge indicators (Popular, Best Value)
- Subtle card rotations for visual interest
- Gradient effect on highlighted tier

#### Footer
- Newsletter signup form with validation
- 4-column layout: Newsletter + Coffee + Learn + Company
- Social media icons (Instagram, Facebook, Twitter)
- Privacy & Terms links
- Copyright information

### 2. **Reusable Components** (10 components)

- `Header` - Sticky navigation with mobile menu
- `Footer` - Full-featured footer with newsletter
- `Button` - 3 variants (primary, secondary, ghost) + 3 sizes
- `Card` - Base card with hover effects + CardHeader/Content/Footer
- `Hero` - Hero section with CTAs and metrics
- `FeaturedGallery` - Product grid
- `TestimonialsCarousel` - Scrolling testimonials
- `RoastingProcess` - Interactive step navigator
- `ValueProposition` - 3-column value props
- `PricingPlans` - Subscription tiers

### 3. **Custom Hooks**

- `useScrollAnimation` - Intersection Observer for fade-in animations

### 4. **TypeScript Types**

- `Testimonial` - Customer review structure
- `PricingPlan` - Subscription plan details
- `Product` - Gallery item
- `ProcessStep` - Roasting process step
- `NavigationLink` - Nav menu item
- `FooterSection` - Footer column
- `NewsletterFormData` - Form data
- `FormState` - Form state management

### 5. **Static Data** (`lib/data.ts`)

- 4 navigation links
- 5 customer testimonials
- 3 pricing plans
- 4 featured products
- 4 process steps
- 3 footer sections

### 6. **Design System**

#### Colors
```
Primary:    #1a1614 (Very Dark Brown)
Secondary:  #2a1f1d (Dark Warm Brown)
Accent:     #D4AF37 (Gold/Amber)
Text:       #E8E8E8 (Off-White)
Border:     #3d2f2b (Subtle Brown)
```

#### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

#### Spacing
- Base unit: 6-8px
- Section spacing: 24 (96px top/bottom)
- Container max-width: 1280px (7xl)

#### Animations
- Fade-in on scroll (fadeSlideIn keyframe)
- Hover lift effect (-translateY-0.5)
- Smooth transitions (200-300ms)
- Pulse effect on badges

### 7. **Technical Features**

✅ **Performance**
- Server-side rendering (SSR)
- Image optimization (WebP/AVIF)
- Lazy loading
- Code splitting
- Tree shaking
- Optimized fonts

✅ **SEO**
- Meta tags (title, description, keywords)
- Open Graph tags
- Twitter cards
- Structured data ready
- Semantic HTML
- Sitemap ready

✅ **Accessibility**
- WCAG 2.1 AA compliant
- ARIA labels
- Keyboard navigation
- Focus states
- Screen reader friendly
- Color contrast ratios

✅ **Mobile Responsive**
- Breakpoints: 640px, 768px, 1024px, 1280px
- Mobile-first design
- Touch-friendly (44px tap targets)
- Hamburger menu
- Responsive images

## 📊 Build Stats

```
Route (app)                    Size     First Load JS
┌ ○ /                         25.5 kB   113 kB
└ ○ /_not-found               875 B     88.1 kB
+ First Load JS shared        87.2 kB
```

**Analysis:**
- ✅ Homepage: 25.5 kB (excellent)
- ✅ First Load: 113 kB (very good)
- ✅ No TypeScript errors
- ✅ No build warnings

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Type check
npm run type-check
```

Open [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Quick Reference

| What to Change | Where to Edit |
|----------------|---------------|
| Brand name | `components/layout/Header.tsx` + `Footer.tsx` |
| Colors | `tailwind.config.ts` |
| Content | `lib/data.ts` |
| Images | Component files + `next.config.js` |
| Fonts | `app/layout.tsx` |
| SEO | `app/layout.tsx` metadata |

## 📁 File Count

- **Components**: 10 files
- **Sections**: 6 major sections
- **Hooks**: 1 custom hook
- **Types**: 8 TypeScript interfaces
- **Config Files**: 5 (next.config.js, tailwind.config.ts, tsconfig.json, package.json, postcss.config.js)
- **Total Lines**: ~2,500+ lines of production code

## 🎯 Use Cases

Perfect for:
- ✅ Coffee roasteries
- ✅ Specialty coffee shops
- ✅ Café chains
- ✅ Coffee subscription services
- ✅ Artisan food & beverage brands
- ✅ Premium product businesses

## 🔧 Technology Stack

- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React 0.344
- **Fonts**: Google Fonts (Inter + Playfair Display)
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel-ready (zero config)

## 📝 Next Steps

1. **Customize Content**: Edit `lib/data.ts` with your business info
2. **Update Colors**: Modify `tailwind.config.ts` for your brand
3. **Replace Images**: Add your own product photos
4. **Configure SEO**: Update metadata in `app/layout.tsx`
5. **Deploy**: Push to GitHub and deploy to Vercel

---

**Status**: ✅ Production Ready
**Version**: 1.0.0
**Last Updated**: October 2025
**License**: MIT
