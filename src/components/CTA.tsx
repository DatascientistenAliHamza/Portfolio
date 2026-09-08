"use client";

import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

export default function CTA() {
  const { lang } = useLanguage();
  const t = content[lang].cta;

  return (
    <div className="cta-band">
      <div>
        <h3>{t.heading}</h3>
        <p>{t.body}</p>
      </div>
      <a className="cta-btn" href="mailto:ali.hamza@leadpoint.se">
        {t.button} →
      </a>
    </div>
  );
}
