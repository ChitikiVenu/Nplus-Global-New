import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const platforms = [
  { name: 'Salesforce', users: '3.2M+', logo: '☁️', href: '/technology/salesforce-users-list' },
  { name: 'AWS', users: '5.1M+', logo: '🔶', href: '/technology/aws-users-database' },
  { name: 'HubSpot', users: '1.8M+', logo: '🟠', href: '/technology/hubspot-users-list' },
  { name: 'Oracle', users: '2.4M+', logo: '🔴', href: '/technology/oracle-users-list' },
  { name: 'SAP', users: '1.9M+', logo: '💙', href: '/technology/sap-users-list' },
  { name: 'Microsoft Dynamics', users: '2.1M+', logo: '🔷', href: '/technology/microsoft-dynamics-users-list' },
  { name: 'ServiceNow', users: '780K+', logo: '🟢', href: '/technology/servicenow-users' },
  { name: 'Shopify', users: '1.4M+', logo: '🛍️', href: '/technology/shopify-users-list' },
]

export default function TechnologySection() {
  return (
    <section className="section-padding bg-gradient-to-b from-navy-900/50 to-navy-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Platform grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {platforms.map((platform) => (
              <Link
                key={platform.name}
                href={platform.href}
                className="enterprise-card p-5 text-center group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{platform.logo}</div>
                <div className="font-display font-bold text-white text-sm mb-0.5">{platform.name}</div>
                <div className="text-cyan-400 text-xs font-bold font-mono">{platform.users}</div>
                <div className="text-white/30 text-xs">Users</div>
              </Link>
            ))}
          </div>

          {/* Content */}
          <div>
            <span className="badge badge-blue mb-5">Technology Users Database</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5">
              Target Companies by{' '}
              <span className="gradient-text-cyan">Technology Stack</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Know exactly which technology your prospects use. Our technographic intelligence
              covers 500+ platforms with verified user counts, key contacts, contract renewal
              dates, and competitive displacement opportunities.
            </p>
            <div className="space-y-3 mb-8">
              {[
                'Identify companies using competitor technologies',
                'Pinpoint integration partners and technology buyers',
                'Time outreach around contract renewal cycles',
                'Filter by company size, industry, and location',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-white/65 text-sm">
                  <CheckCircle size={16} className="text-cyan-500 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
            <Link href="/technology" className="btn-primary inline-flex items-center gap-2">
              Explore Technology Data <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
