import { useEffect, useState } from 'react';

const strings = [
  '> full_stack_developer',
  '> blockchain_builder',
  '> cybersecurity_automator',
  '> systems_architect',
  '> community_leader',
];

export default function TypedText() {
  const [text, setText] = useState('');

  useEffect(() => {
    let strIdx = 0, charIdx = 0, deleting = false, timeout;
    const type = () => {
      const current = strings[strIdx];
      if (deleting) {
        setText(current.substring(0, charIdx--));
        if (charIdx < 0) {
          deleting = false;
          strIdx = (strIdx + 1) % strings.length;
          timeout = setTimeout(type, 500);
          return;
        }
        timeout = setTimeout(type, 30);
      } else {
        setText(current.substring(0, ++charIdx));
        if (charIdx === current.length) {
          timeout = setTimeout(() => { deleting = true; type(); }, 2000);
          return;
        }
        timeout = setTimeout(type, 60);
      }
    };
    timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="hero-eyebrow">
      <span>{text}</span>
      <span className="blink">|</span>
    </div>
  );
}
