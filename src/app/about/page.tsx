import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryForm from '@/components/shared/InquiryForm'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { ArrowRight, Globe, Shield, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About NPLUS Global | Enterprise Data Intelligence Company',
  description: 'NPLUS Global is a leading enterprise data intelligence platform providing verified B2B contacts, healthcare professionals, and technology user databases to 5,000+ companies worldwide.',
  alternates: { canonical: 'https://nplusglobal.com/about' },
}

const milestones = [
  { year: '2015', event: 'Founded with a mission to democratize enterprise data intelligence' },
  { year: '2017', event: 'Reached 100M B2B contacts milestone; launched healthcare division' },
  { year: '2019', event: 'Expanded to 150+ countries; launched AI-powered data validation' },
  { year: '2021', event: 'Launched Intent Data platform tracking 1B+ weekly signals' },
  { year: '2023', event: 'Reached 950M+ global contacts; 5,000+ enterprise clients served' },
  { year: '2025', event: 'Launched next-gen AI intelligence with 2B+ weekly intent signals' },
]

const values = [
  { icon: Shield, title: 'Data Integrity First', desc: 'Every decision we make prioritizes the accuracy, completeness, and compliance of the data we provide.' },
  { icon: Users, title: 'Client Success Obsession', desc: 'We measure our success by the pipeline our clients generate, not just data delivered.' },
  { icon: Globe, title: 'Global by Design', desc: 'Built from day one to serve enterprise organizations operating across 210+ countries.' },
  { icon: Award, title: 'Continuous Innovation', desc: 'We invest 30% of revenue in R&D to stay ahead of market needs and data quality standards.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden py-24 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="badge badge-cyan mb-5">About NPLUS Global</span>
          <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Connecting Organizations to the World&apos;s Most{' '}
            <span className="gradient-text">Accurate Data</span>
          </h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            NPLUS Global is an enterprise data intelligence platform trusted by 5,000+ organizations
            worldwide to power their healthcare marketing, B2B sales, and technology targeting with
            verified, compliant, and actionable contact data.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: 950, suffix: 'M+', label: 'Global Contacts' },
              { value: 5000, suffix: '+', label: 'Enterprise Clients' },
              { value: 210, suffix: '+', label: 'Countries' },
              { value: 10, suffix: '+', label: 'Years of Excellence' },
            ].map((s) => (
              <div key={s.label} className="enterprise-card p-5 text-center">
                <div className="font-display font-extrabold text-3xl text-cyan-400 mb-1">
                  <AnimatedCounter end={s.value} suffix={s.suffix} duration={2000} />
                </div>
                <div className="text-white/50 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-white mb-5">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                At NPLUS Global, we believe that every sales conversation, marketing campaign, and
                business relationship starts with accurate data. Our mission is to provide enterprise
                organizations with the most comprehensive, verified, and compliant contact intelligence
                available — enabling them to reach the right people, at the right time, with the right message.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Founded by data scientists and go-to-market strategists, we built NPLUS Global to solve
                the fundamental problem every revenue team faces: unreliable data that wastes time,
                burns budget, and undermines trust. We&apos;ve spent a decade building the infrastructure,
                verification processes, and AI capabilities to ensure that problem is solved — permanently.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Partner With Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-3">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-4 items-start p-4 rounded-xl bg-white/3 border border-white/5">
                  <span className="font-display font-bold text-cyan-400 text-sm font-mono w-10 flex-shrink-0">{m.year}</span>
                  <p className="text-white/65 text-sm">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="enterprise-card p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-cyan-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900/40">
        <div className="max-w-3xl mx-auto px-6">
          <InquiryForm
            title="Let's Work Together"
            subtitle="Tell us about your data needs and let's build a solution together."
            pageSource="About Page"
          />
        </div>
      </section>
    </>
  )
}
