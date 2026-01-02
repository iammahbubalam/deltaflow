"use client"

import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee"

interface TechMarqueeProps {
  headline: string
  technologies: Array<{ id: string; name: string }>
}

export function TechMarquee({ headline, technologies }: TechMarqueeProps) {
  return (
    <section className="bg-black py-20 border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
         <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            {headline}
         </h3>
         <p className="text-[--color-gray-400] text-sm md:text-base max-w-2xl mx-auto">
            Our engineering team builds with the world's most advanced AI and cloud infrastructure tools.
         </p>
      </div>

      <div className="relative">
        {/* Gradients for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <InfiniteMarquee speed="slow" direction="left">
          {technologies.map((tech) => (
             <div 
               key={tech.id} 
               className="group relative mx-4 w-[180px] h-[80px] flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[--brand-green]/30 transition-all duration-300 cursor-default backdrop-blur-sm"
             >
               {/* Tech accent */}
               <div className="absolute top-2 right-2 h-1 w-1 rounded-full bg-white/20 group-hover:bg-[--brand-green] transition-colors" />

               <span className="text-lg font-mono font-medium text-white/70 group-hover:text-white transition-colors">
                  {tech.name}
               </span>
             </div>
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  )
}
