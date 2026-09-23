// Checks Founder Signal OS demo data against the documented rules. Run: npm run check:signal
import assert from 'node:assert/strict';
import { CANDIDATES } from '../src/signal/data/candidates.js';
import { COMPONENTS, ACTIONS, STAGES, RELATIONSHIPS, totalScore } from '../src/signal/lib/scoring.js';

const EXPECTED_WEIGHTS = { depth: 0.25, shipping: 0.25, trajectory: 0.2, community: 0.15, relationship: 0.15 };

for (const c of COMPONENTS) assert.equal(c.weight, EXPECTED_WEIGHTS[c.key], `weight for ${c.key}`);
assert.equal(Math.round(COMPONENTS.reduce((a, c) => a + c.weight, 0) * 100), 100, 'weights sum to 100%');
assert.equal(CANDIDATES.length, 12, '12 candidates');

const ids = new Set();
for (const c of CANDIDATES) {
  assert.ok(!ids.has(c.id), `unique id ${c.id}`);
  ids.add(c.id);
  assert.ok(STAGES.some((s) => s.key === c.stage), `${c.id} stage`);
  assert.ok(RELATIONSHIPS.includes(c.relationship), `${c.id} relationship`);
  assert.ok(c.action in ACTIONS, `${c.id} action`);
  for (const f of ['name', 'archetype', 'sector', 'location', 'whyNow', 'actionReason', 'draft']) {
    assert.ok(c[f], `${c.id} ${f}`);
  }
  assert.ok(c.evidence.length && c.risks.length, `${c.id} evidence and risks`);
  for (const comp of COMPONENTS) {
    const s = c.scores[comp.key];
    assert.ok(Number.isInteger(s.value) && s.value >= 0 && s.value <= 100, `${c.id} ${comp.key} in 0–100`);
    assert.ok(s.why, `${c.id} ${comp.key} rationale`);
  }
  const manual = Math.round(
    Object.entries(EXPECTED_WEIGHTS).reduce((a, [k, w]) => a + w * c.scores[k].value, 0)
  );
  assert.equal(totalScore(c.scores), manual, `${c.id} total`);
  console.log(`${c.id} ${c.name.padEnd(7)} ${String(manual).padStart(3)}  ${c.stage.padEnd(9)} ${ACTIONS[c.action]}`);
}
console.log('All Founder Signal checks passed.');
