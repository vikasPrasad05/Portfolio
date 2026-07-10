"use client";

import React, { useState } from 'react';

interface Tool {
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  whatItIs: string;
  whatItDoes: string;
}

const tools: Tool[] = [
  // Frontend & Languages
  {
    name: 'React',
    category: 'Frontend & Languages',
    description: 'Component-based UI library for building responsive web interfaces.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#00d2ff" />
      </svg>
    ),
    whatItIs: "React is an open-source JavaScript library developed by Meta (formerly Facebook) for building interactive and component-based user interfaces.",
    whatItDoes: "It allows developers to create reusable UI components that efficiently manage their own state, rendering updates instantly using a Virtual DOM to provide a seamless user experience."
  },
  {
    name: 'Next.js',
    category: 'Frontend & Languages',
    description: 'Modern React framework with server-side rendering and static page generation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5l-3.5-5.5v5.5H9V8h1.5l3.5 5.5V8h1.5v8.5H13z" fill="currentColor"/>
      </svg>
    ),
    whatItIs: "Next.js is a production-ready, full-stack React framework developed and maintained by Vercel.",
    whatItDoes: "It enables features such as Server-Side Rendering (SSR), Static Site Generation (SSG), file-based routing, and built-in optimization, allowing developers to build fast, SEO-friendly web applications."
  },
  {
    name: 'JavaScript',
    category: 'Frontend & Languages',
    description: 'Dynamic scripting language powering the interactivity of modern web applications.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <rect width="24" height="24" rx="4" fill="#f7df1e"/>
        <text x="13" y="18" fill="black" fontWeight="bold" fontFamily="sans-serif" fontSize="11">JS</text>
      </svg>
    ),
    whatItIs: "JavaScript is a lightweight, interpreted programming language with first-class functions, serving as a core technology of the World Wide Web.",
    whatItDoes: "It powers client-side interactivity, allowing dynamic behavior on web pages such as animations, form validation, and asynchronous updates, and executes on servers via Node.js."
  },
  {
    name: 'TypeScript',
    category: 'Frontend & Languages',
    description: 'Typed superset of JavaScript, improving code reliability and developer tooling.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <rect width="24" height="24" rx="4" fill="#3178c6"/>
        <text x="13" y="18" fill="white" fontWeight="bold" fontFamily="sans-serif" fontSize="11">TS</text>
      </svg>
    ),
    whatItIs: "TypeScript is a strongly typed programming language developed by Microsoft that acts as a strict syntactical superset of JavaScript.",
    whatItDoes: "It introduces static typing to help identify syntax and logical errors during development, enhancing code completion, editor tooling, and long-term project maintainability."
  },
  {
    name: 'Tailwind',
    category: 'Frontend & Languages',
    description: 'Utility-first CSS framework for rapid UI development and styling.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6.018C7.4 6.018 4.38 8.681 2.93 14c2.258-3.15 4.838-4.28 7.74-3.393 1.656.505 2.84 1.705 4.15 3.037C17.065 15.92 19.866 18 25 18c4.6 0 7.62-2.663 9.07-8-2.258 3.15-4.838 4.28-7.74 3.393-1.656-.505-2.84-1.705-4.15-3.037C19.935 8.08 17.134 6 12 6.018z" fill="#38bdf8"/>
      </svg>
    ),
    whatItIs: "Tailwind CSS is a utility-first CSS framework designed for rapid user interface development directly inside markup.",
    whatItDoes: "It provides low-level, atomic utility classes (such as flex, pt-4, and text-center) to build highly responsive, customized designs without writing separate stylesheets."
  },
  // Backend & Databases
  {
    name: 'Backend',
    category: 'Backend & Databases',
    description: 'Robust server architecture, system integrations, and business logic execution.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    whatItIs: "Backend development refers to the server-side architecture of an application, managing data flow, business logic, and systems integration.",
    whatItDoes: "It processes client requests, manages database interactions, coordinates backend services, and serves data securely to the user interface via APIs."
  },
  {
    name: 'Node.js',
    category: 'Backend & Databases',
    description: 'V8-powered asynchronous JavaScript runtime for building scalable server apps.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2.5 7.5v11L12 24l9.5-5.5v-11L12 2zm-1.5 17.2V9.8l5.5 3.2-5.5 4.2z" fill="#339933"/>
      </svg>
    ),
    whatItIs: "Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine.",
    whatItDoes: "It enables server-side execution of JavaScript, using an asynchronous event-driven, non-blocking I/O model to build highly scalable networks and real-time backend systems."
  },
  {
    name: 'Express',
    category: 'Backend & Databases',
    description: 'Fast, minimalist, and unopinionated web framework for Node.js APIs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 128 128" fill="currentColor">
        <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/>
      </svg>
    ),
    whatItIs: "Express.js is a minimalist and flexible web application framework for Node.js, designed to streamline server-side routing and middleware configurations.",
    whatItDoes: "It provides robust routing capabilities, handles HTTP request parsing, integrates template engines, and acts as a foundation for building scalable RESTful APIs."
  },
  {
    name: 'MongoDB',
    category: 'Backend & Databases',
    description: 'Flexible NoSQL document database designed for modern applications.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5c-.3 0-.6.1-.9.3C9.3 3 5 8.4 5 13.5c0 3.6 2.9 6.5 6.5 6.5.3 0 .6-.1.9-.3 1.8-1.2 6.1-6.6 6.1-11.7 0-3.6-2.9-6.5-6.5-6.5zm0 15c-1.9 0-3.5-1.6-3.5-3.5S10.1 9.5 12 9.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" fill="#47a248"/>
      </svg>
    ),
    whatItIs: "MongoDB is a source-available, document-oriented NoSQL database system that manages data in JSON-like formats.",
    whatItDoes: "It stores semi-structured data using flexible, dynamic schemas rather than traditional tables, offering high scalability, performance, and seamless integration with web services."
  },
  {
    name: 'PostgreSQL',
    category: 'Backend & Databases',
    description: 'Advanced relational database system supporting reliable transaction operations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 128 128">
        <path fill="#336791" d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985"/>
        <path fill="#336791" d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z"/>
      </svg>
    ),
    whatItIs: "PostgreSQL is an advanced, enterprise-grade open-source object-relational database management system (RDBMS) with a strong emphasis on reliability and SQL compliance.",
    whatItDoes: "It stores data in structured tables and supports complex queries, indexing options, ACID compliance for transaction safety, and native JSON processing."
  },
  {
    name: 'Authentication',
    category: 'Backend & Databases',
    description: 'Secure user authentication systems (OAuth, JWT, next-auth, cookie-sessions).',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    whatItIs: "Authentication and authorization constitute the security layer of an application, verifying user identity and access permissions.",
    whatItDoes: "It secures user sessions through password hashing, token validation (like JWT), session cookies, and third-party logins (such as Google and GitHub OAuth) to protect restricted routes."
  },
  // DevOps & Cloud
  {
    name: 'Cloud',
    category: 'Cloud & Infrastructure',
    description: 'Distributed cloud computing, virtualization, global CDNs, and file storage.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.04-1.29-1.92-2.31-2.34A5.5 5.5 0 0 0 3 11.5c0 2.79 2.54 4.5 5 4.5h9.5z" />
      </svg>
    ),
    whatItIs: "Cloud computing represents the on-demand availability of system resources, storage, and database hosting over the internet.",
    whatItDoes: "It eliminates the need for physical server management by providing virtualized infrastructure, global content delivery networks (CDNs), and cloud object storage to scale systems."
  },
  {
    name: 'Git',
    category: 'Cloud & Infrastructure',
    description: 'Distributed version control system to track file revisions and source code changes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 128 128">
        <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/>
      </svg>
    ),
    whatItIs: "Git is a free, open-source distributed version control system designed to handle projects of all sizes with speed and efficiency.",
    whatItDoes: "It tracks file revisions and changes over time, allowing multiple developers to collaborate concurrently on a codebase through branches without risking primary code stability."
  },
  {
    name: 'GitHub',
    category: 'Cloud & Infrastructure',
    description: 'Cloud hosting platform for version control, project collaboration, and CI/CD.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    whatItIs: "GitHub is a cloud-based development platform that hosts Git repositories and facilitates social coding and team collaboration.",
    whatItDoes: "It adds collaborative tools such as pull requests, code reviews, issue tracking, and automates testing and deployment workflows using GitHub Actions."
  },
  {
    name: 'Docker',
    category: 'Cloud & Infrastructure',
    description: 'Containerization tool for standardizing local runs and deployment environments.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 8.871h-1.996V6.886h1.996V8.871zm-2.495 0h-1.996V6.886h1.996V8.871zm-2.496 0H7.006V6.886h1.996V8.871zm-2.495 0H4.502V6.886h1.996V8.871zm7.486-2.495h-1.996V4.391h1.996V6.376zm-2.495 0h-1.996V4.391h1.996V6.376zm-2.496 0H7.006V4.391h1.996V6.376zM24 12.54c-.16 2.37-1.47 4.29-3.79 4.29H3.79C1.47 16.83.16 14.91 0 12.54h24z" fill="#2496ed"/>
      </svg>
    ),
    whatItIs: "Docker is an open-source containerization platform that packages applications and their dependencies into lightweight, portable containers.",
    whatItDoes: "It isolates software from the host operating system, ensuring that applications run identically across local development, staging, and production servers."
  },
  {
    name: 'AWS',
    category: 'Cloud & Infrastructure',
    description: 'Amazon Web Services cloud computing hosting infrastructure.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 128 128">
        <path fill="#252f3e" d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64Zm-17.094 6.403c1.387 0 2.82-.254 4.336-.758 1.516-.508 2.863-1.433 4-2.695.672-.8 1.18-1.684 1.43-2.695.254-1.012.422-2.23.422-3.665v-1.765a34.401 34.401 0 0 0-3.871-.719 31.816 31.816 0 0 0-3.961-.25c-2.82 0-4.883.547-6.274 1.684-1.387 1.136-2.062 2.734-2.062 4.84 0 1.98.504 3.453 1.558 4.464 1.012 1.051 2.485 1.559 4.422 1.559Zm33.809 4.547c-.758 0-1.262-.125-1.598-.422-.34-.254-.633-.84-.887-1.64L40.715 29.98c-.25-.843-.38-1.39-.38-1.687 0-.672.337-1.05 1.013-1.05h4.125c.8 0 1.347.124 1.644.421.336.25.59.84.84 1.64l7.074 27.876 6.57-27.875c.208-.84.462-1.39.797-1.64.34-.255.93-.423 1.688-.423h3.367c.8 0 1.348.125 1.684.422.336.25.633.84.8 1.64l6.653 28.212 7.285-28.211c.25-.84.547-1.39.84-1.64.336-.255.887-.423 1.644-.423h3.914c.676 0 1.055.336 1.055 1.051 0 .21-.043.422-.086.676-.043.254-.125.59-.293 1.05L80.801 62.57c-.254.84-.547 1.387-.887 1.64-.336.255-.883.423-1.598.423h-3.62c-.801 0-1.348-.13-1.684-.422-.34-.297-.633-.844-.801-1.684l-6.527-27.16-6.485 27.117c-.21.844-.46 1.391-.8 1.684-.337.297-.926.422-1.684.422Zm54.105 1.137c-2.187 0-4.379-.254-6.484-.758-2.106-.504-3.746-1.055-4.84-1.684-.676-.379-1.137-.8-1.305-1.18a2.919 2.919 0 0 1-.254-1.18v-2.148c0-.882.97-1.304.97-1.304c.25 0 .503.043.757.129c.25.082.629.25 1.05.418a23.102 23.102 0 0 0 4.634 1.476c1.683.336 3.324.504 5.011.504c2.653 0 4.715-.465 6.145-1.39c1.433-.926 2.191-2.274 2.191-4c0-1.18-.379-2.145-1.136-2.946c-.758-.8-2.192-1.516-4.254-2.191l-6.106-1.895c-3.074-.969-5.348-2.398-6.734-4.293c-1.39-1.855-2.106-3.918-2.106-6.105c0-1.77.38-3.328 1.137-4.676a10.829 10.829 0 0 1 3.031-3.453c1.262-.965 2.696-1.684 4.38-2.188c1.683-.504 3.452-.715 5.304-.715c.926 0 1.894.043 2.82.168c.969.125 1.852.293 2.738.461c.84.211 1.641.422 2.399.676c.758.254 1.348.504 1.77.758c.59.336 1.011.672 1.261 1.05c.254.34.379.802.379 1.391v1.98c0 .884-.336 1.348-.969 1.348c-.336 0-.883-.171-1.597-.507c-2.403-1.094-5.098-1.641-8.086-1.641c-2.399 0-4.293.379-5.598 1.18c-1.309.797-1.98 2.02-1.98 3.746c0 1.18.421 2.191 1.261 2.988c.844.8 2.403 1.602 4.633 2.316l5.98 1.895c3.032.969 5.22 2.316 6.524 4.043c1.305 1.727 1.938 3.707 1.938 5.895c0 1.812-.38 3.453-1.094 4.882c-.758 1.434-1.77 2.696-3.074 3.707c-1.305 1.051-2.864 1.809-4.672 2.36c-1.895.586-3.875.883-6.024.883Zm0 0"/>
        <path fill="#f90" d="M118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.927.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.688.297-4.254-2.02-3.204-15.534 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z"/>
      </svg>
    ),
    whatItIs: "Amazon Web Services (AWS) is a comprehensive cloud computing platform offering global infrastructure, compute capacity, and storage solutions.",
    whatItDoes: "It hosts backend web services, scales virtual servers, deploys serverless functions, manages databases, and secures infrastructure to support enterprise applications."
  },
  {
    name: 'Vercel',
    category: 'Cloud & Infrastructure',
    description: 'Serverless deployment platform optimized for Next.js and frontend hosting.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L24 22H0L12 2Z" fill="currentColor"/>
      </svg>
    ),
    whatItIs: "Vercel is a serverless cloud platform optimized for hosting frontend frameworks and static web applications.",
    whatItDoes: "It enables continuous deployment by building and deploying projects directly from Git repository pushes, serving assets globally via a high-performance Edge Network."
  },
];

export default function TechstackPage() {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const categories = Array.from(new Set(tools.map((t) => t.category)));

  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-flex">
          <div className="about-hero-text">
            <span className="about-pretitle">Tech Stack</span>
            <h1 className="about-title">Software, languages, &amp; frameworks I use.</h1>
            <p className="about-description">
              A curated collection of technologies and developer tools that I rely on to build responsive web applications, server APIs, and cloud architecture.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Techstack categories and items */}
      <section className="techstack-sections">
        {categories.map((category) => (
          <div key={category} className="techstack-category-section">
            <h2 className="techstack-category-title">{category}</h2>
            <div className="techstack-items-grid">
              {tools
                .filter((t) => t.category === category)
                .map((tool) => (
                  <div
                    key={tool.name}
                    className="techstack-item-card"
                    onClick={() => setSelectedTool(tool)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="techstack-item-icon-wrapper">
                      {tool.icon}
                    </div>
                    <div className="techstack-item-info">
                      <span className="techstack-item-name">{tool.name}</span>
                      <p className="techstack-item-desc">{tool.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>

      <div className="section-divider"></div>

      {/* Stretched bottom horizontal marquee card */}
      <div className="techstack-marquee-card">
        <div className="marquee-container">
          <div className="marquee-track">
            <div className="marquee-group">
              {tools.map((tool) => (
                <div
                  key={`m1-${tool.name}`}
                  className="tool-item"
                  onClick={() => setSelectedTool(tool)}
                >
                  <div className="tool-item-inner">
                    {tool.icon}
                  </div>
                </div>
              ))}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {tools.map((tool) => (
                <div
                  key={`m2-${tool.name}`}
                  className="tool-item"
                  onClick={() => setSelectedTool(tool)}
                >
                  <div className="tool-item-inner">
                    {tool.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sleek Popup Modal */}
      {selectedTool && (
        <div 
          className="techstack-modal-overlay"
          onClick={() => setSelectedTool(null)}
        >
          <div 
            className="techstack-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="techstack-modal-close-btn"
              onClick={() => setSelectedTool(null)}
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="techstack-modal-header">
              <div className="techstack-modal-icon-wrapper">
                {selectedTool.icon}
              </div>
              <div className="techstack-modal-title-info">
                <span className="techstack-modal-category">{selectedTool.category}</span>
                <h2 className="techstack-modal-name">{selectedTool.name}</h2>
              </div>
            </div>

            <div className="techstack-modal-body">
              <div className="techstack-modal-section">
                <h3>What is it?</h3>
                <p>{selectedTool.whatItIs}</p>
              </div>

              <div className="techstack-modal-section">
                <h3>What it does</h3>
                <p>{selectedTool.whatItDoes}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
