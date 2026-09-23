// Anonymized avatar: a geometric monogram, never a photo or likeness.
export default function Avatar({ candidate, size = 'md' }) {
  const n = parseInt(candidate.id.slice(1), 10);
  return (
    <span className={`avatar avatar-${size}`} style={{ '--rot': `${(n * 37) % 180}deg` }} aria-hidden="true">
      <span className="avatar-glyph">{candidate.name[0]}</span>
    </span>
  );
}
