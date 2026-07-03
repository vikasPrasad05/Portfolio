'use client';

import { useEffect, useRef, useState } from 'react';

interface Sticker {
  id: number;
  x: number;
  y: number;
  rot: number;
  width: number;
  src: string;
  name: string;
}

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const targetProgress = useRef(0);

  const [scrollProgress, setScrollProgress] = useState(0);

  // Sticker positions state for the Scrapbook drag-and-drop feature
  const [stickers, setStickers] = useState<Sticker[]>([
    { id: 1, x: 10, y: 15, rot: -8, width: 80, src: '/images/that_conf_sticker.png', name: 'That Conf' },
    { id: 2, x: 110, y: 10, rot: 12, width: 90, src: '/images/c3_conf_sticker.png', name: 'C3 Conf' },
    { id: 3, x: 210, y: 12, rot: -5, width: 110, src: '/images/lotr_sticker.png', name: 'LOTR' },
    { id: 4, x: 310, y: 8, rot: 10, width: 120, src: '/images/cyc_sticker.png', name: 'CYC' },
  ]);

  const [activeDragId, setActiveDragId] = useState<number | null>(null);
  const dragStart = useRef({ x: 0, y: 0 });
  const stickerStart = useRef({ x: 0, y: 0 });

  // Scroll linked timeline progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementTopPage = window.scrollY + rect.top;
      const start = elementTopPage - 100;
      const end = elementTopPage + rect.height - windowHeight + 100;

      const currentScroll = window.scrollY;

      let progress = 0;
      if (end > start) {
        progress = (currentScroll - start) / (end - start);
      }
      progress = Math.max(0, Math.min(1, progress));
      targetProgress.current = progress;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Animation frame loop for buttery smooth interpolation of timeline progress
  useEffect(() => {
    let rafId: number;
    let currentVal = 0;

    const animate = () => {
      const diff = targetProgress.current - currentVal;
      if (Math.abs(diff) > 0.0001) {
        currentVal += diff * 0.03;
        setScrollProgress(currentVal);
      } else {
        currentVal = targetProgress.current;
        setScrollProgress(currentVal);
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);



  // Drag and drop handlers for Scrapbook stickers
  const handleMouseDown = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setActiveDragId(id);
    const sticker = stickers.find(s => s.id === id);
    if (sticker) {
      dragStart.current = { x: e.clientX, y: e.clientY };
      stickerStart.current = { x: sticker.x, y: sticker.y };
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (activeDragId === null) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;

    setStickers(prev =>
      prev.map(s =>
        s.id === activeDragId
          ? { ...s, x: stickerStart.current.x + dx, y: stickerStart.current.y + dy }
          : s
      )
    );
  };

  const handleMouseUp = () => {
    setActiveDragId(null);
  };

  useEffect(() => {
    if (activeDragId !== null) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeDragId]);

  return (
    <div className="about-page-container">
      {/* Hero Header Section */}
      <section className="about-hero-section">
        <div className="about-hero-flex">
          <div className="about-hero-text">
            <span className="about-pretitle">About</span>
            <h1 className="about-title">I&apos;m Vikas Prasad, a developer.</h1>
            <p className="about-description">
              I&apos;m Vikas, a frontend developer, blogger and tech tinkerer. Welcome to my corner of the internet!
            </p>
          </div>

          <div className="about-hero-graphics">
            <div className="photo-sticker">
              <div className="sticker-image-wrapper">
                <img src="/images/vikas_1.jpg" alt="Vikas Prasad" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Work History Section */}
      <section className="work-timeline-section" ref={timelineRef}>
        <div className="section-divider"></div>
        <div className="timeline-header">
          <h2>My work history and achievements timeline.</h2>
        </div>

        <div className="timeline-track-wrapper">
          {/* Scroll Progress Timeline */}
          <div className="timeline-progress-bar-container">
            <div className="timeline-progress-bar-inner">
              <div
                className="timeline-avatar-tracker"
                style={{
                  top: `${scrollProgress * 97}%`,
                  transform: 'translateY(-50%)'
                }}
              >
                <img src="/images/vikas_1.jpg" alt="Vikas Prasad" />
              </div>
              <div className="timeline-rail-line">
                <div
                  className="timeline-fill-line"
                  style={{ height: `${scrollProgress * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Timeline Items */}
          <div className="timeline-items-list">

            {/* Item 1: BCA */}
            <div className="timeline-item-row">
              <div className="timeline-item-meta">
                <h3>Education</h3>
                <span className="timeline-date">2021 - 2024</span>
              </div>
              <div className="timeline-spacer"></div>
              <div className="timeline-details">
                <div className="role-entry">
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <ul>
                    <li>Built a strong foundation in computer science core subjects including Data Structures, Algorithms, Database Management Systems (DBMS), and Object-Oriented Programming (OOP).</li>
                    <li>Developed multiple academic web and desktop applications using Java, C++, SQL, and modern JavaScript.</li>
                    <li>Graduated with a highly commended final project review and strong practical application capability.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 2: CA Firm */}
            <div className="timeline-item-row">
              <div className="timeline-item-meta">
                <h3>CA Firm</h3>
                <span className="timeline-date">June 2024 - March 2026</span>
              </div>
              <div className="timeline-spacer"></div>
              <div className="timeline-details">
                <div className="role-entry">
                  <h4>Accounts, GST & Audit Executive</h4>
                  <ul>
                    <li>Managed end-to-end accounting processes and tax audit procedures for corporate clients.</li>
                    <li>Handled GST compliance including timely returns filing (GSTR-1, 3B, and GSTR-9).</li>
                    <li>Oversaw ROC-related legal compliances, books auditing, and client financial reports generation.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 3: Freelance Full-Stack Developer */}
            <div className="timeline-item-row">
              <div className="timeline-item-meta">
                <h3>Freelance</h3>
                <span className="timeline-date">2025 - Present</span>
              </div>
              <div className="timeline-spacer"></div>
              <div className="timeline-details">
                <div className="role-entry">
                  <h4>Full-Stack Developer</h4>
                  <ul>
                    <li>Designing and developing responsive, production-ready, and SEO-optimized web applications for diverse businesses and startups.</li>
                    <li>Utilizing Next.js, React, Node.js, Express, MongoDB, and Tailwind CSS to build robust, scalable architectures.</li>
                    <li>Implementing clean, secure third-party API integrations and custom analytical client dashboards.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 4: Software Developer */}
            <div className="timeline-item-row">
              <div className="timeline-item-meta">
                <h3>Software Dev</h3>
                <span className="timeline-date">2026 - Present</span>
              </div>
              <div className="timeline-spacer"></div>
              <div className="timeline-details">
                <div className="role-entry">
                  <h4>Software Developer</h4>
                  <ul>
                    <li>Architecting high-performance web systems and writing clean, structured, and maintainable codebases.</li>
                    <li>Collaborating with clients to translate business requirements into functional, optimized software solutions.</li>
                    <li>Implementing state management systems, robust database schemas, and CI/CD pipelines for rapid deployments.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bento Grid: Unique Traits */}
      <section className="about-unique-section">
        <div className="section-divider"></div>
        <div className="unique-header">
          <span className="unique-pretitle">More</span>
          <h2>Here&apos;s what sets me apart and makes me unique</h2>
        </div>

        <div className="unique-bento-grid">

          {/* Card 1: Music Widget */}
          <div className="bento-card music-card-container">
            <div className="music-card-inner">
              <div className="music-glow"></div>
              <div className="music-album-art">
                <img src="/images/vikas_2.png" alt="Album art" />
                <div className="music-active-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="music-info">
                <span className="music-status">Now Playing</span>
                <h4 className="music-title">Blinding Lights</h4>
                <p className="music-artist">The Weeknd</p>
                <div className="music-progress-bar">
                  <div className="music-progress-fill"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Scrapbook Widget */}
          <div className="bento-card scrapbook-card-container">
            <h3 className="bento-card-title">Scrapbook</h3>
            <p className="bento-card-desc">Drag the stickers around!</p>
            <div className="scrapbook-canvas">
              <div className="scrapbook-dots-bg"></div>
              {stickers.map((sticker) => (
                <div
                  key={sticker.id}
                  className="draggable-sticker"
                  style={{
                    left: `${sticker.x}px`,
                    top: `${sticker.y}px`,
                    transform: `rotate(${sticker.rot}deg)`,
                    width: `${sticker.width}px`,
                    zIndex: activeDragId === sticker.id ? 99 : 10,
                  }}
                  onMouseDown={(e) => handleMouseDown(e, sticker.id)}
                >
                  <img src={sticker.src} alt={sticker.name} draggable="false" />
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Currently Reading Widget */}
          <div className="bento-card reading-card-container">
            <h3 className="bento-card-title">Currently Reading</h3>
            <div className="reading-book-wrapper">
              <div className="reading-book-glow"></div>
              <div className="book-tilt-container">
                <div className="book-spine-shadow"></div>
                <img src="/images/red_rising_cover.jpeg" alt="Book Cover" />
              </div>
            </div>
          </div>

          {/* Card 4: Connections Widget */}
          <div className="bento-card connections-card-container">
            <a href="/connections" className="connections-link-wrapper">
              <div className="connections-hover-indicator">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17l9.2-9.2M17 17V7H7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="connections-avatars-grid">
                <div className="center-node">
                  <img src="/images/vikas_1.jpg" alt="Vikas Prasad" />
                </div>
                <div className="orbiting-avatars">
                  <div className="orbit-avatar avatar-1"><img src="/images/amy_dutton.jpg" alt="Amy Dutton" /></div>
                  <div className="orbit-avatar avatar-2"><img src="/images/james_q_quick.jpg" alt="James Q Quick" /></div>
                  <div className="orbit-avatar avatar-3"><img src="/images/colby_fayock.jpg" alt="Colby Fayock" /></div>
                  <div className="orbit-avatar avatar-4"><img src="/images/sarah_drasner.jpg" alt="Sarah Drasner" /></div>
                  <div className="orbit-avatar avatar-5"><img src="/images/shashi_lo.jpg" alt="Shashi Lo" /></div>
                </div>
              </div>
              <div className="connections-text-info">
                <h3>Connections</h3>
                <p>An evolving list of people I&apos;ve met and those I wish to meet.</p>
              </div>
            </a>
          </div>

          {/* Card 5: Stats Widget */}
          <div className="bento-card stats-card-container">
            <a href="/stats" className="stats-link-wrapper">
              <div className="stats-hover-indicator">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17l9.2-9.2M17 17V7H7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="bento-card-title">Stats</h3>
              <div className="stats-chart-wrapper">
                {/* Background Grid Lines */}
                <div className="chart-grid-line line-0"></div>
                <div className="chart-grid-line line-25"></div>
                <div className="chart-grid-line line-50"></div>
                <div className="chart-grid-line line-75"></div>
                <div className="chart-grid-line line-100"></div>

                {/* Animated Chart Bars */}
                <div className="chart-bars-container">
                  <div className="chart-bar bar-1"><div className="bar-fill" style={{ height: '65%' }}></div></div>
                  <div className="chart-bar bar-2"><div className="bar-fill" style={{ height: '48%' }}></div></div>
                  <div className="chart-bar bar-3"><div className="bar-fill" style={{ height: '55%' }}></div></div>
                  <div className="chart-bar bar-4"><div className="bar-fill" style={{ height: '82%' }}></div></div>
                  <div className="chart-bar bar-5"><div className="bar-fill" style={{ height: '42%' }}></div></div>
                  <div className="chart-bar bar-6"><div className="bar-fill" style={{ height: '90%' }}></div></div>
                  <div className="chart-bar bar-7"><div className="bar-fill" style={{ height: '75%' }}></div></div>
                </div>

                {/* Overlaid Animated Graph Line */}
                <svg className="chart-svg-line" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M 7,65 L 21,48 L 35,55 L 50,18 L 64,42 L 78,10 L 93,25"
                    fill="none"
                    stroke="rgba(99, 102, 241, 0.8)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="trend-line-path"
                  />
                  <circle cx="78" cy="10" r="3" fill="#6366f1" className="trend-line-dot" />
                </svg>
              </div>
            </a>
          </div>

        </div>
      </section>


    </div>
  );
}
