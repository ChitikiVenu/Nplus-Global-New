// Link available for future CTA
// icons from 'lucide-react'

const caseStudies = [
  {
    company: 'Global MedDevice Co.',
    industry: 'Medical Devices',
    challenge: 'Needed to reach 50,000 cardiologists and hospital procurement teams across North America for a new cardiac monitoring device launch.',
    solution: 'Delivered a verified dataset of 52,400 cardiologists, cardiac surgeons, and hospital supply chain decision-makers with direct emails and LinkedIn profiles.',
    results: [
      { metric: '340%', label: 'Campaign ROI' },
      { metric: '28', label: 'New Accounts' },
      { metric: '92%', label: 'Open Rate' },
    ],
    color: 'from-rose-600/20 to-pink-600/10',
    border: 'border-rose-500/20',
  },
  {
    company: 'CloudSoftware Inc.',
    industry: 'Enterprise SaaS',
    challenge: 'Wanted to displace a competitor among Oracle users in manufacturing — needed contacts at companies using Oracle ERP with 500+ employees.',
    solution: 'Provided 8,200 Oracle users in manufacturing with C-suite contacts, technology stack details, and contract renewal windows.',
    results: [
      { metric: '4.2x', label: 'Pipeline Growth' },
      { metric: '67%', label: 'Connect Rate' },
      { metric: '$2.8M', label: 'New ARR' },
    ],
    color: 'from-blue-600/20 to-indigo-600/10',
    border: 'border-blue-500/20',
  },
  {
    company: 'FinTech Partners LLC',
    industry: 'Financial Services',
    challenge: 'Building a channel partner program and needed to find resellers, distributors, and VARs in the fintech and banking software space.',
    solution: 'Custom channel partner dataset with 3,500 verified resellers, including revenue size, certifications held, and geographic territories.',
    results: [
      { metric: '185', label: 'New Partners' },
      { metric: '3.1x', label: 'Recruiting ROI' },
      { metric: '48hr', label: 'Data Delivery' },
    ],
    color: 'from-green-600/20 to-emerald-600/10',
    border: 'border-green-500/20',
  },
]

export function CaseStudiesSection() {
  return (
    <section className="section-padding bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge badge-blue mb-4">Case Studies</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Real Results from{' '}
            <span className="gradient-text">Real Clients</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">
            Enterprise organizations across healthcare, technology, and financial services
            use NPLUS Global to power their most ambitious growth initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.company} className={`enterprise-card p-6 bg-gradient-to-br ${cs.color} border ${cs.border}`}>
              <div className="mb-4">
                <span className="badge badge-cyan mb-2 text-xs">{cs.industry}</span>
                <h3 className="font-display font-bold text-white text-lg">{cs.company}</h3>
              </div>
              <div className="mb-4">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1">Challenge</p>
                <p className="text-white/60 text-sm">{cs.challenge}</p>
              </div>
              <div className="mb-5">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1">Solution</p>
                <p className="text-white/60 text-sm">{cs.solution}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                {cs.results.map((r) => (
                  <div key={r.label} className="text-center">
                    <div className="font-display font-extrabold text-cyan-400 text-xl">{r.metric}</div>
                    <div className="text-white/40 text-xs">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
