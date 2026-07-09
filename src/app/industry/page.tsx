import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryForm from '@/components/shared/InquiryForm'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industry Email Lists | 50+ Vertical-Specific Databases | NPLUS Global',
  description: 'Access industry-specific email lists across 50+ verticals including healthcare, manufacturing, finance, retail, logistics, pharma, and more. Verified decision-maker contacts.',
  alternates: { canonical: 'https://nplusglobal.com/industry' },
}

const industries = [
  { name: 'Healthcare & Medical', slug: 'healthcare', icon: '🏥', count: '18M+', desc: 'Physicians, nurses, hospital executives, and healthcare professionals' },
  { name: 'Manufacturing', slug: 'manufacturing', icon: '🏭', count: '5.2M+', desc: 'Plant managers, operations directors, and procurement officers' },
  { name: 'Financial Services', slug: 'finance', icon: '💹', count: '6.8M+', desc: 'CFOs, investment managers, bankers, and fintech executives' },
  { name: 'Technology & SaaS', slug: 'saas', icon: '💻', count: '12M+', desc: 'CTOs, VPs of Engineering, and software decision-makers' },
  { name: 'Real Estate', slug: 'real-estate', icon: '🏢', count: '3.1M+', desc: 'Property managers, developers, brokers, and REIT executives' },
  { name: 'Education', slug: 'education', icon: '🎓', count: '5.4M+', desc: 'University administrators, principals, and EdTech buyers' },
  { name: 'Logistics & Supply Chain', slug: 'logistics', icon: '🚚', count: '2.8M+', desc: 'Supply chain directors, fleet managers, and 3PL executives' },
  { name: 'Retail & E-commerce', slug: 'retail', icon: '🛍️', count: '7.2M+', desc: 'Retail buyers, merchandisers, and e-commerce directors' },
  { name: 'Pharmaceutical', slug: 'pharma', icon: '💊', count: '1.9M+', desc: 'Pharma executives, R&D leaders, and regulatory affairs' },
  { name: 'Automotive', slug: 'automotive', icon: '🚗', count: '2.5M+', desc: 'Dealership owners, fleet managers, and OEM executives' },
  { name: 'Telecom', slug: 'telecom', icon: '📡', count: '1.6M+', desc: 'Network engineers, product managers, and telecom executives' },
  { name: 'Hospitality & Travel', slug: 'hospitality', icon: '🏨', count: '2.1M+', desc: 'Hotel GMs, F&B directors, and hospitality procurement' },
  { name: 'Construction', slug: 'construction', icon: '🏗️', count: '1.8M+', desc: 'General contractors, project managers, and developers' },
  { name: 'Legal Services', slug: 'legal', icon: '⚖️', count: '1.2M+', desc: 'Managing partners, general counsel, and law firm administrators' },
  { name: 'Insurance', slug: 'insurance', icon: '🛡️', count: '2.4M+', desc: 'Insurance brokers, underwriters, and claims executives' },
  { name: 'Media & Publishing', slug: 'media', icon: '📰', count: '980K+', desc: 'Publishers, editors, advertising directors, and media buyers' },
  { name: 'Non-Profit & NGO', slug: 'nonprofit', icon: '🤝', count: '1.4M+', desc: 'Executive directors, development officers, and program managers' },
  { name: 'Agriculture', slug: 'agriculture', icon: '🌾', count: '890K+', desc: 'Farm owners, agribusiness executives, and ag-tech buyers' },
  { name: 'Energy & Utilities', slug: 'energy', icon: '⚡', count: '1.1M+', desc: 'Utility executives, energy managers, and renewable energy leaders' },
  { name: 'Mining & Resources', slug: 'mining', icon: '⛏️', count: '620K+', desc: 'Mine operators, extraction executives, and resource managers' },
  { name: 'Aerospace & Defense', slug: 'aerospace', icon: '✈️', count: '740K+', desc: 'Defense contractors, aerospace engineers, and procurement officers' },
  { name: 'Biotech & Life Sciences', slug: 'biotech', icon: '🧬', count: '850K+', desc: 'Biotech CEOs, R&D directors, and clinical operations leaders' },
  { name: 'Architecture & Design', slug: 'architecture', icon: '🏛️', count: '560K+', desc: 'Architects, interior designers, and urban planners' },
  { name: 'Food & Beverage', slug: 'food-beverage', icon: '🍴', count: '1.6M+', desc: 'Restaurant chains, food manufacturers, and CPG executives' },
  { name: 'Sports & Fitness', slug: 'sports', icon: '🏋️', count: '720K+', desc: 'Gym owners, sports teams, and wellness facility operators' },
  { name: 'Veterinary', slug: 'veterinary', icon: '🐾', count: '340K+', desc: 'Veterinarians, vet clinic owners, and animal health buyers' },
  { name: 'Environmental Services', slug: 'environmental', icon: '🌿', count: '480K+', desc: 'Environmental consultants, waste management, and sustainability officers' },
  { name: 'Government & Public Sector', slug: 'government', icon: '🏛️', count: '2.8M+', desc: 'Federal, state, and local government procurement officers' },
]

export default function IndustryPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden py-20 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="badge badge-cyan mb-5">Industry Email Lists</span>
          <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-5">
            50+ Industry <span className="gradient-text">Vertical Databases</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-8">
            Whether you're targeting physicians or plant managers, hotel GMs or hedge fund analysts —
            we have verified decision-maker contacts for every major industry and sub-vertical.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="#inquiry" className="btn-primary flex items-center gap-2">
              Request Industry Sample <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-outline">Custom Industry List</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industry/${ind.slug}`}
                className="enterprise-card p-5 group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">{ind.icon}</span>
                  <div>
                    <h2 className="font-display font-bold text-white text-sm mb-0.5 leading-tight group-hover:text-cyan-300 transition-colors">
                      {ind.name}
                    </h2>
                    <div className="text-cyan-400 font-bold font-mono text-xs mb-1">{ind.count}</div>
                    <p className="text-white/40 text-xs leading-snug">{ind.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="section-padding bg-navy-900/40">
        <div className="max-w-3xl mx-auto px-6">
          <InquiryForm
            title="Request Industry-Specific Data Sample"
            subtitle="Tell us your target industry and receive a free verified sample within 24 hours."
            pageSource="Industry Page"
            dataType="Custom Industry Data"
          />
        </div>
      </section>
    </>
  )
}
