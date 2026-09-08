"use client";

import { useEffect, useRef } from "react";

const SKILLS = [
  { name: "Python / ML", val: 0.92 },
  { name: "SQL", val: 0.88 },
  { name: "Power BI / DAX", val: 0.93 },
  { name: "Time-series & sensors", val: 0.9 },
  { name: "SCADA / OT data", val: 0.8 },
  { name: "Statistics", val: 0.75 },
];

const NS = "http://www.w3.org/2000/svg";

export default function RadarChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const cx = 160;
    const cy = 160;
    const R = 115;
    const n = SKILLS.length;

    function pt(i: number, r: number): [number, number] {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
    }

    [0.25, 0.5, 0.75, 1].forEach((f) => {
      const ring = document.createElementNS(NS, "polygon");
      ring.setAttribute("points", Array.from({ length: n }, (_, i) => pt(i, R * f).join(",")).join(" "));
      ring.setAttribute("fill", "none");
      ring.setAttribute("stroke", "rgba(255,193,133,0.18)");
      svg.appendChild(ring);
    });

    SKILLS.forEach((s, i) => {
      const [x, y] = pt(i, R);
      const line = document.createElementNS(NS, "line");
      line.setAttribute("x1", String(cx));
      line.setAttribute("y1", String(cy));
      line.setAttribute("x2", String(x));
      line.setAttribute("y2", String(y));
      line.setAttribute("stroke", "rgba(255,193,133,0.18)");
      svg.appendChild(line);

      const [lx, ly] = pt(i, R + 26);
      const label = document.createElementNS(NS, "text");
      label.setAttribute("x", String(lx));
      label.setAttribute("y", String(ly));
      label.setAttribute("text-anchor", Math.abs(lx - cx) < 4 ? "middle" : lx > cx ? "start" : "end");
      label.setAttribute("dominant-baseline", "middle");
      label.setAttribute("fill", "#C9B7A5");
      label.setAttribute("font-size", "10.5");
      label.setAttribute("font-family", "var(--font-jetbrains-mono), monospace");
      label.textContent = s.name;
      svg.appendChild(label);
    });

    const poly = document.createElementNS(NS, "polygon");
    const centerPts = Array.from({ length: n }, () => `${cx},${cy}`).join(" ");
    const targetPts = SKILLS.map((s, i) => pt(i, R * s.val).join(",")).join(" ");
    poly.setAttribute("points", centerPts);
    poly.setAttribute("fill", "url(#radarFill)");
    poly.setAttribute("stroke", "#FFB238");
    poly.setAttribute("stroke-width", "1.5");
    poly.style.transition = "all 1.4s cubic-bezier(.16,.84,.44,1)";

    const defs = document.createElementNS(NS, "defs");
    const grad = document.createElementNS(NS, "linearGradient");
    grad.setAttribute("id", "radarFill");
    grad.setAttribute("x1", "0");
    grad.setAttribute("y1", "0");
    grad.setAttribute("x2", "1");
    grad.setAttribute("y2", "1");
    const stop1 = document.createElementNS(NS, "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "#FFB238");
    stop1.setAttribute("stop-opacity", "0.35");
    const stop2 = document.createElementNS(NS, "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", "#4CE3D6");
    stop2.setAttribute("stop-opacity", "0.18");
    grad.appendChild(stop1);
    grad.appendChild(stop2);
    defs.appendChild(grad);
    svg.appendChild(defs);
    svg.appendChild(poly);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (reduced) {
              poly.setAttribute("points", targetPts);
            } else {
              requestAnimationFrame(() => poly.setAttribute("points", targetPts));
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(svg);

    return () => {
      obs.disconnect();
      while (svg.firstChild) svg.removeChild(svg.firstChild);
    };
  }, []);

  return <svg ref={svgRef} id="radar" width={320} height={320} viewBox="0 0 320 320" />;
}
