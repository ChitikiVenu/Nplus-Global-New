import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryForm from '@/components/shared/InquiryForm'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { CheckCircle, ArrowRight } from 'lucide-react'

const industryData: Record<string, {
  name: string; count: string; countNum: number; icon: string
  metaDesc: string; heroDesc: string
  dataFields: string[]; useCases: string[]; subVerticals: string[]
}> = {
  manufacturing: { name: 'Manufacturing', count: '5.2M+', countNum: 5.2, icon: '🏭', metaDesc: 'Access 5.2M+ manufacturing industry contacts including plant managers, operations directors, and procurement officers.', heroDesc: 'Reach decision-makers across discrete, process, and industrial manufacturing — from plant floor to corporate HQ.', dataFields: ['Full Name', 'Job Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Plant Location', 'Company Revenue', 'Employee Count', 'Manufacturing Type', 'ERP System', 'ISO Certifications'], useCases: ['Industrial equipment sales', 'Manufacturing ERP software', 'Safety & compliance solutions', 'Supply chain technology', 'Industrial IoT platforms', 'MRO procurement outreach'], subVerticals: ['Automotive Manufacturing', 'Aerospace & Defense', 'Food & Beverage', 'Chemical Processing', 'Electronics Manufacturing', 'Heavy Machinery', 'Consumer Goods', 'Textile & Apparel'] },
  finance: { name: 'Financial Services', count: '6.8M+', countNum: 6.8, icon: '💹', metaDesc: 'Access 6.8M+ financial services contacts including CFOs, investment managers, and fintech executives.', heroDesc: 'Connect with C-suite and senior decision-makers across banking, asset management, insurance, and fintech.', dataFields: ['Full Name', 'Job Title', 'Firm Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'AUM (where applicable)', 'Firm Revenue', 'Employee Count', 'Regulatory Licenses', 'Investment Focus', 'Geographic Coverage'], useCases: ['Fintech software sales', 'Financial data & analytics', 'Compliance technology', 'Wealth management solutions', 'Banking infrastructure', 'Insurance technology'], subVerticals: ['Investment Banking', 'Asset Management', 'Retail Banking', 'Insurance', 'FinTech', 'Private Equity', 'Hedge Funds', 'Credit Unions'] },
  saas: { name: 'Technology & SaaS', count: '12M+', countNum: 12, icon: '💻', metaDesc: 'Target 12M+ technology and SaaS company contacts including CTOs, VPs of Engineering, and product leaders.', heroDesc: 'Reach engineering, product, and go-to-market leaders at SaaS companies, software vendors, and tech-enabled businesses.', dataFields: ['Full Name', 'Job Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Tech Stack', 'Funding Stage', 'ARR Estimate', 'Employee Count', 'Product Category', 'HQ Location'], useCases: ['Developer tool sales', 'Cloud infrastructure', 'API and integration platforms', 'Sales & marketing tech', 'Engineering recruiting', 'Technical conferences'], subVerticals: ['Enterprise SaaS', 'Developer Tools', 'MarTech', 'HRTech', 'EdTech', 'HealthTech', 'FinTech', 'LegalTech'] },
  'real-estate': { name: 'Real Estate', count: '3.1M+', countNum: 3.1, icon: '🏢', metaDesc: 'Access 3.1M+ real estate contacts including property managers, developers, brokers, and REIT executives.', heroDesc: 'Connect with commercial real estate developers, property managers, brokers, investors, and PropTech buyers.', dataFields: ['Full Name', 'Job Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Asset Class Focus', 'AUM/Portfolio Size', 'Geographic Markets', 'Employee Count', 'License Type', 'REIT Status'], useCases: ['PropTech software sales', 'Real estate financing', 'Property management solutions', 'Construction technology', 'Real estate data & analytics', 'Commercial insurance'], subVerticals: ['Commercial Real Estate', 'Residential Brokerage', 'Property Management', 'REITs', 'Real Estate Development', 'PropTech', 'Construction', 'Mortgage Lending'] },
  education: { name: 'Education', count: '5.4M+', countNum: 5.4, icon: '🎓', metaDesc: 'Access 5.4M+ education contacts including university administrators, principals, and EdTech decision-makers.', heroDesc: 'Reach administrators, IT directors, and program managers at K-12, higher education, and vocational institutions.', dataFields: ['Full Name', 'Job Title', 'Institution Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Institution Type', 'Enrollment Size', 'Annual Budget', 'LMS Used', 'Geographic District', 'Accreditations'], useCases: ['EdTech software sales', 'Student information systems', 'Learning management platforms', 'Campus facilities', 'Student financial services', 'Professional development'], subVerticals: ['K-12 Schools', 'Community Colleges', 'Universities', 'Vocational Training', 'Online Education', 'Corporate Training', 'Early Childhood', 'Test Prep'] },
  logistics: { name: 'Logistics & Supply Chain', count: '2.8M+', countNum: 2.8, icon: '🚚', metaDesc: 'Target 2.8M+ logistics and supply chain contacts including 3PL executives, fleet managers, and supply chain directors.', heroDesc: 'Connect with supply chain directors, fleet managers, warehouse operators, and freight logistics decision-makers globally.', dataFields: ['Full Name', 'Job Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Fleet Size', 'Company Revenue', 'Employee Count', 'Service Type', 'Geographic Coverage', 'Certifications'], useCases: ['Fleet telematics & GPS', 'Transportation management', 'Warehouse management systems', 'Last-mile delivery tech', 'Supply chain visibility', 'Freight procurement'], subVerticals: ['Third-Party Logistics (3PL)', 'Freight Brokerage', 'Last-Mile Delivery', 'Cold Chain Logistics', 'Air & Ocean Freight', 'Customs & Trade', 'Warehousing', 'Fleet Management'] },
  retail: { name: 'Retail & E-commerce', count: '7.2M+', countNum: 7.2, icon: '🛍️', metaDesc: 'Access 7.2M+ retail and e-commerce contacts including buyers, merchandisers, and digital commerce directors.', heroDesc: 'Reach retail buyers, e-commerce managers, category directors, and store operations leaders across brick-and-mortar and digital channels.', dataFields: ['Full Name', 'Job Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Channel (Online/Offline)', 'Annual GMV', 'SKU Count', 'Store Count', 'Platform Used', 'Geographic Markets'], useCases: ['Retail technology sales', 'POS and payments systems', 'Inventory management', 'E-commerce platforms', 'Retail media networks', 'Customer loyalty solutions'], subVerticals: ['Department Stores', 'Specialty Retail', 'Grocery & Food', 'E-commerce Pure Play', 'Fashion & Apparel', 'Consumer Electronics', 'Home & Garden', 'Luxury Goods'] },
  pharma: { name: 'Pharmaceutical', count: '1.9M+', countNum: 1.9, icon: '💊', metaDesc: 'Target 1.9M+ pharmaceutical industry contacts including pharma executives, R&D leaders, and regulatory affairs specialists.', heroDesc: 'Reach pharmaceutical executives, drug development leaders, regulatory affairs managers, and medical affairs teams at pharma and biotech companies.', dataFields: ['Full Name', 'Job Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Therapeutic Focus', 'Pipeline Stage', 'Annual R&D Spend', 'Employee Count', 'Regulatory Status', 'Geographic Markets'], useCases: ['Pharma CRO services', 'Clinical trial management', 'Regulatory consulting', 'Drug discovery tools', 'Lab instrumentation', 'Pharma data & analytics'], subVerticals: ['Big Pharma', 'Specialty Pharma', 'Generic Drug Makers', 'OTC/Consumer Health', 'Biosimilars', 'Drug Delivery', 'Animal Health', 'Nutraceuticals'] },
  automotive: { name: 'Automotive', count: '2.5M+', countNum: 2.5, icon: '🚗', metaDesc: 'Access 2.5M+ automotive industry contacts including dealership owners, fleet managers, and OEM executives.', heroDesc: 'Connect with auto dealership operators, fleet managers, OEM procurement, and automotive technology decision-makers.', dataFields: ['Full Name', 'Job Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Dealership Group Size', 'OEM Franchise', 'Fleet Size', 'Annual Revenue', 'Service Bays', 'DMS System Used'], useCases: ['Dealership management software', 'Fleet telematics', 'Automotive finance', 'Parts & accessories', 'Service department tools', 'EV infrastructure'], subVerticals: ['Franchise Dealerships', 'Independent Dealers', 'Fleet Operators', 'Auto Manufacturers', 'Auto Parts', 'Automotive Finance', 'EV Technology', 'Auto Insurance'] },
  telecom: { name: 'Telecom', count: '1.6M+', countNum: 1.6, icon: '📡', metaDesc: 'Target 1.6M+ telecommunications contacts including network engineers, product managers, and telecom executives.', heroDesc: 'Reach network architects, product managers, and C-suite decision-makers at wireless carriers, ISPs, and telecom infrastructure companies.', dataFields: ['Full Name', 'Job Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Network Technology', 'Subscriber Base', 'Annual Revenue', 'Employee Count', 'Geographic Coverage', 'Regulatory Licenses'], useCases: ['Network infrastructure', 'Telecom software (OSS/BSS)', 'IoT connectivity solutions', '5G technology partners', 'Network security', 'Customer experience platforms'], subVerticals: ['Wireless Carriers', 'Internet Service Providers', 'Cable & Satellite', 'Network Equipment', 'Managed Services', 'UCaaS Providers', 'Data Centers', 'Tower Companies'] },
  hospitality: { name: 'Hospitality & Travel', count: '2.1M+', countNum: 2.1, icon: '🏨', metaDesc: 'Access 2.1M+ hospitality and travel contacts including hotel GMs, F&B directors, and travel industry executives.', heroDesc: 'Connect with hotel general managers, food and beverage directors, travel agents, and hospitality procurement officers worldwide.', dataFields: ['Full Name', 'Job Title', 'Property/Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Property Type', 'Room Count/Capacity', 'Star Rating/Brand', 'Annual Revenue', 'PMS Used', 'Geographic Location'], useCases: ['Hotel PMS and technology', 'Revenue management systems', 'Food & beverage sourcing', 'Hospitality staffing', 'Travel technology sales', 'Loyalty program solutions'], subVerticals: ['Hotels & Resorts', 'Restaurants & Chains', 'Airlines & Aviation', 'Travel Agencies', 'Cruise Lines', 'Event Venues', 'Tourism Boards', 'OTAs & Travel Tech'] },
  construction: { name: 'Construction', count: '1.8M+', countNum: 1.8, icon: '🏗️', metaDesc: 'Target 1.8M+ construction industry contacts including general contractors, project managers, and construction executives.', heroDesc: 'Reach general contractors, construction project managers, specialty subcontractors, and property developers across residential and commercial construction.', dataFields: ['Full Name', 'Job Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Contractor License', 'Annual Revenue', 'Employee Count', 'Project Types', 'Geographic Markets', 'Bonding Capacity'], useCases: ['Construction management software', 'Building materials sales', 'Equipment rentals', 'Construction financing', 'Safety & compliance', 'BIM and CAD software'], subVerticals: ['General Contractors', 'Specialty Contractors', 'Home Builders', 'Commercial Developers', 'Engineering Firms', 'Architecture Firms', 'Subcontractors', 'Construction Technology'] },
}

// Fallback for unregistered slugs
function fallback(slug: string) {
  const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return { name, count: '1M+', countNum: 1, icon: '🏢', metaDesc: `Access verified ${name} industry contacts from NPLUS Global.`, heroDesc: `Connect with decision-makers across the ${name} industry.`, dataFields: ['Full Name', 'Job Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Company Revenue', 'Employee Count', 'Industry', 'HQ Location'], useCases: ['Lead generation', 'Account-based marketing', 'Sales outreach', 'Event marketing'], subVerticals: [] }
}

type Params = { slug: string }

export async function generateStaticParams() {
  return Object.keys(industryData).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const page = industryData[slug] ?? fallback(slug)
  return {
    title: `${page.name} Email List | ${page.count} Verified Contacts | NPLUS Global`,
    description: page.metaDesc,
    alternates: { canonical: `https://nplusglobal.com/industry/${slug}` },
  }
}

export default async function IndustrySlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const page = industryData[slug] ?? fallback(slug)

  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden py-20 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-6 flex-wrap">
            <Link href="/" className="hover:text-cyan-400">Home</Link><span>/</span>
            <Link href="/industry" className="hover:text-cyan-400">Industry Lists</Link><span>/</span>
            <span className="text-white/70">{page.name}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl mb-4">{page.icon}</div>
              <span className="badge badge-blue mb-4">{page.name} Industry</span>
              <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                {page.name} Email List & <span className="gradient-text">Decision-Maker Database</span>
              </h1>
              <p className="text-white/60 text-lg mb-6">{page.heroDesc}</p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#inquiry" className="btn-primary flex items-center gap-2">Request Free Sample <ArrowRight size={16} /></Link>
                <Link href="/contact" className="btn-outline">Custom List</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: page.countNum, suffix: page.count.replace(/[\d.]+/, ''), label: `${page.name} Contacts`, color: 'text-cyan-400' },
                { value: 98, suffix: '%', label: 'Email Deliverability', color: 'text-green-400' },
                { value: 210, suffix: '+', label: 'Countries', color: 'text-blue-400' },
                { value: 24, suffix: 'hr', label: 'Delivery', color: 'text-purple-400' },
              ].map((s) => (
                <div key={s.label} className="enterprise-card p-5 text-center">
                  <div className={`font-display font-extrabold text-3xl ${s.color} mb-1`}>
                    <AnimatedCounter end={s.value} suffix={s.suffix} duration={2000} decimals={s.value < 10 ? 1 : 0} />
                  </div>
                  <div className="text-white/55 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">Data <span className="gradient-text">Fields</span></h2>
            <ul className="space-y-2">
              {page.dataFields.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-white/65">
                  <CheckCircle size={13} className="text-cyan-500 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">Top <span className="gradient-text">Use Cases</span></h2>
            <ul className="space-y-2">
              {page.useCases.map(uc => (
                <li key={uc} className="flex items-start gap-2 p-3 rounded-xl bg-white/3 border border-white/5 text-sm text-white/65">
                  <CheckCircle size={13} className="text-green-500 flex-shrink-0 mt-0.5" /> {uc}
                </li>
              ))}
            </ul>
          </div>
          {page.subVerticals.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Sub-<span className="gradient-text">Verticals</span></h2>
              <ul className="space-y-2">
                {page.subVerticals.map(sv => (
                  <li key={sv} className="flex items-center gap-2 text-sm text-white/65">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" /> {sv}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section id="inquiry" className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-6">
          <InquiryForm
            title={`Request Free ${page.name} Data Sample`}
            subtitle={`Get 50–100 verified ${page.name} contacts delivered within 24 hours.`}
            pageSource={`Industry: ${page.name}`}
            dataType={`${page.name} Industry Email List`}
          />
        </div>
      </section>
    </>
  )
}
