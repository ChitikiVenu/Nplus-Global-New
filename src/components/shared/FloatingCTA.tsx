'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MessageCircle, X, Mail, Phone, Calendar } from 'lucide-react'

export default function FloatingCTA() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Quick actions */}
      {open && (
        <div className="flex flex-col gap-2 animate-slide-up">
          {[
            { icon: Mail, label: 'Email Us', href: 'mailto:info@nplusglobal.com', color: 'bg-blue-600' },
            { icon: Phone, label: 'Call Now', href: 'tel:+12044100635', color: 'bg-green-600' },
            { icon: Calendar, label: 'Book Consultation', href: '/contact#book', color: 'bg-purple-600' },
          ].map(({ icon: Icon, label, href, color }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 ${color} text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-lg hover:opacity-90 transition-all hover:-translate-y-0.5`}
              onClick={() => setOpen(false)}
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          open
            ? 'bg-white/10 border border-white/20 text-white'
            : 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white cyan-glow hover:scale-110'
        }`}
        aria-label="Contact options"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  )
}
