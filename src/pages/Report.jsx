import VizPlaceholder from '../components/VizPlaceholder'
import TableauEmbed from '../components/TableauEmbed'
import TableauEmbedOverview from '../components/TableauEmbedOverview'
import TableauEmbedThirdRow from '../components/TableauEmbedThirdRow'
import Dashboard1Caption from '../components/Dashboard1Caption'
import Dashboard2Caption from '../components/Dashboard2Caption'
import Dashboard3Caption from '../components/Dashboard3Caption'
import BlackBoxWithLabel from '../components/BlackBoxWithLabel'
import styles from './Report.module.css'

const TEAM = [
  { name: 'Ahn Do', linkedin: 'https://www.linkedin.com/in/anhdo24/' },
  { name: 'Christie Dong', linkedin: 'https://www.linkedin.com/in/xinyi-dong-734375243/' },
  { name: 'Stephanie Balderas', linkedin: 'https://www.linkedin.com/in/stephanie-balderas-vega/' },
  { name: 'Cannon Hurst', linkedin: 'https://www.linkedin.com/in/cannonhurst/' },
]

const SECTIONS = [
  {
    title: 'Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    title: 'Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    title: 'Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
]

export default function Report() {
  return (
    <div className={styles.page}>
      <div className="stagger-fade">
        <header className={styles.reportHeader}>
          <h1 className={styles.title}>Datathon 2026</h1>
          <div className={styles.namePills}>
            {TEAM.map(({ name, linkedin }) => (
              <a key={name} href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.pill}>
                {name}
                <svg className={styles.pillIcon} viewBox="0 0 24 24" aria-hidden>
                  <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7h-8M17 7v8"/>
                </svg>
              </a>
            ))}
          </div>
        </header>
        {SECTIONS.map((section, i) => (
        <section key={i} className={styles.section}>
          <div className={i === 0 ? `${styles.vizRow} ${styles.vizRowFirst}` : i === 1 ? `${styles.vizRow} ${styles.vizRowDashboard}` : i === 2 ? `${styles.vizRow} ${styles.vizRowThird}` : styles.vizRow}>
            {i === 0 ? (
              <>
                <VizPlaceholder embed={<BlackBoxWithLabel number={1}><Dashboard1Caption /></BlackBoxWithLabel>} />
                <VizPlaceholder embed={<TableauEmbed />} />
              </>
            ) : i === 1 ? (
              <>
                <VizPlaceholder embed={<TableauEmbedOverview />} />
                <VizPlaceholder embed={<BlackBoxWithLabel number={2}><Dashboard2Caption /></BlackBoxWithLabel>} />
              </>
            ) : (
              <>
                <VizPlaceholder embed={<BlackBoxWithLabel number={3}><Dashboard3Caption /></BlackBoxWithLabel>} />
                <VizPlaceholder embed={<TableauEmbedThirdRow />} />
              </>
            )}
          </div>
        </section>
        ))}
      </div>
    </div>
  )
}
