import GraphIcon from './GraphIcon'
import styles from './BlackBoxWithLabel.module.css'

export default function BlackBoxWithLabel({ number, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.labelRow}>
        <GraphIcon size={20} />
        <span>Data Viz {number}</span>
      </div>
      {children ? <div className={styles.content}>{children}</div> : null}
    </div>
  )
}
