const ENTRIES = [
  {
    id: "01",
    period: "2026",
    role: "Data Scientist — Industrial Automation Project",
    org: "Gelita AG",
    desc: "Came back to Gelita for a focused data science engagement on industrial system automation and machine optimization — separate from the earlier Power BI support work — and delivered a project with strong, measurable results.",
  },
  {
    id: "02",
    period: "2025",
    role: "Power BI Analyst",
    org: "Malmö Stad",
    desc: "Built and supported Power BI reporting for the City of Malmö, translating municipal data into dashboards non-technical stakeholders could use directly.",
  },
  {
    id: "03",
    period: "2025",
    role: "Power BI Analyst",
    org: "FC Rosengård",
    desc: "Delivered Power BI reporting for the club, turning operational and performance data into dashboards the club's staff could rely on day to day.",
  },
  {
    id: "04",
    period: "2024 — 2025",
    role: "Practicant — Production & Power BI Support",
    org: "Gelita AG",
    desc: "Started on the production floor at Gelita and supported the team's Power BI reporting alongside it — the foundation for the industrial automation project that followed in 2026.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-head">
        <span className="section-num mono">02</span>
        <h2>Experience</h2>
      </div>
      <div className="timeline">
        {ENTRIES.map((e) => (
          <div className="tl-row" key={e.id}>
            <div className="station">{e.id}</div>
            <div className="tl-content">
              <div className="tl-period mono">{e.period}</div>
              <div className="tl-role">{e.role}</div>
              <div className="tl-org">{e.org}</div>
              <div className="tl-desc">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
