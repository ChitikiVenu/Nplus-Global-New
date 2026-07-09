import type { Metadata } from 'next'
import InquiryForm from '@/components/shared/InquiryForm'
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | NPLUS Global',
  description:
    'Get in touch with NPLUS Global for enterprise healthcare & B2B data solutions. Request free samples, book a consultation, or speak with a data expert today.',
  alternates: { canonical: 'https://nplusglobal.com/contact' },
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@nplusglobal.com',
    href: 'mailto:info@nplusglobal.com',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (204) 410-0635',
    href: 'tel:+12044100635',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: MapPin,
    label: 'USA Office',
    value: '1857, 1007 N Orange St. 4th Floor, Wilmington, DE-19801',
    href: 'https://maps.google.com/?q=1007+N+Orange+St+Wilmington+DE',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Fri: 9:00 AM – 6:00 PM EST',
    href: null,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
]

const options = [
  {
    icon: MessageCircle,
    title: 'Request Free Sample',
    desc: 'Get 50–100 verified records from any of our datasets delivered within 24 hours.',
    color: 'text-cyan-400',
  },
  {
    icon: Calendar,
    title: 'Book a Consultation',
    desc: 'Schedule a 30-minute call with a data expert to discuss your exact requirements.',
    color: 'text-blue-400',
  },
  {
    icon: Phone,
    title: 'Custom Data Quote',
    desc: 'Describe your ideal target audience and receive a tailored proposal and pricing.',
    color: 'text-purple-400',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient relative overflow-hidden py-20 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="badge badge-cyan mb-5">Get In Touch</span>
          <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-5">
            Let&apos;s Build Your{' '}
            <span className="gradient-text">Data Strategy</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Speak with a dedicated data consultant who understands your industry and
            will craft a custom intelligence solution for your go-to-market goals.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-16 bg-navy-900/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {options.map((opt) => {
              const Icon = opt.icon
              return (
                <div key={opt.title} className="enterprise-card p-6 text-center">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={22} className={opt.color} />
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{opt.title}</h3>
                  <p className="text-white/50 text-sm">{opt.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-3">
                  Contact Information
                </h2>
                <p className="text-white/55 text-sm leading-relaxed">
                  Our enterprise data team is standing by to help you build the perfect
                  dataset for your campaigns, CRM enrichment, or market intelligence needs.
                </p>
              </div>

              {contactInfo.map((info) => {
                const Icon = info.icon
                const content = (
                  <div className={`enterprise-card p-5 flex gap-4 ${info.border} hover:border-opacity-50`}>
                    <div className={`w-11 h-11 rounded-xl ${info.bg} border ${info.border} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={20} className={info.color} />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">
                        {info.label}
                      </div>
                      <div className={`text-sm font-medium ${info.href ? 'hover:' + info.color.replace('text-', 'text-') : ''} text-white/80 transition-colors`}>
                        {info.value}
                      </div>
                    </div>
                  </div>
                )
                return info.href ? (
                  <a key={info.label} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                )
              })}

              {/* Response promise */}
              <div className="glass rounded-xl p-5 border border-cyan-500/15">
                <h4 className="font-display font-bold text-white text-sm mb-3">
                  ⚡ Our Response Promise
                </h4>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>✅ Free sample delivered within <strong className="text-white">24 hours</strong></li>
                  <li>✅ Custom quote within <strong className="text-white">48 hours</strong></li>
                  <li>✅ Dedicated consultant assigned within <strong className="text-white">1 business day</strong></li>
                  <li>✅ Full compliance docs included with every order</li>
                </ul>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <InquiryForm
                title="Send Us a Message"
                subtitle="Fill in your details and one of our data experts will respond within 24 hours."
                pageSource="Contact Page"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
