"use client";

import React from 'react';
import Link from 'next/link';

interface ConnectionNode {
  name: string;
  avatarUrl: string;
  dateMet: string;
}

const CONNECTIONS: ConnectionNode[] = [
  { name: "Amy Dutton", avatarUrl: "/images/amy_dutton.jpg", dateMet: "Oct 2023" },
  { name: "James Q Quick", avatarUrl: "/images/james_q_quick.jpg", dateMet: "Nov 2023" },
  { name: "Colby Fayock", avatarUrl: "/images/colby_fayock.jpg", dateMet: "Jan 2024" },
  { name: "Sarah Drasner", avatarUrl: "/images/sarah_drasner.jpg", dateMet: "Mar 2024" },
  { name: "Shashi Lo", avatarUrl: "/images/shashi_lo.jpg", dateMet: "Apr 2024" }
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
        <h1 className="connections-page-title">People who love my work</h1>
        <p className="connections-page-subtitle">
          An evolving list of developers, engineers, and creators who I have met, learned from, or hope to collaborate with in the tech industry.
        </p>
      </section>

      <div className="section-divider"></div>

      {/* Connections Grid */}
      <section className="connections-grid-section">
        <div className="simple-connections-grid">
          {CONNECTIONS.map((node) => (
            <div key={node.name} className="simple-connection-card">
              <img src={node.avatarUrl} alt={node.name} className="simple-connection-avatar" />
              <h3 className="simple-connection-name">{node.name}</h3>
              <div className="simple-connection-divider"></div>
              <p className="simple-connection-date">{node.dateMet}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
