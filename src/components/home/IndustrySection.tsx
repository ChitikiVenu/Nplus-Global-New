import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const industries = [
  { name: 'Healthcare', icon: '🏥', count: '18M+', href: '/healthcare' },
  { name: 'Manufacturing', icon: '🏭', count: '4.2M+', href: '/industry/manufacturing' },
  { name: 'Financial Services', icon: '💹', count: '6.8M+', href: '/industry/finance' },
  { name: 'Technology', icon: '💻', count: '12M+', href: '/technology' },
  { name: 'Real Estate', icon: '🏢', count: '3.1M+', href: '/industry/real-estate' },
  { name: 'Education', icon: '🎓', count: '5.4M+', href: '/industry/education' },
  { name: 'Logistics', icon: '🚚', count: '2.8M+', href: '/industry/logistics' },
  { name: 'Retail & E-commerce', icon: '🛍️', count: '7.2M+', href: '/industry/retail' },
  { name: 'Pharmaceutical', icon: '💊', count: '1.9M+', href: '/industry/pharma' },
  { name: 'Automotive', icon: '🚗', count: '2.5M+', href: '/industry/automotive' },
  { name: 'Telecom', icon: '📡', count: '1.6M+', href: '/industry/telecom' },
  { name: 'Hospitality', icon: '🏨', count: '2.1M+', href: '/industry/hospitality' },
  { name: 'Construction', icon: '🏗️', count: '1.8M+', href: '/industry/construction' },
  { name: 'SaaS Companies', icon: '☁️', count: '3.4M+', href: '/industry/saas' },
  { name: 'Legal Services', icon: '⚖️', count: '1.2M+', href: '/industry/legal' },
  { name: 'Media & Publishing', icon: '📰', count: '980K+', href: '/industry/media' },
]

export default function IndustrySection() {
  return (
    <section className="section-padding bg-navy-900/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge badge-blue mb-4">Industry Coverage</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            50+ Industry{' '}
            <span className="gradient-text">Verticals Covered</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">
            No matter your target market, we have verified contact data for decision-makers
            across every major industry and sub-vertical worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              href={ind.href}
              className="enterprise-card p-4 text-center group hover:scale-105 transition-all"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{ind.icon}</div>
              <div className="font-display font-semibold text-white text-xs mb-1 leading-tight">{ind.name}</div>
              <div className="text-cyan-400 text-xs font-bold font-mono">{ind.count}</div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/industry"
            className="btn-outline inline-flex items-center gap-2"
          >
            Browse All 50+ Industries <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
