import ActionLink from './ActionLink';
import links from '../data/links';

export default function Header() {
  return (
    <header>
      <div className="wrap bar">
        <div className="brand">
          Prasan<span>*</span>Singh
        </div>
        <div className="bar-right">
          <span className="avail">
            <span className="dot"></span> open to work
          </span>
          <ActionLink href={links.cv} variant="ghost">
            View CV →
          </ActionLink>
          <ActionLink href={links.booking}>
            Book 15 min →
          </ActionLink>
        </div>
      </div>
    </header>
  );
}
