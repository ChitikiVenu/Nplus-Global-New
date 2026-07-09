'use client'

import Link from 'next/link'
import { ArrowRight, Calendar, Shield, Globe, Zap, Database, BriefcaseBusiness, ChartNoAxesColumnIncreasing, HeartPulse, MonitorCheck } from 'lucide-react'

const floatingCards = [
  { icon: HeartPulse, label: '18M+', sub: 'Healthcare Pros', border: 'border-sky-300/20', delay: '0s' },
  { icon: BriefcaseBusiness, label: '140M+', sub: 'Decision Makers', border: 'border-blue-300/20', delay: '2s' },
  { icon: ChartNoAxesColumnIncreasing, label: '98%', sub: 'Deliverability', border: 'border-emerald-300/20', delay: '4s' },
  { icon: Globe, label: '210+', sub: 'Countries', border: 'border-slate-300/20', delay: '1s' },
]

const trustBadges = [
  { icon: Shield, label: 'GDPR Compliant' },
  { icon: Globe, label: '210+ Countries' },
  { icon: Zap, label: '24hr Delivery' },
  { icon: Database, label: '150+ Attributes' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-hero-gradient">
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-0 bg-cyan-glow" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/12" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 badge badge-cyan mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Enterprise Data Intelligence Platform
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-[4.65rem] font-semibold text-white leading-[1.06] mb-6">
              Verified healthcare and B2B intelligence for enterprise growth
            </h1>

            <p className="text-slate-200/78 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
              Access <strong className="text-white">950M+ Global B2B Contacts</strong>,{' '}
              <strong className="text-white">140M+ Decision Makers</strong>,{' '}
              <strong className="text-white">18M+ Healthcare Professionals</strong>, and{' '}
              <strong className="text-white">20M+ Technology Users</strong> with enterprise-grade
              verified intelligence built for modern go-to-market teams.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact"
                className="btn-primary flex items-center justify-center gap-2.5 text-base px-8 py-4"
              >
                Request Free Sample
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact#book"
                className="btn-outline flex items-center justify-center gap-2.5 text-base px-8 py-4"
              >
                <Calendar size={18} />
                Book Consultation
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-slate-300/70 text-sm"
                >
                  <Icon size={14} className="text-sky-300" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Dashboard visualization */}
          <div className="relative lg:block hidden">
            {/* Main dashboard card */}
            <div className="relative glass rounded-lg p-6 border border-white/10 shadow-2xl">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-xs text-white/40 font-mono uppercase tracking-wider mb-1">
                    Data Intelligence Console
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg">NPLUS Analytics</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-mono">LIVE</span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: 'Total Contacts', value: '950M+', change: '+12%', color: 'text-cyan-400' },
                  { label: 'Healthcare Pros', value: '18M+', change: '+8%', color: 'text-blue-400' },
                  { label: 'Decision Makers', value: '140M+', change: '+15%', color: 'text-purple-400' },
                  { label: 'Deliverability', value: '98%', change: '+2%', color: 'text-green-400' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/[0.045] rounded-lg p-4 border border-white/8"
                  >
                    <div className="text-white/40 text-xs mb-1">{stat.label}</div>
                    <div className={`font-display font-semibold text-xl ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-green-400 text-xs mt-1">↑ {stat.change} YoY</div>
                  </div>
                ))}
              </div>

              {/* Mini bar chart */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/40 text-xs">Data Coverage by Region</span>
                  <span className="text-cyan-400 text-xs">Real-time</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'North America', pct: 85 },
                    { label: 'Europe', pct: 78 },
                    { label: 'Asia Pacific', pct: 65 },
                    { label: 'MENA', pct: 52 },
                  ].map((region) => (
                    <div key={region.label} className="flex items-center gap-3">
                      <span className="text-white/40 text-xs w-28 flex-shrink-0">{region.label}</span>
                      <div className="flex-1 bg-white/5 rounded-full h-1.5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                          style={{ width: `${region.pct}%` }}
                        />
                      </div>
                      <span className="text-white/50 text-xs w-8 text-right">{region.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div>
                <div className="text-white/40 text-xs mb-2">Recent Verifications</div>
                <div className="space-y-1.5">
                  {[
                    { icon: HeartPulse, name: 'Cardiologist Records Verified', count: '2,450', time: '2m ago' },
                    { icon: BriefcaseBusiness, name: 'CFO Database Updated', count: '1,820', time: '5m ago' },
                    { icon: MonitorCheck, name: 'Salesforce Users Refreshed', count: '5,600', time: '8m ago' },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 p-2 rounded-md bg-white/[0.035] text-xs"
                    >
                      <item.icon size={14} className="text-sky-300" />
                      <span className="text-white/60 flex-1">{item.name}</span>
                      <span className="text-cyan-400 font-mono">+{item.count}</span>
                      <span className="text-white/30">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            {floatingCards.map((card) => (
              <div
                key={card.label}
                className={`absolute glass rounded-lg px-4 py-3 border ${card.border} shadow-xl`}
                style={{
                  animation: `float ${6 + parseInt(card.delay)}s ease-in-out infinite`,
                  animationDelay: card.delay,
                  ...(card.label === '18M+' && { top: '-32px', right: '-24px' }),
                  ...(card.label === '140M+' && { bottom: '-24px', left: '-32px' }),
                  ...(card.label === '98%' && { top: '50%', right: '-48px' }),
                  ...(card.label === '210+' && { top: '30%', left: '-40px' }),
                }}
              >
                <div className="flex items-center gap-2 text-lg font-display font-semibold text-white">
                  <card.icon size={17} className="text-sky-300" />
                  {card.label}
                </div>
                <div className="text-white/55 text-xs">{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
