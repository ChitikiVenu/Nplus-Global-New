'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Healthcare Data',
    href: '/healthcare',
    mega: true,
    children: [
      { label: 'Physicians Email List', href: '/healthcare/physicians-email-list' },
      { label: 'Cardiologists Email List', href: '/healthcare/cardiologists-email-list' },
      { label: 'Nurses Email List', href: '/healthcare/nurses-email-list' },
      { label: 'Hospitals Email List', href: '/healthcare/hospitals-email-list' },
      { label: 'Dentists Email List', href: '/healthcare/dentists-email-list' },
      { label: 'Physician Assistants List', href: '/healthcare/physician-assistants-email-list' },
      { label: 'Nurse Practitioners List', href: '/healthcare/nurse-practitioners-email-list' },
      { label: 'Healthcare Executives List', href: '/healthcare/healthcare-executives-email-list' },
      { label: 'Oncologists Email List', href: '/healthcare/oncologists-email-list' },
      { label: 'Radiologists Email List', href: '/healthcare/radiologists-email-list' },
      { label: 'Medical Device Companies', href: '/healthcare/medical-device-companies-list' },
    ],
  },
  {
    label: 'B2B Data',
    href: '/b2b',
    children: [
      { label: 'CFO Email List', href: '/b2b/cfo-email-list' },
      { label: 'CIO Email List', href: '/b2b/cio-email-list' },
      { label: 'CTO Email List', href: '/b2b/cto-email-list' },
      { label: 'HR Directors List', href: '/b2b/hr-directors-email-list' },
      { label: 'Marketing Directors List', href: '/b2b/marketing-directors-email-list' },
      { label: 'Manufacturing Companies', href: '/b2b/manufacturing-companies-list' },
      { label: 'Fortune 500 Executives', href: '/b2b/fortune-500-executives-list' },
    ],
  },
  {
    label: 'Technology Users',
    href: '/technology',
    children: [
      { label: 'Salesforce Users', href: '/technology/salesforce-users-list' },
      { label: 'AWS Users Database', href: '/technology/aws-users-database' },
      { label: 'HubSpot Users List', href: '/technology/hubspot-users-list' },
      { label: 'Oracle Users List', href: '/technology/oracle-users-list' },
      { label: 'ServiceNow Users', href: '/technology/servicenow-users' },
      { label: 'SAP Users List', href: '/technology/sap-users-list' },
      { label: 'Microsoft Dynamics Users', href: '/technology/microsoft-dynamics-users-list' },
      { label: 'Shopify Users List', href: '/technology/shopify-users-list' },
    ],
  },
  { label: 'Intent Data', href: '/intent-data' },
  { label: 'Channel Partners', href: '/channel-partners' },
  { label: 'Data Enrichment', href: '/data-enrichment' },
  { label: 'Custom Data', href: '/custom-data' },
  { label: 'Industry Lists', href: '/industry' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-900 border-b border-white/5 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-xs text-white/50">
            <span className="flex items-center gap-1.5">
              <Phone size={11} />
              +1 (204) 410-0635
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={11} />
              info@nplusglobal.com
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <span>USA Office: 1007 N Orange St. 4th Floor, Wilmington, DE-19801</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/95 backdrop-blur-xl border-b border-white/8 shadow-2xl'
            : 'bg-navy-950/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6" ref={dropdownRef}>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-40 h-11">
                <Image
                  src="/logo.jpg"
                  alt="NPLUS Global"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-1">
              {navItems.slice(0, 9).map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <button
                      className="nav-link flex items-center gap-1 px-3 py-2 rounded-md hover:bg-white/5 text-sm font-bold"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="nav-link px-3 py-2 rounded-md hover:bg-white/5 text-sm font-bold block"
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div
                      className={`absolute top-full left-0 mt-1 glass-dark rounded-xl shadow-2xl border border-white/8 py-2 z-50 ${
                        item.mega ? 'w-72' : 'w-56'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-bold text-white/65 hover:text-cyan-400 hover:bg-white/5 transition-all duration-150"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                      <div className="border-t border-white/8 mt-2 pt-2 px-4">
                        <Link
                          href={item.href}
                          className="text-cyan-400 text-xs font-bold hover:text-cyan-300"
                        >
                          View All →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-outline text-sm font-bold py-2 px-4"
              >
                Get Sample
              </Link>
              <Link
                href="/contact#book"
                className="btn-primary text-sm font-bold py-2 px-4"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="xl:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-navy-950/98 backdrop-blur-xl border-t border-white/8 max-h-[85vh] overflow-y-auto">
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        className="w-full flex items-center justify-between py-3 text-sm text-white/70 font-bold hover:text-cyan-400 transition-colors"
                        onClick={() =>
                          setActiveDropdown(activeDropdown === item.label ? null : item.label)
                        }
                      >
                        {item.label}
                        <ChevronDown
                          size={15}
                          className={`transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 border-l border-white/10 pl-4 mb-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block py-2 text-sm font-bold text-white/50 hover:text-cyan-400"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-sm text-white/70 font-bold hover:text-cyan-400 transition-colors border-b border-white/5"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3 pb-4">
                <Link
                  href="/contact"
                  className="btn-outline w-full text-center block text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Request Free Sample
                </Link>
                <Link
                  href="/contact#book"
                  className="btn-primary w-full text-center block text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
