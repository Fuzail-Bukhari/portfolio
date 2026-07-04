import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ChevronUp, ChevronDown } from 'lucide-react'

const DOTS = 6

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.3 })
  const markerTop = useTransform(smooth, [0, 1], ['0%', '100%'])
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    return scrollYProgress.on('change', (v) => setPercent(Math.round(v * 100)))
  }, [scrollYProgress])

  return (
    <div className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center select-none">
      <ChevronUp size={13} className="text-orange mb-2 opacity-80" />

      <div className="relative w-px h-40 sm:h-56 md:h-64 bg-border">
        {Array.from({ length: DOTS }).map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-border"
            style={{ top: `${(i / (DOTS - 1)) * 100}%` }}
          />
        ))}

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-orange shadow-glow"
          style={{ top: markerTop }}
        >
          <motion.span
            className="absolute inset-0 rounded-full bg-orange"
            animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.8, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      <ChevronDown size={13} className="text-orange mt-2 opacity-80" />
      <span className="mt-3 text-[10px] sm:text-[11px] font-medium text-muted tabular-nums">
        {String(percent).padStart(2, '0')}%
      </span>
    </div>
  )
}
