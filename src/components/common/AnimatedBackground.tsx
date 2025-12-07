
import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || typeof window === 'undefined') return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse position tracking
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    let isMouseMoving = false

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      isMouseMoving = true
    }

    const handleMouseLeave = () => {
      isMouseMoving = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      originalVx: number
      originalVy: number
    }> = []

const particleCount = 100
    for (let i = 0; i < particleCount; i++) {
      const vx = (Math.random() - 0.5) * 0.5
      const vy = (Math.random() - 0.5) * 0.5
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx,
        vy,
        originalVx: vx,
        originalVy: vy,
        size: Math.random() * 2 + 1,
      })
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.fillStyle = 'rgba(17, 24, 39, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.05)'
      ctx.lineWidth = 1
      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Update and draw particles
      particles.forEach((particle) => {
        if (isMouseMoving) {
          // Calculate distance to mouse
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
const distance = Math.sqrt(dx * dx + dy * dy)
            const attractionRadius = 150
 
           if (distance < attractionRadius) {
            // Calculate attraction force
            const strength = (1 - distance / attractionRadius) * 0.2
            const angle = Math.atan2(dy, dx)

            // Apply attraction - particle follows mouse
            particle.vx += Math.cos(angle) * strength
            particle.vy += Math.sin(angle) * strength

            // Damping to prevent erratic behavior
            particle.vx *= 0.98
            particle.vy *= 0.98
          } else {
            // Gradually return to original velocity
            particle.vx += (particle.originalVx - particle.vx) * 0.02
            particle.vy += (particle.originalVy - particle.vy) * 0.02
          }
        } else {
          // Gradually return to original velocity
          particle.vx += (particle.originalVx - particle.vx) * 0.02
          particle.vy += (particle.originalVy - particle.vy) * 0.02
        }

particle.x += particle.vx
        particle.y += particle.vy

// Wrap particles around viewport boundaries for continuous direction change
         if (particle.x + particle.size < 0) {
           particle.x = canvas.width + particle.size
         } else if (particle.x - particle.size > canvas.width) {
           particle.x = -particle.size
         }

         if (particle.y + particle.size < 0) {
           particle.y = canvas.height + particle.size
         } else if (particle.y - particle.size > canvas.height) {
           particle.y = -particle.size
         }

        ctx.fillStyle = 'rgba(34, 211, 238, 0.6)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.2 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  )
}
