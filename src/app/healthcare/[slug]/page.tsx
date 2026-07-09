import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import InquiryForm from '@/components/shared/InquiryForm'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { CheckCircle, ArrowRight, Shield, Users } from 'lucide-react'

const healthcarePages: Record<string, {
  title: string
  metaTitle: string
  metaDesc: string
  count: string
  countNum: number
  specialty: string
  heroDesc: string
  dataFields: string[]
  targetAudience: string[]
  useCases: string[]
  faqs: { q: string; a: string }[]
  relatedPages: { label: string; href: string }[]
}> = {
  'physicians-email-list': {
    title: 'Physicians Email List',
    metaTitle: 'Physicians Email List | 4.2M+ Verified Doctor Contacts | NPLUS Global',
    metaDesc: 'Access 4.2M+ verified physician email addresses including MDs and DOs across all specialties. GDPR-compliant, NPI-verified, 98% deliverability guaranteed.',
    count: '4.2M+', countNum: 4.2,
    specialty: 'Physicians (MD/DO)',
    heroDesc: 'Reach 4.2M+ licensed physicians across all specialties in the US and globally. Every record is NPI-verified, includes direct email, phone, hospital affiliation, and 20+ additional data points.',
    dataFields: ['Full Name & Credentials', 'NPI Number', 'Primary Specialty', 'Sub-specialty', 'Hospital Affiliation', 'Direct Email', 'Office Phone', 'Cell Phone', 'Mailing Address', 'LinkedIn URL', 'Years in Practice', 'Medical School', 'Board Certifications', 'Medicare/Medicaid', 'EMR System Used', 'Patient Volume', 'Practice Type', 'State License', 'DEA Number', 'Insurance Plans'],
    targetAudience: ['Medical Device Manufacturers', 'Pharmaceutical Companies', 'Healthcare IT Vendors', 'Medical Publishers', 'CME Providers', 'Medical Recruiters', 'Healthcare Insurers', 'Lab & Diagnostics Companies'],
    useCases: ['Pharmaceutical drug detailing and sample distribution', 'Medical device demonstrations and trials', 'Healthcare IT software demos and webinars', 'Continuing Medical Education (CME) promotion', 'Physician recruiting for hospitals and health systems', 'Specialty insurance and financial services outreach'],
    faqs: [
      { q: 'How is the physician email list sourced?', a: 'Our physician database is compiled from NPI registries, state medical licensing boards, hospital directories, AMA databases, and 45+ additional verified sources. Every record undergoes email validation and is refreshed monthly.' },
      { q: 'Can I filter physicians by specialty?', a: 'Yes. We offer filtering by 450+ medical specialties and sub-specialties, geographic region, practice type, hospital affiliation, years in practice, and more.' },
      { q: 'What is the deliverability rate?', a: 'Our physician email list maintains a 98% deliverability rate, verified through real-time SMTP and DNS validation before every delivery.' },
    ],
    relatedPages: [
      { label: 'Cardiologists Email List', href: '/healthcare/cardiologists-email-list' },
      { label: 'Oncologists Email List', href: '/healthcare/oncologists-email-list' },
      { label: 'Surgeons Email List', href: '/healthcare/physicians-email-list' },
      { label: 'Healthcare Executives', href: '/healthcare/healthcare-executives-email-list' },
    ],
  },
  'cardiologists-email-list': {
    title: 'Cardiologists Email List',
    metaTitle: 'Cardiologists Email List | 185K+ Verified Cardiology Contacts | NPLUS Global',
    metaDesc: 'Connect with 185,000+ verified cardiologists, cardiac surgeons, and electrophysiologists. Board-certified cardiology specialist contacts with direct emails.',
    count: '185K+', countNum: 185,
    specialty: 'Cardiologists',
    heroDesc: 'Reach 185,000+ board-certified cardiologists including interventional cardiologists, electrophysiologists, cardiac surgeons, and heart failure specialists across the US and globally.',
    dataFields: ['Full Name & MD/DO Credentials', 'NPI Number', 'Cardiology Sub-specialty', 'Hospital Affiliation', 'Direct Email', 'Office Phone', 'Practice Address', 'LinkedIn Profile', 'Board Certifications', 'Procedures Performed', 'Catheterization Lab Access', 'EMR System', 'Medicare Acceptance', 'Years in Practice', 'Medical School', 'Residency Program', 'Fellowship Training', 'Research Publications', 'Insurance Plans', 'Patient Volume'],
    targetAudience: ['Cardiac Device Manufacturers', 'Cardiovascular Pharma Companies', 'Cardiac Imaging Companies', 'Cardiac Rehabilitation Firms', 'Medical Publishers', 'CME Providers', 'Cardiology Recruiters', 'Cardiac Software Vendors'],
    useCases: ['Cardiac device launches (stents, valves, monitors)', 'Cardiovascular drug marketing and detailing', 'Electrophysiology equipment promotion', 'Cardiac imaging software demos', 'Cardiology conference and CME promotion', 'Heart failure management program outreach'],
    faqs: [
      { q: 'Do you segment by cardiology sub-specialty?', a: 'Yes — we can filter by interventional cardiology, electrophysiology, heart failure, cardiac surgery, pediatric cardiology, and 20+ sub-specialties.' },
      { q: 'Can I target cardiologists by hospital or health system?', a: 'Absolutely. We can filter by specific hospital affiliations, health systems, academic medical centers, and private practices.' },
      { q: 'What countries are covered?', a: 'Our cardiologist database covers 85+ countries with the deepest coverage in the US, UK, Canada, Australia, and Germany.' },
    ],
    relatedPages: [
      { label: 'Physicians Email List', href: '/healthcare/physicians-email-list' },
      { label: 'Oncologists Email List', href: '/healthcare/oncologists-email-list' },
      { label: 'Radiologists Email List', href: '/healthcare/radiologists-email-list' },
      { label: 'Healthcare Executives', href: '/healthcare/healthcare-executives-email-list' },
    ],
  },
  'nurses-email-list': {
    title: 'Nurses Email List',
    metaTitle: 'Nurses Email List | 5.8M+ Verified Nursing Contacts | NPLUS Global',
    metaDesc: 'Access 5.8M+ verified nurse email addresses including RNs, LPNs, NPs, and CRNAs. Nursing professionals database segmented by specialty, state, and facility.',
    count: '5.8M+', countNum: 5.8,
    specialty: 'Nurses (RN/LPN/NP)',
    heroDesc: 'Connect with 5.8M+ licensed nurses including Registered Nurses, Licensed Practical Nurses, Nurse Practitioners, CRNAs, and Clinical Nurse Specialists across hospitals, clinics, and private practices.',
    dataFields: ['Full Name & License Type', 'Nursing License Number', 'Nursing Specialty', 'Employer/Facility', 'Direct Email', 'Phone Number', 'Mailing Address', 'LinkedIn Profile', 'State License', 'Certifications Held', 'Shift Type', 'Years of Experience', 'Education Level', 'Prescribing Authority (NP)', 'Practice Setting', 'Department/Unit', 'Magnet Hospital Status', 'Union Membership', 'Travel Nurse Status', 'PRN/Per Diem Status'],
    targetAudience: ['Medical Supply Companies', 'Nursing Education Programs', 'Healthcare Recruiters', 'Nursing Associations', 'Wound Care Companies', 'IV Therapy Vendors', 'Nursing Uniform Brands', 'Healthcare Publishers'],
    useCases: ['Medical supply and equipment marketing', 'Nursing education and certification programs', 'Travel nursing and staffing recruitment', 'Clinical software and mobile app promotion', 'Nursing conference and event invitations', 'Wound care and specialty product launches'],
    faqs: [
      { q: 'Can you filter by nursing specialty?', a: 'Yes. We can filter by ICU, ER, OR, oncology, pediatrics, home health, NICU, psychiatric nursing, and 50+ nursing specialties.' },
      { q: 'Do you have Nurse Practitioner contacts separately?', a: 'Yes. We have a dedicated Nurse Practitioners list with prescribing authority status, specialty focus, and collaborative practice agreements.' },
      { q: 'What is the accuracy of your nursing contacts?', a: 'Our nursing contacts maintain 97% accuracy with monthly verification against state nursing board records and direct email validation.' },
    ],
    relatedPages: [
      { label: 'Nurse Practitioners List', href: '/healthcare/nurse-practitioners-email-list' },
      { label: 'Physician Assistants List', href: '/healthcare/physician-assistants-email-list' },
      { label: 'Physicians Email List', href: '/healthcare/physicians-email-list' },
      { label: 'Healthcare Executives', href: '/healthcare/healthcare-executives-email-list' },
    ],
  },
  'hospitals-email-list': {
    title: 'Hospitals Email List',
    metaTitle: 'Hospitals Email List | 6,500+ Verified Hospital Contacts | NPLUS Global',
    metaDesc: 'Reach decision-makers at 6,500+ US hospitals. Hospital administrators, procurement officers, CMOs, CNOs, and department heads verified contact database.',
    count: '6,500+', countNum: 6500,
    specialty: 'Hospital Decision Makers',
    heroDesc: 'Connect with verified decision-makers at 6,500+ hospitals including CEOs, CFOs, CMOs, CNOs, Supply Chain Directors, IT Directors, and Department Heads responsible for purchasing and vendor decisions.',
    dataFields: ['Contact Full Name', 'Job Title', 'Hospital Name', 'Hospital Type', 'Bed Count', 'Direct Email', 'Direct Phone', 'Hospital Address', 'LinkedIn Profile', 'Department', 'Budget Authority', 'EMR System Used', 'Health System Affiliation', 'Magnet Status', 'Teaching Hospital', 'Trauma Level', 'Annual Revenue', 'Patient Days', 'Accreditations', 'GPO Membership'],
    targetAudience: ['Medical Device Companies', 'Healthcare IT Vendors', 'Hospital Supply Companies', 'Pharmaceutical Firms', 'Revenue Cycle Companies', 'Facilities Management', 'Food Service Vendors', 'Security Solution Providers'],
    useCases: ['Medical equipment and device sales', 'Healthcare IT and EHR system sales', 'Hospital supply chain and GPO outreach', 'Revenue cycle management solutions', 'Facilities and environmental services', 'Clinical staffing and workforce solutions'],
    faqs: [
      { q: 'Can I filter hospitals by bed size or type?', a: 'Yes. Filter by bed count (under 100, 100-299, 300-499, 500+), hospital type (academic, community, critical access, specialty), trauma level, and Magnet status.' },
      { q: 'Do you include IDN and health system contacts?', a: 'Yes. We have Integrated Delivery Network (IDN) and health system-level contacts including C-suite executives who make enterprise-wide purchasing decisions.' },
    ],
    relatedPages: [
      { label: 'Healthcare Executives List', href: '/healthcare/healthcare-executives-email-list' },
      { label: 'Physicians Email List', href: '/healthcare/physicians-email-list' },
      { label: 'Medical Device Companies', href: '/healthcare/medical-device-companies-list' },
    ],
  },
  'dentists-email-list': {
    title: 'Dentists Email List',
    metaTitle: 'Dentists Email List | 680K+ Verified Dental Professionals | NPLUS Global',
    metaDesc: 'Access 680,000+ verified dentist email addresses including general dentists, orthodontists, oral surgeons, and periodontists. GDPR-compliant dental professionals database.',
    count: '680K+', countNum: 680,
    specialty: 'Dental Professionals',
    heroDesc: 'Reach 680,000+ licensed dental professionals including general dentists, orthodontists, oral and maxillofacial surgeons, periodontists, endodontists, and pediatric dentists across 85+ countries.',
    dataFields: ['Full Name & DDS/DMD Credentials', 'State Dental License', 'Dental Specialty', 'Practice Name', 'Direct Email', 'Practice Phone', 'Practice Address', 'LinkedIn URL', 'Years in Practice', 'Practice Ownership', 'Number of Operatories', 'Practice Management Software', 'Digital Imaging Systems', 'Group Practice Affiliation', 'Patient Volume', 'Insurance Plans Accepted', 'Dental School', 'Board Certifications', 'ADA Membership', 'NPI Number'],
    targetAudience: ['Dental Equipment Manufacturers', 'Dental Supply Distributors', 'Dental Software Companies', 'Dental Lab Services', 'Dental Continuing Education', 'Dental Recruiters', 'Dental Insurance Companies', 'Dental Marketing Agencies'],
    useCases: ['Dental equipment and technology sales', 'Dental supply and consumables marketing', 'Practice management software demos', 'Dental CE course and event promotion', 'Dental associate and practice acquisition', 'Dental insurance plan enrollment campaigns'],
    faqs: [
      { q: 'Can I target by dental specialty?', a: 'Yes — filter by general dentistry, orthodontics, oral surgery, periodontics, endodontics, prosthodontics, pediatric dentistry, and more.' },
      { q: 'Do you have DSO (Dental Support Organization) contacts?', a: 'Yes. We have dedicated DSO and group practice contacts including regional managers and corporate procurement officers.' },
    ],
    relatedPages: [
      { label: 'Physicians Email List', href: '/healthcare/physicians-email-list' },
      { label: 'Healthcare Executives', href: '/healthcare/healthcare-executives-email-list' },
      { label: 'Nurse Practitioners List', href: '/healthcare/nurse-practitioners-email-list' },
    ],
  },
  'physician-assistants-email-list': {
    title: 'Physician Assistants Email List',
    metaTitle: 'Physician Assistants Email List | 320K+ Verified PA Contacts | NPLUS Global',
    metaDesc: 'Connect with 320,000+ certified Physician Assistants. PA-C database by specialty, state, and practice setting. 98% deliverability guaranteed.',
    count: '320K+', countNum: 320,
    specialty: 'Physician Assistants (PA-C)',
    heroDesc: 'Access 320,000+ certified Physician Assistants practicing across primary care, emergency medicine, surgery, and specialty settings. Every PA contact is verified against NCCPA certification records.',
    dataFields: ['Full Name & PA-C Credentials', 'NCCPA Certification Number', 'Primary Specialty', 'Supervising Physician', 'Employer/Practice', 'Direct Email', 'Phone Number', 'Practice Address', 'LinkedIn URL', 'Prescribing Authority', 'DEA Registration', 'Years of Experience', 'Practice Setting', 'Hospital Privileges', 'State License', 'AAPA Membership', 'CME Credits', 'Telemedicine Practice', 'NPI Number', 'Patient Volume'],
    targetAudience: ['Pharmaceutical Companies', 'Medical Device Firms', 'Healthcare Recruiters', 'CME Providers', 'Medical Publishers', 'Healthcare IT Vendors', 'Diagnostic Companies', 'Specialty Clinics'],
    useCases: ['Pharmaceutical prescriber outreach (PA prescribing authority)', 'Medical device product launches', 'PA CME and education program promotion', 'PA recruiting for hospitals and urgent care', 'Specialty training program enrollment', 'Healthcare software and technology demos'],
    faqs: [
      { q: 'Do Physician Assistants have prescribing authority?', a: 'Yes, in all 50 US states, PAs have prescribing authority including Schedule II-V controlled substances in most states. Our database flags prescribing authority and DEA registration.' },
      { q: 'Can I filter PAs by specialty area?', a: 'Absolutely. Filter by surgical specialty, emergency medicine, primary care, cardiology, orthopedics, dermatology, and 40+ additional specialties.' },
    ],
    relatedPages: [
      { label: 'Nurse Practitioners List', href: '/healthcare/nurse-practitioners-email-list' },
      { label: 'Physicians Email List', href: '/healthcare/physicians-email-list' },
      { label: 'Nurses Email List', href: '/healthcare/nurses-email-list' },
    ],
  },
  'nurse-practitioners-email-list': {
    title: 'Nurse Practitioners Email List',
    metaTitle: 'Nurse Practitioners Email List | 290K+ Verified NP Contacts | NPLUS Global',
    metaDesc: 'Access 290,000+ verified Nurse Practitioner contacts. NP database by specialty, prescribing authority, and state. Connect with APRNs driving modern healthcare.',
    count: '290K+', countNum: 290,
    specialty: 'Nurse Practitioners (NP/APRN)',
    heroDesc: 'Reach 290,000+ Advanced Practice Registered Nurses (APRNs) including Family NPs, Psychiatric NPs, Acute Care NPs, and Women\'s Health NPs — all with verified prescribing authority and direct contact information.',
    dataFields: ['Full Name & NP Credentials', 'APRN License Number', 'NP Specialty', 'Prescribing Authority State', 'Employer/Practice', 'Direct Email', 'Direct Phone', 'Practice Address', 'DEA Registration', 'Collaborative Agreement', 'Population Focus', 'Practice Setting', 'Telehealth Practice', 'Hospital Privileges', 'NPI Number', 'Years of Experience', 'Education (MSN/DNP)', 'Board Certification', 'AANP/ANCC Membership', 'Patient Volume'],
    targetAudience: ['Pharmaceutical Companies', 'Medical Device Manufacturers', 'Healthcare Recruiters', 'CME Providers', 'Telehealth Platforms', 'Specialty Clinics', 'Health Insurance Companies', 'Diagnostic Labs'],
    useCases: ['Prescriber outreach for new drug launches', 'Nurse practitioner recruiting and staffing', 'Telehealth platform enrollment campaigns', 'NP specialty certification program promotion', 'Healthcare technology and EHR software demos', 'Continuing education and conference promotion'],
    faqs: [
      { q: 'What NP specialties are available?', a: 'Family NP, Adult-Gerontology, Psychiatric/Mental Health, Pediatric, Women\'s Health, Acute Care, Neonatal, Oncology NP, and 15+ additional specialties.' },
      { q: 'Are full practice authority states flagged?', a: 'Yes. Our NP database flags full practice authority (FPA) states, reduced practice states, and restricted practice states — critical for pharma and prescriber campaigns.' },
    ],
    relatedPages: [
      { label: 'Physician Assistants List', href: '/healthcare/physician-assistants-email-list' },
      { label: 'Nurses Email List', href: '/healthcare/nurses-email-list' },
      { label: 'Physicians Email List', href: '/healthcare/physicians-email-list' },
    ],
  },
  'healthcare-executives-email-list': {
    title: 'Healthcare Executives Email List',
    metaTitle: 'Healthcare Executives Email List | 420K+ C-Suite Contacts | NPLUS Global',
    metaDesc: 'Reach 420,000+ healthcare executives including hospital CEOs, CFOs, CMOs, CNOs, CIOs, and supply chain directors. Verified C-suite healthcare contacts.',
    count: '420K+', countNum: 420,
    specialty: 'Healthcare Executives',
    heroDesc: 'Access 420,000+ verified healthcare C-suite and senior executives including CEOs, CFOs, CMOs, CNOs, CIOs, VP of Operations, Supply Chain Directors, and Department Heads at hospitals, health systems, and healthcare organizations.',
    dataFields: ['Full Name', 'Exact Job Title', 'Organization Name', 'Organization Type', 'Direct Email', 'Direct Phone', 'LinkedIn Profile URL', 'Mailing Address', 'Health System Affiliation', 'Annual Revenue', 'Number of Employees', 'Bed Count (hospitals)', 'Budget Authority Level', 'Decision-Making Role', 'Department', 'Years in Role', 'Education', 'Board Memberships', 'Previous Employers', 'Geographic Territory'],
    targetAudience: ['Healthcare IT Vendors', 'Medical Device Manufacturers', 'Revenue Cycle Companies', 'Healthcare Consulting Firms', 'Healthcare Real Estate', 'Pharmaceutical Companies', 'Supply Chain Vendors', 'Healthcare Financial Services'],
    useCases: ['Healthcare IT and EHR executive sales', 'Revenue cycle management solution pitches', 'Hospital supply chain and GPO negotiations', 'Healthcare real estate and facility development', 'C-suite thought leadership event invitations', 'Healthcare M&A and investment banking outreach'],
    faqs: [
      { q: 'What executive titles are included?', a: 'CEO, CFO, CMO, CNO, CIO, CISO, COO, VP of Operations, VP of Nursing, Chief Quality Officer, Supply Chain Director, Director of Pharmacy, and 50+ additional C-suite and director-level titles.' },
      { q: 'Can I filter by health system size?', a: 'Yes. Filter by number of beds, annual revenue, number of facilities, for-profit vs not-for-profit status, and GPO membership.' },
    ],
    relatedPages: [
      { label: 'Hospitals Email List', href: '/healthcare/hospitals-email-list' },
      { label: 'Physicians Email List', href: '/healthcare/physicians-email-list' },
      { label: 'Medical Device Companies', href: '/healthcare/medical-device-companies-list' },
    ],
  },
  'oncologists-email-list': {
    title: 'Oncologists Email List',
    metaTitle: 'Oncologists Email List | 145K+ Verified Oncology Contacts | NPLUS Global',
    metaDesc: 'Connect with 145,000+ verified oncologists including medical, surgical, and radiation oncologists. Oncology specialist database with NPI verification.',
    count: '145K+', countNum: 145,
    specialty: 'Oncologists',
    heroDesc: 'Reach 145,000+ board-certified oncologists including medical oncologists, surgical oncologists, radiation oncologists, gynecologic oncologists, and pediatric oncologists at leading cancer centers and hospitals worldwide.',
    dataFields: ['Full Name & MD Credentials', 'NPI Number', 'Oncology Sub-specialty', 'Cancer Center Affiliation', 'Direct Email', 'Office Phone', 'Practice Address', 'LinkedIn Profile', 'Board Certifications', 'Research Interests', 'Clinical Trial Participation', 'Tumor Board Membership', 'Chemotherapy Protocols', 'Immunotherapy Experience', 'Targeted Therapy Focus', 'EMR System', 'Patient Volume', 'Years in Practice', 'Medical School', 'Fellowship Training'],
    targetAudience: ['Oncology Pharmaceutical Companies', 'Cancer Diagnostic Firms', 'Radiation Equipment Manufacturers', 'Oncology Software Vendors', 'Clinical Trial Organizations', 'Cancer Research Publishers', 'Oncology CME Providers', 'Specialty Pharma Companies'],
    useCases: ['Oncology drug launches and MSL engagement', 'Cancer diagnostic equipment marketing', 'Radiation therapy technology promotion', 'Clinical trial investigator recruitment', 'Oncology CME and conference promotion', 'Precision medicine and genomics outreach'],
    faqs: [
      { q: 'Can I target by cancer type specialty?', a: 'Yes. Filter by breast oncology, lung cancer, GI oncology, hematologic malignancies, CNS tumors, gynecologic oncology, pediatric oncology, and 20+ cancer types.' },
      { q: 'Are clinical trial investigators included?', a: 'Yes. We flag oncologists who are active clinical trial investigators and principal investigators, ideal for trial recruitment campaigns.' },
    ],
    relatedPages: [
      { label: 'Physicians Email List', href: '/healthcare/physicians-email-list' },
      { label: 'Radiologists Email List', href: '/healthcare/radiologists-email-list' },
      { label: 'Healthcare Executives', href: '/healthcare/healthcare-executives-email-list' },
    ],
  },
  'radiologists-email-list': {
    title: 'Radiologists Email List',
    metaTitle: 'Radiologists Email List | 130K+ Verified Radiology Contacts | NPLUS Global',
    metaDesc: 'Access 130,000+ verified radiologist contacts including diagnostic and interventional radiologists. Radiology specialist database with direct emails.',
    count: '130K+', countNum: 130,
    specialty: 'Radiologists',
    heroDesc: 'Connect with 130,000+ board-certified radiologists including diagnostic radiologists, interventional radiologists, neuroradiologists, musculoskeletal radiologists, and nuclear medicine physicians at hospitals and imaging centers.',
    dataFields: ['Full Name & MD Credentials', 'NPI Number', 'Radiology Sub-specialty', 'Facility Affiliation', 'Direct Email', 'Office Phone', 'Practice Address', 'LinkedIn Profile', 'Board Certifications (ABR)', 'Imaging Modalities', 'Interventional Procedures', 'PACS System Used', 'AI Radiology Tools', 'Teleradiology Practice', 'RVU Volume', 'Fellowship Training', 'Years in Practice', 'Medical School', 'Research Interests', 'ACR Membership'],
    targetAudience: ['Imaging Equipment Manufacturers', 'PACS/RIS Vendors', 'AI Radiology Companies', 'Contrast Media Firms', 'Teleradiology Companies', 'Radiology CME Providers', 'Radiology Recruiters', 'Radiation Safety Companies'],
    useCases: ['Imaging equipment sales (MRI, CT, X-ray)', 'PACS, RIS, and radiology IT solutions', 'AI-powered radiology software demos', 'Contrast media and pharmaceutical outreach', 'Teleradiology service promotion', 'Radiology CME and board review promotion'],
    faqs: [
      { q: 'Can I filter by radiology sub-specialty?', a: 'Yes — diagnostic radiology, interventional radiology, neuroradiology, musculoskeletal, breast imaging, nuclear medicine, pediatric radiology, and more.' },
      { q: 'Do you include outpatient imaging center contacts?', a: 'Yes. We cover both hospital-based radiologists and those at outpatient imaging centers, freestanding ERs, and teleradiology groups.' },
    ],
    relatedPages: [
      { label: 'Oncologists Email List', href: '/healthcare/oncologists-email-list' },
      { label: 'Physicians Email List', href: '/healthcare/physicians-email-list' },
      { label: 'Healthcare Executives', href: '/healthcare/healthcare-executives-email-list' },
    ],
  },
  'medical-device-companies-list': {
    title: 'Medical Device Companies List',
    metaTitle: 'Medical Device Companies List | 210K+ MedTech Contacts | NPLUS Global',
    metaDesc: 'Reach 210,000+ medical device company contacts including procurement officers, R&D directors, regulatory affairs, and C-suite executives at MedTech firms.',
    count: '210K+', countNum: 210,
    specialty: 'Medical Device Industry',
    heroDesc: 'Access decision-makers at 210,000+ medical device companies including procurement directors, R&D executives, regulatory affairs managers, sales leaders, and C-suite executives across the global MedTech ecosystem.',
    dataFields: ['Full Name', 'Job Title', 'Company Name', 'Device Category', 'Direct Email', 'Direct Phone', 'LinkedIn Profile', 'Company HQ Address', 'Annual Revenue', 'Employee Count', 'FDA Registration Status', 'CE Mark Status', 'ISO 13485 Certified', 'Key Products/Devices', 'Distribution Channels', 'Hospital System Partners', 'R&D Spend', 'Patent Portfolio', 'Clinical Trials Active', 'GPO Contracts'],
    targetAudience: ['Component Suppliers', 'Contract Manufacturers', 'Regulatory Consultants', 'Healthcare IT Firms', 'Distribution Partners', 'Clinical Research Organizations', 'Financial Investors', 'Legal and IP Firms'],
    useCases: ['Medical device component and materials sales', 'Contract manufacturing and OEM outreach', 'Regulatory consulting and compliance services', 'MedTech investment and M&A outreach', 'Distribution partnership development', 'Healthcare IT integration sales'],
    faqs: [
      { q: 'What device categories are covered?', a: 'Cardiovascular, orthopedic, surgical, diagnostic imaging, in vitro diagnostics, neurology, ophthalmology, dental, and 30+ additional device categories.' },
      { q: 'Can I target by FDA approval status?', a: 'Yes. Filter by 510(k) cleared, PMA approved, De Novo authorized, and combination product classifications.' },
    ],
    relatedPages: [
      { label: 'Healthcare Executives', href: '/healthcare/healthcare-executives-email-list' },
      { label: 'Hospitals Email List', href: '/healthcare/hospitals-email-list' },
      { label: 'Physicians Email List', href: '/healthcare/physicians-email-list' },
    ],
  },
}

type Params = { slug: string }

export async function generateStaticParams() {
  return Object.keys(healthcarePages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const page = healthcarePages[slug]
  if (!page) return { title: 'Not Found' }
  return {
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: { canonical: `https://nplusglobal.com/healthcare/${slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDesc,
      url: `https://nplusglobal.com/healthcare/${slug}`,
    },
  }
}

export default async function HealthcareSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const page = healthcarePages[slug]
  if (!page) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient relative overflow-hidden py-20 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-6 flex-wrap">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span>/</span>
            <Link href="/healthcare" className="hover:text-cyan-400">Healthcare Data</Link>
            <span>/</span>
            <span className="text-white/70">{page.title}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-cyan mb-5">Healthcare Data</span>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-5 leading-tight">
                {page.title}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{page.heroDesc}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#inquiry" className="btn-primary flex items-center gap-2">
                  Request Free Sample <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-outline">Book Consultation</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: page.countNum, suffix: page.count.replace(/[\d.]+/, ''), label: page.specialty, color: 'text-cyan-400' },
                { value: 98, suffix: '%', label: 'Email Deliverability', color: 'text-green-400' },
                { value: 210, suffix: '+', label: 'Countries', color: 'text-blue-400' },
                { value: 24, suffix: 'hr', label: 'Delivery Time', color: 'text-purple-400' },
              ].map((s) => (
                <div key={s.label} className="enterprise-card p-5 text-center">
                  <div className={`font-display font-extrabold text-3xl ${s.color} mb-1`}>
                    <AnimatedCounter end={s.value} suffix={s.suffix} duration={2000} />
                  </div>
                  <div className="text-white/55 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Fields + Sample Table */}
      <section className="section-padding bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Available <span className="gradient-text">Data Fields</span>
              </h2>
              <p className="text-white/55 mb-6">Every {page.specialty} contact includes 20+ verified fields for precise targeting and personalization.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {page.dataFields.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-white/65">
                    <CheckCircle size={13} className="text-cyan-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl overflow-hidden border border-white/8">
              <div className="bg-navy-800/50 px-5 py-4 border-b border-white/8 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-white text-sm">Sample Data Preview</h3>
                  <p className="text-white/40 text-xs">Anonymized records for preview</p>
                </div>
                <span className="badge badge-cyan text-xs">{page.count} Total</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/8">
                      {['Name', 'Specialty', 'Location', 'Status'].map((h) => (
                        <th key={h} className="text-left px-4 py-3 text-white/40 font-semibold uppercase tracking-wide">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Dr. J. Smith', page.specialty, 'New York, NY', '✓ Verified'],
                      ['Dr. A. Patel', page.specialty, 'Houston, TX', '✓ Verified'],
                      ['Dr. L. Chen', page.specialty, 'Chicago, IL', '✓ Verified'],
                      ['Dr. M. Johnson', page.specialty, 'Los Angeles, CA', '✓ Verified'],
                      ['Dr. R. Williams', page.specialty, 'Boston, MA', '✓ Verified'],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                        {row.map((cell, j) => (
                          <td key={j} className={`px-4 py-3 ${j === 3 ? 'text-green-400' : 'text-white/65'}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 bg-cyan-500/5 border-t border-cyan-500/10">
                <p className="text-cyan-400 text-xs">✓ Full records include email, phone, LinkedIn & 17+ additional fields</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target audience + Use cases */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Who Uses This <span className="gradient-text">Database?</span>
              </h2>
              <div className="space-y-3">
                {page.targetAudience.map((aud) => (
                  <div key={aud} className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5">
                    <Users size={15} className="text-cyan-500 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{aud}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Top <span className="gradient-text">Use Cases</span>
              </h2>
              <div className="space-y-3">
                {page.useCases.map((uc) => (
                  <div key={uc} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/65 text-sm">{uc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-10 bg-navy-900/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Shield size={16} className="text-green-400" />
            {['GDPR Compliant', 'CAN-SPAM', 'CCPA Ready', 'CASL', 'HIPAA Aware', 'ISO 27001'].map((b) => (
              <span key={b} className="badge badge-cyan text-xs">✓ {b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq, i) => (
              <div key={i} className="enterprise-card p-5">
                <h3 className="font-display font-bold text-white text-sm mb-2">{faq.q}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-10 bg-navy-900/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display font-bold text-white text-sm mb-4 text-center uppercase tracking-wider">Related Healthcare Lists</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {page.relatedPages.map((rp) => (
              <Link key={rp.href} href={rp.href} className="px-4 py-2 rounded-lg bg-white/4 border border-white/8 text-sm text-white/60 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                {rp.label} <ArrowRight size={12} className="inline ml-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquiry" className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-6">
          <InquiryForm
            title={`Request Free ${page.title} Sample`}
            subtitle={`Get 50–100 verified ${page.specialty} records delivered within 24 hours, completely free.`}
            pageSource={page.title}
            dataType={page.title}
          />
        </div>
      </section>
    </>
  )
}
