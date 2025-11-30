import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  
  // Close dropdown when clicking outside
  const navRef = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [navRef])

  // Toggle dropdown
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header className={`${styles.header} navbarHeader`} ref={navRef}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logo}>
              <Image 
                src="/images/ThAT_logo_navbar.png" 
                alt="Thinking About Thinking Logo"
                width={120} 
                height={30}
                className={styles.logoImage}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Empty Space */}
          <div className={styles.spacer}></div>

          <div className={styles.navActions}>
            <Link href="/donate" className={styles.donateButton}>
              Donate
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className={styles.mobileMenuBtn} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={styles.menuPill}>
                {mobileMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className={styles.mobileNav}>
            <div className={styles.menuContainer}>
              <div className={styles.menuColumns}>
                <div className={styles.menuColumn}>
                  <h3 className={styles.menuColumnTitle}>Focus Areas</h3>
                  <ul className={styles.menuColumnList}>
                    <li><Link href="/focus/ai">AI research & safety</Link></li>
                    <li><Link href="/focus/neuroscience">Neuroscience & cognition</Link></li>
                    <li><Link href="/focus/mathematics">Mathematics & theory</Link></li>
                    <li><Link href="/focus/society">Society & governance</Link></li>
                  </ul>
                </div>
                
                <div className={styles.menuColumn}>
                  <h3 className={styles.menuColumnTitle}>Engage</h3>
                  <ul className={styles.menuColumnList}>
                    <li><Link href="/offerings/conferences">Conferences</Link></li>
                    <li><Link href="/offerings/workshops">Workshops</Link></li>
                    <li><Link href="/offerings/patron-events">Patron Events</Link></li>
                    <li><Link href="/offerings/ambassadors">Ambassadors</Link></li>
                    <li><Link href="/offerings/fellowship">Fellowship</Link></li>
                    <li><Link href="/recordings">Recordings</Link></li>
                  </ul>
                </div>
                
                <div className={styles.menuColumn}>
                  <h3 className={styles.menuColumnTitle}>Resources</h3>
                  <ul className={styles.menuColumnList}>
                    <li><Link href="/resources/recordings">Recordings</Link></li>
                    <li><Link href="/resources/podcasts">Podcasts</Link></li>
                  </ul>
                </div>
                
                <div className={styles.menuColumn}>
                  <h3 className={styles.menuColumnTitle}>About</h3>
                  <ul className={styles.menuColumnList}>
                    <li><Link href="/about/mission">Mission</Link></li>
                    <li><Link href="/about/team">Team</Link></li>
                    <li><Link href="/about/history">History</Link></li>
                    <li><Link href="/about/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar