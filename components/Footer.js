import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerMain}>
            <div className={styles.logoSection}>
              <div className={styles.logo}>
                <span className={styles.logoText}>THINKING ABOUT</span>
                <span className={styles.logoSubtext}>THINKING</span>
              </div>
              <p className={styles.tagline}>
                Building intellectual foundations for computational intelligence.
              </p>
            </div>
            
            <div className={styles.footerNav}>
              <div className={styles.footerColumn}>
                <h3 className={styles.columnTitle}>About</h3>
                <ul className={styles.columnList}>
                  <li><Link href="/about">Mission</Link></li>
                  <li><Link href="/team">Team</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
              
              <div className={styles.footerColumn}>
                <h3 className={styles.columnTitle}>Offerings</h3>
                <ul className={styles.columnList}>
                  <li><Link href="/offerings/conferences">Conferences</Link></li>
                  <li><Link href="/offerings/workshops">Workshops</Link></li>
                  <li><Link href="/offerings/patron-events">Patron Events</Link></li>
                  <li><Link href="/recordings">Recordings</Link></li>
                </ul>
              </div>
              
              <div className={styles.footerColumn}>
                <h3 className={styles.columnTitle}>Focus Areas</h3>
                <ul className={styles.columnList}>
                  <li><Link href="/focus/ai">AI research & safety</Link></li>
                  <li><Link href="/focus/neuroscience">Neuroscience & cognition</Link></li>
                  <li><Link href="/focus/mathematics">Mathematics & theory</Link></li>
                  <li><Link href="/focus/society">Society & governance</Link></li>
                </ul>
              </div>
              
              <div className={styles.footerColumn}>
                <h3 className={styles.columnTitle}>Connect</h3>
                <ul className={styles.columnList}>
                  <li><Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
                  <li><Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
                  <li><Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</Link></li>
                  <li><Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Thinking About Thinking Inc. All rights reserved.
            </p>
            <div className={styles.footerLinks}>
              <Link href="/privacy" className={styles.footerLink}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={styles.footerLink}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer