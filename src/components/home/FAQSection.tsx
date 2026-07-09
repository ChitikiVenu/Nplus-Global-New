'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What makes NPLUS Global different from other B2B data providers?',
    a: 'NPLUS Global combines AI-powered validation, monthly data refresh cycles, and 50+ source cross-referencing to deliver 98% email deliverability — industry-best accuracy. We cover 210+ countries, 18M+ healthcare professionals, and 950M+ global B2B contacts with 150+ attributes per record, all fully GDPR, CAN-SPAM, and CCPA compliant.',
  },
  {
    q: 'How is your healthcare data sourced and verified?',
    a: 'Our healthcare data is compiled from 50+ verified sources including state medical licensing boards, NPI registries, hospital directories, professional associations (AMA, ANA, ADA), and proprietary research. Every record undergoes 200+ automated validation checks and human review before delivery. Data is refreshed monthly.',
  },
  {
    q: 'What data fields are included with each contact record?',
    a: 'Standard records include full name, job title, direct email, company name, phone number, LinkedIn URL, company address, industry, company size, and revenue. Healthcare records additionally include NPI number, specialty, sub-specialty, hospital affiliation, years in practice, board certifications, and EMR systems used. Technology records include platform usage, stack details, and contract renewal windows.',
  },
  {
    q: 'How quickly can I receive my data after placing an order?',
    a: 'Standard data orders are delivered within 24 hours of order confirmation. Custom datasets requiring specialized research typically take 48–72 hours. Urgent same-day delivery is available for standard off-the-shelf datasets. All orders include a free re-verification within 30 days.',
  },
  {
    q: 'Is your data compliant with GDPR, CAN-SPAM, and CCPA?',
    a: 'Yes. NPLUS Global data is fully compliant with GDPR, CAN-SPAM, CASL, CCPA, and 15+ global privacy regulations. We maintain documented consent trails, honor opt-out requests within 24 hours, and provide compliance documentation with every dataset. Our legal team continuously monitors regulatory changes across 210+ countries.',
  },
  {
    q: 'Can I get a free data sample before purchasing?',
    a: 'Absolutely. We provide free data samples for any of our datasets — healthcare, B2B, technology users, or custom. Simply fill out the Request Free Sample form on this page with your target criteria, and our team will deliver a representative sample of 50–100 records within 24 hours, completely free and with no obligation.',
  },
  {
    q: 'Do you offer data enrichment for existing CRM databases?',
    a: 'Yes. Our data enrichment service appends 150+ attributes to your existing contact records including missing emails, direct dials, job titles, company data, technographics, and behavioral intelligence. We integrate directly with Salesforce, HubSpot, Marketo, and 30+ CRM platforms for seamless enrichment at scale.',
  },
  {
    q: 'What is Intent Data and how does it work?',
    a: 'Intent data tracks online research behavior — when companies visit websites, download content, or search for topics related to your product category. Our AI engine processes 2B+ weekly signals across 35,000+ topics to identify companies actively researching solutions like yours. You get a ranked list of in-market accounts with scores, topics, and contact information — prioritizing your outreach on buyers most likely to convert.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section-padding bg-navy-950 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge badge-cyan mb-4">FAQ</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-white/55 text-lg">
            Everything you need to know about NPLUS Global data intelligence.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`enterprise-card overflow-hidden transition-all duration-300 ${
                open === i ? 'border-cyan-500/30 bg-cyan-500/3' : ''
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-semibold text-white text-sm lg:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
