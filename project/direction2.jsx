// direction2.jsx — "Scrapbook"
// Heavy collage. Overlapping polaroids, washi tape everywhere, ticket stubs,
// sticky notes, torn-paper edges. Less grid, more layered.

function D2_Hero({ hero }) {
  return (
    <div style={{ position: 'relative' }}>
      <MockNav />
      <div className="hero-grid" style={{ marginTop: 24 }}>
        {/* LEFT — the pitch. readable in three seconds. */}
        <div className="d2-torn" style={{ position: 'relative' }}>
          <Tape top={-12} left="24%" rotate={-6} />
          <Kicker>ecosystem architect · field notes</Kicker>
          {hero === 'quote' ?
          <>
              <h1 className="d2-h1" style={{ fontStyle: 'italic' }}>"{QUOTE}"</h1>
              <p className="d2-sub">— prasan</p>
            </> :
          hero === 'portrait' ?
          <div style={{ display: 'flex', gap: 18 }}>
              <Polaroid id="hero-me" label="ME" caption="hi." size={110} rotate={-3} />
              <div>
                <h1 className="d2-h1">hey, i'm prasan.</h1>
                <p className="d2-manifesto">{MANIFESTO}</p>
              </div>
            </div> :

          <>
              <h1 className="d2-h1">hey, i'm <span style={{ background: 'var(--tape)', padding: '0 8px' }}>prasan</span>.</h1>
              <p className="d2-manifesto" data-comment-anchor="e4d5d17831-p-31-15">{MANIFESTO}</p>
            </>
          }
          <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            <span className="kicker" style={{ color: 'var(--red)' }}>open to</span>
            {['ecosystem lead', 'global events lead', 'community lead', 'events & ops'].map((r, i) =>
            <span key={r} className="kicker" style={{ border: '1.5px solid var(--ink)', padding: '3px 10px', background: 'var(--paper-2)', transform: `rotate(${(i % 2 ? 1 : -1) * 1.2}deg)` }}>{r}</span>
            )}
          </div>
          <p className="annot rot-l" style={{ marginTop: 14, fontSize: 15 }}>
            hiring for one of these?{' '}
            <a href={CONTACTS.cal.href} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>book 15 min →</a> ·{' '}
            <a href={CONTACTS.li.href} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>linkedin →</a> ·{' '}
            <a href={CONTACTS.x.href} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>dm on 𝕏</a>
          </p>
        </div>

        {/* RIGHT — one visual. the intro video. */}
        <div className="hero-visual m-hide">
          <div className="sketch-box" style={{ padding: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span className="kicker">INTRO</span>
              <span className="kicker">▶ play</span>
            </div>
            <div style={{ position: 'relative' }}>
              <Placeholder id="hero-intro" label="▶ DROP INTRO VIDEO" src="media/hh2-cohort.jpg" h={320} w="100%" />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'rgba(250,249,247,0.92)', border: '2px solid var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, paddingLeft: 3 }}>▶</div>
              </div>
            </div>
          </div>
          {/* ADI polaroid — hangs outside the bottom-right corner */}
          <div style={{ position: 'absolute', bottom: -26, right: -18, zIndex: 7 }}>
            <Polaroid id="hero-adi" label="ADI · DAY 2" caption="Global team dinner" rotate={6} size={116} draggable={false} />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 60 }}>
        <Ticker items={TICKER_ITEMS} />
      </div>

      {/* impact band — the record. every number opens the real post. */}
      <div className="impact-band">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
          <Kicker>the record · 2023 → 2026</Kicker>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {IMPACT_BAND.map((s, i) =>
          <a key={i} href={s.href} target="_blank" rel="noreferrer" className="impact-chip" style={{ transform: `rotate(${(i % 2 ? 1 : -1) * 0.8}deg)` }}>
              <span className="impact-v">{s.v}</span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span className="kicker" style={{ color: 'var(--ink)' }}>{s.l}</span>
                <span className="kicker" style={{ color: 'var(--red)' }}>proof ↗</span>
              </span>
            </a>
          )}
        </div>
      </div>
    </div>);

}

function D2_WhatIDo() {
  return (
    <div>
      <div className="m1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, alignItems: 'flex-start' }}>
        {PILLARS.map((p, i) =>
        <div key={p.k} className="card-hover" style={{ position: 'relative', transform: `rotate(${(i - 1) * 1.5}deg)` }}>
            <Tape top={-10} left="50%" rotate={i % 2 ? -10 : 8} color={['#f4d35e', '#b6d4f0', '#f5b6c4'][i]} />
            <div className="sketch-box" style={{ background: 'var(--paper-2)' }}>
              <div className="kicker" style={{ color: 'var(--red)' }}>pillar 0{i + 1}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 36, margin: '8px 0' }}>{p.k}</h3>
              <p style={{ margin: 0, fontSize: 16 }}>{p.d}</p>
              <div className="muted" style={{ fontSize: 14, marginTop: 12 }}>
                e.g.{' '}
                <a href={p.eHref} target={p.eHref.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              style={{ color: 'inherit', textDecorationStyle: 'dotted', textUnderlineOffset: '3px' }}>{p.e}</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>);

}

function D2_Journey() {
  return (
    <div>
      {/* curved trail map — imported from Map Journey direction */}
      <div className="sketch-box" style={{ padding: '20px 18px', background: 'var(--paper)' }} data-comment-anchor="1cb2a7a086-div-130-7">
        <Kicker>route map · 3 + 1 eras</Kicker>
        <svg viewBox="0 0 800 220" style={{ width: '100%', height: 220, marginTop: 8 }}>
          {/* contour rings for vibe */}
          <g opacity="0.18">
            <ellipse cx="160" cy="110" rx="60" ry="30" fill="none" stroke="var(--ink)" strokeWidth="0.5" />
            <ellipse cx="160" cy="110" rx="90" ry="45" fill="none" stroke="var(--ink)" strokeWidth="0.5" />
            <ellipse cx="540" cy="100" rx="60" ry="30" fill="none" stroke="var(--ink)" strokeWidth="0.5" />
            <ellipse cx="540" cy="100" rx="90" ry="45" fill="none" stroke="var(--ink)" strokeWidth="0.5" />
          </g>
          {/* hand-drawn trail */}
          <path d="M50 160 Q 150 70 280 140 T 540 100 T 760 140"
          fill="none" stroke="var(--ink)" strokeWidth="2.2"
          strokeDasharray="6 5" strokeLinecap="round" data-comment-anchor="9c4ad8da96-path-148-11" />
          {JOURNEY.map((j, i) => {
            const positions = [[50, 160], [270, 140], [540, 100], [760, 140]];
            const [cx, cy] = positions[i];
            return (
              <g key={j.title}>
                <circle className="route-dot" style={{ animationDelay: `${i * 0.35}s` }} cx={cx} cy={cy} r="10" fill="var(--red)" stroke="var(--ink)" strokeWidth="1.8" />
                <text x={cx} y={cy + 36} textAnchor="middle" fontSize="16" fontFamily="var(--font-display)" fill="var(--ink)">{j.title.length > 14 ? j.title.split(' ')[0] : j.title}</text>
                <text x={cx} y={cy - 18} textAnchor="middle" fontSize="10" fontFamily="var(--font-label)" fill="var(--ink-soft)" letterSpacing="0.1em">{j.year}</text>
                {i < JOURNEY.length - 1 && positions[i + 1] &&
                <text x={(cx + positions[i + 1][0]) / 2} y={Math.min(cy, positions[i + 1][1]) - 26}
                textAnchor="middle" fontSize="9" fontFamily="var(--font-label)"
                fill="var(--ink-soft)" letterSpacing="0.1em">→</text>
                }
              </g>);

          })}
        </svg>
        <div className="m2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--gap)', marginTop: 14 }}>
          {JOURNEY.map((j) =>
          <div key={j.title}>
              <div className="kicker" style={{ color: 'var(--red)' }}>{j.era}</div>
              <strong style={{ fontSize: 16 }}>{j.title}</strong>
              <p style={{ margin: '4px 0 0', fontSize: 13 }}>{j.blurb}</p>
            </div>
          )}
        </div>
      </div>
      <div className="m1" style={{ marginTop: 'var(--gap)', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--gap)' }}>
        <div style={{ position: 'relative' }}>
          <Tape top={-12} left="14%" />
          <div className="sketch-box" style={{ background: 'var(--paper-2)' }}>
            <Kicker>essay · long form</Kicker>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, margin: '8px 0' }}>
              How communities evolved: IRL → URL
            </h3>
            <p style={{ fontSize: 15, margin: '6px 0' }}>
              hackathons → hacker houses → residencies → ? a piece tracing the shift, with arweave india as the case study.
            </p>
            <Stamp>read · 5 min</Stamp>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Sticky color="pink" rotate={-2}>
            <strong>Hacker House 01 →</strong><br />
            HH1 BetterIDEa · 0rbit · LiteSeed
          </Sticky>
          <Sticky color="green" rotate={2}>
            HH2 → <b>ARlink · later raised $2.5M</b>
          </Sticky>
          <Sticky color="" rotate={-1}>
            HH3 touchgrass · HH4 mainnet · Singapore HH consumer
          </Sticky>
          <Sticky color="blue" rotate={1}>
            ADI · 349 attendees · sam williams
          </Sticky>
        </div>
      </div>
      <div style={{ marginTop: 14, display: 'flex', justifyContent: 'flex-end' }}>
        <a href="./Arweave India Timeline.html" onClick={(e) => pageNav(e, './Arweave India Timeline.html')} style={{ textDecoration: 'none' }}><Stamp>compiled work →</Stamp></a>
      </div>
    </div>);

}

// Footage wall data — front caption + the story on the back.
const REELS = [
{ id: 'reel-01', label: 'CLIP · 01', cap: 'hh2 sunrise', ctx: "hacker house 2 — sunrise after an all-night build. this is the cohort that shipped ARlink, which went on to raise $2.5M." },
{ id: 'reel-02', label: 'CLIP · 02', cap: 'Open classroom', ctx: 'open classroom — where the discussions left the presentation screens behind to let from others experience. (helped in better story telling)' },
{ id: 'reel-03', label: 'CLIP · 03', cap: 'Stealth House dinner', ctx: 'stealth house dinner — final dinner with SH participants, who all were strangers 15 days back, sharing meals and making life time memories. ' },
{ id: 'reel-04', label: 'CLIP · 04', cap: 'Clickoor Box', ctx: 'the clickoor box — a fun project team took on as a challenge to preserve the memories online forever. A well deserved prize for debrief activity winners.' },
{ id: 'reel-05', label: 'CLIP · 05', cap: 'Open design \ndiscussions', ctx: "open design discussions — builders critiquing each other's work in the open, kindly. Helps in learning how to take constructive feedbacks." },
{ id: 'reel-06', label: 'CLIP · 06', cap: 'Mussoorie touchgrass', ctx: "hh2 · mussoorie, July '24 — the touch-grass edition. a full day with zero laptops.\nThis got global ecosystem recognition." },
{ id: 'reel-07', label: 'CLIP · 07', cap: 'ADI · day 2', ctx: 'arweave day india, day 2 — 349+ attendees and a sam williams keynote, with 3:2 international to indian attendee.' },
{ id: 'reel-08', label: 'CLIP · 08', cap: 'HH4 · ice breakers', ctx: 'hacker house 4 ICE BREAKERS — the hour before everyone lockedin for the best time for the next couple days and later on months. ' },
{ id: 'reel-09', label: 'CLIP · 09', cap: 'Singapore Boat gathering', ctx: 'Founders Boat meetup -- Singapre 2025\nYes, Singapore has a river, a high intent networking event to foster collaborations..literally no where to escape lol.' },
{ id: 'reel-10', label: 'CLIP · 10', cap: 'demo day', ctx: 'demo day — final pitches, where each cohort meets the wider ecosystem.\nKey step to building investor relations are well built products and Demos. ' }];


// Flippable polaroid — front is the photo (still a drop target), back is the
// story. Flip via the corner "story" tab so clicks on the photo keep working
// for image drops/replacement; click anywhere on the back to flip home.
function FlipPolaroid({ id, label, caption, context, size = 170 }) {
  const [flipped, setFlipped] = React.useState(false);
  return (
    <div className="flip-pol" data-flipped={flipped ? '1' : undefined} style={{ width: size + 22 }}>
      <div className="flip-pol-inner">
        <div className="flip-pol-face flip-pol-front">
          <Polaroid id={id} label={label} caption={caption} size={size} draggable={false} />
          <button type="button" className="flip-pol-btn" onClick={() => setFlipped(true)}>story ↻</button>
        </div>
        <div
          className="flip-pol-face flip-pol-back" role="button" tabIndex={0}
          onClick={() => setFlipped(false)}
          onKeyDown={(e) => {if (e.key === 'Enter' || e.key === ' ') {e.preventDefault();setFlipped(false);}}}>
          <div className="kicker" style={{ color: 'var(--red)' }}>{label}</div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.45 }}>{context}</p>
          <span className="kicker" style={{ marginTop: 'auto', opacity: 0.6 }}>flip back ↺</span>
        </div>
      </div>
    </div>);

}

function D2_Proof() {
  return (
    <div>
      {/* receipts wall — curated. every card opens the real post. */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
        <Kicker>the receipts · curated</Kicker>
        <span className="annot rot-r" style={{ fontSize: 13 }}>← every card opens the real post · full archive on its own page</span>
      </div>
      <div className="m2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {RECEIPTS.map((r, i) =>
        <a key={i} href={r.href} target="_blank" rel="noreferrer" className="receipt" style={{ transform: `rotate(${(i % 2 ? 1 : -1) * 0.7}deg)` }}>
            <Tape top={-9} left="50%" rotate={i % 2 ? -8 : 7} color={['#f4d35e', '#b6d4f0', '#f5b6c4', '#b8dfb0'][i % 4]} width={42} />
            <div className="between">
              <Stamp>{r.tag}</Stamp>
              <span className="kicker">{r.date}</span>
            </div>
            <strong style={{ fontSize: 15, display: 'block', margin: '10px 0 4px', lineHeight: 1.25 }}>{r.t}</strong>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4 }}>{r.b}</p>
            <div className="kicker" style={{ marginTop: 10, color: 'var(--red)' }}>view post ↗</div>
          </a>
        )}
      </div>
      <div style={{ marginTop: 14, display: 'flex', justifyContent: 'flex-end', gap: 14, flexWrap: 'wrap' }}>
        <a href="./subpages.html#archive" onClick={(e) => pageNav(e, './subpages.html#archive')} style={{ textDecoration: 'none' }}><Stamp>full archive · 90+ posts →</Stamp></a>
        <a href="./Arweave India Timeline.html" onClick={(e) => pageNav(e, './Arweave India Timeline.html')} style={{ textDecoration: 'none' }}><Stamp>2.5-year arc · one-pager →</Stamp></a>
      </div>

      {/* the feed is the proof — @arweaveindia reach */}
      <div style={{ marginTop: 30, position: 'relative' }}>
        <Tape top={-10} left="16%" rotate={-6} color="#b6d4f0" />
        <div className="sketch-box m1" style={{ background: 'var(--paper-2)', display: 'grid', gridTemplateColumns: '1.1fr 1.6fr', gap: 'var(--gap)', alignItems: 'center' }}>
          <div>
            <Kicker>the feed is the proof</Kicker>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 30, margin: '8px 0 6px' }}>{X_STATS.handle}</h3>
            <p style={{ fontSize: 15, margin: 0 }}>{X_STATS.note}</p>
            <div style={{ marginTop: 12 }}>
              <a href={X_STATS.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><Stamp>open the account ↗</Stamp></a>
            </div>
          </div>
          <div className="m2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {X_STATS.rows.filter((s) => /^(posts|impressions)/.test(s.l)).map((s, i) =>
            <div key={i} className="sketch-box thin card-hover" style={{ textAlign: 'center', padding: '14px 8px', background: 'var(--paper)', transform: `rotate(${(i % 2 ? 1 : -1) * 0.5}deg)` }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: 'var(--red)' }}>{s.v}</div>
                <div className="kicker">{s.l}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* community in motion — flippable footage wall */}
      <div style={{ marginTop: 30 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
          <Kicker>community in motion</Kicker>
          <span className="annot rot-r" style={{ fontSize: 13 }}>← hit "story" to flip a photo</span>
        </div>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 10,
          padding: '14px', background: 'var(--paper-2)', border: '1.5px dashed var(--ink)'
        }} data-comment-anchor="8fcf5f3e80-div-261-9">
          {REELS.map((r, i) =>
          <div key={r.id} style={{ transform: `rotate(${(i % 2 ? 1 : -1) * 1.2}deg)` }}>
              <FlipPolaroid id={r.id} label={r.label} caption={r.cap} context={r.ctx} size={170} />
            </div>
          )}
        </div>
      </div>

      <div className="sketch-box" style={{ marginTop: 26 }}>
        <Kicker>nerd corner · research papers</Kicker>
        <ul style={{ paddingLeft: 18, margin: '8px 0 0', fontSize: 15 }}>
          <li>On the permaweb thesis (2023)</li>
          <li>AO: actor-model compute (2024)</li>
          <li>DePIN markets for permanent storage</li>
          <li>Cohort design as ecosystem infra</li>
        </ul>
      </div>

      {/* the big ask — right after the proof */}
      <div style={{ marginTop: 34, position: 'relative' }}>
        <Tape top={-12} left="30%" rotate={-5} />
        <Tape top={-12} left="68%" rotate={6} color="#f5b6c4" />
        <div className="sketch-box" style={{ padding: '34px 28px', textAlign: 'center', background: 'var(--paper-2)' }}>
          <Kicker>seen the receipts?</Kicker>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', margin: '10px 0 8px', lineHeight: 1.1 }}>
            need the next ecosystem program, flagship event, or community engine built?
          </h3>
          <p style={{ fontSize: 16, margin: '0 auto 18px', maxWidth: '52ch' }}>open to ecosystem lead · global events lead · community lead · events & ops roles — full-time, long-term.

          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <Sticky color="" rotate={-1.5} style={{ maxWidth: 460, textAlign: 'left' }}>
              <strong>the organisational end, too.</strong><br />
              i design cohorts end to end — setting expectations, finding the right venues, and building the participation funnels that fill them.
            </Sticky>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <a className="cta-btn" href={CONTACTS.cal.href} target="_blank" rel="noreferrer">book 15 min →</a>
            <a className="cta-btn alt" href={CONTACTS.li.href} target="_blank" rel="noreferrer">linkedin →</a>
            <a className="cta-btn alt" href={CONTACTS.x.href} target="_blank" rel="noreferrer">dm @prasansinghh →</a>
          </div>
          <p className="annot rot-r" style={{ marginTop: 12, fontSize: 13 }}>☜ prasan — add "download cv (pdf)" here once the one-pager is ready</p>
        </div>
      </div>
    </div>);

}

function D2_CaseStudy() {
  return (
    <div style={{ position: 'relative' }}>
      <Tape top={-12} left="30%" rotate={-5} />
      <Tape top={-12} left="75%" rotate={6} color="#b6d4f0" />
      <div className="sketch-box" style={{ background: 'var(--paper-2)', padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 560 }}>
            <Kicker>{CASE_STUDY.kicker}</Kicker>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 34, margin: '8px 0 6px', lineHeight: 1.1 }}>{CASE_STUDY.title}</h3>
            <p className="muted" style={{ fontSize: 15, margin: 0 }}>{CASE_STUDY.sub}</p>
          </div>
          <div style={{ transform: 'rotate(2deg)', border: '2.5px solid var(--red)', padding: '10px 18px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--red)', lineHeight: 1 }}>{CASE_STUDY.outcome.v}</div>
            <div className="kicker" style={{ marginTop: 4 }}>{CASE_STUDY.outcome.l}</div>
          </div>
        </div>

        {/* my role — ownership clarity */}
        <div className="sketch-box thin" style={{ background: 'var(--paper)', marginTop: 18 }}>
          <div className="between" style={{ alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
            <div className="kicker" style={{ color: 'var(--red)' }}>my role · what i owned</div>
            <div className="kicker">solo program lead · end to end</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px 24px', marginTop: 12 }}>
            {[
            'curated the cohort — 14 builders from 60 applications',
            'designed the residential program structure',
            'built the daily shipping rhythm',
            'coordinated demo day end to end',
            'supported founder follow-through after the house',
            'documented the public narrative'].
            map((r, i) =>
            <div key={i} style={{ display: 'flex', gap: 8, fontSize: 14, lineHeight: 1.35 }}>
                <span style={{ color: 'var(--red)', fontFamily: 'var(--font-display)' }}>✓</span>
                <span>{r}</span>
              </div>
            )}
          </div>
        </div>

        {/* timeline strip */}
        <div className="m1" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginTop: 22 }}>
          {CASE_STUDY.steps.map((s, i) =>
          <div key={s.tag} style={{ position: 'relative', transform: `rotate(${i % 2 ? 0.8 : -0.8}deg)` }}>
              <Tape top={-10} left="50%" rotate={i % 2 ? 7 : -7} color={['#f4d35e', '#b6d4f0', '#f5b6c4', '#b8dfb0'][i]} width={44} />
              <div className="sketch-box thin" style={{ background: 'var(--paper)', minHeight: 120 }}>
                <span className="kicker" style={{ color: 'var(--red)' }}>{s.tag}</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, margin: '4px 0' }}>{s.t}</div>
                <p style={{ margin: 0, fontSize: 14 }}>{s.b}</p>
              </div>
              {i < CASE_STUDY.steps.length - 1 &&
            <Arrow dir="→" style={{ position: 'absolute', right: -16, top: '45%', zIndex: 2 }} />
            }
            </div>
          )}
        </div>

        {/* artifacts + decisions */}
        <div className="m1" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 'var(--gap)', marginTop: 24, alignItems: 'flex-start' }}>
          <div>
            <Kicker>artifacts · from the archive</Kicker>
            <div style={{ display: 'flex', gap: 14, marginTop: 10, flexWrap: 'wrap' }}>
              {CASE_STUDY.artifacts.map((a, i) =>
              <Polaroid key={a.label} id={`case-art-${i}`} label={a.label} caption={a.cap} size={120} rotate={(i - 1) * 3} draggable={false} />
              )}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Kicker>what actually mattered</Kicker>
            {CASE_STUDY.decisions.map((d, i) =>
            <Sticky key={d.t} color={i ? 'green' : 'pink'} rotate={i ? 1.5 : -1.5}>
                <strong>{d.t}</strong><br />{d.b}
              </Sticky>
            )}
            <Stamp>read the full story →</Stamp>
          </div>
        </div>
      </div>
    </div>);

}

function D2_Awards() {
  return (
    <div style={{ position: 'relative' }}>
      <Tape top={-12} left="12%" rotate={-7} color="#f5b6c4" />
      <Tape top={-12} left="70%" rotate={5} color="#f4d35e" />
      <div className="sketch-box m1" style={{ background: 'var(--paper-2)', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'var(--gap)', alignItems: 'center' }}>
        <div>
          <Kicker>personal IP · yearly</Kicker>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 42px)', margin: '6px 0 8px', lineHeight: 1.1 }}>{WINSTON_AWARDS.t} ✦</h3>
          <p style={{ fontSize: 16, margin: 0, maxWidth: '48ch' }}>{WINSTON_AWARDS.b}</p>
        </div>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          {WINSTON_AWARDS.editions.map((e, i) =>
          <a key={e.y} href={e.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Polaroid id={`award-${i}`} label={e.y.toUpperCase()} caption="watch the thread →" size={150} rotate={i ? 3 : -3} draggable={false} />
            </a>
          )}
        </div>
      </div>
    </div>);

}

function LessonCard({ l, i }) {
  const [flipped, setFlipped] = React.useState(false);
  const color = ['', 'pink', 'blue', 'green', ''][i % 5];
  const toggle = () => setFlipped((f) => !f);
  return (
    <div className="lesson-flip" data-flipped={flipped ? '1' : undefined}
    onClick={toggle} role="button" tabIndex={0}
    onKeyDown={(e) => {if (e.key === 'Enter' || e.key === ' ') {e.preventDefault();toggle();}}}>
      <div className="lesson-flip-inner">
        <div className="lesson-face">
          <Sticky color={color} style={{ height: '100%', boxSizing: 'border-box', position: 'relative' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--red)' }}>{l.n}</span>
              <strong style={{ fontSize: 17 }}>{l.t}</strong>
            </div>
            <p style={{ margin: '4px 0 0', fontSize: 15 }}>{l.b}</p>
            <span className="kicker lesson-hint">why ↻</span>
          </Sticky>
        </div>
        <div className="lesson-face lesson-back">
          <Sticky color={color} style={{ height: '100%', boxSizing: 'border-box', position: 'relative' }}>
            <div className="kicker" style={{ color: 'var(--red)' }}>why · {l.n}</div>
            <p style={{ margin: '6px 0 0', fontSize: 13.5, lineHeight: 1.45 }}>{l.w}</p>
            <span className="kicker lesson-hint">back ↺</span>
          </Sticky>
        </div>
      </div>
    </div>);

}

function D2_Lessons() {
  return (
    <div className="lessons-wall" style={{ position: 'relative', minHeight: 400 }}>
      <style>{`
        .lesson-flip { perspective: 1100px; cursor: pointer; height: 172px; outline: none; }
        .lesson-flip-inner { position: relative; width: 100%; height: 100%;
          transition: transform 0.55s cubic-bezier(.2,.7,.2,1); transform-style: preserve-3d; }
        .lesson-flip[data-flipped] .lesson-flip-inner { transform: rotateY(180deg); }
        .lesson-face { position: absolute; inset: 0; -webkit-backface-visibility: hidden; backface-visibility: hidden; transition: opacity 0.3s ease; }
        .lesson-back { transform: rotateY(180deg); }
        .lesson-flip:not([data-flipped]) .lesson-back { opacity: 0; }
        .lesson-flip[data-flipped] .lesson-face:not(.lesson-back) { opacity: 0; }
        .lesson-hint { position: absolute; bottom: 8px; right: 12px; opacity: 0.6; }
        @media (prefers-reduced-motion: reduce) { .lesson-flip-inner { transition: none; } }
      `}</style>
      {LESSONS.map((l, i) => {
        const cols = 3;
        const r = Math.floor(i / cols);
        const c = i % cols;
        return (
          <div key={l.n} className="lesson-note" style={{
            position: 'absolute',
            left: `${c * 32 + 1}%`,
            top: r * 192 + 10,
            width: '30%',
            transform: `rotate(${i % 2 ? 2 : -2}deg)`,
            zIndex: i
          }}>
            <LessonCard l={l} i={i} />
          </div>);

      })}
    </div>);

}

// Reads the natural aspect ratio (w/h) of whatever image the user has
// dropped into an <image-slot>. image-slot keeps its <img> in an open
// shadow root and doesn't bubble a load event, so we reach in directly:
// watch the host's data-filled attribute, then read naturalWidth/Height
// off the inner img once it has decoded. Returns null until known, so
// callers can fall back to a default box.
function useImageSlotRatio(hostRef) {
  const [ratio, setRatio] = React.useState(null);

  React.useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let raf = 0;
    const read = () => {
      const img = host.shadowRoot && host.shadowRoot.querySelector('.frame img');
      if (host.hasAttribute('data-filled') && img && img.naturalWidth && img.naturalHeight) {
        setRatio(img.naturalWidth / img.naturalHeight);
      } else {
        setRatio(null);
        // naturalWidth is 0 until the image decodes — re-poll next frame.
        if (host.hasAttribute('data-filled') && img && !img.naturalWidth) {
          raf = requestAnimationFrame(read);
        }
      }
    };

    const mo = new MutationObserver(read);
    mo.observe(host, { attributes: true, attributeFilter: ['data-filled'] });

    const img = host.shadowRoot && host.shadowRoot.querySelector('.frame img');
    if (img) img.addEventListener('load', read);
    read();

    return () => {
      mo.disconnect();
      if (raf) cancelAnimationFrame(raf);
      if (img) img.removeEventListener('load', read);
    };
  }, []);

  return ratio;
}

// An <image-slot> that adapts its height to the dropped image's true
// aspect ratio. Before a drop it shows a default-height placeholder; once
// filled it reflows to the image's proportions so nothing is cropped.
function AdaptiveImageSlot({ id, label, fallbackH = 130, fit = 'contain', style = {} }) {
  const hostRef = React.useRef(null);
  const ratio = useImageSlotRatio(hostRef);
  const sizeStyle = ratio ?
  { width: '100%', aspectRatio: String(ratio), height: 'auto' } :
  { width: '100%', height: fallbackH };
  return (
    <image-slot
      ref={hostRef}
      id={id}
      placeholder={label}
      shape="rect"
      fit={fit}
      style={{ display: 'block', borderRadius: 4, ...sizeStyle, ...style }} />);

}

function TestimonialModal({ note, index, total, onPrev, onNext, onClose }) {
  const modalSlotRef = React.useRef(null);
  const imageAspect = useImageSlotRatio(modalSlotRef);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrev, onNext, onClose]);

  return (
    <div
      onClick={(e) => {if (e.target === e.currentTarget) onClose();}}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.85)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 10000,
        animation: 'fadeIn 0.3s ease-out',
        backdropFilter: 'blur(4px)'
      }} data-comment-anchor="a7c2a85c2e-div-534-5">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
      
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 20, right: 20,
          background: 'rgba(255,255,255,0.9)', border: 'none', width: 40, height: 40,
          borderRadius: '50%', cursor: 'pointer', fontSize: 24, display: 'flex',
          alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,1)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.9)'}>
        
        ✕
      </button>

      <div style={{
        maxWidth: '85vw', maxHeight: '85vh',
        display: 'flex', flexDirection: 'column', gap: 24,
        animation: 'slideUp 0.4s ease-out'
      }}>
        {/* Image or video — same slot id as the card, so the expanded view shows
                    whatever the user dropped. Sized to the image's true ratio. */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: 600,
          margin: '0 auto'
        }}>
          {note.video ?
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tKJn9jNrURA?si=A_vQ8170jj-j0ABD&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: '100%', borderRadius: 4, boxShadow: '0 20px 60px rgba(0,0,0,0.4)', display: 'block' }}></iframe> :

          <image-slot
            ref={modalSlotRef}
            id={`testi-${index}`}
            placeholder="▶ TESTIMONIAL"
            shape="rect"
            fit="contain"
            style={{
              width: '100%',
              aspectRatio: imageAspect ? String(imageAspect) : '4/3',
              display: 'block',
              borderRadius: 4,
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
            }} data-comment-anchor="230ddfdf5b-image-slot-575-11" />
          }
        </div>

        {/* Quote + Author */}
        <div style={{
          textAlign: 'center',
          maxWidth: 500,
          margin: '0 auto',
          color: 'white'
        }}>
          <p style={{
            fontSize: 18,
            lineHeight: 1.6,
            fontStyle: 'italic',
            margin: '0 0 12px',
            fontFamily: 'var(--font-display)'
          }}>
            "{note.q}"
          </p>
          <div style={{
            fontSize: 14,
            opacity: 0.8,
            letterSpacing: 0.5
          }}>
            — {note.a.toUpperCase()}
          </div>
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
          marginTop: 8
        }}>
          <button
            onClick={onPrev}
            disabled={index === 0}
            style={{
              background: index === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.5)',
              border: 'none', color: 'white', width: 44, height: 44,
              borderRadius: '50%', cursor: index === 0 ? 'default' : 'pointer',
              fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              if (index > 0) e.target.style.background = 'rgba(255,255,255,0.7)';
            }}
            onMouseLeave={(e) => {
              if (index > 0) e.target.style.background = 'rgba(255,255,255,0.5)';
            }}>
            
            ←
          </button>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, minWidth: 60, textAlign: 'center' }}>
            {index + 1} / {total}
          </span>
          <button
            onClick={onNext}
            disabled={index === total - 1}
            style={{
              background: index === total - 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.5)',
              border: 'none', color: 'white', width: 44, height: 44,
              borderRadius: '50%', cursor: index === total - 1 ? 'default' : 'pointer',
              fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              if (index < total - 1) e.target.style.background = 'rgba(255,255,255,0.7)';
            }}
            onMouseLeave={(e) => {
              if (index < total - 1) e.target.style.background = 'rgba(255,255,255,0.5)';
            }}>
            
            →
          </button>
        </div>
      </div>
    </div>);

}

function TestimonialCard({ note, index, onExpand }) {
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    if (!note.video) return;
    const iframe = videoRef.current;
    if (!iframe) return;
    const cmd = (func) => {
      try {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func, args: [] }), '*');
      } catch (e) {}
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting && en.intersectionRatio >= 0.5) {
          cmd('unMute');
          cmd('playVideo');
        } else {
          cmd('mute');
        }
      });
    }, { threshold: [0, 0.5, 1] });
    io.observe(iframe);
    return () => io.disconnect();
  }, [index]);
  return (
    <div
      onClick={() => onExpand(index)}
      style={{
        transform: `rotate(${(index - 1) * 0.5}deg)`,
        cursor: 'pointer',
        transition: 'transform 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = `rotate(${(index - 1) * 0.5}deg) scale(1.02)`}
      onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${(index - 1) * 0.5}deg) scale(1)`}>
      
      {note.video ?
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 4, aspectRatio: '16 / 9' }} data-comment-anchor="60658019a7-div-729-9">
          <iframe
          ref={videoRef}
          src="https://www.youtube.com/embed/tKJn9jNrURA?si=A_vQ8170jj-j0ABD&controls=0&autoplay=1&loop=1&playlist=tKJn9jNrURA&mute=1&enablejsapi=1&modestbranding=1&rel=0&showinfo=0&disablekb=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block', border: 'none', pointerEvents: 'none' }}>
          </iframe>
        </div> :

      <AdaptiveImageSlot id={`testi-${index}`} label="▶ TESTIMONIAL" fallbackH={130} />
      }
      <p style={{ margin: '10px 0 4px', fontSize: 14, lineHeight: 1.4 }}>"{note.q}"</p>
      <div className="kicker">— {note.a}</div>
    </div>);

}

function TestimonialSection({ notes }) {
  const [expandedIndex, setExpandedIndex] = React.useState(null);
  const displayNotes = notes.slice(0, 7);

  return (
    <>
      <div style={{ marginTop: 30, position: 'relative' }}>
        <Tape top={-10} left="14%" rotate={-6} color="#b8dfb0" />
        <div className="sketch-box" style={{ background: 'var(--paper-2)' }}>
          <div style={{ marginBottom: 14 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 30, margin: 0 }}>What people say</h3>
          </div>
          <div className="m2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {displayNotes.map((n, i) =>
            <TestimonialCard
              key={i}
              note={n}
              index={i}
              onExpand={setExpandedIndex} />

            )}
          </div>
        </div>
      </div>

      {expandedIndex !== null &&
      <TestimonialModal
        note={displayNotes[expandedIndex]}
        index={expandedIndex}
        total={displayNotes.length}
        onPrev={() => setExpandedIndex(Math.max(0, expandedIndex - 1))}
        onNext={() => setExpandedIndex(Math.min(displayNotes.length - 1, expandedIndex + 1))}
        onClose={() => setExpandedIndex(null)} />

      }
    </>);

}

function D2_Winston() {
  return (
    <div>
      <Kicker>video content · a few categories</Kicker>
      <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 28 }}>
        {VIDEO_CATEGORIES.map((cat, ci) =>
        <div key={cat.id} style={{ position: 'relative' }}>
            <Tape top={-10} left={`${20 + ci * 25}%`} rotate={ci % 2 ? 6 : -6}
          color={['#f4d35e', '#b6d4f0', '#f5b6c4'][ci]} />
            <div className="sketch-box" style={{ background: ci % 2 ? 'var(--paper-2)' : 'var(--paper)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, margin: '0 0 4px' }}>{cat.name}</h3>
                  <div style={{ fontSize: 14 }}>{cat.blurb}</div>
                </div>
                <span className="kicker">{cat.meta}</span>
              </div>
              <div className="m2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                {cat.items.map((it, i) =>
              <a key={i} href={it.href} target={it.href ? '_blank' : undefined} rel="noreferrer" className="tile-hover"
              style={{ position: 'relative', transform: `rotate(${i % 2 ? 0.4 : -0.4}deg)`, textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <Placeholder id={`vid-${cat.id}-${i}`} label={it.tag} h={220} />
                    <div style={{ fontSize: 13, marginTop: 6, lineHeight: 1.3 }}>{it.t}</div>
                    <div className="kicker">▶ {it.d}</div>
                  </a>
              )}
              </div>
              <div className="kicker" style={{ marginTop: 12, textAlign: 'right' }}>see all →</div>
            </div>
          </div>
        )}
      </div>

      {/* event video portraits — proof of work; vertical clips, links tbc */}
      <EventPortraits />

      {/* testimonials — merged from the old guestbook; real clips to come */}
      <TestimonialSection notes={GUESTBOOK_NOTES} />
    </div>);

}

function EventPortraits() {
  return (
    <div style={{ marginTop: 36, position: 'relative' }}>
      <Tape top={-10} left="14%" rotate={-5} color="#f4d35e" />
      <div className="sketch-box" style={{ background: 'var(--paper-2)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, margin: '0 0 4px' }}>Events · proof of work</h3>
          <span className="kicker">vertical clips · video portraits</span>
        </div>
        <div style={{ fontSize: 14, marginBottom: 12 }}>hacker houses, side events & singapore — short portrait recaps.</div>
        <div className="kicker" style={{ color: 'var(--red)', marginBottom: 18 }}>☟ prasan — drop the reel / short link for each tile</div>

        {EVENT_PORTRAITS.map((g, gi) =>
        <div key={g.group} style={{ marginBottom: gi === EVENT_PORTRAITS.length - 1 ? 0 : 24 }}>
            <div className="kicker" style={{ marginBottom: 8 }}>{g.group} ({g.items.length})</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              {g.items.map((it, i) =>
            <div key={i} style={{ width: 'min(100%, 560px)', transform: `rotate(${i % 2 ? 0.5 : -0.5}deg)` }}>
                  <Placeholder id={`evp-${g.group.replace(/\s+/g, '-').toLowerCase()}-${i}`} label={it.tag} h={300} />
                  <div style={{ fontSize: 13, marginTop: 6, lineHeight: 1.3 }}>{it.t}</div>
                  <div className="kicker" style={{ color: 'var(--red)' }}>▶ video link tbc</div>
                </div>
            )}
            </div>
          </div>
        )}
      </div>
    </div>);

}

function D2_Library() {
  return (
    <div>
      <Kicker>everything i'm consuming · books · music · travel · bucket · ☜ drag the polaroids</Kicker>
      <div className="library-wall" style={{
        position: 'relative',
        marginTop: 18,
        padding: '30px 20px',
        background: 'var(--paper-2)',
        border: '1.5px dashed var(--ink)',
        minHeight: 460
      }}>
        {LIBRARY_ITEMS.map((it, i) => {
          // initial scattered positions
          const x = i % 5 * 18 + 2;
          const y = Math.floor(i / 5) * 200 + 10;
          return (
            <div key={i} className="lib-item" style={{
              position: 'absolute',
              left: `${x}%`,
              top: y,
              zIndex: i
            }}>
              <Polaroid
                draggable
                id={`lib-${i}`}
                label={it.k.toUpperCase()}
                caption={`${it.t} — ${it.s}`}
                rotate={(i % 7 - 3) * 1.5}
                size={120} />
              
            </div>);

        })}
      </div>
    </div>);

}

function D2_Calendar() {
  // auto-updates to the live month — no hardcoded dates.
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const todayNum = now.getDate();
  const monthLabel = now.toLocaleString('en-US', { month: 'short' }).toLowerCase();
  const yearLabel = `'${String(year).slice(2)}`;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadBlanks = (new Date(year, month, 1).getDay() + 6) % 7; // Monday-first offset
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const [sel, setSel] = React.useState(todayNum);
  const isWeekend = (d) => {const wd = new Date(year, month, d).getDay();return wd === 0 || wd === 6;};
  const selWeekend = isWeekend(sel);
  return (
    <div className="sketch-box">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Kicker>calendar · this month</Kicker>
        <span className="kicker">{monthLabel} {yearLabel}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginTop: 12 }} data-comment-anchor="f8de297ee5-div-939-7">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) =>
        <div key={i} className="kicker" style={{ textAlign: 'center' }}>{d}</div>
        )}
        {Array.from({ length: leadBlanks }).map((_, i) =>
        <div key={`b${i}`} />
        )}
        {days.map((d) => {
          const isToday = d === todayNum;
          const active = sel === d;
          const weekend = isWeekend(d);
          return (
            <a
              key={d}
              href={CONTACTS.cal.href}
              target="_blank"
              rel="noreferrer"
              title={`book a 15-min call · ${monthLabel} ${d}`}
              onMouseEnter={() => setSel(d)}
              onFocus={() => setSel(d)}
              style={{
                border: active ? '2px solid var(--red)' : '1.5px solid var(--ink)',
                aspectRatio: '1', fontSize: 12, padding: 4, cursor: 'pointer',
                background: isToday ? 'var(--tape)' : 'var(--paper)',
                transform: `rotate(${(d % 3 - 1) * 0.6}deg)`,
                textAlign: 'left', fontFamily: 'inherit',
                color: weekend ? 'var(--ink-soft)' : 'var(--ink)',
                textDecoration: 'none',
                display: 'flex', flexDirection: 'column', lineHeight: 1.1
              }}>
              <span style={{ fontWeight: isToday ? 700 : 400 }}>{d}</span>
              {isToday && <span style={{ fontFamily: 'var(--font-label)', fontSize: 9, marginTop: 2, color: 'var(--red)' }}>today</span>}
            </a>);

        })}
      </div>
      <div style={{ marginTop: 12, borderTop: '1px dashed var(--ink-soft)', paddingTop: 8, minHeight: 42 }}>
        <p className="muted" style={{ margin: 0, fontSize: 13 }}>
          {monthLabel} {sel}{sel === todayNum ? ' · today' : ''} — {selWeekend ? 'weekend · still happy to chat. ' : 'open. '}
          <a href={CONTACTS.cal.href} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>grab a slot →</a>
        </p>
      </div>
    </div>);

}

function D2_Community() {
  return (
    <div>
      <div className="m1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)' }}>
      <div style={{ position: 'relative' }}>
        <Tape top={-12} left="40%" />
        <D2_Calendar />
      </div>
      <div style={{ position: 'relative' }}>
        <Tape top={-12} left="50%" color="#f5b6c4" rotate={5} />
        <div className="sketch-box" style={{ background: 'var(--paper-2)' }}>
          <Kicker>guidance calls</Kicker>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, margin: '8px 0' }}>15 min · free · weekly.</h3>
          <p style={{ fontSize: 14 }}>for early community builders & post-hackathon founders.</p>
          <a href={CONTACTS.cal.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><Stamp>book a slot →</Stamp></a>
        </div>
      </div>
      </div>

    </div>);

}

function D2_Footer() {
  return (
    <div style={{ position: 'relative' }}>
      <Tape top={-12} left="20%" />
      <Tape top={-12} left="70%" color="#b6d4f0" />
      <div className="sketch-box" style={{ padding: 30, background: 'var(--paper-2)' }}>
        <div className="m1" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'var(--gap)' }}>
          <div>
            <Kicker>a personal note</Kicker>
            <p style={{ fontSize: 17, marginTop: 6 }}>
              this site is a living thing. dms open. don't be a stranger.
            </p>
            <p className="annot rot-l">— p ✦</p>
          </div>
          <div>
            <Kicker>elsewhere</Kicker>
            <SocialIcons size={40} gap={10} style={{ margin: '10px 0 12px' }} />
            <ul style={{ paddingLeft: 18, fontSize: 15, margin: '8px 0', listStyle: 'none' }}>
              {[CONTACTS.x, CONTACTS.li, CONTACTS.ig, CONTACTS.igFun, CONTACTS.tg, CONTACTS.mail].map((c) =>
              <li key={c.href} style={{ marginBottom: 4 }}>
                  <a href={c.href} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>{c.label}</a>
                </li>
              )}
              <li style={{ marginTop: 8 }}>
                <a href={CONTACTS.cal.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><Stamp>{CONTACTS.cal.label}</Stamp></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>);

}

const D2_SECTIONS = { hero: D2_Hero, whatido: D2_WhatIDo, journey: D2_Journey, proof: D2_Proof, casestudy: D2_CaseStudy, lessons: D2_Lessons, awards: D2_Awards, winston: D2_Winston, library: D2_Library, community: D2_Community, footer: D2_Footer };

function Direction2({ sectionOrder, hero }) {
  return (
    <div className="direction d2" data-comment-anchor="971ce4b365-div-673-5">
      <style>{`
        .d2-torn { background: var(--paper); padding: 26px 28px; border: 1.5px solid var(--ink); position: relative; }
        .d2-torn::before, .d2-torn::after {
          content: ""; position: absolute; left: 0; right: 0; height: 8px;
          background: var(--paper);
          -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 8' preserveAspectRatio='none'><path d='M0 0 L 5 6 L 12 1 L 20 7 L 28 2 L 36 6 L 45 1 L 55 7 L 64 2 L 72 6 L 80 1 L 88 7 L 96 2 L 100 6 L 100 8 L 0 8 Z' fill='black'/></svg>") repeat-x;
          mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 8' preserveAspectRatio='none'><path d='M0 0 L 5 6 L 12 1 L 20 7 L 28 2 L 36 6 L 45 1 L 55 7 L 64 2 L 72 6 L 80 1 L 88 7 L 96 2 L 100 6 L 100 8 L 0 8 Z' fill='black'/></svg>") repeat-x;
        }
        .d2-torn::before { top: -8px; transform: scaleY(-1); }
        .d2-torn::after { bottom: -8px; }
        .d2-h1 { font-family: var(--font-display); font-size: clamp(38px, 5.5vw, 64px); margin: 8px 0 14px; line-height: 1.05; }
        .d2-manifesto { font-size: 18px; line-height: 1.55; white-space: pre-line; max-width: 52ch; }
        .d2-sub { color: var(--ink-soft); }
        .hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 40px; align-items: center; }
        .hero-visual { position: relative; }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; } }
      `}</style>
      {sectionOrder.map((s) => {
        const Comp = D2_SECTIONS[s.id];
        if (!Comp) return null;
        return (
          <section key={s.id} className="wf-section" data-screen-label={`${s.num} ${s.label}`}>
            {s.id !== 'hero' && <SectionHeader num={s.num} label={s.label} title={s.title} />}
            <Comp hero={hero} />
          </section>);

      })}
    </div>);

}

window.Direction2 = Direction2;