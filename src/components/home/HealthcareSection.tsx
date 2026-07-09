import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const specialties = [
  { name: 'Physicians', count: '4.2M+', href: '/healthcare/physicians-email-list' },
  { name: 'Cardiologists', count: '185K+', href: '/healthcare/cardiologists-email-list' },
  { name: 'Nurses', count: '5.8M+', href: '/healthcare/nurses-email-list' },
  { name: 'Hospital Executives', count: '420K+', href: '/healthcare/healthcare-executives-email-list' },
  { name: 'Oncologists', count: '145K+', href: '/healthcare/oncologists-email-list' },
  { name: 'Radiologists', count: '130K+', href: '/healthcare/radiologists-email-list' },
  { name: 'Dentists', count: '680K+', href: '/healthcare/dentists-email-list' },
  { name: 'Physician Assistants', count: '320K+', href: '/healthcare/physician-assistants-email-list' },
  { name: 'Nurse Practitioners', count: '290K+', href: '/healthcare/nurse-practitioners-email-list' },
  { name: 'Medical Devices', count: '210K+', href: '/healthcare/medical-device-companies-list' },
  { name: 'Pharmacists', count: '380K+', href: '/healthcare/physicians-email-list' },
  { name: 'Surgeons', count: '160K+', href: '/healthcare/physicians-email-list' },
]

const dataFields = [
  'NPI Number', 'Specialty & Sub-specialty', 'Hospital Affiliation',
  'Direct Email Address', 'Phone & Fax', 'Mailing Address',
  'Years in Practice', 'Board Certifications', 'Medicare/Medicaid Status',
  'Practice Type & Size', 'EMR/EHR Systems Used', 'Patient Volume',
]

export default function HealthcareSection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-rose-500/4 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div>
            <span className="badge badge-cyan mb-5">Healthcare Data Intelligence</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5">
              Reach{' '}
              <span className="gradient-text">18M+ Healthcare</span>{' '}
              Professionals with Precision
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Our healthcare database is built from 50+ verified sources including medical
              licensing boards, hospital directories, NPI registries, and professional
              associations — updated monthly for maximum accuracy.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {dataFields.map((field) => (
                <div key={field} className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle size={14} className="text-cyan-500 flex-shrink-0" />
                  {field}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link href="/healthcare" className="btn-primary flex items-center gap-2">
                Explore Healthcare Data <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Free Sample
              </Link>
            </div>
          </div>

          {/* Specialty grid */}
          <div>
            <div className="glass rounded-2xl p-6 border border-white/8">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-bold text-white">Healthcare Specialties</h3>
                <span className="badge badge-cyan">18M+ Total</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {specialties.map((spec) => (
                  <Link
                    key={spec.name}
                    href={spec.href}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/4 border border-white/5 hover:border-rose-500/30 hover:bg-rose-500/5 transition-all group"
                  >
                    <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                      {spec.name}
                    </span>
                    <span className="text-rose-400 text-xs font-bold font-mono">{spec.count}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/8">
                <Link
                  href="/healthcare"
                  className="flex items-center justify-center gap-2 text-cyan-400 text-sm font-semibold hover:gap-3 transition-all"
                >
                  View All 450+ Specialties <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
