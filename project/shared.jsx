// shared.jsx — sketchy primitives reused across the 4 wireframe directions.
// Everything assigns to window at the bottom so Babel scripts can find them.

const NAV_LINKS = ["Community", "Work", "Writing", "Library", "Archive", "Let's Talk"];

const SECTIONS_DEFAULT = [
{ id: 'hero', num: '01', label: 'HERO', title: 'Hero / Manifesto' },
{ id: 'whatido', num: '02', label: 'WHAT I BUILD', title: 'What I build' },
{ id: 'journey', num: '03', label: 'JOURNEY', title: 'IRL → URL' },
{ id: 'proof', num: '04', label: 'PROOF OF WORK', title: 'Community + Lab' },
{ id: 'casestudy', num: '06', label: 'CASE STUDY', title: 'HH2 → ARlink' },
{ id: 'lessons', num: '07', label: 'LESSONS LEARNT', title: 'Card stack' },
{ id: 'winston', num: '05', label: 'VIDEO CONTENT', title: 'Video content' },
{ id: 'community', num: '10', label: 'COMMUNITY HUB', title: 'Calendar · calls' },
{ id: 'footer', num: '11', label: 'FOOTER', title: 'Say hi' }];


// ── tiny atoms ───────────────────────────────────────────────────────────────
// Placeholder doubles as a drag-and-drop image slot: pass a unique `id` and it
// renders <image-slot> (user drops/persists an image). Without an id it stays a
// striped placeholder. `src` pre-fills the slot but a user drop overrides it.
function Placeholder({ label = "PHOTO", h = 160, w, style = {}, id, shape = 'rect', radius, src, fit }) {
  if (id) {
    return (
      <image-slot
        id={id}
        placeholder={label}
        shape={shape}
        radius={radius}
        src={src}
        fit={fit}
        style={{ width: w != null ? w : '100%', height: h, display: 'block', ...style }} />);

  }
  return (
    <div className="placeholder" style={{ height: h, width: w, ...style }}>
      <span>{label}</span>
    </div>);

}

function Polaroid({ label = "PHOTO", caption = "", rotate = 0, size = 160, photoStyle = {}, draggable = true, href, id, src }) {
  const card =
  <div className="polaroid" style={{ transform: `rotate(${rotate}deg)` }}>
      <Placeholder label={label} h={size} w={size} style={photoStyle} id={id} src={src} shape="rect" />
      <div className="cap">{caption}</div>
    </div>;

  const linked = href ?
  <a href={href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block' }}>{card}</a> :
  card;
  return draggable ? <Draggable>{linked}</Draggable> : linked;
}

// Draggable wrapper. Stores its own translate offset and applies it on top of
// any rotation/transform the child already carries (we don't touch the
// child's own transform). Pointer events so it works on touch + mouse, and
// touchAction:none so mobile scroll doesn't fight the drag.
function Draggable({ children, style = {}, handle = false, onDragStart, onDragEnd, className = '' }) {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [dragging, setDragging] = React.useState(false);
  const startRef = React.useRef({ x: 0, y: 0, px: 0, py: 0 });
  const ref = React.useRef(null);

  // On small touch screens dragging fights page scroll — render plainly.
  const isMobile = window.matchMedia('(max-width: 720px)').matches;
  if (isMobile) {
    return <div className={className} style={{ ...style, position: style.position || 'relative', display: 'inline-block' }}>{children}</div>;
  }

  const onPointerDown = (e) => {
    if (handle && !e.target.closest('[data-drag-handle]')) return;
    e.preventDefault();
    startRef.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
    setDragging(true);
    onDragStart && onDragStart();
    const move = (ev) => {
      const nx = startRef.current.px + (ev.clientX - startRef.current.x);
      const ny = startRef.current.py + (ev.clientY - startRef.current.y);
      setPos({ x: nx, y: ny });
    };
    const up = () => {
      setDragging(false);
      onDragEnd && onDragEnd();
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <div
      ref={ref}
      className={className}
      onPointerDown={onPointerDown}
      style={{
        ...style,
        position: style.position || 'relative',
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        cursor: dragging ? 'grabbing' : 'grab',
        touchAction: 'none',
        userSelect: 'none',
        zIndex: dragging ? 999 : style.zIndex || 'auto',
        transition: dragging ? 'none' : 'box-shadow 0.15s',
        boxShadow: dragging ? '0 12px 28px rgba(0,0,0,0.25)' : style.boxShadow,
        display: 'inline-block'
      }}>
      
      {children}
    </div>);

}

function Tape({ top = -8, left = '50%', rotate = -8, color, width = 60 }) {
  return (
    <div className="tape" style={{
      top, left,
      transform: `translateX(-50%) rotate(${rotate}deg)`,
      width,
      background: color
    }} />);

}

function Sticky({ children, color, rotate = 0, style = {} }) {
  return (
    <div className={`sticky ${color || ''}`} style={{ transform: `rotate(${rotate}deg)`, ...style }}>
      {children}
    </div>);

}

function SectionHeader({ num, label, title, underline = true, href }) {
  const inner = underline ? <span className="underline">{title}</span> : title;
  const titleNode = href ?
  <a href={href} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{inner}</a> :
  inner;
  return (
    <>
      <div className="section-label">
        <span className="num">{num}</span> / {label}
      </div>
      <h2 className="section-title">
        {titleNode}
      </h2>
    </>);

}

function Stamp({ children }) {return <span className="stamp">{children}</span>;}

function Squiggle() {return <div className="squiggle" />;}

function Arrow({ dir = '→', style = {} }) {return <span className="arrow" style={style}>{dir}</span>;}

function Kicker({ children }) {return <div className="kicker">{children}</div>;}

// In-mock nav (shows the actual top nav of the website wireframe).
// Links route to subpages.html#<slug>; the logo routes back to the home file.
// Clicks play a short paper page-out transition before navigating (skipped
// for reduced-motion users).
function pageNav(e, href) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  e.preventDefault();
  document.body.classList.add('page-out');
  setTimeout(() => { window.location.href = href; }, 300);
}

function NavGlyph({ icon, size = 15 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" style={{ display: 'block' }}>
      <path d={SOCIAL_GLYPHS[icon]} />
    </svg>);
}

function MockNav({ theme, onToggleTheme, current = '', showLinks = true }) {
  const slug = (s) => s.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');
  const toggle = onToggleTheme || (() => window.dispatchEvent(new CustomEvent('pp-toggle-theme')));
  return (
    <div className="mock-nav" data-comment-anchor="06a72b8d63-div-133-5">
      <a href="./prasansingh wireframes.html" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}
         onClick={(e) => pageNav(e, './prasansingh wireframes.html')}>
        prasan<span style={{ color: 'var(--red)' }}>*</span>
      </a>
      {showLinks &&
      <div className="links">
        {NAV_LINKS.map((l, i) => {
          const s = slug(l);
          const href = `./subpages.html#${s}`;
          const isCta = i === NAV_LINKS.length - 1;
          const isCurrent = current === s;
          return (
            <a key={l} href={href}
               onClick={(e) => pageNav(e, href)}
               className={isCta ? 'cta' : ''}
               style={{
                 textDecoration: 'none',
                 color: 'inherit',
                 fontWeight: isCurrent ? 700 : 400,
                 borderBottom: isCurrent && !isCta ? '2px solid var(--red)' : 'none',
               }}>
              {l}
            </a>
          );
        })}
      </div>
      }
      <div className="right">
        <a href={CONTACTS.x.href} target="_blank" rel="noreferrer" className="nav-icon" title="dm on x · @prasansinghh"><NavGlyph icon="x" /></a>
        <a href={CONTACTS.li.href} target="_blank" rel="noreferrer" className="nav-icon" title="linkedin · prasan-singh" style={{ transform: 'rotate(1deg)' }}><NavGlyph icon="li" /></a>
        <a href={CONTACTS.ig.href} target="_blank" rel="noreferrer" className="nav-icon" title="instagram · @prasansingh_" style={{ transform: 'rotate(-1deg)' }}><NavGlyph icon="ig" /></a>
        <a href={CONTACTS.tg.href} target="_blank" rel="noreferrer" className="nav-icon" title="telegram · @prasansinghh" style={{ transform: 'rotate(1deg)' }}><NavGlyph icon="tg" /></a>
        <span style={{ cursor: 'pointer', fontSize: 16 }} onClick={toggle} title="Theme · day / midnight desk">
          {theme === 'dark' ? '☾' : '☀'}
        </span>
      </div>
    </div>);

}

// X-O game easter egg — playable 1P vs CPU (perfect minimax) or 2P local.
// Player is X, computer is O. CPU evaluates its move after a small think delay.
const XO_LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function xoWinner(b) {
  for (const [a,c,d] of XO_LINES) {
    if (b[a] && b[a] === b[c] && b[a] === b[d]) return { mark: b[a], line: [a,c,d] };
  }
  return null;
}
function xoMinimax(b, isMaxing, depth = 0) {
  const w = xoWinner(b);
  if (w?.mark === 'O') return 10 - depth;
  if (w?.mark === 'X') return depth - 10;
  if (b.every(c => c)) return 0;
  let best = isMaxing ? -Infinity : Infinity;
  for (let i = 0; i < 9; i++) {
    if (!b[i]) {
      b[i] = isMaxing ? 'O' : 'X';
      const v = xoMinimax(b, !isMaxing, depth + 1);
      b[i] = '';
      best = isMaxing ? Math.max(best, v) : Math.min(best, v);
    }
  }
  return best;
}
function xoBestMove(b) {
  let best = -Infinity, move = -1;
  for (let i = 0; i < 9; i++) {
    if (!b[i]) {
      b[i] = 'O';
      const v = xoMinimax(b, false);
      b[i] = '';
      if (v > best) { best = v; move = i; }
    }
  }
  return move;
}

function XOGame() {
  const [board, setBoard] = React.useState(Array(9).fill(''));
  const [turn, setTurn] = React.useState('X');
  const [mode, setMode] = React.useState('cpu'); // 'cpu' | '2p'
  const [score, setScore] = React.useState({ x: 0, o: 0, d: 0 });
  const result = xoWinner(board);
  const done = !!result || board.every(c => c);
  const winLine = result?.line || [];

  // Auto-play CPU when it's O's turn in cpu mode.
  React.useEffect(() => {
    if (mode !== 'cpu' || turn !== 'O' || done) return;
    const t = setTimeout(() => {
      const move = xoBestMove(board.slice());
      if (move === -1) return;
      const b = board.slice();
      b[move] = 'O';
      setBoard(b);
      setTurn('X');
    }, 380);
    return () => clearTimeout(t);
  }, [turn, mode, board, done]);

  // Update score once when a round ends.
  const scoredRef = React.useRef(false);
  React.useEffect(() => {
    if (!done) { scoredRef.current = false; return; }
    if (scoredRef.current) return;
    scoredRef.current = true;
    if (result?.mark === 'X') setScore(s => ({ ...s, x: s.x + 1 }));
    else if (result?.mark === 'O') setScore(s => ({ ...s, o: s.o + 1 }));
    else setScore(s => ({ ...s, d: s.d + 1 }));
  }, [done, result]);

  const click = (i) => {
    if (board[i] || done) return;
    if (mode === 'cpu' && turn !== 'X') return; // user is X only
    const b = board.slice();
    b[i] = turn;
    setBoard(b);
    setTurn(turn === 'X' ? 'O' : 'X');
  };
  const reset = () => { setBoard(Array(9).fill('')); setTurn('X'); };
  const resetScore = () => { setScore({ x: 0, o: 0, d: 0 }); reset(); };

  const status = result
    ? `${result.mark} wins!`
    : done ? 'draw — cat\'s game' : (mode === 'cpu' && turn === 'O' ? 'CPU thinking…' : `${turn} next`);

  return (
    <div data-easter style={{ display: 'inline-block' }}>
      <div className="xo">
        {board.map((v, i) => (
          <div key={i} onClick={() => click(i)}
               style={{ background: winLine.includes(i) ? 'var(--tape)' : undefined }}>
            {v}
          </div>
        ))}
      </div>
      <div className="xo-meta">
        <button type="button" className="xo-mode" onClick={() => { setMode(m => m === 'cpu' ? '2p' : 'cpu'); reset(); }}>
          {mode === 'cpu' ? '1P vs CPU' : '2 player'} ⇋
        </button>
        <span>{status}</span>
        <button type="button" className="xo-mode" onClick={reset} title="new round">↺</button>
      </div>
      <div className="xo-score">
        <span>X {score.x}</span>
        <span>·</span>
        <span>O {score.o}</span>
        <span>·</span>
        <span>= {score.d}</span>
        {(score.x + score.o + score.d) > 0 && (
          <span className="xo-reset" onClick={resetScore} title="reset score">clr</span>
        )}
      </div>
    </div>);

}

// Ticker marquee
function Ticker({ items }) {
  return (
    <div className="ticker">
      <div className="track">
        {[...items, ...items].map((it, i) =>
        <React.Fragment key={i}>
            <span>{it}</span>
            <span className="dot">★</span>
          </React.Fragment>
        )}
      </div>
    </div>);

}

// Hand-drawn line connector (SVG)
function Squiggly({ width = 120, height = 30, stroke = 'currentColor' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 120 30" style={{ display: 'block' }}>
      <path d="M2 15 Q 15 2 30 15 T 60 15 T 90 15 T 118 15"
      fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    </svg>);

}

// Big honking manifesto block (used by Hero variants)
const MANIFESTO = `i build founder ecosystems, global community programs, and high-signal events that turn builders into funded teams and long-term contributors.\n\nFor three years, I helped build Arweave India through community systems that shaped how the global ecosystem grows.`;

const QUOTE = "Communities aren't events. They're a series of small promises kept over a long time.";

const TICKER_ITEMS = [
"now: the winston show ✦ vlogs ✦ what's next",
"5 hacker houses · 150+ scholars · 1500+ applications",
"4000+ builders reached via city activations",
"open to: ecosystem lead · global events lead · community lead · events & ops"];


// Lessons (used by section 5)
const LESSONS = [
{ n: '01', t: "Cohorts > events.", b: "A 2-week residential beats a 48-hour sprint, every time.", w: "5 hacker houses vs one-off hackathons. the 2-week residencies are where ARlink formed (it later raised $2.5M) and where teams stuck; the sprints produced demos that died by monday." },
{ n: '02', t: "Found ≠ formed.", b: "A community isn't made by a launch tweet. It's made by show #4.", w: "HH1's group chat stayed quiet until the fourth time people showed up — unasked. a launch starts a list; a community forms on show #4." },
{ n: '03', t: "Curate the room.", b: "Who you don't invite matters as much as who you do.", w: "150+ scholars from 1500+ applications. the no's built the room — who we turned away shaped the culture more than who we let in." },
{ n: '04', t: "Ship is a feeling.", b: "Post-hackathon survival is a structural problem. Solve it.", w: "most builders crash after demo day. we made 'still building in month 6' the metric — not the applause — and staffed the program for it." },
{ n: '05', t: "Vibe is a stack.", b: "Touchgrass, dinners, walks — they're infra, not garnish.", w: "HH2 mussoorie ran on sunrise treks and shared dinners. touchgrass wasn't a break from the work — it was the infrastructure that kept people in it." },
{ n: '06', t: "Hold the line late.", b: "Most magic happens 6 months in. Be there for month 6.", w: "ARlink's seed closed ~6 months after demo day. the win wasn't the house — it was being there for the slow part everyone else skipped." }];


// Arweave India stats — real numbers (per prasan, jun '26)
const ARWEAVE_STATS = [
{ v: '150+', l: 'scholars · 5 hacker houses' },
{ v: '1500+', l: 'applications screened' },
{ v: '4000+', l: 'reached via city debreifs' },
{ v: '349+', l: 'attendees · \narweave day\nindia' },
{ v: '$2.5M', l: 'follow-on seed (ARlink)' },
{ v: '40+', l: 'talks & sessions' }];


const PILLARS = [
{ k: 'Ecosystem Strategy', d: 'The thesis, the funnel, the map — where builders come from, and where they go next.', e: 'Arweave India · IRL→URL', eHref: './subpages.html#archive' },
{ k: 'Programs & Events', d: 'Hacker houses, residencies, flagship conferences. Designed and run end to end.', e: '5 houses · ADI · city debriefs', eHref: './subpages.html#work' },
{ k: 'Community Storytelling', d: 'Public archives, video, and rituals that keep people coming back.', e: 'Winston Show · @arweaveindia', eHref: 'https://x.com/prasansinghh' }];


const JOURNEY = [
{ era: 'Era 1', year: '~2018-21', title: 'Hackathons', blurb: 'sprint culture. transactional. high-energy short-form.' },
{ era: 'Era 2', year: '2023-24', title: 'Hacker Houses', blurb: 'semi-permanent. co-living. vibe tribes form.' },
{ era: 'Era 3', year: '2024-25', title: 'Residencies', blurb: 'commitment, depth, culture. months not days.' },
{ era: 'Next', year: '2026→', title: 'On-chain residencies', blurb: 'hybrid residencies that extend beyond the internet — powerful activations that drive community and bring real ROI to ecosystems.' }];


const WINSTON_EPISODES = [
{ ep: '#01', g: 'Sam Williams', t: 'On the permaweb thesis' },
{ ep: '#02', g: 'Outprog', t: 'AO, in plain words' },
{ ep: '#03', g: 'Marton', t: 'What hacker houses actually do' },
{ ep: '#04', g: 'Aanya P.', t: 'Designing the second cohort' }];


// Video content — real links (titles tbc; pulled from prasan's X archive).
const VIDEO_CATEGORIES = [
{
  id: 'winston',
  name: 'The Winston Show',
  blurb: 'long-form conversations with people building ecosystems for a living.',
  meta: '9 eps · 80k+ views & interactions',
  items: [
  { t: 'ep 09 · Launchpad 4 recap', d: 'watch →', tag: 'EP09', href: 'https://x.com/prasansinghh/status/1947302455395614821' },
  { t: 'ep 08 · Launchpad 4 progress and Project alphas.', d: 'watch →', tag: 'EP08', href: 'https://x.com/prasansinghh/status/1941056844266389990' },
  { t: 'ep 07 · Arweave India 2025 recap', d: 'watch →', tag: 'EP07', href: 'https://x.com/prasansinghh/status/1937148572165890300' },
  { t: 'ep 06 · Podcast w/ Veritas Founder', d: 'watch →', tag: 'EP06', href: 'https://x.com/prasansinghh/status/1887868130111959514' }]

},
{
  id: 'vlogs',
  name: 'Vlogs',
  blurb: 'day-in-the-life and behind-the-scenes from the ecosystem trenches.',
  meta: '5 vlogs · 100k+ impressions (incl. series)',
  items: [
  { t: 'vlog 01 · Ahmedabad Buildstation (IN)', d: 'watch →', tag: 'VLOG', href: 'https://x.com/prasansinghh/status/1958095122509218284' },
  { t: 'vlog 02 · Mini vlog BTS', d: 'watch →', tag: 'VLOG', href: 'https://x.com/prasansinghh/status/1958519170385277014' },
  { t: 'vlog 03 · Indore Buildstation (IN)', d: 'watch →', tag: 'VLOG', href: 'https://x.com/prasansinghh/status/1960968062229721339' },
  { t: 'vlog 04 · Stealth House progress', d: 'watch →', tag: 'VLOG', href: 'https://x.com/prasansinghh/status/1967808153661456756' }]

},
{
  id: 'heritage',
  name: 'Humanity and Heritage',
  blurb: 'a limited docu-series — closed with arweave india, preserved here.',
  meta: 'limited series · 3 eps + reels',
  items: [
  { t: 'h&h · Humanity & Heritage Intro', d: 'watch →', tag: 'H&H', href: 'https://x.com/prasansinghh/status/1994006530040222131' },
  { t: 'h&h · Humanity & Heritage ep 1', d: 'watch →', tag: 'H&H', href: 'https://x.com/prasansinghh/status/2000895287028801688' },
  { t: 'h&h · Humanity & Heritage ep 2', d: 'watch →', tag: 'H&H', href: 'https://x.com/prasansinghh/status/2011077766675120155' },
  { t: 'reel · highlights', d: 'watch →', tag: 'REEL', href: 'https://x.com/prasansinghh/status/2019745340908261786' }]

},
{
  id: 'talks',
  name: 'Talks & Sessions (out of arweave india)',
  blurb: 'on stage, on panels, in classrooms & meetups. mostly ecosystem & community design.',
  meta: '40+ talks · 10+ university expert sessions pan-india',
  items: [
  { t: 'community session · web3 (youtube)', d: 'watch →', tag: 'TLK', href: 'https://youtu.be/Li1XvncXYog' },
  { t: '2023 RECAP', d: 'view →', tag: 'PNL', href: 'https://www.linkedin.com/posts/prasan-singh_communitydevelopment-cybersecurity-web3-ugcPost-7147630191014580224-LBXa/' },
  { t: 'India Blockchain Tour Panel', d: 'view →', tag: 'TLK', href: 'https://www.linkedin.com/posts/we-didnt-start-with-a-venue-we-started-ugcPost-7358014372742385664-dVJG/' },
  { t: 'Ahmedabad University · expert session', d: 'view →', tag: 'UNI', href: 'https://www.linkedin.com/posts/prasan-singh_ieee-ugcPost-7299811323192733696-lJIK/' },
  { t: 'HackTheMountains · HTM5 (Marwadi University)', d: 'view →', tag: 'HCK', href: 'https://www.linkedin.com/posts/prasan-singh_hackthemountains-htm5-hackathon-activity-7234561051856408576-dn8z' },
  { t: 'meetup · Google Developer Groups Gujarat', d: 'view →', tag: 'MEET', href: 'https://www.linkedin.com/posts/prasan-singh_event-meetup-sunflowerlab-activity-7175522884411420672-v9UR' },
  { t: 'Marwadi University', d: 'view →', tag: 'COMM', href: 'https://www.linkedin.com/posts/prasan-singh_weekends-are-fun-with-the-arweave-india-community-activity-7171167921761726465-cdwP' },
  { t: 'IGDTUW University session', d: 'view →', tag: 'UNI', href: 'https://www.linkedin.com/posts/ignite-your-tech-passion-the-cse-department-share-7124321247500324864-5U_F/' }]

}];


// Community corner — community-event highlights (notebook sketch had a row of
// thumbnails 1 → 2 → 3 → 4 labeled "Community Corner"). Sequence of programs
// that map the through-line of the work.
const COMMUNITY_HIGHLIGHTS = [
{ k: 'HH1', t: 'Bangalore', s: 'recap thread · 2024', tag: 'HH1', href: 'https://x.com/arweaveindia/status/1771120704555233743' },
{ k: 'HH2', t: 'Bangalore', s: 'dev tools · recap', tag: 'HH2', href: 'https://x.com/arweaveindia/status/1826639493417631960' },
{ k: 'HH3', t: 'Mussoorie', s: 'touchgrass · recap', tag: 'HH3', href: 'https://x.com/arweaveindia/status/1880208112831086808' },
{ k: 'HH4', t: 'Bengal', s: 'mainnet apps', tag: 'HH4', href: 'https://x.com/arweaveindia/status/1915785767944638533?s=20' },
{ k: 'Singapore HH', t: 'Singapore', s: 'recap thread', tag: 'Singapore HH', href: 'https://x.com/arweaveindia/status/1915785767944638533?s=20' },
{ k: 'ADI', t: 'Mumbai', s: '349+ attended · thread', tag: 'ADI', href: 'https://x.com/arweaveindia/status/1916023194818859477' }];


// Event video portraits — vertical (9:16) clips from proof-of-work events.
// Links are TBC: these render as placeholder tiles prompting prasan to drop
// the reel / short URL for each. Hacker Houses come from the real HH series.
const EVENT_PORTRAITS = [
{
  group: 'Hacker Houses',
  items: [
  { t: 'HH1 · Bangalore', tag: 'HH1' },
  { t: 'HH2 · Bangalore', tag: 'HH2' },
  { t: 'HH3 · Mussoorie', tag: 'HH3' },
  { t: 'HH4 · Bengal', tag: 'HH4' }]
},
{
  group: 'Side events',
  items: [
  { t: 'side event 01', tag: 'SIDE' },
  { t: 'side event 02', tag: 'SIDE' },
  { t: 'side event 03', tag: 'SIDE' }]
},
{
  group: 'Singapore events',
  items: [
  { t: 'Singapore HH', tag: 'SG' },
  { t: 'Singapore · side event', tag: 'SG' }]
}];


// The Winston Awards — prasan's personal IP. Yearly community awards.
const WINSTON_AWARDS = {
  t: 'The Winston Awards',
  b: 'a personal IP — yearly awards that keep the community fun. categories, trophies, the works.',
  editions: [
  { y: "edition '23", href: 'https://x.com/arweaveindia/status/1732826171128357146' },
  { y: "edition '24", href: 'https://x.com/arweaveindia/status/1869735063094775853' }]
};

// Real contact links
const CONTACTS = {
  x: { label: 'x · @prasansinghh', href: 'https://x.com/prasansinghh' },
  li: { label: 'linkedin · prasan-singh', href: 'https://www.linkedin.com/in/prasan-singh' },
  ig: { label: 'instagram · @prasansingh_', href: 'https://www.instagram.com/prasansingh_/' },
  igFun: { label: 'instagram · @prsn.sngh', href: 'https://www.instagram.com/prsn.sngh/' },
  tg: { label: 'telegram · @prasansinghh', href: 'https://t.me/prasansinghh' },
  mail: { label: 'mail · hi@prasansingh.com', href: 'mailto:hi@prasansingh.com' },
  cal: { label: 'book 15 min →', href: 'https://cal.com/prasan-singh/15min' }
};

// Brand glyphs (24×24, fill=currentColor) for the social icon row.
const SOCIAL_GLYPHS = {
  x: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z',
  li: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z',
  ig: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z',
  tg: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0Zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212-.07-.062-.174-.041-.249-.024-.106.024-1.793 1.14-5.061 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635Z',
  mail: 'M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67ZM22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z'
};

// Logo links for the footer / contact row — order matters.
const SOCIAL_LINKS = [
{ ...CONTACTS.x, name: 'X · @prasansinghh', icon: 'x' },
{ ...CONTACTS.li, name: 'LinkedIn · prasan-singh', icon: 'li' },
{ ...CONTACTS.ig, name: 'Instagram · @prasansingh_', icon: 'ig' },
{ ...CONTACTS.igFun, name: 'Instagram · @prsn.sngh', icon: 'ig' },
{ ...CONTACTS.tg, name: 'Telegram · @prasansinghh', icon: 'tg' },
{ ...CONTACTS.mail, name: 'Email · hi@prasansingh.com', icon: 'mail' }];

function SocialIcons({ size = 38, gap = 10, style = {} }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap, ...style }}>
      {SOCIAL_LINKS.map((s, i) =>
      <a
        key={i}
        href={s.href}
        target="_blank"
        rel="noreferrer"
        title={s.name}
        aria-label={s.name}
        className="social-chip"
        style={{
          width: size, height: size,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          border: '1.5px solid var(--ink)', background: 'var(--paper)',
          color: 'var(--ink)', textDecoration: 'none',
          transform: `rotate(${(i % 2 ? 1 : -1) * 1.5}deg)`,
          transition: 'transform .15s ease, background .15s ease, color .15s ease'
        }}>
          <svg viewBox="0 0 24 24" width={size * 0.5} height={size * 0.5} fill="currentColor" aria-hidden="true">
            <path d={SOCIAL_GLYPHS[s.icon]} />
          </svg>
        </a>
      )}
    </div>);

}


// ── impact band — the record. every number links to the real post ──────────
const IMPACT_BAND = [
{ v: '4', l: 'hacker houses designed & run', href: 'https://x.com/arweaveindia/status/1915426565326029130' },
{ v: '150+', l: 'scholars · from 1500+ applications', href: 'https://x.com/arweaveindia/status/1771120704555233743' },
{ v: '$2.5M', l: 'seed raised by ARlink · HH2 grad', href: 'https://x.com/arweaveindia/status/1826639493417631960' },
{ v: '349+', l: 'attendees · arweave day india', href: 'https://x.com/arweaveindia/status/1916023194818859477' },
{ v: '4000+', l: 'builders reached · city debriefs', href: 'https://x.com/arweaveindia/status/1790041430662287391' },
{ v: '2,595', l: 'posts · the public log', href: 'https://x.com/arweaveindia' }];

// ── receipts — curated proof. dates + links from the @arweaveindia audit ───
const RECEIPTS = [
{ tag: 'HH1', date: "mar '24", t: 'the first house', b: 'BetterIDEa, 0rbit and LiteSeed all trace back to this room.', href: 'https://x.com/arweaveindia/status/1771120704555233743' },
{ tag: 'HH2', date: "jun '24", t: 'dev tools cohort', b: 'ARlink demos one-click deploys. six months later: $2.5M seed.', href: 'https://x.com/arweaveindia/status/1826639493417631960' },
{ tag: 'HH3', date: "sep '24", t: 'consumer-facing applications', b: 'wellness became program infrastructure, not garnish.', href: 'https://x.com/arweaveindia/status/1863136638039388666?s=20' },
{ tag: 'HH4', date: "mar '25", t: 'bengal · mainnet apps', b: 'first cohort shipping live on mainnet — not testnet demos.', href: 'https://x.com/arweaveindia/status/1915785767944638533?s=20' },
{ tag: 'Singapore HH', date: "apr '25", t: 'the consumer wave', b: 'mature cohort · user-facing apps on mainnet.', href: 'https://x.com/arweaveindia/status/1915426565326029130' },
{ tag: 'ADI', date: "apr '25", t: '"the permaweb is here"', b: '349+ attendees · sam williams keynote · 2-day flagship.', href: 'https://x.com/arweaveindia/status/1916023194818859477' },
{ tag: 'DBR', date: "mar '25", t: 'multi-city debriefs', b: 'bangalore · hyderabad · vadodara — 4000+ builders reached.', href: 'https://x.com/arweaveindia/status/1900198767690997842?s=20' },
{ tag: 'LP', date: "nov '23", t: 'office hours w/ sam williams', b: 'founder guidance, piped straight into the launchpad.', href: 'https://x.com/arweaveindia/status/1744783197484020144' },
{ tag: 'WIN', date: "dec '24", t: 'the winston awards', b: 'yearly community awards — culture, kept on purpose.', href: 'https://x.com/arweaveindia/status/1869735063094775853' }];

// ── @arweaveindia reach — account analytics, jun '26 ──────────────────────
const X_STATS = {
  handle: '@arweaveindia',
  href: 'https://x.com/arweaveindia',
  note: 'every house, event and milestone was documented in public, in real time. the feed is the operational archive — 2.5 years of it.',
  rows: [
  { v: '2,595', l: "posts · jun '23 → now" },
  { v: '2,688', l: 'followers' },
  { v: '289K', l: 'impressions · last 12 mo' },
  { v: '7.3K', l: 'engagements · last 12 mo' },
  { v: '5K', l: 'likes · last 12 mo' },
  { v: '757', l: 'reposts · last 12 mo' }]
};

// End-of-section CTA — one consistent, small ask: book the call or dm.
function SectionCTA({ note = 'sound familiar?' }) {
  return (
    <div className="section-cta">
      <span className="annot rot-r">{note}</span>
      <a href={CONTACTS.cal.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><Stamp>book 15 min →</Stamp></a>
      <a href={CONTACTS.x.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}><Stamp>dm on 𝕏 →</Stamp></a>
    </div>);
}

// "Now" marker — dated sticky in the hero. TODO(prasan): update monthly.
const NOW_NOTE = {
  date: 'june \u201926',
  lines: ['Looking for the next long term project. ;)', 'writing: irl→url essay, pt 2', 'reading: Show your work.']
};

// Guestbook — placeholder quotes, to be swapped for real alumni notes.
const GUESTBOOK_NOTES = [
{ q: 'Ecosystem developers recognising before HH3.', a: 'builder · HH3', c: '' },
{ q: 'grow the ecosystem', a: 'speaker · ADI \u201925', c: 'blue' },
{ q: 'He asks who NOT to invite. That changed how I think about rooms.', a: 'community lead · ecosystem partner', c: '' },
{ q: "Prasan didn't run a hackathon. He built a place we kept coming back to.", a: 'founder · HH2 alum', c: 'pink', video: true },
{ q: 'Half my cofounder search ended at a hacker house he curated.', a: 'founder · HH4', c: 'green' },
{ q: 'Three years later I still post in that discord.', a: 'HH1 alum', c: 'blue' },
{ q: 'The Singapore house is where my cofounder conversation actually started.', a: 'founder · Singapore HH', c: 'pink' }];


// Flagship case study — the HH2 → ARlink story, told as a scrapbook spread.
const CASE_STUDY = {
  kicker: 'case study 01 · flagship',
  title: 'HH2 → ARlink: from a dev-tools cohort to a funded company',
  sub: 'ARlink emerged from this two-week residential cohort in Mussoorie (IN) — and later raised a $2.5M seed.',
  steps: [
  { tag: 'WK 0', t: 'Curation', b: '60 applications → 14 builders. who we said no to mattered.' },
  { tag: 'WK 1', t: 'The house', b: 'co-living · shared meals · one rule: ship daily.' },
  { tag: 'WK 2', t: 'Demo day', b: 'ARlink demos one-click permaweb deploys. room goes quiet.' },
  { tag: '+6 MO', t: 'The follow-through', b: 'intros · debriefs · launchpad support · then the term sheet.' }],
  decisions: [
  { t: 'residential > sprint', b: '2 weeks of co-living, not 48 hours of caffeine.' },
  { t: 'follow-through as infra', b: 'the seed closed 6 months AFTER demo day. that gap is the product.' }],
  outcome: { v: '$2.5M', l: 'later raised by ARlink · 2025' },
  artifacts: [
  { label: 'HH2 · DAY 1', cap: 'Rolling in' },
  { label: 'WHITEBOARD', cap: 'beyond the screens' },
  { label: 'DEMO DAY', cap: 'arlink on stage' }]
};

const LIBRARY_ITEMS = [
{ k: 'book', t: 'Bowling Alone', s: 'Putnam' },
{ k: 'book', t: 'The Death and Life of Great American Cities', s: 'Jacobs' },
{ k: 'travel', t: 'Mussoorie · HH3', s: 'Dec 2024' },
{ k: 'music', t: 'side a: lofi study', s: 'updated weekly' },
{ k: 'bucket', t: 'A residency in Lisbon', s: 'someday' },
{ k: 'book', t: 'Working in Public', s: 'Eghbal' },
{ k: 'travel', t: 'Bengal · HH4', s: 'Apr 2025' },
{ k: 'music', t: 'side b: hyperpop', s: 'weekend mood' },
{ k: 'bucket', t: 'Host a hacker house abroad', s: 'maybe Lisbon, maybe Berlin' },
{ k: 'book', t: 'Impro', s: 'Johnstone' }];


Object.assign(window, {
  NAV_LINKS, SECTIONS_DEFAULT,
  Placeholder, Polaroid, Tape, Sticky, SectionHeader, Stamp, Squiggle, Arrow, Kicker,
  MockNav, XOGame, Ticker, Squiggly, Draggable,
  MANIFESTO, QUOTE, TICKER_ITEMS, LESSONS, ARWEAVE_STATS, PILLARS, JOURNEY,
  WINSTON_EPISODES, VIDEO_CATEGORIES, COMMUNITY_HIGHLIGHTS, LIBRARY_ITEMS,
  NOW_NOTE, GUESTBOOK_NOTES, CASE_STUDY, WINSTON_AWARDS, CONTACTS, pageNav,
  IMPACT_BAND, RECEIPTS, X_STATS, SectionCTA, SocialIcons
});

// Page-in transition — a short paper slide on load. JS-gated so hidden
// capture contexts and reduced-motion users always see the resting state.
if (document.visibilityState !== 'hidden' &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.classList.add('page-in');
  setTimeout(() => document.body.classList.remove('page-in'), 700);
}