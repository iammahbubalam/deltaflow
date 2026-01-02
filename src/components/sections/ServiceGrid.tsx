import Link from "next/link"
import { Card } from "@/components/ui/Card"
import { DynamicIcon } from "@/components/ui/DynamicIcon"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

interface ServiceGridProps {
  headline: string
  description: string
  services: Array<{
    icon: string
    title: string
    description: string
    link: string
  }>
}

export function ServiceGrid({ headline, description, services }: ServiceGridProps) {
  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
        <ScrollReveal width="100%">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-4">
            {headline}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[--color-gray-400]">
            {description}
          </p>
        </ScrollReveal>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1} className="h-full">
              <Card className="flex flex-col items-start text-left group h-full border border-white/5 bg-white/5 hover:border-[--brand-green]/30 transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-[--brand-green]/10 flex items-center justify-center text-[--brand-green] mb-6 transition-colors group-hover:bg-[--brand-green] group-hover:text-white">
                  <DynamicIcon name={service.icon} size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[--brand-green] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[--color-gray-400] mb-6 flex-grow">
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-sm font-semibold text-[--brand-green] group-hover:translate-x-1 transition-transform"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
