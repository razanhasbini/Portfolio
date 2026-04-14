import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import './ComfortZone.css';

const insideItems = [
  { icon: '🎓', label: 'University Student', desc: 'B.Sc. Computer Science at Rafik Hariri University, 2022–2025. Coursework in data science, web scraping, mobile dev.' },
  { icon: '📚', label: 'Classroom Learning', desc: 'Professional Business Communication, Public Speaking, traditional CS curriculum.' },
  { icon: '🧑‍💻', label: 'Academic Projects', desc: 'Data science movie predictor, DAFSA game, budget planner, coin changing algorithm.' },
];

const outsideItems = [
  { icon: '🔗', label: 'Blockchain at PlayOps', desc: 'Smart contracts, wallet auth, ThirdWeb SDK for a Web3 gaming platform — built the full stack.' },
  { icon: '🛡️', label: 'Cybersecurity Automation', desc: 'Social media scraping, Google dorking, proxy automation, monthly report generation with screenshots.' },
  { icon: '🚀', label: 'NASA Space Apps Organizer', desc: 'Managed a globally affiliated innovation event uniting developers, designers, and scientists.' },
  { icon: '🤖', label: 'AI Interview Trainer', desc: 'Wazzafak AI — CV analysis, AI interview simulation with stress detection via MediaPipe.' },
  { icon: '🎤', label: 'Debate Club President', desc: 'Led advocacy events, public speaking workshops, and fostered critical thinking culture.' },
  { icon: '🏴‍☠️', label: 'Hash Sector Organizer', desc: 'Cybersecurity events across MENA — CTFs, awareness, security community building.' },
];

export default function ComfortZone() {
  const [activeInside, setActiveInside] = useState(null);
  const [activeOutside, setActiveOutside] = useState(null);

  return (
    <section className="section cz-section" id="comfort-zone">
      <div className="section-container">
        <div className="section-header">
          <Reveal><span className="section-num">MY JOURNEY</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">Inside & Outside  <span className="accent">the Comfort Zone</span></h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="cz-intro">From textbooks to blockchain — here's how I stepped beyond the classroom.</p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="cz-layout">
            {/* Outside ring */}
            <div className="cz-outside">
              <span className="cz-label cz-label--outside">Outside Comfort Zone</span>
              <div className="cz-outside-items">
                {outsideItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`cz-item cz-item--outside hoverable ${activeOutside === i ? 'cz-item--active' : ''}`}
                    onClick={() => setActiveOutside(activeOutside === i ? null : i)}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    style={{ '--item-idx': i }}
                  >
                    <span className="cz-item-icon">{item.icon}</span>
                    <span className="cz-item-label">{item.label}</span>
                    <AnimatePresence>
                      {activeOutside === i && (
                        <motion.p
                          className="cz-item-desc"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Inside circle */}
            <div className="cz-inside">
              <div className="cz-circle">
                <span className="cz-label cz-label--inside">Comfort Zone</span>
                <div className="cz-inside-items">
                  {insideItems.map((item, i) => (
                    <motion.div
                      key={i}
                      className={`cz-item cz-item--inside hoverable ${activeInside === i ? 'cz-item--active' : ''}`}
                      onClick={() => setActiveInside(activeInside === i ? null : i)}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="cz-item-icon">{item.icon}</span>
                      <span className="cz-item-label">{item.label}</span>
                      <AnimatePresence>
                        {activeInside === i && (
                          <motion.p
                            className="cz-item-desc"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

