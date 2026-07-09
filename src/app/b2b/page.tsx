import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryForm from '@/components/shared/InquiryForm'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'B2B Contact Database | 140M+ Decision Makers | NPLUS Global',
  description: 'Access 140M+ verified B2B decision-maker contacts including CFOs, CIOs, CTOs, HR Directors, and Marketing Directors. Enterprise-grade B2B data intelligence.',
  alternates: { canonical: 'https://nplusglobal.com/b2b' },
}

const lists = [
  { name: 'CFO Email List', count: '4.8M+', href: '/b2b/cfo-email-list', icon: '💰', desc: 'Chief Financial Officers across all industries' },
  { name: 'CIO Email List', count: '3.2M+', href: '/b2b/cio-email-list', icon: '🖥️', desc: 'Chief Information Officers and IT leaders' },
  { name: 'CTO Email List', count: '2.9M+', href: '/b2b/cto-email-list', icon: '⚙️', desc: 'Chief Technology Officers and engineering heads' },
  { name: 'HR Directors List', count: '6.1M+', href: '/b2b/hr-directors-email-list', icon: '👥', desc: 'Human Resources directors and CHROs' },
  { name: 'Marketing Directors', count: '7.4M+', href: '/b2b/marketing-directors-email-list', icon: '📣', desc: 'CMOs and marketing leadership' },
  { name: 'Manufacturing Companies', count: '5.2M+', href: '/b2b/manufacturing-companies-list', icon: '🏭', desc: 'Plant managers and operations executives' },
  { name: 'Fortune 500 Executives', count: '280K+', href: '/b2b/fortune-500-executives-list', icon: '🏆', desc: 'C-suite at America\'s largest companies' },
]

const stats = [
  { value: 140, suffix: 'M+', label: 'Decision Makers' },
  { value: 50, suffix: '+', label: 'Industries' },
  { value: 95, suffix: '%', label: 'Data Accuracy' },
  { value: 150, suffix: '+', label: 'Data Attributes' },
]

export default function B2BPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden py-24 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-6">
                <Link href="/" className="hover:text-cyan-400">Home</Link>
                <span>/</span>
                <span className="text-white/70">B2B Data</span>
              </nav>
              <span className="badge badge-blue mb-5">B2B Data Intelligence</span>
              <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                B2B Decision Maker <span className="gradient-text">Contact Database</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                Access <strong className="text-white">140M+ verified B2B decision makers</strong> including
                C-suite executives, VPs, directors, and managers across 50+ industries worldwide.
                Direct emails, phone numbers, LinkedIn profiles, and firmographic intelligence included.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#inquiry" className="btn-primary flex items-center gap-2">Request Free Sample <ArrowRight size={16} /></Link>
                <Link href="/contact" className="btn-outline">Get Custom Quote</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="enterprise-card p-6 text-center">
                  <div className="font-display font-extrabold text-4xl text-blue-400 mb-1">
                    <AnimatedCounter end={s.value} suffix={s.suffix} duration={2000} />
                  </div>
                  <div className="text-white/55 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-10">
            Browse B2B <span className="gradient-text">Executive Lists</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {lists.map((item) => (
              <Link key={item.name} href={item.href} className="enterprise-card p-5 group">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-display font-bold text-white text-base mb-1">{item.name}</h3>
                <div className="text-blue-400 font-bold font-mono text-sm mb-1">{item.count}</div>
                <p className="text-white/45 text-xs">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-5">
                What Makes Our B2B Data <span className="gradient-text">Different?</span>
              </h2>
              {[
                'Triple-verified direct work emails — no catch-all addresses',
                'Direct phone numbers including mobile (where available)',
                '150+ firmographic and technographic attributes per record',
                'Real-time intent signals showing purchase readiness',
                'LinkedIn profile URLs for social selling integration',
                'CRM-ready format for Salesforce, HubSpot, Marketo',
                'Weekly data refresh — never stale contacts',
                'GDPR and CCPA compliance documentation included',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 py-2.5 border-b border-white/5 text-white/65 text-sm">
                  <CheckCircle size={14} className="text-cyan-500 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
            <InquiryForm
              title="Request B2B Data Sample"
              subtitle="Get 50–100 verified decision-maker contacts delivered in 24 hours."
              pageSource="B2B Page"
              dataType="B2B Decision Makers Data"
            />
          </div>
        </div>
      </section>
    </>
  )
}
