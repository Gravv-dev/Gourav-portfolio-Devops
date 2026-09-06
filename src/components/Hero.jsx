import { profile } from '../data';

function TopologyDiagram() {
  return (
    <div className="topology-panel rounded-md border border-line bg-panel p-5">
      <div className="mb-3.5 flex items-center justify-between border-b border-line-soft pb-3 font-mono text-[11px] text-text-faint">
        <span>infra/topology.tf</span>
        <span>us-east-1</span>
      </div>
      <svg viewBox="0 0 400 300" className="block w-full h-auto">
        <g stroke="#302b33" strokeWidth="1.5">
          <line x1="60" y1="40" x2="200" y2="40" stroke="#713f9e" />
          <line x1="200" y1="40" x2="200" y2="100" stroke="#713f9e" />
          <line x1="130" y1="100" x2="270" y2="100" />
          <line x1="130" y1="100" x2="80" y2="160" stroke="#713f9e" />
          <line x1="200" y1="100" x2="200" y2="160" stroke="#713f9e" />
          <line x1="270" y1="100" x2="320" y2="160" stroke="#713f9e" />
          <line x1="80" y1="220" x2="80" y2="190" />
          <line x1="200" y1="220" x2="200" y2="190" />
          <line x1="320" y1="220" x2="320" y2="190" />
          <line x1="200" y1="220" x2="200" y2="260" stroke="#713f9e" />
        </g>

        <path
          d="M60,40 L200,40 L200,100 L200,160 L200,220 L200,260"
          stroke="#ec4899"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 300"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-620" dur="3.2s" repeatCount="indefinite" />
        </path>

        {[
          { x: 30, y: 25, w: 60, label: 'users', cx: 60, cy: 44 },
          { x: 165, y: 25, w: 70, label: 'cloudfront', cx: 200, cy: 44 },
          { x: 165, y: 85, w: 70, label: 'alb / nlb', cx: 200, cy: 104 },
          { x: 45, y: 160, w: 70, label: 'eks pod a', cx: 80, cy: 179 },
          { x: 165, y: 160, w: 70, label: 'eks pod b', cx: 200, cy: 179 },
          { x: 285, y: 160, w: 70, label: 'eks pod c', cx: 320, cy: 179 },
          { x: 165, y: 225, w: 70, label: 'rds multi-az', cx: 200, cy: 244 },
        ].map((n) => (
          <g key={n.label}>
            <rect x={n.x} y={n.y} width={n.w} height="30" rx="3" fill="#1a171c" stroke="#302b33" />
            <text x={n.cx} y={n.cy} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill="#aaa2ad">
              {n.label}
            </text>
          </g>
        ))}

        <rect x="165" y="265" width="70" height="26" rx="3" fill="none" stroke="#302b33" />
        <text x="200" y="282" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill="#d9f99d">
          99.99% up
        </text>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="hero-section overflow-hidden pt-24 pb-[72px]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-8 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/[0.06] px-3 py-1.5 font-mono text-xs text-green">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-green" />
            available for freelance &amp; full-time engagements
          </div>
          <h1 className="mb-3.5 font-display text-[38px] font-semibold leading-[1.05] tracking-tight text-text md:text-[58px]">
            {profile.name}
          </h1>
          <div className="mb-6 font-mono text-[17px] text-text-dim">{profile.role}</div>
          <p className="mb-8 max-w-[52ch] text-base text-text-dim">
            I design and run AWS infrastructure that stays up. 4.5+ years turning fragile deploys into automated, observable
            systems for fast-growing SaaS teams — EKS, Terraform, GitOps, and the DevSecOps guardrails around them.
          </p>
          <div className="mb-10 flex flex-wrap gap-3.5">
            <a
              href="#experience"
              className="rounded-[3px] bg-amber px-5 py-3 font-mono text-sm font-semibold text-bg transition-colors hover:bg-[#f0b45c]"
            >
              View experience
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-[3px] border border-line px-5 py-3 font-mono text-sm text-text transition-colors hover:border-text-dim"
            >
              Get in touch
            </a>
          </div>
          <div className="flex flex-wrap gap-7 font-mono text-[13px] text-text-faint">
            <span>{profile.location}</span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="text-text-dim transition-colors hover:text-amber">
              {profile.phone}
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-dim transition-colors hover:text-amber">
              {profile.github}
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-text-dim transition-colors hover:text-amber">
              {profile.linkedin}
            </a>
          </div>
        </div>

        <div className="hero-visual order-first md:order-last">
          <TopologyDiagram />
        </div>
      </div>
    </header>
  );
}
