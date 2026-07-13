import type { Metadata } from 'next';
import { DM_Sans, Lora, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import NewsletterSection from '../components/NewsletterSection';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://vikas-portfolio.vercel.app'),
  title: {
    default: 'Vikas Prasad | Software Developer',
    template: '%s | Vikas Prasad'
  },
  description: 'I\'m Vikas Prasad, a Full Stack Developer specializing in Next.js, React, Node.js, Express, MongoDB, and scalable cloud solutions.',
  keywords: ['Vikas Prasad', 'Software Developer', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Vikas Prasad' }],
  creator: 'Vikas Prasad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vikas-portfolio.vercel.app',
    title: 'Vikas Prasad | Software Developer',
    description: 'I\'m Vikas Prasad, a Full Stack Developer specializing in Next.js, React, Node.js, Express, MongoDB, and scalable cloud solutions.',
    siteName: 'Vikas Prasad Portfolio',
    images: [
      {
        url: '/images/vikas_1.jpg', // You can change this to a specific OG image later
        width: 1200,
        height: 630,
        alt: 'Vikas Prasad Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikas Prasad | Software Developer',
    description: 'I\'m Vikas Prasad, a Full Stack Developer specializing in Next.js, React, Node.js, Express, MongoDB, and scalable cloud solutions.',
    creator: '@VikasPrasad',
    images: ['/images/vikas_1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable} ${jetBrainsMono.variable}`}>
      <body>
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
                        <a href="https://www.instagram.com/vikas.prsd/" aria-label="Instagram">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </a>
                        <a href="https://linkedin.com" aria-label="LinkedIn">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="https://github.com/vikasPrasad05" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
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
            <ScrollToTop />
          </div>
        </div>
      </body>
    </html>
  );
}
