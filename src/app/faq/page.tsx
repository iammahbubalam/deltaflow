"use client"

import { useState } from "react"
import { PageHeader } from "@/components/layout/PageHeader"
import { CTABanner } from "@/components/layout/CTABanner"
import { faqs, faqCategories } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/Card"

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  
  const filteredFaqs = activeCategory === "all"
    ? faqs
    : faqs.filter(f => f.category.toLowerCase() === activeCategory)

  return (
    <>
      <PageHeader 
        headline="Frequently Asked Questions"
        subheadline="Everything you need to know about working with DeltaFlow"
      />
      
      <section className="bg-[--color-gray-50] py-12 border-b border-[--color-gray-100]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                  activeCategory === cat.id
                    ? "bg-[--brand-green] text-white border-[--brand-green]"
                    : "bg-white text-[--color-gray-900] border-[--color-gray-200] hover:border-[--brand-green]"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-white py-24 min-h-[600px]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <Card key={faq.id} className="border border-[--color-gray-200] shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-[--color-gray-900] mb-3">{faq.question}</h3>
                <p className="text-[--color-gray-400] leading-relaxed">{faq.answer}</p>
                <div className="mt-4 inline-block px-2 py-1 bg-[--color-gray-100] text-xs font-medium text-[--color-gray-500] rounded">
                  {faq.category}
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center text-[--color-gray-400] py-12">
              No questions found for this category.
            </div>
          )}
        </div>
      </section>

      <CTABanner 
         headline="Still have questions?"
         description="We're here to help. Schedule a call with our team."
         primaryCTA="Schedule a Call"
      />
    </>
  )
}
