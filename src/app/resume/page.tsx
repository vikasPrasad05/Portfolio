"use client";

import React from 'react';
import styles from './page.module.css';

export default function ResumePage() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resumeWrapper}>
        <div className={styles.downloadButtonContainer}>
          <button onClick={handleDownload} className={styles.downloadButton}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download
          </button>
        </div>
        <div className={styles.resumePaper}>
        <header className={styles.header}>
          <h1 className={styles.name}>Vikas Prasad</h1>
          <div className={styles.contactInfo}>
            <span>+91-7383149649</span>
            <span> | </span>
            <a href="mailto:vikasprasadx@gmail.com">vikasprasadx@gmail.com</a>
            <span> | </span>
            <a href="https://www.vikasprasad.in" target="_blank" rel="noopener noreferrer">www.vikasprasad.in</a>
            <span> | </span>
            <a href="https://github.com/vikasPrasad05" target="_blank" rel="noopener noreferrer">github.com/vikasPrasad05</a>
            <span> | </span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com</a>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>TECHNICAL SKILLS</h2>
          <hr className={styles.sectionDivider} />
          <div className={styles.skillsContent}>
            <p><strong>Languages:</strong> JavaScript, Python, Java, .NET</p>
            <p><strong>Web Technologies:</strong> HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, ShadCn</p>
            <p><strong>Backend & Databases:</strong> Node.js, Express.js, MongoDB, Mongoose, PostgreSQL, Supabase, Prisma, DrizzleORM</p>
            <p><strong>Dev Tools:</strong> Git, GitHub, VS Code, Linux commands, Unix</p>
            <p><strong>Operating Systems:</strong> Ubuntu Linux, Linux Mint</p>
            <p><strong>Accounting & Finance:</strong> Tally Prime, Advanced MS Excel, Taxation Portals (GST/IT), Financial Data Management</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>PROJECTS</h2>
          <hr className={styles.sectionDivider} />
          
          <div className={styles.projectBlock}>
            <div className={styles.projectHeader}>
              <strong>Samarthwavehospitality.com</strong> – Hospitality Platform
            </div>
            <div className={styles.projectTech}>
              <a href="https://samarthwavehospitality.com" target="_blank" rel="noopener noreferrer" className={styles.linkText}>Link!</a> | Stack: NextJS, React, Node.js
            </div>
            <ul className={styles.projectDetails}>
              <li>Developed a comprehensive online platform for hospitality and booking management.</li>
              <li>Designed an intuitive and responsive user interface to enhance the overall customer experience.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>EDUCATION</h2>
          <hr className={styles.sectionDivider} />
          <div className={styles.educationBlock}>
            <div className={styles.eduHeader}>
              <strong>Veer Narmad South Gujarat University, Rofel-Gunjan-Vapi</strong>
            </div>
            <div className={styles.eduDegreeRow}>
              <span className={styles.eduDegree}>(Bachelor&apos;s Degree) BCA – Veer Narmad South Gujarat University</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>EXPERIENCE</h2>
          <hr className={styles.sectionDivider} />
          
          <div className={styles.jobBlock}>
            <div className={styles.jobHeader}>
              <strong>Freelancing</strong>
              <span className={styles.jobDate}>Current</span>
            </div>
            <div className={styles.jobTitleRow}>
              <span className={styles.jobTitle}>Freelance Software Developer</span>
            </div>
            <ul className={styles.jobDetails}>
              <li>Building modern, scalable web applications and delivering tailored software solutions to clients.</li>
              <li>Managing end-to-end development lifecycles from requirement gathering to deployment.</li>
            </ul>
          </div>

          <div className={styles.jobBlock}>
            <div className={styles.jobHeader}>
              <strong>Chartered Accountant (CA) Firm</strong>
              <span className={styles.jobDate}>1.9 Years</span>
            </div>
            <div className={styles.jobTitleRow}>
              <span className={styles.jobTitle}>Professional Experience (Post-College)</span>
            </div>
            <ul className={styles.jobDetails}>
              <li>Gained professional experience working in a fast-paced environment at a CA firm.</li>
              <li>Handled data management, coordination, and operational tasks efficiently.</li>
            </ul>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
}
