'use client'

import { useEffect, useRef } from 'react'

interface Particle {
    x: number
    y: number
    z: number // Depth factor (0 to 1, where 1 is closest)
    vx: number
    vy: number
    baseSize: number
}

export default function HeroAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []
        let mouse = { x: -1000, y: -1000 }

        const resize = () => {
            const parent = canvas.parentElement
            if (parent) {
                canvas.width = parent.clientWidth
                canvas.height = parent.clientHeight
            }
            initParticles()
        }

        const initParticles = () => {
            particles = []
            // Density: 1 particle per 9000 pixels
            const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 150)

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * 0.5 + 0.5, // 0.5 to 1.0
                    vx: (Math.random() - 0.5) * 0.3, // Slower, smoother drift
                    vy: (Math.random() - 0.5) * 0.3,
                    baseSize: Math.random() * 1.5 + 1, // 1 to 2.5
                })
            }
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update particles
            particles.forEach((p) => {
                // Basic movement
                p.x += p.vx * p.z // Closer particles move faster (parallax)
                p.y += p.vy * p.z

                // Wrap around edges for continuous flow
                if (p.x < -50) p.x = canvas.width + 50
                if (p.x > canvas.width + 50) p.x = -50
                if (p.y < -50) p.y = canvas.height + 50
                if (p.y > canvas.height + 50) p.y = -50

                // Mouse Repulsion
                const dx = mouse.x - p.x
                const dy = mouse.y - p.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                const repulsionRadius = 250

                if (distance < repulsionRadius) {
                    const force = (repulsionRadius - distance) / repulsionRadius
                    const angle = Math.atan2(dy, dx)

                    // Push away
                    const pushX = Math.cos(angle) * force * 1.5
                    const pushY = Math.sin(angle) * force * 1.5

                    p.x -= pushX * p.z // Closer particles react more
                    p.y -= pushY * p.z
                }
            })

            // Draw connections (lines) first so they are behind dots
            ctx.lineWidth = 0.5
            particles.forEach((p1, i) => {
                // Only connect if z-levels are somewhat similar to avoid messy depth crossings
                // or just connect all based on 2D distance for the "constellation" look
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    const maxDist = 120

                    if (distance < maxDist) {
                        // Opacity based on distance and average depth
                        const opacity = (1 - distance / maxDist) * 0.15 * ((p1.z + p2.z) / 2)
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(0, 196, 154, ${opacity})` // Brand color lines, very faint
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                })
            })

            // Draw Particles
            particles.forEach((p) => {
                const size = p.baseSize * p.z
                const opacity = 0.3 + (p.z * 0.7) // 0.3 to 1.0

                ctx.beginPath()
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2)

                // Glow effect
                ctx.shadowBlur = 10 * p.z
                ctx.shadowColor = '#00C49A'

                ctx.fillStyle = `rgba(0, 196, 154, ${opacity})`
                ctx.fill()

                // Reset shadow for next operations (performance)
                ctx.shadowBlur = 0
            })

            animationFrameId = requestAnimationFrame(draw)
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouse.x = e.clientX - rect.left
            mouse.y = e.clientY - rect.top
        }

        const handleMouseLeave = () => {
            mouse.x = -1000
            mouse.y = -1000
        }

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseout', handleMouseLeave)

        resize()
        draw()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseout', handleMouseLeave)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.8 }} // Overall subtle blend
        />
    )
}
