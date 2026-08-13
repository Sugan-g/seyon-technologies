import { CodeIcon, BoltIcon, ShieldIcon } from './Icons.jsx';

const STAGES = [
  { label: 'Build', icon: CodeIcon },
  { label: 'Automate', icon: BoltIcon },
  { label: 'Secure', icon: ShieldIcon }
];

export default function PipelineCard() {
  return (
    <aside className="pipeline-card" aria-label="Our engineering pipeline">
      <p className="pipeline-card__eyebrow">Our Engineering Pipeline</p>

      <ol className="pipeline-card__stages">
        {STAGES.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <li
              key={stage.label}
              className={`pipeline-card__stage ${
                i === STAGES.length - 1 ? 'is-active' : ''
              }`}
            >
              <span className="pipeline-card__dot" aria-hidden="true">
                <Icon width={14} height={14} strokeWidth={2.2} />
              </span>
              <span className="pipeline-card__label">{stage.label}</span>
            </li>
          );
        })}
      </ol>

      <p className="pipeline-card__note">
        Every engagement moves through the same disciplined path — whichever
        stage your business is starting from.
      </p>

      <div className="pipeline-card__badges">
        <span className="pipeline-card__badge">AI-assisted</span>
        <span className="pipeline-card__badge">Security-first</span>
      </div>
    </aside>
  );
}
