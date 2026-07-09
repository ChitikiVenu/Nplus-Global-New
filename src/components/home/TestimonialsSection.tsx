const testimonials = [
  {
    quote: "NPLUS Global's healthcare data transformed our physician outreach. We saw a 340% improvement in campaign response rates and closed 28 new hospital accounts in Q1 alone. The data quality is unmatched.",
    name: 'Sarah Mitchell',
    title: 'VP of Marketing',
    company: 'MedEquip Solutions',
    industry: 'Medical Devices',
    initials: 'SM',
    rating: 5,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    quote: "We tried three other data providers before switching to NPLUS Global. The difference in deliverability rates was immediate — 94% vs the 67% we were getting before. ROI was clear within 30 days.",
    name: 'James Rodriguez',
    title: 'Director of Demand Generation',
    company: 'TechVenture Corp',
    industry: 'SaaS',
    initials: 'JR',
    rating: 5,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    quote: "The intent data capability is a game-changer. We can now identify which hospital systems are actively evaluating our software and prioritize our outreach accordingly. Pipeline velocity increased by 60%.",
    name: 'Linda Chen',
    title: 'Chief Revenue Officer',
    company: 'HealthTech Dynamics',
    industry: 'Healthcare IT',
    initials: 'LC',
    rating: 5,
    color: 'from-rose-500 to-orange-600',
  },
  {
    quote: "NPLUS Global provided us with a custom dataset of Salesforce users in the manufacturing sector within 48 hours. The accuracy was phenomenal — 97% deliverability on our first campaign.",
    name: 'Robert Kaufman',
    title: 'Head of ABM',
    company: 'CloudForce Partners',
    industry: 'Technology',
    initials: 'RK',
    rating: 5,
    color: 'from-green-500 to-teal-600',
  },
  {
    quote: "Our channel partner recruitment campaign using NPLUS Global's data achieved a 4.2x ROI in the first quarter. The distributor data was incredibly accurate and well-segmented.",
    name: 'Amanda Torres',
    title: 'Partner Marketing Lead',
    company: 'NetSystems Inc.',
    industry: 'Networking',
    initials: 'AT',
    rating: 5,
    color: 'from-yellow-500 to-orange-600',
  },
  {
    quote: "We enriched our entire CRM database with NPLUS Global's enrichment service. The completeness went from 54% to 91% on key fields. Our SDR team's connect rates doubled overnight.",
    name: 'David Park',
    title: 'Sales Operations Manager',
    company: 'FinServe Analytics',
    industry: 'Financial Services',
    initials: 'DP',
    rating: 5,
    color: 'from-indigo-500 to-blue-600',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-navy-900/40 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge badge-cyan mb-4">Client Success Stories</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by{' '}
            <span className="gradient-text">5,000+ Enterprises</span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            See how leading organizations leverage NPLUS Global data intelligence
            to accelerate growth and win more deals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="enterprise-card p-6 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              <p className="text-white/65 text-sm leading-relaxed mb-5 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.title}</div>
                  <div className="text-white/30 text-xs">{t.company} · {t.industry}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
