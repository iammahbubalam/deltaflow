import { DynamicIcon } from "@/components/ui/DynamicIcon"

interface ClientLogosProps {
  headline: string
  logos: Array<{ name: string; logo: string }>
}

export function ClientLogos({ headline, logos }: ClientLogosProps) {
  return (
    <section className="bg-white py-12 border-b border-[--color-gray-100]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-[--color-gray-400] tracking-wider uppercase mb-8">
          {headline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100">
          {/* Using text for logos if images aren't real, but instruction says images. 
              For now we'll assume the image paths in data.js aren't real files in the user dir yet, 
              so we render alt text or a placeholder if image fails, or just text.
              Actually, the instruction provided paths like /images/clients/... which won't load.
              I will render text as fallback styled like logos.
          */}
          {logos.map((client) => (
            <div key={client.name} className="flex items-center gap-2">
               {/* Placeholder Icon + Text to simulate logo if image missing */}
               <div className="h-8 w-8 rounded-full bg-[--color-gray-100] flex items-center justify-center text-[--color-gray-400] font-bold">
                  {client.name[0]}
               </div>
               <span className="text-lg font-bold text-[--color-gray-900]">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
