"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"

interface HeroProps {
  headline: string
  subheadline: string
  primaryCTA: string
  secondaryCTA: string
}

export function Hero({ headline, subheadline, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[--color-gray-50] pt-16 pb-32 lg:pt-32 lg:pb-48">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px] rounded-full bg-[--brand-green]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[500px] w-[500px] rounded-full bg-[--brand-green]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-[--brand-green]/10 px-4 py-1.5 text-sm font-semibold text-[--brand-dark-green] mb-8">
            AI Development Agency
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-[--color-gray-900] sm:text-6xl lg:text-7xl mb-8 leading-tight">
            {headline}
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-[--color-gray-400] mb-10">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto min-w-[160px]" asChild>
              <Link href="/contact">{primaryCTA}</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[160px]" asChild>
              <Link href="/work">{secondaryCTA}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
