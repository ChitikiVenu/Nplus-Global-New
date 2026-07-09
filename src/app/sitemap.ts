import type { MetadataRoute } from 'next'

const baseUrl = 'https://nplusglobal.com'

const healthcareSlugs = [
  'physicians-email-list', 'cardiologists-email-list', 'nurses-email-list',
  'hospitals-email-list', 'dentists-email-list', 'physician-assistants-email-list',
  'nurse-practitioners-email-list', 'healthcare-executives-email-list',
  'oncologists-email-list', 'radiologists-email-list', 'medical-device-companies-list',
]

const b2bSlugs = [
  'cfo-email-list', 'cio-email-list', 'cto-email-list', 'hr-directors-email-list',
  'marketing-directors-email-list', 'manufacturing-companies-list', 'fortune-500-executives-list',
]

const techSlugs = [
  'salesforce-users-list', 'aws-users-database', 'hubspot-users-list', 'oracle-users-list',
  'servicenow-users', 'sap-users-list', 'microsoft-dynamics-users-list', 'shopify-users-list',
]

const industrySlugs = [
  'manufacturing', 'finance', 'saas', 'real-estate', 'education', 'logistics',
  'retail', 'pharma', 'automotive', 'telecom', 'hospitality', 'construction',
]

const blogSlugs = [
  'healthcare-email-marketing-guide-2025', 'b2b-intent-data-strategies-2025',
  'technographic-data-competitive-displacement', 'physician-outreach-best-practices',
  'b2b-data-enrichment-ceo-guide', 'healthcare-data-compliance-gdpr-hipaa',
  'channel-partner-recruitment-guide', 'salesforce-users-targeting-guide',
  'cold-email-deliverability-guide-2025',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/healthcare`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/b2b`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/technology`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/intent-data`, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/data-enrichment`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/channel-partners`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/custom-data`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/industry`, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/blog`, changeFrequency: 'daily' as const, priority: 0.85 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  const healthcarePages = healthcareSlugs.map((slug) => ({
    url: `${baseUrl}/healthcare/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const b2bPages = b2bSlugs.map((slug) => ({
    url: `${baseUrl}/b2b/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const techPages = techSlugs.map((slug) => ({
    url: `${baseUrl}/technology/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const industryPages = industrySlugs.map((slug) => ({
    url: `${baseUrl}/industry/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }))

  return [
    ...staticPages,
    ...healthcarePages,
    ...b2bPages,
    ...techPages,
    ...industryPages,
    ...blogPages,
  ]
}
