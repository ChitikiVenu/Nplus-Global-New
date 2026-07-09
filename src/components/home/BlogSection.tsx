import Link from 'next/link'
import { ArrowRight, Clock, User } from 'lucide-react'

const posts = [
  {
    slug: 'healthcare-email-marketing-guide-2024',
    title: 'The Complete Guide to Healthcare Email Marketing in 2025',
    excerpt: 'Learn how leading medical device and pharma companies use verified physician data to achieve 40%+ open rates and 3x industry benchmark conversions.',
    category: 'Healthcare Marketing',
    author: 'Dr. Sarah Mills',
    readTime: '8 min read',
    date: 'Jan 15, 2025',
    color: 'from-rose-500/20 to-pink-600/10',
    border: 'border-rose-500/20',
    tag: 'Healthcare',
  },
  {
    slug: 'b2b-intent-data-strategies',
    title: 'How Intent Data Reduces B2B Sales Cycle by 35%',
    excerpt: 'Discover how enterprise sales teams use buyer intent signals to prioritize outreach, personalize messaging, and close deals faster than competitors.',
    category: 'Intent Data',
    author: 'James Thurston',
    readTime: '6 min read',
    date: 'Jan 22, 2025',
    color: 'from-cyan-500/20 to-blue-600/10',
    border: 'border-cyan-500/20',
    tag: 'B2B Sales',
  },
  {
    slug: 'technographic-data-competitive-displacement',
    title: 'Technographic Data: The Secret Weapon for Competitive Displacement',
    excerpt: "How knowing your prospects' exact technology stack helps you craft perfectly-timed displacement campaigns with 4x higher win rates.",
    category: 'Technology Intelligence',
    author: 'Linda Chen',
    readTime: '7 min read',
    date: 'Feb 3, 2025',
    color: 'from-purple-500/20 to-indigo-600/10',
    border: 'border-purple-500/20',
    tag: 'Technology',
  },
]

export default function BlogSection() {
  return (
    <section className="section-padding bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="badge badge-blue mb-4 block w-fit">Data Intelligence Blog</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Insights &{' '}
              <span className="gradient-text">Expert Resources</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:gap-3 transition-all"
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`enterprise-card overflow-hidden group bg-gradient-to-br ${post.color} border ${post.border} flex flex-col`}
            >
              <div className="p-6 flex flex-col flex-1">
                <span className="badge badge-cyan mb-4 w-fit text-xs">{post.tag}</span>
                <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-white/35 border-t border-white/8 pt-4">
                  <span className="flex items-center gap-1.5">
                    <User size={12} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                  <span className="ml-auto">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/blog" className="btn-outline inline-flex items-center gap-2">
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
