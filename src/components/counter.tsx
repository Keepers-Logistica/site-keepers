import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface CounterProps {
  value: number
  direction?: 'up' | 'down'
  comma?: boolean
}

export default function Counter({
  value,
  direction = 'up',
  comma = false,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === 'down' ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value)
    }
  }, [motionValue, isInView])

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('en-US').format(
            latest.toFixed(0),
          )
        }
      }),
    [springValue],
  )

  return <span ref={ref} />
}
