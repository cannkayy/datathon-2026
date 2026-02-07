import './mock-viz.css'

export default function MockMapViz() {
  return (
    <div className="mock-viz">
      <div className="mock-viz__title">
        <span className="mock-viz__title-icon" />
        MY EXPERIENCE
      </div>
      <svg viewBox="0 0 400 220" style={{ width: '100%', height: 'calc(100% - 2rem)', display: 'block' }}>
        <defs>
          <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.2" fill="rgba(255,255,255,0.15)" />
          </pattern>
          <pattern id="dotsLand" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="0.9" fill="rgba(255,255,255,0.22)" />
          </pattern>
          <path id="world" d="M 80 80 Q 120 60 180 70 L 220 85 L 260 75 L 300 90 L 320 120 L 310 170 L 280 200 L 200 190 L 120 200 L 60 170 L 50 120 Z M 100 100 L 140 95 L 160 110 L 150 140 L 110 150 Z" />
          <path id="route1" d="M 120 95 Q 200 50 280 120" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,200,150,0.8)" />
            <stop offset="100%" stopColor="rgba(150,200,255,0.8)" />
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill="rgba(0,0,0,0.2)" />
        <use href="#world" fill="url(#dotsLand)" />
        <use href="#route1" />
        <circle cx="115" cy="98" r="5" fill="#e91e8c" />
        <circle cx="135" cy="92" r="4" fill="#ffc107" />
        <circle cx="145" cy="105" r="4" fill="#e91e8c" />
        <circle cx="285" cy="118" r="5" fill="#4caf50" />
        <g fill="#fff">
          <rect x="95" y="108" width="72" height="14" rx="4" fill="rgba(255,255,255,0.12)" />
          <text x="102" y="118" fontSize="6" fill="#fff">🌐 37.7749° N, 122.4194° W</text>
          <rect x="118" y="78" width="68" height="12" rx="4" fill="rgba(255,255,255,0.12)" />
          <text x="125" y="87" fontSize="5.5" fill="#fff">42.3601° N, 71.0589° W</text>
          <rect x="268" y="128" width="72" height="12" rx="4" fill="rgba(255,255,255,0.12)" />
          <text x="275" y="137" fontSize="5.5" fill="#fff">31.2989° N, 120.5853° E</text>
        </g>
      </svg>
    </div>
  )
}
