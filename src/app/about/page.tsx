import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About | Vikas Prasad - Full Stack Developer',
  description: 'Learn about Vikas Prasad\'s background, educational history in BCA, accounts & audit experience, and modern technology stack proficiency.',
  openGraph: {
    title: 'About | Vikas Prasad - Full Stack Developer',
    description: 'Learn about Vikas Prasad\'s background, educational history in BCA, accounts & audit experience, and modern technology stack proficiency.',
    type: 'profile',
  }
};

export default function AboutPage() {
  return <AboutClient />;
}
