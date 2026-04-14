import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem } from './Reveal';
import './Experience.css';

const experiences = [
  {
    period: '2024 — Present',
    tag: 'Blockchain & Web3',
    title: 'Blockchain Developer',
    company: 'PlayOps',
    desc: 'Built blockchain-integrated applications using ThirdWeb SDK, developing smart contract interactions, wallet authentication flows, and on-chain transaction systems for a Web3 gaming platform. Architected the full stack from React frontend to backend services.',
    tags: ['ThirdWeb', 'React', 'Solidity', 'Web3.js', 'Node.js'],
    featured: true,
  },
  {
    period: '2024',
    tag: 'Cybersecurity Automation',
    title: 'Full Stack Engineer',
    company: 'Cybersecurity Automation Platform',
    desc: 'Designed and built an entire automation system with a live dashboard for a cybersecurity company. The platform scrapes social media platforms, performs Google dorking for threat intelligence, monitors domain listings, automates proxy rotation and management, and generates comprehensive monthly reports with screenshots.',
    tags: ['Python', 'Selenium', 'React', 'REST APIs', 'Proxy Automation', 'Report Generation'],
    featured: true,
  },
  {
    period: '2023 — 2024',
    tag: 'Full Stack',
    title: 'Full Stack Developer Intern',
    company: 'IDS',
    desc: 'Worked with MVC architecture, developed RESTful APIs, implemented security protocols and unit testing processes. Built production-ready systems with React UI components.',
    tags: ['React', 'REST APIs', 'MVC', 'Unit Testing'],
  },
  {
    period: '2023',
    tag: 'Mobile & QA',
    title: 'React Native Developer & QA',
    company: 'Imperium Code',
    desc: 'Reviewed and audited the MIA app repositories submitting QA reports. Improved the application environment and shipped feature updates using React Native and Laravel.',
    tags: ['React Native', 'Laravel', 'QA Testing'],
  },
  {
    period: '2022 — 2023',
    tag: 'Education',
    title: 'Coding Trainer',
    company: 'Geek Express',
    desc: 'Trained adults and high school students in AI Engineering, Game Development, and Web Development. Courses accredited by STEM.org USA and KHDA Dubai.',
    tags: ['Python', 'JavaScript', 'AI/ML'],
  },
  {
    period: '2022 — 2025',
    tag: 'Education',
    title: 'B.Sc. Computer Science',
    company: 'Rafik Hariri University — Meshref, Lebanon',
    desc: 'Specialized coursework in Mobile Application Development, Data Science, Web Scraping, Professional Business Communication, and Public Speaking.',
    tags: [],
  },
];

export default function Experience() {
  return (
    <section className="section section--dark" id="experience">
      <div className="section-container">
        <div className="section-header">
          <Reveal><span className="section-num">EXPERIENCE</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">Where I've <span className="accent">Built</span></h2>
          </Reveal>
        </div>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={`exp-row hoverable ${exp.featured ? 'exp-row--featured' : ''}`}>
                <div className="exp-row__left">
                  <span className="exp-row__period">{exp.period}</span>
                  <span className="exp-row__tag">{exp.tag}</span>
                </div>
                <div className="exp-row__right">
                  <h3 className="exp-row__title">{exp.title}</h3>
                  <p className="exp-row__company">{exp.company}</p>
                  <p className="exp-row__desc">{exp.desc}</p>
                  {exp.tags.length > 0 && (
                    <div className="exp-row__tags">
                      {exp.tags.map(t => <span key={t} className="exp-tag">{t}</span>)}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
