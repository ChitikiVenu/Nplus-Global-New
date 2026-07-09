import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, User, ArrowRight } from 'lucide-react'
import InquiryForm from '@/components/shared/InquiryForm'

export const metadata: Metadata = {
  title: 'Blog | Data Intelligence Insights & Resources | NPLUS Global',
  description: 'Expert insights on healthcare marketing, B2B sales intelligence, intent data, lead generation, and email marketing best practices from NPLUS Global.',
  alternates: { canonical: 'https://nplusglobal.com/blog' },
}

const categories = [
  'All Articles', 'Healthcare Marketing', 'Lead Generation', 'Intent Data',
  'Technology Trends', 'B2B Sales Intelligence', 'Email Marketing', 'Healthcare Intelligence',
]

const posts = [
  {
    slug: 'healthcare-email-marketing-guide-2025',
    title: 'The Complete Guide to Healthcare Email Marketing in 2025',
    excerpt: 'Learn how leading medical device and pharmaceutical companies use verified physician data to achieve 40%+ open rates and generate qualified pipeline through targeted email campaigns.',
    category: 'Healthcare Marketing',
    author: 'Dr. Sarah Mills',
    authorRole: 'Healthcare Data Strategist',
    readTime: '8 min read',
    date: 'Jan 15, 2025',
    tags: ['Healthcare', 'Email Marketing', 'Physicians'],
    featured: true,
  },
  {
    slug: 'b2b-intent-data-strategies-2025',
    title: 'How Intent Data Reduces B2B Sales Cycle by 35%: Complete Guide',
    excerpt: 'Enterprise sales teams using buyer intent signals close deals 35% faster. Discover the strategies, tools, and workflows that separate top performers from the rest.',
    category: 'Intent Data',
    author: 'James Thurston',
    authorRole: 'B2B Revenue Strategist',
    readTime: '6 min read',
    date: 'Jan 22, 2025',
    tags: ['Intent Data', 'B2B Sales', 'Pipeline'],
  },
  {
    slug: 'technographic-data-competitive-displacement',
    title: 'Technographic Data: The Secret Weapon for Competitive Displacement',
    excerpt: 'Knowing your prospects\' exact technology stack gives you surgical precision for competitive displacement campaigns. Here\'s how to build a winning playbook.',
    category: 'Technology Trends',
    author: 'Linda Chen',
    authorRole: 'Technographic Intelligence Lead',
    readTime: '7 min read',
    date: 'Feb 3, 2025',
    tags: ['Technographics', 'Sales Strategy', 'CRM'],
  },
  {
    slug: 'physician-outreach-best-practices',
    title: 'Physician Outreach Best Practices: What MedTech Companies Get Wrong',
    excerpt: 'After analyzing 50M+ healthcare emails, we identified the 7 most common mistakes medical device and pharma companies make in physician outreach — and how to fix them.',
    category: 'Healthcare Intelligence',
    author: 'Dr. Sarah Mills',
    authorRole: 'Healthcare Data Strategist',
    readTime: '9 min read',
    date: 'Feb 12, 2025',
    tags: ['Physicians', 'Healthcare', 'Email Strategy'],
  },
  {
    slug: 'b2b-data-enrichment-ceo-guide',
    title: 'The CEO\'s Guide to B2B Data Enrichment: ROI and Implementation',
    excerpt: 'Data decay costs companies $15M annually in lost productivity and poor decision-making. Here\'s how enterprise leaders calculate the ROI of data enrichment programs.',
    category: 'B2B Sales Intelligence',
    author: 'Robert Kaufman',
    authorRole: 'Enterprise Data Consultant',
    readTime: '10 min read',
    date: 'Feb 20, 2025',
    tags: ['Data Enrichment', 'ROI', 'CRM Data'],
  },
  {
    slug: 'healthcare-data-compliance-gdpr-hipaa',
    title: 'Healthcare Data Compliance: GDPR, HIPAA, and CAN-SPAM in 2025',
    excerpt: 'Navigating healthcare data regulations is complex. This definitive guide explains what healthcare marketers need to know about GDPR, CAN-SPAM, and HIPAA-awareness.',
    category: 'Healthcare Marketing',
    author: 'Amanda Torres',
    authorRole: 'Compliance & Legal Specialist',
    readTime: '11 min read',
    date: 'Mar 4, 2025',
    tags: ['Compliance', 'GDPR', 'Healthcare Law'],
  },
  {
    slug: 'channel-partner-recruitment-guide',
    title: 'Channel Partner Recruitment: How to Scale from 10 to 500 Partners',
    excerpt: 'Building a successful channel partner ecosystem requires the right data, the right message, and the right process. Here\'s the playbook used by enterprise software vendors.',
    category: 'Lead Generation',
    author: 'David Park',
    authorRole: 'Channel Strategy Director',
    readTime: '8 min read',
    date: 'Mar 11, 2025',
    tags: ['Channel Partners', 'Partner Programs', 'Resellers'],
  },
  {
    slug: 'salesforce-users-targeting-guide',
    title: 'How to Target Salesforce Users: Complete Campaign Strategy Guide',
    excerpt: 'From ISV app promotion to competitive displacement to consulting services, targeting Salesforce users requires specific tactics. Here\'s everything you need to know.',
    category: 'Technology Trends',
    author: 'James Thurston',
    authorRole: 'B2B Revenue Strategist',
    readTime: '7 min read',
    date: 'Mar 18, 2025',
    tags: ['Salesforce', 'Technographics', 'ABM'],
  },
  {
    slug: 'cold-email-deliverability-guide-2025',
    title: 'Cold Email Deliverability in 2025: The Complete Technical Guide',
    excerpt: 'Gmail and Outlook\'s new policies changed everything for cold email. Discover the technical setup, list hygiene practices, and sending strategies that achieve 95%+ inbox placement.',
    category: 'Email Marketing',
    author: 'Linda Chen',
    authorRole: 'Email Deliverability Expert',
    readTime: '12 min read',
    date: 'Mar 25, 2025',
    tags: ['Email Deliverability', 'Cold Email', 'DMARC'],
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden py-20 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="badge badge-cyan mb-5">Data Intelligence Blog</span>
          <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-5">
            Insights & <span className="gradient-text">Expert Resources</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Actionable strategies on healthcare marketing, B2B data, intent intelligence,
            and go-to-market best practices from our team of experts.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="py-6 bg-navy-900/50 border-b border-white/5 sticky top-16 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  i === 0
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/8'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured post */}
          <div className="mb-10">
            <Link href={`/blog/${posts[0].slug}`} className="enterprise-card p-0 overflow-hidden group block">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/10 h-64 lg:h-auto flex items-center justify-center">
                  <div className="text-8xl">📊</div>
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge badge-cyan">{posts[0].category}</span>
                    <span className="badge badge-blue">Featured</span>
                  </div>
                  <h2 className="font-display font-bold text-white text-2xl lg:text-3xl mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                    {posts[0].title}
                  </h2>
                  <p className="text-white/55 leading-relaxed mb-5">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-white/35">
                    <span className="flex items-center gap-1.5"><User size={12} />{posts[0].author}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} />{posts[0].readTime}</span>
                    <span>{posts[0].date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="enterprise-card p-6 flex flex-col group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge badge-cyan text-xs">{post.category}</span>
                </div>
                <h2 className="font-display font-bold text-white text-lg mb-3 group-hover:text-cyan-300 transition-colors leading-snug flex-1">
                  {post.title}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/5">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs text-white/30 border-t border-white/8 pt-4">
                  <span className="flex items-center gap-1"><User size={11} />{post.author}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  <span className="ml-auto">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-outline flex items-center gap-2 mx-auto">
              Load More Articles <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-950 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              Ready to Build Your <span className="gradient-text">Data Strategy?</span>
            </h2>
            <p className="text-white/55">Request a free data sample and see NPLUS Global quality firsthand.</p>
          </div>
          <InquiryForm
            title="Request Free Data Sample"
            subtitle="Tell us your requirements and receive verified data within 24 hours."
            pageSource="Blog Page"
            compact
          />
        </div>
      </section>
    </>
  )
}
// CTA handled by global FloatingCTA and StickyBanner components
