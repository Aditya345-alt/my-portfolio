import ProximityOrbit from "./ProximityOrbit";

const techLogos = [
  "/logo-openai.svg",
  "/logo-google.svg",
  "/logo-notion.svg",
  "/logo-slack.svg",
  "/logo-spotify.svg",
  "/logo-apple.svg",
  "/logo-airbnb.svg",
  "/logo-nike.svg",
];

export default function GenerationSection() {
  return (
    <section className="generation-section" id="skills" aria-labelledby="skills-title">
      <div className="orbit-stage" aria-label="Technical ecosystem in motion">
        <ProximityOrbit
          images={techLogos}
          orbitRadius={20}
          imageScale={5.5}
          imageFit="contain"
          rounded={8}
          opacity={94}
          movementType="continuous"
          direction="counterclockwise"
          speed={0.65}
          arcMode
          responsiveArc
          hoverAnimation={{ type: "speedUp", speedMultiplier: 2.5 }}
        />
      </div>

      <div className="generation-content">
        <p className="generation-kicker">Core Technical Stack & Engineering</p>
        <h2 id="skills-title">Algorithmic Rigor.<br />Applied Intelligence.</h2>
        <p className="generation-copy">
          Proficient in C++, Python, OpenCV, and React — bridging low-level computational efficiency with end-to-end machine learning pipelines and modern web user interfaces.
        </p>
      </div>
    </section>
  );
}
