"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  pulse: number;
  color: string;
};

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // sensor-network particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const palette = ["76,227,214", "255,178,56", "255,107,74"];
    let w = 0;
    let h = 0;
    let points: Point[] = [];
    let rafId: number | null = null;

    function resize() {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = Math.max(window.innerHeight, document.body.scrollHeight);
      const count = Math.min(65, Math.floor((w * h) / 30000));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        pulse: Math.random() * Math.PI * 2,
        color: palette[Math.floor(Math.random() * palette.length)],
      }));
    }
    window.addEventListener("resize", resize);
    resize();

    function step() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of points) {
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulse += 0.03;
        }
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(255,178,56,${(1 - dist / 130) * 0.14})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of points) {
        const glow = reduced ? 1 : 0.5 + Math.sin(p.pulse) * 0.5;
        ctx.fillStyle = `rgba(${p.color},${0.4 + glow * 0.4})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduced) rafId = requestAnimationFrame(step);
    }
    step();

    return () => {
      window.removeEventListener("resize", resize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // cursor-reactive glow
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.matchMedia("(pointer: coarse)").matches) return;

    let raf: number | null = null;
    let mx = 0;
    let my = 0;
    function onMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        document.body.style.setProperty("--mx", mx + "px");
        document.body.style.setProperty("--my", my + "px");
        raf = null;
      });
    }
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas id="net" ref={canvasRef} />
      <div className="veil" />
      <div id="cursorGlow" />
    </>
  );
}
