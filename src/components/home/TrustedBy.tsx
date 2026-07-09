export default function TrustedBy() {
  const companies = [
    'Pfizer', 'Johnson & Johnson', 'Abbott', 'Medtronic', 'Salesforce', 
    'Oracle', 'Microsoft', 'IBM', 'Siemens Health', 'GE Healthcare',
    'Becton Dickinson', 'Boston Scientific'
  ]

  return (
    <section className="py-14 bg-navy-900/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
          Trusted by 5,000+ Enterprise Organizations Worldwide
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center py-3 px-4 rounded-xl bg-white/3 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-300 group"
            >
              <span className="font-display font-semibold text-white/35 group-hover:text-white/55 transition-colors text-xs text-center leading-tight">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
