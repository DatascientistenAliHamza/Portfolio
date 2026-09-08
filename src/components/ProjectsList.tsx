import Reveal from "./Reveal";

const ROWS = [
  {
    status: "2026 — GELITA AG",
    title: "Industrial Automation & Machine Optimization",
    desc: "A focused data science engagement at Gelita on industrial system automation and machine optimization — separate from the earlier Power BI support work — that delivered strong, measurable results on the production line.",
    tags: ["Industrial automation", "Process optimization", "Production data"],
    spark: "M0,45 20,40 40,42 60,30 80,33 100,20 120,24 140,15 160,18 180,8 200,12 220,5",
    color: "#FFB238",
  },
  {
    status: "2025 — MALMÖ STAD",
    title: "City Operations Reporting",
    desc: "Power BI reporting built for the City of Malmö, turning municipal data into dashboards that non-technical stakeholders could open and actually use.",
    tags: ["Power BI", "DAX", "Public sector data"],
    spark: "M0,10 20,15 40,12 60,22 80,18 100,28 120,24 140,35 160,30 180,40 200,36 220,45",
    color: "#4CE3D6",
  },
  {
    status: "2025 — FC ROSENGÅRD",
    title: "Club Operations Dashboard",
    desc: "Power BI reporting for FC Rosengård, consolidating operational and performance data into dashboards the club's staff relied on day to day.",
    tags: ["Power BI", "Sports operations data"],
    spark: "M0,20 20,28 40,18 60,25 80,15 100,30 120,22 140,10 160,16 180,9 200,14 220,6",
    color: "#FF6B4A",
  },
];

export default function ProjectsList() {
  return (
    <div className="projects-list">
      {ROWS.map((row) => (
        <Reveal className="proj-row" key={row.title}>
          <div>
            <div className="proj-status">
              <span className="led ok" />
              <span className="status-text mono">{row.status}</span>
            </div>
            <div className="proj-title">{row.title}</div>
            <div className="proj-desc">{row.desc}</div>
            <div className="proj-tags">
              {row.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <svg className="spark" viewBox="0 0 220 60">
            <path d={row.spark} fill="none" stroke={row.color} strokeWidth="2" />
          </svg>
        </Reveal>
      ))}
    </div>
  );
}
