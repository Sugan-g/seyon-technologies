import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import services from '../data/services.js';

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/seyon.tech/',
    path: 'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z'
  }
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/seyon-technologies/',
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
            <h2>Let&rsquo;s Build the Right Solution for Your Business</h2>

            <p>
              Tell us about your goals, challenges, or ideas. Our team will
              help you find the right technology approach.
            </p>
          </div>

          <Link to="/contact" className="btn btn--primary">
            Discuss Your Project &rarr;
          </Link>
        </div>
      </div>

      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Logo variant="footer" />

          <p>
            We help businesses transform ideas into scalable digital solutions
            through software, AI, automation, and cybersecurity.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <div>
            <h3>EXPLORE</h3>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>SOLUTIONS</h3>

            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services#${service.slug}`}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>GET IN TOUCH</h3>

            <ul>
              <li>
                <a href="mailto:hello@seyontechnologies.com">
                  hello@seyontechnologies.com
                </a>
              </li>

              <li>
                <a href="tel:+919384256306">
                  +91 9384256306
                </a>
              </li>

              <li>
                4/47A &amp; 6/47B, Ram Colony, West Mambalam,
                Chennai-600033
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="site-footer__bottom">
        <p>
          &copy; {year} Seyon Technologies. All rights reserved.
        </p>

        <div
          className="site-footer__socials"
          aria-label="Social media links"
        >
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__social-link"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}