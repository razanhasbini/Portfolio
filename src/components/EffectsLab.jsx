import { useState } from 'react';
import './EffectsLab.css';

const EFFECTS = [
  {
    key: 'bloom',
    title: 'Cinematic Bloom',
    note: 'Soft blur, spring scale, editorial reveal. Best for polished case studies.',
  },
  {
    key: 'drawer',
    title: 'Magazine Drawer',
    note: 'Slides up like a feature spread. Calm, confident, very portfolio-friendly.',
  },
  {
    key: 'glass',
    title: 'Glass Lens',
    note: 'Frosted panel with color bloom and floating metadata.',
  },
  {
    key: 'split',
    title: 'Split Reveal',
    note: 'Two panels open apart to reveal project content. Dramatic but still usable.',
  },
  {
    key: 'stack',
    title: 'Photo Stack',
    note: 'Images fan in behind the content, good for visual projects.',
  },
  {
    key: 'terminal',
    title: 'Command Deck',
    note: 'A crisp technical modal with scanlines and terminal-inspired panels.',
  },
];

export default function EffectsLab() {
  const [active, setActive] = useState(EFFECTS[0]);
  const [open, setOpen] = useState(true);

  const preview = (effect) => {
    setActive(effect);
    setOpen(false);
    window.setTimeout(() => setOpen(true), 30);
  };

  return (
    <main className="fx">
      <section className="fx-hero">
        <a className="fx-back" href="/">Back to portfolio</a>
        <span className="fx-kicker">// motion playground</span>
        <h1>Choose the project popup energy.</h1>
        <p>
          These are live CSS-driven concepts for the Selected Work modal. Pick the
          mood you like, and we can wire that one into the real project popup.
        </p>
      </section>

      <section className="fx-grid" aria-label="Modal effect options">
        {EFFECTS.map((effect) => (
          <button
            key={effect.key}
            className={`fx-card ${active.key === effect.key ? 'is-active' : ''}`}
            onClick={() => preview(effect)}
          >
            <span>{effect.key}</span>
            <strong>{effect.title}</strong>
            <em>{effect.note}</em>
          </button>
        ))}
      </section>

      <section className="fx-stage">
        <div className="fx-stage__top">
          <span>Live preview</span>
          <button onClick={() => preview(active)}>Replay animation</button>
        </div>

        {open && (
          <div className={`fx-demo fx-demo--${active.key}`}>
            <div className="fx-demo__shade" />
            <article className="fx-demo__modal">
              <div className="fx-demo__media">
                <span />
                <span />
                <span />
              </div>
              <div className="fx-demo__content">
                <span className="fx-kicker">03 / selected work</span>
                <h2>{active.title}</h2>
                <p>
                  A large project detail popup with documentation, photos, and
                  project link tabs. This preview is about motion language.
                </p>
                <div className="fx-tabs">
                  <span>Documentation</span>
                  <span>Photos</span>
                  <span>Project Link</span>
                </div>
              </div>
            </article>
          </div>
        )}
      </section>
    </main>
  );
}
