import { useState } from 'react';
import { STAGES, SIGNAL_LEVELS, RELATIONSHIPS } from '../lib/scoring';

function Select({ id, label, value, onChange, options }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function FilterBar({
  candidates,
  filters,
  sort,
  activeCount,
  resultCount,
  onFilter,
  onSort,
  onClear,
}) {
  const [open, setOpen] = useState(false);
  const sectors = [...new Set(candidates.map((c) => c.sector))].sort();
  const all = (label) => ({ value: 'all', label });

  return (
    <div className="filters">
      <div className="filters-head">
        <h2 id="queue" className="panel-title" tabIndex={-1}>
          Priority queue <span className="count">{resultCount} of {candidates.length}</span>
        </h2>
        <button
          type="button"
          className="btn btn-quiet filters-toggle"
          aria-expanded={open}
          aria-controls="filter-fields"
          onClick={() => setOpen((o) => !o)}
        >
          Filters{activeCount ? ` · ${activeCount}` : ''}
        </button>
      </div>
      <div id="filter-fields" className={`filter-fields${open ? ' open' : ''}`}>
        <Select
          id="f-stage"
          label="Stage"
          value={filters.stage}
          onChange={(v) => onFilter('stage', v)}
          options={[all('All stages'), ...STAGES.map((s) => ({ value: s.key, label: s.label }))]}
        />
        <Select
          id="f-sector"
          label="Sector"
          value={filters.sector}
          onChange={(v) => onFilter('sector', v)}
          options={[all('All sectors'), ...sectors.map((s) => ({ value: s, label: s }))]}
        />
        <Select
          id="f-level"
          label="Signal"
          value={filters.level}
          onChange={(v) => onFilter('level', v)}
          options={[all('All levels'), ...SIGNAL_LEVELS.map((l) => ({ value: l.key, label: l.label }))]}
        />
        <Select
          id="f-rel"
          label="Relationship"
          value={filters.relationship}
          onChange={(v) => onFilter('relationship', v)}
          options={[all('All relationships'), ...RELATIONSHIPS.map((r) => ({ value: r, label: r }))]}
        />
        <Select
          id="f-sort"
          label="Sort by"
          value={sort}
          onChange={onSort}
          options={[
            { value: 'score-desc', label: 'Score: high to low' },
            { value: 'score-asc', label: 'Score: low to high' },
            { value: 'stage', label: 'Pipeline stage' },
            { value: 'name', label: 'Name' },
          ]}
        />
        {activeCount > 0 && (
          <button type="button" className="btn btn-link clear" onClick={onClear}>
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
