import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingCTA from '@/components/shared/FloatingCTA'
import StickyBanner from '@/components/shared/StickyBanner'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nplusglobal.com'),
  title: {
    default: 'NPLUS Global | Enterprise Healthcare & B2B Data Intelligence',
    template: '%s | NPLUS Global',
  },
  description:
    'Access 950M+ verified B2B contacts, 18M+ healthcare professionals, 140M+ decision makers. Enterprise-grade data intelligence for healthcare marketing, B2B sales, and technology targeting.',
  keywords: ['healthcare email lists', 'B2B data', 'physician email list', 'healthcare professionals database', 'enterprise data intelligence', 'NPLUS Global'],
  authors: [{ name: 'NPLUS Global', url: 'https://nplusglobal.com' }],
  creator: 'NPLUS Global',
  publisher: 'NPLUS Global',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nplusglobal.com',
    siteName: 'NPLUS Global',
    title: 'NPLUS Global | Enterprise Healthcare & B2B Data Intelligence',
    description: 'Access 950M+ verified B2B contacts, 18M+ healthcare professionals, 140M+ decision makers with enterprise-grade verified intelligence.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'NPLUS Global' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NPLUS Global | Enterprise Healthcare & B2B Data Intelligence',
    description: 'Access 950M+ verified B2B contacts, 18M+ healthcare professionals, 140M+ decision makers.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#060d22',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NPLUS Global',
              url: 'https://nplusglobal.com',
              logo: 'https://nplusglobal.com/logo.jpg',
              description: 'Enterprise Healthcare & B2B Data Intelligence Platform',
              email: 'info@nplusglobal.com',
              telephone: '+1 (204) 410-0635',
              address: { '@type': 'PostalAddress', streetAddress: '1857, 1007 N Orange St. 4th Floor', addressLocality: 'Wilmington', addressRegion: 'DE', postalCode: '19801', addressCountry: 'US' },
            }),
          }}
        />
      </head>
      <body className="font-body bg-navy-950 text-white antialiased overflow-x-hidden">
        <StickyBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <Analytics />
      </body>
    </html>
  )
}
