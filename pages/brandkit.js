import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/BrandKit.module.css'

export default function BrandKit() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brand Kit - Thinking About Thinking</title>
        <meta name="description" content="Official brand guidelines and assets for Thinking About Thinking Inc." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>Brand Kit</h1>
          <p className={styles.description}>Official brand guidelines and assets for Thinking About Thinking Inc.</p>
        </div>

        {/* Logo Section */}
        <section className={styles.section} id="logo">
          <h2 className={styles.sectionTitle}>Logo</h2>
          <p className={styles.sectionDescription}>
            Our logo represents the interconnected nature of intelligence, computation, and human cognition. The overlapping elements symbolize the interdisciplinary approach we take to advancing understanding in AI and neuroscience.
          </p>

          <div className={styles.logoDisplay}>
            <div className={styles.logoVariant}>
              <div className={styles.logoFrame}>
                <Image 
                  src="/images/ThAT_logo_navbar.png" 
                  alt="Thinking About Thinking Primary Logo"
                  width={300} 
                  height={75}
                  className={styles.logoImage}
                />
              </div>
              <p className={styles.logoCaption}>Primary Logo</p>
            </div>

            <div className={styles.logoSpecs}>
              <h3 className={styles.specsTitle}>Logo Specifications</h3>
              <ul className={styles.specsList}>
                <li>Maintain clear space equal to the height of the letter "T" around the logo</li>
                <li>Do not stretch, distort, or alter the proportions of the logo</li>
                <li>Do not apply effects, shadows, or outlines to the logo</li>
                <li>Minimum size for digital use: 80px wide</li>
                <li>Minimum size for print use: 1 inch wide</li>
              </ul>
            </div>
          </div>

          <div className={styles.assetDownload}>
            <h3 className={styles.downloadTitle}>Logo Assets</h3>
            <div className={styles.downloadButtons}>
              <Link href="/assets/ThAT_logo_full.zip" className={styles.downloadButton}>
                Download Logo Package
              </Link>
            </div>
          </div>
        </section>

        {/* Color Palette Section */}
        <section className={styles.section} id="colors">
          <h2 className={styles.sectionTitle}>Color Palette</h2>
          <p className={styles.sectionDescription}>
            Our color palette reflects the depth and complexity of intellectual inquiry while maintaining a vibrant, accessible aesthetic.
          </p>

          <h3 className={styles.colorSubtitle}>Core Brand Colors</h3>
          <div className={styles.colorGrid}>
            <div className={styles.colorCard} style={{ backgroundColor: '#1B335A' }}>
              <div className={styles.colorInfo}>
                <h3 className={styles.colorName}>Deep Blue Accent</h3>
                <p className={styles.colorHex}>#1B335A</p>
                <p className={styles.colorDescription}>For headers, footers, key buttons, and accent elements.</p>
              </div>
            </div>

            <div className={styles.colorCard} style={{ backgroundColor: '#AFC8E9' }}>
              <div className={styles.colorInfo} style={{ color: '#1A1A1A' }}>
                <h3 className={styles.colorName}>Medium Blue</h3>
                <p className={styles.colorHex}>#AFC8E9</p>
                <p className={styles.colorDescription}>Core gradient color, used for backgrounds and highlights.</p>
              </div>
            </div>

            <div className={styles.colorCard} style={{ backgroundColor: '#DCE9F7' }}>
              <div className={styles.colorInfo} style={{ color: '#1A1A1A' }}>
                <h3 className={styles.colorName}>Light Blue</h3>
                <p className={styles.colorHex}>#DCE9F7</p>
                <p className={styles.colorDescription}>Core gradient color, used for hero backgrounds and page sections.</p>
              </div>
            </div>

            <div className={styles.colorCard} style={{ backgroundColor: '#E6E8EA' }}>
              <div className={styles.colorInfo} style={{ color: '#1A1A1A' }}>
                <h3 className={styles.colorName}>Soft Steel Grey</h3>
                <p className={styles.colorHex}>#E6E8EA</p>
                <p className={styles.colorDescription}>For subtle backgrounds, dividers, and secondary elements.</p>
              </div>
            </div>
          </div>

          <h3 className={styles.colorSubtitle}>Neutrals</h3>
          <div className={styles.colorGrid}>
            <div className={styles.colorCard} style={{ backgroundColor: '#FFFFFF' }}>
              <div className={styles.colorInfo} style={{ color: '#1A1A1A' }}>
                <h3 className={styles.colorName}>White</h3>
                <p className={styles.colorHex}>#FFFFFF</p>
                <p className={styles.colorDescription}>For content cards, backgrounds, and contrast elements.</p>
              </div>
            </div>

            <div className={styles.colorCard} style={{ backgroundColor: '#1A1A1A' }}>
              <div className={styles.colorInfo} style={{ color: '#FFFFFF' }}>
                <h3 className={styles.colorName}>Charcoal</h3>
                <p className={styles.colorHex}>#1A1A1A</p>
                <p className={styles.colorDescription}>For main text, headings, and dark UI elements.</p>
              </div>
            </div>
          </div>


          <div className={styles.colorUsage}>
            <h3 className={styles.usageTitle}>Color Usage Guidelines</h3>
            <ul className={styles.usageList}>
              <li><strong>Website hero & section backgrounds:</strong> Gradients between #DCE9F7 ↔ #AFC8E9</li>
              <li><strong>Dark abstract backgrounds:</strong> #1B335A with white text</li>
              <li><strong>Social media posts / announcements:</strong> Flat or subtle gradient #AFC8E9 → #DCE9F7</li>
              <li><strong>Cards (events, speakers, offerings):</strong> Card fill #FFFFFF on a background of #DCE9F7 or the blue gradient</li>
              <li><strong>Key buttons and calls to action:</strong> Deep Blue Accent #1B335A</li>
              <li><strong>Neutral backgrounds and dividers:</strong> Soft Steel Grey #E6E8EA</li>
              <li><strong>Text:</strong> Primary text in Charcoal #1A1A1A, secondary text slightly lighter</li>
            </ul>
          </div>
        </section>

        {/* Typography Section */}
        <section className={styles.section} id="typography">
          <h2 className={styles.sectionTitle}>Typography</h2>
          <p className={styles.sectionDescription}>
            Our typography balances clarity and intellectual depth, using a contemporary sans-serif for headings and a highly readable serif for body text.
          </p>

          <div className={styles.typographyDisplay}>
            <div className={styles.fontFamily}>
              <h3 className={styles.fontTitle}>Headings: Inter</h3>
              <div className={styles.fontSamples}>
                <p className={styles.fontSampleHeading1}>The Foundations of Intelligence</p>
                <p className={styles.fontSampleHeading2}>Computational Models & Neuroscience</p>
                <p className={styles.fontSampleHeading3}>Society, Ethics & Governance</p>
              </div>
              <p className={styles.fontDescription}>
                Inter is our primary heading font. Its geometric, open forms convey clarity and modernity while maintaining intellectual weight.
              </p>
            </div>

            <div className={styles.fontFamily}>
              <h3 className={styles.fontTitle}>Body: Cardo</h3>
              <div className={styles.fontSamples}>
                <p className={styles.fontSampleBody}>
                  Thinking About Thinking Inc. is a charity dedicated to deepening our understanding of AI, neuroscience, and how advances in these fields shape our shared future. We bring together researchers, practitioners, and thought leaders to explore open problems at the intersection of computation, cognition, and society.
                </p>
              </div>
              <p className={styles.fontDescription}>
                Cardo provides excellent readability for longer text, with a scholarly feel that suits our intellectual content while remaining accessible.
              </p>
            </div>
          </div>

          <div className={styles.typographyRules}>
            <h3 className={styles.rulesTitle}>Typography Guidelines</h3>
            <ul className={styles.rulesList}>
              <li>Use Inter for headings, navigation, and UI elements</li>
              <li>Use Cardo for body text, quotes, and longer-form content</li>
              <li>Maintain proper hierarchy with clear size differentiation between heading levels</li>
              <li>For digital, minimum body text size should be 16px</li>
              <li>For print, minimum body text size should be 10pt</li>
              <li>Line height for body text should be 1.5-1.6x the font size</li>
            </ul>
          </div>

          <div className={styles.assetDownload}>
            <h3 className={styles.downloadTitle}>Font Assets</h3>
            <div className={styles.downloadButtons}>
              <Link href="/assets/ThAT_fonts.zip" className={styles.downloadButton}>
                Download Font Package
              </Link>
            </div>
          </div>
        </section>

        {/* Imagery & Graphics Section */}
        <section className={styles.section} id="imagery">
          <h2 className={styles.sectionTitle}>Imagery & Graphics</h2>
          <p className={styles.sectionDescription}>
            Our visual language uses abstract representations of neural networks, brain structures, and computational models to convey complex ideas in an accessible, visually engaging way.
          </p>

          <div className={styles.imageryExamples}>
            <div className={styles.imageryCategory}>
              <h3 className={styles.categoryTitle}>Background Patterns</h3>
              <div className={styles.imagesGrid}>
                <div className={styles.imageItem}>
                  <Image 
                    src="/images/1940fbf3-e446-4a1e-89ed-e3a8dc5a7617-md.jpg" 
                    alt="Neural Network Pattern"
                    width={300} 
                    height={200}
                    className={styles.patternImage}
                  />
                  <p className={styles.imageCaption}>Neural Network Pattern</p>
                </div>
                <div className={styles.imageItem}>
                  <Image 
                    src="/images/86760322-d4d3-446d-8887-0a7ee498ac48-md.jpg" 
                    alt="Brain Structure Pattern"
                    width={300} 
                    height={200}
                    className={styles.patternImage}
                  />
                  <p className={styles.imageCaption}>Brain Structure Pattern</p>
                </div>
              </div>
            </div>

            <div className={styles.imageryRules}>
              <h3 className={styles.rulesTitle}>Imagery Guidelines</h3>
              <ul className={styles.rulesList}>
                <li>Use abstract patterns that suggest neural networks, computation, and cognition</li>
                <li>Maintain a balance of complexity and clarity—imagery should be intellectually stimulating but not overwhelming</li>
                <li>Apply our color palette consistently across all visual assets</li>
                <li>When using photography, prefer images that show diverse groups of people engaged in collaboration, research, and thoughtful discussion</li>
                <li>Avoid cliché AI imagery (robots, terminators, etc.) and simplistic brain iconography</li>
              </ul>
            </div>
          </div>

          <div className={styles.assetDownload}>
            <h3 className={styles.downloadTitle}>Imagery Assets</h3>
            <div className={styles.downloadButtons}>
              <Link href="/assets/ThAT_imagery.zip" className={styles.downloadButton}>
                Download Imagery Package
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}