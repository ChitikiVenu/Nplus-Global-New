import Link from 'next/link'
import { ArrowRight, Zap, Eye, TrendingUp, Bell } from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: '2B+ Weekly Signals',
    desc: 'Monitor 2 billion web events weekly across 35,000+ technology and business topics',
    color: 'text-cyan-400',
  },
  {
    icon: TrendingUp,
    title: 'AI-Powered Scoring',
    desc: 'Machine learning models rank prospects by purchase probability and engagement intensity',
    color: 'text-blue-400',
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    desc: 'Get notified the moment a target account shows buying signals for your category',
    color: 'text-purple-400',
  },
  {
    icon: Zap,
    title: 'CRM Integration',
    desc: 'Push intent data directly to Salesforce, HubSpot, Marketo, and 30+ platforms',
    color: 'text-green-400',
  },
]

export default function IntentDataSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge badge-cyan mb-4">Intent Data & Buyer Signals</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Find Buyers{' '}
            <span className="gradient-text">Before Your Competitors</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">
            Our AI-powered intent engine surfaces in-market accounts actively researching
            solutions in your category — giving your team first-mover advantage on every deal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="enterprise-card p-6 text-center">
                <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={22} className={f.color} />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Intent demo card */}
        <div className="glass rounded-2xl p-6 border border-white/8 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="text-white/30 text-xs font-mono">intent-signals.live</span>
          </div>
          <div className="space-y-3">
            {[
              { company: 'Midwest Health Systems', signal: 'Researching EHR Software', score: 94, time: '2m ago', intent: 'HIGH' },
              { company: 'TechCorp Inc.', signal: 'Comparing CRM Vendors', score: 87, time: '5m ago', intent: 'HIGH' },
              { company: 'Pacific Medical Group', signal: 'Healthcare Data Vendors', score: 82, time: '8m ago', intent: 'MED' },
              { company: 'Atlas Manufacturing', signal: 'B2B Data Providers', score: 78, time: '12m ago', intent: 'MED' },
            ].map((item) => (
              <div key={item.company} className="flex items-center gap-4 p-3 rounded-xl bg-white/4 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/20 flex items-center justify-center text-xs font-bold text-cyan-400">
                  {item.company.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white text-sm truncate">{item.company}</div>
                  <div className="text-white/40 text-xs">{item.signal}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className={`text-xs font-bold px-2 py-0.5 rounded-full mb-0.5 ${
                    item.intent === 'HIGH' ? 'bg-green-500/15 text-green-400' : 'bg-yellow-500/15 text-yellow-400'
                  }`}>
                    {item.intent}
                  </div>
                  <div className="text-cyan-400 text-xs font-mono">{item.score}</div>
                </div>
                <div className="text-white/25 text-xs">{item.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/intent-data" className="btn-primary inline-flex items-center gap-2">
            Explore Intent Data <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
