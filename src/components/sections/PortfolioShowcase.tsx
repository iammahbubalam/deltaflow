import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Card } from "@/components/ui/Card"
import { ArrowRight } from "lucide-react"

interface Project {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  results: Array<{ metric: string; label: string }>
  image: string
  featured: boolean
}

interface PortfolioShowcaseProps {
  headline: string
  description: string
  projects: Project[]
  cta: string
}

export function PortfolioShowcase({ headline, description, projects, cta }: PortfolioShowcaseProps) {
  return (
    <section className="bg-[--color-gray-50] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[--color-gray-900] sm:text-4xl mb-4">
              {headline}
            </h2>
            <p className="text-lg text-[--color-gray-400]">
              {description}
            </p>
          </div>
          <Button variant="outline" className="hidden md:inline-flex mt-4 md:mt-0" asChild>
            <Link href="/work">{cta}</Link>
          </Button>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden p-0 border-none shadow-lg hover:shadow-xl transition-shadow bg-white flex flex-col lg:flex-row">
              <div className="relative h-64 lg:h-auto lg:w-1/2 bg-[--color-gray-200]">
                 {/* Placeholder for Next/Image since real images might not exist. Using a colored div with text fallback */}
                 <div className="absolute inset-0 flex items-center justify-center bg-[--brand-dark-green]/5 text-[--brand-dark-green]">
                    <span className="font-bold text-lg">{project.title} Preview</span>
                 </div>
                 {/* 
                 <Image 
                   src={project.image} 
                   alt={project.title} 
                   fill 
                   className="object-cover transition-transform duration-500 hover:scale-105"
                 />
                 */}
              </div>
              <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{project.industry}</Badge>
                  <span className="text-sm font-medium text-[--color-gray-400]">• {project.client}</span>
                </div>
                <h3 className="text-2xl font-bold text-[--color-gray-900] mb-4">
                  {project.title}
                </h3>
                <p className="text-[--color-gray-400] mb-8">
                  {project.challenge}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8 border-t border-[--color-gray-100] pt-8">
                  {project.results.slice(0, 2).map((res) => (
                    <div key={res.label}>
                      <div className="text-2xl font-bold text-[--brand-green]">{res.metric}</div>
                      <div className="text-sm text-[--color-gray-400]">{res.label}</div>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="self-start pl-0 text-[--brand-green] hover:text-[--brand-dark-green] hover:bg-transparent" asChild>
                  <Link href={`/work`}>
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/work">{cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
