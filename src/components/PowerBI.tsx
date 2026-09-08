import PowerBIShowcase from "./PowerBIShowcase";

export default function PowerBI() {
  return (
    <section id="powerbi">
      <div className="section-head">
        <span className="section-num mono">04</span>
        <h2>Power BI reports</h2>
      </div>
      <p className="hero-sub" style={{ marginTop: 0, marginBottom: "2rem" }}>
        A sample matchday reporting suite built on synthetic club data — the same kind of ticket,
        revenue, and product-level breakdowns I build for real clients, just with numbers nobody
        needs to keep private.
      </p>
      <PowerBIShowcase />
    </section>
  );
}
