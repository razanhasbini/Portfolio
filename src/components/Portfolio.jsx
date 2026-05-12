import { useEffect, useRef, useState } from 'react';
import './Portfolio.css';

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ Icons â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const I = {
  Star: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
    </svg>
  ),
  Bracket: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Arrow: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
    </svg>
  ),
  Plus: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Dot: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5" /></svg>
  ),
  Gh: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.05c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  ),
  Li: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z" />
    </svg>
  ),
  Mail: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" />
    </svg>
  ),
  AppStore: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 5h8" />
      <path d="M12 5l6.5 11.5" />
      <path d="M12 5L5.5 16.5" />
      <path d="M7.5 12.8h9" />
      <path d="M6 19h12" />
    </svg>
  ),
  PlayStore: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path className="pf-brand-path pf-brand-path--1" d="M4.8 3.8L13.7 12 4.8 20.2a1.2 1.2 0 0 1-.8-1.15V4.95c0-.46.3-.88.8-1.15Z" fill="currentColor" />
      <path className="pf-brand-path pf-brand-path--2" d="M13.7 12 17 8.95l-9.5-5.4a1.5 1.5 0 0 0-2.7.25L13.7 12Z" fill="currentColor" />
      <path className="pf-brand-path pf-brand-path--3" d="M13.7 12 17 15.05l-9.5 5.4a1.5 1.5 0 0 1-2.7-.25L13.7 12Z" fill="currentColor" />
      <path className="pf-brand-path pf-brand-path--4" d="M17 8.95 20.5 10.95a1.2 1.2 0 0 1 0 2.1L17 15.05 13.7 12 17 8.95Z" fill="currentColor" />
    </svg>
  ),
  Insta: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.3" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const NAV = [
  { n: '00', id: 'home', label: 'Index' },
  { n: '01', id: 'about', label: 'About' },
  { n: '02', id: 'services', label: 'Services' },
  { n: '03', id: 'work', label: 'Work' },
  { n: '04', id: 'beyond', label: 'Beyond' },
  { n: '05', id: 'journey', label: 'Journey' },
  { n: '06', id: 'stack', label: 'Stack' },
  { n: '07', id: 'contact', label: 'Contact' },
];

const SERVICES = [
  { n: '01', title: 'Full Stack Development', body: 'Complete web products from interface to backend: responsive React frontends, APIs, databases, auth, dashboards, and deployment-ready architecture.', tags: ['React', 'APIs', 'Databases'] },
  { n: '02', title: 'Mobile App Development', body: 'Cross-platform mobile apps with polished flows, real-time data, notifications, clean state management, and store-ready product details.', tags: ['Flutter', 'Kotlin', 'Firebase'] },
  { n: '03', title: 'AI', body: 'AI-powered product features including LLM integrations, chat flows, prompt systems, embeddings, model-backed workflows, and intelligent user experiences.', tags: ['LLMs', 'OpenAI', 'Workflows'] },
  { n: '04', title: 'Automation', body: 'Reliable automation for repetitive work: scraping, reporting, scheduled jobs, browser automation, integrations, and operational tools that save time.', tags: ['Python', 'Playwright', 'Reports'] },
];

const PROCESS_STEPS = [
  {
    n: '01', label: 'Input', title: 'Idea intake',
    meta: ['brief', 'goals', 'users'],
    desc: 'We start with an actual conversation. I want to understand what you are really building, who it is for, and what failure looks like. No intake forms, just clarity.',
    accent: 'terra',
  },
  {
    n: '02', label: 'Map', title: 'System shape',
    meta: ['flows', 'screens', 'data'],
    desc: 'Before any code I draw out the whole system. Every screen, every connection, every piece of data gets named and placed. This is where most surprises get caught early.',
    accent: 'gold',
  },
  {
    n: '03', label: 'Build', title: 'Working sprint',
    meta: ['frontend', 'backend', 'AI'],
    desc: 'I build in tight loops and share working code often. Nothing gets shown as a mockup when it can just run. You see real progress at every check in.',
    accent: 'teal',
  },
  {
    n: '04', label: 'Verify', title: 'Pressure test',
    meta: ['QA', 'edge cases', 'security'],
    desc: 'I try to break it before you ever touch it. That means edge cases, weird inputs, auth flows, load. The goal is for you to find zero bugs on first use.',
    accent: 'cyan',
  },
  {
    n: '05', label: 'Ship', title: 'Deploy cleanly',
    meta: ['docs', 'handoff', 'iterate'],
    desc: 'Going live is not the end. I make sure everything is documented, the system is yours to own, and there is a clear path for what comes next.',
    accent: 'cream',
  },
];

const WORK = [
  {
    n: '01',
    title: 'Bsheel App',
    sub: 'Sidequest competition application',
    year: '2026',
    tags: ['Flutter / Dart', 'Supabase', 'Riverpod', 'Firebase Cloud Messaging', 'Cloudflare R2 / Workers'],
    previewMode: 'phone',
    img: '/bsheel1.jpg',
    stackPhotos: ['/bsheel1.jpg', '/bsheel2.jpg', '/bsheel4.jpg'],
    docs: [],
    photos: [
      '/bsheel1.jpg',
      '/bsheel2.jpg',
      '/bsheel3.jpg',
      '/bsheel4.jpg',
      '/bsheel5.jpg',
      '/bsheel6.jpg',
      '/bsheel7.jpg',
      '/bsheel8.jpg',
      '/bsheel9.jpg',
      '/bsheel10.jpg',
      '/bsheel11.jpg',
      '/bsheel12.jpg',
      '/bsheel13.jpg',
      '/bsheel15.jpg',
      '/bsheel16.jpg',
      '/bsheel17.jpg',
      '/bsheel18.jpg',
      '/bsheel19.jpg',
      '/bsheel20.jpg',
      '/bsheel21.jpg',
    ],
    projectLinks: [
      { label: 'App Store', href: 'https://apps.apple.com/lb/app/bsheel/id6761139416', icon: 'appstore' },
      { label: 'Google Play Store', href: 'https://play.google.com/store/apps/details?id=com.questapp.mobile_app', icon: 'playstore' },
      { label: 'Instagram Account', href: 'https://www.instagram.com/bsheel.app?igsh=eDBsazl5cmloZ2o3', icon: 'instagram' },
    ],
    projectUrl: '',
  },
  {
    n: '02',
    title: 'WAZZAFAK AI',
    sub: 'Real time interview training application',
    year: '2025',
    tags: ['Kotlin', 'MVVM', 'Docker', 'LLM integration', 'WebSocket', 'Golang'],
    previewMode: 'phone',
    img: '/Wazzafak%201.jpg',
    stackPhotos: ['/Wazzafak%201.jpg', '/Wazzafak%202.jpg', '/Wazzafak%203.jpg'],
    docs: [
      { label: 'Wazzafak AI Report', href: '/Wazzafak%20AI%20Report.pdf', type: 'PDF' },
    ],
    photos: [
      '/Wazzafak%201.jpg',
      '/Wazzafak%202.jpg',
      '/Wazzafak%203.jpg',
      '/Wazzafak%204.jpg',
      '/Wazzafak%205.jpg',
      '/Wazzafak%206.jpg',
      '/wazzafak%207.jpg',
      '/Wazzafak%208.jpg',
      '/Wazzafak%209.png',
      '/wazzafak%2010.jpg',
    ],
    projectLinks: [
      { label: 'Interview Demo', href: 'https://drive.google.com/file/d/1Nrxx7LQYY26A80UWWj4cVE5GCpn1FaPm/view?usp=sharing' },
      { label: 'App Demo', href: 'https://drive.google.com/drive/folders/1wFAnWClpER9yJz5MJ6fm423Xj3_pBn4o?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto' },
      { label: 'Project Link', href: 'https://github.com/razanhasbini/fyp-submission.git' },
    ],
    projectUrl: '',
  },
  {
    n: '03',
    title: 'Cybersecurity Automation Dashboard',
    sub: 'Integrated Cybersecurity Intelligence & Automated Reporting Platform',
    year: '2026',
    tags: ['Next.js', 'FastAPI', 'Playwright', 'SOCKS5 Proxy Integration', 'Tor Network', 'SQLite'],
    img: '/cyber1.jpg',
    stackPhotos: ['/cyber28.jpg', '/cyber29.jpg', '/cyber31.jpg'],
    docs: [
      { label: 'Shelt Dashboard Documentation', href: '/documents/Shelt Dashboard Documentation.pdf', type: 'PDF' },
    ],
    photos: [
      '/cyber1.jpg',
      '/cyber2.jpg',
      '/cyber3.jpg',
      '/cyber4.jpg',
      '/cyber5.jpg',
      '/cyber6.jpg',
      '/cyber7.jpg',
      '/cyber8.jpg',
      '/cyber9.jpg',
      '/cyber10.jpg',
      '/cyber11.jpg',
      '/cyber12.jpg',
      '/cyber13.jpg',
      '/cyber14.jpg',
      '/cyber15.jpg',
      '/cyber16.jpg',
      '/cyber17.jpg',
      '/cyber18.jpg',
      '/cyber19.jpg',
      '/cyber20.jpg',
      '/cyber21.jpg',
      '/cyber22.jpg',
      '/cyber23.jpg',
      '/cyber24.jpg',
      '/cyber25.jpg',
      '/cyber26.jpg',
      '/cyber27.jpg',
      '/cyber28.jpg',
      '/cyber29.jpg',
      '/cyber30.jpg',
      '/cyber31.jpg',
      '/cyber32.jpg',
      '/cyber33.jpg',
    ],
    projectUrl: 'https://github.com/razanhasbini/automation-dashbaord',
  },
  {
    n: '04',
    title: 'Telegram Bots',
    sub: 'Privacy focused driving safety telegram bot',
    year: '2026',
    tags: ['Golang', 'Docker', 'Redis'],
    previewMode: 'phone',
    img: '/safebot1.png',
    stackPhotos: ['/candidate.png', '/safebot1.png', '/safebot2.png'],
    docs: [],
    photos: ['/candidate.png', '/safebot1.png', '/safebot2.png', '/safebot3.png'],
    projectUrl: '',
  },
  {
    n: '05',
    title: 'LAETA',
    sub: 'Food waste management and surprise boxes application',
    year: '2024',
    tags: ['Kotlin', 'Golang', 'Flutter', 'Firebase', 'Postgres'],
    previewMode: 'phone',
    img: '/laeta1.jpg',
    stackPhotos: ['/laeta1.jpg', '/laeta2.jpg', '/laeta3.jpg'],
    docs: [],
    photos: ['/laeta1.jpg', '/laeta2.jpg', '/laeta3.jpg', '/laeta4.jpg', '/laeta5.jpg'],
    projectUrl: '',
  },
  {
    n: '06',
    title: 'Website Selection',
    sub: 'Selected website projects and interactive web experiences',
    year: '2023-2026',
    tags: ['SMTP', 'React', 'Laravel', 'Tailwind CSS', 'Framer Motion'],
    img: '/evoid1.png',
    stackPhotos: ['/evoid1.png', '/apex1.png', '/apex2.png'],
    docs: [],
    photos: [
      '/evoid1.png',
      '/evoid%203.png',
      '/evoid%204.png',
      '/evoid%205.png',
      '/evoid%20too.png',
      '/apex1.png',
      '/apex2.png',
      '/apex4.png',
      '/apex5.png',
      '/apex6.png',
    ],
    projectLinks: [
      { label: 'Apex Global FM', href: 'https://apexglobalfm.com/' },
      { label: 'Evoid Website', href: 'https://evoid-bice.vercel.app/' },
    ],
    projectUrl: '',
  },
];

const JOURNEY = [
  { kind: 'edu',  year: '2022-2026', role: 'BS Computer Science', sub: 'Rafik Hariri University' },
  { kind: 'work', year: '2024',         role: 'Coding & AI Instructor', sub: 'Geek Express' },
  { kind: 'work', year: '2025',         role: 'Software Development Intern', sub: 'Imperium Code' },
  { kind: 'work', year: '2025',         role: 'Fullstack Developer Trainee', sub: 'Integrated Digital Systems' },
  { kind: 'work', year: '2026',         role: 'Backend & Blockchain Developer', sub: 'PlayOps' },
  { kind: 'work', year: '2025-2026',    role: 'Personal and Team Projects', sub: '' },
  { kind: 'work', year: '2026',         role: 'Automation & Development', sub: 'SHELT Global Ltd' },
];

const STACK = {
  frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Framer Motion', 'Vite', 'HTML/CSS'],
  backend:  ['Node.js', 'Java', 'C++', 'Python', 'C#', 'SQL', 'JavaScript', 'Kotlin', 'PHP', 'Golang', 'Assembly MIPS', 'Verilog HDL', 'API Development', 'REST', 'SOAP', 'Postgres', 'Prisma', 'GraphQL', 'Redis', 'FastAPI', 'Express.js', 'Django', 'Spring Boot', '.NET / ASP.NET', 'Laravel', 'WebSocket', 'gRPC', 'Docker', 'Message Queues', 'Kafka', 'RabbitMQ', 'MongoDB', 'MySQL', 'SQLite', 'Supabase', 'Firebase', 'Authentication / OAuth', 'JWT', 'Microservices', 'Caching', 'CI/CD', 'Nginx'],
  web3:     ['Machine Learning', 'LLM Integration', 'Prompt Engineering', 'OpenAI API', 'Vector Databases', 'Embeddings', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Model Evaluation', 'AI Agents', 'Realtime AI', 'Speech-to-Text', 'Text-to-Speech'],
  devops:   ['Playwright', 'Selenium', 'Web Scraping', 'Browser Automation', 'Python Automation', 'Bash Scripting', 'Cron Jobs', 'GitHub Actions', 'CI/CD', 'Docker', 'Linux', 'Nginx', 'ETL Pipelines', 'Report Generation', 'Scheduled Jobs', 'Data Extraction', 'Proxy Rotation', 'SOCKS5', 'Tor Network', 'Monitoring', 'Alerting'],
};

const STACK_TABS = [
  { key: 'frontend', n: '01', label: 'Frontend' },
  { key: 'backend', n: '02', label: 'Backend' },
  { key: 'web3', n: '03', label: 'AI / ML' },
  { key: 'devops', n: '04', label: 'Automation' },
];

const ABOUT_MODES = {
  builder: {
    n: '01',
    label: 'Full-Stack',
    title: 'I build complete products from idea to working system.',
    body: 'I work across frontend, backend, databases, APIs, authentication, dashboards, and deployment so a project feels connected instead of stitched together.',
    tags: ['React', 'APIs', 'Databases'],
  },
  security: {
    n: '02',
    label: 'Apps & Web',
    title: 'I design and develop websites, platforms, and mobile apps.',
    body: 'I like building polished interfaces backed by solid logic: responsive websites, admin tools, cross-platform mobile apps, clean flows, and real user-facing features.',
    tags: ['Websites', 'Mobile apps', 'UX flows'],
  },
  systems: {
    n: '03',
    label: 'Automation & AI',
    title: 'I turn repetitive work into smarter workflows.',
    body: 'I can build automation, reporting tools, scraping flows, AI-powered features, LLM integrations, and internal systems that save time and make decisions easier.',
    tags: ['Automation', 'AI features', 'Workflows'],
  },
};

const LEADING_IN_TECH = [
  {
    year: '2025',
    label: 'Organizer',
    role: 'NASA Space Apps',
    body: 'Managed and executed a globally affiliated innovation event, bringing developers, engineers, designers, and scientists together to solve real-world challenges with NASA open data.',
    photos: ['/spaceapps1.png', '/spaceapps2.png', '/spaceapps3.png', '/spaceapps4.png', '/spaceapps5.png', '/spaceapps6.png', '/spaceapps7.png'],
  },
  {
    year: '2025',
    label: 'Organizer',
    role: 'Hash Sector',
    body: 'Organized local and national cybersecurity events with organizers across the MENA region, helping students discover the field and build practical new skills.',
    photos: ['/hash.png'],
  },
];

const COMMUNITY_REPRESENTATION = [
  {
    label: 'Representation',
    title: 'Representing tech companies in the room',
    body: 'Conference floors, partner conversations, product demos, and the moments where technical work has to become clear, confident, and human.',
    photos: ['/stage.png', '/hash.png', '/spaceapps1.png'],
  },
  {
    label: 'Community',
    title: 'Leading public speaking and debate',
    body: 'Planning events, running workshops, mentoring speakers, and building spaces where students practice presence, persuasion, and leadership.',
    photos: ['/publicspeaking1.png', '/publicspeaking2.png', '/publicspeaking3.png'],
  },
];

const LEADING_TECH_BEYOND = [
  {
    year: '2025',
    label: 'Organizer',
    title: 'NASA Space Apps',
    body: 'Managed and executed a globally affiliated innovation event, bringing developers, engineers, designers, and scientists together to solve real-world challenges with NASA open data.',
    photos: ['/spaceapps1.png', '/spaceapps2.png', '/spaceapps3.png', '/spaceapps4.png', '/spaceapps5.png', '/spaceapps6.png', '/spaceapps7.png'],
  },
  {
    year: '2025',
    label: 'Organizer',
    title: 'Hash Sector',
    body: 'Organized local and national cybersecurity events with organizers across the MENA region, helping students discover the field and build practical new skills.',
    photos: ['/hash.png'],
  },
  {
    year: '2025',
    label: 'Representation',
    title: 'Representing Tech Companies',
    body: 'Represented technical teams and product ideas in conference spaces, translating complex work into confident conversations, demos, and human connection.',
    photos: ['/conf1.png', '/conf2.png', '/conf3.png', '/conf5.png', '/conf%206.png'],
  },
  {
    year: '2025',
    label: 'Community',
    title: 'Public Speaking & Debate Presidency',
    body: 'Led club planning, workshops, and speaking-focused events that helped students practice presence, persuasion, communication, and leadership.',
    photos: ['/publicspeaking1.png', '/publicspeaking2.png', '/publicspeaking3.png'],
  },
];

const CERTIFICATIONS = [
  { title: 'Google Cybersecurity Certificate', issuer: 'Coursera', year: '2023-2024' },
  { title: 'CCNA1v7 Certificate', issuer: 'Cisco', year: '2024', image: '/CCNAv7.png' },
  { title: 'Microsoft Excel Certification', issuer: 'Microsoft', year: '2024' },
  { title: 'GEN AI for Software Developers', issuer: 'IBM', year: '2026', image: '/ibmsofware.png' },
  { title: 'Aspire Leaders Program', issuer: 'Remote', year: '2026', note: 'Leadership program initially funded by Harvard.', image: '/aspire.png' },
  { title: 'Leaders of Lebanon Workshop', issuer: 'Haigazian University', year: '2022', note: 'Focus on emotional intelligence, problem solving, and communication.', image: '/leadership.png' },
  { title: 'ML Using Google Sheets', issuer: 'USJ EFAI', year: '2025', image: '/usl.png' },
  { title: 'GEN AI for Mobile Devs', issuer: 'IBM', year: '2026', image: '/mobile ibm.png' },
];

const TERMINAL_IDENTITY = [
  { cmd: '$ whoami', answer: 'Razan Hasbini' },
  { cmd: '$ location', answer: 'Lebanon / remote & relocation-friendly' },
  { cmd: '$ title', answer: 'Full-stack + AI developer' },
];

const MARQUEE = [
  'FULL-STACK', 'MOBILE APPS', 'AI FEATURES', 'AUTOMATION', 'BEIRUT · LB',
  'AVAILABLE Q2 2026', 'OPEN TO WORK', 'REACT · NODE · FLUTTER',
];

const scrollTo = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ Count up â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function useCountUp(target, ms = 1400) {
  const [v, setV] = useState(0);
  const [on, setOn] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (setOn(true), io.disconnect())), { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!on) return;
    const t0 = performance.now(); let raf;
    const loop = (t) => {
      const p = Math.min((t - t0) / ms, 1);
      setV(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [on, target, ms]);
  return [ref, v];
}

function Counter({ n, suffix = '+' }) {
  const [ref, v] = useCountUp(n);
  return <span ref={ref}>{v}<em>{suffix}</em></span>;
}

function ProcessBlueprint() {
  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const adj = {
    idea:   ['map'],
    map:    ['idea', 'build'],
    build:  ['map', 'verify'],
    verify: ['build', 'phone', 'screen'],
    phone:  ['verify'],
    screen: ['verify'],
  };

  const ns = (key) => {
    if (!active) return '';
    if (active === key) return 'pf2-node--active';
    if (adj[active]?.includes(key)) return 'pf2-node--related';
    return 'pf2-node--dim';
  };

  const ws = (...keys) => {
    if (!active) return '';
    return keys.some((k) => active === k || adj[active]?.includes(k))
      ? 'pf2-wires--lit' : 'pf2-wires--dim';
  };

  return (
    <section
      ref={sectionRef}
      className={`pf2 pf-reveal${visible ? ' pf2--vis' : ''}`}
      aria-label="Working protocol"
    >
      {/* ── Header ── */}
      <div className="pf2__header">
        <div className="pf2__header-left">
          <span className="pf2__eyebrow">// working protocol</span>
          <p className="pf2__lede">
            A clear pipeline from brief to deployment — visible decisions,
            working code at every stage.
          </p>
        </div>
        <div className="pf2__status">
          <span className="pf2__dot" aria-hidden />
          <span className="pf2__status-text">pipeline · active</span>
          <span className="pf2__status-sep" aria-hidden>·</span>
          <span className="pf2__status-id">RZN-OPS / 2026</span>
        </div>
      </div>

      {/* ── Diagram ── */}
      <div className="pf2__stage">
        <svg
          className="pf2__svg"
          viewBox="0 0 1200 420"
          role="img"
          aria-label="AI pipeline: brief to architecture to build to verify, outputting mobile and web"
        >
          <defs>
            <filter id="pf2-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="pf2-glow-sm" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <linearGradient id="pf2g-terra" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(192,72,56,0.22)" />
              <stop offset="100%" stopColor="rgba(7,18,13,0.96)" />
            </linearGradient>
            <linearGradient id="pf2g-gold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(217,147,62,0.2)" />
              <stop offset="100%" stopColor="rgba(7,18,13,0.96)" />
            </linearGradient>
            <linearGradient id="pf2g-teal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(77,182,172,0.24)" />
              <stop offset="100%" stopColor="rgba(7,18,13,0.98)" />
            </linearGradient>
            <linearGradient id="pf2g-cyan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(100,200,190,0.18)" />
              <stop offset="100%" stopColor="rgba(7,18,13,0.96)" />
            </linearGradient>
            <linearGradient id="pf2g-out" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(245,240,224,0.11)" />
              <stop offset="100%" stopColor="rgba(245,240,224,0.04)" />
            </linearGradient>
            {/* paths for animateMotion particles */}
            <path id="pf2p-ab" d="M188 212 H274" />
            <path id="pf2p-bc" d="M422 212 H512" />
            <path id="pf2p-cd" d="M660 212 H750" />
            <path id="pf2p-ep" d="M898 205 C958 205 1000 155 1000 132" />
            <path id="pf2p-es" d="M898 219 C958 219 972 330 972 348" />
          </defs>

          {/* ── Wire tracks (static underlay) ── */}
          <g className="pf2-tracks">
            <line x1="188" y1="212" x2="274" y2="212" />
            <line x1="422" y1="212" x2="512" y2="212" />
            <line x1="660" y1="212" x2="750" y2="212" />
            <path d="M512 168 C512 92 422 92 422 170" fill="none" />
            <path d="M898 205 C958 205 1000 155 1000 132" fill="none" />
            <path d="M898 219 C958 219 972 330 972 348" fill="none" />
          </g>

          {/* ── Animated flow wires ── */}
          <g className={`pf2-wires ${ws('idea', 'map')}`}>
            <line x1="188" y1="212" x2="274" y2="212" className="pf2-wire pf2-wire--ab" />
          </g>
          <g className={`pf2-wires ${ws('map', 'build')}`}>
            <line x1="422" y1="212" x2="512" y2="212" className="pf2-wire pf2-wire--bc" />
          </g>
          <g className={`pf2-wires ${ws('build', 'verify')}`}>
            <line x1="660" y1="212" x2="750" y2="212" className="pf2-wire pf2-wire--cd" />
          </g>
          <g className={`pf2-wires ${ws('map', 'build')}`}>
            <path d="M512 168 C512 92 422 92 422 170" fill="none" className="pf2-wire pf2-wire--feed" />
          </g>
          <g className={`pf2-wires ${ws('verify', 'phone')}`}>
            <path d="M898 205 C958 205 1000 155 1000 132" fill="none" className="pf2-wire pf2-wire--fork" />
          </g>
          <g className={`pf2-wires ${ws('verify', 'screen')}`}>
            <path d="M898 219 C958 219 972 330 972 348" fill="none" className="pf2-wire pf2-wire--fork pf2-wire--fork2" />
          </g>

          {/* ── Signal particles ── */}
          <circle r="3.5" className="pf2-ptcl pf2-ptcl--ab" filter="url(#pf2-glow-sm)">
            <animateMotion dur="3s" repeatCount="indefinite" begin="0s">
              <mpath href="#pf2p-ab" />
            </animateMotion>
          </circle>
          <circle r="3.5" className="pf2-ptcl pf2-ptcl--bc" filter="url(#pf2-glow-sm)">
            <animateMotion dur="3s" repeatCount="indefinite" begin="0.75s">
              <mpath href="#pf2p-bc" />
            </animateMotion>
          </circle>
          <circle r="3.5" className="pf2-ptcl pf2-ptcl--cd" filter="url(#pf2-glow-sm)">
            <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
              <mpath href="#pf2p-cd" />
            </animateMotion>
          </circle>
          <circle r="2.5" className="pf2-ptcl pf2-ptcl--fork" filter="url(#pf2-glow-sm)">
            <animateMotion dur="2.5s" repeatCount="indefinite" begin="2.3s">
              <mpath href="#pf2p-ep" />
            </animateMotion>
          </circle>
          <circle r="2.5" className="pf2-ptcl pf2-ptcl--fork" filter="url(#pf2-glow-sm)">
            <animateMotion dur="2.8s" repeatCount="indefinite" begin="2.6s">
              <mpath href="#pf2p-es" />
            </animateMotion>
          </circle>

          {/* ══ NODE: Brief ══ */}
          <g className={`pf2-node ${ns('idea')}`}
            onPointerEnter={() => setActive('idea')}
            onPointerLeave={() => setActive(null)}>
            <rect x="50" y="170" width="138" height="84" rx="12" fill="url(#pf2g-terra)" stroke="rgba(192,72,56,0.3)" strokeWidth="1" />
            <rect x="50" y="170" width="138" height="2"   rx="1"  fill="rgba(192,72,56,0.9)" />
            <circle cx="82" cy="210" r="11" fill="none" stroke="rgba(192,72,56,0.48)" strokeWidth="1.2" />
            <path d="M76 210l4.5 4.5 8.5-9" fill="none" stroke="rgba(245,240,224,0.68)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="102" y="206" className="pf2-n-label">Brief</text>
            <text x="102" y="220" className="pf2-n-sub">Requirements</text>
            <text x="62"  y="244" className="pf2-n-step">01</text>
            <text x="78"  y="244" className="pf2-n-tag">/ intake</text>
          </g>

          {/* ══ NODE: Architect ══ */}
          <g className={`pf2-node ${ns('map')}`}
            onPointerEnter={() => setActive('map')}
            onPointerLeave={() => setActive(null)}>
            <rect x="274" y="170" width="148" height="84" rx="12" fill="url(#pf2g-gold)" stroke="rgba(217,147,62,0.28)" strokeWidth="1" />
            <rect x="274" y="170" width="148" height="2"   rx="1"  fill="rgba(217,147,62,0.88)" />
            <circle cx="392" cy="196" r="5.5" fill="none" stroke="rgba(217,147,62,0.58)" strokeWidth="1.2" />
            <circle cx="378" cy="214" r="4"   fill="none" stroke="rgba(217,147,62,0.38)" strokeWidth="1" />
            <circle cx="406" cy="214" r="4"   fill="none" stroke="rgba(217,147,62,0.38)" strokeWidth="1" />
            <line x1="392" y1="201.5" x2="378" y2="210" stroke="rgba(245,240,224,0.15)" strokeWidth="1" />
            <line x1="392" y1="201.5" x2="406" y2="210" stroke="rgba(245,240,224,0.15)" strokeWidth="1" />
            <text x="290" y="206" className="pf2-n-label">Architect</text>
            <text x="290" y="220" className="pf2-n-sub">System design</text>
            <text x="284" y="244" className="pf2-n-step">02</text>
            <text x="300" y="244" className="pf2-n-tag">/ structure</text>
          </g>

          {/* ══ NODE: Build (chip) ══ */}
          <g className={`pf2-node pf2-node--chip ${ns('build')}`}
            onPointerEnter={() => setActive('build')}
            onPointerLeave={() => setActive(null)}>
            <rect x="512" y="162" width="148" height="100" rx="12" fill="url(#pf2g-teal)" stroke="rgba(77,182,172,0.32)" strokeWidth="1" />
            <rect x="512" y="162" width="148" height="2"   rx="1"  fill="rgba(77,182,172,0.92)" />
            {/* pins left */}
            <rect x="506" y="184" width="6" height="6" rx="1.5" fill="rgba(77,182,172,0.52)" />
            <rect x="506" y="198" width="6" height="6" rx="1.5" fill="rgba(77,182,172,0.52)" />
            <rect x="506" y="212" width="6" height="6" rx="1.5" fill="rgba(77,182,172,0.52)" />
            <rect x="506" y="226" width="6" height="6" rx="1.5" fill="rgba(77,182,172,0.52)" />
            {/* pins right */}
            <rect x="660" y="184" width="6" height="6" rx="1.5" fill="rgba(77,182,172,0.52)" />
            <rect x="660" y="198" width="6" height="6" rx="1.5" fill="rgba(77,182,172,0.52)" />
            <rect x="660" y="212" width="6" height="6" rx="1.5" fill="rgba(77,182,172,0.52)" />
            <rect x="660" y="226" width="6" height="6" rx="1.5" fill="rgba(77,182,172,0.52)" />
            <text x="586" y="220" textAnchor="middle" className="pf2-n-chip">&gt;_ BUILD</text>
            <text x="524" y="252" className="pf2-n-step">03</text>
            <text x="540" y="252" className="pf2-n-tag pf2-n-tag--teal">/ sprint</text>
          </g>

          {/* ══ NODE: Verify ══ */}
          <g className={`pf2-node ${ns('verify')}`}
            onPointerEnter={() => setActive('verify')}
            onPointerLeave={() => setActive(null)}>
            <rect x="750" y="170" width="148" height="84" rx="12" fill="url(#pf2g-cyan)" stroke="rgba(100,200,190,0.28)" strokeWidth="1" />
            <rect x="750" y="170" width="148" height="2"   rx="1"  fill="rgba(100,200,190,0.88)" />
            <polyline points="764,230 776,214 788,222 806,204" fill="none" stroke="rgba(100,200,190,0.72)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="806" cy="204" r="2.5" fill="rgba(100,200,190,0.92)" />
            <text x="820" y="206" className="pf2-n-label">Verify</text>
            <text x="820" y="220" className="pf2-n-sub">QA · security</text>
            <text x="762" y="244" className="pf2-n-step">04</text>
            <text x="778" y="244" className="pf2-n-tag">/ pressure</text>
          </g>

          {/* ══ OUTPUT: Phone ══ */}
          <g className={`pf2-output ${ns('phone')}`}
            onPointerEnter={() => setActive('phone')}
            onPointerLeave={() => setActive(null)}>
            <rect x="1000" y="82" width="52" height="100" rx="15" fill="url(#pf2g-out)" stroke="rgba(245,240,224,0.14)" strokeWidth="1" />
            <rect x="1002" y="84" width="48" height="96"  rx="14" fill="rgba(7,18,13,0.9)" />
            <rect x="1017" y="91" width="18" height="5"   rx="2.5" fill="rgba(2,8,6,0.96)" />
            <rect x="1006" y="105" width="40" height="22" rx="4" fill="rgba(77,182,172,0.1)" />
            <rect x="1006" y="133" width="26" height="4"  rx="2" fill="rgba(245,240,224,0.1)" />
            <rect x="1006" y="143" width="34" height="4"  rx="2" fill="rgba(245,240,224,0.07)" />
            <rect x="1006" y="153" width="20" height="4"  rx="2" fill="rgba(245,240,224,0.05)" />
            <rect x="1017" y="172" width="18" height="3"  rx="1.5" fill="rgba(245,240,224,0.14)" />
            <text x="1026" y="197" textAnchor="middle" className="pf2-out-label">mobile</text>
          </g>

          {/* ══ OUTPUT: Web screen ══ */}
          <g className={`pf2-output ${ns('screen')}`}
            onPointerEnter={() => setActive('screen')}
            onPointerLeave={() => setActive(null)}>
            <rect x="952" y="310" width="130" height="76" rx="9" fill="url(#pf2g-out)" stroke="rgba(245,240,224,0.12)" strokeWidth="1" />
            <rect x="952" y="310" width="130" height="16" rx="9" fill="rgba(245,240,224,0.06)" />
            <circle cx="963" cy="318" r="2.5" fill="rgba(200,60,50,0.72)" />
            <circle cx="972" cy="318" r="2.5" fill="rgba(200,155,45,0.72)" />
            <circle cx="981" cy="318" r="2.5" fill="rgba(55,155,80,0.72)" />
            <rect x="960" y="333" width="114" height="5" rx="2.5" fill="rgba(245,240,224,0.1)" />
            <rect x="960" y="344" width="74"  height="5" rx="2.5" fill="rgba(245,240,224,0.08)" />
            <rect x="960" y="355" width="92"  height="5" rx="2.5" fill="rgba(245,240,224,0.06)" />
            <rect x="1003" y="386" width="24" height="4" rx="2" fill="rgba(245,240,224,0.07)" />
            <line x1="1015" y1="386" x2="1015" y2="392" stroke="rgba(245,240,224,0.09)" strokeWidth="1.5" />
            <text x="1017" y="406" textAnchor="middle" className="pf2-out-label">web</text>
          </g>

        </svg>
      </div>

      {/* ── Step cards ── */}
      <div className="pf2__steps">
        {PROCESS_STEPS.map((step) => (
          <article className={`pf2__step pf2__step--${step.accent}`} key={step.n}>
            <div className="pf2__step-n">{step.n}</div>
            <div className="pf2__step-body">
              <span className="pf2__step-label">{step.label}</span>
              <strong className="pf2__step-title">{step.title}</strong>
              <p className="pf2__step-desc">{step.desc}</p>
              <div className="pf2__step-tags">
                {step.meta.map((t) => (
                  <span key={t} className="pf2__step-tag">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ Work item (case study row) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const WORK_TABS = [
  { key: 'docs', label: 'Documentation' },
  { key: 'photos', label: 'Photos' },
  { key: 'link', label: 'Project Link' },
];

const LINK_ICONS = {
  appstore: I.AppStore,
  playstore: I.PlayStore,
  instagram: I.Insta,
};

function WorkItem({ item, onOpen }) {
  const ref = useRef(null);
  const imgRef = useRef(null);
  const onMove = (e) => {
    const el = ref.current, img = imgRef.current; if (!el || !img) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    img.style.setProperty('--x', `${x}px`);
    img.style.setProperty('--y', `${y}px`);
    img.style.setProperty('--show', '1');
  };
  const onLeave = () => {
    if (imgRef.current) imgRef.current.style.setProperty('--show', '0');
  };
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen(item);
    }
  };
  return (
    <div
      className={`pf-work__row pf-reveal ${item.previewMode === 'phone' ? 'pf-work__row--phone' : ''}`}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onOpen(item)}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open ${item.title} project details`}
    >
      <span className="pf-work__n">{item.n}</span>
      <div className="pf-work__titleWrap">
        <h3 className="pf-work__title">{item.title}</h3>
        <p className="pf-work__sub">{item.sub}</p>
      </div>
      <div className="pf-work__tags">
        {item.tags.map((t) => <span className="pf-work__tag" key={t}>{t}</span>)}
      </div>
      <span className="pf-work__year">{item.year}</span>
      <I.Arrow className="pf-work__arrow" />
      <div className="pf-work__preview" ref={imgRef}>
        <img src={item.img} alt="" />
      </div>
    </div>
  );
}

function WorkModal({ project, activeTab, onTabChange, onClose }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
        return;
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((current) => (current - 1 + project.photos.length) % project.photos.length);
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((current) => (current + 1) % project.photos.length);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, project]);

  if (!project) return null;

  const stackPhotos = project.stackPhotos?.length ? project.stackPhotos : project.photos.slice(0, 3);
  const openPhoto = (index) => setLightboxIndex((index + project.photos.length) % project.photos.length);
  const showPrevPhoto = () => setLightboxIndex((current) => (current - 1 + project.photos.length) % project.photos.length);
  const showNextPhoto = () => setLightboxIndex((current) => (current + 1) % project.photos.length);

  return (
    <div className={`pf-modal pf-modal--stack ${project.previewMode === 'phone' ? 'pf-modal--phone' : ''}`} role="dialog" aria-modal="true" aria-labelledby="pf-modal-title">
      <button className="pf-modal__shade" onClick={onClose} aria-label="Close project details" />

      <article className="pf-modal__box">
        <div className="pf-modal__stack" aria-hidden>
          {stackPhotos.map((photo, i) => (
            <span className={`pf-modal__stack-card pf-modal__stack-card--${i + 1}`} key={photo}>
              <img src={photo} alt="" />
            </span>
          ))}
        </div>

        <header className="pf-modal__head">
          <div>
            <span className="pf-modal__eyebrow">{project.n} / {project.year}</span>
            <h3 id="pf-modal-title">{project.title}</h3>
            <p>{project.sub}</p>
          </div>
          <button className="pf-modal__close" onClick={onClose} aria-label="Close project details">×</button>
        </header>

        <div className="pf-modal__tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <div className="pf-modal__tabs" role="tablist" aria-label={`${project.title} details`}>
          {WORK_TABS.map((tab) => (
            <button
              key={tab.key}
              className={`pf-modal__tab ${activeTab === tab.key ? 'is-on' : ''}`}
              onClick={() => onTabChange(tab.key)}
              role="tab"
              aria-selected={activeTab === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="pf-modal__body" key={activeTab}>
          {activeTab === 'docs' && (
            <div className="pf-modal__docs">
              {project.docs.length > 0 ? (
                project.docs.map((doc) => (
                  <a key={doc.href} href={doc.href} target="_blank" rel="noreferrer" className="pf-modal__doc">
                    <span>{doc.type || 'Doc'}</span>
                    <strong>{doc.label}</strong>
                    <I.Arrow className="pf-modal__doc-ico" />
                  </a>
                ))
              ) : (
                <div className="pf-modal__empty">
                  <span>Documentation</span>
                  <p>No public documentation is attached for this project yet.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'photos' && (
            <div className="pf-modal__photos">
              {project.photos.map((photo, i) => (
                <button
                  className="pf-modal__photo"
                  key={photo}
                  onClick={() => openPhoto(i)}
                  aria-label={`Open ${project.title} screenshot ${i + 1} of ${project.photos.length}`}
                >
                  <img src={photo} alt={`${project.title} screenshot ${i + 1}`} />
                  <span className="pf-modal__photo-label">Screenshot {i + 1}</span>
                </button>
              ))}
            </div>
          )}

          {activeTab === 'link' && (
            <div className="pf-modal__linkPane">
              {project.projectLinks?.length ? (
                <div className="pf-modal__docs">
                  {project.projectLinks.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="pf-modal__doc pf-modal__visitCard">
                      {link.icon && LINK_ICONS[link.icon] ? (
                        <span className={`pf-modal__badgeIcon pf-modal__badgeIcon--${link.icon}`} aria-hidden>
                          {(() => {
                            const Icon = LINK_ICONS[link.icon];
                            return <Icon className="pf-modal__badgeIconSvg" />;
                          })()}
                        </span>
                      ) : (
                        <span>Link</span>
                      )}
                      <strong>{link.label}</strong>
                      <I.Arrow className="pf-modal__visit-ico" />
                    </a>
                  ))}
                </div>
              ) : project.projectUrl ? (
                <a href={project.projectUrl} target="_blank" rel="noreferrer" className="pf-modal__doc pf-modal__visitCard">
                  <span>Link</span>
                  <strong>Open project</strong>
                  <I.Arrow className="pf-modal__visit-ico" />
                </a>
              ) : (
                <div className="pf-modal__empty">
                  <span>Project link</span>
                  <p>No public project link is attached for this project yet.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </article>

      {lightboxIndex !== null && (
        <div className="pf-lightbox" role="dialog" aria-modal="true" aria-labelledby="pf-lightbox-title">
          <button className="pf-lightbox__shade" onClick={() => setLightboxIndex(null)} aria-label="Close photo viewer" />
          <div className="pf-lightbox__box">
            <button className="pf-lightbox__nav" onClick={showPrevPhoto} aria-label="Previous photo">‹</button>
            <figure className="pf-lightbox__figure">
              <img
                src={project.photos[lightboxIndex]}
                alt={`${project.title} screenshot ${lightboxIndex + 1}`}
              />
              <figcaption id="pf-lightbox-title">{project.title} screenshot {lightboxIndex + 1} of {project.photos.length}</figcaption>
            </figure>
            <button className="pf-lightbox__nav" onClick={showNextPhoto} aria-label="Next photo">›</button>
            <button className="pf-lightbox__close" onClick={() => setLightboxIndex(null)} aria-label="Close photo viewer">Close viewer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const cursorRef = useRef(null);
  const [activeTab, setActiveTab] = useState('frontend');
  const [stackSearch, setStackSearch] = useState('');
  const [activeAbout, setActiveAbout] = useState('builder');
  const [activeLeadPhotos, setActiveLeadPhotos] = useState({});
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeWorkTab, setActiveWorkTab] = useState('docs');
  const [terminalLines, setTerminalLines] = useState([]);
  const [terminalStep, setTerminalStep] = useState(0);
  const [terminalRunning, setTerminalRunning] = useState(false);
  const leadAutoPauseTicksRef = useRef(0);

  useEffect(() => {
    if (!terminalRunning) return undefined;
    if (terminalStep >= TERMINAL_IDENTITY.length) return undefined;

    const { cmd, answer } = TERMINAL_IDENTITY[terminalStep];
    let timer;
    let i = 0;
    const starter = setTimeout(() => {
      setTerminalLines((lines) => [...lines, { cmd, answer: '' }]);
      timer = setInterval(() => {
        i += 1;
        setTerminalLines((lines) => {
          const next = [...lines];
          next[next.length - 1] = { cmd, answer: answer.slice(0, i) };
          return next;
        });

        if (i >= answer.length) {
          clearInterval(timer);
          setTimeout(() => {
            if (terminalStep + 1 >= TERMINAL_IDENTITY.length) {
              setTerminalStep(TERMINAL_IDENTITY.length);
              setTerminalRunning(false);
            } else {
              setTerminalStep((step) => step + 1);
            }
          }, 160);
        }
      }, 44);
    }, 0);

    return () => {
      clearTimeout(starter);
      clearInterval(timer);
    };
  }, [terminalRunning, terminalStep]);

  const runTerminalSummary = () => {
    if (terminalRunning) return;
    if (terminalStep >= TERMINAL_IDENTITY.length) {
      setTerminalLines([]);
      setTerminalStep(0);
    }
    setTerminalRunning(true);
  };

  useEffect(() => {
    const cursor = cursorRef.current;
    let mx = 0, my = 0, cx = 0, cy = 0, raf;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const loop = () => {
      cx += (mx - cx) * 0.22;
      cy += (my - cy) * 0.22;
      if (cursor) cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);

    const io = new IntersectionObserver((es) => {
      es.forEach((e, i) => {
        if (e.isIntersecting) { setTimeout(() => e.target.classList.add('is-in'), i * 60); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.pf-reveal').forEach((el) => io.observe(el));

    // Scroll-spy for sidebar
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const spy = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.id;
          document.querySelectorAll('.pf-rail__link').forEach((l) => {
            l.classList.toggle('is-active', l.dataset.id === id);
          });
        }
      });
    }, { threshold: 0.35 });
    sections.forEach((s) => spy.observe(s));

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      io.disconnect(); spy.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!selectedWork && !selectedCert) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedWork(null);
      if (e.key === 'Escape') setSelectedCert(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedWork, selectedCert]);

  useEffect(() => {
    const galleries = LEADING_TECH_BEYOND.filter((item) => item.photos.length > 1);
    if (!galleries.length) return undefined;

    const timer = setInterval(() => {
      if (leadAutoPauseTicksRef.current > 0) {
        leadAutoPauseTicksRef.current -= 1;
        return;
      }
      setActiveLeadPhotos((current) => {
        const next = { ...current };
        galleries.forEach((item) => {
          const active = next[item.title] || 0;
          next[item.title] = (active + 1) % item.photos.length;
        });
        return next;
      });
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  const openWork = (project) => {
    setSelectedWork(project);
    setActiveWorkTab('docs');
  };

  const moveLeadPhoto = (role, total, direction) => {
    leadAutoPauseTicksRef.current = 4;
    setActiveLeadPhotos((current) => {
      const active = current[role] || 0;
      return { ...current, [role]: (active + direction + total) % total };
    });
  };

  const setLeadPhoto = (role, index) => {
    leadAutoPauseTicksRef.current = 4;
    setActiveLeadPhotos((current) => ({ ...current, [role]: index }));
  };

  const normalizedStackSearch = stackSearch.trim().toLowerCase();
  const stackSearchGroups = STACK_TABS.map((tab) => ({
    ...tab,
    items: STACK[tab.key].filter((skill) => skill.toLowerCase().includes(normalizedStackSearch)),
  })).filter((group) => group.items.length > 0);
  const stackMatchCount = stackSearchGroups.reduce((sum, group) => sum + group.items.length, 0);

  const handleHeroPhotoEnter = () => {
    cursorRef.current?.classList.add('is-photo');
  };

  const handleHeroPhotoMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const handleHeroPhotoLeave = (e) => {
    cursorRef.current?.classList.remove('is-photo');
    e.currentTarget.style.removeProperty('--mx');
    e.currentTarget.style.removeProperty('--my');
  };

  return (
    <div className="pf">
      <div className="pf-cursor" ref={cursorRef} />

      {/* â”€ Top marquee strip â”€ */}
      <div className="pf-tape" aria-hidden>
        <div className="pf-tape__track">
          {[...Array(3)].map((_, g) => (
            <span className="pf-tape__group" key={g}>
              {MARQUEE.map((w, i) => (
                <span className="pf-tape__item" key={`${g}-${i}`}>
                  <I.Star className="pf-tape__star" />
                  {w}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Top right CTA */}
      <div className="pf-top">
        <a href="#contact" className="pf-top__cta" onClick={(e) => scrollTo(e, 'contact')}>
          <span className="pf-top__dot" />
          Available · Q2 2026
        </a>
      </div>

      <main className="pf-main">

        {/* â•â•â• 00 Â· HERO â•â•â• */}
        <section className="pf-hero" id="home">
          <div className="pf-hero__meta">
            <span>ISSUE N°01 — 2026</span>
            <span className="pf-hero__sep" />
            <span>BEIRUT · LB · 33.888°N 35.495°E</span>
          </div>

          <div className="pf-hero__grid">
            <div className="pf-hero__left">
              <h1 className="pf-hero__name">
                <span className="pf-hero__line pf-hero__line--1">RAZAN</span>
                <span className="pf-hero__line pf-hero__line--2"><em>Hasbini</em></span>
              </h1>

              <div className="pf-hero__role">
                <span className="pf-hero__pill pf-hero__pill--teal">Full-Stack</span>
                <span className="pf-hero__pill pf-hero__pill--terra">Mobile</span>
                <span className="pf-hero__pill pf-hero__pill--gold">AI</span>
              </div>

              <p className="pf-hero__lede">
                I create a virtual version of anything you can think of.
                
              </p>

              <div className="pf-hero__actions">
                <a href="#work" className="pf-btn pf-btn--primary" onClick={(e) => scrollTo(e, 'work')}>
                  <span>See selected work</span><I.Arrow className="pf-btn__ico" />
                </a>
                <a href="#contact" className="pf-btn pf-btn--ghost" onClick={(e) => scrollTo(e, 'contact')}>
                  <I.Mail className="pf-btn__ico" /><span>hasrazan10@gmail.com</span>
                </a>
              </div>

              <div className="pf-hero__stats">
                <div className="pf-hero__stat">
                  <span className="pf-hero__stat-n"><Counter n={15} /></span>
                  <span className="pf-hero__stat-l">Projects shipped</span>
                </div>
                <div className="pf-hero__stat">
                  <span className="pf-hero__stat-n"><Counter n={3} /></span>
                  <span className="pf-hero__stat-l">Years building</span>
                </div>
                <div className="pf-hero__stat">
                  <span className="pf-hero__stat-n"><Counter n={200} /></span>
                  <span className="pf-hero__stat-l">Community led</span>
                </div>
              </div>
            </div>

            <div className="pf-hero__right">
              <div
                className="pf-hero__portrait"
                onMouseEnter={handleHeroPhotoEnter}
                onMouseMove={handleHeroPhotoMove}
                onMouseLeave={handleHeroPhotoLeave}
              >
                <img src="/heropic.jpg" alt="Razan Hasbini" />
                <div className="pf-hero__portrait-grid" />
                <span className="pf-hero__tag pf-hero__tag--top">
                  <I.Dot className="pf-hero__tag-dot" />
                  <span>computer science</span>
                </span>
                <span className="pf-hero__tag pf-hero__tag--bot">
                  <span>since '23</span>
                </span>
                <svg className="pf-hero__orbit" viewBox="0 0 220 220" aria-hidden>
                  <circle cx="110" cy="110" r="105" fill="none" stroke="currentColor" strokeDasharray="2 6" />
                </svg>
              </div>

            </div>
          </div>
        </section>
        {/* About */}
        {/* ══ 01 · ABOUT ══ */}
        <section className="pf-about" id="about">

          {/* ── section label bar ── */}
          <div className="pf-abt__bar pf-reveal">
            <span className="pf-abt__bar-n">01</span>
            <span className="pf-abt__bar-title">About</span>
            <span className="pf-abt__bar-rule" />
            <span className="pf-abt__bar-sub">a living profile, not a static card</span>
          </div>

          {/* ── split: portrait | story ── */}
          <div className="pf-abt__split">

            {/* left — sticky portrait column */}
            <aside className="pf-abt__col-photo pf-reveal">
              <div className="pf-abt__photo-wrap">
                <div className="pf-abt__photo-inner">
                  <img src="/about.jpeg" alt="Razan Hasbini" />
                  <div className="pf-abt__photo-mesh" aria-hidden />
                </div>
                {/* floating name tag */}
                <div className="pf-abt__nametag" aria-hidden>
                  <span className="pf-abt__nametag-name">Razan Hasbini</span>
                  <span className="pf-abt__nametag-role">Full-Stack · Mobile · AI</span>
                </div>
              </div>

              {/* status chips */}
              <div className="pf-abt__chips">
                <span className="pf-abt__chip pf-abt__chip--pulse">
                  <span className="pf-abt__chip-dot" />
                  Beirut, LB
                </span>
                <span className="pf-abt__chip pf-abt__chip--avail">Open to work</span>
              </div>

              {/* micro stats */}
              <div className="pf-abt__stats">
                {[['03', 'yrs building'], ['15+', 'projects'], ['BEY', 'remote-friendly']].map(([n, l]) => (
                  <div className="pf-abt__stat" key={l}>
                    <strong>{n}</strong>
                    <span>{l}</span>
                  </div>
                ))}
              </div>

              {/* languages */}
              <div className="pf-abt__langs-col">
                <p className="pf-abt__langs-label">Languages</p>
                <div className="pf-abt__langs">
                  {[['Arabic', 'Native', 100], ['English', 'Fluent', 100], ['Spanish', 'Intermediate', 60]].map(([l, lvl, p]) => (
                    <div className="pf-abt__lang" key={l}>
                      <div className="pf-abt__lang-row">
                        <strong>{l}</strong>
                        <span>{lvl}</span>
                      </div>
                      <div className="pf-abt__lang-track">
                        <div className="pf-abt__lang-fill" style={{ '--p': `${p}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* right — story + accordion identity */}
            <div className="pf-abt__col-story pf-reveal">
              <span className="pf-abt__eyebrow">// profile signal</span>

              <h3 className="pf-abt__headline">
                I build at the intersection of
                <em> code, security,</em>
                <br />and product taste.
              </h3>

              <p className="pf-abt__lede">
                I&apos;m Razan, I just graduated from computer science after thinking I want to spend my entire life in laboratories.
                After shifting my entire career path to software development,I realized how innovative this world is , and how even though it is scary how much competition in the market there is from people who are just as passionate as I am, 
                it is also very powerful, given how much we can create and build with just a computer. 
              </p>

              <p className="pf-abt__lede">
                I aim to reach my full potential while challenging myself by working on sophisticated projects, enhancing them with my experience and insights, and ensuring to always keep up with this worlwide tech marathon.
              </p>



              {/* accordion identity panels */}
              <div className="pf-abt__accordion" role="tablist" aria-label="About Razan modes">
                {Object.entries(ABOUT_MODES).map(([key, mode]) => (
                  <div
                    key={key}
                    className={`pf-abt__acc ${activeAbout === key ? 'is-open' : ''}`}
                  >
                    <button
                      className="pf-abt__acc-trigger"
                      onClick={() => setActiveAbout(key)}
                      role="tab"
                      aria-selected={activeAbout === key}
                      aria-expanded={activeAbout === key}
                    >
                      <span className="pf-abt__acc-n">{mode.n}</span>
                      <span className="pf-abt__acc-label">{mode.label}</span>
                      <span className="pf-abt__acc-arrow" aria-hidden>
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" />
                        </svg>
                      </span>
                    </button>
                    <div className="pf-abt__acc-body">
                      <div className="pf-abt__acc-inner">
                        <h4>{mode.title}</h4>
                        <p>{mode.body}</p>
                        <div className="pf-abt__acc-tags">
                          {mode.tags.map((tag) => <span key={tag}>{tag}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="pf-abt__terminal"
                aria-label="About terminal identity summary"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') runTerminalSummary();
                }}
              >
                <div className="pf-abt__terminal-bar">
                  <span />
                  <span />
                  <span />
                  <strong>about.exe</strong>
                </div>
                <div className="pf-abt__terminal-body">
                  <div className="pf-abt__terminal-prompt">
                    <span>$ sudo summary</span>
                    <em>// focus here + press Enter</em>
                  </div>
                  {terminalLines.map((line) => (
                    <div className="pf-abt__terminal-line" key={line.cmd}>
                      <span>{line.cmd}</span>
                      <strong>
                        {line.answer}
                        {terminalRunning && terminalLines[terminalLines.length - 1]?.cmd === line.cmd && (
                          <i aria-hidden />
                        )}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* â•â•â• 02 Â· SERVICES â•â•â• */}
        <section className="pf-services" id="services">
          <header className="pf-section__head pf-reveal">
            <span className="pf-section__num pf-section__num--light">02</span>
            <h2 className="pf-section__title pf-section__title--light">Services</h2>
            <span className="pf-section__rule pf-section__rule--light" />
            <span className="pf-section__kicker pf-section__kicker--light">what I build, end-to-end</span>
          </header>

          <div className="pf-services__grid">
            {SERVICES.map((s) => (
              <div className="pf-svc pf-reveal" key={s.n}>
                <span className="pf-svc__n">{s.n}</span>
                <div className="pf-svc__body">
                  <h3 className="pf-svc__title">{s.title}</h3>
                  <p className="pf-svc__text">{s.body}</p>
                  <div className="pf-svc__tags">
                    {s.tags.map((t) => <span key={t} className="pf-svc__tag">{t}</span>)}
                  </div>
                </div>
                <I.Plus className="pf-svc__plus" />
              </div>
            ))}
          </div>

          <ProcessBlueprint />
        </section>

        {/* â•â•â• 03 Â· WORK â•â•â• */}
        <section className="pf-work" id="work">
          <header className="pf-section__head pf-reveal">
            <span className="pf-section__num">03</span>
            <h2 className="pf-section__title">Selected Work</h2>
            <span className="pf-section__rule" />
            <span className="pf-section__kicker">a handful of recent things</span>
          </header>

          <div className="pf-work__list">
            {WORK.map((w) => <WorkItem key={w.n} item={w} onOpen={openWork} />)}
          </div>
        </section>

        {/* Beyond Code */}
        <section className="pf-beyond" id="beyond">
          <header className="pf-section__head pf-reveal">
            <span className="pf-section__num pf-section__num--light">04</span>
            <h2 className="pf-section__title pf-section__title--light">Beyond Code</h2>
            <span className="pf-section__rule pf-section__rule--light" />
            <span className="pf-section__kicker pf-section__kicker--light">stagecraft · leadership · presence</span>
          </header>

          <div className="pf-beyond__grid">
            <div className="pf-beyond__stage pf-reveal">
              <figure className="pf-beyond__photo">
                <img src="/stage.png" alt="Razan presenting on stage" />
              </figure>
              <h3>
                I do not just build the project.
                <em>I can carry it into the room.</em>
              </h3>
              <div className="pf-beyond__lights" aria-hidden>
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="pf-beyondElegance pf-reveal">
              <section className="pf-leadBeyond" aria-labelledby="leading-tech-beyond">
                <div className="pf-leadBeyond__head">
                  <span>community signal</span>
                  <h4 id="leading-tech-beyond">Leading in Tech &amp; Beyond</h4>
                </div>

                <div className="pf-leadBeyond__list">
                  {LEADING_TECH_BEYOND.map((item, i) => {
                    const activePhoto = activeLeadPhotos[item.title] || 0;
                    const hasGallery = item.photos.length > 1;
                    return (
                      <article className={`pf-leadBeyond__row ${i % 2 ? 'is-flipped' : ''}`} key={item.title} style={{ '--i': i }}>
                        <div className={`pf-leadBeyond__media ${hasGallery ? 'pf-leadBeyond__media--gallery' : 'pf-leadBeyond__media--single'}`}>
                          <div className="pf-leadBeyond__photos" aria-label={`${item.title} photos`}>
                            <div className="pf-leadBeyond__track" style={{ '--active-slide': activePhoto }}>
                              {item.photos.map((photo) => {
                                const isSlideSpaceApps4 = photo.includes('spaceapps4.png');
                                const isSlideSpaceApps6 = photo.includes('spaceapps6.png');
                                const isSlideHashPhoto = photo.includes('hash.png');
                                return (
                                  <figure key={photo}>
                                    <img
                                      src={photo}
                                      alt=""
                                      style={{
                                        '--photo-position': isSlideSpaceApps4 ? 'center 96%' : isSlideSpaceApps6 ? 'center 92%' : isSlideHashPhoto ? 'center 50%' : 'center center',
                                        '--photo-lift': isSlideSpaceApps4 ? '-8%' : isSlideSpaceApps6 ? '-15%' : isSlideHashPhoto ? '2%' : '0%',
                                        '--photo-scale': isSlideSpaceApps4 ? '1.18' : isSlideSpaceApps6 ? '1.14' : isSlideHashPhoto ? '1.08' : '1.01',
                                      }}
                                    />
                                  </figure>
                                );
                              })}
                            </div>
                            {hasGallery && (
                              <div className="pf-leadBeyond__nav">
                                <button onClick={() => moveLeadPhoto(item.title, item.photos.length, -1)} aria-label={`Previous ${item.title} photo`}>
                                  ‹
                                </button>
                                <button onClick={() => moveLeadPhoto(item.title, item.photos.length, 1)} aria-label={`Next ${item.title} photo`}>
                                  ›
                                </button>
                              </div>
                            )}
                          </div>
                          {hasGallery && (
                            <div className="pf-leadBeyond__dots" aria-label={`${item.title} photo selector`}>
                              {item.photos.map((photo, photoIndex) => (
                                <button
                                  className={photoIndex === activePhoto ? 'is-on' : ''}
                                  key={photo}
                                  onClick={() => setLeadPhoto(item.title, photoIndex)}
                                  aria-label={`Show ${item.title} photo ${photoIndex + 1}`}
                                  aria-current={photoIndex === activePhoto}
                                />
                              ))}
                            </div>
                          )}
                          {!hasGallery && <div className="pf-leadBeyond__dots pf-leadBeyond__dots--spacer" aria-hidden />}
                        </div>
                        <div className="pf-leadBeyond__copy">
                          <span>{item.year} / {item.label}</span>
                          <h5>{item.title}</h5>
                          <p>{item.body}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>

              <section className="pf-cred" aria-labelledby="certifications-growth">
                <div className="pf-cred__head">
                  <h4 id="certifications-growth" className="pf-cred__title">Certifications</h4>
                </div>

                <div className="pf-cred__grid">
                  {CERTIFICATIONS.map((cert, i) => (
                    <button
                      className="pf-cred__mini"
                      key={cert.title}
                      type="button"
                      style={{ '--ci': i }}
                      onClick={() => setSelectedCert(cert)}
                      aria-label={`Open ${cert.title} certificate`}
                    >
                      <span className={`pf-cred__paper ${cert.image ? 'pf-cred__paper--image' : ''}`} aria-hidden>
                        {cert.image ? (
                          <img src={cert.image} alt="" />
                        ) : (
                          <>
                            <span className="pf-cred__seal">{cert.issuer.slice(0, 2)}</span>
                            <span className="pf-cred__paper-k">Certificate</span>
                            <span className="pf-cred__paper-title">{cert.title}</span>
                            <span className="pf-cred__paper-line" />
                            <span className="pf-cred__paper-meta">{cert.issuer} · {cert.year}</span>
                          </>
                        )}
                      </span>
                      <span className="pf-cred__caption">
                        <strong>{cert.title}</strong>
                        <small>{cert.issuer} · {cert.year}</small>
                      </span>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        {selectedCert && (
          <div className="pf-certModal" role="dialog" aria-modal="true" aria-labelledby="cert-modal-title">
            <button className="pf-certModal__shade" type="button" onClick={() => setSelectedCert(null)} aria-label="Close certificate preview" />
            <div className="pf-certModal__panel">
              <button className="pf-certModal__close" type="button" onClick={() => setSelectedCert(null)}>Close</button>
              <div className={`pf-certModal__paper ${selectedCert.image ? 'pf-certModal__paper--image' : ''}`}>
                {selectedCert.image ? (
                  <img src={selectedCert.image} alt={selectedCert.title} id="cert-modal-title" />
                ) : (
                  <>
                    <span className="pf-certModal__kicker">Certificate</span>
                    <h3 id="cert-modal-title">{selectedCert.title}</h3>
                    <div className="pf-certModal__divider" />
                    <div className="pf-certModal__details">
                      <span>
                        <small>Issuer</small>
                        <strong>{selectedCert.issuer}</strong>
                      </span>
                      <span>
                        <small>Year</small>
                        <strong>{selectedCert.year}</strong>
                      </span>
                    </div>
                    {selectedCert.note && <p>{selectedCert.note}</p>}
                    <span className="pf-certModal__seal" aria-hidden>{selectedCert.issuer.slice(0, 2)}</span>
                  </>
                )}
                      </div>
            </div>
          </div>
        )}

        {/* â•â•â• 04 Â· JOURNEY (unified timeline) â•â•â• */}
        <section className="pf-journey" id="journey">
          <header className="pf-section__head pf-reveal">
            <span className="pf-section__num pf-section__num--light">05</span>
            <h2 className="pf-section__title pf-section__title--light">Journey</h2>
            <span className="pf-section__rule pf-section__rule--light" />
            <span className="pf-section__kicker pf-section__kicker--light">education · work · activities</span>
          </header>

          <div className="pf-journey__legend pf-reveal">
            <span className="pf-leg"><span className="pf-leg__d pf-leg__d--edu" /> Education</span>
            <span className="pf-leg"><span className="pf-leg__d pf-leg__d--work" /> Work</span>
            <span className="pf-leg"><span className="pf-leg__d pf-leg__d--act" /> Activity</span>
          </div>

          <div className="pf-timeline">
            <div className="pf-timeline__line" />
            {JOURNEY.map((e, i) => (
              <div className={`pf-tl pf-tl--${e.kind} pf-tl--${i % 2 === 0 ? 'L' : 'R'} pf-reveal`} key={i}>
                <div className="pf-tl__card">
                  <span className="pf-tl__year">{e.year}</span>
                  <h4 className="pf-tl__role">{e.role}</h4>
                  {e.sub && <p className="pf-tl__sub">{e.sub}</p>}
                </div>
                <div className="pf-tl__node"><span /></div>
              </div>
            ))}
          </div>
        </section>

        {/* â•â•â• 05 Â· STACK (tabbed) â•â•â• */}
        <section className="pf-stack" id="stack">
          <header className="pf-section__head pf-reveal">
            <span className="pf-section__num">06</span>
            <h2 className="pf-section__title">Tech Stack</h2>
            <span className="pf-section__rule" />
            <span className="pf-section__kicker">what I reach for</span>
          </header>

          <div className="pf-stack__wrap pf-reveal">
            <div className="pf-stack__search">
              <label htmlFor="stack-search">Search skills</label>
              <div className="pf-stack__searchBox">
                <input
                  id="stack-search"
                  type="search"
                  value={stackSearch}
                  onChange={(e) => setStackSearch(e.target.value)}
                />
                <span>{normalizedStackSearch ? `${stackMatchCount} match${stackMatchCount === 1 ? '' : 'es'}` : 'All stacks'}</span>
              </div>
            </div>

            {normalizedStackSearch ? (
              <div className="pf-stack__results" key={normalizedStackSearch}>
                {stackSearchGroups.length > 0 ? (
                  stackSearchGroups.map((group) => (
                    <div className="pf-stack__group" key={group.key}>
                      <header>
                        <span>{group.n}</span>
                        <h3>{group.label}</h3>
                      </header>
                      <div className="pf-stack__chips">
                        {group.items.map((s, i) => (
                          <span className="pf-stack__chip" key={`${group.key}-${s}`} style={{ '--d': `${i * 35}ms` }}>
                            <span className="pf-stack__chip-dot" />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="pf-stack__empty">
                    <span>// no exact match</span>
                    <p>No exact skill match yet. Try another keyword or ask me about it directly.</p>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="pf-stack__tabs" role="tablist">
                  {STACK_TABS.map((t) => (
                    <button
                      key={t.key}
                      className={`pf-stack__tab ${activeTab === t.key ? 'is-on' : ''}`}
                      onClick={() => setActiveTab(t.key)}
                      role="tab"
                    >
                      <span className="pf-stack__tab-n">{t.n}</span>
                      <span>{t.label}</span>
                      {activeTab === t.key && <span className="pf-stack__tab-ind" />}
                    </button>
                  ))}
                </div>

                <div className="pf-stack__chips" key={activeTab}>
                  {STACK[activeTab].map((s, i) => (
                    <span className="pf-stack__chip" key={s} style={{ '--d': `${i * 50}ms` }}>
                      <span className="pf-stack__chip-dot" />
                      {s}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* â•â•â• 06 Â· CONTACT â•â•â• */}
        <section className="pf-contact" id="contact">
          <header className="pf-section__head pf-reveal">
            <span className="pf-section__num pf-section__num--light">07</span>
            <h2 className="pf-section__title pf-section__title--light">Contact</h2>
            <span className="pf-section__rule pf-section__rule--light" />
            <span className="pf-section__kicker pf-section__kicker--light">say hello</span>
          </header>

          <div className="pf-contact__grid pf-reveal">
            <div className="pf-contact__left">
              <h3 className="pf-contact__shout">
                Let&apos;s build <em>something</em><br />people remember.
              </h3>
              <p className="pf-contact__lede">
                Open to freelance projects, full-time roles, and collaborations.
                Email is the fastest way to reach me — I typically reply within 24h.
              </p>
              <a href="mailto:hasrazan10@gmail.com" className="pf-btn pf-btn--primary pf-btn--lg">
                <I.Mail className="pf-btn__ico" /> hasrazan10@gmail.com
              </a>
              <div className="pf-contact__socials">
                <a href="https://github.com/razanhasbini" aria-label="GitHub" className="pf-contact__sc" target="_blank" rel="noreferrer"><I.Gh /></a>
                <a href="https://www.linkedin.com/in/razan-hasbini-2bb00a276" aria-label="LinkedIn" className="pf-contact__sc" target="_blank" rel="noreferrer"><I.Li /></a>
                <a href="mailto:hasrazan10@gmail.com" aria-label="Mail" className="pf-contact__sc"><I.Mail /></a>
              </div>
            </div>

            <div className="pf-contact__right">
              {[
                ['Location', 'Beirut, Lebanon'],
                ['Timezone', 'UTC +3'],
                ['Status', 'Available · Q2 2026'],
                ['Response', '< 24 hours'],
              ].map(([k, v]) => (
                <div className="pf-contact__row" key={k}>
                  <span className="pf-contact__row-k">{k}</span>
                  <span className="pf-contact__row-v">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€ Footer â”€ */}
        <footer className="pf-foot">
          <span className="pf-foot__brand">
            <I.Bracket className="pf-foot__ico" /> razan.dev
          </span>
          <span className="pf-foot__meta">© 2026 — Designed &amp; built with intent.</span>
          <a href="#home" className="pf-foot__top" onClick={(e) => scrollTo(e, 'home')}>
            back to top <I.Arrow className="pf-foot__top-ico" />
          </a>
        </footer>
      </main>

      {selectedWork && (
        <WorkModal
          key={`${selectedWork.n}-${activeWorkTab}`}
          project={selectedWork}
          activeTab={activeWorkTab}
          onTabChange={setActiveWorkTab}
          onClose={() => setSelectedWork(null)}
        />
      )}
    </div>
  );
}


