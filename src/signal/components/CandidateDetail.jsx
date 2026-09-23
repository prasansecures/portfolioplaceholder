import { useEffect, useRef } from 'react';
import Avatar from './Avatar';
import { COMPONENTS, ACTIONS, contribution, stageLabel } from '../lib/scoring';

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

export default function CandidateDetail({
  candidate: c,
  draft,
  edited,
  queued,
  onToggleQueue,
  onDraftChange,
  onRestoreDraft,
  onCopied,
  asSheet,
  onClose,
}) {
  const rootRef = useRef(null);
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!asSheet) return undefined;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onCloseRef.current();
      if (e.key !== 'Tab' || !rootRef.current) return;
      const focusables = rootRef.current.querySelectorAll(
        'button, [href], textarea, select, input, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [asSheet]);

  const titleId = `detail-${c.id}`;

  return (
    <section
      ref={rootRef}
      key={c.id}
      className={`detail${asSheet ? ' sheet' : ''}`}
      aria-labelledby={titleId}
      role={asSheet ? 'dialog' : 'region'}
      aria-modal={asSheet ? 'true' : undefined}
    >
      <div className="detail-head">
        <Avatar candidate={c} size="lg" />
        <div className="detail-id">
          <h2 id={titleId} className="detail-name">
            {c.name}
            <span className="tag tag-composite">Anonymized composite</span>
          </h2>
          <p className="detail-arch">{c.archetype}</p>
          <p className="detail-meta">
            <span className={`stage-dot stage-${c.stage}`} />
            {stageLabel(c.stage)} · {c.sector} · {c.location} · Relationship: {c.relationship}
          </p>
        </div>
        {asSheet && (
          <button ref={closeRef} type="button" className="btn btn-quiet close" onClick={onClose}>
            Close<span className="sr-only"> candidate detail</span>
          </button>
        )}
      </div>

      <div className="score-block">
        <div className={`score-total lvl-${c.level.key}`}>
          <span className="score-num">{c.total}</span>
          <span className="score-of">/100</span>
          <span className="score-level">{c.level.label}</span>
        </div>
        <p className="score-note">
          Weighted sum of five components, rounded. Each value shows the evidence behind it.
        </p>
      </div>

      <ul className="components" aria-label="Score components">
        {COMPONENTS.map((comp) => {
          const { value, why } = c.scores[comp.key];
          return (
            <li key={comp.key} className="comp">
              <div className="comp-top">
                <span className="comp-label">{comp.label}</span>
                <span className="comp-nums">
                  <b>{value}</b>
                  <span className="comp-w">
                    × {Math.round(comp.weight * 100)}% = {contribution(comp, value).toFixed(1)}
                  </span>
                </span>
              </div>
              <div className="comp-bar" aria-hidden="true">
                <span style={{ width: `${value}%` }} />
              </div>
              <p className="comp-why">{why}</p>
            </li>
          );
        })}
      </ul>

      <div className="detail-cols">
        <div>
          <h3 className="h-label">Evidence</h3>
          <ul className="chips">
            {c.evidence.map((e) => (
              <li key={e} className="chip">
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="h-label">Risks &amp; open questions</h3>
          <ul className="risks">
            {c.risks.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="why-now">
        <h3 className="h-label">Why this person, why now</h3>
        <p>{c.whyNow}</p>
      </div>

      <div className="action-card">
        <div className="action-top">
          <div>
            <h3 className="h-label">Recommended next action</h3>
            <p className="action-name">{ACTIONS[c.action]}</p>
          </div>
          <button
            type="button"
            className={`btn ${queued ? 'btn-quiet' : 'btn-primary'}`}
            aria-pressed={queued}
            onClick={onToggleQueue}
          >
            {queued ? '✓ In follow-up queue' : 'Mark for follow-up'}
          </button>
        </div>
        <p className="action-reason">{c.actionReason}</p>
        <p className="fine">Authored demonstration logic, not a live model output.</p>
      </div>

      <div className="draft">
        <div className="draft-top">
          <label className="h-label" htmlFor={`draft-${c.id}`}>
            Outreach draft {edited && <span className="tag tag-edited">Edited</span>}
          </label>
          <div className="draft-actions">
            {edited && (
              <button type="button" className="btn btn-link" onClick={onRestoreDraft}>
                Restore original
              </button>
            )}
            <button type="button" className="btn btn-quiet" onClick={async () => onCopied(await copyText(draft))}>
              Copy draft
            </button>
          </div>
        </div>
        <textarea
          id={`draft-${c.id}`}
          value={draft}
          rows={6}
          onChange={(e) => onDraftChange(e.target.value)}
          aria-describedby={`draft-note-${c.id}`}
        />
        <p id={`draft-note-${c.id}`} className="fine">
          Edits are saved only in this browser. Nothing is sent.
        </p>
      </div>
    </section>
  );
}
