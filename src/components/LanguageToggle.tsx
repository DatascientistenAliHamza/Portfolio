"use client";

import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

export default function LanguageToggle({ className }: { className?: string }) {
  const { lang, toggle } = useLanguage();
  const label = content[lang].nav.langToggle;

  return (
    <button type="button" className={`lang-toggle mono${className ? ` ${className}` : ""}`} onClick={toggle} aria-label="Switch language">
      {label}
    </button>
  );
}
