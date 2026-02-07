import VizPlaceholder from '../components/VizPlaceholder'
import styles from './About.module.css'

const TEAM = [
  { name: 'Ahn Do', role: 'Role' },
  { name: 'Christie Dong', role: 'Role' },
  { name: 'Stephanie Balderas', role: 'Role' },
  { name: 'Cannon Hurst', role: 'UX/UI Designer' },
]

export default function About() {
  return (
    <div className={styles.page}>
      <div className={`stagger-fade ${styles.staggerAbout}`}>
        <h1 className={styles.title}>Team Bad Bunnies</h1>
        {TEAM.map((member, i) => (
          <article key={i} className={styles.card}>
            <VizPlaceholder className={styles.cardViz} />
            <h2 className={styles.cardName}>{member.name}</h2>
            <p className={styles.cardRole}>{member.role}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
