export default function SectionHead({ index, title, subtitle }) {
  return (
    <>
      <div className={`flex items-baseline gap-3.5 ${subtitle ? 'mb-2' : 'mb-10'}`}>
        <span className="font-mono text-[13px] text-amber">{index}</span>
        <h2 className="section-heading font-display text-[30px] font-semibold tracking-tight text-text">{title}</h2>
      </div>
      {subtitle && <p className="mb-10 max-w-[60ch] text-[15px] text-text-dim">{subtitle}</p>}
    </>
  );
}
