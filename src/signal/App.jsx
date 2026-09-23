import { useEffect, useMemo, useRef, useState } from 'react';
import { CANDIDATES } from './data/candidates';
import { totalScore, signalLevel, STAGES, ACTIONS } from './lib/scoring';
import { usePersistentState, DEFAULT_STATE } from './lib/state';
import TopBar from './components/TopBar';
import Pipeline from './components/Pipeline';
import FilterBar from './components/FilterBar';
import CandidateList from './components/CandidateList';
import CandidateDetail from './components/CandidateDetail';
import ActionQueue from './components/ActionQueue';
import Playbook from './components/Playbook';
import CaseStudies from './components/CaseStudies';
import Positioning from './components/Positioning';
import Footer from './components/Footer';
import Toast from './components/Toast';

const ENRICHED = CANDIDATES.map((c) => {
  const total = totalScore(c.scores);
  return { ...c, total, level: signalLevel(total) };
});

const STAGE_ORDER = Object.fromEntries(STAGES.map((s, i) => [s.key, i]));

const SORTERS = {
  'score-desc': (a, b) => b.total - a.total,
  'score-asc': (a, b) => a.total - b.total,
  stage: (a, b) => STAGE_ORDER[a.stage] - STAGE_ORDER[b.stage] || b.total - a.total,
  name: (a, b) => a.name.localeCompare(b.name),
};

function useIsNarrow() {
  const query = '(max-width: 900px)';
  const [narrow, setNarrow] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setNarrow(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return narrow;
}

export default function App() {
  const [state, setState, resetState] = usePersistentState();
  const [toast, setToast] = useState(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const lastTrigger = useRef(null);
  const isNarrow = useIsNarrow();

  const notify = (message) => setToast({ message, at: Date.now() });

  const visible = useMemo(() => {
    const { stage, sector, level, relationship } = state.filters;
    return ENRICHED.filter(
      (c) =>
        (stage === 'all' || c.stage === stage) &&
        (sector === 'all' || c.sector === sector) &&
        (level === 'all' || c.level.key === level) &&
        (relationship === 'all' || c.relationship === relationship)
    ).sort(SORTERS[state.sort] ?? SORTERS['score-desc']);
  }, [state.filters, state.sort]);

  const activeId =
    (state.selectedId && ENRICHED.some((c) => c.id === state.selectedId) && state.selectedId) ||
    visible[0]?.id ||
    null;
  const active = ENRICHED.find((c) => c.id === activeId) ?? null;

  const setFilter = (key, value) =>
    setState((s) => ({ ...s, filters: { ...s.filters, [key]: value } }));

  const select = (id, trigger) => {
    lastTrigger.current = trigger ?? null;
    setState((s) => ({ ...s, selectedId: id }));
    if (isNarrow) setSheetOpen(true);
  };

  const closeSheet = () => {
    setSheetOpen(false);
    lastTrigger.current?.focus?.();
  };

  const inQueue = (id) => state.queue.some((q) => q.id === id);

  const toggleQueue = (candidate) => {
    const queued = inQueue(candidate.id);
    setState((s) => ({
      ...s,
      queue: queued
        ? s.queue.filter((q) => q.id !== candidate.id)
        : [...s.queue, { id: candidate.id, action: candidate.action }],
    }));
    notify(
      queued
        ? `${candidate.name} removed from the follow-up queue`
        : `${candidate.name} added to the follow-up queue · ${ACTIONS[candidate.action]}`
    );
  };

  const setDraft = (id, text) =>
    setState((s) => ({ ...s, drafts: { ...s.drafts, [id]: text } }));

  const restoreDraft = (id) =>
    setState((s) => {
      const drafts = { ...s.drafts };
      delete drafts[id];
      return { ...s, drafts };
    });

  const reset = () => {
    resetState();
    setSheetOpen(false);
    notify('Demonstration reset: filters, queue, and drafts restored');
  };

  const filtersActive = Object.values(state.filters).filter((v) => v !== 'all').length;

  const detail = active && (
    <CandidateDetail
      candidate={active}
      draft={state.drafts[active.id] ?? active.draft}
      edited={state.drafts[active.id] !== undefined && state.drafts[active.id] !== active.draft}
      queued={inQueue(active.id)}
      onToggleQueue={() => toggleQueue(active)}
      onDraftChange={(t) => setDraft(active.id, t)}
      onRestoreDraft={() => restoreDraft(active.id)}
      onCopied={(ok) => notify(ok ? 'Outreach draft copied' : 'Copy failed. Select the text and copy manually')}
      asSheet={isNarrow}
      onClose={closeSheet}
    />
  );

  return (
    <>
      <a className="skip" href="#queue">
        Skip to priority queue
      </a>
      <TopBar onReset={reset} />
      <main>
        <section className="workspace" aria-labelledby="ws-title">
          <div className="shell">
            <div className="ws-head">
              <div>
                <p className="eyebrow">Founder pipeline · working prototype</p>
                <h1 id="ws-title" className="display">
                  Founder Signal <em>OS</em>
                </h1>
              </div>
              <p className="ws-note">
                A prioritization aid for finding technical builders and knowing when to engage. All 12 candidates
                are <strong>anonymized composites</strong>. Scores guide attention; people make the decisions.
              </p>
            </div>

            <Pipeline
              candidates={ENRICHED}
              activeStage={state.filters.stage}
              onStage={(key) => setFilter('stage', state.filters.stage === key ? 'all' : key)}
              queueCount={state.queue.length}
            />

            <div className="ws-grid">
              <div className="ws-left">
                <FilterBar
                  candidates={ENRICHED}
                  filters={state.filters}
                  sort={state.sort}
                  activeCount={filtersActive}
                  resultCount={visible.length}
                  onFilter={setFilter}
                  onSort={(v) => setState((s) => ({ ...s, sort: v }))}
                  onClear={() => setState((s) => ({ ...s, filters: DEFAULT_STATE.filters }))}
                />
                <CandidateList
                  candidates={visible}
                  activeId={activeId}
                  isQueued={inQueue}
                  onSelect={select}
                />
                <ActionQueue
                  queue={state.queue}
                  candidates={ENRICHED}
                  onOpen={(id, el) => select(id, el)}
                  onRemove={(c) => toggleQueue(c)}
                />
              </div>
              {!isNarrow && <div className="ws-right">{detail}</div>}
            </div>
          </div>
        </section>

        {isNarrow && sheetOpen && detail}

        <Playbook />
        <CaseStudies />
        <Positioning />
      </main>
      <Footer />
      <Toast toast={toast} />
    </>
  );
}
