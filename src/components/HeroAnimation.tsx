'use client'

import { useEffect, useRef } from 'react'

export default function HeroAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let time = 0
        let mouse = { x: -1000, y: -1000 }

        // Brand color #00C49A -> RGB(0, 196, 154)
        const brandColor = { r: 0, g: 196, b: 154 }

        const resize = () => {
            const parent = canvas.parentElement
            if (parent) {
                canvas.width = parent.clientWidth
                canvas.height = parent.clientHeight
            }
        }

        const drawGlitchRect = (x: number, y: number, w: number, h: number, intensity: number) => {
            // Increase visibility by using higher opacity
            const opacity = Math.random() * 0.8 + 0.2

            // RGB Shift - make it wider for visibility
            const shift = (Math.random() - 0.5) * 30 * intensity

            // 1. Main Brand Color Block
            ctx.fillStyle = `rgba(${brandColor.r}, ${brandColor.g}, ${brandColor.b}, ${opacity})`
            ctx.fillRect(x, y, w, h)

            // 2. Color Shift (Cyan/Green offset)
            if (Math.random() > 0.3) {
                ctx.fillStyle = `rgba(0, 255, 200, ${opacity * 0.7})`
                ctx.fillRect(x + shift, y, w, h)
            }

            // 3. Complementary Shift (Magenta/Red for contrast)
            if (Math.random() > 0.3) {
                ctx.fillStyle = `rgba(255, 50, 100, ${opacity * 0.7})`
                ctx.fillRect(x - shift, y, w, h)
            }

            // 4. Dark/Black glitch for contrast on light backgrounds
            if (Math.random() > 0.7) {
                ctx.fillStyle = `rgba(20, 20, 20, ${opacity})`
                ctx.fillRect(x + shift * 0.5, y + 2, w, 2)
            }

            // 5. White flash
            if (Math.random() > 0.9) {
                ctx.fillStyle = `rgba(255, 255, 255, 0.9)`
                ctx.fillRect(x, y, w, h)
            }
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            time += 1

            // 1. Ambient Glitch Effects (Always visible)
            // Add subtle horizontal scan lines
            if (Math.random() > 0.7) {
                const y = Math.random() * canvas.height
                const w = canvas.width
                const h = Math.random() * 2 + 1
                ctx.fillStyle = `rgba(${brandColor.r}, ${brandColor.g}, ${brandColor.b}, 0.15)`
                ctx.fillRect(0, y, w, h)
            }

            // Random vertical slices
            if (Math.random() > 0.85) {
                const x = Math.random() * canvas.width
                ctx.fillStyle = `rgba(${brandColor.r}, ${brandColor.g}, ${brandColor.b}, 0.2)`
                ctx.fillRect(x, 0, 1, canvas.height)
            }

            // Periodic block glitches across the screen
            const ambientBlocks = 3
            for (let i = 0; i < ambientBlocks; i++) {
                if (Math.random() > 0.85) {
                    const x = Math.random() * canvas.width
                    const y = Math.random() * canvas.height
                    const w = Math.random() * 80 + 20
                    const h = Math.random() * 20 + 3
                    drawGlitchRect(x, y, w, h, 0.5)
                }
            }

            // 2. Mouse Interaction Glitch (Intense but localized)
            const glitchRadius = 300
            const blocks = 15

            if (mouse.x > -100) {
                for (let i = 0; i < blocks; i++) {
                    const angle = Math.random() * Math.PI * 2
                    const dist = Math.random() * glitchRadius
                    const x = mouse.x + Math.cos(angle) * dist
                    const y = mouse.y + Math.sin(angle) * dist

                    // Sharp blocks
                    const w = Math.random() * 100 + 10
                    const h = Math.random() * 30 + 2

                    const distToMouse = Math.sqrt(Math.pow(x - mouse.x, 2) + Math.pow(y - mouse.y, 2))
                    const intensity = Math.max(0, 1 - distToMouse / glitchRadius)

                    // Draw if close enough or random chance
                    if (intensity > 0.15 || Math.random() > 0.98) {
                        drawGlitchRect(x - w / 2, y - h / 2, w, h, intensity)

                        // Occasional thin vertical line (Brand color)
                        if (Math.random() > 0.85) {
                            ctx.fillStyle = `rgba(${brandColor.r}, ${brandColor.g}, ${brandColor.b}, 0.3)`
                            ctx.fillRect(x, 0, 1, canvas.height)
                        }
                    }
                }
            }

            // 3. Random Screen Glitch (More frequent)
            if (Math.random() > 0.9) {
                const x = Math.random() * canvas.width
                const y = Math.random() * canvas.height
                const w = Math.random() * 150 + 20
                const h = Math.random() * 10 + 2
                drawGlitchRect(x, y, w, h, 0.8)
            }

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
            style={{ opacity: 1.0, mixBlendMode: 'normal' }}
        />
    )
}
