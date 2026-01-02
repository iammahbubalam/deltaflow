"use client"

import React from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  className?: string
}

export function ScrollReveal({ children, width = "fit-content", delay = 0, className = "" }: ScrollRevealProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.45, 0.27, 0.9] }} // Smooth "OutExpo"ish curve
      >
        {children}
      </motion.div>
    </div>
  )
}
