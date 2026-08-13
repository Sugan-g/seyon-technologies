import services from '../data/services.js';

export default function Portfolio() {
  return (
    <section className="portfolio page-section">
      <p className="section-eyebrow">Our Work</p>
      <h1 className="section-heading">Portfolio</h1>
      <p className="portfolio__intro">
        A quick, single-page overview of what we deliver across all six
        service lines. Download the flyer to share with your team.
      </p>

      <a
        className="btn btn--primary portfolio__download"
        href="/seyon-services-flyer.docx"
        download
      >
        Download Services Flyer (.docx)
      </a>

      <ul className="portfolio__list">
        {services.map((service) => (
          <li key={service.slug}>
            <h2>{service.name}</h2>
            <p>{service.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
