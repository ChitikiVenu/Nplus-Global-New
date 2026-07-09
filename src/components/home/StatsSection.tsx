import AnimatedCounter from '@/components/shared/AnimatedCounter'

const stats = [
  {
    value: 950,
    suffix: 'M+',
    label: 'B2B Contacts',
    sub: 'Verified global professionals',
    color: 'text-cyan-400',
    icon: '🌐',
  },
  {
    value: 140,
    suffix: 'M+',
    label: 'Decision Makers',
    sub: 'C-suite & VP-level contacts',
    color: 'text-blue-400',
    icon: '👔',
  },
  {
    value: 18,
    suffix: 'M+',
    label: 'Healthcare Professionals',
    sub: 'Physicians, nurses, executives',
    color: 'text-purple-400',
    icon: '🏥',
  },
  {
    value: 20,
    suffix: 'M+',
    label: 'Technology Users',
    sub: 'Platform-specific verified users',
    color: 'text-indigo-400',
    icon: '💻',
  },
  {
    value: 3.2,
    suffix: 'M+',
    label: 'Channel Partners',
    sub: 'Resellers & distributors',
    color: 'text-green-400',
    icon: '🤝',
    decimals: 1,
  },
  {
    value: 210,
    suffix: '+',
    label: 'Countries Covered',
    sub: 'Global data reach',
    color: 'text-orange-400',
    icon: '🌍',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Email Deliverability',
    sub: 'Industry-best accuracy',
    color: 'text-yellow-400',
    icon: '✉️',
  },
  {
    value: 150,
    suffix: '+',
    label: 'Data Attributes',
    sub: 'Per contact record',
    color: 'text-pink-400',
    icon: '📊',
  },
  {
    value: 24,
    suffix: 'hr',
    label: 'Data Delivery',
    sub: 'Fast turnaround guaranteed',
    color: 'text-cyan-300',
    icon: '⚡',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Compliance Standards',
    sub: 'GDPR, CCPA, CAN-SPAM & more',
    color: 'text-teal-400',
    icon: '🛡️',
  },
]

export default function StatsSection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge badge-cyan mb-4">Platform Scale</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            The Scale of{' '}
            <span className="gradient-text">Global Intelligence</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">
            Numbers that speak for themselves. Enterprise-grade data infrastructure
            powering the world&apos;s most ambitious go-to-market teams.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card enterprise-card p-5 text-center group"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className={`font-display font-extrabold text-3xl lg:text-4xl ${stat.color} mb-1`}>
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  duration={2200}
                />
              </div>
              <div className="font-display font-semibold text-white text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-white/40 text-xs leading-snug">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
