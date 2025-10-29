# Roasted Roots — Artisan Coffee Roastery Template

A premium, dark-themed coffee roastery website template built with Next.js 14, TypeScript, and Tailwind CSS. Features a sophisticated design with warm amber accents, smooth animations, and a luxury aesthetic perfect for specialty coffee businesses.

## ✨ Features

### Design & UX
- 🎨 **Luxury Dark Theme**: Sophisticated dark brown palette (#1a1614) with warm amber accents (#D4AF37)
- ✨ **Smooth Animations**: Fade-in scroll animations, hover effects, and smooth transitions
- 📱 **Fully Responsive**: Mobile-first design optimized for all devices (576px, 768px, 992px, 1200px breakpoints)
- 🖼️ **Optimized Images**: Next.js Image component with WebP/AVIF support and lazy loading
- 🎭 **Custom Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body text

### Sections Included
- 🏠 **Hero Section**: Dark background with gradient aura effects, hero imagery, dual CTAs, social proof metrics
- 🖼️ **Featured Gallery**: 4-column responsive grid with hover-lift animations and rounded borders
- 💬 **Testimonials Carousel**: Horizontal scrolling carousel with customer reviews and navigation controls
- ⚙️ **Roasting Process**: Multi-step breakdown with progress indicators (Selection → Roasting → Quality → Shipping)
- 💎 **Value Proposition**: 3-column layout with quality metrics, philosophy, and trust indicators
- 💰 **Pricing Plans**: 3-tier subscription plans (Explorer, Enthusiast, Connoisseur) with highlighted tier
- 📧 **Footer**: 4-column layout with newsletter signup, links, and social media icons

### Technical Features
- ⚡ **Next.js 14 App Router**: Server-side rendering and latest Next.js features
- 📝 **TypeScript**: Fully typed for better development experience
- 🎨 **Tailwind CSS**: Custom configuration with design system tokens
- 🎯 **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter cards, and structured data
- ♿ **WCAG 2.1 AA**: Accessibility standards with focus states and ARIA labels
- 🔄 **React Hooks**: Custom hooks for scroll animations and intersection observers
- 🎪 **Reusable Components**: Modular component library (Button, Card, Layout components)

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Install dependencies:**

```bash
npm install
# or with your preferred package manager
bun install
```

2. **Run the development server:**

```bash
npm run dev
# or
bun dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see your site.

## 📁 Project Structure

```
roasted-roots-template/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with fonts and metadata
│   ├── page.tsx                 # Homepage with all sections
│   └── globals.css              # Global styles and Tailwind directives
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx          # Sticky navigation header
│   │   └── Footer.tsx          # Footer with newsletter and links
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx            # Hero section with CTAs
│   │   ├── FeaturedGallery.tsx # Product gallery grid
│   │   ├── TestimonialsCarousel.tsx # Scrolling testimonials
│   │   ├── RoastingProcess.tsx  # Multi-step process
│   │   ├── ValueProposition.tsx # 3-column value props
│   │   └── PricingPlans.tsx    # Subscription tiers
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx          # Button with variants
│       └── Card.tsx            # Card component
├── hooks/
│   └── useScrollAnimation.ts   # Intersection observer hook
├── lib/
│   └── data.ts                 # Static data (testimonials, pricing, etc.)
├── types/
│   └── index.ts                # TypeScript type definitions
├── utils/
│   └── cn.ts                   # Class name utility
├── public/                      # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind with custom theme
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Brand Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#1a1614',      // Very Dark Brown (background)
  secondary: '#2a1f1d',    // Dark Warm Brown
  accent: '#D4AF37',       // Gold/Amber (CTAs, highlights)
  'text-primary': '#E8E8E8',   // Off-White
  'text-secondary': '#B8B8B8', // Light Gray
  border: '#3d2f2b',       // Subtle Dark Brown
}
```

### Content & Data

Update content in `lib/data.ts`:
- `navigationLinks` - Header navigation items
- `testimonials` - Customer testimonials
- `pricingPlans` - Subscription plan details
- `products` - Featured product gallery
- `processSteps` - Roasting process steps
- `footerSections` - Footer link sections

### Typography

Fonts are configured in `app/layout.tsx`:
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

To change fonts, update the imports and variable names.

### Images

Replace placeholder images with your own:
1. Update image URLs in components
2. Add image domains to `next.config.js` under `remotePatterns`
3. Use the Next.js `<Image>` component for optimization

### Metadata & SEO

Update SEO settings in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Business — Tagline',
  description: 'Your description here...',
  // ... other metadata
}
```

## 🏗️ Building for Production

```bash
# Build the production bundle
npm run build

# Start production server
npm start

# Type check without building
npm run type-check
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

This template works with:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting platform

## 📝 Key Files to Customize

| File | Purpose |
|------|---------|
| `lib/data.ts` | All static content (testimonials, pricing, products) |
| `tailwind.config.ts` | Colors, fonts, spacing, animations |
| `app/layout.tsx` | Site metadata, SEO, fonts |
| `next.config.js` | Image domains, headers, optimization |
| `components/sections/*` | Individual page sections |

## 🎯 Performance Features

- ✅ Server-side rendering (SSR) for SEO
- ✅ Image optimization with Next.js Image
- ✅ WebP/AVIF image formats
- ✅ Lazy loading images and components
- ✅ Code splitting and tree shaking
- ✅ Optimized font loading
- ✅ Minimal JavaScript bundle

## ♿ Accessibility Features

- ✅ WCAG 2.1 AA compliant
- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Screen reader friendly
- ✅ Color contrast ratios

## 📦 Component Library

### Button Component
```tsx
<Button variant="primary" size="lg" rotation="rotate-[-1deg]">
  Click Me
</Button>
```

### Card Component
```tsx
<Card hover rotation="-rotate-1">
  <CardHeader>Header Content</CardHeader>
  <CardContent>Body Content</CardContent>
  <CardFooter>Footer Content</CardFooter>
</Card>
```

## 🔧 Troubleshooting

**Images not loading?**
- Check `next.config.js` has correct image domains
- Verify image URLs are accessible

**Animations not working?**
- Ensure JavaScript is enabled
- Check browser console for errors

**Build fails?**
- Run `npm run type-check` to find TypeScript errors
- Clear `.next` folder and rebuild

## 📄 License

This project is licensed under the MIT License.

## 🙏 Credits

- Design inspiration: Roasted Roots
- Icons: [Lucide Icons](https://lucide.dev/)
- Fonts: [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ by BTY Technology**

For questions or support, please open an issue or contact us.
