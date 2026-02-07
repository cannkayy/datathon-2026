import VizPlaceholder from '../components/VizPlaceholder'
import MockMapViz from '../components/MockMapViz'
import MockGaugeViz from '../components/MockGaugeViz'
import MockSkillMatrixViz from '../components/MockSkillMatrixViz'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  return (
    <div className={styles.page}>
      <div className={`${styles.grid} stagger-fade`}>
        <VizPlaceholder className={styles.box1} embed={<MockMapViz />} />
        <VizPlaceholder className={styles.box2} embed={<MockGaugeViz />} />
        <VizPlaceholder className={styles.box3} embed={<MockSkillMatrixViz />} />
        <VizPlaceholder className={styles.box4} />
        <VizPlaceholder className={styles.box5} />
        <VizPlaceholder className={styles.box6} />
        <VizPlaceholder className={styles.box7} />
      </div>
    </div>
  )
}
