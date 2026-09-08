"use client";

import Image from "next/image";
import { useState } from "react";

const REPORTS = [
  {
    id: "overview",
    label: "Overview",
    file: "/powerbi/overview.png",
    alt: "Power BI report: club-wide revenue overview across tickets, food, and merchandise",
    caption:
      "The landing view — total revenue, tickets, and food & merchandise sales at a glance, with revenue trended by month and broken out by payment source.",
  },
  {
    id: "tickets",
    label: "Tickets",
    file: "/powerbi/tickets.png",
    alt: "Power BI report: ticket sales by month, day, and match",
    caption:
      "Ticket sales broken down by month and by day, plus tickets per match — paid, sponsored, and free tickets are tracked separately throughout the report.",
  },
  {
    id: "tickets-economy",
    label: "Tickets — Revenue",
    file: "/powerbi/tickets-economy.png",
    alt: "Power BI report: ticket revenue by payment source and ticket type",
    caption:
      "Revenue by payment source and ticket type, with target tracking against budget for both ticket and shop revenue.",
  },
  {
    id: "food-drink",
    label: "Food & Drink — Revenue",
    file: "/powerbi/food-drink.png",
    alt: "Power BI report: food and drink sales by product and month",
    caption:
      "Food and drink sales by product, with a monthly breakdown and a drill-down product hierarchy for finding individual items fast.",
  },
  {
    id: "merchandise",
    label: "Merchandise — Revenue",
    file: "/powerbi/merchandise.png",
    alt: "Power BI report: merchandise sales by product and month",
    caption:
      "The same breakdown for jerseys, caps, and other merchandise — which products actually sell, month by month.",
  },
  {
    id: "matches",
    label: "Matches",
    file: "/powerbi/matches.png",
    alt: "Power BI report: matches, competitions, and totals filtered per match",
    caption:
      "Match and competition filters wired into every revenue source at once — pick a match from the list and the shop, ticket, and item charts update instantly.",
  },
];

export default function PowerBIShowcase() {
  const [active, setActive] = useState(0);
  const report = REPORTS[active];

  return (
    <div className="process-panel">
      <div className="pbi-tabs">
        {REPORTS.map((r, i) => (
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
          <span className="pbi-frame-label mono">leadpoint_sports_intelligence.pbix — {report.label}</span>
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
