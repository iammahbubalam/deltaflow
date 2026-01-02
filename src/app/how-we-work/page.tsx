"use client"

import { PageHeader } from "@/components/layout/PageHeader"
import { CTABanner } from "@/components/layout/CTABanner"
import { ProcessTimeline } from "@/components/sections/ProcessTimeline"
import { process, faqs } from "@/lib/data"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ProcessPage() {
  const processFaqs = faqs.filter(f => f.category === "Process")

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
         {/* GOLDEN COSMIC BACKGROUND */}
         <div className="absolute inset-0 z-0">
            <Image 
                src="/images/generated/golden-helix.png" 
                alt="Golden Helix" 
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
         </div>

         <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <ScrollReveal>
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-amber-500/30 bg-black/30 backdrop-blur-md">
                    <span className="text-xs font-mono text-amber-300 tracking-widest uppercase">Methodology</span>
                </div>
                <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter mb-8 drop-shadow-[0_0_50px_rgba(251,191,36,0.5)]">
                    THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600">PROCESS</span>
                </h1>
                <p className="text-xl text-amber-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                    A rigorous 360° approach to engineering intelligence.
                </p>
            </ScrollReveal>
         </div>
         
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-amber-500/50">
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-amber-500" />
         </div>
      </section>
      
      <ProcessTimeline 
        phases={process.phases}
        showDetails={true}
      />

      <section className="bg-black py-32 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
             <div className="text-center mb-24">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Common <span className="text-amber-400">Questions</span></h2>
                <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
             </div>
          </ScrollReveal>
          
          <div className="grid gap-6">
            {processFaqs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        headline="Ready to start?"
        description="Book a discovery call to discuss your project requirements."
        primaryCTA="Schedule Discovery"
      />
    </>
  )
}

function FAQItem({ faq, index }: { faq: any, index: number }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <ScrollReveal delay={index * 0.1}>
            <div 
                className={cn(
                    "group rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer",
                    isOpen 
                        ? "bg-white/10 border-amber-500/50 shadow-[0_0_30px_rgba(251,191,36,0.1)]" 
                        : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="p-6 md:p-8 flex items-start justify-between gap-4">
                    <h3 className={cn(
                        "text-lg md:text-xl font-bold transition-colors",
                        isOpen ? "text-white" : "text-white/80 group-hover:text-white"
                    )}>
                        {faq.question}
                    </h3>
                    <div className={cn(
                        "flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center border transition-all duration-300",
                        isOpen 
                            ? "bg-amber-500 text-black border-amber-500 rotate-180" 
                            : "border-white/20 text-white group-hover:border-white"
                    )}>
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                </div>
                
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                                <p className="text-amber-100/70 leading-relaxed text-base border-t border-white/10 pt-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ScrollReveal>
    )
}
