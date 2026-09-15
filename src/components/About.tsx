"use client";

import RadarChart from "./RadarChart";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang].about;

  return (
    <section id="about">
      <ScrollReveal className="section-head">
        <span className="section-num mono">{t.sectionNum}</span>
        <h2>{t.title}</h2>
      </ScrollReveal>
      <ScrollReveal className="about-grid" y={24} stagger={0.12}>
        <div className="about-text">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <p>{t.p4}</p>
          <div className="fun-fact mono">{t.funFact}</div>
        </div>
        <div className="radar-wrap">
          <RadarChart />
          <div className="radar-caption">{t.radarCaption}</div>
        </div>
      </ScrollReveal>
    </section>
  );
}
