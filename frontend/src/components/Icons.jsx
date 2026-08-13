/**
 * Shared line-icon set for Seyon Technologies.
 * Plain inline SVG — no icon library dependency. Each icon is stroke-based,
 * 24x24, and inherits color via `currentColor` so it tints with its badge.
 */

const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};

export function CodeIcon(props) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <polyline points="8 6 2 12 8 18" />
      <polyline points="16 6 22 12 16 18" />
      <line x1="13.5" y1="4" x2="10.5" y2="20" />
    </svg>
  );
}

export function DocumentIcon(props) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <line x1="8.5" y1="12" x2="15.5" y2="12" />
      <line x1="8.5" y1="15.5" x2="15.5" y2="15.5" />
      <line x1="8.5" y1="19" x2="12.5" y2="19" />
    </svg>
  );
}

export function SearchIcon(props) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <line x1="20" y1="20" x2="15.8" y2="15.8" />
      <path d="M8.2 11a2.8 2.8 0 0 1 2.8-2.8" />
    </svg>
  );
}

export function GridIcon(props) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" />
    </svg>
  );
}

export function UsersIcon(props) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
      <circle cx="17" cy="8" r="2.4" />
      <path d="M15.2 14.7c2.6.3 4.6 2.3 4.6 5.3" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3.2 19 6v6c0 4.6-3 8-7 9-4-1-7-4.4-7-9V6l7-2.8Z" />
      <polyline points="9 12 11.2 14.2 15.5 9.5" />
    </svg>
  );
}

export function SparkleIcon(props) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3.5c.5 3 2 5 5 6-3 1-4.5 3-5 6-.5-3-2-5-5-6 3-1 4.5-3 5-6Z" />
      <path d="M19 15c.25 1.3.9 2 2.2 2.3-1.3.3-1.95 1-2.2 2.3-.25-1.3-.9-2-2.2-2.3 1.3-.3 1.95-1 2.2-2.3Z" />
    </svg>
  );
}

export function CoinIcon(props) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <ellipse cx="12" cy="7" rx="7" ry="3" />
      <path d="M5 7v10c0 1.66 3.13 3 7 3s7-1.34 7-3V7" />
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
    </svg>
  );
}

export function CompassIcon(props) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <polygon points="15 9 13 13 9 15 11 11 15 9" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

export function LayersIcon(props) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <polygon points="12 3 21 8 12 13 3 8 12 3" />
      <polyline points="3 13 12 18 21 13" />
      <polyline points="3 17.5 12 22.5 21 17.5" />
    </svg>
  );
}

export function BoltIcon(props) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <polygon points="12.5 2.5 5 14 11 14 10 21.5 19 10 13 10 12.5 2.5" />
    </svg>
  );
}

export const ICONS_BY_KEY = {
  code: CodeIcon,
  document: DocumentIcon,
  search: SearchIcon,
  grid: GridIcon,
  users: UsersIcon,
  shield: ShieldIcon
};

export function ServiceIcon({ iconKey, ...rest }) {
  const Cmp = ICONS_BY_KEY[iconKey] || CodeIcon;
  return <Cmp {...rest} />;
}
