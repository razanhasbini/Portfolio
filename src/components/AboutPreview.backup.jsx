import './AboutPreview.css';

const IDENTITY = [
  ['Build', 'Full-stack apps with backend logic and polished interfaces.'],
  ['Automate', 'AI workflows, integrations, and systems that save time.'],
  ['Explain', 'Clear demos, documentation, and technical storytelling.'],
];

const CURRENT = [
  ['Degree', 'BS Computer Science @ RHU'],
  ['Focus', 'Full-stack + AI projects'],
  ['Mode', 'Open to internships & junior roles'],
  ['Base', 'Lebanon / remote-friendly'],
];

const LANGUAGES = [
  ['Arabic', 'Native'],
  ['English', 'Fluent'],
  ['Spanish', 'Intermediate'],
];

export default function AboutPreview() {
  return (
    <main className="ap-page">
      <a className="ap-back" href="/">Back to portfolio</a>
      <div className="ap-wave" aria-hidden>
        <span />
        <span />
        <span />
        <span />
      </div>

      <section className="ap-about" aria-labelledby="about-preview-title">
        <header className="ap-head">
          <span>01 / about concept</span>
          <h1 id="about-preview-title">About</h1>
        </header>

        <div className="ap-board">
          <div className="ap-intro">
            <span>Razan Hasbini</span>
            <h2>
              Personal intro.
              <em>Technical identity.</em>
            </h2>
            <p>
              Computer science student and full-stack / AI builder turning ideas into usable products.
            </p>
          </div>

          <div className="ap-current" aria-label="Currently">
            {CURRENT.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="ap-identity" aria-label="Technical identity">
            {IDENTITY.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <div className="ap-languages" aria-label="Languages">
            <span>Languages</span>
            <div>
              {LANGUAGES.map(([language, level]) => (
                <strong key={language}>{language}<small>{level}</small></strong>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
