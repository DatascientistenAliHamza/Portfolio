import GelatineDiagram from "./GelatineDiagram";
import ProjectsList from "./ProjectsList";
import TortillaLine from "./TortillaLine";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-head">
        <span className="section-num mono">03</span>
        <h2>Selected work</h2>
      </div>

      <GelatineDiagram />
      <ProjectsList />

      <div className="side-heading">
        <span className="side-badge">
          <span className="logo-dot" style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} />
          Personal project — built in my free time
        </span>
        <p>
          A tortilla production line, simulated end to end: I wanted to see whether the same
          anomaly-detection and downtime-tracking thinking from my day job — stop time, bad batches, oven
          temperature — held up on a completely different process.
        </p>
      </div>

      <TortillaLine />
    </section>
  );
}
