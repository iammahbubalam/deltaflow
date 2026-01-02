import { PageHeader } from "@/components/layout/PageHeader"
import { CTABanner } from "@/components/layout/CTABanner"
import { Stats } from "@/components/sections/Stats"
import { ClientLogos } from "@/components/sections/ClientLogos"
import { company, clients } from "@/lib/data"
import { DynamicIcon } from "@/components/ui/DynamicIcon"
import { Card } from "@/components/ui/Card"

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        headline="About DeltaFlow"
        subheadline={company.story.headline}
      />
      
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-lg text-[--color-gray-400] leading-relaxed space-y-6">
          {company.story.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <Stats 
        headline="Our Impact"
        stats={company.stats}
      />

      <section className="bg-[--color-gray-50] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-extrabold text-[--color-gray-900]">Our Values</h2>
           </div>
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
             {company.values.map((val) => (
               <Card key={val.title} className="text-center border-none shadow-sm h-full">
                 <div className="mx-auto h-16 w-16 rounded-full bg-[--brand-green]/10 flex items-center justify-center text-[--brand-green] mb-6">
                   <DynamicIcon name={val.icon} size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-[--color-gray-900] mb-2">{val.title}</h3>
                 <p className="text-[--color-gray-400]">{val.description}</p>
               </Card>
             ))}
           </div>
        </div>
      </section>

      <ClientLogos 
         headline="Trusted Partners"
         logos={clients}
      />

      <CTABanner 
         headline="Join our team"
         description="We're always looking for world-class engineers to join our mission."
         primaryCTA="View Careers"
         primaryHref="#" // Placeholder
         secondaryCTA="Contact Us"
         secondaryHref="/contact"
      />
    </>
  )
}
