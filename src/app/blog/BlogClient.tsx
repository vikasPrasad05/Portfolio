'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

interface BlogPost {
  title: string;
  category: string;
  slug: string;
  date: string;
  readTime: string;
  description: string;
  imageClass: string;
  gradient: string;
}

const ALL_POSTS: BlogPost[] = [
  {
    title: "Build Link Previews with Playwright and the Popover API",
    category: "Tutorials",
    slug: "build-link-previews",
    date: "Jan 1, 2026",
    readTime: "8 min read",
    description: "Wikipedia-style link previews can make your blog feel more polished. In this tutorial, we'll build a system that captures screenshots at build time and displays them using the native Popover API with smooth CSS animations.",
    imageClass: "red",
    gradient: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)"
  },
  {
    title: "A Modern Table of Contents in Next.js with CSS Anchor Positioning",
    category: "Next.js",
    slug: "modern-table-of-contents",
    date: "Dec 31, 2025",
    readTime: "6 min read",
    description: "In this tutorial, you'll learn how to build a floating table of contents component for your Next.js blog that tracks the reader's scroll position and highlights the active section with a smooth animated dot.",
    imageClass: "blue",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
  },
  {
    title: "How to Use Signal Forms in Angular 21 (With Examples)",
    category: "Angular",
    slug: "signal-forms-angular",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    description: "In this post, you'll learn how Angular's new Signal Forms dramatically simplify form creation, improve performance through fine-grained reactivity, and eliminate the boilerplate and workarounds required by Reactive Forms.",
    imageClass: "purple",
    gradient: "linear-gradient(135deg, #a855f7 0%, #6b21a8 100%)"
  },
  {
    title: "Behind the Scenes of Tailwind CSS v4.0",
    category: "Design",
    slug: "behind-tailwind-v4",
    date: "Nov 28, 2025",
    readTime: "5 min read",
    description: "A deep dive into the performance enhancements, Rust-powered compiler engine, and new CSS-first configuration syntax introduced in Tailwind CSS v4.0.",
    imageClass: "green",
    gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)"
  },
  {
    title: "Automating Developer Workflows with GitHub Actions & Bun",
    category: "Automation",
    slug: "automating-workflows-github-actions-bun",
    date: "Oct 12, 2025",
    readTime: "7 min read",
    description: "Learn how to accelerate your CI/CD pipelines by replacing Node.js with Bun in GitHub Actions, reducing dependency install times and script executions by over 60%.",
    imageClass: "orange",
    gradient: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)"
  },
  {
    title: "Mastering CSS Container Queries for Truly Modular Components",
    category: "Design",
    slug: "mastering-css-container-queries",
    date: "Sep 4, 2025",
    readTime: "6 min read",
    description: "Break free from viewport-based media queries. In this guide, we explore how Container Queries allow you to style elements based on their parent container's size, enabling truly reusable UI modules.",
    imageClass: "teal",
    gradient: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)"
  }
];

const CATEGORIES = ["All", "Tutorials", "Next.js", "Angular", "Design", "Automation"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return ALL_POSTS.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Use the first post in the list as the featured post when category is "All" and no search query
  const featuredPost = useMemo(() => {
    if (selectedCategory === "All" && !searchQuery) {
      return ALL_POSTS[0];
    }
    return null;
  }, [selectedCategory, searchQuery]);

  const gridPosts = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.filter(p => p.slug !== featuredPost.slug);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

  return (
    <div className="blog-page-container">
      {/* Blog Page Hero */}
      <section className="blog-page-hero">
        <span className="blog-page-badge">Writing &amp; Guides</span>
        <h1 className="blog-page-title">I like sharing my experiments &amp;&amp; knowledge</h1>
        <p className="blog-page-subtitle">
          Thoughts, deep dives, and step-by-step tutorials on modern frontend tech, web standards, and developer productivity.
        </p>
      </section>

      {/* Featured Post Spotlight */}
      {featuredPost && (
        <section className="featured-post-section">
          <div className="featured-post-container">
            <Link href={`/blog/${featuredPost.slug}`} className="featured-post-link-wrapper">
              <div className="featured-post-card">
                <div className="featured-post-image-wrapper">
                  <div className="featured-post-gradient-overlay" style={{ background: featuredPost.gradient }}>
                    <div className="featured-post-mockup-content">
                      <span className="mockup-logo">✏️</span>
                      <span className="mockup-tech-tag">{featuredPost.category}</span>
                    </div>
                  </div>
                </div>
                <div className="featured-post-details">
                  <div className="featured-post-meta">
                    <span className="featured-post-category-tag">{featuredPost.category}</span>
                    <span className="meta-divider">•</span>
                    <span>{featuredPost.date}</span>
                    <span className="meta-divider">•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="featured-post-title">{featuredPost.title}</h2>
                  <p className="featured-post-desc">{featuredPost.description}</p>
                  <div className="featured-post-footer">
                    <div className="author-pill">
                      <img src="/images/vikas_1.jpg" alt="Vikas Prasad" className="author-avatar" />
                      <span className="author-name">Vikas Prasad</span>
                    </div>
                    <span className="read-more-text">
                      Read article 
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Filter and Search Bar Container */}
      <div className="blog-controls-section">
        <div className="blog-controls-wrapper">
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
          <div className="blog-search-container">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search articles, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-search-input"
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

      {/* Blog Grid */}
      <section className="blog-posts-grid-section">
        {gridPosts.length > 0 ? (
          <div className="blog-posts-grid">
            {gridPosts.map(post => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-grid-card-link">
                <article className="blog-grid-card">
                  <div className="blog-grid-card-image-wrapper">
                    <div className="blog-grid-card-gradient" style={{ background: post.gradient }}>
                      <div className="mockup-tech-tag">{post.category}</div>
                    </div>
                  </div>
                  <div className="blog-grid-card-content">
                    <div className="blog-grid-card-meta">
                      <span className="category-label">{post.category}</span>
                      <span className="meta-bullet">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="blog-grid-card-title">{post.title}</h3>
                    <p className="blog-grid-card-desc">{post.description}</p>
                    <div className="blog-grid-card-footer">
                      <span className="post-date">{post.date}</span>
                      <span className="read-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="blog-no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No articles found</h3>
            <p>We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo; in the category &ldquo;{selectedCategory}&rdquo;.</p>
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
