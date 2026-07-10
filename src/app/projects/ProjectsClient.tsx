"use client";

import React, { useState, useMemo } from 'react';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
}

const PROJECTS: Project[] = [
  {
    title: "Samarthwave Hospitality",
    category: "Full Stack",
    description: "A comprehensive bookings and landing management system built for a hospitality firm. Features dynamic administrative dashboards, client analytics, and responsive guest bookings pages.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/vikasPrasad05",
    liveUrl: "https://www.samarthwavehospitality.com",
    gradient: "linear-gradient(135deg, #090d16 0%, #1e293b 100%)"
  },
  {
    title: "API Engine & Webhook Settlements Manager",
    category: "Full Stack",
    description: "Secure automated payments and settlement microservice that listens to merchant webhooks, verifies signatures, and manages ledger database records under strict transactional safety.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
    githubUrl: "https://github.com/vikasPrasad05",
    gradient: "linear-gradient(135deg, #ea580c 0%, #9a3412 100%)"
  },
  {
    title: "Playwright Static Link Previews",
    category: "Utilities",
    description: "Wikipedia-style link preview capture utility. Automates taking screenshots of site URLs at build time, using native HTML Popover APIs for client-side hardware-accelerated previews.",
    tech: ["Playwright", "HTML5 Popover API", "Next.js", "CSS Animations"],
    githubUrl: "https://github.com/vikasPrasad05",
    gradient: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)"
  },
  {
    title: "Anchor-Positioned Floating Table of Contents",
    category: "Frontend",
    description: "A floating React sidebar navigation tracker for articles that automatically monitors scroll progress and aligns a tracking indicator utilizing CSS Anchor Positioning.",
    tech: ["React", "TypeScript", "CSS Anchor Positioning", "Intersection Observer"],
    githubUrl: "https://github.com/vikasPrasad05",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
  }
];

const CATEGORIES = ["All", "Full Stack", "Frontend", "Utilities"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="projects-page-container">
      {/* Projects Page Hero */}
      <section className="projects-page-hero">
        <span className="projects-page-badge">Work &amp; Build Sandbox</span>
        <h1 className="projects-page-title">I like building systems &amp;&amp; tools</h1>
        <p className="projects-page-subtitle">
          A showcase of full-stack systems, frontend components, and workflow automation scripts that I have designed.
        </p>
      </section>

      {/* Filter and Search Bar Container */}
      <div className="projects-controls-section">
        <div className="projects-controls-wrapper">
          {/* Categories Filter Tabs */}
          <div className="categories-filter-scroll">
            <div className="categories-filter-container">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input */}
          <div className="projects-search-container">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="projects-search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="search-clear-btn" aria-label="Clear search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <article key={project.title} className="project-grid-card">
                <div className="project-grid-image-wrapper">
                  <div className="project-grid-gradient" style={{ background: project.gradient }}>
                    <div className="project-mockup-tag">{project.category}</div>
                  </div>
                </div>
                <div className="project-grid-content">
                  <div className="project-grid-meta">
                    <span className="category-label">{project.category}</span>
                  </div>
                  <h3 className="project-grid-title">{project.title}</h3>
                  <p className="project-grid-desc">{project.description}</p>
                  
                  <div className="project-tech-tags">
                    {project.tech.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="project-grid-footer">
                    <div className="project-links">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn github-btn">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                          <span>GITHUB</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn live-btn">
                          <span>LIVE DEMO</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-icon-right">
                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="projects-no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No projects found</h3>
            <p>We couldn&apos;t find any projects matching &ldquo;{searchQuery}&rdquo; in the category &ldquo;{selectedCategory}&rdquo;.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="reset-filters-btn"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
