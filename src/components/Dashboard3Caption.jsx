import styles from './Dashboard3Caption.module.css'

const SOURCE_URL = 'https://www.communityforwardredlands.com/san-bernardino-county-again-ranks-worst-in-the-nation-for-ozone-pollution/'

export default function Dashboard3Caption() {
  return (
    <div className={styles.caption}>
      <h2>California Focused Analysis</h2>
      <p>
        Despite ongoing air quality challenges, California remains a critical case study due to persistent pollution hotspots. This dashboard analyzes county-level AQI data from 2020 to 2025 to identify regions with the highest health burdens and assess long-term trends.
      </p>
      <div className={styles.separator} aria-hidden />
      <p>
        San Bernardino, Riverside, and Los Angeles counties show the greatest impacts due to transportation density, industrial activity, and geographic conditions. San Bernardino County has ranked as the nation's most ozone-polluted county for decades, reinforcing these findings (McCann, 2025).
      </p>
      <p>
        While severe pollution days persist, declining median AQI levels indicate gradual statewide improvement driven by long-term emissions regulations.
      </p>
      <p className={styles.citation}>
        Source: <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer">McCann, 2025</a>
      </p>
    </div>
  )
}
