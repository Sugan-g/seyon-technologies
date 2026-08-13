import { useState } from 'react';
import { CodeIcon, BoltIcon, ShieldIcon } from './Icons.jsx';

const STEPS = [
  {
    key: 'build',
    label: 'Build',
    icon: CodeIcon,
    detail: 'Ship the software, sites, and systems your business runs on.'
  },
  {
    key: 'grow',
    label: 'Grow',
    icon: BoltIcon,
    detail: 'Automate the busywork and layer in AI so your team scales without stalling.'
  },
  {
    key: 'secure',
    label: 'Secure',
    icon: ShieldIcon,
    detail: 'Lock it down with a cybersecurity-first approach, so growth never outpaces protection.'
  }
];

/**
 * Lightweight, dependency-free progress strip. Pure CSS + a little state —
 * no animation libraries, no 3D, no video.
 */
export default function BuildGrowSecure() {
  const [activeKey, setActiveKey] = useState(STEPS[0].key);
  const active = STEPS.find((s) => s.key === activeKey);

  return (
    <section className="bgs" aria-labelledby="bgs-heading">
      <h2 id="bgs-heading" className="section-heading">
        Build &rarr; Grow &rarr; Secure
      </h2>

      <div className="bgs__strip" role="tablist" aria-label="Build, grow, secure stages">
        {STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <button
              key={step.key}
              type="button"
              role="tab"
              aria-selected={activeKey === step.key}
              className={`bgs__step ${activeKey === step.key ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveKey(step.key)}
              onFocus={() => setActiveKey(step.key)}
              onClick={() => setActiveKey(step.key)}
            >
              <span className="bgs__icon" aria-hidden="true">
                <Icon width={18} height={18} strokeWidth={1.9} />
              </span>
              <span className="bgs__label">{step.label}</span>
            </button>
          );
        })}
      </div>

      <p className="bgs__detail" aria-live="polite">
        {active.detail}
      </p>
    </section>
  );
}
