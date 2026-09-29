import CountUp from "./CountUp";
import ParticleSphere from "./ParticleSphere";

const metrics = [
  { label: "SIH Grand Finale Finalist", value: 2025, suffix: "" },
  { label: "End-to-End Prototypes Built", value: 5, suffix: "+" },
  { label: "C++ Algorithm Problem Sets", value: 150, suffix: "+" },
  { label: "B.Tech Graduation Year", value: 2028, suffix: "" },
];

const skillTags = [
  "Computer Vision",
  "SIFT & RANSAC",
  "C++ Algorithms",
  "FastAPI Backends",
  "Machine Learning",
  "React & Vite",
  "Image Registration",
  "Data Structures",
];

export default function GlobalImpactSection() {
  return (
    <section className="impact-section" id="impact" aria-labelledby="impact-title">
      <div className="impact-inner">
        <p className="impact-kicker">Aditya Jain in numbers</p>

        <div className="impact-metrics">
          {metrics.map((metric, index) => (
            <article key={metric.label}>
              <p>{metric.label}</p>
              <strong>
                <CountUp value={metric.value} delay={index * 90} />
                <span className="metric-suffix">{metric.suffix}</span>
              </strong>
            </article>
          ))}
        </div>

        <div className="impact-lower">
          <div className="impact-copy">
            <p>Applied Technical Rigor</p>
            <h2 id="impact-title">
              National hackathon finalist with hands-on depth in algorithmic modeling,
              computer vision, and real-time interactive interfaces.
            </h2>
            <div className="market-list">
              {skillTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="impact-particle-sphere" aria-label="Interactive 3D particle sphere">
            <ParticleSphere
              particlesCount={8000}
              particleScale={5}
              speed={3}
              smoothing={7}
              scale={8}
              stopOnHover={false}
              rotationDirection="clockwise"
              dragSpeed={5}
              drag
              cursorOn
              cursorRadiusUI={75}
              cursorStrengthUI={5}
              clickForce={5}
              sphereColor="#4a1d88"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
