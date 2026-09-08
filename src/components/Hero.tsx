"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

const gaugeVar = (off: number) => ({ "--off": off } as React.CSSProperties);
const GAUGE_COLORS = ["#FFB238", null, null, "#4CE3D6"] as const;

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang].hero;

  return (
    <header className="hero">
      <span className="aurora" />
      <span className="bracket tl" />
      <span className="bracket tr" />
      <span className="bracket bl" />
      <span className="bracket br" />

      <div className="hero-top">
        <div className="avatar">
          <span>AH</span>
        </div>
        <div className="prompt">
          &gt; {t.prompt}
          <span className="caret" />
        </div>
      </div>

      <h1 className="headline">
        {t.headlinePre}
        <span className="grad">{t.headlineGrad}</span>
        {t.headlinePost}
      </h1>
      <p className="hero-sub">{t.sub}</p>

      <div className="instruments">
        {t.instruments.map((inst, i) => {
          const isGauge = i === 0 || i === 3;
          return (
            <Reveal
              className="instrument"
              key={inst.label}
              style={isGauge ? undefined : { justifyContent: "center" }}
            >
              {isGauge ? (
                <>
                  <svg className="gauge-svg" viewBox="0 0 120 68">
                    <path className="gauge-track" d="M10,62 A50,50 0 0 1 110,62" />
                    <path
                      className="gauge-fill"
                      stroke={GAUGE_COLORS[i] ?? "#FFB238"}
                      style={gaugeVar(i === 0 ? 27 : 16)}
                      d="M10,62 A50,50 0 0 1 110,62"
                    />
                  </svg>
                  <div className="gauge-readout mono">{inst.value}</div>
                </>
              ) : (
                <div className="digital">
                  <span className="digi-num mono">{inst.value}</span>
                </div>
              )}
              <div className="inst-label">{inst.label}</div>
            </Reveal>
          );
        })}
      </div>
    </header>
  );
}
