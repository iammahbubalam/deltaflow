"use client"

import React, { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  opacity: number
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let stars: Star[] = []
    
    // Configuration
    const STAR_COUNT = 400
    const SPEED = 0.5
    const BASE_OPACITY = 0.7

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      stars = []
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * 1000,
          opacity: Math.random()
        })
      }
    }

    const updateStars = () => {
      // Clear canvas with transparent black (to create trail effect if we wanted, but here strict clear)
      // ctx.fillStyle = "rgba(0, 0, 0, 1)"
      // ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cx = canvas.width / 2
      const cy = canvas.height / 2

      stars.forEach((star) => {
        // Move star closer
        star.z -= SPEED

        // Reset if too close
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - canvas.width / 2
          star.y = Math.random() * canvas.height - canvas.height / 2
          star.z = 1000
        }

        // Project 3D to 2D
        const k = 128.0 / star.z
        const px = star.x * k + cx
        const py = star.y * k + cy

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = (1 - star.z / 1000) * 2.5
          const opacity = (1 - star.z / 1000) * BASE_OPACITY

          ctx.beginPath()
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
          ctx.arc(px, py, size, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      animationFrameId = requestAnimationFrame(updateStars)
    }

    // Initialize
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    updateStars()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-60"
    />
  )
}
