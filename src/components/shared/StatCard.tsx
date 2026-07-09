import AnimatedCounter from './AnimatedCounter'

interface StatCardProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  sublabel?: string
  color?: string
  icon?: string
  decimals?: number
}

export default function StatCard({
  value,
  suffix = '',
  prefix = '',
  label,
  sublabel,
  color = 'text-cyan-400',
  icon,
  decimals = 0,
}: StatCardProps) {
  return (
    <div className="enterprise-card p-6 text-center stat-card group">
      {icon && <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{icon}</div>}
      <div className={`font-display font-extrabold text-3xl lg:text-4xl ${color} mb-1`}>
        <AnimatedCounter end={value} suffix={suffix} prefix={prefix} decimals={decimals} duration={2200} />
      </div>
      <div className="font-display font-semibold text-white text-sm mb-0.5">{label}</div>
      {sublabel && <div className="text-white/40 text-xs">{sublabel}</div>}
    </div>
  )
}
