import SectionHead from './SectionHead';
import { certifications, education } from '../data';

export default function Credentials() {
  return (
    <section id="credentials" className="border-t border-line-soft py-[88px]">
      <div className="mx-auto max-w-[1120px] px-8">
        <SectionHead index="05" title="Certifications & education" />
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-3.5">
            {certifications.map((c) => (
              <div key={c} className="flex items-center gap-3.5 rounded-md border border-line bg-panel px-[18px] py-4">
                <span className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full border border-amber-dim font-mono text-[11px] text-amber">
                  ✓
                </span>
                <span className="text-[14.5px] text-text">{c}</span>
              </div>
            ))}
          </div>
          <div className="rounded-md border border-line bg-panel px-[22px] py-5">
            <div className="mb-1.5 font-display text-[17px] font-semibold text-text">{education.degree}</div>
            <div className="text-[14.5px] text-text-dim">{education.school}</div>
            <div className="mt-2 font-mono text-xs text-text-faint">{education.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
