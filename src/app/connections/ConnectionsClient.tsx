"use client";

import React from 'react';
import Link from 'next/link';

interface ConnectionNode {
  name: string;
  role: string;
  status: string;
  description: string;
  avatarUrl: string;
  gradient: string;
  twitter?: string;
  github?: string;
  website?: string;
}

const CONNECTIONS: ConnectionNode[] = [
  {
    name: "Amy Dutton",
    role: "Developer & Designer, Co-host of Compressed.fm",
    status: "Inspiring Builder",
    description: "Inspiring developer who masterfully blends design and code. Her design-system tutorials and podcast series are a gold standard for frontend engineering.",
    avatarUrl: "/images/amy_dutton.jpg",
    gradient: "linear-gradient(135deg, #a855f7 0%, #6b21a8 100%)",
    twitter: "https://twitter.com",
    website: "https://compressed.fm"
  },
  {
    name: "James Q Quick",
    role: "Developer Advocate & Speaker",
    status: "Inspiring Educator",
    description: "Renowned developer advocate and speaker. His teachings on JavaScript, developer workflows, and building a coding career are highly impactful.",
    avatarUrl: "/images/james_q_quick.jpg",
    gradient: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)",
    twitter: "https://twitter.com",
    website: "https://jamesqquick.com"
  },
  {
    name: "Colby Fayock",
    role: "Developer Advocate & Next.js Expert",
    status: "Inspiring Technologist",
    description: "Incredible developer advocate who creates some of the most practical tutorials on Next.js, mapping APIs, and modern static site architectures.",
    avatarUrl: "/images/colby_fayock.jpg",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    twitter: "https://twitter.com",
    github: "https://github.com"
  },
  {
    name: "Sarah Drasner",
    role: "Engineering Director & Author",
    status: "Industry Mentor",
    description: "Industry-leading engineer, designer, and writer whose educational books and courses on SVG animations and Vue/React codebases are standard reading.",
    avatarUrl: "/images/sarah_drasner.jpg",
    gradient: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)",
    twitter: "https://twitter.com",
    website: "https://sarahdrasnerdesign.com"
  },
  {
    name: "Shashi Lo",
    role: "Creative Coder & Web Animator",
    status: "Fellow Builder",
    description: "Creative technologist whose dynamic web animation experiments, custom shaders, and interactive SVG layouts push the visual boundaries of frontend code.",
    avatarUrl: "/images/shashi_lo.jpg",
    gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    twitter: "https://twitter.com",
    github: "https://github"
  }
];

export default function ConnectionsPage() {
  return (
    <div className="connections-page-container">
      {/* Back Link */}
      <div className="connections-page-back">
        <Link href="/" className="back-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to home
        </Link>
      </div>

      {/* Hero Header Section */}
      <section className="connections-page-hero">
        <span className="connections-page-badge">Professional Network</span>
        <h1 className="connections-page-title">People who inspire my work</h1>
        <p className="connections-page-subtitle">
          An evolving list of developers, engineers, and creators who I have met, learned from, or hope to collaborate with in the tech industry.
        </p>
      </section>

      <div className="section-divider"></div>

      {/* Connections Grid */}
      <section className="connections-grid-section">
        <div className="connections-grid">
          {CONNECTIONS.map((node) => (
            <div key={node.name} className="connection-card">
              <div className="connection-card-header">
                <div className="connection-avatar-wrapper" style={{ background: node.gradient }}>
                  <img src={node.avatarUrl} alt={node.name} className="connection-avatar" />
                </div>
                <div className="connection-identity">
                  <span className="connection-status">{node.status}</span>
                  <h3 className="connection-name">{node.name}</h3>
                  <p className="connection-role">{node.role}</p>
                </div>
              </div>
              
              <div className="connection-card-body">
                <p>{node.description}</p>
              </div>

              <div className="connection-card-footer">
                <div className="connection-links">
                  {node.twitter && (
                    <a href={node.twitter} target="_blank" rel="noopener noreferrer" className="connection-link">
                      Twitter
                    </a>
                  )}
                  {node.github && (
                    <a href={node.github} target="_blank" rel="noopener noreferrer" className="connection-link">
                      GitHub
                    </a>
                  )}
                  {node.website && (
                    <a href={node.website} target="_blank" rel="noopener noreferrer" className="connection-link">
                      Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
