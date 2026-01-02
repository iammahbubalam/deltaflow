import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee"

interface ClientLogosProps {
  headline: string
  logos: Array<{ name: string; logo: string; id: string }>
}

export function ClientLogos({ headline, logos }: ClientLogosProps) {
  return (
    <section className="bg-black py-20 border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
         <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Powering Innovation for Industry Leaders
         </h3>
         <p className="text-[--color-gray-400] text-sm md:text-base max-w-2xl mx-auto">
            Trusted by forward-thinking companies to deliver mission-critical AI solutions.
         </p>
      </div>

      <div className="relative">
        {/* Gradients for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <InfiniteMarquee speed="slow" direction="left">
          {logos.map((client) => (
             <div 
               key={client.id} 
               className="group relative mx-6 w-[200px] h-[100px] flex items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[--brand-green]/20 transition-all duration-500 cursor-pointer"
             >
               {/* Tech corner accents */}
               <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-white/10 group-hover:border-[--brand-green]/50 transition-colors" />
               <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-white/10 group-hover:border-[--brand-green]/50 transition-colors" />

               <span className="text-xl font-bold font-mono text-white/40 group-hover:text-white transition-colors duration-300">
                  {client.name}
               </span>
             </div>
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  )
}
