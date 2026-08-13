import { SparkleIcon, CoinIcon, ShieldIcon, CompassIcon } from './Icons.jsx';

const VALUES = [
  {
    icon: SparkleIcon,
    title: 'AI-Driven Expertise',
    description:
      'We embed AI into the way we build, not just what we build — using it to accelerate delivery, sharpen decisions, and give your team tools that keep learning.'
  },
  {
    icon: CoinIcon,
    title: 'Cost-Effective Services',
    description:
      'Right-sized engineering for the problem in front of you. We scope for real outcomes, avoid unnecessary overhead, and make every engineering rupee count.'
  },
  {
    icon: ShieldIcon,
    title: 'Cybersecurity-First Approach',
    description:
      'Security is designed in from day one, not bolted on at the end — so every system we build is resilient by default, not by afterthought.'
  },
  {
    icon: CompassIcon,
    title: 'Future-Ready Advisory',
    description:
      'We advise on where your technology needs to go next, not just where it is today, so your stack keeps pace with your business instead of trailing behind it.'
  }
];

export default function CoreValues() {
  return (
    <section className="core-values" aria-labelledby="core-values-heading">
      <p className="section-eyebrow">What We Stand For</p>
      <h2 id="core-values-heading" className="section-heading">
        Our Core Values
      </h2>

      <div className="core-values__grid">
        {VALUES.map((value) => {
          const Icon = value.icon;
          return (
            <div className="core-values__card" key={value.title}>
              <span className="icon-badge" aria-hidden="true">
                <Icon />
              </span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
