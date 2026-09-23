// Founder Signal score — a prioritization aid, not an admissions or investment decision.
// Weights are documented in the spec; change them here and the whole interface follows.

export const COMPONENTS = [
  { key: 'depth', label: 'Technical or domain depth', weight: 0.25 },
  { key: 'shipping', label: 'Initiative & shipping', weight: 0.25 },
  { key: 'trajectory', label: 'Founder trajectory', weight: 0.2 },
  { key: 'community', label: 'Community contribution', weight: 0.15 },
  { key: 'relationship', label: 'Relationship strength & timing', weight: 0.15 },
];

export function contribution(component, value) {
  return component.weight * value;
}

export function totalScore(scores) {
  const sum = COMPONENTS.reduce((acc, c) => acc + contribution(c, scores[c.key].value), 0);
  return Math.round(sum);
}

export const SIGNAL_LEVELS = [
  { key: 'high', label: 'High signal', min: 80 },
  { key: 'strong', label: 'Strong signal', min: 70 },
  { key: 'emerging', label: 'Emerging signal', min: 0 },
];

export function signalLevel(total) {
  return SIGNAL_LEVELS.find((l) => total >= l.min);
}

export const STAGES = [
  { key: 'discover', label: 'Discover', blurb: 'Seen through evidence of work' },
  { key: 'engage', label: 'Engage', blurb: 'A high-signal reason to meet' },
  { key: 'residency', label: 'Residency', blurb: 'In the room, shipping' },
  { key: 'founder', label: 'Founder follow-through', blurb: 'Staying close after the program' },
];

export const RELATIONSHIPS = ['New', 'Warm', 'Active', 'Alumni', 'Dormant'];

export const ACTIONS = {
  event: 'Event invitation',
  lunch: 'Founder lunch',
  residency: 'Residency conversation',
  intro: 'Expert introduction',
  followup: 'Targeted follow-up',
  monitor: 'Monitor',
};

export function stageLabel(key) {
  return STAGES.find((s) => s.key === key)?.label ?? key;
}
