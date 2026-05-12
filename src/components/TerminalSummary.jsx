// File intentionally left blank after revert
import { useState, useRef, useEffect } from 'react';
import './Portfolio.css';

const COMMANDS = [
  { cmd: '$ whoami', answer: 'Razan Hasbini' },
  { cmd: '$ location', answer: 'Beirut, Lebanon' },
  { cmd: '$ title', answer: 'Full-stack + AI builder' },
];

export default function TerminalSummary() {
  const [lines, setLines] = useState([
    { type: 'cmd', text: '$ sudo summary', comment: '// press Enter' },
  ]);
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const [typed, setTyped] = useState('');
  const answerRef = useRef(null);

  // Typewriter effect for answer
  useEffect(() => {
    if (!typing) return;
    const answer = COMMANDS[step - 1]?.answer || '';
    let i = 0;
    setTyped('');
    const interval = setInterval(() => {
      setTyped(answer.slice(0, i + 1));
      i++;
      if (i >= answer.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 28);
    return () => clearInterval(interval);
  }, [typing, step]);

  // Simulate Enter key
  const handleEnter = () => {
    if (typing) return;
    if (step < COMMANDS.length) {
      const { cmd } = COMMANDS[step];
      setLines((prev) => [
        ...prev,
        { type: 'cmd', text: cmd },
        { type: 'answer', text: '' },
      ]);
      setStep((s) => s + 1);
      setTyping(true);
    }
  };

  // When typing, update the last answer line
  useEffect(() => {
    if (!typing && step > 0 && typed) {
      setLines((prev) => {
        const newLines = [...prev];
        newLines[newLines.length - 1] = { type: 'answer', text: typed };
        return newLines;
      });
    }
  }, [typed, typing, step]);

  // Focus terminal on mount
  const termRef = useRef();
  useEffect(() => {
    if (termRef.current) termRef.current.focus();
  }, []);

  return (
    <div className="pf-abt__terminal" aria-label="About terminal identity summary" tabIndex={0} ref={termRef} onKeyDown={e => {
      if (e.key === 'Enter') handleEnter();
    }}>
      <div className="pf-abt__terminal-bar">
        <span />
        <span />
        <span />
        <strong>about.exe</strong>
      </div>
      <div className="pf-abt__terminal-body">
        {lines.map((line, i) => (
          <div key={i} className={line.type === 'cmd' ? 'pf-abt__terminal-cmd' : 'pf-abt__terminal-answer'}>
            {line.type === 'cmd' ? (
              <>
                <span>{line.text}</span>
                {line.comment && <span className="pf-abt__terminal-comment">{line.comment}</span>}
              </>
            ) : (
              <strong ref={i === lines.length - 1 && typing ? answerRef : undefined}>
                {i === lines.length - 1 && typing ? typed : line.text}
              </strong>
            )}
          </div>
        ))}
      </div>
      {/* Visual cue for user: */}
      <div className="pf-abt__terminal-hint">(Click here, then press Enter)</div>
    </div>
  );
}
