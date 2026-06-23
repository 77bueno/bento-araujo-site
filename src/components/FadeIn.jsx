import { useEffect, useRef, useState } from 'react'

export default function FadeIn({ children, delay = 0, up = true }) {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : up ? 'translateY(32px)' : 'none',
        transition: `opacity .7s ${delay}s ease, transform .7s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  )
}
