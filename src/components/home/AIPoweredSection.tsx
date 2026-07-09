import Link from 'next/link'
import { ArrowRight, Brain, Sparkles, Network, BarChart3 } from 'lucide-react'

export default function AIPoweredSection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/15 via-transparent to-cyan-900/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge badge-cyan mb-5">
              <Sparkles size={12} className="mr-1" /> AI-Powered Intelligence
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5">
              Machine Learning{' '}
              <span className="gradient-text">Data Validation</span>{' '}
              at Scale
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Our proprietary AI engine runs 200+ validation checks on every contact record,
              cross-referencing against 50+ data sources to guarantee the accuracy and
              completeness of your enterprise dataset before delivery.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Brain,
                  title: 'Neural Network Validation',
                  desc: 'Pattern recognition models detect and flag anomalous data entries before they reach your CRM',
                },
                {
                  icon: Network,
                  title: 'Graph Intelligence',
                  desc: 'Relationship mapping reveals organizational hierarchies and buying committee structures',
                },
                {
                  icon: BarChart3,
                  title: 'Predictive Scoring',
                  desc: 'AI scores each contact for engagement probability, deal size potential, and churn risk',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-4 rounded-xl bg-white/3 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm mb-1">{title}</h4>
                    <p className="text-white/45 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              See Platform Demo <ArrowRight size={16} />
            </Link>
          </div>

          {/* AI visualization */}
          <div className="glass rounded-2xl p-6 border border-white/8">
            <div className="text-center mb-6">
              <div className="font-display font-bold text-white text-lg mb-1">AI Validation Pipeline</div>
              <div className="text-white/40 text-sm">Real-time data quality scoring</div>
            </div>

            <div className="space-y-3">
              {[
                { step: '01', label: 'Data Ingestion', desc: 'Raw records collected from 50+ sources', status: 'Complete', pct: 100 },
                { step: '02', label: 'Email Validation', desc: 'SMTP, DNS, and syntax verification', status: 'Complete', pct: 98 },
                { step: '03', label: 'Phone Verification', desc: 'Carrier lookup and line type validation', status: 'Complete', pct: 95 },
                { step: '04', label: 'Compliance Check', desc: 'GDPR, CAN-SPAM, CCPA screening', status: 'Active', pct: 87 },
                { step: '05', label: 'Enrichment', desc: 'Append firmographic & technographic data', status: 'Queued', pct: 60 },
                { step: '06', label: 'Quality Score', desc: 'Final AI quality gate (min 95%)', status: 'Queued', pct: 0 },
              ].map((item) => (
                <div key={item.step} className="p-3 rounded-xl bg-white/4 border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-white/30">{item.step}</span>
                    <span className="font-semibold text-white text-sm flex-1">{item.label}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      item.status === 'Complete' ? 'text-green-400 bg-green-500/10' :
                      item.status === 'Active' ? 'text-cyan-400 bg-cyan-500/10 animate-pulse' :
                      'text-white/30 bg-white/5'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="text-white/35 text-xs mb-2">{item.desc}</div>
                  <div className="w-full bg-white/5 rounded-full h-1.5">
                    <div
                      className={`h-full rounded-full transition-all ${
                        item.pct === 100 ? 'bg-green-500' :
                        item.pct > 0 ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-white/10'
                      }`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
              <span className="text-green-400 text-sm font-semibold">
                ✓ 24,580 records validated in last batch — 98.4% quality score
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
