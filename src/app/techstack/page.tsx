import type { Metadata } from 'next';
import TechstackClient from './TechstackClient';

export const metadata: Metadata = {
  title: 'Tech Stack - Languages & Developer Tools',
  description: 'A curated showcase of programming languages, libraries, databases, devops tools, and cloud infrastructure that Vikas Prasad uses to build applications.',
  openGraph: {
    title: 'Tech Stack - Languages & Developer Tools',
    description: 'A curated showcase of programming languages, libraries, databases, devops tools, and cloud infrastructure that Vikas Prasad uses to build applications.',
  }
};

export default function TechstackPage() {
  return <TechstackClient />;
}
