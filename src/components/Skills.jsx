import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const categories = [
  {
    title: 'Languages & Backend',
    skills: ['Java', 'C++', 'Python', 'C#', 'Golang', 'Kotlin', 'PHP', 'JavaScript', 'SQL', 'Assembly MIPS', 'Verilog HDL'],
  },
  {
    title: 'Frameworks & Tools',
    skills: ['React', 'React Native', 'Laravel', 'Node.js', '.NET', 'REST APIs', 'ThirdWeb', 'Web3.js', 'Selenium', 'MediaPipe', 'OpenAI API', 'PostgreSQL', 'Retrofit'],
  },
  {
    title: 'Domains & Specialties',
    skills: ['Blockchain', 'Cybersecurity', 'Web Scraping', 'AI/ML', 'Proxy Automation', 'NLP', 'Data Science', 'MVC Architecture', 'Unit Testing'],
  },
];

function SkillPill({ skill, delay }) {
  return (
    <motion.span
      className="skill-pill hoverable"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, boxShadow: '0 8px 30px rgba(82,183,136,0.2)' }}
    >
      {skill}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-container">
        <div className="section-header">
          <Reveal><span className="section-num">SKILLS</span></Reveal>
          <Reveal delay={0.1}><h2 className="section-title">Tech <span className="accent">Arsenal</span></h2></Reveal>
        </div>
        <div className="skills-wrapper">
          {categories.map((cat, ci) => (
            <div key={ci} className="skill-category">
              <p className="skill-category-title">{cat.title}</p>
              <div className="skills-orbit">
                {cat.skills.map((s, si) => (
                  <SkillPill key={s} skill={s} delay={si * 0.03} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
