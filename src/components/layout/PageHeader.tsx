import Link from "next/link"
import { cn } from "@/lib/utils"

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: string
  subheadline?: string
  centered?: boolean
}

export function PageHeader({ 
  headline, 
  subheadline, 
  centered = true,
  className,
  ...props 
}: PageHeaderProps) {
  return (
    <section 
      className={cn(
        "bg-[--color-gray-50] py-16 sm:py-24 border-b border-[--color-gray-100]",
        className
      )} 
      {...props}
    >
      <div className={cn(
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        centered && "text-center"
      )}>
        <h1 className="text-4xl font-extrabold tracking-tight text-[--color-gray-900] sm:text-5xl lg:text-6xl mb-6">
          {headline}
        </h1>
        {subheadline && (
          <p className="mx-auto max-w-2xl text-lg text-[--color-gray-400] sm:text-xl">
            {subheadline}
          </p>
        )}
      </div>
    </section>
  )
}
