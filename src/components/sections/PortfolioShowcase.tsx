import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { DynamicIcon } from "@/components/ui/DynamicIcon"
import { ParallaxCard } from "@/components/animations/ParallaxCard"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}

interface PortfolioShowcaseProps {
  headline: string
  subheadline: string // Correcting prop name mismatch from usage
  projects: Project[]
}

export function PortfolioShowcase({ headline, subheadline, projects }: PortfolioShowcaseProps) {
  // Map generated images to projects roughly
  const projectImages = [
    "/home/morphosis/.gemini/antigravity/brain/b96ed461-ddff-4753-96d0-b9f4598e2054/cosmic_glass_1_1767321816460.png",
    "/home/morphosis/.gemini/antigravity/brain/b96ed461-ddff-4753-96d0-b9f4598e2054/cosmic_glass_2_1767321833391.png",
    "/home/morphosis/.gemini/antigravity/brain/b96ed461-ddff-4753-96d0-b9f4598e2054/cosmic_glass_3_1767321850561.png"
  ]

  return (
    <section className="bg-black py-24 sm:py-32 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="w-full">
            <div className="mb-16 md:flex md:items-center md:justify-between">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {headline}
                </h2>
                <p className="mt-4 text-lg text-[--color-gray-400]">
                {/* Fallback if subheadline missing or named description */}
                {subheadline || "Explore our latest work"} 
                </p>
            </div>
            <div className="mt-8 md:mt-0">
                <Button variant="outline" asChild>
                <Link href="/work">View All Projects</Link>
                </Button>
            </div>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
             <ScrollReveal key={project.id} delay={index * 0.1} className="h-full">
                <ParallaxCard className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-[--brand-green]/50 transition-colors duration-500">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-white/5 relative">
                        {/* Use real image */}
                        <img 
                            src={projectImages[index % 3]} 
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
                    </div>
                    
                    <div className="relative flex flex-1 flex-col p-8">
                        <div className="mb-4 flex flex-wrap gap-2">
                           {/* Accessing tags if available, else standard fallback */}
                           {(project.tags || [project.industry]).slice(0, 3).map((tag: string) => (
                                <span key={tag} className="text-xs font-mono font-medium text-[--brand-green] uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-white">
                            {project.title}
                        </h3>
                        <p className="mb-6 flex-1 text-sm text-[--color-gray-400] leading-relaxed line-clamp-3">
                            {project.challenge || project.description}
                        </p>
                        <Link 
                            href={`/work/${project.id}`}
                            className="inline-flex items-center text-sm font-semibold text-white hover:text-[--brand-green] transition-colors"
                        >
                            View Case Study <DynamicIcon name="ArrowRight" className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </ParallaxCard>
             </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
