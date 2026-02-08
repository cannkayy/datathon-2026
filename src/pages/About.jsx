import VizPlaceholder from '../components/VizPlaceholder'
import styles from './About.module.css'

const TEAM = [
  { name: 'Anh Do', role: 'Data Analyst', photo: '/anh-do.png' },
  { name: 'Christie Dong', role: 'Data Analyst', photo: '/christie-dong.png' },
  { name: 'Stephanie Balderas', role: 'Data Analyst', photo: '/stephanie-balderas.png' },
  { name: 'Cannon Hurst', role: 'UX/UI Designer/Frontend', photo: '/cannon-hurst.png' },
]

export default function About() {
  return (
    <div className={styles.page}>
      <div className={`stagger-fade ${styles.staggerAbout}`}>
        <h1 className={styles.title}>Team Bad Bunnies</h1>
        {TEAM.map((member, i) => (
          <article key={i} className={styles.card}>
            {member.photo ? (
              <img src={member.photo} alt={member.name} className={styles.cardPhoto} />
            ) : (
              <VizPlaceholder className={styles.cardViz} />
            )}
            <h2 className={styles.cardName}>{member.name}</h2>
            <p className={styles.cardRole}>{member.role}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
