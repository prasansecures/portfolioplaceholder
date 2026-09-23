import { STAGES } from '../lib/scoring';

export default function Pipeline({ candidates, activeStage, onStage, queueCount }) {
  return (
    <div className="pipeline" role="group" aria-label="Pipeline stages. Select a stage to filter the queue.">
      {STAGES.map((stage, i) => {
        const count = candidates.filter((c) => c.stage === stage.key).length;
        const on = activeStage === stage.key;
        return (
          <button
            type="button"
            key={stage.key}
            className={`pipe-stage${on ? ' on' : ''}`}
            aria-pressed={on}
            onClick={() => onStage(stage.key)}
          >
            <span className="pipe-idx">0{i + 1}</span>
            <span className="pipe-count">{count}</span>
            <span className="pipe-label">{stage.label}</span>
            <span className="pipe-blurb">{stage.blurb}</span>
          </button>
        );
      })}
      <div className="pipe-queue" aria-live="polite">
        <span className="pipe-count">{queueCount}</span>
        <span className="pipe-label">In follow-up queue</span>
        <span className="pipe-blurb">Saved in this browser</span>
      </div>
    </div>
  );
}
