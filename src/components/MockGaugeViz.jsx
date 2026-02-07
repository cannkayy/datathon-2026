import './mock-viz.css'

export default function MockGaugeViz() {
  return (
    <div className="mock-viz" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
      <div className="mock-viz__title" style={{ alignSelf: 'flex-start' }}>
        <span className="mock-viz__title-icon" style={{ background: 'rgba(255,255,255,0.25)' }} />
        DESIGN TIME SPENT
      </div>
      <div style={{ fontSize: '1.8rem', fontWeight: 700, lineHeight: 1, marginBottom: '0.25rem' }}>14,238</div>
      <div style={{ fontSize: '0.7rem', opacity: 0.85, marginBottom: '0.75rem' }}>Hours</div>
      <svg viewBox="0 0 120 70" style={{ width: '90%', maxWidth: 200, flexShrink: 0 }}>
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c2185b" />
            <stop offset="35%" stopColor="#7b1fa2" />
            <stop offset="65%" stopColor="#1976d2" />
            <stop offset="100%" stopColor="#009688" />
          </linearGradient>
        </defs>
        <path d="M 10 65 A 50 50 0 0 1 110 65" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" strokeLinecap="round" />
        <path d="M 10 65 A 50 50 0 0 1 110 65" fill="none" stroke="url(#gaugeGrad)" strokeWidth="8" strokeLinecap="round" strokeDasharray="78 80" strokeDashoffset="20" />
        <circle cx="85" cy="42" r="3" fill="#fff" />
        <circle cx="15" cy="64" r="2" fill="rgba(255,255,255,0.5)" />
        <circle cx="105" cy="64" r="2" fill="rgba(255,255,255,0.5)" />
      </svg>
      <div style={{ marginTop: '0.5rem', width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '0.55rem', opacity: 0.8, gap: '0.5rem' }}>
        <span>2020 BOSTON 42.3601° N 71.0589° W</span>
        <span>2025 SAN FRANCISCO 37.7749° N 122.4194° W</span>
      </div>
    </div>
  )
}
