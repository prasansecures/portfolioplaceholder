import ActionLink from './ActionLink';
import links from '../data/links';

export default function ContactSection() {
  return (
    <section className="contact">
      <div className="contact-in wrap">
        <div className="sec-num rv" style={{ marginBottom: 20 }}>
          / 03 — let's talk
        </div>
        <h2 className="rv">
          Need the next ecosystem program, flagship event, or community engine <em>built?</em>
        </h2>
        <div className="channels rv">
          <ActionLink href={links.booking}>
            Book 15 min →
          </ActionLink>
          <ActionLink href={links.email} variant="ghost">
            hi@prasansingh.com
          </ActionLink>
          <ActionLink href={links.x} variant="ghost">
            𝕏 @prasansinghh
          </ActionLink>
          <ActionLink href={links.linkedin} variant="ghost">
            LinkedIn
          </ActionLink>
          <ActionLink href={links.telegram} variant="ghost">
            Telegram
          </ActionLink>
          <ActionLink href={links.cv} variant="ghost">
            View CV →
          </ActionLink>
        </div>
      </div>
      <div className="wrap">
        <footer>
          <span className="mono">Prasan Singh — © 2026</span>
          <span className="mono">placeholder · full site in progress</span>
        </footer>
      </div>
    </section>
  );
}
