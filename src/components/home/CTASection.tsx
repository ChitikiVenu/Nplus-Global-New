import InquiryForm from '@/components/shared/InquiryForm'
import { CheckCircle } from 'lucide-react'

const benefits = [
  'Free 50-record verified data sample',
  'Delivered within 24 hours',
  'No credit card required',
  'Dedicated data consultant assigned',
  'Full compliance documentation included',
]

export default function CTASection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/15 via-navy-950 to-blue-900/15" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:pt-4">
            <span className="badge badge-cyan mb-5">Get Started Today</span>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              Start with{' '}
              <span className="gradient-text">Free Data</span>{' '}
              from NPLUS Global
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Join 5,000+ enterprise organizations who trust NPLUS Global for their most
              critical go-to-market data. Request your free sample today — no commitment,
              no credit card, just premium data delivered to your inbox.
            </p>

            <div className="space-y-3 mb-10">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 text-white/70 text-sm">
                  <CheckCircle size={16} className="text-cyan-500 flex-shrink-0" />
                  {b}
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="glass rounded-xl p-5 border border-white/8">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-4">
                Prefer to Talk to a Human?
              </p>
              <div className="space-y-3 text-sm text-white/65">
                <div>📧 <a href="mailto:info@nplusglobal.com" className="hover:text-cyan-400 transition-colors">info@nplusglobal.com</a></div>
                <div>📞 <a href="tel:+12044100635" className="hover:text-cyan-400 transition-colors">+1 (204) 410-0635</a></div>
                <div>📍 1857, 1007 N Orange St. 4th Floor, Wilmington, DE-19801, USA</div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <InquiryForm
            title="Request Your Free Data Sample"
            subtitle="Tell us your requirements and receive a personalized dataset sample within 24 hours."
            pageSource="Homepage CTA"
          />
        </div>
      </div>
    </section>
  )
}
