interface SectionHeaderProps {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
  badgeVariant?: 'cyan' | 'blue'
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  badgeVariant = 'cyan',
}: SectionHeaderProps) {
  const parts = highlight ? title.split(highlight) : [title]

  return (
    <div className={centered ? 'text-center' : ''}>
      {badge && (
        <span className={`badge badge-${badgeVariant} mb-4 ${centered ? 'mx-auto' : ''} block w-fit`}>
          {badge}
        </span>
      )}
      <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>
      {subtitle && (
        <p className={`text-white/55 text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
