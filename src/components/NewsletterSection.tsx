'use client';

import React from 'react';

export default function NewsletterSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic can be added here
    alert('Thank you for subscribing!');
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-box">
        <div className="newsletter-content">
          <h2>Subscribe to my newsletter</h2>
          <p>A periodic update about my life, recent blog posts, how-tos, and discoveries.</p>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="email" placeholder="bobloblaw@gmail.com" required />
              <button type="submit">Subscribe</button>
            </div>
          </form>
          
          <p className="no-spam"><strong>NO SPAM.</strong> I never send spam. You can unsubscribe at any time!</p>
        </div>
        <div className="newsletter-bg-icon">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" opacity="0.05">
            <path d="M 30 70 L 70 30" />
            <path d="M 20 60 Q 30 70 40 60 T 60 40 T 80 60" />
            <path d="M 20 80 Q 40 100 60 80 T 80 60" />
          </svg>
        </div>
      </div>
    </section>
  );
}
