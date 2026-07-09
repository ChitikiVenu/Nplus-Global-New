import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryForm from '@/components/shared/InquiryForm'
import { ArrowRight, Settings, Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Custom Data Solutions | Bespoke B2B & Healthcare Datasets | NPLUS Global',
  description: 'Need data that doesn\'t fit a standard package? Our data scientists build custom datasets to your exact specifications — any industry, geography, or targeting criteria.',
  alternates: { canonical: 'https://nplusglobal.com/custom-data' },
}

const process = [
  { step: '01', title: 'Discovery Call', desc: 'A dedicated data consultant meets with you to understand your exact targeting requirements, use case, and success metrics.', icon: Users, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  { step: '02', title: 'Feasibility Assessment', desc: 'We assess data availability across our 950M+ database and 50+ sources, providing an honest coverage estimate within 24 hours.', icon: Settings, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { step: '03', title: 'Dataset Build', desc: 'Our data scientists compile, verify, and quality-check your custom dataset. Standard builds take 5–7 business days.', icon: Settings, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { step: '04', title: 'QA & Delivery', desc: 'Every custom dataset goes through a 200-point quality check before delivery. Includes compliance documentation and re-verification guarantee.', icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
]

const examples = [
  { title: 'Genetic Counselors in Academic Medical Centers', result: '8,400 verified contacts built in 6 days' },
  { title: 'SAP S/4HANA Users in German Manufacturing with 500+ Employees', result: '12,800 records across DACH region' },
  { title: 'Urgent Care Clinic Owners in the Southeastern US', result: '6,200 owner/operator contacts delivered' },
  { title: 'Series B–D SaaS Companies Using Salesforce + Marketo', result: '4,500 verified contacts with tech stack confirmed' },
  { title: 'Female C-Suite Executives in Fortune 1000 Companies', result: '3,800 contacts across all industries' },
  { title: 'Cannabis Dispensary Owners with Multi-State Operations', result: '1,900 multi-location operators verified' },
]

export default function CustomDataPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden py-24 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-6">
                <Link href="/" className="hover:text-cyan-400">Home</Link><span>/</span>
                <span className="text-white/70">Custom Data</span>
              </nav>
              <span className="badge badge-cyan mb-5">Custom Data Solutions</span>
              <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                Data Built to Your <span className="gradient-text">Exact Specifications</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                Can't find what you need in our standard packages? Our data science team builds
                bespoke datasets to any specification — any niche, geography, technology stack,
                or combination of criteria — delivered within 5–7 business days.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#inquiry" className="btn-primary flex items-center gap-2">
                  Start Custom Data Request <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-outline">Talk to a Data Scientist</Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: '🎯', label: 'Any targeting criteria — no dataset too niche' },
                { icon: '🌍', label: '210+ countries with local data teams' },
                { icon: '⚡', label: '5–7 business day standard build time' },
                { icon: '✅', label: '200-point quality check before delivery' },
                { icon: '🔄', label: 'Free re-verification within 30 days' },
                { icon: '📋', label: 'Full compliance documentation included' },
              ].map((item) => (
                <div key={item.label} className="enterprise-card p-4 flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-white/70 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              Our Custom Build <span className="gradient-text">Process</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {process.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.step} className={`enterprise-card p-6 border ${p.border}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-white/25">{p.step}</span>
                    <div className={`w-10 h-10 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center`}>
                      <Icon size={18} className={p.color} />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Example builds */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              Example Custom <span className="gradient-text">Builds</span>
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto">
              Real datasets we've built for clients. If you can describe it, we can build it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {examples.map((ex) => (
              <div key={ex.title} className="enterprise-card p-5">
                <div className="flex items-start gap-3 mb-3">
                  <Settings size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-white text-sm leading-snug">{ex.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-green-400 flex-shrink-0" />
                  <span className="text-green-400 text-xs font-semibold">{ex.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="section-padding bg-navy-900/40">
        <div className="max-w-3xl mx-auto px-6">
          <InquiryForm
            title="Describe Your Custom Data Requirement"
            subtitle="Tell us exactly who you need to reach and our data scientists will assess feasibility within 24 hours."
            pageSource="Custom Data Page"
            dataType="Custom Industry Data"
          />
        </div>
      </section>
    </>
  )
}
