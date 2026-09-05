import { profile } from '../data';

const links = [
  { href: '#profile', label: 'profile' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-8">
        <div className="flex items-center gap-2 font-mono text-sm text-text">
          <span className="h-[7px] w-[7px] rounded-full bg-green shadow-[0_0_8px_#3ECF8E]" />
          gourav-fagna<span className="text-text-faint">.infra</span>
        </div>
        <div className="hidden gap-7 font-mono text-[13px] text-text-dim md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-amber">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-[3px] border border-amber-dim px-3.5 py-1.5 font-mono text-[13px] text-amber transition-colors hover:bg-amber hover:text-bg"
        >
          say hello
        </a>
      </div>
    </nav>
  );
}
