import { useState } from 'react';
import { Reveal, StaggerContainer, StaggerItem } from './Reveal';
import './Contact.css';

const contactInfo = [
  { icon: '📧', label: 'hasrazan810@gmail.com', href: 'mailto:hasrazan810@gmail.com' },
  { icon: '📱', label: '+961 70 464 341', href: 'tel:+96170464341' },
  { icon: '📍', label: 'Beirut, Lebanon', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailTo = `mailto:hasrazan810@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailTo;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="section" id="contact">
      <div className="section-container">
        <div className="section-header">
          <Reveal><span className="section-num">GET IN TOUCH</span></Reveal>
          <Reveal delay={0.1}><h2 className="section-title">Let's <span className="accent">Connect</span></h2></Reveal>
        </div>

        <div className="contact-grid">
          <Reveal direction="left" className="contact-left">
            <div className="terminal-window">
              <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: '#ff5f56' }} />
                <span className="terminal-dot" style={{ background: '#ffbd2e' }} />
                <span className="terminal-dot" style={{ background: '#27c93f' }} />
                <span className="terminal-title">razan@dev:~$</span>
              </div>
              <div className="terminal-body">
                <p className="terminal-line"><span className="terminal-prompt">$</span> cat contact_info.json</p>
                <div className="terminal-output">
                  <p>{'{'}</p>
                  {contactInfo.map((c, i) => (
                    <p key={i} className="terminal-json-line">
                      &nbsp;&nbsp;<span className="json-key">"{c.icon}"</span>: <span className="json-val">"{c.label}"</span>{i < contactInfo.length - 1 ? ',' : ''}
                    </p>
                  ))}
                  <p>{'}'}</p>
                </div>
                <p className="terminal-line"><span className="terminal-prompt">$</span> echo "Open to opportunities!"</p>
                <p className="terminal-result">Open to opportunities!</p>
              </div>
            </div>

            <StaggerContainer className="contact-links" stagger={0.1}>
              {contactInfo.map((c, i) => (
                <StaggerItem key={i}>
                  {c.href ? (
                    <a href={c.href} className="contact-link hoverable">
                      <span className="contact-link-icon">{c.icon}</span>
                      <span>{c.label}</span>
                    </a>
                  ) : (
                    <div className="contact-link">
                      <span className="contact-link-icon">{c.icon}</span>
                      <span>{c.label}</span>
                    </div>
                  )}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Reveal>

          <Reveal direction="right" className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required />
              </div>
              <button type="submit" className="form-btn hoverable">
                {submitted ? '✓ Opening mail client...' : 'Send Message →'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
