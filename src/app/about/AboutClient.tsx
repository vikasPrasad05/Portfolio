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
  const avatarTrackerRef = useRef<HTMLDivElement>(null);
  const fillLineRef = useRef<HTMLDivElement>(null);

  // Sticker positions state for the Scrapbook drag-and-drop feature
  const [stickers, setStickers] = useState<Sticker[]>([
    { id: 1, x: 60, y: 40, rot: -8, width: 110, src: '/images/shawshank_sticker.png', name: 'The Shawshank Redemption' },
    { id: 2, x: 260, y: 20, rot: 12, width: 110, src: '/images/interstellar_sticker.png', name: 'Interstellar' },
    { id: 3, x: 480, y: 45, rot: -5, width: 110, src: '/images/demon_slayer_sticker.png', name: 'Demon Slayer' },
    { id: 4, x: 720, y: 30, rot: 10, width: 110, src: '/images/attack_on_titan_sticker.png', name: 'Attack on Titan' },
    { id: 5, x: 920, y: 35, rot: -12, width: 110, src: '/images/marvel_sticker.png', name: 'Marvel Cinematic Universe' },
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
        currentVal += diff * 0.08;
      } else {
        currentVal = targetProgress.current;
      }
      
      if (avatarTrackerRef.current && fillLineRef.current) {
        avatarTrackerRef.current.style.top = `${currentVal * 97}%`;
        fillLineRef.current.style.height = `${currentVal * 100}%`;
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
              I&apos;m Vikas, a frontend developer, blogger and tech tinkerer.
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
                ref={avatarTrackerRef}
                style={{
                  top: '0%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 20
                }}
              >
                <img src="/images/vikas_1.jpg" alt="Vikas Prasad" />
              </div>
              <div className="timeline-rail-line">
                <div
                  className="timeline-fill-line"
                  ref={fillLineRef}
                  style={{ height: '0%' }}
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
              <div className="music-album-art" style={{ background: 'linear-gradient(135deg, #1e1e2f, #111111)' }}>
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

          {/* Card 2: Connections Widget (Replacing Scrapbook, using Scrapbook's dimensions) */}
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

          {/* Card 3: Scrapbook Widget (Full width long card at the bottom) */}
          <div className="bento-card scrapbook-card-container">
            <h3 className="bento-card-title">All Time Favorites</h3>
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

        </div>
      </section>


    </div>
  );
}
