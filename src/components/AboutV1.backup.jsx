/**
 * ABOUT SECTION — VERSION 1 BACKUP
 * Original pf-aboutLab design with bento-style cards, tab modes, and mini panels.
 * To restore: copy the JSX below back into Portfolio.jsx replacing the pf-about section,
 * and the CSS is still present in Portfolio.css under .pf-aboutLab rules.
 */

/*
        <section className="pf-about" id="about">
          <header className="pf-section__head pf-reveal">
            <span className="pf-section__num">01</span>
            <h2 className="pf-section__title">About</h2>
            <span className="pf-section__rule" />
            <span className="pf-section__kicker">a living profile, not a static card</span>
          </header>

          <div className="pf-aboutLab">
            <div className="pf-aboutLab__story pf-reveal">
              <span className="pf-aboutLab__eyebrow">// profile signal</span>
              <h3>
                I build at the intersection of
                <span> code, security, and product taste.</span>
              </h3>
              <p>
                I'm Razan, a self-taught computer science student who likes
                taking projects from first sketch to working system. I care about
                interfaces with personality, backend logic that holds up, and tools
                that make teams move faster.
              </p>

              <div className="pf-aboutLab__stats" aria-label="Profile highlights">
                <span><strong>03</strong> years building</span>
                <span><strong>15+</strong> shipped projects</span>
                <span><strong>BEY</strong> remote-friendly</span>
              </div>

              <div className="pf-aboutLab__modes" role="tablist" aria-label="About Razan modes">
                {Object.entries(ABOUT_MODES).map(([key, mode]) => (
                  <button
                    key={key}
                    className={`pf-aboutLab__mode ${activeAbout === key ? 'is-on' : ''}`}
                    onClick={() => setActiveAbout(key)}
                    role="tab"
                    aria-selected={activeAbout === key}
                  >
                    <span>{mode.n}</span>
                    {mode.label}
                  </button>
                ))}
              </div>

              <div className="pf-aboutLab__panel" key={activeAbout}>
                <span className="pf-aboutLab__panel-k">// {ABOUT_MODES[activeAbout].label}</span>
                <h4>{ABOUT_MODES[activeAbout].title}</h4>
                <p>{ABOUT_MODES[activeAbout].body}</p>
                <div className="pf-aboutLab__tags">
                  {ABOUT_MODES[activeAbout].tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pf-aboutLab__mini pf-aboutLab__mini--langs pf-reveal">
              <span className="pf-aboutLab__eyebrow">languages</span>
              {[
                ['Arabic', 'Native', 100],
                ['English', 'Fluent', 100],
                ['Spanish', 'Intermediate', 60],
              ].map(([l, lvl, p]) => (
                <div className="pf-lang" key={l}>
                  <div className="pf-lang__row"><strong>{l}</strong><span>{lvl}</span></div>
                  <div className="pf-lang__bar"><div className="pf-lang__fill" style={{ '--p': `${p}%` }} /></div>
                </div>
              ))}
            </div>

            <div className="pf-aboutLab__mini pf-aboutLab__mini--now pf-reveal">
              <span className="pf-aboutLab__eyebrow">// current frequency</span>
              <ul className="pf-now">
                <li><span>Building</span><em>dev tooling SDK</em></li>
                <li><span>Reading</span><em>Designing Data-Intensive Apps</em></li>
                <li><span>Listening</span><em>Khruangbin / Floating Points</em></li>
                <li><span>Coffee</span><em>V60 / Light roast</em></li>
              </ul>
            </div>
          </div>
        </section>
*/
