import { ACTIONS } from '../lib/scoring';

export default function ActionQueue({ queue, candidates, onOpen, onRemove }) {
  return (
    <section className="aq" aria-labelledby="aq-title">
      <h2 id="aq-title" className="panel-title">
        Follow-up queue <span className="count">{queue.length}</span>
      </h2>
      {queue.length === 0 ? (
        <p className="empty">
          Nothing queued yet. Open a candidate and choose <b>Mark for follow-up</b>.
        </p>
      ) : (
        <ul className="aq-list">
          {queue.map((q) => {
            const c = candidates.find((x) => x.id === q.id);
            if (!c) return null;
            return (
              <li key={q.id} className="aq-item">
                <button type="button" className="aq-open" onClick={(e) => onOpen(c.id, e.currentTarget)}>
                  <b>{c.name}</b>
                  <span>{ACTIONS[q.action]}</span>
                </button>
                <button type="button" className="btn btn-link" onClick={() => onRemove(c)}>
                  Remove<span className="sr-only"> {c.name} from queue</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
