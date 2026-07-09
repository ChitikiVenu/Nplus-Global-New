import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryForm from '@/components/shared/InquiryForm'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Technology Users Database | 20M+ Tech Stack Contacts | NPLUS Global',
  description: 'Target companies using specific technologies. Access 20M+ verified technology users across Salesforce, AWS, HubSpot, Oracle, SAP, and 500+ platforms.',
  alternates: { canonical: 'https://nplusglobal.com/technology' },
}

const platforms = [
  { name: 'Salesforce Users', count: '3.2M+', href: '/technology/salesforce-users-list', icon: '☁️', color: 'border-blue-500/20' },
  { name: 'AWS Users Database', count: '5.1M+', href: '/technology/aws-users-database', icon: '🔶', color: 'border-orange-500/20' },
  { name: 'HubSpot Users', count: '1.8M+', href: '/technology/hubspot-users-list', icon: '🟠', color: 'border-orange-400/20' },
  { name: 'Oracle Users', count: '2.4M+', href: '/technology/oracle-users-list', icon: '🔴', color: 'border-red-500/20' },
  { name: 'SAP Users', count: '1.9M+', href: '/technology/sap-users-list', icon: '💙', color: 'border-blue-400/20' },
  { name: 'Microsoft Dynamics', count: '2.1M+', href: '/technology/microsoft-dynamics-users-list', icon: '🔷', color: 'border-blue-600/20' },
  { name: 'ServiceNow Users', count: '780K+', href: '/technology/servicenow-users', icon: '🟢', color: 'border-green-500/20' },
  { name: 'Shopify Users', count: '1.4M+', href: '/technology/shopify-users-list', icon: '🛍️', color: 'border-green-400/20' },
]

export default function TechnologyPage() {
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
                <span className="text-white/70">Technology Users</span>
              </nav>
              <span className="badge badge-cyan mb-5">Technology Users Intelligence</span>
              <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                Target by <span className="gradient-text">Technology Stack</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                Identify and reach <strong className="text-white">20M+ companies</strong> based on the exact
                technology they use. Know who runs Salesforce, AWS, Oracle, SAP, and 500+ other platforms
                — and target their key decision-makers with precision.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#inquiry" className="btn-primary flex items-center gap-2">Request Free Sample <ArrowRight size={16} /></Link>
                <Link href="/contact" className="btn-outline">Book Demo</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 20, suffix: 'M+', label: 'Tech Users', color: 'text-cyan-400' },
                { value: 500, suffix: '+', label: 'Platforms', color: 'text-purple-400' },
                { value: 98, suffix: '%', label: 'Accuracy', color: 'text-green-400' },
                { value: 24, suffix: 'hr', label: 'Delivery', color: 'text-blue-400' },
              ].map((s) => (
                <div key={s.label} className="enterprise-card p-6 text-center">
                  <div className={`font-display font-extrabold text-4xl ${s.color} mb-1`}>
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
            Browse by <span className="gradient-text">Platform</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {platforms.map((p) => (
              <Link key={p.name} href={p.href} className={`enterprise-card p-5 group border ${p.color}`}>
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{p.icon}</div>
                <h3 className="font-display font-bold text-white text-base mb-1">{p.name}</h3>
                <div className="text-cyan-400 font-bold font-mono text-sm mb-1">{p.count}</div>
                <div className="text-white/40 text-xs">Verified Users</div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <p className="text-white/40 text-sm">+ 492 more technology platforms available on request</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-5">
                Why Technographic Data <span className="gradient-text">Wins Deals</span>
              </h2>
              <p className="text-white/55 mb-6">Knowing your prospect's technology stack is the ultimate competitive advantage. Use technographic intelligence to:</p>
              {[
                'Identify companies ripe for competitive displacement',
                'Find integration partners running complementary tools',
                'Time outreach around technology contract renewals',
                'Personalize messaging based on exact tech stack',
                'Prioritize accounts by technology budget signals',
                'Discover upsell opportunities in your install base',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 py-2.5 border-b border-white/5 text-white/65 text-sm">
                  <CheckCircle size={14} className="text-cyan-500 flex-shrink-0" /> {point}
                </div>
              ))}
            </div>
            <InquiryForm
              title="Request Technology Users Sample"
              subtitle="Tell us which platform to target and receive a verified sample within 24 hours."
              pageSource="Technology Page"
              dataType="Technology Users Database"
            />
          </div>
        </div>
      </section>
    </>
  )
}
