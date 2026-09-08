"use client";

import PowerBIShowcase from "./PowerBIShowcase";
import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

export default function PowerBI() {
  const { lang } = useLanguage();
  const t = content[lang].powerbi;

  return (
    <section id="powerbi">
      <div className="section-head">
        <span className="section-num mono">{t.sectionNum}</span>
        <h2>{t.title}</h2>
      </div>
      <p className="hero-sub" style={{ marginTop: 0, marginBottom: "2rem" }}>
        {t.intro}
      </p>
      <PowerBIShowcase title={t.sports.title} filePrefix={t.sports.filePrefix} reports={t.sports.reports} />
      <PowerBIShowcase title={t.billing.title} filePrefix={t.billing.filePrefix} reports={t.billing.reports} />
    </section>
  );
}
