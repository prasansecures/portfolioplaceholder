const STATS = [
  { v: '4', l: 'hacker houses &\nincubation launchpads' },
  { v: <>150<em>+</em></>, l: 'scholars from\n1500+ applications' },
  { v: <><em>$</em>2.5M</>, l: 'seed raised by ARlink\n· HH2 graduate' },
  { v: <>349<em>+</em></>, l: 'attendees ·\narweave day india' },
  { v: <>4000<em>+</em></>, l: 'builders reached\n· city debriefs' },
  { v: <>3<em>yr</em></>, l: 'building the arweave\nasia operations system' },
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
