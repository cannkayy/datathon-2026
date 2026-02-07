import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={styles.header}>
      <div className={`${styles.logoSlot} ${scrolled ? styles.logoSlotScrolled : ''}`}>
        <Link to="/report" className={styles.logoLink} aria-label="Go to Report">
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <NavLink
          to="/report"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
          }
        >
          <span className={styles.linkText}>Report</span>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
          }
        >
          <span className={styles.linkText}>Dashboard</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
          }
        >
          <span className={styles.linkText}>About</span>
        </NavLink>
      </nav>
      <div className={styles.logoSlot} aria-hidden="true" />
    </header>
  )
}
