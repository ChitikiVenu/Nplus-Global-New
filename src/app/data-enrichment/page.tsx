import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryForm from '@/components/shared/InquiryForm'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { CheckCircle, ArrowRight, RefreshCw, Database, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Enrichment Services | Append 150+ Attributes to CRM | NPLUS Global',
  description: 'Transform your CRM data with 150+ verified attributes. Append missing emails, phone numbers, firmographics, technographics, and intent signals to existing contact records at scale.',
  alternates: { canonical: 'https://nplusglobal.com/data-enrichment' },
}

const enrichmentFields = [
  { category: 'Contact Data', fields: ['Direct Email Address', 'Mobile Phone Number', 'LinkedIn Profile URL', 'Job Title (Current)', 'Department', 'Direct Dial Phone'] },
  { category: 'Firmographic', fields: ['Company Revenue (Annual)', 'Employee Count', 'Industry (SIC/NAICS)', 'Company HQ Address', 'Founded Year', 'Ownership Type'] },
  { category: 'Technographic', fields: ['CRM Platform', 'Marketing Automation', 'ERP System', 'Cloud Provider', 'Analytics Tools', 'Collaboration Software'] },
  { category: 'Intent & Behavioral', fields: ['Current Research Topics', 'Intent Score (1–100)', 'Competitor Research', 'Content Consumption', 'Buying Stage', 'Purchase Signals'] },
]

const crmIntegrations = [
  'Salesforce', 'HubSpot', 'Marketo', 'Pardot', 'Microsoft Dynamics',
  'Pipedrive', 'Zoho CRM', 'Outreach', 'SalesLoft', 'Apollo.io',
]

const stats = [
  { value: 150, suffix: '+', label: 'Data Attributes Appended' },
  { value: 98, suffix: '%', label: 'Match Rate on B2B Contacts' },
  { value: 24, suffix: 'hr', label: 'Turnaround Time' },
  { value: 30, suffix: '+', label: 'CRM Integrations' },
]

export default function DataEnrichmentPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden py-24 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-6">
                <Link href="/" className="hover:text-cyan-400">Home</Link><span>/</span>
                <span className="text-white/70">Data Enrichment</span>
              </nav>
              <span className="badge badge-cyan mb-5">Data Enrichment Services</span>
              <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                Transform Your CRM with <span className="gradient-text">150+ Verified Attributes</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                Upload your existing contact list and receive it back enriched with missing emails,
                direct dials, firmographics, technographics, and AI-powered intent signals —
                integrated directly into your CRM within 24 hours.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#inquiry" className="btn-primary flex items-center gap-2">
                  Start Free Enrichment Trial <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-outline">View Sample Output</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="enterprise-card p-6 text-center">
                  <div className="font-display font-extrabold text-4xl text-cyan-400 mb-1">
                    <AnimatedCounter end={s.value} suffix={s.suffix} duration={2000} />
                  </div>
                  <div className="text-white/55 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              How Data Enrichment <span className="gradient-text">Works</span>
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto">
              Four simple steps from stale CRM data to enriched, actionable intelligence.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { step: '01', icon: Database, title: 'Upload Your Data', desc: 'Securely upload your CSV, Excel, or connect your CRM directly. We accept any format and handle the mapping.', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
              { step: '02', icon: RefreshCw, title: 'AI Matching & Validation', desc: 'Our AI engine matches your records against 950M+ verified contacts using name, company, email, and phone as identifiers.', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
              { step: '03', icon: Zap, title: 'Attribute Appending', desc: 'Missing data fields are appended from our verified database. 150+ attributes available including email, phone, firmographics, and intent.', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
              { step: '04', icon: Shield, title: 'Delivery & Integration', desc: 'Receive your enriched file within 24 hours, or have it pushed directly into your Salesforce, HubSpot, or Marketo instance.', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
            ].map((step) => {
              const Icon = step.icon
              return (
                <div key={step.step} className={`enterprise-card p-6 border ${step.border}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-white/30">{step.step}</span>
                    <div className={`w-10 h-10 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center`}>
                      <Icon size={18} className={step.color} />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enrichment fields */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              150+ <span className="gradient-text">Attributes Available</span>
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto">
              Choose the specific data fields you need or request a full enrichment package.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {enrichmentFields.map((cat) => (
              <div key={cat.category} className="enterprise-card p-5">
                <h3 className="font-display font-bold text-cyan-400 text-sm uppercase tracking-wider mb-4">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.fields.map((field) => (
                    <li key={field} className="flex items-center gap-2 text-sm text-white/65">
                      <CheckCircle size={12} className="text-cyan-500 flex-shrink-0" /> {field}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM integrations */}
      <section className="py-12 bg-navy-900/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display font-bold text-white text-center text-lg mb-6">
            Native CRM & MAP Integrations
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {crmIntegrations.map((crm) => (
              <span key={crm} className="px-4 py-2 rounded-xl glass border border-white/8 text-sm text-white/60 font-semibold">
                {crm}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-6">
          <InquiryForm
            title="Start Your Free Enrichment Trial"
            subtitle="Upload up to 500 records for a free enrichment sample. See the quality before you commit."
            pageSource="Data Enrichment Page"
            dataType="Data Enrichment Services"
          />
        </div>
      </section>
    </>
  )
}
