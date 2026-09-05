import { profile } from '../data';

const links = [
  { href: `mailto:${profile.email}`, label: `✉ ${profile.email}` },
  { href: `tel:${profile.phone.replace(/\s/g, '')}`, label: `☎ ${profile.phone}` },
  { href: profile.linkedinUrl, label: `in ${profile.linkedin}`, external: true },
  { href: profile.githubUrl, label: `⌥ ${profile.github}`, external: true },
];

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-line-soft py-24 pb-12">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="mb-3.5 block font-mono text-[13px] text-amber">06 / contact</div>
        <h2 className="mb-5 max-w-[16ch] font-display text-[32px] font-semibold text-text md:text-[46px]">
          Let&apos;s build infrastructure that doesn&apos;t wake you up at 3am.
        </h2>
        <p className="mb-9 max-w-[52ch] text-base text-text-dim">
          Open to freelance consulting and full-time roles — zero-downtime deployments, cost optimization, and DevSecOps
          compliance.
        </p>
        <div className="mb-16 flex flex-wrap gap-3.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2.5 rounded-[3px] border border-line px-[18px] py-3 font-mono text-sm text-text transition-colors hover:border-amber hover:text-amber"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line-soft pt-7 font-mono text-xs text-text-faint">
          <span>{profile.name} — {profile.location}</span>
          <span>Built &amp; deployed 2026</span>
        </div>
      </div>
    </footer>
  );
}
