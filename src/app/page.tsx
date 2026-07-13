import type { Metadata } from 'next';
import Image from 'next/image';
import CallCalendar from '../components/CallCalendar';
import ContactButton from '../components/ContactButton';
import BookCallCard from '../components/BookCallCard';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Explore the personal portfolio of Vikas Prasad, a Full Stack Developer specializing in Next.js, React, Node.js, Express, MongoDB, and AWS cloud solutions.',
};

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-profile-bg-wrapper">
          <div className="hero-profile-image">
            <Image 
              src="/images/vikas_1.jpg" 
              alt="Profile" 
              width={110}
              height={110}
              priority
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>

        <div className="hero-divider"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            Hey, I&apos;m Vikas Prasad!<br />Welcome to my<br />corner of the internet!
          </h1>
        </div>

        <div className="hero-subtitle-container">
          <p className="hero-subtitle">
            I&apos;m a developer with a passion for building great software and a knack for tinkering. This site serves as my portfolio where I showcase my ideas, projects, and experiments!
          </p>
        </div>

        <div className="hero-ctas">
          <a href="/projects" className="hero-cta-primary">
            Explore Projects
          </a>
          <ContactButton />
        </div>
      </section>

      {/* Sandbox Section */}
      <section className="section-block">
        <div className="section-divider"></div>
        <div className="section-header-centered">
          <span className="section-label">Projects</span>
          <h2 className="section-title-centered desktop-only-text">My Experiment</h2>
          <h2 className="section-title-centered mobile-only-text">My Projects</h2>
        </div>

        <div className="sandbox-grid">
          {/* Card 1: Samarthwave Hospitality Project */}
          <div className="sandbox-card project-card">
            <div className="project-graphic">
              <Image 
                src="/images/samarthwave.png" 
                alt="Samarthwave Hospitality" 
                className="project-screenshot" 
                width={600}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <div className="project-card-body">
              <h3>Samarthwave Hospitality</h3>
              <div className="project-links">
                <a href="https://github.com/vikasPrasad05" target="_blank" rel="noopener noreferrer" className="project-link-btn github-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>GITHUB</span>
                </a>
                <a href="https://www.samarthwavehospitality.com" target="_blank" rel="noopener noreferrer" className="project-link-btn live-btn">
                  <span>LIVE DEMO</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-icon-right">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Speaking */}
          <div className="sandbox-card speaking-card coming-soon-card">
            <div className="speaking-graphic">
               <svg viewBox="0 0 200 200" className="speaking-svg">
                  <circle className="ring-outer" cx="100" cy="100" r="80" fill="none" stroke="#eef2ff" strokeWidth="2.5" opacity="0.4" />
                  <circle className="ring-inner" cx="100" cy="100" r="60" fill="none" stroke="#e0e7ff" strokeWidth="2.5" opacity="0.4" />
                  <circle cx="100" cy="100" r="40" fill="#f3f4f6" opacity="0.4" />
                  <rect x="65" y="80" width="70" height="40" rx="20" fill="#fff" stroke="#e5e7eb" strokeWidth="1" opacity="0.4" />
               </svg>
            </div>
            <div className="card-text">
              <p className="coming-soon-label">Coming Soon</p>
            </div>
          </div>

          {/* Card 3: Community Wall */}
          <div className="sandbox-card community-card coming-soon-card">
             <div className="community-graphic">
               <div className="mock-card mock-card-1" style={{ opacity: 0.3 }}></div>
               <div className="mock-card mock-card-2" style={{ opacity: 0.3 }}></div>
             </div>
            <div className="card-text">
              <p className="coming-soon-label">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-block">
        <div className="section-divider"></div>
        <div className="section-header-centered">
          <span className="section-label">About</span>
          <h2 className="section-title-centered">Makes me unique</h2>
        </div>

        <div className="about-grid">
          <div className="about-col">
            {/* Learn more about me */}
            <a href="/about" className="about-card about-me-card">
              <h3>Learn more about me</h3>
              <p>Good morning!<br/>I&apos;m Vikas, an experienced front-end developer.</p>
              <div className="about-img"></div>
            </a>

            {/* Tech Stack */}
            <a href="/techstack" className="about-card techstack-card">
              <h3>Tech Stack</h3>
              <p>Check out my favorite tools and spots around the web.</p>
              <div className="techstack-icons-wrapper">
                <div className="techstack-icons">
                  {/* React */}
                  <div className="tool-item large" style={{ color: '#00d2ff' }}>
                    <div className="tool-item-inner">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
                        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
                        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
                        <circle cx="12" cy="12" r="2" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  {/* Next.js */}
                  <div className="tool-item large" style={{ color: 'var(--text-primary)' }}>
                    <div className="tool-item-inner">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5l-3.5-5.5v5.5H9V8h1.5l3.5 5.5V8h1.5v8.5H13z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  {/* VS Code */}
                  <div className="tool-item large" style={{ color: '#007acc' }}>
                    <div className="tool-item-inner">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>
                    </div>
                  </div>
                  {/* TypeScript */}
                  <div className="tool-item large" style={{ color: '#3178c6' }}>
                    <div className="tool-item-inner">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <rect width="24" height="24" rx="4" fill="currentColor"/>
                        <text x="13" y="18" fill="white" fontWeight="bold" fontFamily="sans-serif" fontSize="11">TS</text>
                      </svg>
                    </div>
                  </div>
                  {/* Tailwind */}
                  <div className="tool-item large" style={{ color: '#38bdf8' }}>
                    <div className="tool-item-inner">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 6.018C7.4 6.018 4.38 8.681 2.93 14c2.258-3.15 4.838-4.28 7.74-3.393 1.656.505 2.84 1.705 4.15 3.037C17.065 15.92 19.866 18 25 18c4.6 0 7.62-2.663 9.07-8-2.258 3.15-4.838 4.28-7.74 3.393-1.656-.505-2.84-1.705-4.15-3.037C19.935 8.08 17.134 6 12 6.018z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="about-col">
            {/* Connections */}
            <a href="/connections" className="about-card connections-card">
              <div className="conn-graphic">
                <div className="blur-ring ring-1"></div>
                <div className="blur-ring ring-2"></div>
                <div className="blur-ring ring-3"></div>
                <div className="blur-ring ring-4"></div>
                <div className="blur-ring ring-5"></div>
                <div style={{ position: 'absolute', width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: '5px solid #fff', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', zIndex: 10, left: '50%', transform: 'translateX(-50%)' }}>
                  <Image 
                    src="/images/vikas_1.jpg" 
                    alt="Connections Profile" 
                    width={100}
                    height={100}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              </div>
              <h3>Connections</h3>
              <p>An evolving list of people I&apos;ve met and those I wish to meet.</p>
            </a>

            {/* Book a call */}
            <BookCallCard />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-block" style={{ marginBottom: '4rem' }}>
        <div className="section-divider"></div>
        <div className="blog-section-header">
          <span className="section-label">Knowledge &amp; Articles</span>
          <h2 className="section-title-centered">My Knowledge</h2>
        </div>

        {/* Knowledge Showcase */}
        <div className="knowledge-pillars-grid">
          <div className="knowledge-pillar-item">
            <div className="knowledge-pillar-graphic">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#6366f1' }}>
                <circle cx="12" cy="12" r="3" />
                <circle cx="5" cy="5" r="2" />
                <line x1="6.5" y1="6.5" x2="9.5" y2="9.5" />
                <circle cx="19" cy="5" r="2" />
                <line x1="17.5" y1="6.5" x2="14.5" y2="9.5" />
                <circle cx="12" cy="20" r="2" />
                <line x1="12" y1="18" x2="12" y2="15" />
                <circle cx="5" cy="19" r="2" />
                <line x1="6.5" y1="17.5" x2="9.5" y2="14.5" />
                <circle cx="19" cy="19" r="2" />
                <line x1="17.5" y1="17.5" x2="14.5" y2="14.5" />
              </svg>
            </div>

            <h3 className="knowledge-pillar-title">Robust API Engineering</h3>
            <p className="knowledge-pillar-desc">
              Designing modular, rate-limited RESTful and GraphQL APIs with strict schema validation, security policies, and webhook callback settlement managers.
            </p>
          </div>

          <div className="knowledge-pillar-item">
            <div className="knowledge-pillar-graphic">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#ea580c' }}>
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
                <rect x="6" y="14" width="4" height="2" rx="0.5" />
                <circle cx="16" cy="14" r="1.5" />
              </svg>
            </div>

            <h3 className="knowledge-pillar-title">Payment Gateways</h3>
            <p className="knowledge-pillar-desc">
              Seamlessly integrating payment providers like Razorpay and Stripe. Experienced in signature validation, payout settlements, ledger accounting, and error handling.
            </p>
          </div>

          <div className="knowledge-pillar-item">
            <div className="knowledge-pillar-graphic">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3b82f6' }}>
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
              </svg>
            </div>

            <h3 className="knowledge-pillar-title">Relational &amp; NoSQL Databases</h3>
            <p className="knowledge-pillar-desc">
              Designing normalized schemas, query indexing, and transactional rollbacks in Postgres, as well as high-performance document modeling in MongoDB and Redis caching.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
