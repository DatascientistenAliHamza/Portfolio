"use client";

import Image from "next/image";
import { useState } from "react";

export type PowerBIReport = {
  id: string;
  label: string;
  file: string;
  alt: string;
  caption: string;
};

export default function PowerBIShowcase({
  title,
  filePrefix,
  reports,
}: {
  title: string;
  filePrefix: string;
  reports: readonly PowerBIReport[];
}) {
  const [active, setActive] = useState(0);
  const report = reports[active];

  return (
    <div className="process-panel">
      <div className="process-header">
        <span className="process-title">{title}</span>
      </div>

      <div className="pbi-tabs">
        {reports.map((r, i) => (
          <button
            key={r.id}
            type="button"
            className={`pbi-tab${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="pbi-frame">
        <div className="pbi-frame-bar">
          <span className="pbi-frame-dot" />
          <span className="pbi-frame-dot" />
          <span className="pbi-frame-dot" />
          <span className="pbi-frame-label mono">
            {filePrefix}.pbix · {report.label}
          </span>
        </div>
        <Image
          key={report.id}
          src={report.file}
          alt={report.alt}
          width={1330}
          height={697}
          sizes="(max-width: 800px) 100vw, 1100px"
          style={{ width: "100%", height: "auto" }}
          priority={active === 0}
        />
      </div>

      <div className="process-desc">{report.caption}</div>
    </div>
  );
}
