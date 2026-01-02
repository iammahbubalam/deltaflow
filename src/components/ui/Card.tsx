import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-[--color-gray-100] bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-[--brand-green]/20",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
