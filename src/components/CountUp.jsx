import { useEffect, useRef, useState } from 'react'

const DURATION = 1600

export default function CountUp({ value, suffix = '' }) {
  const ref = useRef(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const element = ref.current
    let frame
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / DURATION, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCurrent(Math.round(value * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return <span ref={ref}>{current.toLocaleString('es-MX')}{suffix}</span>
}
