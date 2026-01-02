"use client"

import { useState } from "react"
import { PageHeader } from "@/components/layout/PageHeader"
import { CTABanner } from "@/components/layout/CTABanner"
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase"
import { Testimonials } from "@/components/sections/Testimonials"
import { portfolio, testimonials } from "@/lib/data"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const filters = ["All", "Financial Services", "Healthcare", "Retail"]

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  
  const filteredProjects = activeFilter === "All" 
    ? portfolio 
    : portfolio.filter(p => p.industry === activeFilter)

  return (
    <>
      <PageHeader 
        headline="Our Work"
        subheadline="Real projects, measurable results for industry leaders"
      />
      
      <section className="bg-[--color-gray-50] py-12 border-b border-[--color-gray-100]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                activeFilter === filter
                  ? "bg-[--brand-green] text-white border-[--brand-green]"
                  : "bg-white text-[--color-gray-900] border-[--color-gray-200] hover:border-[--brand-green]"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <PortfolioShowcase 
        headline={activeFilter === "All" ? "All Projects" : `${activeFilter} Projects`}
        description=""
        projects={filteredProjects}
        cta=""
      />

      <Testimonials testimonials={testimonials} />

      <CTABanner 
        headline="Ready for similar results?"
        description="Let's build a success story for your business."
        primaryCTA="Start Your Project"
      />
    </>
  )
}
