import { useState, useEffect, useRef, useCallback } from 'react';

const SLIDES = [
  {
    key: 'web-development',
    src: '/images/banner-web-development-services.jpg',
    alt: 'Seyon Technologies web development services across devices'
  },
  {
    key: 'ai-cybersecurity',
    src: '/images/banner-ai-cybersecurity-solutions.jpg',
    alt: 'Seyon Technologies AI and cybersecurity solutions'
  }
];

const AUTOPLAY_MS = 5000;

export default function BannerSlider() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
  };

  return (
    <section
      className="banner-slider"
      aria-roledescription="carousel"
      aria-label="Seyon Technologies highlights"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="banner-slider__track">
        {SLIDES.map((slide, i) => (
          <img
            key={slide.key}
            src={slide.src}
            alt={slide.alt}
            className={`banner-slider__img ${i === active ? 'is-active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      <div className="banner-slider__nav" role="tablist" aria-label="Banner slides">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.key}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show slide ${i + 1}`}
            className={`banner-slider__dot ${i === active ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
