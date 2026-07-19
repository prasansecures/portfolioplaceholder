const STATS = [
  { v: <>8<em>yrs</em></>, l: 'tech community &\necosystem work' },
  { v: <>16,000<em>+</em></>, l: 'participants\nacross events' },
  { v: <>200<em>+</em></>, l: 'events\nglobally' },
  { v: '5', l: 'hacker houses\n& incubations' },
  { v: <>40<em>+</em></>, l: 'hackathons\nmentored & judged' },
  { v: <>20<em>+</em></>, l: 'speaker\nsessions' },
];

export default function StatsStrip() {
  return (
    <div className="strip rv">
      <div className="strip-inner wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
        {STATS.map((s, i) => (
          <div className="stat" key={i}>
            <div className="v">{s.v}</div>
            <div className="l">
              {s.l.split('\n').map((line, j, arr) => (
                <span key={j}>
                  {line}
                  {j < arr.length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
