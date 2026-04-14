import './Footer.css';

const socials = [
  { label: 'GitHub', href: 'https://github.com/razanhasbini' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/razanhasbini' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-name">Razan Hasbini</span>
          <span className="footer-copy">© {new Date().getFullYear()} — All rights reserved</span>
        </div>
        <div className="footer-right">
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-link hoverable">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
