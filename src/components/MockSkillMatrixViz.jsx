import './mock-viz.css'

const skills = [
  'Platform Design',
  'Website Design',
  'UI UX Design',
  'Interaction Design',
  'Design System',
  'User Research',
  'Usability Testing',
  'Front-end Development',
  'Prototyping',
  'Data Visualization',
  'Visual Design',
]
const tools = ['Figma', 'ProtoPie', 'Framer', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Adobe CC']

export default function MockSkillMatrixViz() {
  return (
    <div className="mock-viz" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="mock-viz__title">
        <span className="mock-viz__title-icon" />
        DESIGN SKILL MATRIX
      </div>
      <div style={{ display: 'flex', flex: 1, gap: '1.5rem', minHeight: 0 }}>
        <div style={{ flex: '1 1 60%', overflow: 'auto' }}>
          <div style={{ fontSize: '0.55rem', opacity: 0.7, marginBottom: '0.35rem' }}>SKILL</div>
          {skills.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', fontSize: '0.65rem' }}>
              <span>{s}</span>
              <span style={{ background: 'rgba(255,255,255,0.15)', padding: '0.1rem 0.4rem', borderRadius: 999 }}>0</span>
            </div>
          ))}
        </div>
        <div style={{ flex: '0 0 auto' }}>
          <div style={{ fontSize: '0.55rem', opacity: 0.7, marginBottom: '0.35rem' }}>TOOL</div>
          {tools.map((t, i) => (
            <div key={i} style={{ marginBottom: '0.3rem', fontSize: '0.65rem' }}>{t}</div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        <div style={{ height: 12, borderRadius: 4, overflow: 'hidden', background: 'rgba(0,0,0,0.3)', display: 'flex' }}>
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: `hsl(${260 - i * 8}, 70%, 50%)`,
              }}
            />
          ))}
        </div>
        <div style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.35rem' }}>
          // skill scores are self-assessed (total = 100)<br />
          // always iterating, always improving
        </div>
      </div>
    </div>
  )
}
