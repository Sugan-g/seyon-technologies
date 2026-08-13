import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import services from '../data/services.js';

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.28.22-.5.5-.5Z'
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    path: 'M4 4l7.2 9.6L4.3 20H6l6-6.4L16.5 20H20l-7.6-9.9L19.4 4H17.7l-5.6 5.9L7.5 4H4Z'
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M6.9 8.4H4V19h2.9V8.4ZM5.45 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 12.7c0-3-1.6-4.4-3.75-4.4-1.73 0-2.5.95-2.93 1.6V8.4h-2.9c.04.85 0 10.6 0 10.6h2.9v-5.9c0-.32.02-.63.12-.86.26-.63.85-1.29 1.85-1.29 1.3 0 1.82.99 1.82 2.44v5.6H20v-5.9Z'
  }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__cta page-section">
        <div className="site-footer__cta-panel">
          <div>
            <h2>Not sure which service fits your business?</h2>
            <p>Send us a short brief and we&rsquo;ll recommend where to start — no obligation.</p>
          </div>
          <Link to="/contact" className="btn btn--primary">
            Start a Project &rarr;
          </Link>
        </div>
      </div>

      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Logo variant="footer" />
          <p>
            India&rsquo;s emerging technology partner for software, AI,
            automation, and cybersecurity — engineering built around what
            your business actually needs.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <div>
            <h3>Navigate</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services#${service.slug}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:hello@seyontechnologies.com">hello@seyontechnologies.com</a></li>
              <li><a href="tel:+910000000000">+91 00000 00000</a></li>
              <li>Chennai, Tamil Nadu, India</li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {year} Seyon Technologies. All rights reserved.</p>
        <div className="site-footer__socials" aria-label="Social media links">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
              className="site-footer__social-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
