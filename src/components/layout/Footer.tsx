import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, ArrowRight } from 'lucide-react'

const footerLinks = {
  healthcare: [
    { label: 'Physicians Email List', href: '/healthcare/physicians-email-list' },
    { label: 'Cardiologists List', href: '/healthcare/cardiologists-email-list' },
    { label: 'Nurses Email List', href: '/healthcare/nurses-email-list' },
    { label: 'Hospitals Email List', href: '/healthcare/hospitals-email-list' },
    { label: 'Dentists Email List', href: '/healthcare/dentists-email-list' },
    { label: 'Oncologists List', href: '/healthcare/oncologists-email-list' },
    { label: 'Healthcare Executives', href: '/healthcare/healthcare-executives-email-list' },
    { label: 'Medical Device Companies', href: '/healthcare/medical-device-companies-list' },
  ],
  b2b: [
    { label: 'CFO Email List', href: '/b2b/cfo-email-list' },
    { label: 'CIO Email List', href: '/b2b/cio-email-list' },
    { label: 'CTO Email List', href: '/b2b/cto-email-list' },
    { label: 'HR Directors List', href: '/b2b/hr-directors-email-list' },
    { label: 'Marketing Directors', href: '/b2b/marketing-directors-email-list' },
    { label: 'Manufacturing Companies', href: '/b2b/manufacturing-companies-list' },
    { label: 'Fortune 500 Executives', href: '/b2b/fortune-500-executives-list' },
  ],
  technology: [
    { label: 'Salesforce Users', href: '/technology/salesforce-users-list' },
    { label: 'AWS Users Database', href: '/technology/aws-users-database' },
    { label: 'HubSpot Users', href: '/technology/hubspot-users-list' },
    { label: 'Oracle Users', href: '/technology/oracle-users-list' },
    { label: 'SAP Users List', href: '/technology/sap-users-list' },
    { label: 'Microsoft Dynamics', href: '/technology/microsoft-dynamics-users-list' },
    { label: 'ServiceNow Users', href: '/technology/servicenow-users' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Intent Data', href: '/intent-data' },
    { label: 'Data Enrichment', href: '/data-enrichment' },
    { label: 'Channel Partners', href: '/channel-partners' },
    { label: 'Custom Data', href: '/custom-data' },
    { label: 'Industry Lists', href: '/industry' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      {/* Newsletter bar */}
      <div className="border-b border-white/5 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Stay Ahead with Data Intelligence
              </h3>
              <p className="text-white/50 text-sm mt-1">
                Get industry insights, data trends & exclusive offers delivered to your inbox.
              </p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="form-input flex-1 md:w-72 text-sm"
              />
              <button type="submit" className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap flex items-center gap-2">
                Subscribe <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-5">
              <div className="relative w-40 h-11">
                <Image src="/logo.jpg" alt="NPLUS Global" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Enterprise Healthcare & B2B Data Intelligence Platform. Access 950M+ verified
              global contacts with industry-leading accuracy and compliance.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@nplusglobal.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-cyan-400 transition-colors"
              >
                <Mail size={15} className="text-cyan-500 flex-shrink-0" />
                info@nplusglobal.com
              </a>
              <a
                href="tel:+12044100635"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-cyan-400 transition-colors"
              >
                <Phone size={15} className="text-cyan-500 flex-shrink-0" />
                +1 (204) 410-0635
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={15} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                <span>1857, 1007 N Orange St. 4th Floor, Wilmington, DE-19801, USA</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Healthcare */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Healthcare Data
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.healthcare.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* B2B */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              B2B Data
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.b2b.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Technology Users
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.technology.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Compliance logos */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {['GDPR Compliant', 'CAN-SPAM', 'CCPA Ready', 'CASL Compliant', 'ISO 27001', 'SOC 2'].map((badge) => (
                <span
                  key={badge}
                  className="badge badge-cyan text-xs"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
            <div className="text-white/30 text-sm text-center md:text-right">
              <p>© {new Date().getFullYear()} NPLUS Global. All rights reserved.</p>
              <div className="flex items-center gap-4 mt-1 justify-center md:justify-end">
                <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
                <Link href="/sitemap.xml" className="hover:text-white/60 transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
