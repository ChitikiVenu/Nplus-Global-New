import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import InquiryForm from '@/components/shared/InquiryForm'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { CheckCircle, ArrowRight } from 'lucide-react'

const b2bPages: Record<string, {
  title: string; metaTitle: string; metaDesc: string; count: string; countNum: number
  heroDesc: string; dataFields: string[]; useCases: string[]; faqs: { q: string; a: string }[]
  relatedPages: { label: string; href: string }[]
}> = {
  'cfo-email-list': {
    title: 'CFO Email List',
    metaTitle: 'CFO Email List | 4.8M+ Chief Financial Officers Database | NPLUS Global',
    metaDesc: 'Reach 4.8M+ CFOs and financial executives with verified direct emails. Chief Financial Officer database segmented by industry, company size, and geography.',
    count: '4.8M+', countNum: 4.8,
    heroDesc: 'Connect with 4.8M+ Chief Financial Officers, VP of Finance, Finance Directors, and Controllers across every industry. Verified direct emails, LinkedIn profiles, and firmographic data included.',
    dataFields: ['Full Name', 'Exact Title (CFO/VP Finance/Controller)', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Company Revenue', 'Employee Count', 'Industry', 'Sub-industry', 'Company HQ Address', 'Years in Role', 'Previous Employers', 'Education (MBA/CPA)', 'Board Memberships', 'Technology Stack (ERP)', 'Fiscal Year End', 'Public/Private', 'PE/VC Backed', 'Geographic Territory'],
    useCases: ['Enterprise software (ERP, FP&A) sales', 'Corporate banking and treasury solutions', 'Financial audit and advisory services', 'CFO-level events and conferences', 'Tax and compliance software promotion', 'M&A advisory and investment banking'],
    faqs: [
      { q: 'Can I filter CFOs by company revenue?', a: 'Yes — filter by revenue bands: under $10M, $10M–$50M, $50M–$250M, $250M–$1B, $1B+, or Fortune 500.' },
      { q: 'Are private equity and VC-backed companies flagged?', a: 'Yes. We flag PE-backed, VC-backed, publicly traded, and founder-owned companies for precision targeting.' },
    ],
    relatedPages: [
      { label: 'CIO Email List', href: '/b2b/cio-email-list' },
      { label: 'CTO Email List', href: '/b2b/cto-email-list' },
      { label: 'Fortune 500 Executives', href: '/b2b/fortune-500-executives-list' },
    ],
  },
  'cio-email-list': {
    title: 'CIO Email List',
    metaTitle: 'CIO Email List | 3.2M+ Chief Information Officers Database | NPLUS Global',
    metaDesc: 'Reach 3.2M+ CIOs and IT leaders with verified direct emails. Chief Information Officer database segmented by technology stack, industry, and company size.',
    count: '3.2M+', countNum: 3.2,
    heroDesc: 'Access 3.2M+ Chief Information Officers, VP of IT, IT Directors, and Digital Transformation Leaders across all industries. Includes technology stack data, current ERP/CRM systems, and renewal dates.',
    dataFields: ['Full Name', 'Exact Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Current Technology Stack', 'ERP System Used', 'Cloud Provider', 'CRM Platform', 'Company Revenue', 'IT Budget Authority', 'Employee Count', 'Industry', 'Company Address', 'Years in Role', 'Education', 'IT Certifications', 'Contract Renewal Dates', 'Vendor Relationships'],
    useCases: ['Enterprise software and SaaS sales', 'Cloud migration and infrastructure services', 'Cybersecurity and data protection solutions', 'IT consulting and managed services', 'Digital transformation programs', 'ERP and CRM replacement campaigns'],
    faqs: [
      { q: 'Can I target CIOs by current technology?', a: 'Yes — filter by specific platforms including SAP, Oracle, Microsoft, Salesforce, ServiceNow, and 200+ other technologies.' },
      { q: 'Are IT budget sizes available?', a: 'Yes. We provide IT budget authority ranges and annual IT spend estimates derived from company size and industry benchmarks.' },
    ],
    relatedPages: [
      { label: 'CTO Email List', href: '/b2b/cto-email-list' },
      { label: 'CFO Email List', href: '/b2b/cfo-email-list' },
      { label: 'Fortune 500 Executives', href: '/b2b/fortune-500-executives-list' },
    ],
  },
  'cto-email-list': {
    title: 'CTO Email List',
    metaTitle: 'CTO Email List | 2.9M+ Chief Technology Officers Database | NPLUS Global',
    metaDesc: 'Connect with 2.9M+ CTOs and engineering leaders. Chief Technology Officer database with direct emails, tech stack data, and company intelligence.',
    count: '2.9M+', countNum: 2.9,
    heroDesc: 'Reach 2.9M+ Chief Technology Officers, VP of Engineering, and Technical Co-founders. Includes programming language preferences, cloud infrastructure, open-source involvement, and team size data.',
    dataFields: ['Full Name', 'Exact Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'GitHub Profile', 'Tech Stack (Languages)', 'Cloud Infrastructure', 'DevOps Tools', 'Team Size', 'Company Revenue', 'Funding Stage', 'Industry', 'Product Type (B2B/B2C)', 'Open Source Contributions', 'Patents Filed', 'Conference Speaking', 'Engineering Blog', 'Years in Role'],
    useCases: ['Developer tools and API platform sales', 'Cloud infrastructure and DevOps solutions', 'Engineering recruiting and talent platforms', 'Technical conferences and events', 'Open source and community programs', 'SaaS product-led growth campaigns'],
    faqs: [
      { q: 'Can I filter by startup vs enterprise CTOs?', a: 'Yes — filter by company stage: seed, Series A–D, growth, and enterprise, as well as funding amounts and investor names.' },
      { q: 'Are tech stack details verified?', a: 'Yes. Technology stack data is verified through job postings, GitHub analysis, BuiltWith data, and proprietary technographic research.' },
    ],
    relatedPages: [
      { label: 'CIO Email List', href: '/b2b/cio-email-list' },
      { label: 'CFO Email List', href: '/b2b/cfo-email-list' },
      { label: 'Marketing Directors List', href: '/b2b/marketing-directors-email-list' },
    ],
  },
  'hr-directors-email-list': {
    title: 'HR Directors Email List',
    metaTitle: 'HR Directors Email List | 6.1M+ HR Leaders Database | NPLUS Global',
    metaDesc: 'Access 6.1M+ HR Directors, CHROs, and People Operations leaders. Human Resources executive database with direct emails and organizational data.',
    count: '6.1M+', countNum: 6.1,
    heroDesc: 'Connect with 6.1M+ HR Directors, Chief Human Resources Officers, VP of People, and Talent Acquisition Leaders across all industries and company sizes.',
    dataFields: ['Full Name', 'Exact HR Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'HR Software Used (HRIS/ATS)', 'Employee Headcount', 'Company Revenue', 'Industry', 'HQ Address', 'Hiring Volume', 'Benefits Providers', 'Payroll System', 'Years in Role', 'Education (SHRM/HRCI Cert)', 'Remote Work Policy', 'Union Status', 'HR Team Size', 'Key HR Priorities'],
    useCases: ['HRIS and ATS software sales', 'Employee benefits and insurance programs', 'Learning and development platforms', 'Recruiting and staffing solutions', 'HR consulting and advisory services', 'Employee wellness and EAP programs'],
    faqs: [
      { q: 'Can I filter by HR software currently in use?', a: 'Yes — filter by Workday, SAP SuccessFactors, BambooHR, ADP, Paychex, Greenhouse, Lever, and 50+ other HR platforms.' },
      { q: 'Are talent acquisition leaders included separately?', a: 'Yes. We have dedicated TA Director, Head of Recruiting, and VP of Talent Acquisition contacts filterable from the broader HR list.' },
    ],
    relatedPages: [
      { label: 'CFO Email List', href: '/b2b/cfo-email-list' },
      { label: 'Marketing Directors', href: '/b2b/marketing-directors-email-list' },
      { label: 'Fortune 500 Executives', href: '/b2b/fortune-500-executives-list' },
    ],
  },
  'marketing-directors-email-list': {
    title: 'Marketing Directors Email List',
    metaTitle: 'Marketing Directors Email List | 7.4M+ CMO & Marketing Leaders | NPLUS Global',
    metaDesc: 'Reach 7.4M+ CMOs, Marketing Directors, and VP of Marketing contacts. Marketing leaders database with direct emails, company intelligence, and MarTech stack data.',
    count: '7.4M+', countNum: 7.4,
    heroDesc: 'Access 7.4M+ Chief Marketing Officers, VP of Marketing, Marketing Directors, and Demand Generation leaders. Includes MarTech stack, annual marketing budget ranges, and channel preferences.',
    dataFields: ['Full Name', 'Exact Marketing Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'MarTech Stack', 'Marketing Automation Platform', 'CRM Used', 'Annual Ad Spend', 'Team Size', 'Company Revenue', 'Industry', 'B2B/B2C Focus', 'Demand Gen vs Brand Focus', 'Channel Mix (PPC/SEO/Events)', 'Agency Relationships', 'Years in Role', 'Education', 'Industry Certifications'],
    useCases: ['MarTech software and automation sales', 'Digital advertising platform outreach', 'B2B marketing agency new business', 'Marketing data and analytics solutions', 'Marketing event and conference promotion', 'Account-based marketing (ABM) campaigns'],
    faqs: [
      { q: 'Can I target by marketing technology stack?', a: 'Yes — filter by HubSpot, Marketo, Pardot, Eloqua, 6sense, Demandbase, and 100+ MarTech platforms.' },
      { q: 'Are B2B vs B2C marketers separated?', a: 'Yes. Our database clearly segments B2B, B2C, and B2B2C marketing leaders with industry context.' },
    ],
    relatedPages: [
      { label: 'CFO Email List', href: '/b2b/cfo-email-list' },
      { label: 'CTO Email List', href: '/b2b/cto-email-list' },
      { label: 'Fortune 500 Executives', href: '/b2b/fortune-500-executives-list' },
    ],
  },
  'manufacturing-companies-list': {
    title: 'Manufacturing Companies List',
    metaTitle: 'Manufacturing Companies List | 5.2M+ Manufacturing Contacts | NPLUS Global',
    metaDesc: 'Connect with 5.2M+ manufacturing executives including plant managers, operations directors, and procurement officers. Manufacturing industry database.',
    count: '5.2M+', countNum: 5.2,
    heroDesc: 'Reach 5.2M+ manufacturing decision-makers including Plant Managers, VP of Operations, Procurement Directors, Quality Directors, and Supply Chain executives across discrete, process, and industrial manufacturing.',
    dataFields: ['Full Name', 'Job Title', 'Company Name', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Manufacturing Type', 'Plant Location', 'Annual Revenue', 'Employee Count', 'Number of Facilities', 'ERP System (SAP/Oracle)', 'ISO Certifications', 'Export Markets', 'Industry (SIC/NAICS)', 'Union Status', 'Automation Level', 'Key Products', 'Customer Industries', 'Years in Role'],
    useCases: ['Industrial equipment and machinery sales', 'Manufacturing ERP and MES software', 'Supply chain and procurement solutions', 'Safety and compliance program outreach', 'Industrial IoT and automation platforms', 'Raw materials and component supplier outreach'],
    faqs: [
      { q: 'Can I filter by manufacturing type?', a: 'Yes — automotive, aerospace, food & beverage, electronics, chemical, pharmaceutical, heavy machinery, consumer goods, and 30+ manufacturing sub-sectors.' },
      { q: 'Are plant-level vs corporate HQ contacts available?', a: 'Yes. We provide both plant-level operational contacts and corporate headquarters executives for a full account-based approach.' },
    ],
    relatedPages: [
      { label: 'CFO Email List', href: '/b2b/cfo-email-list' },
      { label: 'HR Directors List', href: '/b2b/hr-directors-email-list' },
      { label: 'Fortune 500 Executives', href: '/b2b/fortune-500-executives-list' },
    ],
  },
  'fortune-500-executives-list': {
    title: 'Fortune 500 Executives List',
    metaTitle: 'Fortune 500 Executives Email List | 280K+ Top Executive Contacts | NPLUS Global',
    metaDesc: 'Access 280,000+ Fortune 500 executives including C-suite, VPs, and directors. Verified contacts at America\'s largest companies with direct emails and phone numbers.',
    count: '280K+', countNum: 280,
    heroDesc: 'Reach 280,000+ verified executives at Fortune 500 and Fortune 1000 companies. Full C-suite, VP, and Director-level coverage with direct emails, phones, LinkedIn profiles, and buying authority data.',
    dataFields: ['Full Name', 'Exact Title', 'Company Name', 'Fortune Ranking', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Company Revenue', 'Employee Count', 'Industry', 'HQ Location', 'Fiscal Year', 'Board Members', 'Key Subsidiaries', 'Primary Products/Services', 'Geographic Footprint', 'Recent News/Triggers', 'Tech Stack', 'Key Vendors', 'Procurement Cycles'],
    useCases: ['Enterprise SaaS and platform sales', 'Management consulting and advisory', 'Enterprise-grade technology partnerships', 'Executive event and roundtable invitations', 'Thought leadership and account-based marketing', 'Investment banking and M&A advisory'],
    faqs: [
      { q: 'Does this include all Fortune 500 companies?', a: 'Yes — we have complete C-suite and senior leadership coverage for all Fortune 500 companies, plus Fortune 1000 and Global Fortune 500 companies.' },
      { q: 'How current is the Fortune 500 executive data?', a: 'Fortune 500 executive contacts are verified and updated monthly, with leadership change alerts tracked through SEC filings, press releases, and LinkedIn.' },
    ],
    relatedPages: [
      { label: 'CFO Email List', href: '/b2b/cfo-email-list' },
      { label: 'CIO Email List', href: '/b2b/cio-email-list' },
      { label: 'CTO Email List', href: '/b2b/cto-email-list' },
    ],
  },
}

type Params = { slug: string }

export async function generateStaticParams() {
  return Object.keys(b2bPages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const page = b2bPages[slug]
  if (!page) return { title: 'Not Found' }
  return {
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: { canonical: `https://nplusglobal.com/b2b/${slug}` },
  }
}

export default async function B2BSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const page = b2bPages[slug]
  if (!page) notFound()

  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden py-20 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-6 flex-wrap">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span>/</span>
            <Link href="/b2b" className="hover:text-cyan-400">B2B Data</Link>
            <span>/</span>
            <span className="text-white/70">{page.title}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-blue mb-5">B2B Data Intelligence</span>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-5 leading-tight">{page.title}</h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{page.heroDesc}</p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#inquiry" className="btn-primary flex items-center gap-2">Request Free Sample <ArrowRight size={16} /></Link>
                <Link href="/contact" className="btn-outline">Book Consultation</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: page.countNum, suffix: page.count.replace(/[\d.]+/, ''), label: 'Total Contacts', color: 'text-blue-400' },
                { value: 95, suffix: '%', label: 'Data Accuracy', color: 'text-green-400' },
                { value: 210, suffix: '+', label: 'Countries', color: 'text-cyan-400' },
                { value: 150, suffix: '+', label: 'Data Attributes', color: 'text-purple-400' },
              ].map((s) => (
                <div key={s.label} className="enterprise-card p-5 text-center">
                  <div className={`font-display font-extrabold text-3xl ${s.color} mb-1`}>
                    <AnimatedCounter end={s.value} suffix={s.suffix} duration={2000} />
                  </div>
                  <div className="text-white/55 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-5">
                Available <span className="gradient-text">Data Fields</span>
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {page.dataFields.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-white/65">
                    <CheckCircle size={13} className="text-cyan-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-5">
                Top <span className="gradient-text">Use Cases</span>
              </h2>
              <div className="space-y-3">
                {page.useCases.map((uc) => (
                  <div key={uc} className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5">
                    <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/65 text-sm">{uc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">Frequently Asked <span className="gradient-text">Questions</span></h2>
              {page.faqs.map((faq, i) => (
                <div key={i} className="enterprise-card p-5 mb-3">
                  <h3 className="font-display font-bold text-white text-sm mb-2">{faq.q}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
              <div className="mt-4">
                <h3 className="font-display font-semibold text-white text-sm mb-3">Related Lists</h3>
                <div className="flex flex-wrap gap-2">
                  {page.relatedPages.map((rp) => (
                    <Link key={rp.href} href={rp.href} className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-xs text-white/60 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                      {rp.label} <ArrowRight size={10} className="inline ml-1" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div id="inquiry">
              <InquiryForm
                title={`Request Free ${page.title} Sample`}
                subtitle="Get 50–100 verified decision-maker contacts within 24 hours."
                pageSource={page.title}
                dataType={page.title}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
