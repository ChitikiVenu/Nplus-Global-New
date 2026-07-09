import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: 'Home', href: '/' }, ...items]

  return (
    <>
      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: allItems.map((item, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: item.label,
              ...(item.href && { item: `https://nplusglobal.com${item.href}` }),
            })),
          }),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-xs text-white/40 flex-wrap"
      >
        {allItems.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i === 0 && <Home size={11} />}
            {item.href && i < allItems.length - 1 ? (
              <Link href={item.href} className="hover:text-cyan-400 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={i === allItems.length - 1 ? 'text-white/70' : ''}>
                {item.label}
              </span>
            )}
            {i < allItems.length - 1 && <ChevronRight size={11} />}
          </span>
        ))}
      </nav>
    </>
  )
}
