import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TrustedBy from '@/components/home/TrustedBy'
import StatsSection from '@/components/home/StatsSection'
import ServicesSection from '@/components/home/ServicesSection'
import HealthcareSection from '@/components/home/HealthcareSection'
import TechnologySection from '@/components/home/TechnologySection'
import IntentDataSection from '@/components/home/IntentDataSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import AIPoweredSection from '@/components/home/AIPoweredSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import IndustrySection from '@/components/home/IndustrySection'
import FAQSection from '@/components/home/FAQSection'
import BlogSection from '@/components/home/BlogSection'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'NPLUS Global | Enterprise Healthcare & B2B Data Intelligence',
  description:
    'Access 950M+ Global B2B Contacts, 140M+ Decision Makers, 18M+ Healthcare Professionals, and 20M+ Technology Users with enterprise-grade verified intelligence.',
  alternates: {
    canonical: 'https://nplusglobal.com',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <StatsSection />
      <ServicesSection />
      <HealthcareSection />
      <TechnologySection />
      <IntentDataSection />
      <WhyChooseUs />
      <AIPoweredSection />
      <IndustrySection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
    </>
  )
}
