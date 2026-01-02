import Link from "next/link"
import { Card } from "@/components/ui/Card"
import { DynamicIcon } from "@/components/ui/DynamicIcon"
import { ArrowRight } from "lucide-react"

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
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-[--color-gray-900] sm:text-4xl mb-4">
          {headline}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-[--color-gray-400]">
          {description}
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-start text-left group">
              <div className="h-12 w-12 rounded-lg bg-[--brand-green]/10 flex items-center justify-center text-[--brand-dark-green] mb-6 transition-colors group-hover:bg-[--brand-green] group-hover:text-white">
                <DynamicIcon name={service.icon} size={24} />
              </div>
              <h3 className="text-xl font-bold text-[--color-gray-900] mb-3 group-hover:text-[--brand-green] transition-colors">
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
          ))}
        </div>
      </div>
    </section>
  )
}
