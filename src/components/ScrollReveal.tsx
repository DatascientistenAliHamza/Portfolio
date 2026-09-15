"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  className,
  y = 32,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!el || reduced) return;

    const targets = el.children.length ? Array.from(el.children) : [el];
    let safety: number | undefined;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
          // Safety net: once the reveal actually starts, guarantee the
          // content ends up visible even if the tab gets backgrounded
          // (rAF stalls) or anything else interrupts the tween mid-flight.
          onEnter: () => {
            safety = window.setTimeout(() => {
              gsap.set(targets, { clearProps: "opacity,transform" });
            }, 2500);
          },
        },
      });
    });

    return () => {
      ctx.revert();
      if (safety) window.clearTimeout(safety);
    };
  }, [y, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
