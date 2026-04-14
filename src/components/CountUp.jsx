import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function CountUp({ target, suffix = '+' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const numRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Expo ease out
      const eased = 1 - Math.pow(1 - progress, 4);
      const val = Math.round(eased * target);
      if (numRef.current) numRef.current.textContent = val;
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref}>
      <span ref={numRef} className="stat-num">0</span>
      <span className="stat-plus">{suffix}</span>
    </span>
  );
}
