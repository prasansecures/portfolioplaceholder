export default function ActionLink({ href, children, variant, style }) {
  const isExternal = /^https?:\/\//.test(href);
  const className = variant === 'ghost' ? 'btn ghost' : 'btn';

  return (
    <a
      className={className}
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
      style={style}
    >
      {children}
    </a>
  );
}
