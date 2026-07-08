const WORK = [
  {
    href: 'https://x.com/arweaveindia/status/1826639493417631960?s=20',
    name: 'Hacker Houses',
    desc: '4 incubation-led residency programs. Alumni include ARlink ($2.5M seed), plus BetterIDEa & 0rbit — acquired by the foundation.',
    tag: (
      <>
        <span className="win">4 houses · 150+ scholars</span> <span className="work-arrow">↗</span>
      </>
    ),
  },
  {
    href: 'https://x.com/arweaveindia/status/1968299806788604234?s=20',
    name: 'Stealth House',
    desc: 'A 13-day shipping sprint — ~12 builders, strangers to a team, ten products out the door.',
    tag: (
      <>
        10 ships · 13 days <span className="work-arrow">↗</span>
      </>
    ),
  },
  {
    href: 'https://x.com/arweaveindia',
    name: 'Arweave Day India',
    desc: 'The flagship conference — 349+ attendees, Sam Williams keynote, two days.',
    tag: (
      <>
        <span className="win">flagship · 349+</span> <span className="work-arrow">↗</span>
      </>
    ),
  },
  {
    href: 'https://x.com/arweaveindia/status/1915426565326029130',
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
      <div className="sec-head rv">
        <div className="sec-title">Events</div>
        <span className="sec-num">/ 01 — proof</span>
      </div>
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
        <a className="link mono" href="https://x.com/arweaveindia" target="_blank" rel="noreferrer">
          the full public log ↗
        </a>
      </div>
    </section>
  );
}
