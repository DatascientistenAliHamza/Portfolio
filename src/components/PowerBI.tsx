import PowerBIShowcase, { type PowerBIReport } from "./PowerBIShowcase";

const SPORTS_REPORTS: PowerBIReport[] = [
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

const BILLING_REPORTS: PowerBIReport[] = [
  {
    id: "overview",
    label: "Overview",
    file: "/powerbi2/overview.png",
    alt: "Power BI report: company billing overview with revenue, billing rate, and hours",
    caption:
      "Company-wide billing overview — revenue, average billing rate, and hours — filterable by year, month, and consultant, sourced directly from Fortnox.",
  },
  {
    id: "clients",
    label: "Clients & Brokers",
    file: "/powerbi2/clients.png",
    alt: "Power BI report: billing cost by broker, end client, and engagement type",
    caption:
      "Billing cost broken down by broker, end client, and engagement type, alongside the same monthly revenue trend filtered per client.",
  },
  {
    id: "budget-2025",
    label: "Budget vs Actual — 2025",
    file: "/powerbi2/budget-2025.png",
    alt: "Power BI report: budget vs actual result and revenue for 2025",
    caption:
      "Budget against actual result and revenue for 2025, shown both month-by-month and accumulated across the year.",
  },
  {
    id: "budget-dynamic",
    label: "Budget vs Actual — Dynamic",
    file: "/powerbi2/budget-dynamic.png",
    alt: "Power BI report: budget vs actual for a dynamically selected year",
    caption:
      "The same budget-vs-actual view built to run on any selected year — the filters decide which year's result and revenue are compared against budget.",
  },
  {
    id: "yoy",
    label: "Year-over-Year",
    file: "/powerbi2/yoy-comparison.png",
    alt: "Power BI report: this year vs last year revenue comparison by client",
    caption:
      "This year against the same period last year — revenue trend lines side by side, plus billing hours and cost broken down by client.",
  },
  {
    id: "drillthrough-consultant",
    label: "Consultant Drill-Through",
    file: "/powerbi2/drillthrough-consultant.png",
    alt: "Power BI report: drill-through detail view for a single consultant",
    caption:
      "A drill-through page for a single consultant — revenue and billing-rate trend over time, their largest end clients, and a full line-item detail table.",
  },
  {
    id: "drillthrough-broker",
    label: "Broker Drill-Through",
    file: "/powerbi2/drillthrough-broker.png",
    alt: "Power BI report: drill-through detail view for a single broker",
    caption:
      "The same drill-through, scoped to a single broker — revenue trend, billing rate, largest end clients, and complete line-item detail.",
  },
];

export default function PowerBI() {
  return (
    <section id="powerbi">
      <div className="section-head">
        <span className="section-num mono">04</span>
        <h2>Power BI reports</h2>
      </div>
      <p className="hero-sub" style={{ marginTop: 0, marginBottom: "2rem" }}>
        Two reports, two different worlds: a synthetic matchday reporting suite built for this
        portfolio, and a real internal billing-analytics dashboard built for Leadpoint — shown
        here with client and consultant names redacted.
      </p>
      <PowerBIShowcase
        title="LeadPoint — Sports Intelligence"
        filePrefix="leadpoint_sports_intelligence"
        reports={SPORTS_REPORTS}
      />
      <PowerBIShowcase
        title="LeadPoint — Billing Analytics"
        filePrefix="leadpoint_billing_analytics"
        reports={BILLING_REPORTS}
      />
    </section>
  );
}
