import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | NPLUS Global',
  description: 'NPLUS Global terms of service governing the use of our data intelligence platform and services.',
}

export default function TermsPage() {
  return (
    <section className="section-padding bg-navy-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-xs text-white/40 mb-8">
          <Link href="/" className="hover:text-cyan-400">Home</Link><span>/</span>
          <span className="text-white/70">Terms of Service</span>
        </nav>
        <h1 className="font-display text-4xl font-bold text-white mb-3">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: January 1, 2025</p>

        <div className="prose-dark space-y-8">
          {[
            { title: '1. Acceptance of Terms', body: 'By accessing or using NPLUS Global services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.' },
            { title: '2. Data Licensing', body: 'NPLUS Global grants you a non-exclusive, non-transferable license to use purchased data solely for your internal business purposes, including sales outreach, marketing campaigns, and business intelligence. Reselling, sublicensing, or redistributing data to third parties is strictly prohibited.' },
            { title: '3. Permitted Use', body: 'Data provided by NPLUS Global may only be used in compliance with all applicable laws and regulations, including CAN-SPAM, GDPR, CASL, and CCPA. You agree to provide opt-out mechanisms in all communications sent using our data and to honor opt-out requests promptly.' },
            { title: '4. Data Accuracy Guarantee', body: 'NPLUS Global guarantees 98% email deliverability on all standard healthcare and B2B datasets. In the event your bounce rate exceeds 2% on a verified dataset, we will replace bounced records at no charge within 30 days of delivery.' },
            { title: '5. Confidentiality', body: 'Data provided by NPLUS Global is confidential proprietary information. You agree not to disclose, share, or make available the data to any third party without prior written consent from NPLUS Global.' },
            { title: '6. Payment Terms', body: 'Payment is due upon receipt of invoice unless otherwise agreed in writing. Overdue accounts may be subject to a 1.5% monthly finance charge. NPLUS Global reserves the right to suspend services for overdue accounts.' },
            { title: '7. Limitation of Liability', body: 'NPLUS Global\'s liability for any claim arising from these terms or the use of our services shall not exceed the amount paid for the specific data order giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.' },
            { title: '8. Governing Law', body: 'These terms are governed by the laws of the State of Delaware, USA. Any disputes shall be resolved in the courts of Wilmington, Delaware.' },
            { title: '9. Contact', body: 'Legal inquiries: legal@nplusglobal.com | NPLUS Global, 1857, 1007 N Orange St. 4th Floor, Wilmington, DE-19801, USA' },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-display font-bold text-white text-xl mb-3">{section.title}</h2>
              <p className="text-white/60 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
