"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

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
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="bg-black py-24 sm:py-32" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              {headline || "Our Process"}
            </h2>
            <p className="text-xl text-[--color-gray-400]">
              {description || "A proven methodology for delivering success."}
            </p>
          </ScrollReveal>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* BEAM SCROLL LINE */}
          <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-white/10 md:left-1/2 md:-ml-[1px] z-0" />
          <motion.div 
             style={{ height }}
             className="absolute left-[28px] top-0 w-[2px] bg-gradient-to-b from-[--brand-green] via-[--brand-green] to-transparent md:left-1/2 md:-ml-[1px] shadow-[0_0_20px_#22c55e] z-10"
          />

          <div className="space-y-20">
            {phases.map((phase, index) => (
              <div key={phase.name} className={cn("relative flex items-center md:justify-between", 
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                
                {/* Center Node */}
                <div className="absolute left-[14px] top-8 -ml-[15px] h-[30px] w-[30px] rounded-full border-4 border-black bg-[--color-gray-100] md:left-1/2 md:-ml-[15px] z-20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[--brand-green] animate-pulse" />
                </div>

                {/* Content Card */}
                <div className={cn("ml-20 md:ml-0 md:w-[45%]", 
                  index % 2 === 0 ? "" : ""
                )}>
                  <ScrollReveal delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                     <div className="relative group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-[--brand-green]/30 transition-all duration-300">
                        {/* Glowing corner accent */}
                        <div className="absolute -top-1 -right-1 h-3 w-3 bg-[--brand-green] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#22c55e]" />

                        <div className="flex items-center gap-3 mb-4">
                           <span className="text-4xl font-mono font-bold text-white/10 group-hover:text-[--brand-green]/20 transition-colors">
                              {phase.number}
                           </span>
                           <div className="h-px flex-1 bg-white/10" />
                           <span className="text-xs font-mono text-[--brand-green] uppercase tracking-wider bg-[--brand-green]/10 px-2 py-1 rounded">
                              {phase.duration}
                           </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3">
                           {phase.name}
                        </h3>
                        <p className="text-[--color-gray-400] leading-relaxed">
                           {phase.description}
                        </p>

                        {showDetails && phase.activities && (
                            <ul className="mt-6 space-y-2 border-t border-white/5 pt-6">
                                {phase.activities.map(activity => (
                                    <li key={activity} className="flex items-start gap-2 text-sm text-[--color-gray-400]">
                                        <div className="mt-1.5 h-1 w-1 rounded-full bg-[--brand-green]" />
                                        {activity}
                                    </li>
                                ))}
                            </ul>
                        )}
                     </div>
                  </ScrollReveal>
                </div>

                {/* Empty Side for Balance */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
