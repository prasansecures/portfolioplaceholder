const LOOP = [
  'Attract technical talent',
  'Identify exceptional people through evidence of work',
  'Create a high-signal reason to engage',
  'Place them in an environment where they can ship',
  'Stay close after the program',
  'Turn outcomes and stories into the next wave of talent',
];

export default function Positioning() {
  return (
    <section id="about" className="band band-light" aria-labelledby="about-title">
      <div className="shell about">
        <div>
          <p className="eyebrow">Who built this</p>
          <h2 id="about-title" className="display-2">
            Prasan Singh
          </h2>
          <blockquote className="pull">
            I build founder ecosystems: the programs, rooms, selection systems, and follow-through that help
            technical builders become founders and funded teams.
          </blockquote>
          <p className="about-body">
            At Arweave India I built the same loop Company Ventures describes, and ran it many times. This prototype
            shows how I think about the work upstream of an investment: who to notice, when to reach out, and what
            the next useful thing is for each person.
          </p>
          <div className="about-cta">
            <a className="btn btn-primary" href="https://cal.com/prasan-singh/15min" target="_blank" rel="noreferrer">
              Book 15 minutes
            </a>
            <a className="btn btn-quiet" href="/">
              Main site
            </a>
            <a className="btn btn-quiet" href="https://www.linkedin.com/in/prasan-singh" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <ol className="about-loop" aria-label="The loop I have built repeatedly">
          {LOOP.map((l, i) => (
            <li key={l}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {l}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
