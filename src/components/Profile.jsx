import SectionHead from './SectionHead';
import { profile } from '../data';

export default function Profile() {
  return (
    <section id="profile" className="border-t border-line-soft py-[88px]">
      <div className="mx-auto max-w-[1120px] px-8">
        <SectionHead index="01" title="Profile" />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[200px_1fr] md:gap-10">
          <div className="pt-1 font-mono text-xs text-text-faint">// summary</div>
          <p className="max-w-[66ch] text-[16.5px] text-text-dim">{profile.summary}</p>
        </div>
      </div>
    </section>
  );
}
