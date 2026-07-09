import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryForm from '@/components/shared/InquiryForm'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { ArrowRight, CheckCircle, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Healthcare Email Lists & Medical Professionals Database | NPLUS Global',
  description:
    'Access 18M+ verified healthcare professionals including physicians, nurses, cardiologists, hospital executives and more. GDPR-compliant healthcare data with 98% deliverability.',
  alternates: { canonical: 'https://nplusglobal.com/healthcare' },
}

const specialties = [
  { name: 'Physicians', count: '4.2M+', desc: 'MD/DO physicians across all specialties', href: '/healthcare/physicians-email-list', icon: '👨‍⚕️' },
  { name: 'Cardiologists', count: '185K+', desc: 'Cardiac specialists and heart surgeons', href: '/healthcare/cardiologists-email-list', icon: '❤️' },
  { name: 'Nurses', count: '5.8M+', desc: 'RNs, LPNs, and advanced practice nurses', href: '/healthcare/nurses-email-list', icon: '👩‍⚕️' },
  { name: 'Hospital Executives', count: '420K+', desc: 'CEOs, CFOs, CMOs, CNOs of hospitals', href: '/healthcare/healthcare-executives-email-list', icon: '🏥' },
  { name: 'Oncologists', count: '145K+', desc: 'Medical, surgical and radiation oncologists', href: '/healthcare/oncologists-email-list', icon: '🔬' },
  { name: 'Radiologists', count: '130K+', desc: 'Diagnostic and interventional radiologists', href: '/healthcare/radiologists-email-list', icon: '🩻' },
  { name: 'Dentists', count: '680K+', desc: 'General and specialty dental professionals', href: '/healthcare/dentists-email-list', icon: '🦷' },
  { name: 'Physician Assistants', count: '320K+', desc: 'PAs across all medical specialties', href: '/healthcare/physician-assistants-email-list', icon: '🩺' },
  { name: 'Nurse Practitioners', count: '290K+', desc: 'NPs with prescribing authority', href: '/healthcare/nurse-practitioners-email-list', icon: '💊' },
  { name: 'Medical Device Companies', count: '210K+', desc: 'MedTech buyers and procurement officers', href: '/healthcare/medical-device-companies-list', icon: '🔧' },
  { name: 'Pharmacists', count: '380K+', desc: 'Retail, hospital and clinical pharmacists', href: '/healthcare/physicians-email-list', icon: '⚗️' },
  { name: 'Surgeons', count: '160K+', desc: 'General and specialist surgeons', href: '/healthcare/physicians-email-list', icon: '🩹' },
]

const stats = [
  { value: 18, suffix: 'M+', label: 'Healthcare Professionals' },
  { value: 450, suffix: '+', label: 'Medical Specialties' },
  { value: 98, suffix: '%', label: 'Email Deliverability' },
  { value: 50, suffix: '+', label: 'Data Sources' },
]

const dataFields = [
  'Full Name & Credentials', 'NPI Number (10-digit)', 'Primary Specialty', 'Sub-specialty',
  'Hospital Affiliation', 'Practice Name & Address', 'Direct Email Address', 'Office Phone & Fax',
  'Cell Phone (where available)', 'LinkedIn Profile URL', 'Years in Practice', 'Medical School',
  'Board Certifications', 'Medicare/Medicaid Acceptance', 'EMR/EHR System Used', 'Patient Volume',
  'Practice Type (Solo/Group/Hospital)', 'State Medical License', 'DEA Number', 'Insurance Accepted',
]

const useCases = [
  { title: 'Medical Device Sales', desc: 'Reach hospital procurement officers, department heads, and clinical directors who approve purchasing decisions for medical equipment and devices.' },
  { title: 'Pharmaceutical Marketing', desc: 'Target physicians by specialty, patient volume, and prescribing patterns for highly targeted pharmaceutical outreach and sample campaigns.' },
  { title: 'Healthcare IT Solutions', desc: 'Identify hospitals and health systems evaluating EMR, telemedicine, revenue cycle management, and clinical workflow solutions.' },
  { title: 'Continuing Medical Education', desc: 'Promote CME events, medical conferences, and educational programs to verified licensed healthcare professionals nationwide.' },
  { title: 'Staffing & Recruiting', desc: 'Connect with healthcare professionals open to new opportunities, including per diem, locum tenens, and permanent placement positions.' },
  { title: 'Insurance & Financial Services', desc: 'Reach physicians and healthcare executives for specialty insurance, retirement planning, and high-net-worth financial services.' },
]

export default function HealthcarePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient relative overflow-hidden py-24 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-500/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-6">
                <Link href="/" className="hover:text-cyan-400">Home</Link>
                <span>/</span>
                <span className="text-white/70">Healthcare Data</span>
              </nav>
              <span className="badge badge-cyan mb-5">Healthcare Data Intelligence</span>
              <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                Healthcare Email Lists &{' '}
                <span className="gradient-text">Medical Professionals</span> Database
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                Access <strong className="text-white">18M+ verified healthcare professionals</strong> across
                450+ specialties. Built from NPI registries, state licensing boards, and hospital directories —
                updated monthly with 98% email deliverability guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#inquiry" className="btn-primary flex items-center justify-center gap-2">
                  Request Free Sample <ArrowRight size={16} />
                </Link>
                <Link href="#specialties" className="btn-outline flex items-center justify-center gap-2">
                  Browse Specialties
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="enterprise-card p-6 text-center">
                  <div className="font-display font-extrabold text-4xl text-cyan-400 mb-1">
                    <AnimatedCounter end={s.value} suffix={s.suffix} duration={2000} />
                  </div>
                  <div className="text-white/60 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties grid */}
      <section id="specialties" className="section-padding bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              Browse by <span className="gradient-text">Specialty</span>
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto">
              Target the exact healthcare professionals relevant to your product or service.
              Each specialty list is verified, segmented, and GDPR-compliant.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialties.map((spec) => (
              <Link key={spec.name} href={spec.href} className="enterprise-card p-5 group">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{spec.icon}</div>
                <h3 className="font-display font-bold text-white text-base mb-1">{spec.name}</h3>
                <div className="text-cyan-400 font-bold font-mono text-sm mb-1">{spec.count}</div>
                <p className="text-white/45 text-xs">{spec.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Data fields */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-4xl font-bold text-white mb-5">
                20+ Data Fields Per <span className="gradient-text">Healthcare Record</span>
              </h2>
              <p className="text-white/55 text-lg mb-8">
                Every healthcare contact record comes with comprehensive verified data fields
                to enable hyper-personalized outreach and accurate audience segmentation.
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {dataFields.map((field) => (
                  <div key={field} className="flex items-center gap-2 text-sm text-white/60">
                    <CheckCircle size={14} className="text-cyan-500 flex-shrink-0" />
                    {field}
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* Sample data table */}
              <div className="glass rounded-2xl overflow-hidden border border-white/8">
                <div className="bg-navy-800/50 px-5 py-4 border-b border-white/8">
                  <h3 className="font-display font-bold text-white text-sm">Sample Data Preview</h3>
                  <p className="text-white/40 text-xs">Anonymized for preview purposes</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/8">
                        {['Name', 'Specialty', 'Hospital', 'State'].map((h) => (
                          <th key={h} className="text-left px-4 py-3 text-white/40 font-semibold uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Dr. J. Smith', 'Cardiologist', 'Mayo Clinic', 'MN'],
                        ['Dr. A. Patel', 'Oncologist', 'MD Anderson', 'TX'],
                        ['Dr. L. Chen', 'Radiologist', 'Johns Hopkins', 'MD'],
                        ['Dr. M. Brown', 'Surgeon', 'Cleveland Clinic', 'OH'],
                        ['Dr. S. Williams', 'Neurologist', 'Mass General', 'MA'],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                          {row.map((cell, j) => (
                            <td key={j} className="px-4 py-3 text-white/65">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-5 py-3 bg-cyan-500/5 border-t border-cyan-500/10">
                  <p className="text-cyan-400 text-xs">✓ All records include email, phone, NPI, and 15+ additional fields</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section-padding bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              Healthcare Data <span className="gradient-text">Use Cases</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc) => (
              <div key={uc.title} className="enterprise-card p-6">
                <h3 className="font-display font-bold text-white text-base mb-2">{uc.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-12 bg-navy-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-white/40 text-sm font-semibold">Compliance Standards:</span>
            {['HIPAA Aware', 'GDPR Compliant', 'CAN-SPAM Act', 'CCPA Ready', 'CASL Compliant', 'ISO 27001'].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-sm text-white/60">
                <Shield size={13} className="text-green-400" /> {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquiry" className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-6">
          <InquiryForm
            title="Request Healthcare Data Sample"
            subtitle="Specify your target specialty and geography, and receive a free sample within 24 hours."
            pageSource="Healthcare Page"
            dataType="Healthcare Professionals Data"
          />
        </div>
      </section>
    </>
  )
}
