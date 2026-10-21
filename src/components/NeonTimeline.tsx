import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion'

interface NeonTimelineProps {
  nodes: number
  nodePositions?: number[]
  className?: string
  children: React.ReactNode
}

export function NeonTimeline({
  nodes,
  nodePositions,
  className = '',
  children,
}: NeonTimelineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const systemReduced = useReducedMotion()
  const [isReduced, setIsReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReduced(mq.matches || !!systemReduced)
    const handler = (e: MediaQueryListEvent) => setIsReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [systemReduced])

  const positions =
    nodePositions ??
    (nodes === 1
      ? [0]
      : Array.from({ length: nodes }, (_, i) => (i / (nodes - 1)) * 100))

  const [activeNodes, setActiveNodes] = useState<boolean[]>(() =>
    Array(nodes).fill(isReduced)
  )

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 30%'],
  })

  const smoothed = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  })

  const lineHeight = useTransform(smoothed, [0, 1], ['0%', '100%'])
  const headTop = useTransform(smoothed, [0, 1], ['0%', '100%'])

  useMotionValueEvent(smoothed, 'change', (v) => {
    if (isReduced) return
    setActiveNodes((prev) => {
      const next = prev.map((_, i) => {
        const pos = positions[i] ?? 0
        const threshold =
          nodes === 1 ? 0.05 : Math.max(0.02, (pos / 100) * 0.92)
        return v >= threshold
      })
      const changed = next.some((val, i) => val !== prev[i])
      return changed ? next : prev
    })
  })

  // Reduced motion: fully drawn static neon line and filled nodes
  if (isReduced) {
    return (
      <div
        ref={ref}
        data-testid="neon-timeline"
        data-reduced="true"
        className={`relative ${className}`}
      >
        <div
          data-testid="neon-timeline-line"
          className="pointer-events-none absolute bottom-0 left-2 top-0 w-0.5 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.35)]"
          style={{
            background: 'linear-gradient(to bottom, #10b981, #06b6d4)',
          }}
          aria-hidden
        />
        {positions.map((pct, i) => (
          <div
            key={i}
            className="pointer-events-none absolute left-2 z-20"
            style={{ top: `${pct}%`, transform: 'translate(-5px, -50%)' }}
            aria-hidden
          >
            <div
              data-testid={`neon-timeline-node-${i}`}
              data-active="true"
              className="h-2.5 w-2.5 rounded-full border-2 border-emerald-500 bg-emerald-500 shadow-[0_0_8px_2px_rgba(16,185,129,0.5)]"
            />
          </div>
        ))}
        <div className="relative pl-8">{children}</div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      data-testid="neon-timeline"
      data-nodes={nodes}
      className={`relative ${className}`}
    >
      {/* Background Rail */}
      <div
        className="pointer-events-none absolute bottom-0 left-2 top-0 w-0.5 rounded-full bg-border/60"
        aria-hidden
      />

      {/* Filled Gradient Line */}
      <motion.div
        data-testid="neon-timeline-line"
        className="pointer-events-none absolute left-2 top-0 w-0.5 origin-top rounded-full shadow-[0_0_8px_rgba(16,185,129,0.35)] dark:shadow-[0_0_12px_rgba(16,185,129,0.6),0_0_24px_rgba(6,182,212,0.3)]"
        style={{
          height: lineHeight,
          background: 'linear-gradient(to bottom, #10b981, #06b6d4)',
        }}
        aria-hidden
      />

      {/* Glowing Head Comet */}
      <motion.div
        data-testid="neon-timeline-head"
        className="pointer-events-none absolute left-2 z-10 -translate-x-[3px] -translate-y-1/2"
        style={{ top: headTop }}
        aria-hidden
      >
        <motion.div
          className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(6,182,212,0.7)] dark:shadow-[0_0_12px_4px_rgba(6,182,212,0.9),0_0_20px_6px_rgba(16,185,129,0.5)]"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Nodes: hollow ahead of fill, filled & glow when passed */}
      {positions.map((pct, i) => (
        <div
          key={i}
          className="pointer-events-none absolute left-2 z-20"
          style={{ top: `${pct}%`, transform: 'translate(-5px, -50%)' }}
          aria-hidden
        >
          <motion.div
            data-testid={`neon-timeline-node-${i}`}
            data-active={activeNodes[i] ? 'true' : 'false'}
            className="h-2.5 w-2.5 rounded-full border-2"
            animate={
              activeNodes[i]
                ? {
                    backgroundColor: '#10b981',
                    borderColor: '#10b981',
                    boxShadow: '0 0 8px 3px rgba(16,185,129,0.6)',
                    scale: [1, 1.25, 1],
                  }
                : {
                    backgroundColor: 'transparent',
                    borderColor: 'rgb(var(--color-border, 228 228 231))',
                    boxShadow: 'none',
                    scale: 1,
                  }
            }
            transition={{ duration: 0.3 }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative pl-8">{children}</div>
    </div>
  )
}
