import './AboutPreview.css';

const COMMANDS = [
  ['whoami', 'Razan Hasbini'],
  ['role', 'Full-stack + AI builder'],
  ['base', 'Lebanon / remote-friendly'],
];

const IDENTITY = [
  ['BUILD', 'Products', 'React · Node · APIs'],
  ['AUTOMATE', 'Systems', 'AI · workflows · tooling'],
  ['PRESENT', 'Rooms', 'Demos · docs · leadership'],
];

const LANGUAGES = [
  ['AR', 'Arabic', 'Native'],
  ['EN', 'English', 'Fluent'],
  ['ES', 'Spanish', 'Intermediate'],
];

export default function AboutPreview() {
  return (
    <main className="ap-page">
      <a className="ap-back" href="/">Back to portfolio</a>

      <section className="ap-dossier" aria-labelledby="about-preview-title">
        <div className="ap-bg" aria-hidden>
          <span className="ap-blob" />
          <span className="ap-scan ap-scan--one" />
          <span className="ap-scan ap-scan--two" />
        </div>

        <header className="ap-header">
          <span>01 / identity dossier</span>
          <span>personal intro + technical signal</span>
        </header>

        <div className="ap-layout">
          <div className="ap-title">
            <span className="ap-eyebrow">Razan Hasbini</span>
            <h1 id="about-preview-title">
              Human intro.
              <em>Technical signal.</em>
            </h1>
            <p>
              Placeholder copy for the final personal intro. The design should already feel sharp before the words are final.
            </p>
          </div>

          <aside className="ap-terminal" aria-label="Profile terminal">
            <div className="ap-terminal__bar">
              <span />
              <span />
              <span />
              <strong>about.exe</strong>
            </div>
            <div className="ap-terminal__body">
              {COMMANDS.map(([cmd, value]) => (
                <p key={cmd}>
                  <span>$ {cmd}</span>
                  <strong>{value}</strong>
                </p>
              ))}
            </div>
          </aside>
        </div>

        <div className="ap-system" aria-label="Technical identity">
          <div className="ap-circuit" aria-hidden>
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          {IDENTITY.map(([verb, title, detail], index) => (
            <article className="ap-node" key={verb}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{verb}</h2>
              <strong>{title}</strong>
              <p>{detail}</p>
            </article>
          ))}
        </div>

        <div className="ap-languageRail" aria-label="Languages">
          <span>languages</span>
          {LANGUAGES.map(([code, language, level]) => (
            <div className="ap-lang" key={code}>
              <strong>{code}</strong>
              <p>{language}</p>
              <small>{level}</small>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
