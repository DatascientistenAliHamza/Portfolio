"use client";

import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

export default function Experience() {
  const { lang } = useLanguage();
  const t = content[lang].experience;

  return (
    <section id="experience">
      <div className="section-head">
        <span className="section-num mono">{t.sectionNum}</span>
        <h2>{t.title}</h2>
      </div>
      <div className="timeline">
        {t.entries.map((e) => (
          <div className="tl-row" key={e.id}>
            <div className="station">{e.id}</div>
            <div className="tl-content">
              <div className="tl-period mono">{e.period}</div>
              <div className="tl-role">{e.role}</div>
              <div className="tl-org">
                {e.org} <span className="ref-note">({t.refNote})</span>
              </div>
              <div className="tl-desc">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
