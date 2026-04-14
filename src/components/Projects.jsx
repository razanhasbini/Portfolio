import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem } from './Reveal';
import './Projects.css';

const projects = [
  {
    featured: true,
    title: 'Cybersecurity Automation Dashboard',
    desc: 'End-to-end automation platform for a cybersecurity company. Features social media scraping, Google dorking, domain monitoring, automated proxy management, and monthly report generation with screenshots — all unified in a single real-time dashboard.',
    tags: ['Python', 'React', 'Selenium', 'Google Dorks', 'Proxy Rotation'],
  },
  {
    title: 'Wazzafak AI',
    desc: 'AI-powered social media and real-time job interview training app. Features CV analysis, AI interview simulation with performance scoring based on linguistic analysis and stress detection via MediaPipe.',
    tags: ['Kotlin', 'Golang', 'OpenAI', 'Pgvector', 'MediaPipe'],
  },
  {
    title: 'Always_SafeBot',
    desc: 'Privacy-focused Telegram bot for secure location sharing while driving. Built with real-time trusted contact verification and user consent mechanisms.',
    tags: ['Golang', 'PostgreSQL', 'Webhooks', 'Telegram API'],
  },
  {
    title: 'PlayOps Web3 Platform',
    desc: 'Blockchain-integrated gaming platform built with ThirdWeb. Developed wallet authentication, smart contract interactions, and on-chain transaction flows.',
    tags: ['ThirdWeb', 'React', 'Solidity', 'Web3'],
  },
  {
    title: 'Laeta App',
    desc: 'Full-stack application for selling daily unsold food items in mystery bags. Features separate user and restaurant account systems with real-time inventory.',
    tags: ['Kotlin', 'Full Stack', 'REST API'],
  },
  {
    title: 'Movie Trends Predictor',
    desc: 'Scraped and cleaned movie rating data to predict trends in genres and actors. Visualized insights through statistical graphs and predictive analytics.',
    tags: ['Python', 'Web Scraping', 'Data Science', 'Visualization'],
  },
];

export default function Projects() {
  return (
    <section className="section section--dark" id="projects">
      <div className="section-container">
        <div className="section-header">
          <Reveal><span className="section-num">PROJECTS</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">Selected <span className="accent">Builds</span></h2>
          </Reveal>
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 0.06} className={p.featured ? 'proj-featured' : ''}>
              <motion.div
                className={`proj-card hoverable ${p.featured ? 'proj-card--featured' : ''}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="proj-card__accent" />
                <div className="proj-card__content">
                  <div className="proj-card__header">
                    <span className="proj-card__idx">{String(i + 1).padStart(2, '0')}</span>
                    {p.featured && <span className="proj-card__badge">Featured Project</span>}
                  </div>
                  <h3 className="proj-card__title">{p.title}</h3>
                  <p className="proj-card__desc">{p.desc}</p>
                  <div className="proj-card__tags">
                    {p.tags.map(t => <span key={t} className="proj-card__tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="proj-more">
            <p className="proj-more__text">
              + Additional builds: .NET C# applications, DAFSA game, budget planner, coin changing algorithm, bank system, smart garage IoT system, and multiple data science projects.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
