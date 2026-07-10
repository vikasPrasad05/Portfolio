import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ArticleData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  gradient: string;
  content: React.ReactNode;
}

const ARTICLES: Record<string, ArticleData> = {
  "build-link-previews": {
    title: "Build Link Previews with Playwright and the Popover API",
    category: "Tutorials",
    date: "Jan 1, 2026",
    readTime: "8 min read",
    description: "Wikipedia-style link previews can make your blog feel more polished. In this tutorial, we'll build a system that captures screenshots at build time and displays them using the native Popover API with smooth CSS animations.",
    gradient: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",
    content: (
      <>
        <p>Link previews are a fantastic way to keep readers engaged on your blog. When a user hovers over a link, showing a snapshot of the destination page helps them decide whether to click, without losing their current reading context. In this guide, we will build a robust link preview system for Next.js.</p>
        
        <h2>Why Playwright and the Popover API?</h2>
        <p>Traditionally, link previews required either heavy third-party iframe overlays or client-side screenshots generated on-the-fly, which are slow and tax the client's network. By using <strong>Playwright</strong>, we can capture screenshots of destination links at build time (during static generation). By pairing this with the native <strong>HTML Popover API</strong>, we get hardware-accelerated animations and top-layer rendering for free without needing a complex state manager or library.</p>
        
        <h2>Step 1: Setting up Playwright</h2>
        <p>First, we install Playwright as a dev dependency to automate screenshot generation during our build process.</p>
        <pre><code>npm install -D playwright</code></pre>
        <p>Next, we write a node script that takes a list of URLs, opens a headless browser, and snaps screenshots into our <code>public/previews</code> directory:</p>
        <pre><code>{`// scripts/generate-previews.js
const { chromium } = require('playwright');
const fs = require('fs');

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 }
  });
  
  const urls = ['https://wikipedia.org', 'https://github.com'];
  for (const url of urls) {
    const slug = url.replace(/https?:\\/\\/(www\\.)?/, '').replace(/\\//g, '-');
    await page.goto(url);
    await page.screenshot({ path: \`public/previews/\${slug}.png\` });
  }
  await browser.close();
}
run();`}</code></pre>

        <h2>Step 2: Using the Native Popover API</h2>
        <p>The Popover API allows elements to be promoted to the top layer automatically. We define our link and popover container in JSX. Notice the <code>popovertarget</code> attribute on our link:</p>
        <pre><code>{`export function PreviewLink({ href, slug, children }) {
  return (
    <>
      <a href={href} popovertarget={'preview-' + slug} className="preview-trigger">
        {children}
      </a>
      <div id={'preview-' + slug} popover="auto" className="preview-popover">
        <img src={'/previews/' + slug + '.png'} alt="Link preview" />
      </div>
    </>
  );
}`}</code></pre>

        <h2>Step 3: Polishing with CSS</h2>
        <p>Now, let's style the popover to animate smoothly when transitioning into visibility. We can use the <code>:popover-open</code> pseudo-class:</p>
        <pre><code>{`.preview-popover {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
  overflow: hidden;
  max-width: 320px;
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: translateY(10px);
}

.preview-popover:popover-open {
  opacity: 1;
  transform: translateY(0);
}

@starting-style {
  .preview-popover:popover-open {
    opacity: 0;
    transform: translateY(10px);
  }
}`}</code></pre>
        <p>With this simple layout, you have a modern, high-performance link preview feature that feels extremely native and lightning fast!</p>
      </>
    )
  },
  "modern-table-of-contents": {
    title: "A Modern Table of Contents in Next.js with CSS Anchor Positioning",
    category: "Next.js",
    date: "Dec 31, 2025",
    readTime: "6 min read",
    description: "In this tutorial, you'll learn how to build a floating table of contents component for your Next.js blog that tracks the reader's scroll position and highlights the active section with a smooth animated dot.",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    content: (
      <>
        <p>A Table of Contents (TOC) is essential for long-form technical blogs. It helps readers navigate between different sections seamlessly. In this guide, we will implement an active-tracking TOC in Next.js using the new CSS Anchor Positioning API and React hooks.</p>
        
        <h2>What is CSS Anchor Positioning?</h2>
        <p>CSS Anchor Positioning is a game-changing API that allows you to position one element relative to another anchor element anywhere on the page without JavaScript coordinate calculations. We will use it to anchor a floating marker next to the active heading link in our sidebar.</p>

        <h2>Step 1: Building the TOC Component</h2>
        <p>First, let's set up the React component that parses headings and tracks which one is currently in view using the Intersection Observer API.</p>
        <pre><code>{`'use client';
import { useEffect, useState } from 'react';

export function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav className="toc-navigation">
      <div className="active-indicator" style={{ anchorName: '--active-marker' }} />
      <ul>
        {headings.map((h) => (
          <li key={h.id}>
            <a 
              href={\`#\${h.id}\`}
              className={activeId === h.id ? 'active' : ''}
              style={activeId === h.id ? { anchorDefault: '--active-marker' } : {}}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}`}</code></pre>

        <h2>Step 2: Styling the Floating Indicator</h2>
        <p>We style the floating indicator and apply the anchor positions in CSS. When the active link changes, the anchor repositioning does the work, animating the dot smoothly down the sidebar list.</p>
        <pre><code>{`.toc-navigation {
  position: sticky;
  top: 100px;
  padding-left: 20px;
  border-left: 2px solid #e2e8f0;
}

.active-indicator {
  position: absolute;
  width: 4px;
  height: 20px;
  background-color: #3b82f6;
  left: -2px;
  top: anchor(top);
  transition: top 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.toc-navigation a.active {
  color: #3b82f6;
  font-weight: 500;
}`}</code></pre>
        <p>This approach minimizes paint loops and layout recalculations, delivering a buttery-smooth UX on desktops and tablets.</p>
      </>
    )
  },
  "signal-forms-angular": {
    title: "How to Use Signal Forms in Angular 21 (With Examples)",
    category: "Angular",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    description: "In this post, you'll learn how Angular's new Signal Forms dramatically simplify form creation, improve performance through fine-grained reactivity, and eliminate the boilerplate and workarounds required by Reactive Forms.",
    gradient: "linear-gradient(135deg, #a855f7 0%, #6b21a8 100%)",
    content: (
      <>
        <p>Angular has introduced native Signal-based Forms in Angular 21, moving away from RxJS-heavy Reactive Forms for modern apps. Let&apos;s explore how this fine-grained reactivity system handles validation, submission, and dynamic controls with absolute simplicity.</p>
        
        <h2>Why Signal Forms?</h2>
        <p>Standard reactive forms in Angular rely on RxJS Observables (like <code>valueChanges</code> and <code>statusChanges</code>). While powerful, it introduces overhead and requires manual cleanup to avoid memory leaks. Signal Forms use Angular Signals to track form value changes, ensuring only the exact components affected by a change are re-rendered.</p>

        <h2>Example: Creating a Login Form</h2>
        <p>Let&apos;s write a simple login component with signals:</p>
        <pre><code>{`import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  template: \`
    <form (submit)="onSubmit()">
      <div>
        <label>Email</label>
        <input [formControl]="emailControl" />
        @if (emailControl.invalid() && emailControl.touched()) {
          <span class="error">Invalid email address</span>
        }
      </div>
      
      <button [disabled]="formGroup.invalid()">Submit</button>
    </form>
  \`
})
export class LoginFormComponent {
  emailControl = new FormControl('', {
    validators: [Validators.required, Validators.email]
  });
  
  formGroup = new FormGroup({
    email: this.emailControl
  });

  onSubmit() {
    if (this.formGroup.valid()) {
      console.log('Submitted values:', this.formGroup.value());
    }
  }
}`}</code></pre>

        <h2>Benefits of Angular 21 Signal Forms</h2>
        <ul>
          <li><strong>No Subscriptions:</strong> You read values directly via signals (e.g. <code>control.value()</code>) in templates.</li>
          <li><strong>Synchronous Reactivity:</strong> Signal updates are tracked immediately, resolving template changes without checking the entire component tree.</li>
          <li><strong>Cleaner Testing:</strong> Testing form controls is easier since values can be updated directly via <code>.set()</code> or <code>.update()</code> on the controls.</li>
        </ul>
        <p>Signal Forms mark a new chapter in Angular development, bringing reactivity in line with modern web development paradigms.</p>
      </>
    )
  },
  "behind-tailwind-v4": {
    title: "Behind the Scenes of Tailwind CSS v4.0",
    category: "Design",
    date: "Nov 28, 2025",
    readTime: "5 min read",
    description: "A deep dive into the performance enhancements, Rust-powered compiler engine, and new CSS-first configuration syntax introduced in Tailwind CSS v4.0.",
    gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    content: (
      <>
        <p>Tailwind CSS v4.0 represents the biggest shift in the framework&apos;s history. By rebuilding the compiler in <strong>Rust</strong> and moving configurations entirely to native CSS files, the utility-first CSS framework has unlocked unprecedented build speeds and clean integrations.</p>
        
        <h2>Rust Compiler Engine</h2>
        <p>Previous versions of Tailwind CSS relied on JS-based tools (PostCSS) to scan code and generate output. In v4.0, a brand new engine written in Rust does the heavy lifting, scanning files up to <strong>10x faster</strong>. Development hot-reloads (HMR) now feel virtually instantaneous, even on massive enterprise codebases.</p>

        <h2>CSS-First Configuration</h2>
        <p>Say goodbye to <code>tailwind.config.js</code>. In v4.0, all project configurations are handled directly in your main CSS file using the new <code>@theme</code> directive:</p>
        <pre><code>{`@import "tailwindcss";

@theme {
  --color-brand-primary: #3b82f6;
  --color-brand-accent: #f43f5e;
  
  --font-display: "Outfit", sans-serif;
  
  --breakpoint-xs: 480px;
}`}</code></pre>
        <p>This configuration automatically populates custom classes like <code>text-brand-primary</code>, <code>bg-brand-accent</code>, and responsive modifiers like <code>xs:grid-cols-2</code>!</p>

        <h2>Key Features in v4.0</h2>
        <ul>
          <li><strong>Native Cascade Layers:</strong> Utilizes native <code>@layer</code> rules to manage reset styles, base utilities, and component classes cleanly.</li>
          <li><strong>Color Functions Support:</strong> Built-in support for <code>color-mix()</code> and relative colors out of the box.</li>
          <li><strong>Zero Dependencies:</strong> No configuration required, it compiles instantly as a Vite plugin, Next.js plugin, or CLI.</li>
        </ul>
        <p>Tailwind CSS v4.0 is not just a version upgrade—it is a modern rewrite that aligns utility-first design with the future of the native web platform.</p>
      </>
    )
  },
  "automating-workflows-github-actions-bun": {
    title: "Automating Developer Workflows with GitHub Actions & Bun",
    category: "Automation",
    date: "Oct 12, 2025",
    readTime: "7 min read",
    description: "Learn how to accelerate your CI/CD pipelines by replacing Node.js with Bun in GitHub Actions, reducing dependency install times and script executions by over 60%.",
    gradient: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)",
    content: (
      <>
        <p>Developer velocity is directly impacted by CI/CD times. Waiting 5 minutes for a build to finish before merging a pull request kills flow. In this guide, we will optimize our GitHub Actions workflow by moving from Node.js/npm to <strong>Bun</strong>.</p>
        
        <h2>Why Bun?</h2>
        <p>Bun is a fast, all-in-one JavaScript runtime, packager, and test runner. In CI environments, Bun&apos;s ultra-optimized package manager installs dependencies up to <strong>10 times faster</strong> than npm, caching files globally to avoid fetching duplicate packages on subsequent runs.</p>

        <h2>Step 1: The Bun CI Configuration</h2>
        <p>Here is an optimized GitHub Actions workflow YAML configuration using the official <code>setup-bun</code> action:</p>
        <pre><code>{`name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - name: Install Dependencies
        run: bun install --frozen-lockfile

      - name: Lint and Format Check
        run: bun run lint

      - name: Run Test Suite
        run: bun test

      - name: Build Application
        run: bun run build`}</code></pre>

        <h2>Results Analysis</h2>
        <p>By migrating a standard Next.js CI pipeline from npm to Bun:</p>
        <table>
          <thead>
            <tr>
              <th>Pipeline Phase</th>
              <th>npm (Node)</th>
              <th>Bun</th>
              <th>Improvement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Setup & Cache</td>
              <td>12s</td>
              <td>5s</td>
              <td>58% faster</td>
            </tr>
            <tr>
              <td>Install Deps</td>
              <td>42s</td>
              <td>4s</td>
              <td>90% faster</td>
            </tr>
            <tr>
              <td>Lint / Tests</td>
              <td>35s</td>
              <td>11s</td>
              <td>68% faster</td>
            </tr>
            <tr>
              <td><strong>Total Time</strong></td>
              <td><strong>1m 29s</strong></td>
              <td><strong>20s</strong></td>
              <td><strong>77% speedup</strong></td>
            </tr>
          </tbody>
        </table>
        <p>A fast feedback loop in CI means issues are caught immediately and code can be deployed confidently within seconds.</p>
      </>
    )
  },
  "mastering-css-container-queries": {
    title: "Mastering CSS Container Queries for Truly Modular Components",
    category: "Design",
    date: "Sep 4, 2025",
    readTime: "6 min read",
    description: "Break free from viewport-based media queries. In this guide, we explore how Container Queries allow you to style elements based on their parent container's size, enabling truly reusable UI modules.",
    gradient: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)",
    content: (
      <>
        <p>Media queries have served us well for decades. However, they suffer from a major design limitation: styling is bound to the total viewport width. If you build a card component, it doesn&apos;t care if it lives in a narrow sidebar or a wide grid—you must write custom overrides for each context. <strong>Container Queries</strong> fix this permanently.</p>
        
        <h2>What are Container Queries?</h2>
        <p>Container queries allow you to observe the dimensions of a specific parent container element, rather than the browser window viewport. This means components can look wide and layout horizontally when placed in a large area, and collapse into a vertical stacked layout when placed in a narrow sidebar or card.</p>

        <h2>Step 1: Setting up the Container</h2>
        <p>First, we designate a parent container using CSS. We set the <code>container-type</code> property to <code>inline-size</code>, indicating we want to observe width changes:</p>
        <pre><code>{`.widget-container {
  container-type: inline-size;
  container-name: card-container;
  width: 100%;
}`}</code></pre>

        <h2>Step 2: Writing Container Queries</h2>
        <p>Now, instead of using <code>@media</code>, we use <code>@container</code> to target the container size directly. The component layout transitions adaptively:</p>
        <pre><code>{`.profile-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: white;
}

/* When parent card-container width is 450px or wider */
@container card-container (min-width: 450px) {
  .profile-card {
    flex-direction: row;
    align-items: center;
    padding: 1.5rem;
  }
  
  .profile-card img {
    width: 120px;
    height: 120px;
  }
}`}</code></pre>

        <h2>Why this matters</h2>
        <p>By decoupling your CSS styling from the browser viewport, you gain a brand new power: <strong>Contextual UI Independence</strong>. You can place the exact same card in your layout&apos;s main grid column, sidebar, or footer, and it will render perfectly without any custom modifier classes!</p>
      </>
    )
  }
};

import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  
  if (!article) {
    return {
      title: 'Post Not Found | Vikas Prasad Blog',
    };
  }

  return {
    title: `${article.title} | Vikas Prasad Blog`,
    description: article.description,
    openGraph: {
      title: `${article.title} | Vikas Prasad Blog`,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: ['Vikas Prasad'],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = ARTICLES[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="blog-detail-container">
      {/* Back to Blog */}
      <div className="blog-detail-back">
        <Link href="/blog" className="back-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to all articles
        </Link>
      </div>

      {/* Hero Header */}
      <header className="blog-detail-header">
        <span className="blog-detail-category">{article.category}</span>
        <h1 className="blog-detail-title">{article.title}</h1>
        <p className="blog-detail-desc">{article.description}</p>

        <div className="blog-detail-meta">
          <div className="author-pill">
            <img src="/images/vikas_1.jpg" alt="Vikas Prasad" className="author-avatar" />
            <span className="author-name">Vikas Prasad</span>
          </div>
          <span className="meta-sep">•</span>
          <span className="post-date">{article.date}</span>
          <span className="meta-sep">•</span>
          <span className="read-time">{article.readTime}</span>
        </div>
      </header>

      {/* Visual Splash Graphic */}
      <div className="blog-detail-splash" style={{ background: article.gradient }}>
        <div className="splash-accent">✏️ {article.category}</div>
      </div>

      {/* Article Content */}
      <article className="blog-detail-article">
        {article.content}
      </article>

      <div className="section-divider" style={{ margin: '4rem 0 3rem' }}></div>

      {/* Author Bio Section */}
      <section className="blog-detail-author-card">
        <img src="/images/vikas_1.jpg" alt="Vikas Prasad" className="author-card-avatar" />
        <div className="author-card-info">
          <h3>Written by Vikas Prasad</h3>
          <p>I&apos;m a software developer and technical writer specializing in modern JavaScript, React, Angular, and performant web architecture. I share build instructions and deep dives into technology standardizations.</p>
          <div className="author-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
