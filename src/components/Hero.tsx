import Reveal from "./Reveal";

const gaugeVar = (off: number) => ({ "--off": off } as React.CSSProperties);

export default function Hero() {
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
          &gt; now streaming: plant_sensor_network.live
          <span className="caret" />
        </div>
      </div>

      <h1 className="headline">
        I turn shop-floor chaos into <span className="grad">signal</span> — and I genuinely love it.
      </h1>
      <p className="hero-sub">
        Hi, I&apos;m Ali. I&apos;m a data scientist who&apos;s happiest on an actual factory floor,
        headphones on, chasing down why a sensor spiked at 3am. I build models and dashboards that
        maintenance techs are glad to open, not ones that get built once and forgotten.
      </p>

      <div className="instruments">
        <Reveal className="instrument">
          <svg className="gauge-svg" viewBox="0 0 120 68">
            <path className="gauge-track" d="M10,62 A50,50 0 0 1 110,62" />
            <path className="gauge-fill" stroke="#FFB238" style={gaugeVar(27)} d="M10,62 A50,50 0 0 1 110,62" />
          </svg>
          <div className="gauge-readout mono">38%</div>
          <div className="inst-label">unplanned downtime avoided</div>
        </Reveal>
        <Reveal className="instrument" style={{ justifyContent: "center" }}>
          <div className="digital">
            <span className="digi-num mono">2,400+</span>
          </div>
          <div className="inst-label">sensors streaming live</div>
        </Reveal>
        <Reveal className="instrument" style={{ justifyContent: "center" }}>
          <div className="digital">
            <span className="digi-num mono">6</span>
          </div>
          <div className="inst-label">plants instrumented</div>
        </Reveal>
        <Reveal className="instrument">
          <svg className="gauge-svg" viewBox="0 0 120 68">
            <path className="gauge-track" d="M10,62 A50,50 0 0 1 110,62" />
            <path className="gauge-fill" stroke="#4CE3D6" style={gaugeVar(16)} d="M10,62 A50,50 0 0 1 110,62" />
          </svg>
          <div className="gauge-readout mono">90%</div>
          <div className="inst-label">model uptime, 12mo avg</div>
        </Reveal>
      </div>
    </header>
  );
}
