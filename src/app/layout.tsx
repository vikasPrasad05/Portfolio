import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import NewsletterSection from '../components/NewsletterSection';
import Navbar from '../components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  title: 'Vikas Prasad | Developer',
  description: 'I\'m Vikas Prasad, a developer. Welcome to my corner of the internet!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable} ${jetBrainsMono.variable}`}>
        <div className="layout-wrapper">
          <div className="layout-container">
            <Navbar />
            <main className="main-content">
              {children}
            </main>
            <NewsletterSection />
            <footer className="footer">
              <div className="footer-content">
                <div className="footer-links-section">
                  <div className="footer-bio">
                    <div className="footer-logo">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p>I&apos;m Vikas Prasad - a developer. Thanks for checking out my site!</p>
                    <div className="footer-bottom-row">
                      <span className="copyright">© 2026 Vikas Prasad</span>
                      <div className="footer-social-pill">
                        <a href="https://twitter.com" aria-label="Twitter">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                        <a href="https://linkedin.com" aria-label="LinkedIn">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="https://github.com/vikasPrasad05" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="footer-columns">
                    <div className="footer-col">
                      <h4>General</h4>
                      <Link href="/">Home</Link>
                      <Link href="/about">About</Link>
                      <Link href="/projects">Projects</Link>
                      <Link href="/blog">Blog</Link>
                    </div>
                    <div className="footer-col">
                      <h4>Specifics</h4>
                      <Link href="/techstack">Tech Stack</Link>
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                      <Link href="/products">Products</Link>
                      <Link href="/connections">Connections</Link>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
