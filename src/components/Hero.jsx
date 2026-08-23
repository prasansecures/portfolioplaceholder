import ActionLink from './ActionLink';
import links from '../data/links';

export default function Hero() {
  return (
    <section className="hero wrap">
      <div className="eyebrow rv">
        <span className="mono">Ecosystem architect · community &amp; events</span>
      </div>
      <h1 className="lede rv">
        I build <em>Communities</em>
        <br />
        &amp; Founder ecosystems
        <br />
        that turn builders into
        <br />
        <em>funded teams.</em>
      </h1>
      <p className="hero-sub rv">
        I built{' '}
        <strong>
          <a className="link" href={links.arweaveIndia} target="_blank" rel="noreferrer">
            Arweave India
          </a>
        </strong>{' '}
        — five hacker houses, incubation programs designed around projects, and flagship events across Asia
        — the community systems that shape how a global ecosystem grows.
      </p>
      <div className="roles rv">
        <span className="mono" style={{ color: 'var(--accent)' }}>
          open to
        </span>
        <span className="role">ecosystem lead</span>
        <span className="role">global events lead</span>
        <span className="role">community lead</span>
        <span className="role">events &amp; ops</span>
      </div>
      <div className="hero-cta rv">
        <ActionLink href={links.booking}>
          Book 15 min →
        </ActionLink>
        <ActionLink href={links.cv} variant="ghost">
          View CV →
        </ActionLink>
        <ActionLink
          href={links.x}
          variant="ghost"
          style={{ backgroundColor: '#191512', color: '#F4EEE5' }}
        >
          DM on 𝕏
        </ActionLink>
        <ActionLink href={links.linkedin} variant="ghost">
          LinkedIn
        </ActionLink>
      </div>
    </section>
  );
}
