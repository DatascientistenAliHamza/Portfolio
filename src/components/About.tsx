import RadarChart from "./RadarChart";

export default function About() {
  return (
    <section id="about">
      <div className="section-head">
        <span className="section-num mono">01</span>
        <h2>About</h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            My background is finance-turned-manufacturing, so I care as much about whether a sensor
            reading is trustworthy as whether the model on top of it is clever. Plant data is noisy
            and mistimed way more often than any textbook admits — and I find that genuinely fun to
            untangle.
          </p>
          <p>
            Recent work has centered on predictive maintenance — pulling vibration, temperature, and
            pressure telemetry off rolling mills and compressors and turning it into failure warnings
            that reach a technician&apos;s phone before the equipment does, not after.
          </p>
          <p>
            I still walk the floor for every project I take on, because the best feature in my model
            is usually something a technician mentioned in passing.
          </p>
          <div className="fun-fact mono">
            {
              '// true story: a mis-calibrated vibration sensor once had us chasing a "ghost fault" for two weeks. we found it. it was the sensor.'
            }
          </div>
        </div>
        <div className="radar-wrap">
          <RadarChart />
          <div className="radar-caption">skill signal strength</div>
        </div>
      </div>
    </section>
  );
}
