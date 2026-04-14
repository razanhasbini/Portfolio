import './Marquee.css';

const words = ['REACT', 'GOLANG', 'KOTLIN', 'BLOCKCHAIN', 'PYTHON', 'CYBERSECURITY', 'NODE.JS', 'WEB3', 'LARAVEL', 'AI'];

export default function Marquee() {
  const track = [...words, ...words];
  return (
    <div className="marquee-section">
      <div className="marquee">
        <div className="marquee-track">
          {track.map((w, i) => (
            <span key={i}>
              <span className="marquee-word hoverable">{w}</span>
              <span className="marquee-sep">—</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
