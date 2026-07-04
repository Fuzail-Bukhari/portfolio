import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function useCountUp(target, duration = 1.2) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (ts) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
      else setValue(target)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return [ref, value]
}
