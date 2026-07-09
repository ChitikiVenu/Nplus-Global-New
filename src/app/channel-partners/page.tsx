import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryForm from '@/components/shared/InquiryForm'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Channel Partners Database | 3.2M+ Reseller & Distributor Contacts | NPLUS Global',
  description: 'Access 3.2M+ verified channel partner contacts including resellers, distributors, VARs, MSPs, and system integrators across technology, healthcare, and industrial sectors.',
  alternates: { canonical: 'https://nplusglobal.com/channel-partners' },
}

const partnerTypes = [
  { type: 'Value-Added Resellers (VARs)', count: '820K+', desc: 'Technology VARs with vertical specializations and certifications', icon: '🔧' },
  { type: 'Managed Service Providers', count: '480K+', desc: 'MSPs managing IT infrastructure and cloud for SMB and enterprise', icon: '☁️' },
  { type: 'System Integrators (SIs)', count: '390K+', desc: 'SIs specializing in enterprise software implementation and integration', icon: '⚙️' },
  { type: 'Independent Software Vendors', count: '560K+', desc: 'ISVs building on top of major technology platforms', icon: '💻' },
  { type: 'Distributors', count: '290K+', desc: 'Master distributors and sub-distributors across technology and healthcare', icon: '📦' },
  { type: 'Healthcare Distributors', count: '185K+', desc: 'Medical device and pharmaceutical distribution specialists', icon: '🏥' },
  { type: 'Industrial Distributors', count: '240K+', desc: 'Industrial equipment and MRO distribution companies', icon: '🏭' },
  { type: 'Financial Advisors & Brokers', count: '230K+', desc: 'Insurance brokers, RIAs, and financial product distributors', icon: '💹' },
]

const dataFields = [
  'Full Name & Job Title', 'Company Name & Type', 'Direct Email', 'Direct Phone',
  'LinkedIn URL', 'Company Revenue', 'Employee Count', 'Geographic Territory',
  'Vertical Specializations', 'Vendor Certifications', 'Technology Partnerships',
  'Annual Resale Volume', 'Customer Industries Served', 'Founding Year',
  'Website & Social Profiles', 'Key Decision-Maker Contacts', 'Distributor Tier',
  'Exclusive/Non-Exclusive Status', 'Active Vendor Programs', 'Compliance Certifications',
]

export default function ChannelPartnersPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden py-24 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-6">
                <Link href="/" className="hover:text-cyan-400">Home</Link><span>/</span>
                <span className="text-white/70">Channel Partners</span>
              </nav>
              <span className="badge badge-blue mb-5">Channel Partner Intelligence</span>
              <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                Build Your Channel with <span className="gradient-text">3.2M+ Verified Partners</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                Recruit, enable, and expand your channel partner ecosystem with verified contacts
                at resellers, distributors, VARs, MSPs, and system integrators across
                technology, healthcare, and industrial sectors worldwide.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#inquiry" className="btn-primary flex items-center gap-2">
                  Request Partner Database Sample <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-outline">Book Consultation</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 3.2, suffix: 'M+', label: 'Channel Partners', color: 'text-cyan-400', decimals: 1 },
                { value: 85, suffix: '+', label: 'Countries', color: 'text-blue-400', decimals: 0 },
                { value: 98, suffix: '%', label: 'Verified Contacts', color: 'text-green-400', decimals: 0 },
                { value: 8, suffix: '+', label: 'Partner Types', color: 'text-purple-400', decimals: 0 },
              ].map((s) => (
                <div key={s.label} className="enterprise-card p-6 text-center">
                  <div className={`font-display font-extrabold text-4xl ${s.color} mb-1`}>
                    <AnimatedCounter end={s.value} suffix={s.suffix} decimals={s.decimals} duration={2000} />
                  </div>
                  <div className="text-white/55 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner types */}
      <section className="section-padding bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              8 Partner Types, <span className="gradient-text">One Platform</span>
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto">
              Whether you're building a reseller program, distributor network, or ISV ecosystem,
              we have the verified partner contacts you need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnerTypes.map((pt) => (
              <div key={pt.type} className="enterprise-card p-5 group">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{pt.icon}</div>
                <h3 className="font-display font-bold text-white text-sm mb-1 leading-snug">{pt.type}</h3>
                <div className="text-cyan-400 font-bold font-mono text-sm mb-2">{pt.count}</div>
                <p className="text-white/45 text-xs">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data fields + use cases */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-5">
              20+ Fields Per <span className="gradient-text">Partner Record</span>
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {dataFields.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-white/65">
                  <CheckCircle size={13} className="text-cyan-500 flex-shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-5">
              Channel Partner <span className="gradient-text">Use Cases</span>
            </h2>
            <div className="space-y-3">
              {[
                { title: 'Channel Partner Recruitment', desc: 'Identify and recruit new resellers, distributors, and VARs aligned to your territory, vertical, and revenue goals.' },
                { title: 'Partner Program Marketing', desc: 'Promote your partner program to the right organizations through targeted email and digital campaigns.' },
                { title: 'Competitive Intelligence', desc: 'Identify which partners are reselling competitor solutions and target them for conversion.' },
                { title: 'Channel Conflict Prevention', desc: 'Map existing partner territories and identify white-space opportunities without channel conflict.' },
                { title: 'Partner Enablement', desc: 'Ensure complete partner database coverage for training invitations, product updates, and MDF programs.' },
                { title: 'Distribution Expansion', desc: 'Identify new distributor opportunities in target geographies or vertical markets.' },
              ].map((uc) => (
                <div key={uc.title} className="enterprise-card p-4">
                  <h3 className="font-display font-bold text-white text-sm mb-1">{uc.title}</h3>
                  <p className="text-white/50 text-sm">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="section-padding bg-navy-900/40">
        <div className="max-w-3xl mx-auto px-6">
          <InquiryForm
            title="Request Channel Partner Data Sample"
            subtitle="Tell us your target partner type and geography, and receive a free verified sample within 24 hours."
            pageSource="Channel Partners Page"
            dataType="Channel Partners Data"
          />
        </div>
      </section>
    </>
  )
}
