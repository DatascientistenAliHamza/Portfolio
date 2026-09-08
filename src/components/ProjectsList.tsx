"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

const SPARKS = [
  { path: "M0,45 20,40 40,42 60,30 80,33 100,20 120,24 140,15 160,18 180,8 200,12 220,5", color: "#FFB238" },
  { path: "M0,10 20,15 40,12 60,22 80,18 100,28 120,24 140,35 160,30 180,40 200,36 220,45", color: "#4CE3D6" },
  { path: "M0,20 20,28 40,18 60,25 80,15 100,30 120,22 140,10 160,16 180,9 200,14 220,6", color: "#FF6B4A" },
];

export default function ProjectsList() {
  const { lang } = useLanguage();
  const t = content[lang].projects;

  return (
    <div className="projects-list">
      {t.rows.map((row, i) => (
        <Reveal className="proj-row" key={row.id}>
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
            <div className="ref-note">{t.refNote}</div>
          </div>
          <svg className="spark" viewBox="0 0 220 60">
            <path d={SPARKS[i].path} fill="none" stroke={SPARKS[i].color} strokeWidth="2" />
          </svg>
        </Reveal>
      ))}
    </div>
  );
}
