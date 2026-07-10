import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog | Vikas Prasad - Tech Deep Dives & Tutorials',
  description: 'Read technical tutorials, deep dives on modern web APIs, css anchor positioning, static link previews generation, and software engineering deep dives by Vikas Prasad.',
  openGraph: {
    title: 'Blog | Vikas Prasad - Tech Deep Dives & Tutorials',
    description: 'Read technical tutorials, deep dives on modern web APIs, css anchor positioning, static link previews generation, and software engineering deep dives by Vikas Prasad.',
    type: 'website',
  }
};

export default function BlogPage() {
  return <BlogClient />;
}
