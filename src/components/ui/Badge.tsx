import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "accent"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[--brand-green]/10 text-[--brand-dark-green] border-transparent",
    secondary: "bg-[--color-gray-100] text-[--color-gray-900] border-transparent",
    outline: "text-[--color-gray-900] border-[--color-gray-200]",
    accent: "bg-[--brand-red]/10 text-[--brand-red] border-transparent"
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
