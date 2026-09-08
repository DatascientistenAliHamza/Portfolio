import LeadpointMark from "./LeadpointMark";

export default function Footer() {
  return (
    <footer id="contact">
      <h2>
        Let&apos;s put a <span className="grad">model</span> on your plant floor.
      </h2>
      <div className="contact-links">
        <a href="mailto:ali.hamza@leadpoint.se">ali.hamza@leadpoint.se</a>
        <a href="https://www.linkedin.com/in/ali-hamza-b0a0242a4" target="_blank" rel="noopener">
          linkedin.com/in/ali-hamza
        </a>
        <a href="https://github.com/DatascientistenAliHamza" target="_blank" rel="noopener">
          github.com/DatascientistenAliHamza
        </a>
      </div>
      <div className="foot-note mono">
        <span>{"// portfolio.tsx — last compiled 2026"}</span>
        <LeadpointMark />
      </div>
    </footer>
  );
}
