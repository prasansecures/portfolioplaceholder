export default function SectionHead({ title, number }) {
  return (
    <div className="sec-head rv">
      <div className="sec-title">{title}</div>
      <span className="sec-num">{number}</span>
    </div>
  );
}
