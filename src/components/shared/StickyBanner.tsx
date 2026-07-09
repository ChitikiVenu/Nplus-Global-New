'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Zap } from 'lucide-react'

export default function StickyBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="promo-banner bg-[#14213d] border-b border-white/10 text-white text-sm py-2.5 px-4 text-center relative">
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <Zap size={14} className="flex-shrink-0 text-[#93c5fd]" />
        <span className="font-medium">
          <strong>New:</strong> AI-powered intent data is now available for enterprise teams —{' '}
          <Link href="/intent-data" className="underline font-bold hover:no-underline">
            identify in-market buyers in real time
          </Link>
        </span>
        <Link
          href="/contact"
          className="promo-banner-button bg-white text-[#14213d] text-xs font-bold px-3 py-1 rounded-md hover:bg-[#e7f0ff] transition-colors ml-2"
        >
          Get Free Sample
        </Link>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/65 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <X size={16} />
      </button>
    </div>
  )
}
