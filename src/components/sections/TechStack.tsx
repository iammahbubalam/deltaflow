import { Badge } from "@/components/ui/Badge"

interface TechStackProps {
  headline: string
  technologies: string[]
}

export function TechStack({ headline, technologies }: TechStackProps) {
  return (
    <section className="bg-black py-12 border-t border-[--color-gray-100]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-sm font-mono tracking-widest text-[--color-gray-500] uppercase mb-8">
          {headline}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="px-4 py-2 text-xs font-mono text-[--color-gray-400] border-[--color-gray-200]">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
