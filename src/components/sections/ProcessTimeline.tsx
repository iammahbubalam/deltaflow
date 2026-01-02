import { cn } from "@/lib/utils"

interface Phase {
  number: string
  name: string
  duration: string
  description: string
  activities?: string[]
  deliverables?: string[]
}

interface ProcessTimelineProps {
  headline?: string
  description?: string
  phases: Phase[]
  showDetails?: boolean
}

export function ProcessTimeline({ headline, description, phases, showDetails = false }: ProcessTimelineProps) {
  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(headline || description) && (
          <div className="mx-auto max-w-2xl text-center mb-16">
            {headline && (
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-4">
                {headline}
              </h2>
            )}
            {description && (
              <p className="text-lg text-[--color-gray-400]">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-[--color-gray-200] md:left-1/2 md:-ml-0.5 opacity-20" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={phase.name} className={cn("relative flex flex-col md:flex-row gap-8", 
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 mt-1.5 h-10 w-10 flex items-center justify-center rounded-full border-4 border-black bg-[--brand-green] text-black font-bold md:left-1/2 md:-ml-5 z-10 shadow-sm shadow-[--brand-green]/20">
                  {index + 1}
                </div>

                {/* Content Side */}
                <div className={cn("ml-16 md:ml-0 md:w-1/2", 
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                )}>
                  <div className={cn("bg-[--color-gray-50] p-6 rounded-2xl border border-[--color-gray-200] hover:border-[--brand-green]/50 transition-colors",
                     index % 2 === 0 ? "md:mr-5" : "md:ml-5" // Spacing from center line
                  )}>
                    <div className={cn("flex items-center gap-2 mb-2", 
                      index % 2 === 0 ? "md:justify-end" : ""
                    )}>
                      <span className="text-xs font-mono font-bold text-[--brand-green] uppercase tracking-wider">{phase.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{phase.name}</h3>
                    <p className="text-[--color-gray-400] mb-4">{phase.description}</p>
                    
                    {showDetails && phase.activities && (
                      <div className="mt-4 pt-4 border-t border-[--color-gray-200]">
                        <h4 className="text-sm font-semibold text-white mb-2">Activities</h4>
                        <ul className={cn("list-disc pl-4 text-sm text-[--color-gray-400] space-y-1",
                          index % 2 === 0 ? "md:mr-4 md:rtl" : "" // RTL for list logic is tricky, simple alignment is better
                        )}>
                           {/* Revert align for list in right-aligned card? Actually keeping lists left aligned is usually better for readability even in right blocks, or right align text but list bullets are tricky. Let's keep distinct text alignment. */}
                           {phase.activities.map(a => <li key={a} className={index % 2 === 0 ? "md:text-right md:list-none" : ""}>{a}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty Side for Desktop layout balance */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
