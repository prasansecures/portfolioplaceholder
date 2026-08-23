import SectionHead from './SectionHead';
import links from '../data/links';

const WORK = [
  {
    href: links.events.hackerHouses,
    name: 'Hacker Houses',
    desc: '4 incubation-led residency programs. Alumni include ARlink ($2.5M seed), plus BetterIDEa & 0rbit — acquired by the foundation.',
    tag: (
      <>
        <span className="win">4 houses · 150+ scholars</span> <span className="work-arrow">↗</span>
      </>
    ),
  },
  {
    href: links.events.stealthHouse,
    name: 'Stealth House',
    desc: 'A 13-day shipping sprint — ~12 builders, strangers to a team, ten products out the door.',
    tag: (
      <>
        10 ships · 13 days <span className="work-arrow">↗</span>
      </>
    ),
  },
  {
    href: links.events.arweaveDayIndia,
    name: 'Arweave Day India',
    desc: 'The flagship conference — 349+ attendees, Sam Williams keynote, two days.',
    tag: (
      <>
        <span className="win">flagship · 349+</span> <span className="work-arrow">↗</span>
      </>
    ),
  },
  {
    href: links.events.singaporeHackerHouse,
    name: 'Singapore Hacker House',
    desc: 'The consumer wave — a mature cohort shipping user-facing apps on mainnet.',
    tag: (
      <>
        consumer wave · 2025 <span className="work-arrow">↗</span>
      </>
    ),
  },
];

export default function EventsSection() {
  return (
    <section className="blk wrap">
      <SectionHead title="Events" number="/ 01 — proof" />
      <p
        className="mono rv"
        style={{ margin: '-24px 0 34px', textTransform: 'none', letterSpacing: '0.02em', fontSize: 13, color: 'var(--ink-soft)' }}
      >
        Recent events from my time at Arweave India.
      </p>
      <div className="work rv">
        {WORK.map((w) => (
          <a className="work-row" href={w.href} target="_blank" rel="noreferrer" key={w.name}>
            <div className="work-name">{w.name}</div>
            <div className="work-desc">{w.desc}</div>
            <div className="work-tag">{w.tag}</div>
          </a>
        ))}
      </div>
      <div style={{ marginTop: 20 }} className="rv">
        <span className="mono">+ launchpad cohorts, city debriefs &amp; side events · </span>
        <a className="link mono" href={links.arweaveIndiaX} target="_blank" rel="noreferrer">
          the full public log ↗
        </a>
      </div>
    </section>
  );
}
