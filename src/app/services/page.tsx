"use client"

import { NeuralBackground } from "@/components/animations/NeuralBackground"
import { CTABanner } from "@/components/layout/CTABanner"
import { services } from "@/lib/data"
import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <>
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <NeuralBackground />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
           <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
                ENGINEERING <span className="text-[--brand-green] block mt-2">INTELLIGENCE</span>
              </h1>
              <p className="text-lg md:text-xl text-[--color-gray-400] max-w-2xl mx-auto font-mono">
                Deploying advanced neural architectures for enterprise-grade scalability.
              </p>
           </ScrollReveal>
        </div>
      </div>
      
      <section className="bg-black py-24 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
              <span className="font-mono text-[--brand-green] text-sm">Orbit // Services</span>
              <span className="font-mono text-[--color-gray-500] text-sm">System Status: Operational</span>
           </div>

           <div className="space-y-px bg-white/10 border border-white/10">
             {services.map((service, index) => (
               <div 
                  key={service.id}
                  className={cn(
                    "group relative overflow-hidden transition-all duration-500 border-l-2",
                    activeService === service.id 
                        ? "bg-white/[0.02] border-[--brand-green]" 
                        : "bg-black border-transparent hover:border-white/20 hover:bg-white/[0.01]"
                  )}
                  onMouseEnter={() => setActiveService(service.id)}
               >
                  {/* Active State Glow */}
                  {activeService === service.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[--brand-green]/5 to-transparent pointer-events-none" />
                  )}

                  <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 md:items-start relative z-10">
                    <div className="md:w-32 flex-shrink-0 pt-2">
                       <span className={cn(
                         "font-mono text-4xl font-bold transition-all duration-500 block",
                         activeService === service.id 
                            ? "text-[--brand-green] scale-110 translate-x-2" 
                            : "text-white/20 group-hover:text-white/40"
                       )}>
                          {(index + 1).toString().padStart(2, '0')}
                       </span>
                    </div>
                    
                    <div className="flex-1">
                       <h3 className={cn(
                         "text-3xl md:text-5xl font-bold text-white mb-4 transition-all duration-300",
                         activeService === service.id ? "tracking-tight" : "tracking-tight"
                       )}>
                          {service.name}
                       </h3>
                       <p className="text-lg md:text-xl text-[--color-gray-400] max-w-2xl mb-8 font-light">
                          {service.tagline}
                       </p>

                       <div className={cn(
                          "grid transition-all duration-500 ease-in-out overflow-hidden",
                          activeService === service.id ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0"
                       )}>
                          <div className="min-h-0 border-t border-dashed border-white/20 pt-8">
                             <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                   <div className="flex items-center gap-2 mb-6 text-[--brand-green]">
                                      <div className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                                      <h4 className="font-mono text-sm uppercase tracking-wider">Capabilities</h4>
                                   </div>
                                   <ul className="space-y-3">
                                      {service.benefits.map((benefit, i) => (
                                         <li key={benefit} className="flex items-center text-[--color-gray-300] group/item">
                                            <span className="font-mono text-[--brand-green]/50 mr-3 text-xs">0{i+1}</span>
                                            {benefit}
                                         </li>
                                      ))}
                                   </ul>
                                </div>
                                <div className="relative">
                                   {/* Decorative corner */}
                                   <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-white/30" />
                                   
                                   <h4 className="font-mono text-sm uppercase tracking-wider text-[--brand-green] mb-6">Execution Protocol</h4>
                                   <p className="text-[--color-gray-400] leading-relaxed mb-8">
                                      {service.longDescription}
                                   </p>
                                   <Link 
                                      href={`/services/${service.slug}`} 
                                      className="inline-flex items-center group/btn text-white"
                                   >
                                      <span className="border-b border-[--brand-green] pb-1 transition-all group-hover/btn:border-white">
                                        Initialize Protocol
                                      </span>
                                      <ArrowRight className="ml-3 h-4 w-4 text-[--brand-green] transition-transform group-hover/btn:translate-x-1" />
                                   </Link>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="hidden md:block pt-3">
                        <Plus className={cn(
                           "h-6 w-6 text-white/20 transition-all duration-500",
                           activeService === service.id ? "rotate-45 text-[--brand-green] scale-125" : ""
                        )} />
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      <CTABanner 
        headline="Ready to Deploy?"
        description="Initiate your AI transformation sequence today."
        primaryCTA="Start Project"
        secondaryCTA="View Case Studies"
        secondaryHref="/work"
      />
    </>
  )
}
