import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { DynamicIcon } from "@/components/ui/DynamicIcon"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

interface Project {
  id: string
  title: string
  category?: string
  description?: string
  image: string
  tags?: string[]
  industry?: string
  challenge?: string
  technologies?: string[]
}

interface PortfolioShowcaseProps {
  headline: string
  subheadline: string 
  projects: Project[]
}

export function PortfolioShowcase({ headline, subheadline, projects }: PortfolioShowcaseProps) {
  const projectImages = [
    "/images/generated/cosmic_glass_1_1767321816460.png",
    "/images/generated/cosmic_glass_2_1767321833391.png",
    "/images/generated/cosmic_glass_3_1767321850561.png"
  ]

  return (
    <section className="bg-black py-32 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24">
           <ScrollReveal>
             <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                {headline}
             </h2>
             <p className="text-xl text-[--color-gray-400] max-w-2xl">
               {subheadline || "Selected work that defines our standard."}
             </p>
           </ScrollReveal>
        </div>

        {/* Sticky Scroll Container */}
        <div className="relative">
          {projects.slice(0, 3).map((project, index) => (
             <div key={project.id} className="sticky top-24 min-h-[60vh] py-12 flex flex-col md:flex-row gap-8 md:gap-16 bg-black">
                {/* Left Content - Sticky in a way, but actually flows with the container height */}
                <div className="md:w-5/12 flex flex-col justify-center order-2 md:order-1">
                   <ScrollReveal delay={0.2}>
                      <div className="flex flex-wrap gap-2 mb-6">
                          {(project.tags || (project.industry ? [project.industry] : [])).map((tag: string) => (
                              <span key={tag} className="px-3 py-1 rounded-full border border-[--brand-green]/20 bg-[--brand-green]/5 text-[--brand-green] text-xs font-mono uppercase tracking-wider">
                                  {tag}
                              </span>
                          ))}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-lg text-[--color-gray-400] mb-8 leading-relaxed">
                        {project.challenge || project.description}
                      </p>
                      
                      <div className="flex gap-4">
                        <Button variant="outline" className="rounded-full px-8 border-white/20 text-white hover:border-white hover:bg-white hover:text-black transition-all" asChild>
                          <Link href={`/work/${project.id}`}>
                            View Case Study
                          </Link>
                        </Button>
                      </div>
                   </ScrollReveal>
                </div>

                {/* Right Image - The visual anchor */}
                <div className="md:w-7/12 order-1 md:order-2">
                   <ScrollReveal className="h-full w-full" delay={0.1}>
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                         <img 
                            src={projectImages[index % 3]} 
                            alt={project.title}
                            className="h-full w-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
                         />
                         <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
                      </div>
                   </ScrollReveal>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}
