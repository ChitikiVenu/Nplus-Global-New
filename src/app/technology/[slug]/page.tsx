import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import InquiryForm from '@/components/shared/InquiryForm'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { CheckCircle, ArrowRight } from 'lucide-react'

const techPages: Record<string, {
  title: string; metaTitle: string; metaDesc: string; count: string; countNum: number
  heroDesc: string; dataFields: string[]; useCases: string[]; faqs: { q: string; a: string }[]
  relatedPages: { label: string; href: string }[]
}> = {
  'salesforce-users-list': {
    title: 'Salesforce Users List',
    metaTitle: 'Salesforce Users List | 3.2M+ Verified Salesforce Contacts | NPLUS Global',
    metaDesc: 'Target 3.2M+ companies using Salesforce CRM. Salesforce users database with decision-maker contacts, implementation details, and contract renewal data.',
    count: '3.2M+', countNum: 3.2,
    heroDesc: 'Reach 3.2M+ Salesforce users including Salesforce Admins, VP of Sales Operations, CRM Directors, and IT leaders at companies running Salesforce CRM, Service Cloud, Marketing Cloud, and Einstein Analytics.',
    dataFields: ['Full Name', 'Job Title', 'Company Name', 'Salesforce Edition (Essentials/Pro/Enterprise)', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Company Revenue', 'Employee Count', 'Salesforce User Licenses', 'Modules Implemented', 'Implementation Partner', 'Contract Renewal Date', 'Salesforce Certified Users', 'Integration Stack', 'Industry', 'HQ Location', 'AppExchange Apps Used', 'Years on Salesforce', 'Salesforce Admin Contact'],
    useCases: ['Salesforce ISV and AppExchange app sales', 'Salesforce integration platform promotion', 'CRM data enrichment and cleanup services', 'Salesforce consulting and implementation', 'Sales enablement tool launches', 'Competitive displacement (from legacy CRM)'],
    faqs: [
      { q: 'Can I filter by Salesforce edition?', a: 'Yes — filter by Salesforce Essentials, Professional, Enterprise, Unlimited, and by specific clouds (Sales, Service, Marketing, Commerce).' },
      { q: 'Are contract renewal dates available?', a: 'Yes. We include estimated contract renewal windows based on implementation dates, Salesforce fiscal year, and publicly available contract data.' },
    ],
    relatedPages: [
      { label: 'HubSpot Users List', href: '/technology/hubspot-users-list' },
      { label: 'Microsoft Dynamics', href: '/technology/microsoft-dynamics-users-list' },
      { label: 'ServiceNow Users', href: '/technology/servicenow-users' },
    ],
  },
  'aws-users-database': {
    title: 'AWS Users Database',
    metaTitle: 'AWS Users Database | 5.1M+ Amazon Web Services Contacts | NPLUS Global',
    metaDesc: 'Target 5.1M+ companies running on AWS. Amazon Web Services users database with cloud architects, DevOps engineers, and IT decision-maker contacts.',
    count: '5.1M+', countNum: 5.1,
    heroDesc: 'Reach decision-makers at 5.1M+ companies running on Amazon Web Services. Includes Cloud Architects, DevOps Engineers, VP of Engineering, CTO contacts, and AWS spend level estimates.',
    dataFields: ['Full Name', 'Job Title', 'Company Name', 'AWS Services Used (EC2/S3/RDS/Lambda)', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Estimated AWS Spend', 'AWS Account Size', 'Company Revenue', 'Employee Count', 'Industry', 'AWS Partner Status', 'Multi-Cloud Strategy', 'Cloud Maturity Level', 'Region/AZ Used', 'Compliance Frameworks (SOC2/HIPAA)', 'DevOps Tool Stack', 'HQ Location', 'Years on AWS'],
    useCases: ['Cloud security and compliance solutions', 'AWS cost optimization tools', 'DevOps and CI/CD platform sales', 'Cloud migration services', 'Multi-cloud management platforms', 'AWS ISV and Marketplace app promotion'],
    faqs: [
      { q: 'Can I filter by AWS spend level?', a: 'Yes — we segment AWS customers by estimated monthly spend: under $10K, $10K–$50K, $50K–$250K, $250K+, and enterprise tier (AWS committed spend).' },
      { q: 'Are specific AWS services flagged?', a: 'Yes. We flag usage of 50+ AWS services including EC2, S3, RDS, Lambda, EKS, Redshift, SageMaker, and more.' },
    ],
    relatedPages: [
      { label: 'Salesforce Users List', href: '/technology/salesforce-users-list' },
      { label: 'Oracle Users List', href: '/technology/oracle-users-list' },
      { label: 'SAP Users List', href: '/technology/sap-users-list' },
    ],
  },
  'hubspot-users-list': {
    title: 'HubSpot Users List',
    metaTitle: 'HubSpot Users List | 1.8M+ Verified HubSpot Contacts | NPLUS Global',
    metaDesc: 'Target 1.8M+ companies using HubSpot. HubSpot users database with marketing, sales, and operations contacts, hub tier, and portal details.',
    count: '1.8M+', countNum: 1.8,
    heroDesc: 'Reach marketing and sales leaders at 1.8M+ HubSpot users. Includes which HubSpot Hubs they use (Marketing, Sales, Service, CMS, Operations), tier level, and key marketing automation contacts.',
    dataFields: ['Full Name', 'Job Title', 'Company Name', 'HubSpot Hub (Marketing/Sales/Service/CMS)', 'HubSpot Tier (Starter/Pro/Enterprise)', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Company Revenue', 'Employee Count', 'HubSpot Partner', 'Integrations Used', 'Portal Age', 'Industry', 'B2B/B2C Focus', 'HQ Location', 'Marketing Team Size', 'Content Strategy', 'Paid Ad Spend', 'Annual Contract Value'],
    useCases: ['HubSpot integration and app sales', 'Inbound marketing and SEO services', 'HubSpot consulting and onboarding', 'Sales enablement tool launches', 'Content and video marketing platforms', 'Revenue operations and RevOps consulting'],
    faqs: [
      { q: 'Can I filter by HubSpot Hub type?', a: 'Yes — Marketing Hub, Sales Hub, Service Hub, CMS Hub, Operations Hub, or any combination of hubs.' },
      { q: 'Are HubSpot partner agencies available separately?', a: 'Yes. We have a dedicated HubSpot partner agency list with agency size, specializations, and client industry focus.' },
    ],
    relatedPages: [
      { label: 'Salesforce Users List', href: '/technology/salesforce-users-list' },
      { label: 'Microsoft Dynamics', href: '/technology/microsoft-dynamics-users-list' },
      { label: 'Shopify Users List', href: '/technology/shopify-users-list' },
    ],
  },
  'oracle-users-list': {
    title: 'Oracle Users List',
    metaTitle: 'Oracle Users List | 2.4M+ Oracle Database & ERP Users | NPLUS Global',
    metaDesc: 'Target 2.4M+ Oracle users including Oracle ERP, Oracle Cloud, Oracle Database, and JD Edwards customers. Verified decision-maker contacts with renewal data.',
    count: '2.4M+', countNum: 2.4,
    heroDesc: 'Reach IT leaders, Database Administrators, and Finance executives at 2.4M+ Oracle users. Covers Oracle ERP Cloud, Oracle Database, JD Edwards, PeopleSoft, Siebel, and NetSuite customers.',
    dataFields: ['Full Name', 'Job Title', 'Company Name', 'Oracle Product (ERP/DB/NetSuite/JDE)', 'Oracle Version', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'License Count', 'Annual Support Cost', 'Company Revenue', 'Employee Count', 'Industry', 'Implementation Partner', 'Contract Renewal Date', 'On-Premise vs Cloud', 'Migration Status', 'Database Size', 'HQ Location', 'Oracle Partner Status'],
    useCases: ['Oracle-to-cloud migration services', 'Oracle support and maintenance alternatives', 'ERP add-on and integration solutions', 'Oracle training and certification programs', 'Competitive displacement campaigns', 'Database optimization and performance tools'],
    faqs: [
      { q: 'Do you include Oracle NetSuite users separately?', a: 'Yes. NetSuite users are available as a separate segment with module details, industry focus, and employee count ranges.' },
      { q: 'Can I target Oracle users approaching contract renewal?', a: 'Yes. We provide contract renewal window estimates based on implementation dates and Oracle fiscal year patterns.' },
    ],
    relatedPages: [
      { label: 'SAP Users List', href: '/technology/sap-users-list' },
      { label: 'Salesforce Users List', href: '/technology/salesforce-users-list' },
      { label: 'Microsoft Dynamics', href: '/technology/microsoft-dynamics-users-list' },
    ],
  },
  'servicenow-users': {
    title: 'ServiceNow Users List',
    metaTitle: 'ServiceNow Users List | 780K+ ServiceNow Contacts | NPLUS Global',
    metaDesc: 'Target 780,000+ companies using ServiceNow ITSM. ServiceNow users database with IT leaders, platform owners, and ITSM decision-maker contacts.',
    count: '780K+', countNum: 780,
    heroDesc: 'Reach ITSM leaders, ServiceNow Admins, and IT executives at 780,000+ ServiceNow customers. Covers ITSM, ITOM, HRSD, CSM, GRC, SecOps, and App Engine implementations.',
    dataFields: ['Full Name', 'Job Title', 'Company Name', 'ServiceNow Modules Used', 'ServiceNow Edition', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Company Revenue', 'Employee Count', 'IT Team Size', 'ServiceNow Version', 'Implementation Partner', 'Contract Renewal Date', 'Number of Applications', 'Industry', 'HQ Location', 'Integration Stack', 'ITIL Framework Adoption', 'ServiceNow Certified Staff'],
    useCases: ['ServiceNow integration and connector apps', 'ITSM and ITOM complementary tools', 'IT consulting and ServiceNow implementation', 'GRC and security module expansion', 'ServiceNow training and certification', 'IT workflow automation solutions'],
    faqs: [
      { q: 'Can I filter by ServiceNow module?', a: 'Yes — ITSM, ITOM, HRSD, CSM, GRC, SecOps, App Engine, ITAM, and other specific workflow module implementations.' },
      { q: 'Are ServiceNow partner companies included?', a: 'Yes. We have a separate ServiceNow partner and Elite reseller list available.' },
    ],
    relatedPages: [
      { label: 'Salesforce Users List', href: '/technology/salesforce-users-list' },
      { label: 'SAP Users List', href: '/technology/sap-users-list' },
      { label: 'Oracle Users List', href: '/technology/oracle-users-list' },
    ],
  },
  'sap-users-list': {
    title: 'SAP Users List',
    metaTitle: 'SAP Users List | 1.9M+ SAP ERP & S/4HANA Users | NPLUS Global',
    metaDesc: 'Target 1.9M+ SAP users including SAP S/4HANA, SAP ECC, SAP SuccessFactors, and Ariba customers. Verified SAP decision-maker database with renewal windows.',
    count: '1.9M+', countNum: 1.9,
    heroDesc: 'Reach ERP Managers, SAP Basis Administrators, and Finance leaders at 1.9M+ SAP customers. Covers SAP S/4HANA, ECC, SuccessFactors, Ariba, Concur, and SAP Business One users.',
    dataFields: ['Full Name', 'Job Title', 'Company Name', 'SAP Product (S/4HANA/ECC/SuccessFactors)', 'SAP Version', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Go-Live Date', 'Implementation Partner', 'Annual SAP License Cost', 'Company Revenue', 'Employee Count', 'Industry', 'S/4HANA Migration Status', 'Rise with SAP Status', 'On-Premise vs Cloud', 'Contract Renewal Date', 'SAP Support Level', 'HQ Location'],
    useCases: ['SAP S/4HANA migration services', 'SAP add-on and extension solutions', 'SAP support and third-party maintenance', 'SAP training and certification programs', 'ERP complementary solutions', 'SAP data migration and archiving tools'],
    faqs: [
      { q: 'Can I target SAP customers planning S/4HANA migration?', a: 'Yes. We flag SAP ECC customers by their S/4HANA migration readiness status: not started, evaluating, in progress, and completed.' },
      { q: 'Are SAP SuccessFactors users separate from ERP?', a: 'Yes. SuccessFactors, Ariba, Concur, and each SAP product line is available as a standalone segment.' },
    ],
    relatedPages: [
      { label: 'Oracle Users List', href: '/technology/oracle-users-list' },
      { label: 'Microsoft Dynamics', href: '/technology/microsoft-dynamics-users-list' },
      { label: 'ServiceNow Users', href: '/technology/servicenow-users' },
    ],
  },
  'microsoft-dynamics-users-list': {
    title: 'Microsoft Dynamics Users List',
    metaTitle: 'Microsoft Dynamics Users List | 2.1M+ Dynamics 365 Contacts | NPLUS Global',
    metaDesc: 'Target 2.1M+ Microsoft Dynamics users including Dynamics 365, Dynamics CRM, and Business Central customers. Verified Microsoft stack decision-maker contacts.',
    count: '2.1M+', countNum: 2.1,
    heroDesc: 'Reach IT leaders and business decision-makers at 2.1M+ Microsoft Dynamics users. Covers Dynamics 365 Sales, Customer Service, Finance & Operations, Business Central, and legacy AX/NAV/GP customers.',
    dataFields: ['Full Name', 'Job Title', 'Company Name', 'Dynamics Product (D365/BC/AX/NAV)', 'Dynamics Modules', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Microsoft Partner', 'Azure Usage', 'M365 Licenses', 'Company Revenue', 'Employee Count', 'Industry', 'Implementation Partner', 'Contract Renewal', 'Upgrade Status', 'Power Platform Usage', 'HQ Location', 'Years on Dynamics'],
    useCases: ['Microsoft ISV and AppSource app sales', 'Dynamics 365 implementation services', 'Power Platform and automation tools', 'Azure complementary solutions', 'Competitive displacement (from Salesforce)', 'Business Central add-on and extension sales'],
    faqs: [
      { q: 'Can I filter by Dynamics version (D365 vs older)?', a: 'Yes — filter by Dynamics 365 cloud, Dynamics AX (on-prem), Dynamics NAV, Dynamics GP, and those on Business Central.' },
      { q: 'Are Microsoft Gold/Silver Partners available?', a: 'Yes. Microsoft partner tiers (Solutions Partner, Gold, Silver) are flagged for reseller and channel partner targeting.' },
    ],
    relatedPages: [
      { label: 'Salesforce Users List', href: '/technology/salesforce-users-list' },
      { label: 'SAP Users List', href: '/technology/sap-users-list' },
      { label: 'Oracle Users List', href: '/technology/oracle-users-list' },
    ],
  },
  'shopify-users-list': {
    title: 'Shopify Users List',
    metaTitle: 'Shopify Users List | 1.4M+ Shopify Store Owners & Contacts | NPLUS Global',
    metaDesc: 'Target 1.4M+ Shopify merchants and e-commerce decision-makers. Shopify users database with store owners, marketing directors, and e-commerce contacts.',
    count: '1.4M+', countNum: 1.4,
    heroDesc: 'Reach e-commerce decision-makers at 1.4M+ Shopify stores. Includes Shopify Plus merchants, store owners, Head of E-commerce, and marketing leaders with GMV estimates, app stack, and category data.',
    dataFields: ['Full Name', 'Job Title', 'Company/Store Name', 'Shopify Plan (Basic/Shopify/Advanced/Plus)', 'Direct Email', 'Direct Phone', 'LinkedIn URL', 'Estimated GMV', 'Product Category', 'Number of SKUs', 'Monthly Traffic', 'Apps Installed', 'Payment Processors', 'Fulfillment Methods', 'Marketing Channels', 'Country', 'Years on Shopify', 'Shopify Theme', 'Team Size', 'Funding Status'],
    useCases: ['Shopify app and plugin sales', 'E-commerce fulfillment and logistics', 'Payment and checkout solutions', 'E-commerce marketing platforms', 'Inventory and order management tools', 'Shopify agency and development services'],
    faqs: [
      { q: 'Can I filter by Shopify store GMV?', a: 'Yes — segment by estimated GMV: under $100K, $100K–$1M, $1M–$10M, $10M–$50M, and Shopify Plus ($1M+ merchants).' },
      { q: 'Are Shopify Plus merchants available separately?', a: 'Yes. Shopify Plus enterprise merchants are available as a premium segment with higher-quality firmographic data.' },
    ],
    relatedPages: [
      { label: 'HubSpot Users List', href: '/technology/hubspot-users-list' },
      { label: 'Salesforce Users List', href: '/technology/salesforce-users-list' },
      { label: 'AWS Users Database', href: '/technology/aws-users-database' },
    ],
  },
}

type Params = { slug: string }

export async function generateStaticParams() {
  return Object.keys(techPages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const page = techPages[slug]
  if (!page) return { title: 'Not Found' }
  return {
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: { canonical: `https://nplusglobal.com/technology/${slug}` },
  }
}

export default async function TechSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const page = techPages[slug]
  if (!page) notFound()

  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden py-20 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-6 flex-wrap">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span>/</span>
            <Link href="/technology" className="hover:text-cyan-400">Technology Users</Link>
            <span>/</span>
            <span className="text-white/70">{page.title}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-cyan mb-5">Technology Intelligence</span>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-5 leading-tight">{page.title}</h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{page.heroDesc}</p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#inquiry" className="btn-primary flex items-center gap-2">Request Free Sample <ArrowRight size={16} /></Link>
                <Link href="/contact" className="btn-outline">Book Consultation</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: page.countNum, suffix: page.count.replace(/[\d.]+/, ''), label: 'Verified Users', color: 'text-cyan-400' },
                { value: 98, suffix: '%', label: 'Accuracy', color: 'text-green-400' },
                { value: 210, suffix: '+', label: 'Countries', color: 'text-blue-400' },
                { value: 24, suffix: 'hr', label: 'Delivery', color: 'text-purple-400' },
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
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-5">Available <span className="gradient-text">Data Fields</span></h2>
            <div className="grid grid-cols-2 gap-2">
              {page.dataFields.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-white/65">
                  <CheckCircle size={13} className="text-cyan-500 flex-shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-5">Top <span className="gradient-text">Use Cases</span></h2>
            <div className="space-y-3">
              {page.useCases.map((uc) => (
                <div key={uc} className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5">
                  <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/65 text-sm">{uc}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              {page.faqs.map((faq, i) => (
                <div key={i} className="enterprise-card p-4 mb-3">
                  <h3 className="font-display font-bold text-white text-sm mb-1">{faq.q}</h3>
                  <p className="text-white/55 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {page.relatedPages.map((rp) => (
              <Link key={rp.href} href={rp.href} className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-xs text-white/60 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                {rp.label} <ArrowRight size={10} className="inline ml-1" />
              </Link>
            ))}
          </div>
          <div id="inquiry">
            <InquiryForm
              title={`Request Free ${page.title} Sample`}
              subtitle="Get 50–100 verified technology user contacts delivered within 24 hours."
              pageSource={page.title}
              dataType={page.title}
            />
          </div>
        </div>
      </section>
    </>
  )
}
