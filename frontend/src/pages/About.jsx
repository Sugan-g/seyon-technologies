const PILLARS = [
  {
    index: '01',
    title: 'Technical knowledge',
    body: 'Modern engineering practices applied with discipline, not shortcuts.'
  },
  {
    index: '02',
    title: 'Business understanding',
    body: 'Every build starts from your operations, not a generic template.'
  },
  {
    index: '03',
    title: 'Modern development',
    body: 'Scalable, maintainable systems designed to evolve with you.'
  },
  {
    index: '04',
    title: 'AI-assisted workflows',
    body: 'AI accelerates the work; human engineering reviews every outcome.'
  }
];

export default function About() {
  return (
    <>
      <section className="about page-section">
        <p className="section-eyebrow">About Seyon Technologies</p>
        <h1 className="section-heading">
          Technology built around your business.
        </h1>

        <div className="about__body">
          <p>
            Seyon Technologies is a growing technology startup focused on
            delivering practical, intelligent, and secure digital solutions.
            Our capabilities span software development, business
            applications, ERP, CRM, SEO, automation, AI, and cybersecurity
            — for start-ups, small businesses, and growing organizations
            looking to strengthen their digital foundation.
          </p>
        </div>
      </section>

      <section className="about-pillars page-section" aria-label="What we bring to every engagement">
        <div className="about-pillars__grid">
          {PILLARS.map((pillar) => (
            <div className="about-pillars__card" key={pillar.index}>
              <span className="about-pillars__index">{pillar.index}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="philosophy page-section" aria-labelledby="philosophy-heading">
        <p className="section-eyebrow">Our Philosophy</p>
        <h2 id="philosophy-heading" className="section-heading">
          Solve the problem. Skip the complexity.
        </h2>

        <blockquote className="philosophy__quote">
          &ldquo;Technology should solve business problems, not create
          unnecessary complexity. We focus on solutions that are usable,
          scalable, maintainable, secure, and ready to evolve.&rdquo;
        </blockquote>

        <div className="philosophy__grid">
          <div className="philosophy__card">
            <p className="section-eyebrow">Our Vision</p>
            <p className="philosophy__text">
              To make modern, intelligent, and secure technology accessible
              to businesses of every size.
            </p>
          </div>
          <div className="philosophy__card">
            <p className="section-eyebrow">Our Mission</p>
            <p className="philosophy__text">
              Build practical technology today, and create intelligent
              possibilities for tomorrow.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
