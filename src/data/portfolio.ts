export type NavLink = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  liveUrl: string;
  repoUrl?: string;
  tags: ('CODED' | 'DESIGNED')[];
  tech: string[];
  featured?: boolean;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const site = {
  name: 'Ngabo Angelos',
  role: 'Fullstack Developer',
  heroGreeting: 'Hi, I am',
  heroTagline: 'Fullstack Developer',
  heroSubline: 'React · TypeScript · Spring Boot · .NET',
  email: 'ngaboangelos@example.com',
  github: 'https://github.com/angelos-ngabo',
  linkedin: 'https://www.linkedin.com/in/ngabo-angelos-939a6a2a5/',
  copyright: '@2024 Ngabo Angelos',
};

/** Matches Figma desktop/mobile navbar — no Experience link in template */
export const navLinks: NavLink[] = [
  { label: 'About me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
];

export const contactNavLink: NavLink = { label: 'CONTACT ME', href: '#contact' };

export const itBerries = {
  title: 'IT BERRIES',
  body: `I build full-stack products that balance clean interfaces with reliable backends. From React and TypeScript on the front end to Spring Boot, ASP.NET Core, and PostgreSQL on the server, I focus on shipping maintainable software that scales with real users.`,
  ctaDesktop: 'READ MORE',
  ctaMobile: 'MORE',
};

export const about = {
  title: 'ABOUT ME',
  bodyDesktop:
    'I am Ngabo Angelos, a Fullstack Developer passionate about bridging design and engineering. I craft responsive web applications with modern JavaScript ecosystems and robust APIs, always aiming for clarity, performance, and long-term maintainability.',
  bodyMobile:
    'My name is Ngabo Angelos, a Fullstack Developer focused on React, TypeScript, Java/Spring Boot, and .NET — building products that are polished on the surface and solid underneath.',
};

export const services = [
  {
    title: 'DESIGN',
    description:
      'I translate requirements into clear UI flows and component systems. Whether extending an existing design or starting from wireframes, I keep accessibility and consistency in mind.',
    icon: '/figma_images/5fddff86cb7ba5e8b0c74d13c0ce6e370cc6d818.png',
  },
  {
    title: 'DEVELOPMENT',
    description:
      'I implement responsive, production-ready frontends and RESTful backends — from React/TypeScript SPAs to Spring Boot and ASP.NET Core services with PostgreSQL or SQL Server.',
    icon: '/figma_images/b824972287e50b57fa533c746b4cfdb0b266ce2b.png',
  },
  {
    title: 'MAINTENANCE',
    description:
      'I iterate on live products: bug fixes, feature additions, performance tuning, and deployment improvements so your stack stays healthy after launch.',
    icon: '/figma_images/b0c39be56feda71929896ce7b8627bc339652def.png',
  },
];

export const skills = {
  usingNow: [
    'React.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Java',
    'Spring Boot',
    'Git / GitHub',
    'PostgreSQL',
  ],
  learning: ['Docker', 'GraphQL', 'Cloud Architecture', 'Next.js'],
  other: [
    'C# / ASP.NET Core',
    'MySQL / SQL Server',
    'REST APIs',
    'Hadoop MapReduce',
    'JavaFX / Swing',
  ],
};

export const projects: Project[] = [
  {
    id: 'spendly',
    title: 'Spendly',
    subtitle: 'coded, designed',
    description: 'Personal Finance Management Platform — track spending, budgets, and insights with a React + Spring Boot stack.',
    image: '/figma_images/0ba3e11e5cc5326ebb1f3757cf308ed5656eaabf.png',
    liveUrl: 'https://spendly-two-ochre.vercel.app/',
    tags: ['CODED', 'DESIGNED'],
    tech: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'rangira',
    title: 'Rangira Agro',
    subtitle: 'coded, designed',
    description: 'Agricultural management system for farm operations, inventory, and reporting.',
    image: '/figma_images/54684fb6b3d88a197d1890fc58240e3b4e3dead5.png',
    liveUrl: '#',
    tags: ['CODED'],
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
  },
  {
    id: 'complaint',
    title: 'Complaint Management',
    subtitle: 'coded',
    description: 'Enterprise complaint resolution portal with role-based workflows.',
    image: '/figma_images/2607de40f99a1e1e1db55c7901116b1422152deb.png',
    liveUrl: '#',
    tags: ['CODED'],
    tech: ['C#', 'ASP.NET Core', 'SQL Server'],
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    subtitle: 'coded, designed',
    description: 'This portfolio — Figma-accurate layout with React, TypeScript, and Framer Motion.',
    image: '/figma_images/6d993f37bde04f4d87234d7b9ba6e69fd20c3765.png',
    liveUrl: '#',
    tags: ['CODED', 'DESIGNED'],
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Fullstack Developer',
    company: 'Freelance & Personal Projects',
    period: '2023 — Present',
    description:
      'Led end-to-end delivery of Spendly and other full-stack apps: UI in React/TypeScript, APIs in Spring Boot, data in PostgreSQL, deployed to production.',
  },
  {
    role: 'Software Engineering Student',
    company: 'Academic & Team Projects',
    period: '2021 — Present',
    description:
      'Built Rangira Agro Farming System and Complaint Management System; practiced distributed patterns, REST design, and database modeling.',
  },
  {
    role: 'Backend & Data Focus',
    company: 'Coursework',
    period: '2022 — 2024',
    description:
      'Worked with Hadoop MapReduce, Java desktop (JavaFX/Swing), and multi-tier architectures reinforcing fundamentals in algorithms and systems.',
  },
];

export const contact = {
  title: 'CONTACT',
  bodyDesktop:
    'Interested in collaborating or have a role in mind? Send a message — I typically respond within 48 hours.',
  bodyMobile:
    'My name is Ngabo Angelos. I am open to full-time, contract, and project-based work. Let’s build something solid together.',
};
