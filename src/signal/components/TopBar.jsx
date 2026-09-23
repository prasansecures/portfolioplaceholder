export default function TopBar({ onReset }) {
  return (
    <header className="topbar">
      <div className="shell topbar-inner">
        <a className="brand" href="#ws-title" aria-label="Founder Signal OS, back to the working surface">
          <span className="brand-mark" aria-hidden="true" />
          Founder Signal OS
        </a>
        <nav className="topnav" aria-label="Sections">
          <a href="#queue">Queue</a>
          <a href="#playbook">Playbook</a>
          <a href="#evidence">Evidence</a>
          <a href="#about">About</a>
        </nav>
        <div className="topbar-right">
          <span className="ctx">Prasan Singh · for Company Ventures</span>
          <button type="button" className="btn btn-quiet" onClick={onReset}>
            Reset demo
          </button>
        </div>
      </div>
    </header>
  );
}
