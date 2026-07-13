import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects - Software Portfolio & Sandbox',
  description: 'Explore full-stack platforms, client dashboards, webhook API integration engines, and utility tools built by Vikas Prasad.',
  openGraph: {
    title: 'Projects - Software Portfolio & Sandbox',
    description: 'Explore full-stack platforms, client dashboards, webhook API integration engines, and utility tools built by Vikas Prasad.',
  }
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
