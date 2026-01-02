import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-[--color-gray-200] bg-transparent p-8 shadow-none transition-all hover:border-[--color-gray-500]",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
