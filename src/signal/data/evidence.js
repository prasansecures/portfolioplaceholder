// Historical evidence. Every claim carries its basis: a public source, or a user-provided
// aggregate result. Keep demonstration data out of this file.

export const SOURCES = {
  role: {
    label: 'Company Ventures role description',
    url: 'https://jobs.ashbyhq.com/CompanyVentures/940dd6d6-f6b5-4697-9f17-07ae496be275',
  },
  challenges: { label: 'Arweave India Hacker House challenges', url: 'https://luma.com/hh-challenges' },
  launchpad: {
    label: 'Hacker House to Launchpad project history',
    url: 'https://arweavehub.com/weekly/ao-token-launch-sevenx-ventures-arweave-india-hacker-house',
  },
  cohort: {
    label: 'Hacker House cohort and eight-project outcome',
    url: 'https://www.panewslab.com/en/articles/0q2kr1b4f99t',
  },
  loom: { label: 'Loom project profile', url: 'https://www.arweaveindia.com/projects/loom' },
  update: {
    label: 'Arweave India public program update',
    url: 'https://www.linkedin.com/posts/prasan-singh_web3-founders-builders-activity-7343201855864238080-LkVk',
  },
};

export const PLAYBOOK = [
  { n: '01', title: 'Attract', body: 'Open technical challenges, city tours, and flagship events bring builders into view.' },
  { n: '02', title: 'Identify', body: 'Rank people by evidence of work: what they shipped, how, and who built on it.' },
  { n: '03', title: 'Engage', body: 'Create a high-signal reason to meet: an invitation, a lunch, the right introduction.' },
  { n: '04', title: 'Place', body: 'Put selected builders in a residency where proximity and deadlines make them ship.' },
  { n: '05', title: 'Follow through', body: 'Stay close after the program: next resource, next introduction, next room.' },
  { n: '06', title: 'Replenish', body: 'Turn outcomes and founder stories into content that attracts the next cohort.' },
];

export const CASES = [
  {
    n: '01',
    title: 'Finding signal',
    kicker: 'Open challenges → Hacker House',
    body: [
      'Rather than rely on applications alone, Arweave India used open technical challenges to select for Hacker House. Builders proved themselves on a real problem, and the strongest submissions formed a Top 30 shortlist.',
      'A later 30-person cohort went on to incubate eight projects. A practical submission shows how someone scopes a problem, handles ambiguity, and finishes, and a written application reveals little of that.',
    ],
    facts: [
      { v: 'Top 30', l: 'selected through open challenges', src: 'challenges' },
      { v: '30 → 8', l: 'cohort builders → incubated projects', src: 'cohort' },
    ],
    sources: ['challenges', 'cohort'],
    lesson: 'Evidence of work is the first filter. Applications explain; submissions prove.',
  },
  {
    n: '02',
    title: 'Turning builders into founders',
    kicker: 'Hacker House → Launchpad → incubation',
    body: [
      'Selection only matters if the next step exists. Projects from Hacker House moved into Launchpad and ongoing incubation, so builders did not fall off a cliff after demo day.',
      'The path is continuous: selection, proximity, shipping, follow-through, and access to the next relevant resource.',
    ],
    projects: [
      { name: '0rbit', note: 'Decentralized oracle' },
      { name: 'BetterIDEa', note: 'IDE for AO' },
      { name: 'Liteseed' },
      { name: 'Clickoor' },
      { name: 'Loom' },
    ],
    sources: ['launchpad', 'loom', 'update'],
    lesson: 'A program is a step, not the destination. Continuity is what turns a builder into a founder.',
  },
  {
    n: '03',
    title: 'Making the room visible',
    kicker: 'Events, stories, distribution',
    body: [
      "Every cohort's outcomes became the next cohort's reason to apply. Events, founder stories, program updates, and consistent distribution kept the top of the funnel full.",
      'The room has to be visible from outside, or exceptional people never find it.',
    ],
    facts: [
      { v: '200+', l: 'participants at Arweave Day India', src: 'update' },
      { v: '16,000+', l: 'participants across events', src: 'aggregate' },
      { v: '200+', l: 'events run internationally', src: 'aggregate' },
      { v: '40+', l: 'hackathons mentored & judged', src: 'aggregate' },
    ],
    sources: ['update'],
    lesson: 'Content is pipeline. Outcomes told well are how the next exceptional builder finds you.',
  },
];
