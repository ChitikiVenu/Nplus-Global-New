import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | NPLUS Global',
  description: 'NPLUS Global privacy policy — how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-navy-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-xs text-white/40 mb-8">
          <Link href="/" className="hover:text-cyan-400">Home</Link><span>/</span>
          <span className="text-white/70">Privacy Policy</span>
        </nav>
        <h1 className="font-display text-4xl font-bold text-white mb-3">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: January 1, 2025</p>

        <div className="prose-dark space-y-8">
          {[
            { title: '1. Information We Collect', body: 'NPLUS Global collects information you provide directly to us, such as when you fill out a contact form, request a data sample, or communicate with our team. This includes name, company name, work email, phone number, and data requirements. We also collect standard website analytics data including IP addresses, browser type, and pages visited.' },
            { title: '2. How We Use Your Information', body: 'We use the information we collect to respond to your inquiries, provide requested data samples, improve our services, send relevant communications about our products and services (with your consent where required), and comply with legal obligations.' },
            { title: '3. Data Sharing', body: 'NPLUS Global does not sell, rent, or share your personal information with third parties for their marketing purposes. We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.' },
            { title: '4. Data Retention', body: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Contact inquiries are typically retained for 3 years.' },
            { title: '5. Your Rights (GDPR & CCPA)', body: 'Depending on your location, you may have the right to access, correct, or delete your personal data. EU residents have rights under GDPR including the right to data portability and the right to object to processing. California residents have rights under CCPA. To exercise these rights, contact us at privacy@nplusglobal.com.' },
            { title: '6. Security', body: 'We implement industry-standard security measures including SSL encryption, access controls, and regular security audits to protect your information. However, no method of transmission over the internet is 100% secure.' },
            { title: '7. Contact Us', body: 'For privacy-related questions, contact us at privacy@nplusglobal.com or by mail at: NPLUS Global, 1857, 1007 N Orange St. 4th Floor, Wilmington, DE-19801, USA.' },
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
