import { PLAYBOOK } from '../data/evidence';

export default function Playbook() {
  return (
    <section id="playbook" className="band band-light" aria-labelledby="pb-title">
      <div className="shell">
        <div className="sec-head">
          <p className="eyebrow">Operating playbook</p>
          <h2 id="pb-title" className="display-2">
            One loop, <em>run on repeat.</em>
          </h2>
          <p className="sec-lede">
            Talent discovery feeds events, events feed the residency, the residency feeds founder support, and
            outcomes become the story that brings in the next wave.
          </p>
        </div>
        <ol className="loop">
          {PLAYBOOK.map((step) => (
            <li key={step.n} className="loop-step">
              <span className="loop-n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="loop-return" aria-hidden="true">
          <span>↺</span> 06 feeds back into 01
        </p>
      </div>
    </section>
  );
}
