import SectionHead from './SectionHead';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="projects-section border-t border-line-soft py-[88px]">
      <div className="mx-auto max-w-[1120px] px-8">
        <SectionHead index="04" title="Featured projects" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.num} className="project-card rounded-md border border-line bg-panel p-[26px] transition-colors hover:border-amber-dim">
              <div className="mb-2.5 font-mono text-xs text-text-faint">project · {p.num}</div>
              <div className="mb-2.5 font-display text-[19px] font-semibold text-text">{p.title}</div>
              <div className="mb-4 break-words font-mono text-xs text-amber">{p.path}</div>
              <ul className="flex flex-col gap-2">
                {p.points.map((pt, i) => (
                  <li key={i} className="relative pl-4 text-[14.5px] text-text-dim">
                    <span className="absolute left-0 text-text-faint">›</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
