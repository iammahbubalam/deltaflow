"use client"

import { useState } from "react"
import { GlowingOrbs } from "@/components/animations/GlowingOrbs"
import { CTABanner } from "@/components/layout/CTABanner"
import { portfolio } from "@/lib/data"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowUpRight, Plus, ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const filters = ["All", "Financial Services", "Healthcare", "Retail", "Technology"]

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [activeProject, setActiveProject] = useState<string | null>(null)

  const filteredProjects = activeFilter === "All"
    ? portfolio
    : portfolio.filter(p => p.industry === activeFilter)

  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Banner */}
        <div className="absolute inset-0 z-0">
            <Image 
                src="/images/generated/cosmic-glass-2.png" 
                alt="Portfolio Banner" 
                fill
                className="object-cover opacity-50"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-black/20" /> {/* Dimmer */}
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
           <ScrollReveal>
              <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-6">
                WORK
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                A collection of deployed intelligence and engineered systems.
              </p>
           </ScrollReveal>
        </div>
      </section>

      <section className="bg-black py-24 min-h-screen relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-20 justify-center">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm",
                            activeFilter === filter
                                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                : "bg-white/5 text-[--color-gray-400] border-white/10 hover:border-white/30 hover:bg-white/10"
                        )}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Cinematic Expansion List */}
            <div className="space-y-4">
                {filteredProjects.map((project) => (
                    <motion.div
                        layout
                        key={project.id}
                        className={cn(
                            "relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 cursor-pointer group",
                            activeProject === project.id ? "h-[60vh] border-white/30 ring-1 ring-white/30" : "h-32 hover:border-white/20 hover:bg-white/5"
                        )}
                        onMouseEnter={() => setActiveProject(project.id)}
                        onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                    >
                        {/* Background Image (Reveals on Hover) */}
                        <div className={cn(
                            "absolute inset-0 transition-opacity duration-700 ease-out",
                            activeProject === project.id ? "opacity-100" : "opacity-0"
                        )}>
                             <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
                             <Image 
                                src={project.image || "/images/generated/cosmic-glass-1.jpg"} 
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-[10s] ease-linear scale-100 group-hover:scale-110"
                             />
                        </div>

                        {/* Content Container */}
                        <div className="relative z-20 h-full p-8 md:p-12 flex flex-col justify-between">
                            
                            {/* Header Row */}
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <span className={cn(
                                        "font-mono text-xs uppercase tracking-wider transition-colors duration-300",
                                        activeProject === project.id ? "text-[--brand-green]" : "text-[--color-gray-500]"
                                    )}>
                                        [{project.industry}]
                                    </span>
                                    <h3 className={cn(
                                        "font-bold text-white transition-all duration-500",
                                        activeProject === project.id ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl text-[--color-gray-300] group-hover:text-white"
                                    )}>
                                        {project.title}
                                    </h3>
                                </div>
                                
                                <div className={cn(
                                    "transition-all duration-500 transform",
                                    activeProject === project.id ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
                                )}>
                                    <Plus className="h-6 w-6 text-white/30" />
                                </div>
                            </div>

                            {/* Expanded Details */}
                            <div className={cn(
                                "grid md:grid-cols-2 gap-12 transition-all duration-700 delay-100",
                                activeProject === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 absolute bottom-0 left-0 right-0 p-12 pointer-events-none"
                            )}>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-sm font-bold text-white/50 mb-2 uppercase tracking-wide">Challenge</h4>
                                        <p className="text-lg text-[--color-gray-200] leading-relaxed">
                                            {project.challenge}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map(tech => (
                                            <span key={tech} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between items-start md:items-end">
                                    <div className="grid grid-cols-2 gap-8 mb-8">
                                        {project.results?.slice(0,2).map((res, i) => (
                                            <div key={i} className="text-left md:text-right">
                                                <div className="text-4xl font-bold text-white mb-1">{res.metric}</div>
                                                <div className="text-xs font-mono text-[--brand-green] uppercase">{res.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <Link 
                                        href={`/work/${project.id}`}
                                        className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-[--brand-green] transition-colors"
                                    >
                                        <span>View Case Study</span>
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <CTABanner 
        headline="Ready for similar results?"
        description="Let's build a success story for your business."
        primaryCTA="Start Your Project"
      />
    </>
  )
}
