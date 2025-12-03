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
            <div className={styles.colorCard} style={{ backgroundColor: '#1B7774' }}>
              <div className={styles.colorInfo}>
                <h3 className={styles.colorName}>Primary Teal</h3>
                <p className={styles.colorHex}>#1B7774</p>
                <p className={styles.colorDescription}>Main brand color, nav bars, key buttons, headings accents.</p>
              </div>
            </div>

            <div className={styles.colorCard} style={{ backgroundColor: '#0A3537' }}>
              <div className={styles.colorInfo}>
                <h3 className={styles.colorName}>Deep Teal</h3>
                <p className={styles.colorHex}>#0A3537</p>
                <p className={styles.colorDescription}>For dark gradients, footers, premium speaker cards.</p>
              </div>
            </div>

            <div className={styles.colorCard} style={{ backgroundColor: '#E1F1F4' }}>
              <div className={styles.colorInfo} style={{ color: '#111111' }}>
                <h3 className={styles.colorName}>Light Aqua</h3>
                <p className={styles.colorHex}>#E1F1F4</p>
                <p className={styles.colorDescription}>For hero backgrounds, card backgrounds, and page sections.</p>
              </div>
            </div>

            <div className={styles.colorCard} style={{ backgroundColor: '#CFE3F6' }}>
              <div className={styles.colorInfo} style={{ color: '#111111' }}>
                <h3 className={styles.colorName}>Sky Blue</h3>
                <p className={styles.colorHex}>#CFE3F6</p>
                <p className={styles.colorDescription}>For job/update posts, light sections, and subtle highlights.</p>
              </div>
            </div>

            <div className={styles.colorCard} style={{ backgroundColor: '#CDEFD9' }}>
              <div className={styles.colorInfo} style={{ color: '#111111' }}>
                <h3 className={styles.colorName}>Soft Mint</h3>
                <p className={styles.colorHex}>#CDEFD9</p>
                <p className={styles.colorDescription}>For light green gradient card backgrounds and accents.</p>
              </div>
            </div>
          </div>

          <h3 className={styles.colorSubtitle}>Neutrals</h3>
          <div className={styles.colorGrid}>
            <div className={styles.colorCard} style={{ backgroundColor: '#FFFFFF' }}>
              <div className={styles.colorInfo} style={{ color: '#111111' }}>
                <h3 className={styles.colorName}>Card White</h3>
                <p className={styles.colorHex}>#FFFFFF</p>
                <p className={styles.colorDescription}>All content cards, speaker cards, event tiles.</p>
              </div>
            </div>

            <div className={styles.colorCard} style={{ backgroundColor: '#F7F9FB' }}>
              <div className={styles.colorInfo} style={{ color: '#111111' }}>
                <h3 className={styles.colorName}>Background Light</h3>
                <p className={styles.colorHex}>#F7F9FB</p>
                <p className={styles.colorDescription}>Base page background behind everything.</p>
              </div>
            </div>

            <div className={styles.colorCard} style={{ backgroundColor: '#111111' }}>
              <div className={styles.colorInfo} style={{ color: '#FFFFFF' }}>
                <h3 className={styles.colorName}>Text Dark</h3>
                <p className={styles.colorHex}>#111111</p>
                <p className={styles.colorDescription}>Main body text, headings.</p>
              </div>
            </div>

            <div className={styles.colorCard} style={{ backgroundColor: '#4B4F57' }}>
              <div className={styles.colorInfo} style={{ color: '#FFFFFF' }}>
                <h3 className={styles.colorName}>Soft Grey</h3>
                <p className={styles.colorHex}>#4B4F57</p>
                <p className={styles.colorDescription}>Secondary text, captions, dividers.</p>
              </div>
            </div>
          </div>

          <h3 className={styles.colorSubtitle}>Accent</h3>
          <div className={styles.colorGrid}>
            <div className={styles.colorCard} style={{ backgroundColor: '#EB8C5A' }}>
              <div className={styles.colorInfo}>
                <h3 className={styles.colorName}>Warm Accent (Coral/Orange)</h3>
                <p className={styles.colorHex}>#EB8C5A</p>
                <p className={styles.colorDescription}>Tiny hits only – links, tags, subtle highlights in gradients.</p>
              </div>
            </div>
          </div>

          <div className={styles.colorUsage}>
            <h3 className={styles.usageTitle}>Color Usage Guidelines</h3>
            <ul className={styles.usageList}>
              <li><strong>Website hero & section backgrounds:</strong> Gradients between #E1F1F4 ↔ #CFE3F6 ↔ #CDEFD9</li>
              <li><strong>Dark abstract backgrounds:</strong> Gradients between #0A3537 ↔ #1B7774</li>
              <li><strong>Social job posts / announcements:</strong> Flat or subtle gradient #CFE3F6 → #E1F1F4</li>
              <li><strong>Cards (events, speakers, offerings):</strong> Card fill #FFFFFF on a background of #E1F1F4 or the teal gradient</li>
              <li><strong>Key buttons and calls to action:</strong> Primary Teal #1B7774</li>
              <li><strong>Accent highlights:</strong> Use Warm Accent #EB8C5A sparingly for emphasis</li>
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
              <h3 className={styles.fontTitle}>Headings: Montserrat</h3>
              <div className={styles.fontSamples}>
                <p className={styles.fontSampleHeading1}>The Foundations of Intelligence</p>
                <p className={styles.fontSampleHeading2}>Computational Models & Neuroscience</p>
                <p className={styles.fontSampleHeading3}>Society, Ethics & Governance</p>
              </div>
              <p className={styles.fontDescription}>
                Montserrat is our primary heading font. Its geometric, open forms convey clarity and modernity while maintaining intellectual weight.
              </p>
            </div>

            <div className={styles.fontFamily}>
              <h3 className={styles.fontTitle}>Body: Merriweather</h3>
              <div className={styles.fontSamples}>
                <p className={styles.fontSampleBody}>
                  Thinking About Thinking Inc. is a charity dedicated to deepening our understanding of AI, neuroscience, and how advances in these fields shape our shared future. We bring together researchers, practitioners, and thought leaders to explore open problems at the intersection of computation, cognition, and society.
                </p>
              </div>
              <p className={styles.fontDescription}>
                Merriweather provides excellent readability for longer text, with a scholarly feel that suits our intellectual content while remaining accessible.
              </p>
            </div>
          </div>

          <div className={styles.typographyRules}>
            <h3 className={styles.rulesTitle}>Typography Guidelines</h3>
            <ul className={styles.rulesList}>
              <li>Use Montserrat for headings, navigation, and UI elements</li>
              <li>Use Merriweather for body text, quotes, and longer-form content</li>
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
                    src="/images/background1.png" 
                    alt="Neural Network Pattern"
                    width={300} 
                    height={200}
                    className={styles.patternImage}
                  />
                  <p className={styles.imageCaption}>Neural Network Pattern</p>
                </div>
                <div className={styles.imageItem}>
                  <Image 
                    src="/images/background2.png" 
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

        {/* Voice & Tone Section */}
        <section className={styles.section} id="voice">
          <h2 className={styles.sectionTitle}>Voice & Tone</h2>
          <p className={styles.sectionDescription}>
            Our communication style balances intellectual depth with accessibility, striving to make complex ideas approachable without oversimplification.
          </p>

          <div className={styles.voiceExamples}>
            <div className={styles.voiceCard}>
              <h3 className={styles.voiceTitle}>Values We Communicate</h3>
              <ul className={styles.voiceList}>
                <li><strong>Intellectual rigor:</strong> We engage deeply with ideas and communicate with precision</li>
                <li><strong>Inclusivity:</strong> We make complex concepts accessible without oversimplification</li>
                <li><strong>Optimism:</strong> We approach challenges with a constructive mindset</li>
                <li><strong>Humility:</strong> We acknowledge the limits of current understanding</li>
                <li><strong>Collaboration:</strong> We emphasize the value of diverse perspectives</li>
              </ul>
            </div>

            <div className={styles.voiceCard}>
              <h3 className={styles.voiceTitle}>Communication Guidelines</h3>
              <ul className={styles.voiceList}>
                <li>Be clear and precise in language, avoiding jargon when possible</li>
                <li>When technical terms are necessary, explain them briefly</li>
                <li>Use active voice and direct address</li>
                <li>Balance formality with approachability</li>
                <li>Emphasize questions and exploration rather than definitive answers</li>
                <li>Highlight interdisciplinary connections</li>
              </ul>
            </div>
          </div>

          <div className={styles.toneExamples}>
            <h3 className={styles.examplesTitle}>Voice Examples</h3>
            
            <div className={styles.example}>
              <p className={styles.exampleLabel}>Example: Describing Our Mission</p>
              <div className={styles.exampleContent}>
                <p>
                  "Thinking About Thinking Inc. creates spaces where researchers, engineers, and policymakers can collaboratively tackle open problems in AI and neuroscience. We don't claim to have all the answers, but we're committed to asking better questions and building the intellectual foundations for a more thoughtful approach to computational intelligence."
                </p>
              </div>
            </div>
            
            <div className={styles.example}>
              <p className={styles.exampleLabel}>Example: Announcing an Event</p>
              <div className={styles.exampleContent}>
                <p>
                  "Join us this October for AE Global Summit in London, where we'll explore pressing challenges in AI development and governance. Through workshops, keynotes, and structured dialogue, participants will engage with questions at the frontier of computational intelligence—from technical alignment problems to institutional design for responsible innovation."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className={styles.downloadSection}>
          <div className={styles.downloadContainer}>
            <h2 className={styles.downloadHeading}>Complete Brand Package</h2>
            <p className={styles.downloadDescription}>
              Access all brand assets, guidelines, and templates in a single download.
            </p>
            <Link href="/assets/ThAT_complete_brand_kit.zip" className={styles.mainDownloadButton}>
              Download Complete Brand Kit
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactContainer}>
            <h2 className={styles.contactHeading}>Brand Inquiries</h2>
            <p className={styles.contactDescription}>
              For specific questions about our brand or to request additional assets, please contact our communications team.
            </p>
            <a href="mailto:brand@thinkingaboutthinking.org" className={styles.contactLink}>
              brand@thinkingaboutthinking.org
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}