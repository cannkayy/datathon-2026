import styles from './Dashboard2Caption.module.css'

export default function Dashboard2Caption() {
  return (
    <div className={styles.caption}>
      <p>
        This dashboard compares the average percentage of Unhealthy AQI days across U.S. states and counties from 2020 to 2025.
      </p>
      <p>
        The left chart aggregates data at the state level, showing which states experience a higher share of unhealthy air quality days on average.
      </p>
      <p>
        The right chart drills down to the county level, highlighting localized pollution hotspots.
      </p>
      <p className={styles.tip}>
        Use the sliders to adjust the number of top states and counties displayed.
      </p>
    </div>
  )
}
