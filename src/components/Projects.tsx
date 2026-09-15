"use client";

import ProjectsList from "./ProjectsList";
import TortillaLine from "./TortillaLine";
import TabShowcase from "./TabShowcase";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

export default function Projects() {
  const { lang } = useLanguage();
  const t = content[lang].projects;

  return (
    <section id="projects">
      <ScrollReveal className="section-head">
        <span className="section-num mono">{t.sectionNum}</span>
        <h2>{t.title}</h2>
      </ScrollReveal>

      <ProjectsList />

      <div className="side-heading">
        <span className="side-badge">
          <span className="logo-dot" style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} />
          {t.sideBadge}
        </span>
        <p>{t.sideText}</p>
      </div>

      <TortillaLine />

      <div className="side-heading">
        <span className="side-badge">
          <span className="logo-dot" style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} />
          {t.lpreaderBadge}
        </span>
        <p>{t.lpreaderIntro}</p>
      </div>

      <TabShowcase title={t.lpreader.title} fileLabel={t.lpreader.fileLabel} reports={t.lpreader.reports} />
    </section>
  );
}
