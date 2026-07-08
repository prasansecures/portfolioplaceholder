// app.jsx — host shell: Tweaks (theme / font pair / hero variant / section
// ordering / density) + boot stamp + theme-toggle event from the mock nav.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "fontPair": "marker",
  "hero": "manifesto",
  "density": "cozy",
  "sectionOrder": ["hero", "whatido", "journey", "proof", "winston", "casestudy", "lessons", "community", "footer"]
} /*EDITMODE-END*/;

const FONT_PAIRS = {
  marker: { display: '"Permanent Marker", "Marker Felt", cursive', body: '"Kalam", "Caveat", cursive', label: '"Architects Daughter", monospace', tag: 'Marker · Kalam' },
  caveat: { display: '"Caveat", "Patrick Hand", cursive', body: '"Patrick Hand", "Kalam", cursive', label: '"Shadows Into Light", monospace', tag: 'Caveat · Patrick' },
  shadow: { display: '"Shadows Into Light Two", cursive', body: '"Indie Flower", cursive', label: '"Special Elite", monospace', tag: 'Shadows · Indie' },
  rough: { display: '"Rock Salt", cursive', body: '"Caveat", cursive', label: '"Cutive Mono", monospace', tag: 'Rock Salt · Caveat' }
};

const ALL_SECTION_IDS = SECTIONS_DEFAULT.map((s) => s.id);

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Boot stamp — a short loading moment, once per session. Skipped when the
  // document is hidden (captures) or the user prefers reduced motion.
  const [booting, setBooting] = React.useState(() =>
  document.visibilityState !== 'hidden' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
  !sessionStorage.getItem('pp-booted')
  );
  React.useEffect(() => {
    if (!booting) return;
    const tm = setTimeout(() => {
      sessionStorage.setItem('pp-booted', '1');
      setBooting(false);
    }, 1200);
    return () => clearTimeout(tm);
  }, [booting]);

  // The mock nav's ☀/☾ button dispatches this event.
  React.useEffect(() => {
    const h = () => setTweak('theme', t.theme === 'dark' ? 'light' : 'dark');
    window.addEventListener('pp-toggle-theme', h);
    return () => window.removeEventListener('pp-toggle-theme', h);
  }, [t.theme]);

  // Apply theme + density to <html> so CSS vars cascade
  React.useEffect(() => {
    document.documentElement.dataset.theme = t.theme;
    document.documentElement.dataset.density = t.density;
  }, [t.theme, t.density]);

  // Swap fonts via CSS variables on :root
  React.useEffect(() => {
    const f = FONT_PAIRS[t.fontPair] || FONT_PAIRS.marker;
    const root = document.documentElement;
    root.style.setProperty('--font-display', f.display);
    root.style.setProperty('--font-body', f.body);
    root.style.setProperty('--font-label', f.label);
  }, [t.fontPair]);

  // Scroll-entrance reveals. Visible is the BASE state — JS opts sections
  // INTO the hidden 'pre-reveal' state, so no-JS, print, and hidden/capture
  // contexts (where IntersectionObserver never fires) always show content.
  // Skipped entirely when the document isn't visible, and any stragglers are
  // force-revealed by a timeout safety net.
  React.useEffect(() => {
    if (document.visibilityState === 'hidden') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = Array.from(document.querySelectorAll('.wf-section'));
    const reveal = (el) => el.classList.remove('pre-reveal');
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => {
      // Only pre-hide sections below the fold; everything visible stays put.
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('pre-reveal');
        io.observe(el);
      }
    });
    // Safety net: never leave anything hidden for long.
    const failsafe = setTimeout(() => els.forEach(reveal), 6000);
    return () => {
      clearTimeout(failsafe);
      io.disconnect();
      els.forEach(reveal);
    };
  }, [t.sectionOrder]);

  // Build the ordered section list. Anything missing from t.sectionOrder is
  // appended in default order so a corrupted/stale list never strands sections.
  const orderedSections = React.useMemo(() => {
    const order = t.sectionOrder && t.sectionOrder.length ? t.sectionOrder : ALL_SECTION_IDS;
    const seen = new Set();
    const seq = [];
    for (const id of order) {
      const s = SECTIONS_DEFAULT.find((x) => x.id === id);
      if (s && !seen.has(id)) {seq.push(s);seen.add(id);}
    }
    for (const s of SECTIONS_DEFAULT) {
      if (!seen.has(s.id)) seq.push(s);
    }
    return seq;
  }, [t.sectionOrder]);

  const moveSection = (id, dir) => {
    const order = orderedSections.map((s) => s.id);
    const i = order.indexOf(id);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= order.length) return;
    [order[i], order[j]] = [order[j], order[i]];
    setTweak('sectionOrder', order);
  };

  const resetOrder = () => setTweak('sectionOrder', ALL_SECTION_IDS);

  return (
    <div data-screen-label="Scrapbook" data-comment-anchor="51925a542b-div-124-5">
      {booting &&
      <div className="boot-overlay" aria-hidden="true">
          <div className="boot-stamp">prasan<span>*</span></div>
          <div className="boot-sub">stamping you in…</div>
        </div>
      }
      <Direction2 sectionOrder={orderedSections} hero={t.hero} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.theme}
          options={[{ value: 'light', label: 'day' }, { value: 'dark', label: 'midnight' }]}
          onChange={(v) => setTweak('theme', v)} />
        
        <TweakSelect
          label="Font pairing"
          value={t.fontPair}
          options={Object.entries(FONT_PAIRS).map(([k, v]) => ({ value: k, label: v.tag }))}
          onChange={(v) => setTweak('fontPair', v)} />
        
        <TweakRadio
          label="Density"
          value={t.density}
          options={['compact', 'cozy']}
          onChange={(v) => setTweak('density', v)} />
        

        <TweakSection label="Hero" />
        <TweakSelect
          label="Hero variant"
          value={t.hero}
          options={[
          { value: 'manifesto', label: 'Manifesto (default)' },
          { value: 'quote', label: 'Opening quote' },
          { value: 'portrait', label: 'Portrait + manifesto' }]
          }
          onChange={(v) => setTweak('hero', v)} />
        

        <TweakSection label="Section order" />
        <div className="reorder">
          {orderedSections.map((s, i) =>
          <div key={s.id} className="reorder-row">
              <span className="reorder-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="reorder-name">{s.label.toLowerCase()}</span>
              <button type="button" disabled={i === 0} onClick={() => moveSection(s.id, -1)}>↑</button>
              <button type="button" disabled={i === orderedSections.length - 1} onClick={() => moveSection(s.id, 1)}>↓</button>
            </div>
          )}
        </div>
        <TweakButton secondary label="Reset to default order" onClick={resetOrder} />

        <style>{`
          .reorder { display: flex; flex-direction: column; gap: 3px; max-height: 240px; overflow-y: auto;
                     padding: 4px; background: rgba(0,0,0,0.04); border-radius: 6px; }
          .reorder-row { display: grid; grid-template-columns: 22px 1fr 22px 22px; gap: 4px;
                         align-items: center; font-size: 11px; padding: 3px 4px; }
          .reorder-num { font-family: monospace; color: rgba(41,38,27,0.5); }
          .reorder-name { text-transform: lowercase; font-variant: small-caps; }
          .reorder-row button {
            appearance: none; border: 0; background: rgba(255,255,255,0.7);
            border-radius: 4px; height: 20px; font-size: 10px; cursor: default;
            color: rgba(41,38,27,0.78);
          }
          .reorder-row button:hover:not([disabled]) { background: rgba(255,255,255,1); }
          .reorder-row button[disabled] { opacity: 0.3; }
        `}</style>
      </TweaksPanel>
    </div>);

}

window.App = App;