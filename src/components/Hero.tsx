"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang].hero;

  const heroRef = useRef<HTMLElement>(null);
  const auroraRef = useRef<HTMLSpanElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const instrumentsRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // entrance animation
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (headlineRef.current) tl.from(headlineRef.current, { y: 26, opacity: 0, duration: 0.9 });
    if (subRef.current) tl.from(subRef.current, { y: 16, opacity: 0, duration: 0.7 }, "-=0.55");
    if (instrumentsRef.current?.children.length) {
      tl.from(
        instrumentsRef.current.children,
        { y: 20, opacity: 0, duration: 0.6, stagger: 0.12 },
        "-=0.4",
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  // cursor-reactive parallax on the aurora glow and avatar
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    const hero = heroRef.current;
    if (!hero) return;

    const moveAurora = gsap.quickTo(auroraRef.current, "x", { duration: 1.1, ease: "power3.out" });
    const moveAuroraY = gsap.quickTo(auroraRef.current, "y", { duration: 1.1, ease: "power3.out" });
    const moveAvatar = gsap.quickTo(avatarRef.current, "x", { duration: 0.6, ease: "power3.out" });
    const moveAvatarY = gsap.quickTo(avatarRef.current, "y", { duration: 0.6, ease: "power3.out" });

    function onMove(e: MouseEvent) {
      const rect = hero!.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      moveAurora(px * 60);
      moveAuroraY(py * 40);
      moveAvatar(px * 10);
      moveAvatarY(py * 10);
    }

    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  // animated KPI count-up
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    t.instruments.forEach((inst, i) => {
      const el = numRefs.current[i];
      if (!el) return;
      if (reduced) {
        el.textContent = `${inst.target}${inst.suffix}`;
        return;
      }
      const counter = { value: 0 };
      gsap.to(counter, {
        value: inst.target,
        duration: 1.6,
        delay: 0.3 + i * 0.15,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = `${Math.round(counter.value)}${inst.suffix}`;
        },
      });
    });
    // t.instruments is stable per language; re-run whenever it changes so a
    // language toggle still shows the correct final numbers.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <header className="hero" ref={heroRef}>
      <span className="aurora" ref={auroraRef} />
      <span className="bracket tl" />
      <span className="bracket tr" />
      <span className="bracket bl" />
      <span className="bracket br" />

      <div className="hero-top">
        <div className="avatar" ref={avatarRef}>
          <span>AH</span>
        </div>
        <div className="prompt">
          &gt; {t.prompt}
          <span className="caret" />
        </div>
      </div>

      <h1 className="headline" ref={headlineRef}>
        {t.headlinePre}
        <span className="grad">{t.headlineGrad}</span>
        {t.headlinePost}
      </h1>
      <p className="hero-sub" ref={subRef}>
        {t.sub}
      </p>

      <div className="instruments" ref={instrumentsRef}>
        {t.instruments.map((inst, i) => (
          <div className="instrument" key={i}>
            <span
              className="kpi-num mono"
              ref={(el) => {
                numRefs.current[i] = el;
              }}
            >
              0{inst.suffix}
            </span>
            <div className="inst-label">{inst.label}</div>
          </div>
        ))}
      </div>
    </header>
  );
}
