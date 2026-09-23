import { CASES, SOURCES } from '../data/evidence';

function Basis({ src }) {
  if (src === 'aggregate') return <span className="basis basis-agg">Aggregate result, provided by Prasan</span>;
  const s = SOURCES[src];
  return (
    <a className="basis" href={s.url} target="_blank" rel="noreferrer">
      Public source ↗<span className="sr-only">: {s.label}</span>
    </a>
  );
}

export default function CaseStudies() {
  return (
    <section id="evidence" className="band band-ink" aria-labelledby="cs-title">
      <div className="shell">
        <div className="sec-head">
          <p className="eyebrow">Evidence · Arweave India, historical</p>
          <h2 id="cs-title" className="display-2">
            The loop, <em>already run.</em>
          </h2>
          <p className="sec-lede">
            Three case studies from real programs. Named projects and figures are historical and attributed. The
            queue above uses demonstration data only.
          </p>
        </div>
        <div className="cases">
          {CASES.map((cs) => (
            <article key={cs.n} className="case" aria-labelledby={`case-${cs.n}`}>
              <p className="case-kicker">
                <span>{cs.n}</span> {cs.kicker}
              </p>
              <h3 id={`case-${cs.n}`}>{cs.title}</h3>
              {cs.body.map((p) => (
                <p key={p.slice(0, 24)} className="case-body">
                  {p}
                </p>
              ))}
              {cs.facts && (
                <dl className="facts">
                  {cs.facts.map((f) => (
                    <div key={f.l} className="fact">
                      <dt>{f.l}</dt>
                      <dd>
                        <span className="fact-v">{f.v}</span>
                        <Basis src={f.src} />
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
              {cs.projects && (
                <ul className="projects" aria-label="Public project examples">
                  {cs.projects.map((p) => (
                    <li key={p.name}>
                      <b>{p.name}</b>
                      {p.note && <span>{p.note}</span>}
                    </li>
                  ))}
                </ul>
              )}
              <p className="case-lesson">{cs.lesson}</p>
              <p className="case-sources">
                Sources:{' '}
                {cs.sources.map((k, i) => (
                  <span key={k}>
                    {i > 0 && ' · '}
                    <a href={SOURCES[k].url} target="_blank" rel="noreferrer">
                      {SOURCES[k].label}
                    </a>
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
