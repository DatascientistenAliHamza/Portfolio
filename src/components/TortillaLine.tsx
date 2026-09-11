"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import { content } from "@/content/site";

const NS = "http://www.w3.org/2000/svg";

type BatchType = {
  size: number;
  target: number;
  color: string;
  fullkorn: boolean;
};

const BATCH_TYPES: BatchType[] = [
  { size: 6, target: 200, color: "#FFB238", fullkorn: false },
  { size: 12, target: 100, color: "#4CE3D6", fullkorn: false },
  { size: 6, target: 200, color: "#7BE28A", fullkorn: true },
  { size: 12, target: 100, color: "#D99B5B", fullkorn: true },
];

const CARTON_CAP = 5;
const TRUCK_CAP = 6;
const BED_SLOTS: [number, number][] = [
  [968, 302],
  [1000, 302],
  [1032, 302],
  [968, 326],
  [1000, 326],
  [1032, 326],
];

export default function TortillaLine() {
  const pathRef = useRef<SVGPathElement>(null);
  const layerRef = useRef<SVGGElement>(null);
  const ovenGroupRef = useRef<SVGGElement>(null);
  const gaugeFillRef = useRef<SVGPathElement>(null);
  const tempReadoutRef = useRef<SVGTextElement>(null);
  const rejectTextRef = useRef<SVGTextElement>(null);
  const stopTextRef = useRef<SVGTextElement>(null);
  const bannerRef = useRef<SVGTextElement>(null);
  const ledRef = useRef<HTMLSpanElement>(null);
  const [isStopped, setIsStopped] = useState(false);

  const batchNameRef = useRef<SVGTextElement>(null);
  const fullkornTagRef = useRef<SVGGElement>(null);
  const batchProgressTextRef = useRef<SVGTextElement>(null);
  const batchProgressFillRef = useRef<SVGRectElement>(null);
  const batchCartonFillRef = useRef<SVGRectElement>(null);
  const batchCartonTextRef = useRef<SVGTextElement>(null);
  const batchCardRef = useRef<SVGGElement>(null);
  const stepPillsRef = useRef<(SVGGElement | null)[]>([]);

  const truckBedRef = useRef<SVGGElement>(null);
  const truckLoadTextRef = useRef<SVGTextElement>(null);
  const truckDispatchTextRef = useRef<SVGTextElement>(null);
  const truckGroupRef = useRef<SVGGElement>(null);

  const { lang } = useLanguage();
  const t = content[lang].projects.tortilla;
  const labelsRef = useRef(t);
  useEffect(() => {
    labelsRef.current = t;
  }, [t]);

  useEffect(() => {
    const pathEl = pathRef.current;
    const layer = layerRef.current;
    if (!pathEl || !layer) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const totalLength = pathEl.getTotalLength();
    const duration = 4400;
    const discCount = 8;

    const ovenStartFrac = 0.076;
    const ovenEndFrac = 0.44;
    const divertFrac = 0.71;
    const divertWindow = 0.07;
    const binX = 620;
    const binY = 226;

    let batchIndex = 0;
    let tortillasIntoPack = 0;
    let batchProgress = 0;
    let cartonProgress = 0;
    let truckBedCount = 0;
    let trucksDispatched = 0;
    let truckState: "idle" | "depart" | "return" = "idle";
    let truckAnimStart = 0;

    function updateStepper() {
      stepPillsRef.current.forEach((p, i) => {
        if (!p) return;
        p.classList.remove("active", "done");
        if (i < batchIndex) p.classList.add("done");
        else if (i === batchIndex) p.classList.add("active");
      });
    }

    function updateBatchCard() {
      const bt = BATCH_TYPES[batchIndex];
      if (batchNameRef.current) batchNameRef.current.textContent = labelsRef.current.batchLabels[batchIndex];
      if (fullkornTagRef.current) fullkornTagRef.current.setAttribute("opacity", bt.fullkorn ? "1" : "0");
      if (batchProgressTextRef.current) batchProgressTextRef.current.textContent = `${batchProgress} / ${bt.target}`;
      if (batchProgressFillRef.current) {
        batchProgressFillRef.current.setAttribute("width", ((432 * batchProgress) / bt.target).toFixed(1));
        batchProgressFillRef.current.setAttribute("fill", bt.color);
      }
      if (batchCartonFillRef.current) {
        batchCartonFillRef.current.setAttribute("width", ((136 * cartonProgress) / CARTON_CAP).toFixed(1));
        batchCartonFillRef.current.setAttribute("fill", bt.color);
      }
      if (batchCartonTextRef.current) batchCartonTextRef.current.textContent = `${cartonProgress}/${CARTON_CAP}`;
    }

    function shipCarton(color: string) {
      const truckBed = truckBedRef.current;
      if (!truckBed || truckBedCount >= TRUCK_CAP) return;
      const slot = BED_SLOTS[truckBedCount];
      const sq = document.createElementNS(NS, "rect");
      sq.setAttribute("x", String(slot[0]));
      sq.setAttribute("y", String(slot[1]));
      sq.setAttribute("width", "20");
      sq.setAttribute("height", "16");
      sq.setAttribute("rx", "2");
      sq.setAttribute("fill", color);
      sq.setAttribute("opacity", "0.85");
      truckBed.appendChild(sq);
      truckBedCount++;
      if (truckLoadTextRef.current) truckLoadTextRef.current.textContent = `Loaded: ${truckBedCount} / ${TRUCK_CAP}`;
      if (truckBedCount >= TRUCK_CAP && truckState === "idle") {
        truckState = "depart";
        truckAnimStart = performance.now();
      }
    }

    function updateTruck(now: number) {
      const truckGroupEl = truckGroupRef.current;
      const truckBed = truckBedRef.current;
      if (!truckGroupEl || !truckBed) return;
      if (truckState === "depart") {
        const t = Math.min(1, (now - truckAnimStart) / 1100);
        truckGroupEl.setAttribute("transform", `translate(${t * 280},0)`);
        truckGroupEl.setAttribute("opacity", String(1 - t * 0.92));
        if (t >= 1) {
          while (truckBed.firstChild) truckBed.removeChild(truckBed.firstChild);
          truckBedCount = 0;
          trucksDispatched++;
          if (truckLoadTextRef.current) truckLoadTextRef.current.textContent = `Loaded: 0 / ${TRUCK_CAP}`;
          if (truckDispatchTextRef.current) truckDispatchTextRef.current.textContent = `Trucks out: ${trucksDispatched}`;
          truckGroupEl.setAttribute("transform", "translate(-280,0)");
          truckGroupEl.setAttribute("opacity", "1");
          truckState = "return";
          truckAnimStart = now;
        }
      } else if (truckState === "return") {
        const t = Math.min(1, (now - truckAnimStart) / 900);
        truckGroupEl.setAttribute("transform", `translate(${-280 + t * 280},0)`);
        if (t >= 1) {
          truckState = "idle";
          truckGroupEl.setAttribute("transform", "translate(0,0)");
        }
      }
    }

    function packArrival() {
      const bt = BATCH_TYPES[batchIndex];
      tortillasIntoPack++;
      if (tortillasIntoPack < bt.size) return;
      tortillasIntoPack = 0;

      const inc = 6 + Math.floor(Math.random() * 4);
      batchProgress = Math.min(bt.target, batchProgress + inc);
      cartonProgress++;
      if (cartonProgress >= CARTON_CAP) {
        cartonProgress = 0;
        shipCarton(bt.color);
      }
      updateBatchCard();

      if (batchProgress >= bt.target) {
        const batchCard = batchCardRef.current;
        if (batchCard) {
          batchCard.classList.add("flash");
          setTimeout(() => batchCard.classList.remove("flash"), 650);
        }
        batchIndex = (batchIndex + 1) % BATCH_TYPES.length;
        tortillasIntoPack = 0;
        batchProgress = 0;
        cartonProgress = 0;
        updateStepper();
        updateBatchCard();
      }
    }
    updateStepper();
    updateBatchCard();

    const dough = [230, 210, 170];
    const gold = [198, 142, 58];
    const burnt = [118, 55, 32];
    function lerpC(a: number[], b: number[], t: number) {
      return a.map((v, i) => Math.round(v + (b[i] - v) * t));
    }
    function colorFor(frac: number, isDefect: boolean) {
      const target = isDefect ? burnt : gold;
      if (frac < ovenStartFrac) return dough;
      if (frac > ovenEndFrac) return target;
      const t = (frac - ovenStartFrac) / (ovenEndFrac - ovenStartFrac);
      return lerpC(dough, target, t);
    }

    let rejectCount = 0;
    let stopCount = 0;

    type Disc = {
      g: SVGGElement;
      circle: SVGCircleElement;
      warn: SVGPathElement;
      offset: number;
      isDefect: boolean;
      countedThisLap: boolean;
      arrivedThisLap: boolean;
      prevFrac: number;
    };

    const discs: Disc[] = Array.from({ length: discCount }, (_, i) => {
      const g = document.createElementNS(NS, "g");
      const circle = document.createElementNS(NS, "circle");
      circle.setAttribute("r", "9");
      circle.setAttribute("stroke", "#170F0C");
      circle.setAttribute("stroke-width", "1.5");
      const warn = document.createElementNS(NS, "path");
      warn.setAttribute("d", "M0,-27 L6,-17 L-6,-17 Z");
      warn.setAttribute("fill", "var(--orange)");
      warn.setAttribute("opacity", "0");
      g.appendChild(circle);
      g.appendChild(warn);
      layer.appendChild(g);
      return {
        g,
        circle,
        warn,
        offset: i / discCount,
        isDefect: Math.random() < 1 / 6,
        countedThisLap: false,
        arrivedThisLap: false,
        prevFrac: i / discCount,
      };
    });

    let rafId: number | null = null;

    if (reduced) {
      discs.forEach((d) => {
        const pt = pathEl.getPointAtLength(d.offset * totalLength);
        d.g.setAttribute("transform", `translate(${pt.x},${pt.y})`);
        const c = colorFor(d.offset, false);
        d.circle.setAttribute("fill", `rgb(${c[0]},${c[1]},${c[2]})`);
      });
      if (tempReadoutRef.current) tempReadoutRef.current.textContent = "220°C";
    } else {
      let lastNow: number | null = null;
      let effectiveTime = 0;
      let wasStopped = false;
      const STOP_CYCLE = 18000;
      const STOP_DURATION = 2200;

      const tick = (now: number) => {
        const cyclePos = now % STOP_CYCLE;
        const stopped = cyclePos < STOP_DURATION;

        if (lastNow === null) lastNow = now;
        const dt = now - lastNow;
        lastNow = now;
        if (!stopped) effectiveTime += dt;

        if (stopped !== wasStopped) {
          wasStopped = stopped;
          if (stopped) {
            stopCount++;
            if (stopTextRef.current) stopTextRef.current.textContent = `Stops today: ${stopCount}`;
            if (bannerRef.current) bannerRef.current.setAttribute("opacity", "1");
            if (ledRef.current) {
              ledRef.current.classList.remove("ok");
              ledRef.current.classList.add("amber");
            }
            setIsStopped(true);
            if (ovenGroupRef.current) ovenGroupRef.current.setAttribute("opacity", "0.55");
          } else {
            if (bannerRef.current) bannerRef.current.setAttribute("opacity", "0");
            if (ledRef.current) {
              ledRef.current.classList.remove("amber");
              ledRef.current.classList.add("ok");
            }
            setIsStopped(false);
            if (ovenGroupRef.current) ovenGroupRef.current.setAttribute("opacity", "1");
          }
        }
        if (stopped && bannerRef.current) {
          const elapsed = Math.floor(cyclePos / 1000) + 1;
          bannerRef.current.textContent = `${labelsRef.current.lineStoppedLabel} (${elapsed}s)`;
        }

        const wobble = Math.sin(now / 1300) * 6;
        const spikeCycle = now % 6500;
        const isSpike = spikeCycle < 1500;
        const spikeAmt = isSpike ? Math.sin((spikeCycle / 1500) * Math.PI) * 32 : 0;
        const temp = 220 + wobble + spikeAmt;
        const frac01 = Math.max(0, Math.min(1, (temp - 190) / (260 - 190)));
        if (gaugeFillRef.current) {
          gaugeFillRef.current.setAttribute("stroke-dashoffset", (157 * (1 - frac01)).toFixed(1));
          gaugeFillRef.current.setAttribute("stroke", isSpike ? "#FF6B4A" : "#FFB238");
        }
        if (tempReadoutRef.current) tempReadoutRef.current.textContent = Math.round(temp) + "°C";

        discs.forEach((d) => {
          const frac = (effectiveTime / duration + d.offset) % 1;
          if (frac < d.prevFrac) {
            d.isDefect = Math.random() < 1 / 6;
            d.countedThisLap = false;
            d.arrivedThisLap = false;
          }
          d.prevFrac = frac;

          let x: number, y: number;
          let opacity = 1;
          let showWarn = false;
          if (d.isDefect && frac > divertFrac) {
            const p0 = pathEl.getPointAtLength(divertFrac * totalLength);
            if (frac < divertFrac + divertWindow) {
              const t = (frac - divertFrac) / divertWindow;
              x = p0.x + (binX - p0.x) * t;
              y = p0.y + (binY - p0.y) * t;
              opacity = 1;
              showWarn = true;
              if (t > 0.97 && !d.countedThisLap) {
                rejectCount++;
                d.countedThisLap = true;
                if (rejectTextRef.current) rejectTextRef.current.textContent = `Rejected: ${rejectCount}`;
              }
            } else {
              x = binX;
              y = binY;
              opacity = 0;
              if (!d.countedThisLap) {
                rejectCount++;
                d.countedThisLap = true;
                if (rejectTextRef.current) rejectTextRef.current.textContent = `Rejected: ${rejectCount}`;
              }
            }
          } else {
            const pt = pathEl.getPointAtLength(frac * totalLength);
            x = pt.x;
            y = pt.y;
            const edgeFade = frac < 0.03 ? frac / 0.03 : frac > 0.985 ? (1 - frac) / 0.015 : 1;
            opacity = Math.max(0.2, edgeFade);
            showWarn = d.isDefect && frac > ovenEndFrac;
            if (!d.isDefect && frac > 0.93 && !d.arrivedThisLap) {
              d.arrivedThisLap = true;
              packArrival();
            }
          }

          d.g.setAttribute("transform", `translate(${x},${y})`);
          d.g.setAttribute("opacity", String(opacity));
          const c = colorFor(frac, d.isDefect);
          d.circle.setAttribute("fill", `rgb(${c[0]},${c[1]},${c[2]})`);
          d.warn.setAttribute("opacity", showWarn ? "1" : "0");
        });

        updateTruck(now);

        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    }

    const truckBed = truckBedRef.current;
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      while (layer.firstChild) layer.removeChild(layer.firstChild);
      if (truckBed) while (truckBed.firstChild) truckBed.removeChild(truckBed.firstChild);
    };
  }, []);

  // These subtrees hold no translated text and are driven entirely by refs the
  // effect above mutates directly, so memoizing them lets React bail out of
  // reconciling this large, otherwise-static geometry on a language toggle.
  const stationsGeometry = useMemo(
    () => (
      <>
        <g>
          <text x="45" y="105" textAnchor="middle" className="packet-label" fill="var(--text)" fontSize="12" fontWeight="600">
            Ingredients
          </text>
          <circle className="ingredient-dot" cx="30" cy="115" r="3.5" fill="#E8ECF2" />
          <circle className="ingredient-dot i2" cx="30" cy="120" r="3.5" fill="#4CE3D6" />
          <circle className="ingredient-dot i3" cx="30" cy="125" r="3.5" fill="#FFB238" />
        </g>

        <g>
          <rect x="75" y="105" width="140" height="90" rx="6" fill="none" stroke="var(--line-strong)" strokeWidth="2" />
          <text x="145" y="97" textAnchor="middle" className="packet-label" fill="var(--text)" fontSize="12" fontWeight="600">
            Mix &amp; Press
          </text>
        </g>

        <g ref={ovenGroupRef}>
          <rect x="255" y="90" width="215" height="120" rx="6" fill="none" stroke="var(--line-strong)" strokeWidth="2" />
          <text x="362" y="82" textAnchor="middle" className="packet-label" fill="var(--text)" fontSize="12" fontWeight="600">
            Oven
          </text>
          <g stroke="#FF6B4A" strokeWidth="3" fill="none" strokeLinecap="round">
            <path className="flame f1" d="M295,208 q-5,-16 0,-24 q5,8 0,24" fill="#FF6B4A" stroke="none" />
            <path className="flame f2" d="M335,208 q-5,-16 0,-24 q5,8 0,24" fill="#FFB238" stroke="none" />
            <path className="flame f3" d="M395,208 q-5,-16 0,-24 q5,8 0,24" fill="#FFB238" stroke="none" />
            <path className="flame f4" d="M435,208 q-5,-16 0,-24 q5,8 0,24" fill="#FF6B4A" stroke="none" />
          </g>
        </g>

        <g transform="translate(310,20)">
          <svg viewBox="0 0 120 68" width="110" height="62" x="0" y="0">
            <path className="gauge-track" d="M10,62 A50,50 0 0 1 110,62" />
            <path
              ref={gaugeFillRef}
              stroke="#FFB238"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="157"
              strokeDashoffset="60"
              d="M10,62 A50,50 0 0 1 110,62"
            />
          </svg>
          <text ref={tempReadoutRef} x="55" y="46" textAnchor="middle" className="packet-label mono" fill="var(--text)" fontSize="13" fontWeight="600">
            220°C
          </text>
        </g>

        <g>
          <rect x="500" y="105" width="130" height="90" rx="6" fill="none" stroke="var(--line-strong)" strokeWidth="2" />
          <text x="565" y="97" textAnchor="middle" className="packet-label" fill="var(--text)" fontSize="12" fontWeight="600">
            Cooling
          </text>
        </g>

        <g>
          <rect x="660" y="105" width="140" height="90" rx="6" fill="none" stroke="var(--line-strong)" strokeWidth="2" />
          <text x="730" y="97" textAnchor="middle" className="packet-label" fill="var(--text)" fontSize="12" fontWeight="600">
            Pack
          </text>
        </g>

        <g>
          <path d="M600,215 L640,215 L634,240 L606,240 Z" fill="none" stroke="var(--orange)" strokeWidth="2" />
          <text x="620" y="253" textAnchor="middle" className="packet-label mono" fill="var(--orange)" fontSize="10">
            Rejected
          </text>
        </g>
      </>
    ),
    [],
  );

  const batchCardGeometry = useMemo(
    () => (
      <g ref={batchCardRef}>
        <rect x="60" y="280" width="528" height="80" rx="6" fill="rgba(255,178,56,0.02)" stroke="var(--line-strong)" strokeWidth="1.5" />
        <text ref={batchNameRef} x="76" y="303" className="packet-label" fill="var(--text)" fontSize="14" fontWeight="600">
          6-Pack
        </text>
        <g ref={fullkornTagRef} opacity="0">
          <rect x="148" y="291" width="72" height="17" rx="8.5" fill="rgba(123,226,138,0.12)" stroke="var(--ok)" strokeWidth="1" />
          <text x="184" y="303.5" textAnchor="middle" className="packet-label mono" fill="var(--ok)" fontSize="9">
            FULLKORN
          </text>
        </g>
        <text ref={batchProgressTextRef} x="572" y="303" textAnchor="end" className="packet-label mono" fill="var(--muted)" fontSize="12">
          0 / 200
        </text>

        <rect x="76" y="314" width="436" height="8" rx="4" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
        <rect ref={batchProgressFillRef} x="78" y="316" width="0" height="4" rx="2" fill="#FFB238" />

        <text x="76" y="343" className="packet-label mono" fill="var(--muted)" fontSize="10">
          current carton
        </text>
        <rect x="176" y="336" width="140" height="7" rx="3.5" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
        <rect ref={batchCartonFillRef} x="178" y="337.5" width="0" height="4" rx="2" fill="#FFB238" />
        <text ref={batchCartonTextRef} x="326" y="343" className="packet-label mono" fill="var(--muted)" fontSize="10">
          0/5
        </text>
      </g>
    ),
    [],
  );

  const truckGeometry = useMemo(
    () => (
      <>
        <line x1="588" y1="318" x2="960" y2="318" stroke="#3A2A1F" strokeWidth="8" strokeLinecap="round" />
        <line className="pipe-flow" x1="588" y1="318" x2="960" y2="318" stroke="#4CE3D6" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

        <g ref={truckGroupRef}>
          <text x="1085" y="282" textAnchor="middle" className="packet-label" fill="var(--text)" fontSize="12" fontWeight="600">
            Truck
          </text>
          <rect x="960" y="292" width="170" height="58" rx="4" fill="none" stroke="var(--line-strong)" strokeWidth="2" />
          <rect x="1130" y="304" width="38" height="40" rx="4" fill="none" stroke="var(--line-strong)" strokeWidth="2" />
          <circle cx="995" cy="352" r="9" fill="#20150F" stroke="var(--line-strong)" strokeWidth="2" />
          <circle cx="1100" cy="352" r="9" fill="#20150F" stroke="var(--line-strong)" strokeWidth="2" />
          <circle cx="1150" cy="352" r="8" fill="#20150F" stroke="var(--line-strong)" strokeWidth="2" />
          <g ref={truckBedRef} />
        </g>
        <text ref={truckLoadTextRef} x="1045" y="374" textAnchor="middle" className="packet-label mono">
          Loaded: 0 / 6
        </text>
        <text ref={truckDispatchTextRef} x="1180" y="374" textAnchor="end" className="packet-label mono">
          Trucks out: 0
        </text>
      </>
    ),
    [],
  );

  return (
    <div className="process-panel">
      <div className="process-header">
        <span className="process-title">{t.title}</span>
        <span className="proj-status" style={{ marginBottom: 0 }}>
          <span className="led ok" ref={ledRef} />
          <span className="status-text mono">{isStopped ? t.statusStopped : t.statusRunning}</span>
        </span>
      </div>
      <svg className="process-svg" viewBox="0 0 1200 390">
        <path ref={pathRef} d="M210,150 L800,150" fill="none" stroke="none" />

        <line x1="90" y1="150" x2="800" y2="150" stroke="#3A2A1F" strokeWidth="10" strokeLinecap="round" />
        <line className="belt-tread" x1="90" y1="150" x2="800" y2="150" stroke="#8B93A3" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

        {stationsGeometry}

        <text ref={rejectTextRef} x="1180" y="30" textAnchor="end" className="packet-label mono" fill="var(--orange)" fontSize="12">
          Rejected: 0
        </text>
        <text ref={stopTextRef} x="1180" y="46" textAnchor="end" className="packet-label mono" fill="var(--muted)" fontSize="12">
          Stops today: 0
        </text>
        <text
          ref={bannerRef}
          x="450"
          y="235"
          textAnchor="middle"
          className="packet-label mono stop-flash"
          fill="var(--orange)"
          fontSize="13"
          fontWeight="600"
          opacity="0"
        >
          {t.lineStoppedLabel}
        </text>

        <line x1="40" y1="222" x2="1160" y2="222" stroke="var(--line)" strokeWidth="1" />
        <text x="40" y="216" className="packet-label mono" fill="var(--muted)" fontSize="10">
          {t.packingHeader}
        </text>

        <line x1="730" y1="195" x2="730" y2="222" stroke="#3A2A1F" strokeWidth="8" strokeLinecap="round" />
        <line className="pipe-flow" x1="730" y1="195" x2="730" y2="222" stroke="#FFB238" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

        <g>
          {[
            { i: 0, x: 60, w: 118, num: "1", label: t.batchLabels[0] },
            { i: 1, x: 188, w: 118, num: "2", label: t.batchLabels[1] },
            { i: 2, x: 316, w: 128, num: "3", label: t.batchLabels[2] },
            { i: 3, x: 454, w: 134, num: "4", label: t.batchLabels[3] },
          ].map((step) => (
            <g
              key={step.i}
              className="step-pill"
              ref={(el) => {
                stepPillsRef.current[step.i] = el;
              }}
              transform={`translate(${step.x},236)`}
            >
              <rect width={step.w} height="28" rx="14" fill="none" stroke="var(--line-strong)" strokeWidth="1.5" />
              <circle className="step-badge" cx="16" cy="14" r="9" fill="none" stroke="var(--line-strong)" strokeWidth="1.5" />
              <text className="step-num packet-label mono" x="16" y="18" textAnchor="middle" fontSize="10">
                {step.num}
              </text>
              <text className="step-label packet-label mono" x="34" y="18" fontSize="10">
                {step.label}
              </text>
            </g>
          ))}
        </g>

        {batchCardGeometry}

        {truckGeometry}

        <g ref={layerRef} />
      </svg>
      <div className="process-desc">{t.desc}</div>
    </div>
  );
}
