"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

const NS = "http://www.w3.org/2000/svg";

export default function GelatineDiagram() {
  const pathRef = useRef<SVGPathElement>(null);
  const layerRef = useRef<SVGGElement>(null);
  const { lang } = useLanguage();
  const t = content[lang].projects.gelatine;

  useEffect(() => {
    const pathEl = pathRef.current;
    const layer = layerRef.current;
    if (!pathEl || !layer) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const totalLength = pathEl.getTotalLength();
    const duration = 6000; // ms per full pass
    const packetCount = 3;

    // dryer zone in path-length terms (approx, based on path geometry)
    const dryerStartFrac = 0.34;
    const dryerEndFrac = 0.62;

    type Packet = {
      g: SVGGElement;
      label: SVGTextElement;
      circle: SVGCircleElement;
      trail: SVGCircleElement[];
      hist: DOMPoint[];
      offset: number;
    };

    const packets: Packet[] = Array.from({ length: packetCount }, (_, i) => {
      const g = document.createElementNS(NS, "g");
      const trail = [0, 1, 2, 3].map(() => {
        const t = document.createElementNS(NS, "circle");
        t.setAttribute("r", "5");
        t.setAttribute("fill", "#FFB238");
        layer.appendChild(t);
        return t;
      });
      const circle = document.createElementNS(NS, "circle");
      circle.setAttribute("r", "6");
      circle.setAttribute("fill", "#FFB238");
      circle.setAttribute("stroke", "#170F0C");
      circle.setAttribute("stroke-width", "1.5");
      const label = document.createElementNS(NS, "text");
      label.setAttribute("class", "packet-label mono");
      label.setAttribute("text-anchor", "middle");
      label.setAttribute("y", "-12");
      label.setAttribute("fill", "#FBF3EA");
      label.setAttribute("font-size", "11");
      g.appendChild(circle);
      g.appendChild(label);
      layer.appendChild(g);
      return { g, label, circle, trail, hist: [], offset: i / packetCount };
    });

    function moistureFor(frac: number) {
      if (frac < dryerStartFrac) return 40;
      if (frac > dryerEndFrac) return 20;
      const local = (frac - dryerStartFrac) / (dryerEndFrac - dryerStartFrac);
      return Math.round(40 - local * 20);
    }

    let rafId: number | null = null;

    if (reduced) {
      packets.forEach((p, i) => {
        const frac = i / packetCount;
        const pt = pathEl.getPointAtLength(frac * totalLength);
        p.g.setAttribute("transform", `translate(${pt.x},${pt.y})`);
        p.label.textContent = moistureFor(frac) + "%";
        p.trail.forEach((t) => t.setAttribute("opacity", "0"));
      });
    } else {
      const tick = (now: number) => {
        packets.forEach((p) => {
          const frac = (now / duration + p.offset) % 1;
          const pt = pathEl.getPointAtLength(frac * totalLength);
          const pulse = 6 + Math.sin(now / 220) * 0.8;
          p.circle.setAttribute("r", pulse.toFixed(2));
          p.g.setAttribute("transform", `translate(${pt.x},${pt.y})`);
          p.label.textContent = moistureFor(frac) + "%";
          const fade = frac < 0.04 ? frac / 0.04 : frac > 0.96 ? (1 - frac) / 0.04 : 1;
          p.g.setAttribute("opacity", String(Math.max(0.15, fade)));

          p.hist.unshift(pt);
          if (p.hist.length > 12) p.hist.pop();
          p.trail.forEach((t, i) => {
            const histPt = p.hist[(i + 1) * 2];
            if (histPt) {
              t.setAttribute("cx", String(histPt.x));
              t.setAttribute("cy", String(histPt.y));
              t.setAttribute("r", String(Math.max(1.5, 5 - i * 1.1)));
              t.setAttribute("opacity", String(Math.max(0, (0.32 - i * 0.08) * fade)));
            } else {
              t.setAttribute("opacity", "0");
            }
          });
        });
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      while (layer.firstChild) layer.removeChild(layer.firstChild);
    };
  }, []);

  return (
    <div className="process-panel">
      <div className="process-header">
        <span className="process-title">{t.title}</span>
        <span className="proj-status" style={{ marginBottom: 0 }}>
          <span className="led ok" />
          <span className="status-text mono">{t.status}</span>
        </span>
      </div>
      <svg className="process-svg" viewBox="0 0 900 230">
        <path ref={pathRef} d="M95,140 L330,140 L520,140 L765,140" fill="none" stroke="none" />

        <line x1="140" y1="140" x2="325" y2="140" stroke="#3A2A1F" strokeWidth="10" strokeLinecap="round" />
        <line className="pipe-flow" x1="140" y1="140" x2="325" y2="140" stroke="#FFB238" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

        <line x1="525" y1="140" x2="720" y2="140" stroke="#3A2A1F" strokeWidth="10" strokeLinecap="round" />
        <line className="pipe-flow" x1="525" y1="140" x2="720" y2="140" stroke="#4CE3D6" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

        <g>
          <rect x="40" y="70" width="100" height="105" rx="6" fill="none" stroke="var(--line-strong)" strokeWidth="2" />
          <clipPath id="tank1Clip">
            <rect x="42" y="72" width="96" height="101" rx="4" />
          </clipPath>
          <g clipPath="url(#tank1Clip)">
            <rect className="tank-liquid" x="42" y="110" width="96" height="63" fill="#E6A85C" opacity="0.55" />
          </g>
          <text x="90" y="55" textAnchor="middle" className="packet-label" fill="var(--text)" fontSize="12" fontWeight="600">
            Feed Tank
          </text>
          <text x="90" y="195" textAnchor="middle" className="packet-label mono">
            40% moisture
          </text>
        </g>

        <g>
          <rect x="330" y="60" width="195" height="120" rx="6" fill="none" stroke="var(--line-strong)" strokeWidth="2" />
          <text x="427" y="52" textAnchor="middle" className="packet-label" fill="var(--text)" fontSize="12" fontWeight="600">
            Dryer
          </text>
          <g stroke="#FF6B4A" strokeWidth="2" fill="none" strokeLinecap="round">
            <path className="vapor v1" d="M355,60 q6,-10 0,-20" />
            <path className="vapor v2" d="M385,60 q-5,-9 1,-19" />
            <path className="vapor v3" d="M415,60 q6,-10 0,-20" />
            <path className="vapor v4" d="M445,60 q-5,-9 1,-19" />
            <path className="vapor v2" d="M475,60 q6,-10 0,-20" style={{ animationDelay: "1.9s" }} />
            <path className="vapor v4" d="M500,60 q-5,-9 1,-19" style={{ animationDelay: ".35s" }} />
          </g>
        </g>

        <g>
          <rect x="720" y="70" width="100" height="105" rx="6" fill="none" stroke="var(--line-strong)" strokeWidth="2" />
          <clipPath id="tank2Clip">
            <rect x="722" y="72" width="96" height="101" rx="4" />
          </clipPath>
          <g clipPath="url(#tank2Clip)">
            <rect className="tank-liquid" x="722" y="132" width="96" height="41" fill="#C97A2E" opacity="0.75" />
          </g>
          <text x="770" y="55" textAnchor="middle" className="packet-label" fill="var(--text)" fontSize="12" fontWeight="600">
            Product Tank
          </text>
          <text x="770" y="195" textAnchor="middle" className="packet-label mono">
            20% moisture
          </text>
        </g>

        <g ref={layerRef} />
      </svg>
      <div className="process-desc">{t.desc}</div>
    </div>
  );
}
