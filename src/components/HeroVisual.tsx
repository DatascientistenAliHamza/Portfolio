"use client";

import { useRef } from "react";

const NODES = [
  { x: 120, y: 70, r: 7, tag: "SCADA" },
  { x: 330, y: 60, r: 5 },
  { x: 380, y: 170, r: 8, tag: "Power BI" },
  { x: 210, y: 190, r: 5 },
  { x: 80, y: 240, r: 6, tag: "JSON" },
  { x: 300, y: 300, r: 5 },
  { x: 150, y: 350, r: 7, tag: "Python" },
  { x: 360, y: 380, r: 5 },
];

const LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 2],
  [3, 4],
  [3, 5],
  [2, 5],
  [4, 6],
  [5, 7],
  [6, 7],
];

const BARS = [18, 34, 24, 42, 30];

export default function HeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null);

  return (
    <div className="hero-visual" ref={visualRef} aria-hidden="true">
      <svg viewBox="0 0 460 460" className="hv-svg">
        <rect x="1" y="1" width="458" height="458" rx="18" className="hv-frame" />

        {LINKS.map(([a, b], i) => {
          const from = NODES[a];
          const to = NODES[b];
          return (
            <line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              className={i % 3 === 0 ? "hv-link hv-flow" : "hv-link"}
            />
          );
        })}

        {NODES.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              className="hv-node"
              style={{ animationDelay: `${(i % 5) * 0.35}s` }}
            />
            {n.tag && (
              <g transform={`translate(${n.x},${n.y - n.r - 10})`}>
                <text textAnchor="middle" className="hv-tag mono">
                  {n.tag}
                </text>
              </g>
            )}
          </g>
        ))}

        <g transform="translate(150,410)">
          <rect x="-40" y="-56" width="220" height="70" rx="8" className="hv-panel" />
          {BARS.map((h, i) => (
            <rect
              key={i}
              x={-24 + i * 36}
              y={-8 - h}
              width="16"
              height={h}
              rx="3"
              className="hv-bar"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
