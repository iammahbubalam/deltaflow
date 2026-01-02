import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

interface CTABannerProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: string
  description: string
  primaryCTA?: string
  secondaryCTA?: string
  primaryHref?: string
  secondaryHref?: string
}

export function CTABanner({ 
  headline, 
  description, 
  primaryCTA = "Get Started",
  secondaryCTA,
  primaryHref = "/contact",
  secondaryHref = "/services",
  className,
  ...props 
}: CTABannerProps) {
  return (
    <section 
      className={cn(
        "bg-[--brand-dark-green] py-16 sm:py-24 relative overflow-hidden",
        className
      )} 
      {...props}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-[--brand-green]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-[--brand-green]/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-6">
          {headline}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-[--color-gray-400] mb-10">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto min-w-[160px]" asChild>
            <Link href={primaryHref}>{primaryCTA}</Link>
          </Button>
          {secondaryCTA && (
            <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[160px] border-white text-white hover:bg-white/10 hover:text-white" asChild>
              <Link href={secondaryHref}>{secondaryCTA}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
