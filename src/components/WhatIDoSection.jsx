const PILLARS = [
  {
    n: '01',
    title: 'Ecosystem strategy',
    body: 'The thesis, the funnel, the map — where builders come from, and where they go next.',
  },
  {
    n: '02',
    title: 'Programs & events',
    body: 'Hacker houses, residencies, flagship conferences. Designed and run end to end.',
  },
  {
    n: '03',
    title: 'Community storytelling',
    body: 'Public archives, video, and rituals that keep people coming back.',
  },
];

const PROGRAMS = [
  { label: '200+ events, internationally', body: 'hackathons · conferences · hacker houses · demo days · dinners · touchgrass' },
  { label: 'Launchpad', body: '3-month incubation · 40+ founders' },
  { label: '20+ speaker sessions', body: 'keynotes · guest lectures · mentoring' },
  { label: 'Country-wide event tours', body: 'Bangalore · Hyderabad · Vadodara' },
];

export default function WhatIDoSection() {
  return (
    <section className="blk wrap" style={{ paddingTop: 0 }}>
      <div className="sec-head rv">
        <div className="sec-title">What I do</div>
        <span className="sec-num">/ 02 — the work</span>
      </div>
      <div className="pillars rv">
        {PILLARS.map((p) => (
          <div className="pillar" key={p.n}>
            <div className="pn">{p.n}</div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
      <div className="progs rv" style={{ marginTop: 24 }}>
        {PROGRAMS.map((p) => (
          <div className="prog" key={p.label}>
            <b>{p.label}</b>
            {p.body}
          </div>
        ))}
      </div>
    </section>
  );
}
