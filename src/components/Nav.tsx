"use client";

import { useState } from "react";
import LeadpointMark from "./LeadpointMark";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const t = content[lang].nav;

  return (
    <nav>
      <div className="logo">
        <span className="logo-dot" />
        ali hamza
      </div>
      <button
        type="button"
        className="nav-toggle"
        aria-label={t.toggleMenu}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={open ? "open" : undefined}>
        <li className="badge">
          <span className="logo-dot" style={{ animation: "pulseDot 1.6s ease-in-out infinite" }} />
          {t.badge}
        </li>
        <li>
          <a href="#about" onClick={() => setOpen(false)}>
            {t.about}
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setOpen(false)}>
            {t.experience}
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setOpen(false)}>
            {t.projects}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpen(false)}>
            {t.contact}
          </a>
        </li>
        <li>
          <LanguageToggle />
        </li>
        <li>
          <LeadpointMark />
        </li>
      </ul>
    </nav>
  );
}
