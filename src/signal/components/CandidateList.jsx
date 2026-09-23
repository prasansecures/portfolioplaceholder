import Avatar from './Avatar';
import { ACTIONS, stageLabel } from '../lib/scoring';

export default function CandidateList({ candidates, activeId, isQueued, onSelect }) {
  if (!candidates.length) {
    return <p className="empty">No candidates match these filters. Clear a filter to widen the queue.</p>;
  }
  return (
    <ol className="cand-list" aria-label="Candidates, in current sort order">
      {candidates.map((c, i) => {
        const on = c.id === activeId;
        return (
          <li key={c.id}>
            <button
              type="button"
              className={`cand${on ? ' on' : ''}`}
              aria-current={on ? 'true' : undefined}
              onClick={(e) => onSelect(c.id, e.currentTarget)}
              aria-label={`${c.name}, composite. ${c.archetype}. Score ${c.total}, ${c.level.label}. Stage ${stageLabel(c.stage)}. Recommended: ${ACTIONS[c.action]}.${isQueued(c.id) ? ' In follow-up queue.' : ''}`}
            >
              <span className="cand-rank" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <Avatar candidate={c} size="sm" />
              <span className="cand-main">
                <span className="cand-name">
                  {c.name}
                  <span className="tag tag-composite">Composite</span>
                  {isQueued(c.id) && <span className="tag tag-queued">Queued</span>}
                </span>
                <span className="cand-meta">
                  {c.archetype} · {c.sector}
                </span>
                <span className="cand-meta cand-meta-2">
                  <span className={`stage-dot stage-${c.stage}`} />
                  {stageLabel(c.stage)} · {c.relationship} · <b>{ACTIONS[c.action]}</b>
                </span>
              </span>
              <span className={`cand-score lvl-${c.level.key}`}>
                <span className="cand-total">{c.total}</span>
                <span className="cand-bar">
                  <span style={{ width: `${c.total}%` }} />
                </span>
                <span className="cand-level">{c.level.label}</span>
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
