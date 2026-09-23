import { SOURCES } from '../data/evidence';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="shell foot-inner">
        <div>
          <p className="foot-title">About this prototype</p>
          <p>
            Founder Signal OS is a demonstration, not an admissions or investment system. All candidates are
            anonymized composites with fictional names. No real applicant identities, private evaluations, or contact
            details are used. Scores and recommendations are authored logic that shows a way of reasoning; people
            make the decisions. Demo state is saved only in your browser.
          </p>
        </div>
        <div>
          <p className="foot-title">Public sources</p>
          <ul className="foot-sources">
            {Object.values(SOURCES).map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
