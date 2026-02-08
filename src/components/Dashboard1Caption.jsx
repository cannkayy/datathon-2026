import styles from './Dashboard1Caption.module.css'

export default function Dashboard1Caption() {
  return (
    <div className={styles.caption}>
      <p>
        Air pollution is a critical public health risk driven by industrial emissions, wildfire smoke, and shifting climate patterns. This analysis examines U.S. Air Quality Index (AQI) data from 2020 to 2025 to provide a unified view of the nation's atmospheric health.
      </p>
      <div className={styles.separator} aria-hidden />
      <h2 className={styles.heading}>Objectives</h2>
      <p className={styles.item}>
        <strong>Identify Hotspots:</strong> Pinpoint states and counties with the highest frequency of unhealthy or hazardous days.
      </p>
      <p className={styles.item}>
        <strong>Analyze Trends:</strong> Visualize regional AQI shifts to identify areas of improvement or decline.
      </p>
    </div>
  )
}
