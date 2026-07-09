import Link from 'next/link'
import { Heart, Users, Cpu, Target, Database, RefreshCw, Building, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Healthcare Data',
    description:
      'Reach 18M+ verified healthcare professionals including physicians, nurses, specialists, hospital executives, and medical device decision-makers across all specialties.',
    href: '/healthcare',
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
    stats: ['18M+ Healthcare Pros', '450+ Specialties', '100% Verified'],
  },
  {
    icon: Users,
    title: 'B2B Contact Database',
    description:
      'Access 140M+ C-suite and decision-maker contacts with verified direct dials, email addresses, LinkedIn profiles, and firmographic intelligence for precision targeting.',
    href: '/b2b',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    stats: ['140M+ Decision Makers', '50+ Industries', '95% Accuracy'],
  },
  {
    icon: Cpu,
    title: 'Technology Users Data',
    description:
      'Target companies and users of 500+ technology platforms. Identify Salesforce, AWS, HubSpot, Oracle, SAP, and 500+ other technology stack users with verified contact data.',
    href: '/technology',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    stats: ['20M+ Tech Users', '500+ Platforms', 'Real-time Signals'],
  },
  {
    icon: Target,
    title: 'Intent Data',
    description:
      'Identify in-market buyers actively researching your solutions. Our AI-powered intent signals track 2B+ web behaviors to surface prospects ready to purchase.',
    href: '/intent-data',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    stats: ['2B+ Signals/Month', '35K+ Topics', 'Real-Time Alerts'],
  },
  {
    icon: Database,
    title: 'Data Enrichment',
    description:
      'Transform your existing CRM data with 150+ verified attributes. Append missing emails, direct dials, firmographics, technographics, and behavioral data at scale.',
    href: '/data-enrichment',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    stats: ['150+ Attributes', 'CRM Integration', 'Bulk Processing'],
  },
  {
    icon: RefreshCw,
    title: 'Channel Partners',
    description:
      'Connect with 3.2M+ verified channel partners, resellers, distributors, and value-added resellers across technology, healthcare, and industrial sectors globally.',
    href: '/channel-partners',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    stats: ['3.2M+ Partners', '85 Countries', 'Verified Contacts'],
  },
  {
    icon: Building,
    title: 'Industry Email Lists',
    description:
      'Hyper-targeted industry-specific contact lists for 50+ verticals including finance, manufacturing, real estate, education, logistics, pharma, and automotive.',
    href: '/industry',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
    stats: ['50+ Industries', '300+ Sub-verticals', 'Weekly Updates'],
  },
  {
    icon: Database,
    title: 'Custom Data Solutions',
    description:
      'Need something unique? Our data scientists build custom datasets to your exact specifications — specific geographies, technologies, job functions, or any criteria.',
    href: '/custom-data',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    stats: ['Any Criteria', 'Dedicated Team', '7-Day Build Time'],
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-navy-900/40 relative">
      <div className="absolute inset-0 grid-overlay" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge badge-blue mb-4">Our Solutions</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Complete Data Intelligence{' '}
            <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">
            From healthcare specialists to Fortune 500 executives — every data solution
            your enterprise marketing and sales team needs, in one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="enterprise-card p-6 group flex flex-col">
                <div
                  className={`w-12 h-12 rounded-xl ${service.bgColor} border ${service.borderColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={22} className={service.color} />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.stats.map((stat) => (
                    <span key={stat} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/8">
                      {stat}
                    </span>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className={`flex items-center gap-1.5 text-sm font-semibold ${service.color} hover:gap-2.5 transition-all`}
                >
                  Explore {service.title} <ArrowRight size={14} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
