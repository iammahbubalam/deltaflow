import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee"

interface ClientLogosProps {
  headline: string
  logos: Array<{ name: string; logo: string; id: string }>
}

export function ClientLogos({ headline, logos }: ClientLogosProps) {
  return (
    <section className="bg-black py-16 border-b border-white/5">
      <div className="text-center mb-10">
        <p className="text-sm font-mono text-[--color-gray-500] uppercase tracking-widest">
          {headline}
        </p>
      </div>

      <InfiniteMarquee speed="normal" direction="left">
        {logos.map((client) => (
           <div 
             key={client.id} 
             className="relative w-[150px] h-[60px] flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity duration-300"
           >
             {/* Text Fallback for now, styled nicely */}
             <span className="text-xl font-bold font-mono text-white/80">{client.name}</span>
           </div>
        ))}
      </InfiniteMarquee>
    </section>
  )
}
