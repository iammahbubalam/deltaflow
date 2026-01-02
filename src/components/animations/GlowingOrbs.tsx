"use client"

import { useEffect, useRef } from "react"

export function GlowingOrbs() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const orbs: Orb[] = []
    const orbCount = 5

    class Orb {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      color: string
      pulseSpeed: number
      pulseOffset: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.radius = Math.random() * 200 + 100
        this.vx = (Math.random() - 0.5) * 0.2
        this.vy = (Math.random() - 0.5) * 0.2
        // Brand colors: Green variations
        const colors = [
            "rgba(34, 197, 94, 0.15)", // Brand Green
            "rgba(20, 83, 45, 0.15)",  // Dark Green
            "rgba(34, 197, 94, 0.05)", // Faint Green
            "rgba(255, 255, 255, 0.05)" // White faint
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.pulseSpeed = Math.random() * 0.01 + 0.005
        this.pulseOffset = Math.random() * Math.PI * 2
      }

      update(time: number) {
        this.x += this.vx
        this.y += this.vy

        // Bounce
        if (this.x < -this.radius || this.x > width + this.radius) this.vx *= -1
        if (this.y < -this.radius || this.y > height + this.radius) this.vy *= -1

        // Pulse radius
        const pulse = Math.sin(time * 0.001 * this.pulseSpeed + this.pulseOffset) * 20
        
        // Draw
        if(!ctx) return
        const currentRadius = this.radius + pulse
        if (currentRadius <= 0) return

        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, currentRadius)
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, "rgba(0,0,0,0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < orbCount; i++) {
        orbs.push(new Orb())
    }

    let animateId: number
    const animate = (time: number) => {
      // Clear with trail for smoothness
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, width, height)
      
      // Global composite for "glow" blending
      ctx.globalCompositeOperation = "screen"

      orbs.forEach(orb => orb.update(time))
      
      ctx.globalCompositeOperation = "source-over"
      animateId = requestAnimationFrame(animate)
    }

    animate(0)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animateId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 bg-black"
    />
  )
}
