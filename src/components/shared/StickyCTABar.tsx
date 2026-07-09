'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, X } from 'lucide-react'

interface StickyCTABarProps {
  text?: string
  cta?: string
  href?: string
}

export default function StickyCTABar({
  text = 'Ready to accelerate your pipeline with verified data?',
  cta = 'Request Free Sample',
  href = '/contact',
}: StickyCTABarProps) {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed && window.scrollY > 600) {
        setVisible(true)
      } else if (window.scrollY < 600) {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-navy-900/98 via-navy-900/98 to-navy-900/98 backdrop-blur-xl border-t border-cyan-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4 justify-between">
        <p className="text-white/80 text-sm font-medium hidden sm:block">{text}</p>
        <div className="flex items-center gap-3 ml-auto">
          <Link
            href="/contact#book"
            className="text-white/60 text-sm hover:text-cyan-400 transition-colors hidden md:block"
          >
            Book Consultation
          </Link>
          <Link
            href={href}
            className="btn-primary text-sm py-2.5 px-5 flex items-center gap-2 whitespace-nowrap"
          >
            {cta} <ArrowRight size={14} />
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="text-white/30 hover:text-white/60 transition-colors p-1"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
