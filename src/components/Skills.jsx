import SectionHead from './SectionHead';
import { stack } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="skills-section border-t border-line-soft py-[88px]">
      <div className="mx-auto max-w-[1120px] px-8">
        <SectionHead
          index="02"
          title="Technical stack"
          subtitle="Organized the way infrastructure is actually layered — from cloud platform up through observability."
        />
        <div className="skills-list flex flex-col gap-px overflow-hidden rounded-md border border-line bg-line">
          {stack.map((row) => (
            <div key={row.name} className="grid grid-cols-1 items-center gap-2.5 bg-panel px-6 py-5 md:grid-cols-[220px_1fr] md:gap-6">
              <div className="font-mono text-[13px] text-amber">{row.name}</div>
              <div className="flex flex-wrap gap-2">
                {row.tags.map((tag) => (
                  <span key={tag} className="rounded-[3px] border border-line bg-panel-2 px-2.5 py-1 font-mono text-[12.5px] text-text-dim">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
