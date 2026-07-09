import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryForm from '@/components/shared/InquiryForm'
import { ArrowRight, Zap, Eye, TrendingUp, Bell, Target, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Intent Data & Buyer Signals | B2B Purchase Intelligence | NPLUS Global',
  description: 'Identify in-market buyers with AI-powered intent data. Track 2B+ weekly signals across 35,000+ topics to find accounts actively researching your solutions.',
  alternates: { canonical: 'https://nplusglobal.com/intent-data' },
}

const features = [
  { icon: Eye, title: '2B+ Weekly Signals', desc: 'Monitor 2 billion web events weekly across 35,000+ business and technology research topics.', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  { icon: TrendingUp, title: 'AI-Powered Scoring', desc: 'Machine learning models assign intent scores 1–100 based on signal intensity, recency, and topic relevance.', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { icon: Bell, title: 'Real-Time Alerts', desc: 'Receive instant notifications when target accounts spike on topics relevant to your solution category.', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { icon: Target, title: 'Account Prioritization', desc: 'Rank and prioritize your target accounts by purchase probability, so your team focuses on highest-value prospects.', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
  { icon: Zap, title: 'CRM Integration', desc: 'Push intent signals directly into Salesforce, HubSpot, Marketo, and 30+ platforms in real time.', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  { icon: BarChart3, title: 'Competitive Intelligence', desc: 'See when accounts research your competitors and intercept them with perfectly timed messaging.', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
]

const intentTypes = [
  { type: 'Topic-Based Intent', desc: 'Accounts researching content around specific topics like "cloud migration", "healthcare data management", or "CRM software"', signal: '35,000+ topics covered' },
  { type: 'Keyword Intent', desc: 'Companies where employees search for your brand name, competitor names, or category-defining keywords', signal: '500M+ keywords tracked' },
  { type: 'Content Consumption', desc: 'Accounts consuming competitor content, analyst reports, review site comparisons, and category-specific resources', signal: '8M+ content sources' },
  { type: 'Review Site Activity', desc: 'Companies actively researching solutions on G2, Capterra, TrustRadius, and other software review platforms', signal: 'Real-time detection' },
  { type: 'Job Posting Signals', desc: 'Companies hiring for roles that indicate technology initiatives (e.g., "Salesforce Admin" signals CRM evaluation)', signal: '50M+ job posts analyzed' },
  { type: 'Firmographic Triggers', desc: 'Funding rounds, leadership changes, M&A events, and expansion signals that create buying urgency', signal: 'Daily trigger monitoring' },
]

export default function IntentDataPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden py-24 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/15 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-6">
                <Link href="/" className="hover:text-cyan-400">Home</Link><span>/</span>
                <span className="text-white/70">Intent Data</span>
              </nav>
              <span className="badge badge-cyan mb-5">AI-Powered Buyer Intelligence</span>
              <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                Find Buyers <span className="gradient-text">Before Your Competitors</span> Do
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                Our AI intent engine processes <strong className="text-white">2B+ weekly signals</strong> to surface
                in-market accounts actively researching solutions in your category — giving your team
                first-mover advantage on every deal.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#inquiry" className="btn-primary flex items-center gap-2">Request Intent Data Demo <ArrowRight size={16} /></Link>
                <Link href="/contact" className="btn-outline">Learn More</Link>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-display font-bold text-white">Live Intent Signals</div>
                  <div className="text-white/40 text-xs">Updated every 15 minutes</div>
                </div>
                <span className="flex items-center gap-1.5 text-green-400 text-xs font-semibold"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />LIVE</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { company: 'Midwest Health Systems', topic: 'Healthcare Data Management', score: 94, surge: '+340%' },
                  { company: 'TechVenture Corp', topic: 'B2B Data Providers', score: 88, surge: '+280%' },
                  { company: 'Pacific Medical', topic: 'Physician Email Lists', score: 82, surge: '+195%' },
                  { company: 'Atlas Manufacturing', topic: 'CRM Software Comparison', score: 79, surge: '+160%' },
                  { company: 'Global Finance Ltd', topic: 'Intent Data Solutions', score: 74, surge: '+145%' },
                  { company: 'CloudSoft Inc.', topic: 'Salesforce Alternative', score: 71, surge: '+128%' },
                ].map((item) => (
                  <div key={item.company} className="flex items-center gap-3 p-3 rounded-xl bg-white/4 border border-white/5">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-600/20 flex items-center justify-center text-xs font-bold text-cyan-400 flex-shrink-0">
                      {item.company[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white text-xs truncate">{item.company}</div>
                      <div className="text-white/35 text-xs truncate">{item.topic}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-cyan-400 font-bold text-sm font-mono">{item.score}</div>
                      <div className="text-green-400 text-xs">{item.surge}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/15 text-center">
                <span className="text-indigo-300 text-xs">Showing 6 of 4,280 active intent signals today</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              6 Types of <span className="gradient-text">Intent Intelligence</span>
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto">Every signal type captures different stages of the buyer journey — giving you complete purchase intent coverage.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className={`enterprise-card p-6 border ${f.border}`}>
                  <div className={`w-11 h-11 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mb-4`}>
                    <Icon size={20} className={f.color} />
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{f.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>

          <h2 className="font-display text-3xl font-bold text-white text-center mb-8">
            Intent Signal <span className="gradient-text">Types</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {intentTypes.map((it) => (
              <div key={it.type} className="enterprise-card p-5 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap size={16} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-sm mb-1">{it.type}</h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-2">{it.desc}</p>
                  <span className="badge badge-cyan text-xs">{it.signal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-6">
          <InquiryForm
            title="Request Intent Data Demo"
            subtitle="See real in-market buyer signals for your target accounts — delivered within 24 hours."
            pageSource="Intent Data Page"
            dataType="Intent Data / Buyer Signals"
          />
        </div>
      </section>
    </>
  )
}
