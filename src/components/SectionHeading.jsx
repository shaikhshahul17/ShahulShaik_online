export default function SectionHeading({ eyebrow, title, accent }) {
  return (
    <div className="mb-5">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">
        {title} {accent && <span className="accent">{accent}</span>}
      </h2>
    </div>
  );
}
