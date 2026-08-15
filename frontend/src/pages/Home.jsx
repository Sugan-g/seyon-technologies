import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroCarousel from '../components/HeroCarousel.jsx';
import PipelineCard from '../components/PipelineCard.jsx';
import CoreValues from '../components/CoreValues.jsx';
import BuildGrowSecure from '../components/BuildGrowSecure.jsx';
import { ServiceIcon, ArrowRightIcon } from '../components/Icons.jsx';
import services from '../data/services.js';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Seyon Technologies | Software, AI & Cybersecurity Solutions</title>

        <meta
          name="description"
          content="Seyon Technologies delivers secure software development, AI engineering, automation, web and API solutions, and cybersecurity services for modern businesses."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.seyontechnologies.com/"
        />
      </Helmet>

      <section className="hero">
        <div className="hero__grid">
          <HeroCarousel />
          <PipelineCard />
        </div>
      </section>

      <CoreValues />

      <section className="capabilities" aria-labelledby="capabilities-heading">
        <p className="section-eyebrow">What We Do</p>
        <h2 id="capabilities-heading" className="section-heading">
          Six capabilities, one connected approach.
        </h2>

        <div className="capabilities__grid">
          {services.map((service) => (
            <Link
              to={`/services#${service.slug}`}
              className="capability-card"
              key={service.slug}
            >
              <span className="icon-badge" aria-hidden="true">
                <ServiceIcon iconKey={service.icon} />
              </span>
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
              <span className="capability-card__link">
                Learn more <ArrowRightIcon width={15} height={15} strokeWidth={2.2} />
              </span>
            </Link>
          ))}
        </div>

        <div className="capabilities__cta">
          <Link to="/services" className="btn btn--primary">
            View All Services
          </Link>
        </div>
      </section>

      <BuildGrowSecure />

      <section className="engagement" aria-labelledby="engagement-heading">
        <p className="section-eyebrow">How We Work</p>
        <h2 id="engagement-heading" className="section-heading">
          Two ways to work with us.
        </h2>

        <div className="engagement__grid">
          <div className="engagement__card">
            <h3>Project-Based Engineering</h3>
            <p>
              A defined scope, timeline, and budget — ideal for a new products, migrations, integrations, or launches.
            </p>
          </div>
          <div className="engagement__card">
            <h3>Ongoing Engineering Partnership</h3>
            <p>
              Continuous support across software development, AI integration, automation, infrastructure, and cybersecurity as your business evolves.
            </p>
          </div>
        </div>

        <div className="engagement__cta">
          <Link to="/contact" className="btn btn--primary">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}