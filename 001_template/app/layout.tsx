import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Watermark } from '@/components/Watermark'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Roasted Roots — Artisan Coffee Roastery | BTY Technology',
    template: '%s | Roasted Roots | BTY Technology',
  },
  description: 'Premium small-batch coffee roasted with purpose. Single-origin beans sourced directly from sustainable farms worldwide.',
  keywords: ['coffee', 'artisan', 'roastery', 'single-origin', 'specialty coffee', 'subscription'],
  authors: [{ name: 'Roasted Roots' }],
  creator: 'Roasted Roots',
  publisher: 'Roasted Roots',
  icons: {
    icon: '/btyfavi.svg',
    shortcut: '/btyfavi.svg',
    apple: '/btyfavi.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roastedroots.com',
    siteName: 'Roasted Roots',
    title: 'Roasted Roots — Artisan Coffee Roastery',
    description: 'Premium small-batch coffee roasted with purpose. Single-origin beans sourced directly from sustainable farms worldwide.',
    images: [
      {
        url: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b4de7807-d550-431a-b3c2-07885c82aef4_1600w.jpg',
        width: 1200,
        height: 630,
        alt: 'Roasted Roots Coffee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roasted Roots — Artisan Coffee Roastery',
    description: 'Premium small-batch coffee roasted with purpose. Single-origin beans sourced directly from sustainable farms worldwide.',
    images: ['https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b4de7807-d550-431a-b3c2-07885c82aef4_1600w.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased text-neutral-100 bg-primary`}>
        {children}
        <Watermark />
      </body>
    </html>
  )
}
