import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import TypedText from './TypedText';
import './Hero.css';

export default function Hero() {
  const photoRef = useRef(null);
  const neonCanvasRef = useRef(null);
  const maskCanvasRef = useRef(null);
  const imageRef = useRef(null);
  const lastCellRef = useRef('');
  const [photoActive, setPhotoActive] = useState(false);

  const renderNeon = () => {
    const canvas = neonCanvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    const image = imageRef.current;
    if (!canvas || !maskCanvas || !image) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    ctx.save();
    ctx.filter = 'grayscale(1) contrast(2.45) brightness(1.48) sepia(1) hue-rotate(58deg) saturate(5.2)';
    ctx.drawImage(image, 0, 0, width, height);
    ctx.restore();

    ctx.globalCompositeOperation = 'destination-in';
    ctx.drawImage(maskCanvas, 0, 0, width, height);
    ctx.globalCompositeOperation = 'source-over';
  };

  const syncCanvasSize = () => {
    const stage = photoRef.current;
    const canvas = neonCanvasRef.current;
    if (!stage || !canvas) return;

    const rect = stage.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const dpr = Math.max(window.devicePixelRatio || 1, 1);
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const mask = document.createElement('canvas');
      mask.width = width;
      mask.height = height;
      maskCanvasRef.current = mask;
      lastCellRef.current = '';
    }

    renderNeon();
  };

  const toggleBrushAt = (clientX, clientY) => {
    const stage = photoRef.current;
    const maskCanvas = maskCanvasRef.current;
    if (!stage || !maskCanvas) return;

    const rect = stage.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const xNorm = (clientX - rect.left) / rect.width;
    const yNorm = (clientY - rect.top) / rect.height;
    if (xNorm < 0 || xNorm > 1 || yNorm < 0 || yNorm > 1) return;

    const x = xNorm * maskCanvas.width;
    const y = yNorm * maskCanvas.height;

    const cellSize = Math.max(16, Math.round(maskCanvas.width / 34));
    const cellX = Math.floor(x / cellSize);
    const cellY = Math.floor(y / cellSize);
    const cellKey = `${cellX},${cellY}`;

    if (lastCellRef.current === cellKey) return;
    lastCellRef.current = cellKey;

    const maskCtx = maskCanvas.getContext('2d');
    if (!maskCtx) return;

    const sample = maskCtx.getImageData(Math.round(x), Math.round(y), 1, 1).data[3];
    const isPainted = sample > 10;
    const radius = Math.max(30, Math.round(maskCanvas.width * 0.065));

    maskCtx.save();
    maskCtx.beginPath();
    maskCtx.arc(x, y, radius, 0, Math.PI * 2);

    if (isPainted) {
      maskCtx.globalCompositeOperation = 'destination-out';
      maskCtx.fillStyle = 'rgba(0,0,0,1)';
    } else {
      maskCtx.globalCompositeOperation = 'source-over';
      maskCtx.fillStyle = 'rgba(255,255,255,1)';
    }

    maskCtx.fill();
    maskCtx.restore();

    renderNeon();
  };

  useEffect(() => {
    const image = new Image();
    image.src = '/heropic-no-bg.png';

    const onLoad = () => {
      imageRef.current = image;
      syncCanvasSize();
    };

    if (image.complete) {
      onLoad();
    } else {
      image.onload = onLoad;
    }

    const stage = photoRef.current;
    let observer;

    if (stage && typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => syncCanvasSize());
      observer.observe(stage);
    }

    window.addEventListener('resize', syncCanvasSize);

    return () => {
      window.removeEventListener('resize', syncCanvasSize);
      if (observer) observer.disconnect();
    };
  }, []);

  const handlePhotoMove = (e) => {
    const el = photoRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    el.style.setProperty('--photo-x', `${x}%`);
    el.style.setProperty('--photo-y', `${y}%`);

    toggleBrushAt(e.clientX, e.clientY);
  };

  const handlePhotoEnter = (e) => {
    setPhotoActive(true);
    lastCellRef.current = '';
    handlePhotoMove(e);
  };

  const handlePhotoLeave = () => {
    const el = photoRef.current;
    if (!el) return;

    setPhotoActive(false);
    lastCellRef.current = '';
    el.style.setProperty('--photo-x', '50%');
    el.style.setProperty('--photo-y', '50%');
  };

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__bg-blobs">
        <div className="hero__bg-blob hero__bg-blob--a" />
        <div className="hero__bg-blob hero__bg-blob--b" />
      </div>

      <div className="hero__content">
        <motion.div
          ref={photoRef}
          className={`hero__photo-stage${photoActive ? ' is-active' : ''}`}
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          onMouseMove={handlePhotoMove}
          onMouseEnter={handlePhotoEnter}
          onMouseLeave={handlePhotoLeave}
        >
          <img
            src="/heropic-no-bg.png"
            alt="Razan Hasbini portrait"
            className="hero__photo-base"
            draggable={false}
          />
          <canvas ref={neonCanvasRef} className="hero__photo-paint" aria-hidden="true" />
          <div className="hero__photo-halo" aria-hidden="true" />
        </motion.div>

        <div className="hero__left">
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Razan
            <br />
            Hasbini
          </motion.h1>

          <motion.p
            className="hero__photo-hint"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            Paint the portrait to toggle neon sketch mode
          </motion.p>

          <motion.p
            className="hero__slogan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
          >
            I build systems that solve real problems - from blockchain platforms to
            cybersecurity automation.
          </motion.p>

          <motion.div
            className="hero__role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <TypedText />
          </motion.div>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="hero__cta hoverable"
              onClick={(e) => scrollTo(e, '#projects')}
            >
              View My Work <span className="hero__cta-arrow">-&gt;</span>
            </a>
            <a
              href="#contact"
              className="hero__cta hero__cta--outline hoverable"
              onClick={(e) => scrollTo(e, '#contact')}
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero__bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="hero__location">Beirut, Lebanon</span>
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>SCROLL</span>
        </div>
      </motion.div>
    </section>
  );
}
