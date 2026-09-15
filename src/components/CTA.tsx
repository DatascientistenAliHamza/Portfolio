"use client";

import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

export default function CTA() {
  const { lang } = useLanguage();
  const t = content[lang].cta;

  return (
    <ScrollReveal className="cta-band" y={20} stagger={0.1}>
      <div>
        <h3>{t.heading}</h3>
        <p>{t.body}</p>
      </div>
      <a className="cta-btn" href="mailto:ali.hamza@leadpoint.se">
        {t.button} →
      </a>
    </ScrollReveal>
  );
}
