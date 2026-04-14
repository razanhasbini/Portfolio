import { Reveal, StaggerContainer, StaggerItem } from './Reveal';
import './Certifications.css';

const certs = [
  { icon: '🔒', name: 'Google Cybersecurity Certificate', issuer: 'Coursera', year: '2023 — 2024' },
  { icon: '🌐', name: 'CCNA1v7 Certificate', issuer: 'Cisco', year: '2024' },
  { icon: '💻', name: 'Microsoft Expert Certification', issuer: 'Microsoft', year: '2024' },
  { icon: '🤖', name: 'NLP Using AWS Workshop', issuer: 'Beirut AI', year: '2023' },
];

export default function Certifications() {
  return (
    <section className="section section--dark">
      <div className="section-container">
        <div className="section-header">
          <Reveal><span className="section-num">CERTIFICATIONS</span></Reveal>
          <Reveal delay={0.1}><h2 className="section-title">Credentials <span className="accent">&</span> Recognition</h2></Reveal>
        </div>
        <StaggerContainer className="certs-grid">
          {certs.map((c, i) => (
            <StaggerItem key={i}>
              <div className="cert-card hoverable">
                <div className="cert-icon">{c.icon}</div>
                <h3 className="cert-name">{c.name}</h3>
                <p className="cert-issuer">{c.issuer}</p>
                <p className="cert-year">{c.year}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
