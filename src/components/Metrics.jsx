import { metrics } from '../data';

export default function Metrics() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-panel px-[22px] py-7">
              <div className="font-mono text-[32px] font-semibold text-amber">{m.num}</div>
              <div className="mt-1.5 text-[13px] text-text-dim">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
