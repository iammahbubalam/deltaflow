"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

interface Phase {
  number: string
  name: string
  description: string
  activities?: string[]
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

  // Smooth out the progress for fluid animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const height = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="bg-black py-32 relative perspective-[2000px] overflow-hidden" ref={containerRef}>
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
             <div className="text-center mb-32">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-amber-100 to-amber-600 mb-6 drop-shadow-[0_0_25px_rgba(251,191,36,0.3)]">
                    {headline || "EVOLUTION ARCHITECTURE"}
                </h2>
                <p className="text-xl text-amber-100/60 max-w-2xl mx-auto font-light">
                    {description || "A structured metamorphosis from concept to reality."}
                </p>
             </div>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* GOLDEN BEAM */}
          <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-white/5 md:left-1/2 md:-ml-[1px] z-0" />
          <motion.div 
             style={{ height }}
             className="absolute left-[28px] top-0 w-[2px] bg-gradient-to-b from-amber-400 via-yellow-200 to-transparent md:left-1/2 md:-ml-[1px] shadow-[0_0_30px_#fbbf24] z-10"
          />

          <div className="space-y-40 perspective-[1000px]">
            {phases.map((phase, index) => (
              <TimelineNode 
                key={phase.name} 
                phase={phase} 
                index={index} 
                showDetails={showDetails} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineNode({ phase, index, showDetails }: { phase: Phase, index: number, showDetails: boolean }) {
    const nodeRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: nodeRef,
        offset: ["start end", "center center"]
    })

    const isEven = index % 2 === 0
    
    // 3D Rotation Effect
    const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0])
    const rotateY = useTransform(scrollYProgress, [0, 1], isEven ? [-45, 0] : [45, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])

    return (
        <div ref={nodeRef} className={cn("relative flex items-center md:justify-between perspective-[1000px]", 
            isEven ? "md:flex-row-reverse" : ""
        )}>
            {/* Center Node Orb */}
            <div className="absolute left-[14px] top-1/2 -translate-y-1/2 -ml-[11px] h-[22px] w-[22px] rounded-full border-2 border-amber-500/50 bg-black md:left-1/2 md:-ml-[11px] z-20 flex items-center justify-center shadow-[0_0_15px_#fbbf24]">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-200 animate-pulse" />
            </div>

            {/* Connecting Line (Horizontal) */}
            <div className={cn("hidden md:block absolute top-1/2 h-[1px] w-20 bg-gradient-to-r from-amber-500/50 to-transparent",
                isEven ? "right-1/2" : "left-1/2"
            )} />

            {/* 3D Card */}
            <motion.div 
                style={{ 
                    rotateX, 
                    rotateY, 
                    scale, 
                    opacity 
                }}
                className={cn("ml-20 md:ml-0 md:w-[46%] transform-gpu")}
            >
                <div className="relative group p-1 backdrop-blur-sm rounded-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 hover:border-amber-500/50 transition-all duration-500 shadow-2xl">
                    <div className="bg-black/60 rounded-xl p-8 h-full relative overflow-hidden backdrop-blur-md">
                        
                        {/* Golden sheen */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10 group-hover:from-amber-400/80 transition-all duration-500">
                                    {phase.number}
                                </span>
                                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors">
                                    <div className="h-2 w-2 rounded-sm bg-amber-500/70" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-100 transition-colors">
                                {phase.name}
                            </h3>
                            <p className="text-white/80 leading-relaxed text-sm">
                                {phase.description}
                            </p>

                            {showDetails && phase.activities && (
                                <div className="mt-6 pt-6 border-t border-white/5 space-y-2">
                                    {phase.activities.slice(0, 3).map(activity => (
                                        <div key={activity} className="flex items-center gap-3 text-xs text-white/40 group-hover:text-amber-100/60 transition-colors font-mono uppercase tracking-wide">
                                            <div className="h-[1px] w-3 bg-amber-500/50" />
                                            {activity}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Empty Side */}
            <div className="hidden md:block md:w-[42%]" />
        </div>
    )
}
