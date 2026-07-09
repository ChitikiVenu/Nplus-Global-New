import { Shield, Clock, RefreshCw, Globe, Award, HeadphonesIcon } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: '15+ Compliance Standards',
    desc: 'GDPR, CAN-SPAM, CASL, CCPA compliant data with built-in consent management and full audit trails.',
    stat: '100% Compliant',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  {
    icon: RefreshCw,
    title: 'Continuously Refreshed',
    desc: 'Our data is updated every 30 days using AI validation, ensuring you never reach a stale contact again.',
    stat: 'Monthly Updates',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Globe,
    title: 'Global Intelligence',
    desc: '210+ countries covered with localized data collection teams ensuring cultural and regulatory alignment.',
    stat: '210+ Countries',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Clock,
    title: '24-Hour Delivery',
    desc: 'Receive your customized dataset within 24 hours of order confirmation. Urgent? We offer same-day delivery.',
    stat: '24hr Turnaround',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: Award,
    title: '98% Deliverability',
    desc: 'Industry-leading email validation ensures your campaigns reach real inboxes, not spam folders or bounced addresses.',
    stat: '98% Accuracy',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Data Experts',
    desc: 'Every client gets a dedicated data consultant who understands your industry and helps optimize targeting.',
    stat: '24/7 Support',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy-900/50 relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge badge-blue mb-4">Why NPLUS Global</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            The Data Partner{' '}
            <span className="gradient-text">Enterprise Teams</span> Trust
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">
            When data quality directly impacts revenue, enterprises choose NPLUS Global for
            reliability, compliance, and depth that no other provider can match.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="enterprise-card p-6 flex gap-4">
                <div className={`w-12 h-12 rounded-xl ${reason.bg} border ${reason.border} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={22} className={reason.color} />
                </div>
                <div>
                  <div className={`text-xs font-bold ${reason.color} font-mono mb-1`}>{reason.stat}</div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{reason.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
