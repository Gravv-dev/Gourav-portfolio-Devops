import SectionHead from './SectionHead';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line-soft py-[88px]">
      <div className="mx-auto max-w-[1120px] px-8">
        <SectionHead index="03" title="Experience" />
        <div className="relative pl-7">
          <div className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-line" />
          {experience.map((job) => (
            <div key={job.company} className="relative pb-0">
              <div className="absolute -left-7 top-1 h-[11px] w-[11px] rounded-full border-2 border-amber bg-bg" />
              <div className="mb-1.5 flex flex-wrap items-baseline gap-2.5">
                <span className="font-display text-[19px] font-semibold text-text">{job.role}</span>
                <span className="text-[15px] text-amber">@ {job.company}</span>
                <span className="ml-1.5 inline-block rounded-full border border-green/30 bg-green/[0.06] px-2 py-0.5 font-mono text-[11px] text-green">
                  {job.tag}
                </span>
              </div>
              <div className="mb-3.5 font-mono text-xs text-text-faint">{job.meta}</div>
              <ul className="flex flex-col gap-2.5">
                {job.points.map((p, i) => (
                  <li key={i} className="relative max-w-[74ch] pl-5 text-[15px] text-text-dim">
                    <span className="absolute left-0 font-mono text-green">+</span>
                    {p}
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
