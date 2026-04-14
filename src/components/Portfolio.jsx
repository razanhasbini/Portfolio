import { useEffect, useRef } from 'react';
import './Portfolio.css';

const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
  </svg>
);

const scrollTo = (e, href) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Portfolio() {
  const cursorRef = useRef(null);
  const navRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mx = 0, my = 0, cx = 0, cy = 0, raf;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const loop = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      if (cursor) cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);

    const onScroll = () => {
      const hero = heroRef.current;
      const nav = navRef.current;
      if (!hero || !nav) return;
      const past = window.scrollY > hero.offsetHeight - 80;
      nav.classList.toggle('pf-nav--scrolled', past);
      nav.classList.toggle('pf-nav--hero', !past);
    };
    window.addEventListener('scroll', onScroll);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('is-in'), i * 80);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.pf-reveal').forEach((el) => io.observe(el));

    return () => {
      document.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <div className="pf">
      <div className="pf-cursor" ref={cursorRef} />

      <nav className="pf-nav pf-nav--hero" ref={navRef}>
        <div className="pf-nav__logo">
          <Star className="pf-nav__star" />
          <span>Razan Hasbini</span>
        </div>
        <div className="pf-nav__links">
          <a href="#about" className="pf-nav__link" onClick={(e) => scrollTo(e, '#about')}>About me</a>
          <a href="#resume" className="pf-nav__link" onClick={(e) => scrollTo(e, '#resume')}>Resume</a>
          <a href="#work" className="pf-nav__link" onClick={(e) => scrollTo(e, '#work')}>Work</a>
          <a href="#contact" className="pf-nav__cta" onClick={(e) => scrollTo(e, '#contact')}>
            <span>Get in touch!</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pf-hero" id="home" ref={heroRef}>
        <Star className="pf-star pf-star--1" />
        <Star className="pf-star pf-star--2" />
        <Star className="pf-star pf-star--3" />
        <Star className="pf-star pf-star--4" />

        <div className="pf-hero__grid">
          <div>
            <div className="pf-hero__photo">
              <img src="/heropic.jpg" alt="Razan Hasbini" />
            </div>
            <p className="pf-hero__bio">
              I love design and anything related to art. I approach problems
              rationally and seek the simplest, most functional solutions.
            </p>
          </div>

          <div className="pf-hero__title-stack">
            <span className="pf-hero__ghost pf-hero__ghost--1">TFOLIO</span>
            <span className="pf-hero__ghost pf-hero__ghost--2">TFC</span>
            <span className="pf-hero__ghost pf-hero__ghost--3">TFOLIO</span>
            <h1 className="pf-hero__title">PORTFOLIO</h1>
          </div>

          <div className="pf-hero__side">
            <a href="#"><span className="pf-hero__side-label">BE:</span>/razanhb</a>
            <a href="#"><span className="pf-hero__side-label">IG:</span>@razan.hb</a>
            <a href="#"><span className="pf-hero__side-label">LI:</span>/razan-hasbini</a>
          </div>
        </div>

        <a href="#about" className="pf-scroll-btn" onClick={(e) => scrollTo(e, '#about')}>
          <span>Scroll</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
        </a>
      </section>

      {/* ABOUT */}
      <section className="pf-about" id="about">
        <div className="pf-about__ghost">RESUME</div>

        <div className="pf-reveal">
          <h2 className="pf-about__title">Hello,<br />I'm Razan !</h2>
          <p className="pf-about__text">
            I love design and anything related to art. I approach problems in
            a rational and pragmatic way and seek the simplest and most
            functional solutions possible. Currently building systems in
            Beirut and pursuing a degree in Computer Science.
          </p>
          <a href="https://linkedin.com/in/razan-hasbini" className="pf-about__search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            linkedin.com/in/razan-hasbini
          </a>
        </div>

        <div className="pf-about__photo-wrap pf-reveal">
          <div className="pf-about__green-card" />
          <div className="pf-about__circle" />
          <div className="pf-about__photo">
            <img src="/heropic.jpg" alt="Portrait" />
          </div>
          <div className="pf-about__pill pf-about__pill--1">15th May 2003</div>
          <div className="pf-about__pill pf-about__pill--2">Lebanese</div>
          <div className="pf-about__contact">
            <h4>Contact</h4>
            Beirut, Lebanon<br />
            hello@razan.dev<br />
            +961 00 000 000
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section className="pf-resume" id="resume">
        <div className="pf-container">
          <div className="pf-resume__grid">
            <div className="pf-resume__ghost">RESUME</div>

            <div className="pf-col">
              <div className="pf-card pf-card--forest pf-reveal">
                <h3 className="pf-card__heading">Education</h3>
                <div className="pf-timeline">
                  <div className="pf-tl__item"><div className="pf-diamond" /><div>
                    <div className="pf-tl__year">2022 — 2026</div>
                    <div className="pf-tl__role">American University of Beirut</div>
                    <div className="pf-tl__sub">BS Computer Science</div>
                  </div></div>
                  <div className="pf-tl__item"><div className="pf-diamond" /><div>
                    <div className="pf-tl__year">2021 — 2022</div>
                    <div className="pf-tl__role">Cybersecurity Bootcamp</div>
                    <div className="pf-tl__sub">Offensive Security Track</div>
                  </div></div>
                  <div className="pf-tl__item"><div className="pf-diamond" /><div>
                    <div className="pf-tl__year">2017 — 2020</div>
                    <div className="pf-tl__role">Eastwood International School</div>
                    <div className="pf-tl__sub">International Baccalaureate</div>
                  </div></div>
                </div>
              </div>

              <div className="pf-card pf-card--gold pf-reveal" id="work">
                <h3 className="pf-card__heading">Experience</h3>
                <div className="pf-timeline">
                  <div className="pf-tl__item"><div className="pf-diamond" /><div>
                    <div className="pf-tl__year">2025</div>
                    <div className="pf-tl__role">Blockchain Engineer Intern</div>
                    <div className="pf-tl__sub">Smart contracts &amp; dApp architecture</div>
                  </div></div>
                  <div className="pf-tl__item"><div className="pf-diamond" /><div>
                    <div className="pf-tl__year">2024</div>
                    <div className="pf-tl__role">Full-Stack Developer</div>
                    <div className="pf-tl__sub">Freelance — React, Node, Postgres</div>
                  </div></div>
                  <div className="pf-tl__item"><div className="pf-diamond" /><div>
                    <div className="pf-tl__year">2023</div>
                    <div className="pf-tl__role">Security Automation Builder</div>
                    <div className="pf-tl__sub">CTF tooling &amp; pipeline hardening</div>
                  </div></div>
                </div>
                <div className="pf-tags">
                  <span className="pf-tag">#Creativity</span>
                  <span className="pf-tag">#Communication</span>
                  <span className="pf-tag">#Detail-oriented</span>
                  <span className="pf-tag">#Adaptability</span>
                </div>
              </div>

              <div className="pf-card pf-card--cream pf-reveal">
                <h3 className="pf-card__heading" style={{ color: 'var(--pf-terracotta)' }}>Activities</h3>
                <div className="pf-timeline">
                  <div className="pf-tl__item"><div className="pf-diamond" /><div>
                    <div className="pf-tl__year">2025</div>
                    <div className="pf-tl__role">NASA Space Apps Challenge</div>
                    <div className="pf-tl__sub">Global winner — team lead</div>
                  </div></div>
                  <div className="pf-tl__item"><div className="pf-diamond" /><div>
                    <div className="pf-tl__year">2024</div>
                    <div className="pf-tl__role">Community Hackathon</div>
                    <div className="pf-tl__sub">Organizer, 200+ participants</div>
                  </div></div>
                </div>
              </div>
            </div>

            <div className="pf-col">
              <div className="pf-card pf-card--black pf-contact pf-reveal" id="contact">
                <h3>Contact</h3>
                <ul>
                  <li>Beirut, Lebanon</li>
                  <li>hello@razan.dev</li>
                  <li>+961 00 000 000</li>
                </ul>
              </div>

              <div className="pf-card pf-card--cream pf-reveal">
                <h3 className="pf-card__heading" style={{ color: 'var(--pf-gold)' }}>Technical skills</h3>
                <div className="pf-skills-grid">
                  <div>
                    <h4>Software Skills</h4>
                    <div className="pf-skill-badges">
                      <div className="pf-skill-badge">Ps</div>
                      <div className="pf-skill-badge">Ai</div>
                      <div className="pf-skill-badge">Id</div>
                      <div className="pf-skill-badge">Xd</div>
                      <div className="pf-skill-badge">Pr</div>
                    </div>
                  </div>
                  <div>
                    <h4>Coding skills</h4>
                    <ul>
                      <li>HTML / CSS</li>
                      <li>JavaScript / TypeScript</li>
                      <li>React / Node</li>
                      <li>Solidity</li>
                      <li>SQL</li>
                    </ul>
                  </div>
                </div>
                <div className="pf-skill-pills">
                  <span className="pf-skill-pill">Packaging</span>
                  <span className="pf-skill-pill">Visual design</span>
                  <span className="pf-skill-pill">UI/UX design</span>
                  <span className="pf-skill-pill">User Research</span>
                </div>
              </div>

              <div className="pf-card pf-card--cream pf-reveal">
                <h3 className="pf-card__heading">Language</h3>
                <div className="pf-lang-grid">
                  <div><strong>English</strong><span>Fluent</span></div>
                  <div><strong>Arabic</strong><span>Native</span></div>
                  <div><strong>French</strong><span>Intermediate</span></div>
                </div>
              </div>

              <div className="pf-card pf-card--cream pf-reveal">
                <h3 className="pf-card__heading">Hobbies &amp; Interests</h3>
                <div className="pf-hobbies">
                  <div className="pf-hobby"><div className="pf-hobby__icon"><Star className="pf-hobby__star" /></div><span>Classical / Jazz</span></div>
                  <div className="pf-hobby"><div className="pf-hobby__icon"><Star className="pf-hobby__star" /></div><span>Sketching</span></div>
                  <div className="pf-hobby"><div className="pf-hobby__icon"><Star className="pf-hobby__star" /></div><span>Open Source</span></div>
                  <div className="pf-hobby"><div className="pf-hobby__icon"><Star className="pf-hobby__star" /></div><span>Reading</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
