import { PageHeader } from "@/components/layout/PageHeader"
import { CTABanner } from "@/components/layout/CTABanner"
import { Card } from "@/components/ui/Card"
import { DynamicIcon } from "@/components/ui/DynamicIcon"
import { company, services } from "@/lib/data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        headline="Services"
        subheadline="Comprehensive AI development solutions for your business"
      />
      
      <section className="py-24 sm:py-32 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col h-full hover:border-[--brand-green]/30 transition-all duration-300">
                <div className="h-14 w-14 rounded-xl bg-[--brand-green]/10 flex items-center justify-center text-[--brand-dark-green] mb-6">
                  <DynamicIcon name={service.icon} size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-sm font-semibold text-[--brand-green] mb-4 uppercase tracking-wider">
                  {service.tagline}
                </p>
                <p className="text-[--color-gray-400] mb-8 flex-grow">
                  {service.longDescription}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <li key={benefit} className="flex items-start text-sm text-[--color-gray-400]">
                        <span className="mr-2 text-[--brand-green]">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center font-semibold text-[--brand-green] hover:text-[--brand-dark-green] mt-auto"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-24 sm:py-32 border-t border-[--color-gray-100]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-extrabold text-[--color-gray-900]">Why Work With DeltaFlow</h2>
           </div>
           <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
             {company.values.map((val) => (
               <div key={val.title} className="text-center">
                 <div className="mx-auto h-16 w-16 rounded-full bg-white shadow-sm flex items-center justify-center text-[--brand-green] mb-6">
                   <DynamicIcon name={val.icon} size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-[--color-gray-900] mb-2">{val.title}</h3>
                 <p className="text-[--color-gray-400]">{val.description}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      <CTABanner 
        headline="Not sure where to start?"
        description="Our AI consultants can help you identify the highest-impact opportunities for your business."
        primaryCTA="Book a Discovery Call"
        secondaryCTA="View Case Studies"
        secondaryHref="/work"
      />
    </>
  )
}
