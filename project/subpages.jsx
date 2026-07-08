// subpages.jsx — wireframe sub-routes for prasansingh.com
//   /community  · /work  · /writing  · /library  · /lets-talk
// Single host file: hash drives the active page. Uses shared.jsx primitives
// and the same handwritten / sketchy vocabulary as the home page.

const SUBPAGES = [
{ slug: 'community', num: '/01', name: 'Community', desc: 'hub · calendar · forum · programs' },
{ slug: 'work', num: '/02', name: 'Work', desc: 'projects · case studies · proof' },
{ slug: 'writing', num: '/03', name: 'Writing', desc: 'essays · notes · newsletter' },
{ slug: 'library', num: '/04', name: 'Library', desc: 'reads · music · travel · bucket' },
{ slug: 'lets-talk', num: '/05', name: "Let's Talk", desc: 'guidance · contact · book a slot' },
{ slug: 'archive', num: '/06', name: 'Archive', desc: 'the full record · every post' }];


// ── shared header used on every subpage ─────────────────────────────────────
function PageHero({ slug, eyebrow, title, sub }) {
  return (
    <div style={{ marginTop: 16 }}>
      <div className="kicker" style={{ color: 'var(--red)', marginBottom: 6 }}>
        prasansingh.com / {slug.replace('-', '\u2009')}
      </div>
      {eyebrow && <Kicker>{eyebrow}</Kicker>}
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(40px, 6vw, 72px)',
        margin: '6px 0 12px',
        lineHeight: 1.02
      }}>
        <span className="underline">{title}</span>
      </h1>
      {sub && <p style={{ fontSize: 18, maxWidth: '60ch', lineHeight: 1.5 }}>{sub}</p>}
    </div>);

}

// ── /community ──────────────────────────────────────────────────────────────
function CommunityPage() {
  const YEAR_2025 = [
  { mo: 'JAN', events: [] },
  { mo: 'FEB', events: [{ d: '08', t: 'Goa debrief' }] },
  { mo: 'MAR', events: [{ d: '—', t: 'HH4 · Bengal' }, { d: '7–9', t: 'Multi-city debriefs' }, { d: '9+', t: 'ADI pre-tour' }] },
  { mo: 'APR', events: [{ d: '17', t: 'Singapore HH' }, { d: '25', t: 'Arweave Day India' }] },
  { mo: 'MAY', events: [] },
  { mo: 'JUN', events: [] },
  { mo: 'JUL', events: [] },
  { mo: 'AUG', events: [] },
  { mo: 'SEP', events: [{ d: '17', t: 'Stealth House' }] },
  { mo: 'OCT', events: [{ d: '—', t: 'Launchpad 4 recap' }] },
  { mo: 'NOV', events: [] },
  { mo: 'DEC', events: [{ d: '—', t: 'Year-end stocktake' }] }];
  const programs = [
  { k: 'HH1', t: 'Bangalore · Protocol week', y: '2022', n: '30 builders', highlights: 'BetterIDEa · 0rbit · LiteSeed' },
  { k: 'HH2', t: 'Mussoorie · Dev tools', y: '2023', n: '30 builders', highlights: 'ARlink → $2.5M seed' },
  { k: 'HH3', t: 'Bengaluru · Utility apps', y: '2024', n: '30 builders', highlights: '4-day format · wellness component' },
  { k: 'HH4', t: 'Bangalore· Consumer apps', y: '2024', n: '30 builders', highlights: 'first apps on AO mainnet' },
  { k: 'Singapore HH', t: 'Consumer wave', y: '2025', n: '30 builders', highlights: 'consumer-first apps' },
  { k: 'LP', t: 'Launchpad · 3-mo incubation', y: '2023→', n: '40+ founders', highlights: 'post-hackathon survival' },
  { k: 'SH', t: 'Stealth House · 13-day sprint', y: '2024', n: '~12 builders', highlights: '10 products shipped' },
  { k: 'ADI', t: 'Arweave Day India', y: '2025', n: '349 attendees', highlights: 'Sam Williams keynote' },
  { k: 'DBR', t: 'Debriefs · BLR · HYD · BDQ', y: 'ongoing', n: '200+ ecosystem', highlights: 'multi-city tour' }];

  const posts = [
  { t: 'how do you know a community is real?', r: 12, age: '2d' },
  { t: 'post-HH crash: anyone else?', r: 8, age: '4d' },
  { t: 'best dinner-to-talk ratio for HH?', r: 15, age: '1w' },
  { t: 'is the permaweb a vibe?', r: 4, age: '1w' },
  { t: 'when do you stop being "early"?', r: 23, age: '2w' },
  { t: 'rituals that survived past month 6', r: 11, age: '3w' }];


  return (
    <div className="direction">
      <MockNav current="community" />
      <PageHero
        slug="community"
        eyebrow="the hub"
        title="where the work happens."
        sub="cohorts, calendars, conversations. this page is the running log of the community side of things — what's on, what's been, and how to plug in." />
      

      {/* calendar — full-year 2025 events map */}
      <section className="wf-section" data-screen-label="community / 2025 calendar">
        <SectionHeader num="A" label="2025 · THE YEAR" title="Events calendar" />
        <div className="sketch-box" style={{ padding: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <strong style={{ fontFamily: 'var(--font-display)', fontSize: 24 }}>2025</strong>
            <span className="kicker">flagship season · mar–apr</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {YEAR_2025.map((m) => {
              const active = m.events.length > 0;
              return (
                <div key={m.mo} className="sketch-box thin" style={{
                  padding: 10,
                  minHeight: 112,
                  background: active ? 'var(--tape)' : 'var(--paper)',
                  opacity: active ? 1 : 0.55
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <strong style={{ fontFamily: 'var(--font-label)', fontSize: 13, letterSpacing: '0.1em' }}>{m.mo}</strong>
                    {active && <span className="kicker" style={{ color: 'var(--red)' }}>{m.events.length}</span>}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 7 }}>
                    {active ? m.events.map((e, i) =>
                      <div key={i} style={{ fontSize: 11, lineHeight: 1.35 }}>
                        <span style={{ color: 'var(--red)', fontFamily: 'var(--font-label)', marginRight: 5 }}>{e.d}</span>
                        {e.t}
                      </div>
                    ) : <span className="kicker" style={{ opacity: 0.7 }}>build season</span>}
                  </div>
                </div>);
            })}
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 12 }} className="kicker">
            <span><span style={{ background: 'var(--tape)', padding: '0 6px', border: '1px solid var(--ink)' }}>&nbsp;</span> event month</span>
            <span style={{ marginLeft: 'auto', cursor: 'pointer' }}>+ subscribe (ics)</span>
          </div>
        </div>
      </section>

      {/* programs */}
      <section className="wf-section" data-screen-label="community / programs">
        <SectionHeader num="B" label="PROGRAMS" title="Arweave India · all of it" href="https://arweaveindia.com" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gap)' }}>
          {programs.map((p, i) =>
          <div key={p.k} className="sketch-box" style={{
            transform: `rotate(${i % 2 ? 0.3 : -0.3}deg)`,
            background: i % 3 === 0 ? 'var(--paper-2)' : 'var(--paper)'
          }}>
              <div className="between" style={{ marginBottom: 6 }}>
                <Stamp>{p.k}</Stamp>
                <span className="kicker">{p.y}</span>
              </div>
              <strong style={{ fontSize: 17 }}>{p.t}</strong>
              <div className="kicker" style={{ marginTop: 6 }}>{p.n}</div>
              <p style={{ margin: '8px 0 0', fontSize: 14 }}>{p.highlights}</p>
            </div>
          )}
        </div>
      </section>

      {/* forum + guidance */}
      <section className="wf-section" data-screen-label="community / forum + calls">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--gap)' }}>
          <div>
            <SectionHeader num="C" label="ANON FORUM" title="What's on the mind" />
            <div className="sketch-box dashed">
              {posts.map((p, i) =>
              <div key={i} style={{
                padding: '10px 0',
                borderBottom: i < posts.length - 1 ? '1px dashed var(--ink-soft)' : 'none'
              }}>
                  <div style={{ fontSize: 15 }}>"{p.t}"</div>
                  <div className="kicker" style={{ marginTop: 4 }}>anon · {p.r} replies · {p.age}</div>
                </div>
              )}
              <div style={{ marginTop: 14, display: 'flex', gap: 10, alignItems: 'center' }}>
                <div className="placeholder" style={{ flex: 1, height: 36 }}>
                  <span>START A THREAD →</span>
                </div>
                <Stamp>post anon</Stamp>
              </div>
            </div>
          </div>
          <div>
            <SectionHeader num="D" label="GUIDANCE" title="15 min · free." />
            <div className="sketch-box" style={{ background: 'var(--paper-2)' }}>
              <p style={{ fontSize: 15, margin: '0 0 10px' }}>
                one slot a week. for early community builders, post-hackathon founders, and anyone trying to make show #4 happen.
              </p>
              <Kicker>next available</Kicker>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
                {['Thu · Mar 14 · 10:00 IST', 'Thu · Mar 21 · 10:00 IST', 'Thu · Mar 28 · 10:00 IST'].map((s) =>
                <div key={s} className="sketch-box thin" style={{ padding: '8px 10px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{s}</span>
                    <span className="kicker" style={{ color: 'var(--red)', cursor: 'pointer' }}>book →</span>
                  </div>
                )}
              </div>
              <div className="kicker" style={{ marginTop: 12 }}>or just dm</div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}

// ── /work ───────────────────────────────────────────────────────────────────
function WorkPage() {
  const projects = [
  { k: 'ARlink', b: 'Deployment for permaweb', s: 'shipped · $2.5M seed', t: 'HH2 graduate' },
  { k: 'BetterIDEa', b: 'IDE for AO', s: 'shipped · arweave.org', t: 'HH1 graduate' },
  { k: '0rbit', b: 'Decentralized oracle', s: 'shipped · global infra', t: 'HH1 graduate' },
  { k: 'LiteSeed', b: 'DePIN for permaweb uploads', s: 'shipped · live', t: 'HH1 graduate' },
  { k: 'aoVest', b: 'Token vesting on AO', s: 'shipped', t: 'Launchpad' },
  { k: 'FundARs', b: 'Crowdfunding for permaweb', s: 'shipped', t: 'Launchpad' }];

  return (
    <div className="direction">
      <MockNav current="work" />
      <PageHero
        slug="work"
        eyebrow="proof of work"
        title="what i've helped ship."
        sub="three years, five hacker houses, one launchpad, a flagship event, and a portfolio of builders i'm proud of. here's the bench." />
      

      {/* featured case study */}
      <section className="wf-section" data-screen-label="work / case study">
        <SectionHeader num="A" label="CASE STUDY" title="Arweave India" href="https://arweaveindia.com" />
        <div className="sketch-box" style={{ background: 'var(--paper-2)', padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 24, alignItems: 'start' }}>
            <div>
              <Kicker>2022 — 2025 · ongoing</Kicker>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 38, margin: '8px 0 12px', lineHeight: 1.05 }}>
                an ecosystem, built one room at a time.
              </h3>
              <p style={{ fontSize: 17, lineHeight: 1.55 }}>
                I designed and ran the Arweave India program from 2022 onward. five hacker houses, a 3-month launchpad, a flagship conference, a buildathon, a stealth shipping sprint, and a podcast series. not the same hackathon five times — five different programs for five ecosystem moments.
              </p>
              <div style={{ marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Stamp>system design</Stamp>
                <Stamp>founder dev</Stamp>
                <Stamp>community design</Stamp>
                <Stamp>ecosystem</Stamp>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {ARWEAVE_STATS.map((s, i) =>
              <div key={i} className="sketch-box thin" style={{ textAlign: 'center', padding: '14px 8px', background: 'var(--paper)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: 'var(--red)' }}>{s.v}</div>
                  <div className="kicker">{s.l}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* portfolio */}
      <section className="wf-section" data-screen-label="work / portfolio">
        <SectionHeader num="B" label="PORTFOLIO" title="Projects in motion" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gap)' }}>
          {projects.map((p, i) =>
          <div key={p.k} className="sketch-box" style={{ transform: `rotate(${i % 2 ? 0.3 : -0.3}deg)` }}>
              <div className="between">
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: 24 }}>{p.k}</strong>
                <Kicker>{p.t}</Kicker>
              </div>
              <p style={{ margin: '6px 0', fontSize: 14 }}>{p.b}</p>
              <div className="kicker" style={{ color: p.s.includes('shipped') ? 'var(--red)' : 'var(--ink-soft)' }}>
                {p.s.includes('shipped') ? '●' : '○'} {p.s}
              </div>
            </div>
          )}
        </div>
        <div style={{ marginTop: 14, display: 'flex', justifyContent: 'flex-end', gap: 14, alignItems: 'baseline', flexWrap: 'wrap' }}>
          <span className="kicker">+ 15 more in the launchpad cohorts</span>
          <a href="#archive" style={{ textDecoration: 'none' }}><Stamp>full archive →</Stamp></a>
          <a href="./Arweave India Timeline.html" style={{ textDecoration: 'none' }}><Stamp>2.5-year arc · one-pager →</Stamp></a>
        </div>
      </section>

      {/* previous work — before arweave india */}
      <section className="wf-section" data-screen-label="work / previous work">
        <SectionHeader num="C" label="BEFORE ARWEAVE INDIA" title="Previous work" />
        <p style={{ fontSize: 15, maxWidth: '60ch', margin: '0 0 14px' }}>
          the chapters before arweave india — earlier communities, hackathons and
          projects. drop in supporting media for each.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gap)' }}>
          {[
          { k: 'CHAPTER 01', t: 'Add a project / role', n: 'year · context' },
          { k: 'CHAPTER 02', t: 'Add a project / role', n: 'year · context' },
          { k: 'CHAPTER 03', t: 'Add a project / role', n: 'year · context' }].
          map((p, i) =>
          <div key={i} className="sketch-box" style={{ transform: `rotate(${i % 2 ? 0.3 : -0.3}deg)` }}>
              <Placeholder id={`prevwork-${i}`} label="▶ DROP MEDIA" h={130} />
              <div className="between" style={{ marginTop: 10 }}>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}>{p.t}</strong>
                <Kicker>{p.k}</Kicker>
              </div>
              <p style={{ margin: '6px 0 0', fontSize: 14 }}>{p.n}</p>
            </div>
          )}
        </div>
      </section>

      {/* nerd corner */}
      <section className="wf-section" data-screen-label="work / lab" data-comment-anchor="f32fdd76a2-section-256-7">
        <SectionHeader num="D" label="NERD CORNER" title="Papers + writing" />
        <div className="sketch-box">
          <ul style={{ paddingLeft: 18, margin: 0, fontSize: 15, lineHeight: 1.7 }}>
            <li>On the permaweb thesis (2023)</li>
            <li>AO: an actor-model for permanent compute (2024)</li>
            <li>DePIN markets for permanent storage (2024)</li>
            <li>Cohort design as ecosystem infrastructure (2025)</li>
            <li>Touchgrass: wellness as program component (2025)</li>
          </ul>
          <div className="kicker" style={{ marginTop: 10 }}>request contact for drafts →</div>
        </div>
      </section>
    </div>);

}

// ── /writing ────────────────────────────────────────────────────────────────
function WritingPage() {
  const essays = [
  { t: 'How communities evolved: IRL → URL', d: 'Feb 2026', r: '5 min', cat: 'essay', featured: true },
  { t: 'Why your hacker house is failing', d: 'Jan 2026', r: '7 min', cat: 'essay' },
  { t: 'Notes on residency design', d: 'Dec 2025', r: '4 min', cat: 'notes' },
  { t: 'Touchgrass: wellness as program', d: 'Nov 2025', r: '6 min', cat: 'essay' },
  { t: 'Cohort #2: what we changed', d: 'Oct 2025', r: '8 min', cat: 'retrospective' },
  { t: 'Stealth House: 10 ships in 13 days', d: 'Sep 2025', r: '5 min', cat: 'retrospective' },
  { t: 'Ecosystem architect vs comm manager', d: 'Aug 2025', r: '6 min', cat: 'essay' },
  { t: 'On the permaweb thesis', d: 'Jul 2025', r: '9 min', cat: 'longread' },
  { t: "DM is a feature, not a fallback", d: 'Jun 2025', r: '3 min', cat: 'notes' }];

  const newsletter = [
  { n: '#23', d: 'Mar 2026', t: 'On show #4 (and why month-six is the deal)' },
  { n: '#22', d: 'Feb 2026', t: 'Five questions I keep coming back to' },
  { n: '#21', d: 'Jan 2026', t: 'A walk through Singapore HH' },
  { n: '#20', d: 'Dec 2025', t: 'End-of-year stocktake' }];

  return (
    <div className="direction">
      <MockNav current="writing" />
      <PageHero
        slug="writing"
        eyebrow="lab journal"
        title="writing as a logbook."
        sub="essays, retrospectives, half-thoughts. mostly about communities, ecosystem design, and the slow work of building things that last." />
      

      {/* featured essay */}
      <section className="wf-section" data-screen-label="writing / featured">
        <SectionHeader num="A" label="FEATURED" title="IRL → URL → permaweb" />
        <div className="sketch-box" style={{ padding: 28, background: 'var(--paper-2)' }}>
          <div className="between" style={{ marginBottom: 14 }}>
            <Kicker>essay · 5 min read · feb 2026</Kicker>
            <Stamp>open piece →</Stamp>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 36, margin: '0 0 16px', lineHeight: 1.05 }}>
            How communities evolved: IRL → URL
          </h3>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, columnCount: 2, columnGap: 28, maxHeight: 240, overflow: 'hidden', position: 'relative' }}>
            <p>
              The first era was hackathons. Sprint culture: 48 hours, free pizza, a launch tweet, and 95% of the projects forgotten by Tuesday. We optimized for visible output and accidentally
              optimized away the only thing that mattered, which was continuity.
            </p>
            <p>
              The second era was hacker houses. Co-living for a fortnight, sometimes longer. Vibe tribes formed. Founders kept building after the bus left. We learned that the room is the
              program, not the demo day.
            </p>
            <p>
              The third era — what we're inside now — is residency. Months, not days. Founders relocate. The community isn't an event with edges; it's a place. Arweave India spent three years
              learning this the hard way.
            </p>
            <p>
              What gets lost online: the unrecorded dinner. What gets gained: a permaweb that holds the conversation forever. The hybrid era is next, and it'll look unlike either.
            </p>
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
              background: 'linear-gradient(transparent, var(--paper-2))'
            }} />
          </div>
          <div className="kicker" style={{ marginTop: 10, color: 'var(--red)' }}>continue reading →</div>
        </div>
      </section>

      {/* essay index */}
      <section className="wf-section" data-screen-label="writing / index">
        <SectionHeader num="B" label="ALL ESSAYS" title="Index" />
        <div style={{ marginBottom: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['All', 'Essay', 'Notes', 'Retrospective', 'Longread'].map((t, i) =>
          <span key={t} className="kicker" style={{
            padding: '4px 10px',
            border: '1.5px solid var(--ink)',
            background: i === 0 ? 'var(--tape)' : 'var(--paper)',
            cursor: 'pointer'
          }}>{t}</span>
          )}
        </div>
        <div className="sketch-box" style={{ padding: 0 }}>
          {essays.map((e, i) =>
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '110px 1fr 120px 60px',
            gap: 14,
            padding: '14px 18px',
            borderBottom: i < essays.length - 1 ? '1px dashed var(--ink-soft)' : 'none',
            alignItems: 'baseline'
          }}>
              <span className="kicker">{e.d}</span>
              <strong style={{ fontSize: 16 }}>{e.t} {e.featured && <Stamp>featured</Stamp>}</strong>
              <span className="kicker" style={{ color: 'var(--red)' }}>{e.cat}</span>
              <span className="kicker" style={{ textAlign: 'right' }}>{e.r}</span>
            </div>
          )}
        </div>
      </section>

      {/* newsletter archive */}
      <section className="wf-section" data-screen-label="writing / newsletter">
        <SectionHeader num="C" label="NEWSLETTER" title="The dispatch archive" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)' }}>
          <div className="sketch-box" style={{ background: 'var(--paper-2)' }}>
            <Kicker>subscribe</Kicker>
            <p style={{ fontSize: 15, margin: '8px 0' }}>once a month. mostly notes. zero promo.</p>
            <div className="placeholder" style={{ height: 38 }}><span>YOUR EMAIL →</span></div>
            <div className="kicker" style={{ marginTop: 8 }}>1,847 subscribers · no spam, ever</div>
          </div>
          <div className="sketch-box">
            <Kicker>past issues</Kicker>
            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {newsletter.map((n) =>
              <div key={n.n} style={{ display: 'grid', gridTemplateColumns: '60px 80px 1fr', gap: 10, alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--font-display)', color: 'var(--red)' }}>{n.n}</span>
                  <span className="kicker">{n.d}</span>
                  <span style={{ fontSize: 14 }}>{n.t}</span>
                </div>
              )}
              <div className="kicker" style={{ textAlign: 'right' }}>see all 23 →</div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}

// ── /library ────────────────────────────────────────────────────────────────
function LibraryPage() {
  // Bigger set for the dedicated library page
  const extended = [
  ...LIBRARY_ITEMS,
  { k: 'book', t: 'Seeing Like a State', s: 'Scott' },
  { k: 'travel', t: 'Goa · debrief', s: 'Feb 2025' },
  { k: 'music', t: 'side c: ambient', s: 'rainy day' },
  { k: 'book', t: 'A Pattern Language', s: 'Alexander' },
  { k: 'bucket', t: 'Run a year-long residency', s: 'this lifetime' },
  { k: 'travel', t: 'Bangalore · HH2', s: 'Aug 2023' },
  { k: 'music', t: 'side d: dnb', s: 'late nights' },
  { k: 'book', t: 'The Studio', s: 'Glaser' }];

  return (
    <div className="direction">
      <MockNav current="library" />
      <PageHero
        slug="library"
        eyebrow="ongoing inventory"
        title="what i'm reading, listening, seeing."
        sub="a living polaroid wall. books, music, travel, things on the bucket list. drag any of them around — they stay where you put them." />
      

      {/* filter chips */}
      <section className="wf-section" data-screen-label="library / filter">
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'baseline' }}>
          <Kicker>filter</Kicker>
          {['All', 'Books', 'Music', 'Travel', 'Bucket'].map((t, i) =>
          <span key={t} className="kicker" style={{
            padding: '4px 12px',
            border: '1.5px solid var(--ink)',
            background: i === 0 ? 'var(--tape)' : 'var(--paper)',
            cursor: 'pointer',
            transform: `rotate(${(i % 2 ? 1 : -1) * 0.8}deg)`
          }}>{t}</span>
          )}
          <span className="kicker" style={{ marginLeft: 'auto' }}>{extended.length} items</span>
        </div>
      </section>

      {/* current row */}
      <section className="wf-section" data-screen-label="library / now">
        <SectionHeader num="A" label="NOW" title="What's on the desk" />
        <div className="sketch-box" style={{ padding: 18, background: 'var(--paper-2)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, alignItems: 'start' }}>
            <div>
              <Kicker>reading</Kicker>
              <Polaroid label="BOOK" caption="Bowling Alone · Putnam" size={120} rotate={-2} />
              <p style={{ fontSize: 13, marginTop: 6 }}>~60% through. notes piling up.</p>
            </div>
            <div>
              <Kicker>listening</Kicker>
              <Polaroid label="MUSIC" caption="side a: lofi study" size={120} rotate={2} />
              <p style={{ fontSize: 13, marginTop: 6 }}>weekly playlist. updates fri.</p>
            </div>
            <div>
              <Kicker>last trip</Kicker>
              <Polaroid label="TRAVEL" caption="Mussoorie · HH3" size={120} rotate={-1.5} />
              <p style={{ fontSize: 13, marginTop: 6 }}>dec '24. would go back.</p>
            </div>
            <div>
              <Kicker>bucket</Kicker>
              <Polaroid label="BUCKET" caption="Lisbon residency" size={120} rotate={1.5} />
              <p style={{ fontSize: 13, marginTop: 6 }}>someday. maybe '26.</p>
            </div>
          </div>
        </div>
      </section>

      {/* the wall */}
      <section className="wf-section" data-screen-label="library / wall">
        <SectionHeader num="B" label="THE WALL" title="Everything · scattered" />
        <div className="kicker" style={{ marginBottom: 8 }}>↕ grab any polaroid · scattered initial positions</div>
        <div style={{
          padding: '30px 16px',
          background: 'var(--paper-2)',
          border: '1.5px dashed var(--ink)',
          minHeight: 600,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 18,
          justifyContent: 'flex-start'
        }}>
          {extended.map((it, i) =>
          <Polaroid
            key={i}
            label={it.k.toUpperCase()}
            caption={`${it.t} — ${it.s}`}
            rotate={(i % 7 - 3) * 1.6}
            size={120} />

          )}
        </div>
      </section>
    </div>);

}

// ── /lets-talk ──────────────────────────────────────────────────────────────
function LetsTalkPage() {
  const slots = [
  { d: 'Thu · Mar 14', t: '10:00 IST', open: true },
  { d: 'Thu · Mar 21', t: '10:00 IST', open: true },
  { d: 'Thu · Mar 28', t: '10:00 IST', open: false },
  { d: 'Thu · Apr 04', t: '10:00 IST', open: true }];

  const channels = [
  { k: 'DM', h: '@prasansinghh', s: 'fastest. open dms.', p: 'x.com / linkedin' },
  { k: 'Email', h: 'hi@prasansingh.com', s: 'longer threads.', p: 'i read it weekly' },
  { k: 'Forum', h: '/community → anon', s: 'public, anonymous.', p: 'on the community page' },
  { k: 'Guidance', h: '15 min · weekly', s: 'free call.', p: 'book a slot below' }];

  const interests = [
  { t: 'Residencies', d: 'designing, advising, or hosting' },
  { t: 'Community design', d: 'cohort & program structure for ecosystems' },
  { t: 'Advisory', d: 'pre-seed founders, post-hackathon' },
  { t: 'Content / video', d: 'podcast guests, collabs' },
  { t: 'Speaking', d: 'panels, talks, fireside chats' },
  { t: 'Not interested in', d: 'paid promo, "quick chats", token launches' }];

  return (
    <div className="direction">
      <MockNav current="lets-talk" />
      <PageHero
        slug="lets-talk"
        eyebrow="open dms"
        title="let's talk."
        sub="reach out — i'm easy to find. here's the menu: what i'm up for, the fastest way to ping me, and the calendar." />
      

      {/* interests */}
      <section className="wf-section" data-screen-label="talk / available for">
        <SectionHeader num="A" label="AVAILABLE FOR" title="What to talk about" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gap)' }}>
          {interests.map((it, i) =>
          <div key={it.t} className="sketch-box" style={{
            background: it.t.startsWith('Not') ? 'var(--paper)' : 'var(--paper-2)',
            transform: `rotate(${i % 2 ? 0.4 : -0.4}deg)`,
            borderStyle: it.t.startsWith('Not') ? 'dashed' : 'solid'
          }}>
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: it.t.startsWith('Not') ? 'var(--ink-soft)' : 'var(--ink)' }}>
                {it.t}
              </strong>
              <p style={{ margin: '4px 0 0', fontSize: 14 }}>{it.d}</p>
            </div>
          )}
        </div>
      </section>

      {/* channels */}
      <section className="wf-section" data-screen-label="talk / channels">
        <SectionHeader num="B" label="CHANNELS" title="How to reach me" />
        <div className="sketch-box" style={{ padding: 0 }}>
          {channels.map((c, i) =>
          <div key={c.k} style={{
            display: 'grid',
            gridTemplateColumns: '110px 1.4fr 1fr 1fr',
            gap: 14,
            padding: '16px 18px',
            borderBottom: i < channels.length - 1 ? '1px dashed var(--ink-soft)' : 'none',
            alignItems: 'baseline'
          }}>
              <Stamp>{c.k}</Stamp>
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>{c.h}</strong>
              <span style={{ fontSize: 14 }}>{c.s}</span>
              <span className="kicker">{c.p}</span>
            </div>
          )}
        </div>
      </section>

      {/* booking + form */}
      <section className="wf-section" data-screen-label="talk / book + form">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)' }}>
          <div>
            <SectionHeader num="C" label="GUIDANCE CALLS" title="Book a slot · 15 min · free" />
            <div className="sketch-box" style={{ background: 'var(--paper-2)' }}>
              <p style={{ fontSize: 14, margin: '0 0 12px' }}>
                for early community builders, founders post-hackathon, anyone trying to make show #4 happen.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {slots.map((s) =>
                <div key={s.d + s.t} className="sketch-box thin" style={{
                  padding: '10px 14px',
                  display: 'flex', justifyContent: 'space-between',
                  background: s.open ? 'var(--paper)' : 'var(--paper-2)',
                  opacity: s.open ? 1 : 0.5
                }}>
                    <span><strong>{s.d}</strong> · {s.t}</span>
                    {s.open ?
                  <span className="kicker" style={{ color: 'var(--red)', cursor: 'pointer' }}>book →</span> :
                  <span className="kicker">booked</span>}
                  </div>
                )}
              </div>
              <div className="kicker" style={{ marginTop: 12 }}>not seeing a slot? dm me.</div>
            </div>
          </div>
          <div>
            <SectionHeader num="D" label="OR" title="Send a note" />
            <div className="sketch-box">
              <Kicker>your name</Kicker>
              <div className="placeholder" style={{ height: 36, marginTop: 4 }}><span>&nbsp;</span></div>
              <Kicker style={{ marginTop: 10 }}>email</Kicker>
              <div className="placeholder" style={{ height: 36, marginTop: 4 }}><span>&nbsp;</span></div>
              <Kicker style={{ marginTop: 10 }}>what's on your mind</Kicker>
              <div className="placeholder" style={{ height: 120, marginTop: 4 }}><span>&nbsp;</span></div>
              <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="kicker">no spam · reply within a week</span>
                <Stamp>send →</Stamp>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}

// ── Host ────────────────────────────────────────────────────────────────────
// ── /archive ──────────────────────────────────────────────────────────────
// The full record — organized like the @arweaveindia post audit.
// Every row opens the real X post.
const ARCHIVE = [
{ cat: 'Hacker houses', note: '5 houses · 150+ scholars from 1500+ applications', rows: [
  { d: "mar '24", t: 'HH1 recap — the first house', href: 'https://x.com/arweaveindia/status/1771120704555233743' },
  { d: "may '24", t: 'HH2 daily build logs · days 1–3', href: 'https://x.com/arweaveindia/status/1810662839033741458' },
  { d: "jun '24", t: 'HH2 recap — ARlink emerges (later $2.5M seed)', href: 'https://x.com/arweaveindia/status/1826639493417631960' },
  { d: "sep '24", t: 'HH3 announcement — AO capability cohort', href: 'https://x.com/arweaveindia/status/1849451054687203433' },
  { d: "sep '24", t: 'HH3 days 1–4 · mussoorie · touchgrass', href: 'https://x.com/arweaveindia/status/1863306756295622701' },
  { d: "sep '24", t: 'HH3 debrief series', href: 'https://x.com/arweaveindia/status/1848605224015171590' },
  { d: "apr '25", t: 'Singapore HH recap — the consumer wave', href: 'https://x.com/arweaveindia/status/1915426565326029130' }] },
{ cat: 'Major events', note: 'ADI · buildathon · AO mainnet · side events', rows: [
  { d: "jun '24", t: 'AI<>ETH mumbai — side event', href: 'https://x.com/arweaveindia/status/1790402449960038726' },
  { d: "feb '25", t: 'AO mainnet launch event', href: 'https://x.com/arweaveindia/status/1888186271182504009' },
  { d: "feb '25", t: 'AO mainnet — india tour', href: 'https://x.com/arweaveindia/status/1889298749304062251' },
  { d: "mar '25", t: 'ADI buildathon — $20k+ prize pool', href: 'https://x.com/arweaveindia/status/1772954397741621601' },
  { d: "mar '25", t: 'ADI pre-event tour — multi-city', href: 'https://x.com/arweaveindia/status/1900198767690997842' },
  { d: "apr '25", t: 'ADI announcement — flagship ecosystem event', href: 'https://x.com/arweaveindia/status/1912415152525181001' },
  { d: "apr '25", t: 'ADI day 1 recap', href: 'https://x.com/arweaveindia/status/1915785767944638533' },
  { d: "apr '25", t: 'ADI day 2 recap', href: 'https://x.com/arweaveindia/status/1916176401000018041' },
  { d: "apr '25", t: 'ADI main thread — "the permaweb is here" · 349+ attendees', href: 'https://x.com/arweaveindia/status/1916023194818859477' },
  { d: "apr '25", t: 'ADI production booths & demos', href: 'https://x.com/arweaveindia/status/1916133263170801751' }],
  more: { d: 'all', t: 'Find the complete event list on Luma', href: 'https://luma.com/arweaveindia?period=past' } },
{ cat: 'City debriefs', note: '4000+ builders · bangalore · hyderabad · vadodara', rows: [
  { d: "sep '24", t: 'debrief series — multi-city announcement', href: 'https://x.com/arweaveindia/status/1777618288958460195' },
  { d: "mar '25", t: 'vadodara debrief', href: 'https://x.com/arweaveindia/status/1788137790414454851' },
  { d: "mar '25", t: 'hyderabad debrief', href: 'https://x.com/arweaveindia/status/1788598332300120398' },
  { d: "mar '25", t: 'bangalore debrief', href: 'https://x.com/arweaveindia/status/1790041430662287391' }],
  more: { d: '+48', t: '48 more debriefs — full event calendar on Luma', href: 'https://luma.com/arweaveindia?period=past' } },
{ cat: 'Launchpad', note: '3-month incubation · 40+ founders', rows: [
  { d: "oct '23", t: 'launchpad cohort 1 — announcement', href: 'https://x.com/arweaveindia/status/1761416353955877299' }] },
{ cat: 'Community & culture', note: 'the parts that made it stick', rows: [
  { d: "nov '23", t: 'AO ideation office hours — w/ sam williams', href: 'https://x.com/arweaveindia/status/1744783197484020144' },
  { d: "dec '23", t: "the winston awards · edition '23", href: 'https://x.com/arweaveindia/status/1732826171128357146' },
  { d: "sep '24", t: 'community vibes — HH3 closing', href: 'https://x.com/arweaveindia/status/1859283190072082666' },
  { d: "sep '24", t: 'touchgrass — wellness as program infra', href: 'https://x.com/arweaveindia/status/1863617875250135324' },
  { d: "oct '24", t: 'cool gifts — community swag drop', href: 'https://x.com/arweaveindia/status/1844392370114330661' },
  { d: "dec '24", t: "the winston awards · edition '24", href: 'https://x.com/arweaveindia/status/1869735063094775853' }] },
{ cat: 'Long-form', note: 'patch notes · X articles · transparent updates', rows: [
  { d: "oct '24", t: 'patch notes 2.1 — program evolution (X article)', href: 'https://x.com/arweaveindia' },
  { d: "dec '24", t: 'patch notes 2.2 — year-close update (X article)', href: 'https://x.com/arweaveindia' }] },
{ cat: 'In progress', note: 'projects still building — moved out of the work portfolio', rows: [
  { d: 'building', t: 'Convergent — AO compute coordination · HH3', href: 'https://arweaveindia.com' },
  { d: 'building', t: 'AOLearn — education for AO devs · Launchpad', href: 'https://arweaveindia.com' },
  { d: 'building', t: 'Ctrl Play — onchain gaming primitive · Stealth House', href: 'https://arweaveindia.com' }] }];

function ArchivePage() {
  return (
    <div className="direction" data-comment-anchor="01b546e07b-div-689-5">
      <MockNav />
      <PageHero
        slug="archive"
        eyebrow="the full record"
        title="every claim has a receipt."
        sub="2.5 years of arweave india, documented in public as it happened — 90+ posts across hacker houses, events, debriefs and culture. this is the organized index. every row opens the real post." />
      

      {/* account overview */}
      <section className="wf-section" data-screen-label="archive / account">
        <SectionHeader num="A" label="THE SOURCE" title="@arweaveindia" />
        <div className="sketch-box m1" style={{ background: 'var(--paper-2)', display: 'grid', gridTemplateColumns: '1.1fr 1.6fr', gap: 'var(--gap)', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 15, margin: 0 }}>{X_STATS.note}</p>
            <div style={{ marginTop: 12 }}>
              <a href={X_STATS.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><Stamp>open the account ↗</Stamp></a>
            </div>
          </div>
          <div className="m2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {X_STATS.rows.map((s, i) =>
            <div key={i} className="sketch-box thin" style={{ textAlign: 'center', padding: '12px 8px', background: 'var(--paper)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--red)' }}>{s.v}</div>
                <div className="kicker">{s.l}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* categories */}
      {ARCHIVE.map((c, ci) =>
      <section key={c.cat} className="wf-section" data-screen-label={`archive / ${c.cat}`}>
          <SectionHeader num={String.fromCharCode(66 + ci)} label={c.note.toUpperCase()} title={c.cat} />
          <div className="sketch-box" style={{ padding: 0 }}>
            {c.rows.map((r, i) =>
          <a key={i} href={r.href} target="_blank" rel="noreferrer" className="archive-row" style={{
            display: 'grid', gridTemplateColumns: '90px 1fr 110px', gap: 14,
            padding: '12px 18px', alignItems: 'baseline',
            borderBottom: i < c.rows.length - 1 ? '1px dashed var(--ink-soft)' : 'none',
            textDecoration: 'none', color: 'inherit'
          }}>
                <span className="kicker">{r.d}</span>
                <strong style={{ fontSize: 15 }}>{r.t}</strong>
                <span className="kicker" style={{ color: 'var(--red)', textAlign: 'right' }}>open post ↗</span>
              </a>
          )}
            {c.more &&
          <a href={c.more.href} target="_blank" rel="noreferrer" className="archive-row" style={{
            display: 'grid', gridTemplateColumns: '90px 1fr 110px', gap: 14,
            padding: '12px 18px', alignItems: 'baseline',
            borderTop: '1.5px dashed var(--ink)', background: 'var(--paper-2)',
            textDecoration: 'none', color: 'inherit'
          }}>
                <span className="kicker" style={{ color: 'var(--red)' }}>{c.more.d}</span>
                <strong style={{ fontSize: 15 }}>{c.more.t}</strong>
                <span className="kicker" style={{ color: 'var(--red)', textAlign: 'right' }}>Luma ↗</span>
              </a>
          }
          </div>
        </section>
      )}

      {/* outro */}
      <section className="wf-section" data-screen-label="archive / outro">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <a href="./Arweave India Timeline.html" style={{ textDecoration: 'none' }}><Stamp>prefer the short version? · 2.5-year arc →</Stamp></a>
          <SectionCTA note="convinced?" />
        </div>
      </section>
    </div>);

}

const PAGE_COMPS = {
  community: CommunityPage,
  work: WorkPage,
  writing: WritingPage,
  library: LibraryPage,
  'lets-talk': LetsTalkPage,
  archive: ArchivePage
};

function SubpagesApp() {
  // Read hash on load (no leading #, no leading slash). Default to community.
  const getHash = () => {
    const h = (window.location.hash || '#community').replace(/^#\/?/, '');
    return PAGE_COMPS[h] ? h : 'community';
  };
  const [slug, setSlug] = React.useState(getHash);

  React.useEffect(() => {
    const onHash = () => setSlug(getHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Default tweaks for the subpages (theme + density + fonts).
  const [t, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "theme": "light",
    "fontPair": "marker",
    "density": "cozy"
  } /*EDITMODE-END*/);

  React.useEffect(() => {
    document.documentElement.dataset.theme = t.theme;
    document.documentElement.dataset.density = t.density;
  }, [t.theme, t.density]);

  // The mock nav's ☀/☾ button dispatches this event.
  React.useEffect(() => {
    const h = () => setTweak('theme', t.theme === 'dark' ? 'light' : 'dark');
    window.addEventListener('pp-toggle-theme', h);
    return () => window.removeEventListener('pp-toggle-theme', h);
  }, [t.theme]);

  React.useEffect(() => {
    const FONT_PAIRS = {
      marker: { display: '"Permanent Marker", "Marker Felt", cursive', body: '"Kalam", "Caveat", cursive', label: '"Architects Daughter", monospace' },
      caveat: { display: '"Caveat", "Patrick Hand", cursive', body: '"Patrick Hand", "Kalam", cursive', label: '"Shadows Into Light", monospace' },
      shadow: { display: '"Shadows Into Light Two", cursive', body: '"Indie Flower", cursive', label: '"Special Elite", monospace' },
      rough: { display: '"Rock Salt", cursive', body: '"Caveat", cursive', label: '"Cutive Mono", monospace' }
    };
    const f = FONT_PAIRS[t.fontPair] || FONT_PAIRS.marker;
    document.documentElement.style.setProperty('--font-display', f.display);
    document.documentElement.style.setProperty('--font-body', f.body);
    document.documentElement.style.setProperty('--font-label', f.label);
  }, [t.fontPair]);

  const PageComp = PAGE_COMPS[slug];

  return (
    <div data-screen-label={`subpage · ${slug}`}>
      <div className="tab-bar">
        {SUBPAGES.map((p) =>
        <a key={p.slug} href={`#${p.slug}`}
        className={`tab ${slug === p.slug ? 'active' : ''}`}
        title={p.desc}
        style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="num">{p.num}</span>{p.name}
          </a>
        )}
        <div style={{ flex: 1 }} />
        <a href="./prasansingh wireframes.html" className="tab"
        style={{ textDecoration: 'none', color: 'inherit', background: 'var(--tape)' }}
        title="back to home wireframes">
          <span className="num">←</span>home wires
        </a>
      </div>
      <div className="tab-rule" />

      <PageComp />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Page" />
        <TweakSelect label="Subpage" value={slug}
        options={SUBPAGES.map((p) => ({ value: p.slug, label: p.name }))}
        onChange={(v) => {window.location.hash = v;}} />
        <TweakSection label="Theme" />
        <TweakRadio label="Mode" value={t.theme} options={[{ value: 'light', label: 'day' }, { value: 'dark', label: 'midnight' }]} onChange={(v) => setTweak('theme', v)} />
        <TweakSelect label="Font pairing" value={t.fontPair}
        options={[
        { value: 'marker', label: 'Marker · Kalam' },
        { value: 'caveat', label: 'Caveat · Patrick' },
        { value: 'shadow', label: 'Shadows · Indie' },
        { value: 'rough', label: 'Rock Salt · Caveat' }]
        } onChange={(v) => setTweak('fontPair', v)} />
        <TweakRadio label="Density" value={t.density} options={['compact', 'cozy']} onChange={(v) => setTweak('density', v)} />
      </TweaksPanel>
    </div>);

}

window.SubpagesApp = SubpagesApp;