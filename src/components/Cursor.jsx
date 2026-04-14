import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const orbRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const orb = orbRef.current;
    if (!orb) return;

    let mx = 0, my = 0, ox = 0, oy = 0;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const loop = () => {
      ox += (mx - ox) * 0.15;
      oy += (my - oy) * 0.15;
      orb.style.transform = `translate3d(${ox}px, ${oy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    // Use pointer events for hover detection (no MutationObserver needed)
    const onOver = (e) => {
      const t = e.target.closest('a, button, .hoverable');
      orb.classList.toggle('cursor-orb--hover', !!t);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={orbRef} className="cursor-orb" />;
}
