"use client";

import Image from "next/image";
import LeadpointMark from "./LeadpointMark";
import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang].footer;

  return (
    <footer id="contact">
      <h2>
        {t.headingPre}
        <span className="grad">{t.headingGrad}</span>
        {t.headingPost}
      </h2>
      <div className="contact-links">
        <a href="mailto:ali.hamza@leadpoint.se">ali.hamza@leadpoint.se</a>
        <a href="https://www.linkedin.com/in/ali-hamza-b0a0242a4" target="_blank" rel="noopener">
          linkedin.com/in/ali-hamza
        </a>
        <a href="https://github.com/DatascientistenAliHamza" target="_blank" rel="noopener">
          github.com/DatascientistenAliHamza
        </a>
      </div>

      <div className="leadpoint-banner">
        <Image src="/leadpoint-logo.png" alt="Leadpoint" width={696} height={145} className="leadpoint-banner-logo" />
      </div>

      <div className="foot-note mono">
        <span>{t.footNote}</span>
        <LeadpointMark />
      </div>
    </footer>
  );
}
