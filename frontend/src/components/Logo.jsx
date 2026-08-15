import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

/**
 * Single reusable Logo component used in both the Header and Footer.
 * Swap /src/assets/logo.png to update the logo everywhere at once.
 */
export default function Logo({ variant = 'header' }) {
  return (
    <Link
      to="/"
      className={`logo logo--${variant}`}
      aria-label="Seyon Technologies — home"
    >
      <img
        src={logo}
        alt="Seyon Technologies"
        className="logo__mark"
        width="150"
        height="50"
      />
    </Link>
  );
}