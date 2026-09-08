export default function LeadpointMark() {
  return (
    <span className="leadpoint-mark" title="Placed via Leadpoint">
      <svg viewBox="0 0 20 20" width="15" height="15">
        <path d="M2,3 L13,7 L2,7 Z" fill="var(--amber)" />
        <path d="M2,7.6 L13,7 L2,17 Z" fill="var(--text)" opacity="0.75" />
      </svg>
      <span className="lp-text">
        LEAD<span className="lp-accent">P</span>OINT
      </span>
    </span>
  );
}
