import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[80vh] bg-hero-gradient flex items-center relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <div className="font-display font-extrabold text-[10rem] leading-none text-white/5 select-none mb-4">
          404
        </div>
        <h1 className="font-display text-4xl font-bold text-white mb-4 -mt-12">
          Page Not <span className="gradient-text">Found</span>
        </h1>
        <p className="text-white/55 text-lg mb-8">
          The page you're looking for doesn't exist or may have been moved.
          Let us help you find what you need.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn-primary flex items-center gap-2">
            <Home size={16} /> Back to Home
          </Link>
          <Link href="/contact" className="btn-outline flex items-center gap-2">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Healthcare Data', href: '/healthcare' },
            { label: 'B2B Data', href: '/b2b' },
            { label: 'Technology Users', href: '/technology' },
            { label: 'Intent Data', href: '/intent-data' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="px-3 py-2 rounded-lg bg-white/4 border border-white/8 text-sm text-white/55 hover:text-cyan-400 hover:border-cyan-500/30 transition-all text-center">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
