import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thinking About Thinking - Building intellectual foundations for computational intelligence</title>
        <meta name="description" content="Thinking About Thinking Inc. is a charity dedicated to deepening our understanding of AI, neuroscience, and how advances in these fields shape our shared future." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className={styles.main}>
        <Hero />
        
        {/* Upcoming Events Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Upcoming Events</h2>
            <p className={styles.sectionDescription}>
              Join us at our events to connect with experts and enthusiasts in AI, neuroscience, and society.
            </p>
          </div>
          
          <div className={styles.eventsGrid}>
            {/* Event 1 */}
            <div className={styles.eventCard}>
              <div className={styles.eventDate}>
                <span className={styles.month}>OCT</span>
                <span className={styles.day}>28</span>
              </div>
              <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>AE Global Summit – London</h3>
                <p className={styles.eventDescription}>
                  Open Problems in AI
                </p>
                <div className={styles.eventMeta}>
                  <span className={styles.eventType}>October 28–30, 2026</span>
                  <span className={styles.eventDuration}>London, UK</span>
                </div>
                <Link href="/events/ae-summit" className={styles.eventLink}>
                  Register
                </Link>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className={styles.eventCard}>
              <div className={styles.eventDate}>
                <span className={styles.month}>JUN</span>
                <span className={styles.day}>15</span>
              </div>
              <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>neuromonster.org – Rhodes</h3>
                <p className={styles.eventDescription}>
                  Mathematics, Neuroscience, and Intelligence
                </p>
                <div className={styles.eventMeta}>
                  <span className={styles.eventType}>June 2026</span>
                  <span className={styles.eventDuration}>Rhodes, Greece</span>
                </div>
                <Link href="/events/neuromonster" className={styles.eventLink}>
                  Register interest
                </Link>
              </div>
            </div>
          </div>
          
          <div className={styles.sectionCta}>
            <Link href="/events" className={styles.btnOutline}>
              All upcoming events
            </Link>
          </div>
        </section>
        
        {/* Distinguished Speakers Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Distinguished Speakers & Contributors</h2>
            <p className={styles.sectionDescription}>
              Selected contributors to our programmes
            </p>
          </div>
          
          <div className={styles.contributorsGrid}>
            {/* Group 1 */}
            <div 
              className={styles.contributorCard} 
              style={{ 
                backgroundImage: 'url("/images/1940fbf3-e446-4a1e-89ed-e3a8dc5a7617-md.jpg?v=2")',
                backgroundColor: 'var(--blue-medium)'
              }}
            >
              <div className={styles.contributorContent}>
                <h3 className={styles.contributorTitle}>
                  Leaders in AI research
                </h3>
                <p className={styles.contributorDescription}>
                  Senior researchers and engineers from organizations such as Google DeepMind, Meta, and leading research labs share work on open problems in AI, safety, and infrastructure.
                </p>
                <Link href="/programs/ae-summit" className={styles.contributorLink}>
                  Explore AE Global Summit
                </Link>
              </div>
            </div>
            
            {/* Group 2 */}
            <div 
              className={styles.contributorCard} 
              style={{ 
                backgroundImage: 'url("/images/1940fbf3-e446-4a1e-89ed-e3a8dc5a7617-md.jpg?v=2")',
                backgroundColor: 'var(--blue-dark)'
              }}
            >
              <div className={styles.contributorContent}>
                <h3 className={styles.contributorTitle}>
                  Neuroscience and mathematics of intelligence
                </h3>
                <p className={styles.contributorDescription}>
                  Professors and researchers from institutions including Oxford, UCL, and MIT contribute talks and workshops on neural dynamics, cognition, and formal models of intelligence.
                </p>
                <Link href="/programs/neuromonster" className={styles.contributorLink}>
                  Explore neuromonster.org
                </Link>
              </div>
            </div>
            
            {/* Group 3 */}
            <div 
              className={styles.contributorCard} 
              style={{ 
                backgroundImage: 'url("/images/1940fbf3-e446-4a1e-89ed-e3a8dc5a7617-md.jpg?v=2")',
                backgroundColor: 'var(--blue-darkest)'
              }}
            >
              <div className={styles.contributorContent}>
                <h3 className={styles.contributorTitle}>
                  Policy, governance, and society
                </h3>
                <p className={styles.contributorDescription}>
                  Policymakers, legal scholars, and institutional leaders join us to examine how AI reshapes institutions, economies, and civic life — and what responsible governance could look like.
                </p>
                <Link href="/events" className={styles.contributorLink}>
                  Explore our events
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}