import React from 'react'
import Link from 'next/link'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Building intellectual foundations for computational intelligence
        </h1>
        
        <div className={styles.heroImageContainer}>
          {/* Placeholder for hero image */}
          <img
            src="/images/hero-image.png"
            alt="Thinking About Thinking"
            className={styles.heroImage}
          />
        </div>
        
        <p className={styles.heroDescription}>
          Thinking About Thinking Inc. is a charity dedicated to deepening our understanding of AI, neuroscience,
          and how advances in these fields shape our shared future.
        </p>
      </div>
    </section>
  )
}

export default Hero