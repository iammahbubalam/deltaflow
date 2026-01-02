import * as React from "react"
import { 
  Cpu, 
  Workflow, 
  Lightbulb, 
  Target, 
  Shield, 
  Users, 
  Zap,
  ArrowRight,
  Check,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Loader2
} from "lucide-react"
import { cn } from "@/lib/utils"

export type IconName = 
  | "Cpu" 
  | "Workflow" 
  | "Lightbulb" 
  | "Target" 
  | "Shield" 
  | "Users" 
  | "Zap"
  | "ArrowRight"
  | "Check"
  | "ChevronRight"

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Workflow,
  Lightbulb,
  Target,
  Shield,
  Users,
  Zap,
  ArrowRight,
  Check,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Loader2
}

interface DynamicIconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  size?: number
}

export function DynamicIcon({ name, size = 24, className, ...props }: DynamicIconProps) {
  const Icon = iconMap[name]
  
  if (!Icon) {
    return null
  }

  return (
    <div className={cn("inline-flex items-center justify-center", className)} {...props}>
      <Icon size={size} strokeWidth={2} />
    </div>
  )
}
