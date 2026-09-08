"use client";

import ProjectsList from "./ProjectsList";
import TortillaLine from "./TortillaLine";
import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

export default function Projects() {
  const { lang } = useLanguage();
  const t = content[lang].projects;

  return (
    <section id="projects">
      <div className="section-head">
        <span className="section-num mono">{t.sectionNum}</span>
        <h2>{t.title}</h2>
      </div>

      <ProjectsList />

      <div className="side-heading">
        <span className="side-badge">
          <span className="logo-dot" style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} />
          {t.sideBadge}
        </span>
        <p>{t.sideText}</p>
      </div>

      <TortillaLine />
    </section>
  );
}
