import { Link } from 'react-router-dom';
import services from '../data/services.js';
import { ServiceIcon, ArrowRightIcon } from '../components/Icons.jsx';

export default function Services() {
  return (
    <section className="services page-section">
      <p className="section-eyebrow">What We Do</p>
      <h1 className="section-heading">Six capabilities. One connected approach.</h1>
      <p className="services__intro">
        From new websites to full ERP and CRM ecosystems, every service is
        engineered to work together — and every build can be strengthened
        with AI where it genuinely helps.
      </p>

      <div className="services__list">
        {services.map((service) => (
          <article className="services__item" key={service.slug} id={service.slug}>
            <div className="services__item-top">
              <span className="icon-badge icon-badge--lg" aria-hidden="true">
                <ServiceIcon iconKey={service.icon} width={26} height={26} />
              </span>
              <span className="services__item-number">SVC &middot; {service.number}</span>
            </div>

            <h2>{service.name}</h2>
            <p className="services__item-summary">{service.summary}</p>

            <ul className="services__tags">
              {service.tags.map((tag) => (
                <li key={tag} className="services__tag">{tag}</li>
              ))}
            </ul>

            {service.enhancement && (
              <div className="services__enhancement">
                <span className="services__enhancement-label">{service.enhancement.label}</span>
                <p>{service.enhancement.text}</p>
              </div>
            )}

            {service.flow && (
              <div className="services__flow">
                {service.flow.map((step, i) => (
                  <span key={step} className="services__flow-step">
                    <span className={i === 0 || i === service.flow.length - 1 ? 'is-highlight' : ''}>
                      {step}
                    </span>
                    {i < service.flow.length - 1 && (
                      <ArrowRightIcon width={13} height={13} strokeWidth={2} aria-hidden="true" />
                    )}
                  </span>
                ))}
              </div>
            )}

            <div className="services__outcome">
              <span className="services__outcome-label">Outcome</span>
              <p>{service.outcome}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="services__cta">
        <Link to="/contact" className="btn btn--primary">
          Start a Project
        </Link>
      </div>
    </section>
  );
}
