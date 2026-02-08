import { useState, useEffect, useRef } from 'react'

const RAINBOW = [
  { offset: '0%', color: '#FFE414' },
  { offset: '33%', color: '#45FCB3' },
  { offset: '66%', color: '#EA45FC' },
  { offset: '100%', color: '#FC7345' },
]

const IDLE_MS = 120
const TRAIL_LENGTH = 140
const HEAD_LERP = 0.28
const TAIL_LERP = 0.16
const PULL_TO_CURSOR = 0.048
const RETRACT_MS = 1100
const RETRACT_LERP = 0.14
const RETRACT_DONE_THRESHOLD = 2

function lerp(a, b, t) {
  return a + (b - a) * t
}

function buildPath(points) {
  if (points.length < 2) return ''
  let pathD = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    pathD += ` L ${points[i].x} ${points[i].y}`
  }
  return pathD
}

export default function CursorTrail() {
  const [points, setPoints] = useState([])
  const [opacity, setOpacity] = useState(0)
  const [visible, setVisible] = useState(false)
  const cursorRef = useRef(null)
  const pointsRef = useRef([])
  const idleTimer = useRef(null)
  const fadeStart = useRef(null)
  const raf = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
      fadeStart.current = null
      setOpacity(1)
      if (!visible) setVisible(true)

      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => {
        idleTimer.current = null
        fadeStart.current = Date.now()
      }, IDLE_MS)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [visible])

  useEffect(() => {
    if (!visible) return

    const animate = () => {
      const cursor = cursorRef.current
      let pts = pointsRef.current

      if (cursor && pts.length === 0) {
        pts = Array.from({ length: TRAIL_LENGTH }, () => ({ ...cursor }))
        pointsRef.current = pts
      }

      if (pts.length > 0 && cursor) {
        const retracting = fadeStart.current != null
        const retractTarget = cursor

        if (retracting) {
          for (let i = 0; i < pts.length; i++) {
            pts[i].x = lerp(pts[i].x, retractTarget.x, RETRACT_LERP)
            pts[i].y = lerp(pts[i].y, retractTarget.y, RETRACT_LERP)
          }
          const maxDist = Math.max(
            ...pts.map((p) =>
              Math.hypot(p.x - retractTarget.x, p.y - retractTarget.y)
            )
          )
          const retractElapsed = Date.now() - fadeStart.current
          if (
            maxDist < RETRACT_DONE_THRESHOLD ||
            retractElapsed >= RETRACT_MS
          ) {
            pointsRef.current = []
            setPoints([])
            setVisible(false)
            fadeStart.current = null
            return
          }
        } else {
          pts[0].x = lerp(pts[0].x, cursor.x, HEAD_LERP)
          pts[0].y = lerp(pts[0].y, cursor.y, HEAD_LERP)
          for (let i = 1; i < pts.length; i++) {
            pts[i].x = lerp(pts[i].x, pts[i - 1].x, TAIL_LERP)
            pts[i].y = lerp(pts[i].y, pts[i - 1].y, TAIL_LERP)
          }
          for (let i = 0; i < pts.length; i++) {
            pts[i].x = lerp(pts[i].x, cursor.x, PULL_TO_CURSOR)
            pts[i].y = lerp(pts[i].y, cursor.y, PULL_TO_CURSOR)
          }
        }
        setPoints(pts.map((p) => ({ x: p.x, y: p.y })))
      }

      raf.current = requestAnimationFrame(animate)
    }

    raf.current = requestAnimationFrame(animate)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [visible])

  if (points.length < 2) return null

  const pathD = buildPath(points)
  const first = points[0]
  const last = points[points.length - 1]
  const gradId = 'cursor-rainbow'

  return (
    <svg
      className="cursor-trail"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <defs>
        <filter id="cursor-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feFlood floodColor="white" floodOpacity="0.85" result="white" />
          <feComposite in="blur" in2="white" operator="in" result="whiteGlow" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blurLine" />
          <feMerge>
            <feMergeNode in="whiteGlow" />
            <feMergeNode in="blurLine" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient
          id={gradId}
          gradientUnits="userSpaceOnUse"
          x1={first.x}
          y1={first.y}
          x2={last.x}
          y2={last.y}
        >
          {RAINBOW.map(({ offset, color }) => (
            <stop key={offset} offset={offset} stopColor={color} />
          ))}
        </linearGradient>
      </defs>
      <g style={{ opacity }} filter="url(#cursor-glow)">
        <path
          d={pathD}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth={0.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
