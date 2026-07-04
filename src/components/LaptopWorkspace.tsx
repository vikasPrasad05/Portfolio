'use client';

import React from 'react';

interface SpecItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export default function LaptopWorkspace() {
  const specs: SpecItem[] = [
    {
      label: 'Processor',
      value: 'Intel Core i5 10th Gen 10300H',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      )
    },
    {
      label: 'Memory',
      value: '8 GB DDR4 RAM',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="6" y1="5" x2="6" y2="19" />
          <line x1="18" y1="5" x2="18" y2="19" />
          <path d="M10 9v6M14 9v6" />
        </svg>
      )
    },
    {
      label: 'Graphics',
      value: 'NVIDIA GeForce GTX 1650 4GB',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      label: 'Storage',
      value: '512 GB NVMe SSD',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      )
    },
    {
      label: 'Display & Design',
      value: '15.6" IPS Display (Black, 2.15 Kg)',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      label: 'OS & Model',
      value: 'Windows 11 Home | A715-75G',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      )
    }
  ];

  return (
    <div className="laptop-widget-card">
      {/* Left side: Acer Aspire 7 Real Picture */}
      <div className="widget-image-side">
        <img 
          src="/images/acer_aspire_7_right.png" 
          alt="Acer Aspire 7" 
          draggable="false"
        />
      </div>

      {/* Right side: Specifications list */}
      <div className="widget-info-side">
        <span className="widget-badge" style={{ marginBottom: '0.2rem' }}>Workstation</span>
        <h3 className="widget-title">Acer Aspire 7</h3>

        <div className="widget-specs-grid">
          {specs.map((spec, i) => (
            <div key={i} className="widget-spec-item">
              <div className="widget-spec-icon">
                {spec.icon}
              </div>
              <div className="widget-spec-details">
                <span className="widget-spec-label">{spec.label}</span>
                <span className="widget-spec-value">{spec.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
