interface StatsProps {
  headline: string
  stats: Array<{ value: string; label: string }>
  animated?: boolean
}

export function Stats({ headline, stats }: StatsProps) {
  return (
    <section className="bg-[--brand-dark-green] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-lg font-semibold text-[--brand-green] tracking-wide uppercase mb-12">
          {headline}
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-4xl font-extrabold text-white sm:text-5xl mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-[--color-gray-400]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
