import { useEffect, useState } from 'react';

// Demonstration state lives only in this browser. Every read and write is guarded so the
// page still works in private windows or when storage is blocked.

const KEY = 'founder-signal-os:v1';

export const DEFAULT_STATE = {
  filters: { stage: 'all', sector: 'all', level: 'all', relationship: 'all' },
  sort: 'score-desc',
  selectedId: null,
  queue: [],
  drafts: {},
};

function load() {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_STATE,
      ...parsed,
      filters: { ...DEFAULT_STATE.filters, ...parsed.filters },
    };
  } catch {
    return DEFAULT_STATE;
  }
}

export function usePersistentState() {
  const [state, setState] = useState(load);

  useEffect(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable: state still works for this visit */
    }
  }, [state]);

  const reset = () => {
    try {
      window.localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
    setState(DEFAULT_STATE);
  };

  return [state, setState, reset];
}
