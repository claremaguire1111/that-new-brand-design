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
        <section className={styles.section} style={{ backgroundColor: '#F8F8F8', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
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
            <div className={styles.contributorCard} style={{ backgroundImage: 'url("/images/background1.png")' }}>
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
            <div className={styles.contributorCard} style={{ backgroundImage: 'url("/images/background2.png")' }}>
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
            <div className={styles.contributorCard} style={{ backgroundImage: 'url("/images/background3.png")' }}>
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
        
        {/* Offerings Section */}
        <section className={styles.section} style={{ backgroundColor: '#F8F8F8', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Offerings</h2>
            <p className={styles.sectionDescription}>
              Programs and resources for advancing rigorous thinking
            </p>
          </div>
          
          <div className={styles.offeringsGrid}>
            {/* Offering 1 */}
            <div className={styles.offeringCard}>
              <div className={styles.offeringContent}>
                <h3 className={styles.offeringTitle}>
                  Conferences
                </h3>
                <p className={styles.offeringDescription}>
                  Our flagship conferences — AE Global Summit in London and neuromonster.org in Rhodes — convene leading researchers, founders, funders, and policymakers to explore open problems in AI, neuroscience, and the future of work.
                </p>
                <Link href="/offerings/conferences" className={styles.offeringLink}>
                  Explore conferences
                </Link>
              </div>
            </div>
            
            {/* Offering 2 */}
            <div className={styles.offeringCard}>
              <div className={styles.offeringContent}>
                <h3 className={styles.offeringTitle}>
                  Workshops
                </h3>
                <p className={styles.offeringDescription}>
                  Throughout the year, we host focused workshops and small-group sessions where participants tackle concrete bottlenecks in AI, computational neuroscience, research infrastructure, and governance.
                </p>
                <Link href="/offerings/workshops" className={styles.offeringLink}>
                  Explore workshops
                </Link>
              </div>
            </div>
            
            {/* Offering 3 */}
            <div className={styles.offeringCard}>
              <div className={styles.offeringContent}>
                <h3 className={styles.offeringTitle}>
                  Patron & Side Events
                </h3>
                <p className={styles.offeringDescription}>
                  From House of Lords dinners to partner events in London and beyond, our patron and side-event programme creates spaces for deeper, off-the-record dialogue among supporters, fellows, and invited guests.
                </p>
                <Link href="/offerings/patron-events" className={styles.offeringLink}>
                  Explore patron events
                </Link>
              </div>
            </div>
            
            {/* Offering 4 */}
            <div className={styles.offeringCard}>
              <div className={styles.offeringContent}>
                <h3 className={styles.offeringTitle}>
                  Ambassador Programmes
                </h3>
                <p className={styles.offeringDescription}>
                  Our student and community ambassadors help convene local ecosystems, support event delivery, and bring Thinking About Thinking into universities, labs, and communities around the world.
                </p>
                <Link href="/offerings/ambassadors" className={styles.offeringLink}>
                  Explore ambassador programmes
                </Link>
              </div>
            </div>
            
            {/* Offering 5 */}
            <div className={styles.offeringCard}>
              <div className={styles.offeringContent}>
                <h3 className={styles.offeringTitle}>
                  Fellowship
                </h3>
                <p className={styles.offeringDescription}>
                  Our Fellowship recognises exceptional ambassadors and contributors. Fellows stay closely involved in shaping our programmes, speaking at events, and mentoring the next generation.
                </p>
                <Link href="/offerings/fellowship" className={styles.offeringLink}>
                  Explore fellowship
                </Link>
              </div>
            </div>
            
            {/* Offering 6 */}
            <div className={styles.offeringCard}>
              <div className={styles.offeringContent}>
                <h3 className={styles.offeringTitle}>
                  Recordings & Podcasts
                </h3>
                <p className={styles.offeringDescription}>
                  Talks, keynotes, conversations, and podcast episodes from our events and seminars — making frontier thinking on AI, neuroscience, and society available to a wider public.
                </p>
                <Link href="/recordings" className={styles.offeringLink}>
                  Explore recordings
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recordings Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recordings & Podcasts</h2>
            <p className={styles.sectionDescription}>
              Frontier thinking on AI, neuroscience, and society
            </p>
          </div>
          
          <div className={styles.recordingsGrid}>
            {/* Recording 1 */}
            <div className={styles.recordingCard}>
              <div className={styles.recordingContent}>
                <div className={styles.recordingCategory}>
                  <span>On open problems in AI</span>
                </div>
                <h3 className={styles.recordingTitle}>
                  Keynote with [Speaker Name]
                </h3>
                <p className={styles.recordingDescription}>
                  A leading researcher in AI presents current open problems in machine learning and alignment, and explores how new mathematical tools and experimental paradigms might move the field forward.
                </p>
                <div className={styles.recordingActions}>
                  <Link href="/recordings/open-problems" className={styles.recordingLink}>
                    Watch
                  </Link>
                  <Link href="/recordings" className={styles.recordingLink}>
                    Explore recordings & podcasts
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Recording 2 */}
            <div className={styles.recordingCard}>
              <div className={styles.recordingContent}>
                <div className={styles.recordingCategory}>
                  <span>Brains, computation, and intelligence</span>
                </div>
                <h3 className={styles.recordingTitle}>
                  Seminar with [Speaker Name]
                </h3>
                <p className={styles.recordingDescription}>
                  A neuroscientist working at the interface of biology and computation shares work on how brains represent, learn, and adapt — and what this might mean for AI systems.
                </p>
                <div className={styles.recordingActions}>
                  <Link href="/recordings/brains-computation" className={styles.recordingLink}>
                    Watch
                  </Link>
                  <Link href="/recordings" className={styles.recordingLink}>
                    Explore recordings & podcasts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Focus Areas Section */}
        <section className={styles.section} style={{ backgroundColor: '#F8F8F8', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Focus Areas</h2>
            <p className={styles.sectionDescription}>
              The core themes that drive our work
            </p>
          </div>
          
          <div className={styles.focusAreasGrid}>
            {/* Focus Area 1 */}
            <div className={styles.focusAreaCard}>
              <div className={styles.focusAreaHeader} style={{ backgroundColor: '#9054A6' }}>
                <h3 className={styles.focusAreaTitle}>AI research & safety</h3>
              </div>
              <div className={styles.focusAreaContent}>
                <p className={styles.focusAreaDescription}>
                  Supporting researchers and practitioners working on the foundations, safety, and reliability of advanced AI systems.
                </p>
                <Link href="/focus/ai-safety" className={styles.focusAreaLink}>
                  View AI research & safety
                </Link>
              </div>
            </div>
            
            {/* Focus Area 2 */}
            <div className={styles.focusAreaCard}>
              <div className={styles.focusAreaHeader} style={{ backgroundColor: '#EA484B' }}>
                <h3 className={styles.focusAreaTitle}>Neuroscience & cognition</h3>
              </div>
              <div className={styles.focusAreaContent}>
                <p className={styles.focusAreaDescription}>
                  Exploring how brains compute, represent, and adapt — and how insights from neuroscience can inform artificial systems.
                </p>
                <Link href="/focus/neuroscience" className={styles.focusAreaLink}>
                  View neuroscience & cognition
                </Link>
              </div>
            </div>
            
            {/* Focus Area 3 */}
            <div className={styles.focusAreaCard}>
              <div className={styles.focusAreaHeader} style={{ backgroundColor: '#43CBCB' }}>
                <h3 className={styles.focusAreaTitle}>Mathematics & theory</h3>
              </div>
              <div className={styles.focusAreaContent}>
                <p className={styles.focusAreaDescription}>
                  Focusing on the mathematical structures underlying learning, optimization, information, and complexity.
                </p>
                <Link href="/focus/mathematics" className={styles.focusAreaLink}>
                  View mathematics & theory
                </Link>
              </div>
            </div>
            
            {/* Focus Area 4 */}
            <div className={styles.focusAreaCard}>
              <div className={styles.focusAreaHeader} style={{ backgroundColor: '#9BCF46' }}>
                <h3 className={styles.focusAreaTitle}>Society & governance</h3>
              </div>
              <div className={styles.focusAreaContent}>
                <p className={styles.focusAreaDescription}>
                  Bringing together policymakers, lawyers, and economists to think clearly about how AI reshapes power and governance.
                </p>
                <Link href="/focus/society" className={styles.focusAreaLink}>
                  View society & governance
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Milestones Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Milestones</h2>
            <p className={styles.sectionDescription}>
              Since our founding, we have been building the infrastructure — intellectual, social, and institutional — for a more thoughtful AI future.
            </p>
          </div>
          
          <div className={styles.milestonesContainer}>
            <div className={styles.milestone}>
              <div className={styles.milestoneIndicator}></div>
              <div className={styles.milestoneContent}>
                <h3 className={styles.milestoneTitle}>Launched AE Global Summit in London</h3>
                <p className={styles.milestoneDescription}>
                  Brought together researchers, engineers, founders, and policymakers to focus on open problems in AI and research infrastructure.
                </p>
              </div>
            </div>
            
            <div className={styles.milestone}>
              <div className={styles.milestoneIndicator}></div>
              <div className={styles.milestoneContent}>
                <h3 className={styles.milestoneTitle}>Created neuromonster.org</h3>
                <p className={styles.milestoneDescription}>
                  Established a retreat-format conference on the mathematics and neuroscience of intelligence in Rhodes, blending deep technical work with interdisciplinary dialogue.
                </p>
              </div>
            </div>
            
            <div className={styles.milestone}>
              <div className={styles.milestoneIndicator}></div>
              <div className={styles.milestoneContent}>
                <h3 className={styles.milestoneTitle}>Built a global ambassador network</h3>
                <p className={styles.milestoneDescription}>
                  Launched student and community ambassador programmes connecting universities, labs, and communities across multiple countries.
                </p>
              </div>
            </div>
            
            <div className={styles.milestone}>
              <div className={styles.milestoneIndicator}></div>
              <div className={styles.milestoneContent}>
                <h3 className={styles.milestoneTitle}>Established the Fellowship pathway</h3>
                <p className={styles.milestoneDescription}>
                  Introduced a Fellowship to recognise and support exceptional ambassadors and contributors who continue shaping our work.
                </p>
              </div>
            </div>
            
            <div className={styles.milestone}>
              <div className={styles.milestoneIndicator}></div>
              <div className={styles.milestoneContent}>
                <h3 className={styles.milestoneTitle}>Expanded into media and public education</h3>
                <p className={styles.milestoneDescription}>
                  Began recording and distributing talks, seminars, and podcasts to make frontier thinking accessible beyond the room.
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.sectionCta}>
            <Link href="/about" className={styles.btnOutline}>
              Learn more about Thinking About Thinking Inc.
            </Link>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className={styles.newsletterSection}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h2 className={styles.newsletterTitle}>Fund rigorous thinking about the future.</h2>
              <p className={styles.newsletterDescription}>
                Donate today
              </p>
              <Link href="/donate" className={`${styles.btnPrimary} ${styles.donateBtn}`}>
                Donate
              </Link>
            </div>
            <div className={styles.newsletterForm}>
              <h3 className={styles.newsletterFormTitle}>Subscribe to our newsletter:</h3>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className={styles.emailInput}
                />
                <button className={styles.subscribeBtn}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}