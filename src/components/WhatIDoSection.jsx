import SectionHead from './SectionHead';

const PILLARS = [
  {
    n: '01',
    title: 'Ecosystem strategy',
    body: 'The thesis, the funnel, the map — where builders come from, and where they go next.',
  },
  {
    n: '02',
    title: 'Events & Programs',
    body: 'Hacker houses, residencies, flagship conferences. Designed and run end to end.',
  },
  {
    n: '03',
    title: 'Community storytelling',
    body: 'Designing what the communities resonates with, and stays for.',
  },
];

const PROGRAMS = [
  { label: '200+ events, internationally', body: 'hackathons · conferences · hacker houses · demo days · dinners · touchgrass' },
  { label: 'Launchpad', body: '3-month incubation · 40+ founders' },
  { label: '20+ speaker sessions', body: 'keynotes · guest lectures · mentoring' },
  { label: 'Country-wide event tours', body: 'High intensity meetups that lead to bigger events.' },
];

export default function WhatIDoSection() {
  return (
    <section className="blk wrap" style={{ paddingTop: 0 }}>
      <SectionHead title="What I do" number="/ 02 — the work" />
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
