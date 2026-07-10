import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects | Vikas Prasad - Software Portfolio & Sandbox',
  description: 'Explore full-stack platforms, client dashboards, webhook API integration engines, and utility tools built by Vikas Prasad.',
  openGraph: {
    title: 'Projects | Vikas Prasad - Software Portfolio & Sandbox',
    description: 'Explore full-stack platforms, client dashboards, webhook API integration engines, and utility tools built by Vikas Prasad.',
    type: 'website',
  }
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
