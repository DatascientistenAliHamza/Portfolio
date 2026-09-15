"use client";

import TabShowcase from "./TabShowcase";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

export default function PowerBI() {
  const { lang } = useLanguage();
  const t = content[lang].powerbi;

  return (
    <section id="powerbi">
      <ScrollReveal className="section-head">
        <span className="section-num mono">{t.sectionNum}</span>
        <h2>{t.title}</h2>
      </ScrollReveal>
      <p className="hero-sub" style={{ marginTop: 0, marginBottom: "2rem" }}>
        {t.intro}
      </p>
      <TabShowcase title={t.sports.title} fileLabel={t.sports.fileLabel} reports={t.sports.reports} />
      <TabShowcase title={t.billing.title} fileLabel={t.billing.fileLabel} reports={t.billing.reports} />
    </section>
  );
}
