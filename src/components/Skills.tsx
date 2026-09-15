"use client";

import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

export default function Skills() {
  const { lang } = useLanguage();
  const t = content[lang].about;

  return (
    <div className="skills-wrap">
      <div className="skill-traits">
        <div className="skill-trait">
          <svg className="skill-trait-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M15.5 15.5L21 21" />
          </svg>
          <div>
            <div className="skill-trait-title">{t.traits[0].title}</div>
            <div className="skill-trait-desc">{t.traits[0].desc}</div>
          </div>
        </div>
        <div className="skill-trait">
          <svg className="skill-trait-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18h6" />
            <path d="M10 21h4" />
            <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.45 1 1.2 1 2.1h5c0-.9.4-1.65 1-2.1A6 6 0 0 0 12 3Z" />
          </svg>
          <div>
            <div className="skill-trait-title">{t.traits[1].title}</div>
            <div className="skill-trait-desc">{t.traits[1].desc}</div>
          </div>
        </div>
      </div>

      <div className="skill-tags-wrap">
        <div className="radar-caption" style={{ marginTop: 0, marginBottom: "0.9rem" }}>
          {t.radarCaption}
        </div>
        <div className="skill-tags">
          {t.skills.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
