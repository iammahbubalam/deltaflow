import { PageHeader } from "@/components/layout/PageHeader"
import { CTABanner } from "@/components/layout/CTABanner"
import { ProcessTimeline } from "@/components/sections/ProcessTimeline"
import { process, faqs } from "@/lib/data"
import { Card } from "@/components/ui/Card"

export default function ProcessPage() {
  const processFaqs = faqs.filter(f => f.category === "Process")

  return (
    <>
      <PageHeader 
        headline={process.headline}
        subheadline={process.description}
      />
      
      <ProcessTimeline 
        phases={process.phases}
        showDetails={true}
      />

      <section className="bg-[--color-gray-50] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-extrabold text-[--color-gray-900]">Common Questions</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {processFaqs.map((faq) => (
              <Card key={faq.id} className="bg-white border-none shadow-sm">
                <h3 className="text-lg font-bold text-[--color-gray-900] mb-3">{faq.question}</h3>
                <p className="text-[--color-gray-400]">{faq.answer}</p>
              </Card>
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
