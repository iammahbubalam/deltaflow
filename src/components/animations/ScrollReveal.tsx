"use client"

import React from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function ScrollReveal({ children, width = "fit-content", delay = 0, className = "", direction = "up" }: ScrollRevealProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  const getHiddenVariant = () => {
    switch (direction) {
      case "left": return { opacity: 0, x: -50 }
      case "right": return { opacity: 0, x: 50 }
      case "down": return { opacity: 0, y: -50 }
      case "up": default: return { opacity: 0, y: 50 }
    }
  }

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div
        variants={{
          hidden: getHiddenVariant(),
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.45, 0.27, 0.9] }} // Smooth "OutExpo"ish curve
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
