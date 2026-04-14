import { Reveal } from './Reveal';
import CountUp from './CountUp';
import './About.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-container">
        <div className="section-header">
          <Reveal><span className="section-num">ABOUT</span></Reveal>
          <Reveal delay={0.1}><h2 className="section-title">Who I <span className="accent">Am</span></h2></Reveal>
        </div>
        <div className="about-grid">
          <Reveal direction="left" className="about-portrait">
            <div className="about-portrait-inner">
              <span className="about-portrait-text">RH</span>
              <div className="about-portrait-lines" />
            </div>
          </Reveal>
          <div className="about-body">
            <Reveal><p className="about-lead">A full stack developer who doesn't just write code — I architect systems that solve real problems and stay standing.</p></Reveal>
            <Reveal delay={0.1}><p className="about-text">B.Sc. Computer Science from Rafik Hariri University. I've built everything from blockchain-integrated platforms at PlayOps to enterprise cybersecurity automation dashboards that scrape, analyze, and report on threats at scale.</p></Reveal>
            <Reveal delay={0.15}><p className="about-text">Beyond code, I lead. As President of the Public Speaking & Debate Club, a NASA Space Apps organizer, and a cybersecurity community builder — I thrive where technology meets human impact.</p></Reveal>
            <div className="about-stats">
              <Reveal className="stat">
                <div className="stat-row"><CountUp target={10} /></div>
                <span className="stat-label">Projects Shipped</span>
              </Reveal>
              <Reveal delay={0.1} className="stat">
                <div className="stat-row"><CountUp target={8} /></div>
                <span className="stat-label">Languages & Frameworks</span>
              </Reveal>
              <Reveal delay={0.2} className="stat">
                <div className="stat-row"><CountUp target={5} /></div>
                <span className="stat-label">Leadership Roles</span>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
