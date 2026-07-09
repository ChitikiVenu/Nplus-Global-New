import type { Metadata } from 'next'
import Link from 'next/link'
// notFound imported but available for future use
import InquiryForm from '@/components/shared/InquiryForm'
import { Clock, ArrowRight, BookOpen, Tag } from 'lucide-react'

const blogPosts: Record<string, {
  title: string
  metaDesc: string
  category: string
  author: string
  authorRole: string
  authorBio: string
  readTime: string
  date: string
  tags: string[]
  toc: { id: string; label: string }[]
  content: { heading: string; id: string; body: string }[]
  relatedPosts: { title: string; slug: string; category: string }[]
}> = {
  'healthcare-email-marketing-guide-2025': {
    title: 'The Complete Guide to Healthcare Email Marketing in 2025',
    metaDesc: 'Learn how leading medical device and pharma companies use verified physician data to achieve 40%+ open rates and generate qualified pipeline through targeted healthcare email campaigns.',
    category: 'Healthcare Marketing',
    author: 'Dr. Sarah Mills',
    authorRole: 'Healthcare Data Strategist',
    authorBio: 'Dr. Sarah Mills has 12+ years of experience in healthcare data and medical marketing strategy, having worked with 200+ medical device and pharmaceutical companies.',
    readTime: '8 min read',
    date: 'January 15, 2025',
    tags: ['Healthcare', 'Email Marketing', 'Physicians', 'Medical Device'],
    toc: [
      { id: 'why-email', label: 'Why Email Marketing Works in Healthcare' },
      { id: 'data-quality', label: 'Data Quality: The Foundation of Success' },
      { id: 'segmentation', label: 'Physician Segmentation Strategies' },
      { id: 'compliance', label: 'Compliance: CAN-SPAM & GDPR' },
      { id: 'metrics', label: 'Key Metrics and Benchmarks' },
      { id: 'best-practices', label: 'Proven Best Practices' },
    ],
    content: [
      {
        heading: 'Why Email Marketing Works in Healthcare',
        id: 'why-email',
        body: 'Healthcare email marketing remains one of the highest-ROI channels available to medical device manufacturers, pharmaceutical companies, and healthcare IT vendors — when done right. Unlike consumer email, healthcare professionals actively seek information about new treatments, devices, and technologies that can improve patient outcomes. Studies show that 72% of physicians prefer email as their primary channel for receiving information from medical vendors, making a high-quality, segmented email list the single most valuable asset in your healthcare marketing arsenal.\n\nThe key differentiator between campaigns that achieve 40%+ open rates and those that languish below 10% is simple: data quality and relevance. Physicians receive hundreds of emails weekly. The campaigns that break through are those reaching the right specialty, with the right message, at the right time — and that precision starts with verified, segmented data.',
      },
      {
        heading: 'Data Quality: The Foundation of Success',
        id: 'data-quality',
        body: 'The single most important factor in healthcare email campaign performance is the quality of your contact list. Industry data shows that healthcare databases decay at a rate of 25–35% annually due to physician relocations, retirements, specialty changes, and practice acquisitions. Using a stale list doesn\'t just hurt deliverability — it signals spam to email providers and can permanently damage your sender reputation.\n\nHigh-quality healthcare data should meet these standards:\n\n• NPI-verified email addresses cross-referenced with the national physician registry\n• Monthly data refresh from 50+ authoritative sources\n• 98%+ email deliverability guarantee with bounce replacement\n• Specialty, sub-specialty, and hospital affiliation accuracy\n• GDPR, CAN-SPAM, and HIPAA-awareness compliance documentation\n\nAt NPLUS Global, we maintain these standards across our 18M+ healthcare professional database, ensuring that every campaign our clients launch starts from a position of strength.',
      },
      {
        heading: 'Physician Segmentation Strategies',
        id: 'segmentation',
        body: 'Blanket emails to all physicians perform poorly. The highest-performing healthcare campaigns use multi-dimensional segmentation to ensure message relevance. Here are the four segmentation dimensions that drive the biggest lift in open and click-through rates:\n\n1. Specialty and Sub-specialty: A cardiologist and a family physician have completely different clinical needs. Segment by primary specialty and, where possible, sub-specialty (e.g., interventional cardiologist vs. electrophysiologist).\n\n2. Practice Setting: Physicians in private practice have different purchasing dynamics than those in academic medical centers or community hospitals. Hospital-affiliated physicians may require different messaging around formulary inclusion vs. private practice physicians making individual purchasing decisions.\n\n3. Patient Volume and Practice Size: High-volume practices respond differently to messages about efficiency and time savings than lower-volume specialty practices. Segment by estimated patient volume to calibrate your value proposition.\n\n4. Technology and EMR Usage: Physicians using specific EMR systems respond better to integrations and workflows tailored to their existing platform. This technographic layer can increase click-through rates by 35%.',
      },
      {
        heading: 'Compliance: CAN-SPAM & GDPR',
        id: 'compliance',
        body: 'Healthcare email marketing operates in a complex regulatory environment. While HIPAA does not directly regulate marketing emails to physicians (it governs patient health information), CAN-SPAM, GDPR, CASL, and CCPA create important obligations for healthcare marketers.\n\nCAN-SPAM requirements for B2B healthcare email:\n• Accurate sender identification and subject lines\n• Physical mailing address in every email\n• Clear and functional opt-out mechanism\n• Honor opt-out requests within 10 business days\n\nFor campaigns to EU-based healthcare professionals, GDPR requires legitimate interest or explicit consent as the legal basis for processing. Document your legitimate interest assessment before launching any EU physician campaign.\n\nImportantly, HIPAA-awareness means your data provider should not include patient-related health information in their datasets — only professional and contact information about healthcare providers themselves.',
      },
      {
        heading: 'Key Metrics and Benchmarks',
        id: 'metrics',
        body: 'Understanding what "good" looks like in healthcare email marketing helps you calibrate expectations and identify optimization opportunities. Here are current 2025 benchmarks from our analysis of 500M+ healthcare emails:\n\nOpen Rates:\n• Industry average: 18–22%\n• Top performers using verified data: 38–45%\n• Subject line personalization lift: +24%\n\nClick-Through Rates:\n• Industry average: 2.8–4.2%\n• Top performers: 6.5–9.8%\n• Video thumbnail CTAs: +47% vs static email\n\nDeliverability:\n• Industry average: 84–88%\n• NPLUS Global verified lists: 97–99%\n• Bounce rate below 2% indicates healthy list\n\nConversions (meeting booked, sample requested, demo completed):\n• Industry average: 0.3–0.8%\n• Top performers with intent + email: 1.8–3.2%',
      },
      {
        heading: 'Proven Best Practices',
        id: 'best-practices',
        body: 'After analyzing 500M+ healthcare emails and working with 2,000+ medical organizations, these are the practices that consistently drive top performance:\n\n1. Send from a named individual, not a company. "Dr. Jones from MedCorp" outperforms "MedCorp Marketing Team" by 34% in open rates with physician audiences.\n\n2. Lead with clinical value, not product features. Physicians respond to patient outcomes and clinical evidence — not product specifications. Start every message with the patient benefit.\n\n3. Keep it short. Physicians spend an average of 11 seconds reading an email. Your message, CTA, and value proposition must land in the first 150 words.\n\n4. Use CME and educational hooks. Offering CME credit, clinical research summaries, or educational webinars dramatically outperforms promotional messaging.\n\n5. Time your sends strategically. Tuesday–Thursday, 6:00–8:00 AM or 7:00–9:00 PM local time consistently outperforms other windows for physician email.\n\n6. Follow up with value, not pressure. A 3-email sequence with increasing clinical depth outperforms a single promotional blast by 4.2x for healthcare audiences.',
      },
    ],
    relatedPosts: [
      { title: 'Physician Outreach Best Practices: What MedTech Gets Wrong', slug: 'physician-outreach-best-practices', category: 'Healthcare Intelligence' },
      { title: 'Healthcare Data Compliance: GDPR, HIPAA & CAN-SPAM in 2025', slug: 'healthcare-data-compliance-gdpr-hipaa', category: 'Healthcare Marketing' },
      { title: 'How Intent Data Reduces B2B Sales Cycle by 35%', slug: 'b2b-intent-data-strategies-2025', category: 'Intent Data' },
    ],
  },
  'b2b-intent-data-strategies-2025': {
    title: 'How Intent Data Reduces B2B Sales Cycle by 35%: Complete Guide',
    metaDesc: 'Enterprise sales teams using buyer intent signals close deals 35% faster. Discover the strategies, tools, and workflows that separate intent-driven sales from traditional outbound.',
    category: 'Intent Data',
    author: 'James Thurston',
    authorRole: 'B2B Revenue Strategist',
    authorBio: 'James Thurston is a B2B revenue strategy expert with 15+ years helping enterprise companies build data-driven sales pipelines across technology, healthcare, and financial services.',
    readTime: '6 min read',
    date: 'January 22, 2025',
    tags: ['Intent Data', 'B2B Sales', 'Pipeline', 'ABM'],
    toc: [
      { id: 'what-is-intent', label: 'What Is Intent Data?' },
      { id: 'types', label: 'Types of Intent Signals' },
      { id: 'implementation', label: 'Implementation Framework' },
      { id: 'workflows', label: 'Sales Workflows & Playbooks' },
      { id: 'roi', label: 'Measuring ROI' },
    ],
    content: [
      {
        heading: 'What Is Intent Data?',
        id: 'what-is-intent',
        body: 'Intent data captures digital behavior signals that indicate a company or individual is actively researching a problem, evaluating solutions, or moving toward a purchase decision. Unlike traditional firmographic data (company size, industry, revenue), intent data is dynamic — it tells you what accounts are doing right now, not just who they are.\n\nThe most sophisticated B2B revenue teams combine three data layers: who your ideal customers are (firmographics), what technology they use (technographics), and what they\'re actively researching (intent signals). This intelligence stack creates a complete picture that enables sales teams to focus effort on accounts with real, demonstrable purchase intent.',
      },
      {
        heading: 'Types of Intent Signals',
        id: 'types',
        body: 'Not all intent signals are created equal. Understanding signal quality and recency helps you prioritize correctly:\n\nFirst-Party Intent: The strongest signal. Website visitors, content downloads, demo requests, and pricing page views from your own properties indicate high purchase readiness. Pair with contact data to identify unknown visitors.\n\nThird-Party Intent: Behavioral data collected across publisher networks, review sites, and research platforms. Accounts consuming competitor content, reading industry analyst reports, or comparing solutions on G2 and Capterra are showing clear purchase intent.\n\nKeyword Intent: Search activity tracking identifies companies where employees are searching for your category keywords, brand name, or competitor terms. Extremely high-value for ABM campaigns.\n\nJob Posting Signals: A company posting for "Salesforce Administrator" signals a CRM implementation. "Head of Data Privacy" indicates compliance initiative spend. These hiring signals predict technology purchases 60-90 days in advance.\n\nFunding and Trigger Events: Series B funding, new executive hires, M&A activity, and geographic expansion all create buying windows. Monitor these triggers for time-sensitive outreach.',
      },
      {
        heading: 'Implementation Framework',
        id: 'implementation',
        body: 'Deploying intent data effectively requires a structured approach. Here is the four-phase framework used by enterprise teams achieving 35%+ cycle reduction:\n\nPhase 1 - Define Your Intent Topics (Week 1-2): Identify the 15-30 topics that indicate purchase intent for your solution category. Include your brand name, competitor names, category keywords, and problem-statement queries.\n\nPhase 2 - Build Your Target Account List (Week 2-3): Create your ideal customer profile (ICP) and build a target account list of 500-5,000 accounts that match firmographic and technographic criteria.\n\nPhase 3 - Establish Scoring Thresholds (Week 3-4): Define what constitutes a "surging" account. Typically, an account scoring above 70/100 on intent and showing activity on 3+ of your topics within a 2-week window is worth immediate outreach.\n\nPhase 4 - Sales Activation (Week 4+): Route surging accounts to sales with full context — which topics they researched, which contacts to target, and what messaging to use based on their specific research behavior.',
      },
      {
        heading: 'Sales Workflows & Playbooks',
        id: 'workflows',
        body: 'The best intent data is only as valuable as the sales workflow built around it. Here are the three most effective intent-driven sales playbooks:\n\nPlaybook 1 - The Warm Outbound: When a target account surges on your category topics, your SDR sends a highly personalized email referencing the challenge they\'re researching — without revealing that you\'re tracking their intent. "I noticed your team may be evaluating [category]..." converts 3.8x better than generic cold outreach.\n\nPlaybook 2 - The Competitive Intercept: When a target account surges on competitor brand names, deploy a competitive displacement sequence immediately. Timing is everything — accounts researching competitors have a 72-hour window of peak receptivity.\n\nPlaybook 3 - The Re-engagement: Intent data identifies customers who went dark but are now actively researching again. A well-timed re-engagement during an active research phase recovers 28% of stalled deals within 90 days.',
      },
      {
        heading: 'Measuring ROI',
        id: 'roi',
        body: 'Companies using intent data effectively report these improvements:\n\n• 35% reduction in average sales cycle length\n• 2.4x higher connect rates on outbound calls\n• 58% improvement in SDR productivity (same headcount, more pipeline)\n• 42% increase in win rate on competitive deals\n• 3.1x ROI on intent data investment within 6 months\n\nTo measure your own ROI, track: intent-influenced pipeline vs. non-intent pipeline, time-to-first-meeting for intent vs. cold outreach, and win rate for accounts showing high intent signals at point of first contact.',
      },
    ],
    relatedPosts: [
      { title: 'The Complete Guide to Healthcare Email Marketing in 2025', slug: 'healthcare-email-marketing-guide-2025', category: 'Healthcare Marketing' },
      { title: 'Technographic Data: The Secret Weapon for Competitive Displacement', slug: 'technographic-data-competitive-displacement', category: 'Technology Trends' },
      { title: 'Cold Email Deliverability in 2025: The Complete Technical Guide', slug: 'cold-email-deliverability-guide-2025', category: 'Email Marketing' },
    ],
  },
}

// Fallback for slugs not in the map
function generateFallbackPost(slug: string) {
  const title = slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return {
    title,
    metaDesc: `Expert insights on ${title} from the NPLUS Global data intelligence team.`,
    category: 'B2B Sales Intelligence',
    author: 'NPLUS Global Editorial Team',
    authorRole: 'Data Intelligence Experts',
    authorBio: 'The NPLUS Global editorial team consists of data scientists, marketing strategists, and go-to-market experts with decades of combined experience.',
    readTime: '7 min read',
    date: 'March 2025',
    tags: ['B2B Data', 'Marketing', 'Intelligence'],
    toc: [{ id: 'overview', label: 'Overview' }, { id: 'strategies', label: 'Key Strategies' }, { id: 'conclusion', label: 'Conclusion' }],
    content: [
      { heading: 'Overview', id: 'overview', body: `${title} is one of the most critical topics for enterprise go-to-market teams in 2025. This guide covers the strategies, tools, and best practices that leading organizations use to drive better results through intelligent data.` },
      { heading: 'Key Strategies', id: 'strategies', body: 'Successful data-driven campaigns combine verified contact data, intent intelligence, and personalized messaging. The organizations achieving the best results invest in data quality first, then build sophisticated targeting and personalization layers on top of that foundation.' },
      { heading: 'Conclusion', id: 'conclusion', body: 'The competitive advantage in modern B2B sales and marketing comes from data quality, speed, and precision. Organizations that invest in enterprise-grade data intelligence consistently outperform peers in pipeline generation, win rates, and revenue growth.' },
    ],
    relatedPosts: [
      { title: 'The Complete Guide to Healthcare Email Marketing in 2025', slug: 'healthcare-email-marketing-guide-2025', category: 'Healthcare Marketing' },
      { title: 'How Intent Data Reduces B2B Sales Cycle by 35%', slug: 'b2b-intent-data-strategies-2025', category: 'Intent Data' },
    ],
  }
}

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug] ?? generateFallbackPost(slug)
  return {
    title: `${post.title} | NPLUS Global Blog`,
    description: post.metaDesc,
    alternates: { canonical: `https://nplusglobal.com/blog/${slug}` },
    openGraph: { title: post.title, description: post.metaDesc, type: 'article' },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = blogPosts[slug] ?? generateFallbackPost(slug)

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient relative overflow-hidden py-16 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-6 flex-wrap">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-cyan-400">Blog</Link>
            <span>/</span>
            <span className="text-white/60 truncate max-w-xs">{post.title}</span>
          </nav>
          <span className="badge badge-cyan mb-4">{post.category}</span>
          <h1 className="font-display text-3xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-white/60 text-lg mb-6">{post.metaDesc}</p>
          <div className="flex items-center gap-5 text-sm text-white/45 flex-wrap">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {post.author.split(' ').map(n => n[0]).join('').slice(0,2)}
              </div>
              <span>{post.author} · {post.authorRole}</span>
            </span>
            <span className="flex items-center gap-1.5"><Clock size={13} />{post.readTime}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* TOC sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="glass rounded-xl p-5 border border-white/8 mb-5">
                  <h3 className="font-display font-bold text-white text-sm mb-3 flex items-center gap-2">
                    <BookOpen size={15} className="text-cyan-400" /> Table of Contents
                  </h3>
                  <nav className="space-y-1">
                    {post.toc.map((item) => (
                      <a key={item.id} href={`#${item.id}`} className="toc-link">
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="glass rounded-xl p-5 border border-white/8">
                  <h3 className="font-display font-bold text-white text-sm mb-3 flex items-center gap-2">
                    <Tag size={15} className="text-cyan-400" /> Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="badge badge-cyan text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main article */}
            <article className="lg:col-span-2 prose-dark">
              {post.content.map((section) => (
                <div key={section.id} id={section.id} className="mb-10 scroll-mt-28">
                  <h2 className="font-display text-2xl font-bold text-white mb-4">{section.heading}</h2>
                  {section.body.split('\n\n').map((para, i) => (
                    <p key={i} className="text-white/65 leading-relaxed mb-4 text-base">
                      {para}
                    </p>
                  ))}
                </div>
              ))}

              {/* Author card */}
              <div className="enterprise-card p-6 mt-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {post.author.split(' ').map(n => n[0]).join('').slice(0,2)}
                  </div>
                  <div>
                    <div className="font-display font-bold text-white">{post.author}</div>
                    <div className="text-cyan-400 text-sm mb-2">{post.authorRole}</div>
                    <p className="text-white/55 text-sm leading-relaxed">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Right sidebar - CTA form */}
            <aside>
              <div className="sticky top-28">
                <InquiryForm
                  title="Get Free Data Sample"
                  subtitle="Ready to power your campaigns with verified data?"
                  compact={true}
                  pageSource={`Blog: ${post.title}`}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-14 bg-navy-900/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-bold text-white text-2xl mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {post.relatedPosts.map((rp) => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`} className="enterprise-card p-5 group">
                <span className="badge badge-cyan text-xs mb-3 block w-fit">{rp.category}</span>
                <h3 className="font-display font-bold text-white text-base group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                  {rp.title}
                </h3>
                <span className="text-cyan-400 text-xs flex items-center gap-1 mt-2">
                  Read Article <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
