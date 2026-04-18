import { useEffect, useRef, useState } from 'react';
import './Portfolio.css';

/* ─────────── Icons ─────────── */
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
};

/* ─────────── Data ─────────── */
const NAV = [
  { n: '00', id: 'home', label: 'Index' },
  { n: '01', id: 'about', label: 'About' },
  { n: '02', id: 'services', label: 'Services' },
  { n: '03', id: 'work', label: 'Work' },
  { n: '04', id: 'journey', label: 'Journey' },
  { n: '05', id: 'stack', label: 'Stack' },
  { n: '06', id: 'contact', label: 'Contact' },
];

const SERVICES = [
  { n: '01', title: 'Full-Stack Web', body: 'End-to-end product work — React/TS on the front, Node and Postgres on the back. Type-safe, tested, observable.', tags: ['React', 'Node', 'Postgres'] },
  { n: '02', title: 'Blockchain / Web3', body: 'Smart contracts, dApp architecture, on-chain tooling. Solidity, Hardhat, Ethers, and the glue in between.', tags: ['Solidity', 'Hardhat', 'Ethers'] },
  { n: '03', title: 'Security Automation', body: 'CTF tooling, pipeline hardening, and defensive automation for small teams shipping fast.', tags: ['Python', 'Docker', 'Linux'] },
  { n: '04', title: 'Systems & UX', body: 'Design systems, interface polish, and the invisible plumbing that makes software feel considered.', tags: ['Figma', 'Design', 'UX'] },
];

const WORK = [
  { n: '01', title: 'Space Apps Challenge', sub: 'NASA Global Winner — team lead', year: '2025', tags: ['React', 'Node', 'D3'], img: '/spaceapps1.png' },
  { n: '02', title: 'Blockchain Platform', sub: 'Smart contracts & dApp architecture', year: '2025', tags: ['Solidity', 'Ethers', 'Next'], img: '/spaceapps2.png' },
  { n: '03', title: 'Security Automation', sub: 'CTF tooling & pipeline hardening', year: '2024', tags: ['Python', 'Docker'], img: '/spaceapps3.png' },
  { n: '04', title: 'Community Hackathon', sub: 'Organizer — 200+ participants', year: '2024', tags: ['Lead', 'Ops'], img: '/spaceapps4.png' },
  { n: '05', title: 'Data Pipeline', sub: 'ETL for regional analytics', year: '2024', tags: ['Node', 'Postgres'], img: '/spaceapps5.png' },
];

const JOURNEY = [
  { kind: 'edu',  year: '2022 — 2026', role: 'BS Computer Science', sub: 'American University of Beirut' },
  { kind: 'work', year: '2025',         role: 'Blockchain Engineer', sub: 'Smart contracts & dApp architecture' },
  { kind: 'act',  year: '2025',         role: 'NASA Space Apps',     sub: 'Global winner — team lead' },
  { kind: 'work', year: '2024',         role: 'Full-Stack Developer', sub: 'Freelance — React, Node, Postgres' },
  { kind: 'act',  year: '2024',         role: 'Community Hackathon', sub: 'Organizer · 200+ participants' },
  { kind: 'work', year: '2023',         role: 'Security Automation',  sub: 'CTF tooling & pipeline hardening' },
  { kind: 'edu',  year: '2021 — 2022', role: 'Cybersecurity Bootcamp', sub: 'Offensive Security Track' },
  { kind: 'edu',  year: '2017 — 2020', role: 'International Baccalaureate', sub: 'Eastwood International School' },
];

const STACK = {
  frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Framer Motion', 'Vite', 'HTML/CSS'],
  backend:  ['Node.js', 'Python', 'Postgres', 'Prisma', 'REST', 'GraphQL', 'Redis'],
  web3:     ['Solidity', 'Hardhat', 'Ethers.js', 'Viem', 'OpenZeppelin', 'EVM'],
  devops:   ['Docker', 'Linux', 'AWS', 'GitHub Actions', 'Nginx', 'Bash'],
};
const STACK_TABS = [
  { key: 'frontend', label: 'Frontend', n: '01' },
  { key: 'backend',  label: 'Backend',  n: '02' },
  { key: 'web3',     label: 'Web3',     n: '03' },
  { key: 'devops',   label: 'DevOps',   n: '04' },
];

const MARQUEE = [
  'FULL-STACK', 'BLOCKCHAIN', 'SECURITY', 'SYSTEMS', 'BEIRUT · LB',
  'AVAILABLE Q2 2026', 'OPEN TO WORK', 'REACT · NODE · SOLIDITY',
];

const scrollTo = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

/* ─────────── Count up ─────────── */
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

/* ─────────── Work item (case study row) ─────────── */
function WorkItem({ item }) {
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
  const onLeave = () => { if (imgRef.current) imgRef.current.style.setProperty('--show', '0'); };
  return (
    <div className="pf-work__row pf-reveal" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
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

/* ─────────── Main ─────────── */
export default function Portfolio() {
  const cursorRef = useRef(null);
  const [activeTab, setActiveTab] = useState('frontend');
  const [time, setTime] = useState('');

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

    // Clock
    const tickClock = () => {
      try {
        const t = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Beirut' }).format(new Date());
        setTime(`${t} BEY`);
      } catch { setTime(''); }
    };
    tickClock();
    const tid = setInterval(tickClock, 30000);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      io.disconnect(); spy.disconnect();
      clearInterval(tid);
    };
  }, []);

  return (
    <div className="pf">
      <div className="pf-cursor" ref={cursorRef} />

      {/* ─ Top marquee strip ─ */}
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

      {/* ─ Left sidebar rail ─ */}
      <aside className="pf-rail">
        <a href="#home" className="pf-rail__mark" onClick={(e) => scrollTo(e, 'home')}>
          <I.Bracket className="pf-rail__mark-ico" />
          <span>R.H</span>
        </a>
        <nav className="pf-rail__nav">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} data-id={n.id} className="pf-rail__link" onClick={(e) => scrollTo(e, n.id)}>
              <span className="pf-rail__n">{n.n}</span>
              <span className="pf-rail__label">{n.label}</span>
              <span className="pf-rail__dash" />
            </a>
          ))}
        </nav>
        <div className="pf-rail__meta">
          <span className="pf-rail__dot" />
          <span>{time || 'BEY'}</span>
        </div>
      </aside>

      {/* Top right CTA */}
      <div className="pf-top">
        <a href="#contact" className="pf-top__cta" onClick={(e) => scrollTo(e, 'contact')}>
          <span className="pf-top__dot" />
          Available · Q2 2026
        </a>
      </div>

      <main className="pf-main">

        {/* ═══ 00 · HERO ═══ */}
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
                <span className="pf-hero__pill pf-hero__pill--terra">Blockchain</span>
                <span className="pf-hero__pill pf-hero__pill--gold">Security</span>
              </div>

              <p className="pf-hero__lede">
                Self-taught engineer shipping web, blockchain, and security
                tooling end-to-end. Based in Beirut, building systems for the
                region and the internet at large.
              </p>

              <div className="pf-hero__actions">
                <a href="#work" className="pf-btn pf-btn--primary" onClick={(e) => scrollTo(e, 'work')}>
                  <span>See selected work</span><I.Arrow className="pf-btn__ico" />
                </a>
                <a href="#contact" className="pf-btn pf-btn--ghost" onClick={(e) => scrollTo(e, 'contact')}>
                  <I.Mail className="pf-btn__ico" /><span>hello@razan.dev</span>
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
              <div className="pf-hero__portrait">
                <img src="/heropic.jpg" alt="Razan Hasbini" />
                <div className="pf-hero__portrait-grid" />
                <span className="pf-hero__tag pf-hero__tag--top">
                  <I.Dot className="pf-hero__tag-dot" />
                  <span>computer science</span>
                </span>
                <span className="pf-hero__tag pf-hero__tag--bot">
                  <span>since '21</span>
                </span>
                <svg className="pf-hero__orbit" viewBox="0 0 220 220" aria-hidden>
                  <circle cx="110" cy="110" r="105" fill="none" stroke="currentColor" strokeDasharray="2 6" />
                </svg>
              </div>

              <div className="pf-hero__card">
                <span className="pf-hero__card-label">// currently</span>
                <p>Building a blockchain dev tooling platform and a defensive automation SDK for regional CTFs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 01 · ABOUT (Bento) ═══ */}
        <section className="pf-about" id="about">
          <header className="pf-section__head pf-reveal">
            <span className="pf-section__num">01</span>
            <h2 className="pf-section__title">About</h2>
            <span className="pf-section__rule" />
            <span className="pf-section__kicker">a short résumé, in tiles</span>
          </header>

          <div className="pf-bento">
            <div className="pf-bento__card pf-bento__card--hero pf-reveal">
              <span className="pf-bento__kicker">// hello</span>
              <p className="pf-bento__quote">
                I&apos;m Razan — a self-taught engineer working across the stack.
                I like <em>pragmatic systems</em>, well-instrumented code, and
                shipping things people actually use.
              </p>
              <a href="#contact" className="pf-bento__link" onClick={(e) => scrollTo(e, 'contact')}>
                Let&apos;s work together <I.Arrow className="pf-bento__link-ico" />
              </a>
            </div>

            <div className="pf-bento__card pf-bento__card--photo pf-reveal">
              <img src="/heropic.jpg" alt="Razan Hasbini" />
              <span className="pf-bento__photo-tag">
                <I.Star className="pf-bento__photo-star" /> 15 / 05 / 2003
              </span>
            </div>

            <div className="pf-bento__card pf-bento__card--loc pf-reveal">
              <span className="pf-bento__kicker">location</span>
              <h3>Beirut, LB</h3>
              <div className="pf-map">
                <div className="pf-map__grid" />
                <div className="pf-map__pin" />
                <div className="pf-map__ring pf-map__ring--1" />
                <div className="pf-map__ring pf-map__ring--2" />
                <div className="pf-map__ring pf-map__ring--3" />
              </div>
              <span className="pf-bento__meta">UTC +3 · Remote-friendly</span>
            </div>

            <div className="pf-bento__card pf-bento__card--nasa pf-reveal">
              <I.Star className="pf-bento__nasa-star" />
              <span className="pf-bento__kicker">award</span>
              <h3>NASA Space Apps<br /><em>Global Winner</em></h3>
              <span className="pf-bento__meta">2025 · Team lead</span>
            </div>

            <div className="pf-bento__card pf-bento__card--langs pf-reveal">
              <span className="pf-bento__kicker">languages</span>
              {[
                ['Arabic', 'Native', 100],
                ['English', 'Fluent', 95],
                ['French', 'Intermediate', 60],
              ].map(([l, lvl, p]) => (
                <div className="pf-lang" key={l}>
                  <div className="pf-lang__row"><strong>{l}</strong><span>{lvl}</span></div>
                  <div className="pf-lang__bar"><div className="pf-lang__fill" style={{ '--p': `${p}%` }} /></div>
                </div>
              ))}
            </div>

            <div className="pf-bento__card pf-bento__card--now pf-reveal">
              <span className="pf-bento__kicker">// now playing</span>
              <ul className="pf-now">
                <li><span>Building</span><em>dev tooling SDK</em></li>
                <li><span>Reading</span><em>Designing Data-Intensive Apps</em></li>
                <li><span>Listening</span><em>Khruangbin · Floating Points</em></li>
                <li><span>Coffee</span><em>V60 · Light roast</em></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ 02 · SERVICES ═══ */}
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
        </section>

        {/* ═══ 03 · WORK ═══ */}
        <section className="pf-work" id="work">
          <header className="pf-section__head pf-reveal">
            <span className="pf-section__num">03</span>
            <h2 className="pf-section__title">Selected Work</h2>
            <span className="pf-section__rule" />
            <span className="pf-section__kicker">a handful of recent things</span>
          </header>

          <div className="pf-work__list">
            {WORK.map((w) => <WorkItem key={w.n} item={w} />)}
          </div>
        </section>

        {/* ═══ 04 · JOURNEY (unified timeline) ═══ */}
        <section className="pf-journey" id="journey">
          <header className="pf-section__head pf-reveal">
            <span className="pf-section__num pf-section__num--light">04</span>
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
                  <p className="pf-tl__sub">{e.sub}</p>
                </div>
                <div className="pf-tl__node"><span /></div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 05 · STACK (tabbed) ═══ */}
        <section className="pf-stack" id="stack">
          <header className="pf-section__head pf-reveal">
            <span className="pf-section__num">05</span>
            <h2 className="pf-section__title">Tech Stack</h2>
            <span className="pf-section__rule" />
            <span className="pf-section__kicker">what I reach for</span>
          </header>

          <div className="pf-stack__wrap pf-reveal">
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
          </div>
        </section>

        {/* ═══ 06 · CONTACT ═══ */}
        <section className="pf-contact" id="contact">
          <header className="pf-section__head pf-reveal">
            <span className="pf-section__num pf-section__num--light">06</span>
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
              <a href="mailto:hello@razan.dev" className="pf-btn pf-btn--primary pf-btn--lg">
                <I.Mail className="pf-btn__ico" /> hello@razan.dev
              </a>
              <div className="pf-contact__socials">
                <a href="https://github.com" aria-label="GitHub" className="pf-contact__sc"><I.Gh /></a>
                <a href="https://linkedin.com/in/razan-hasbini" aria-label="LinkedIn" className="pf-contact__sc"><I.Li /></a>
                <a href="mailto:hello@razan.dev" aria-label="Mail" className="pf-contact__sc"><I.Mail /></a>
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

        {/* ─ Footer ─ */}
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
    </div>
  );
}
