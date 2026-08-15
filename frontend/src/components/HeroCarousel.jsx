import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CodeIcon, ShieldIcon } from './Icons.jsx';

const SLIDES = [
  {
    key: 'build',
    icon: CodeIcon,
    eyebrow: 'Web Development & Automation',
    heading: (
      <>
        We build the websites and workflows your <span>business runs on.</span>
      </>
    ),
    body:
      'From corporate sites to internal dashboards, we design and ship fast, maintainable web platforms — then automate the repetitive work behind them, so your team spends less time on busywork and more time on growth.',
    stats: [
      { value: '6', label: 'Connected services' },
      { value: '100%', label: 'Mobile-first builds' }
    ]
  },
  {
    key: 'secure',
    icon: ShieldIcon,
    eyebrow: 'AI • SOFTWARE • CYBERSECURITY',
    heading: (
      <>
        Intelligent solutions, engineered to be <span>secure by default.</span>
      </>
    ),
    body:
      'We layer AI into engineering where it genuinely helps — faster research, sharper decisions, smarter reporting — and pair every build with a cybersecurity-first approach, from VAPT to ongoing hardening.',
    stats: [
      { value: 'AI-Powered', label: 'Smarter engineering' },
      { value: 'Security-First', label: 'Web, API, network & mobile' }
    ]
  }
];

const AUTOPLAY_MS = 7000;

export default function HeroCarousel() {
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

  const slide = SLIDES[active];
  const SlideIcon = slide.icon;

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="Seyon Technologies introduction"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <p className="hero-carousel__eyebrow">
        <span className="hero-carousel__eyebrow-icon" aria-hidden="true">
          <SlideIcon width={15} height={15} strokeWidth={2.1} />
        </span>
        {slide.eyebrow}
      </p>

      <h1 className="hero-carousel__heading">{slide.heading}</h1>
      <p className="hero-carousel__body">{slide.body}</p>

      <div className="hero-carousel__stats" aria-hidden="true">
        {slide.stats.map((stat) => (
          <div className="hero-carousel__stat" key={stat.label}>
            <span className="hero-carousel__stat-value">{stat.value}</span>
            <span className="hero-carousel__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="hero-carousel__cta">
        <Link to="/services" className="btn btn--primary">
          Explore Our Services
        </Link>
        <Link to="/contact" className="btn btn--outline">
          Let's Work Together
        </Link>
      </div>

      <div className="hero-carousel__nav" role="tablist" aria-label="Hero slides">
        <button
          type="button"
          className="hero-carousel__arrow"
          aria-label="Previous slide"
          onClick={() => goTo(active - 1)}
        >
          &#8592;
        </button>

        {SLIDES.map((s, i) => (
          <button
            key={s.key}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show slide ${i + 1}: ${s.eyebrow}`}
            className={`hero-carousel__dot ${i === active ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}

        <button
          type="button"
          className="hero-carousel__arrow"
          aria-label="Next slide"
          onClick={() => goTo(active + 1)}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
