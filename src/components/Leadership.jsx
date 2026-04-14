import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem } from './Reveal';
import './Leadership.css';

const items = [
  { icon: '🎤', title: 'Public Speaking & Debate Club', role: 'President — Rafik Hariri University', desc: 'Led the planning and execution of debate, public speaking, and advocacy events. Developed strong communication methodologies and fostered a culture of critical thinking.' },
  { icon: '🚀', title: 'NASA Space Apps', role: 'Organizer — 2025', desc: 'Managed and executed a globally affiliated innovation event, uniting developers, designers, and scientists to tackle real-world challenges using NASA\'s open data.', isNasa: true },
  { icon: '🛡️', title: 'Hash Sector', role: 'Organizer — 2025', desc: 'Organized local and national cybersecurity events across the MENA region, supporting student learning and raising awareness about security breaches and digital protection.' },
  { icon: '🧠', title: 'Leaders of Lebanon Workshop', role: 'Participant — Haigazian University, 2022', desc: 'Intensive leadership workshop focused on Emotional Intelligence, Problem Solving, and Communication — sharpening the soft skills that make technical leadership effective.' },
  { icon: '🤖', title: 'NLP Using AWS Workshop', role: 'Participant — Beirut AI, 2023', desc: 'Hands-on workshop exploring Natural Language Processing with AWS cloud tools, bridging AI theory with practical cloud-based deployment.' },
  { icon: '💡', title: 'STEM Education Advocate', role: 'Trainer — Geek Express', desc: 'Trained the next generation in AI Engineering and development, certifying students through STEM.org USA and KHDA Dubai accredited programs.' },
];

const nasaSlides = [
  { image: '/spaceapps1.png', caption: 'Kickoff day — 100+ participants ready to innovate' },
  { image: '/spaceapps2.png', caption: 'Team formations and challenge selection' },
  { image: '/spaceapps3.png', caption: 'Late-night brainstorming and prototyping' },
  { image: '/spaceapps4.png', caption: 'Mentoring teams through technical challenges' },
  { image: '/spaceapps5.png', caption: 'Building solutions with NASA open data' },
  { image: '/spaceapps6.png', caption: 'Final presentations to the judges' },
  { image: '/spaceapps7.png', caption: 'Closing ceremony — celebrating innovation' },
];

function Stars() {
  return (
    <div className="nasa-stars">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="nasa-star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            width: `${1 + Math.random() * 2.5}px`,
            height: `${1 + Math.random() * 2.5}px`,
          }}
        />
      ))}
    </div>
  );
}

function NasaModal({ onClose, cardRect }) {
  const [slide, setSlide] = useState(0);
  const [shipSettled, setShipSettled] = useState(false);
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setSlide(p => (p + 1) % nasaSlides.length);
    }, 4000);
  }, []);

  useEffect(() => { start(); return () => clearInterval(intervalRef.current); }, [start]);

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    // Settle the ship after orbit animation
    const t = setTimeout(() => setShipSettled(true), 2200);
    return () => { document.removeEventListener('keydown', esc); document.body.style.overflow = ''; clearTimeout(t); };
  }, [onClose]);

  const goTo = (i) => { clearInterval(intervalRef.current); setSlide(i); start(); };
  const prev = () => goTo((slide - 1 + nasaSlides.length) % nasaSlides.length);
  const next = () => goTo((slide + 1) % nasaSlides.length);

  return (
    <motion.div
      className="nasa-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      onClick={onClose}
    >
      <Stars />

      {/* Spaceship that orbits with green exhaust then settles */}
      <div className={`nasa-ship-wrap ${shipSettled ? 'nasa-ship--settled' : ''}`}>
        <div className="nasa-ship">
          <span className="nasa-ship-icon">🚀</span>
          <div className="nasa-ship-exhaust">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="nasa-exhaust-particle" style={{ animationDelay: `${i * 0.12}s` }} />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="nasa-popup"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="nasa-popup-close hoverable" onClick={onClose}>✕</button>

        <div className="nasa-popup-header">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            NASA Space Apps
          </motion.h2>
          <motion.span
            className="nasa-popup-role"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Organizer — 2025
          </motion.span>
        </div>

        <div className="nasa-popup-body">
          {/* Description first (bigger) */}
          <motion.div
            className="nasa-popup-info"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <p>
              Managed and executed a globally affiliated innovation event, uniting developers, designers, and scientists to tackle real-world challenges using NASA's open data. Coordinated with international NASA leadership to align the local event with the global mission.
            </p>
            <p>
              Oversaw all logistics — from venue and sponsorship to mentor recruitment and participant onboarding. Led a team of volunteers, mentored competing teams through late-night coding sprints, and ensured a seamless 48-hour hackathon experience.
            </p>
            <p>
              The event brought together 100+ participants across 20+ teams, producing projects that addressed Earth science, climate change, and space exploration challenges. Several teams advanced to the global judging round.
            </p>
            <div className="nasa-popup-stats">
              <div className="nasa-popup-stat"><span>100+</span><small>Participants</small></div>
              <div className="nasa-popup-stat"><span>48h</span><small>Hackathon</small></div>
              <div className="nasa-popup-stat"><span>20+</span><small>Teams</small></div>
              <div className="nasa-popup-stat"><span>Global</span><small>NASA Affiliated</small></div>
            </div>
          </motion.div>

          {/* Photo carousel (smaller) */}
          <motion.div
            className="nasa-popup-carousel"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                className="nasa-popup-slide"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={nasaSlides[slide].image}
                  alt={nasaSlides[slide].caption}
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div className="nasa-popup-placeholder" style={{ display: 'none' }}>
                  <span>🚀</span><p>Photo {slide + 1}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="nasa-popup-nav">
              <button className="nasa-nav-arrow hoverable" onClick={prev}>←</button>
              <div className="nasa-popup-dots">
                {nasaSlides.map((_, i) => (
                  <button key={i} className={`nasa-popup-dot hoverable${i === slide ? ' active' : ''}`} onClick={() => goTo(i)} />
                ))}
              </div>
              <button className="nasa-nav-arrow hoverable" onClick={next}>→</button>
            </div>
            <p className="nasa-popup-caption">{nasaSlides[slide].caption}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Leadership() {
  const [nasaOpen, setNasaOpen] = useState(false);
  const nasaCardRef = useRef(null);

  const openNasa = () => {
    setNasaOpen(true);
  };

  return (
    <section className="section" id="leadership">
      <div className="section-container">
        <div className="section-header">
          <Reveal><span className="section-num">LEADERSHIP & ADVOCACY</span></Reveal>
          <Reveal delay={0.1}><h2 className="section-title">Beyond <span className="accent">Code</span></h2></Reveal>
        </div>
        <StaggerContainer className="lead-grid">
          {items.map((item, i) => (
            <StaggerItem key={i}>
              <div
                ref={item.isNasa ? nasaCardRef : undefined}
                className={`lead-card hoverable ${item.isNasa ? 'lead-card--nasa' : ''}`}
                onClick={item.isNasa ? openNasa : undefined}
                style={item.isNasa ? { cursor: 'pointer' } : undefined}
              >
                <span className="lead-card-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="lead-card-icon">{item.icon}</div>
                <h3 className="lead-card-title">{item.title}</h3>
                <p className="lead-card-role">{item.role}</p>
                {item.isNasa && (
                  <div className="lead-card-thumb">
                    <img src="/spaceapps1.png" alt="NASA Space Apps" />
                  </div>
                )}
                <p className="lead-card-desc">{item.desc}</p>
                {item.isNasa && (
                  <span className="lead-card-explore">
                    Explore Event →
                  </span>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <AnimatePresence>
        {nasaOpen && <NasaModal onClose={() => setNasaOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
