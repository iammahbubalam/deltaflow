import { Badge } from "@/components/ui/Badge"

interface TechStackProps {
  headline: string
  technologies: string[]
}

export function TechStack({ headline, technologies }: TechStackProps) {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-lg font-semibold text-[--color-gray-900] mb-8">
          {headline}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm font-medium">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
