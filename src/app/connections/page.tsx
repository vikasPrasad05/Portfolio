import type { Metadata } from 'next';
import ConnectionsClient from './ConnectionsClient';

export const metadata: Metadata = {
  title: 'Connections - Professional Network & Mentors',
  description: 'Explore the inspiring list of developers, engineers, and creators who influence and collaborate with Vikas Prasad.',
  openGraph: {
    title: 'Connections - Professional Network & Mentors',
    description: 'Explore the inspiring list of developers, engineers, and creators who influence and collaborate with Vikas Prasad.',
  }
};

export default function ConnectionsPage() {
  return <ConnectionsClient />;
}
