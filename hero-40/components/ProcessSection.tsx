import ChromaticWaves from "./ChromaticWaves";
import DraggableSticker from "./DraggableSticker";

const steps = [
  {
    number: "01",
    title: "Ingest & Extract",
    category: "Data & Features",
    description: "Multi-modal image preprocessing, discriminative SIFT keypoint extraction, and meteorological sensor stream normalization.",
    wave: { frequency: 1.5, speed: 2.4, timeOffset: 0 },
  },
  {
    number: "02",
    title: "Model & Verify",
    category: "Algorithmic Precision",
    description: "RANSAC geometric verification, ratio-based match filtering, homography matrix estimation, and short-horizon ML nowcasting.",
    wave: { frequency: 1.5, speed: 2.4, timeOffset: 8 },
  },
  {
    number: "03",
    title: "Ship & Interface",
    category: "Full-Stack Prototypes",
    description: "High-performance FastAPI endpoints connected to reactive React/Vite interfaces with live metric visualizers and evaluation metrics.",
    wave: { frequency: 1.5, speed: 2.4, timeOffset: 16 },
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <div className="process-stage">
        <div className="process-heading">
          <p>Engineering Methodology</p>
          <h2 id="process-title">
            From mathematical problem formulation
            <br /> to verified, user-facing prototypes.
          </h2>
        </div>

        <div className="process-stickers" aria-hidden="true">
          {["sticker-one", "sticker-two", "sticker-three", "sticker-four"].map((position) => (
            <div className={`process-sticker sticker-idea ${position}`} key={position}>
              <DraggableSticker
                image="/sticker-sparkle.png"
                imageWidth={64}
                imageHeight={64}
                tilt={18}
                lightingStrength={4}
                elevation={5}
                staticShadow="0px 10px 24px 0px rgba(74, 29, 136, 0.16)"
                dynamicShadow="0px 20px 34px 0px rgba(74, 29, 136, 0.28)"
              />
            </div>
          ))}
        </div>

        <div className="process-stack">
          <div className="envelope-back" aria-hidden="true" />
          <div className="envelope-cards">
            {steps.map((step) => (
              <article className="process-card" key={step.number}>
                <div className="process-card-waves" aria-hidden="true">
                  <ChromaticWaves
                    {...step.wave}
                    bgColor="#eee7fb"
                    colors={["#4a1d88cc", "#765f9999", "#ffffff88"]}
                  />
                </div>
                <span>{step.number}</span>
                <div className="process-card-content">
                  <p>{step.category}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="envelope-front" aria-hidden="true">
            <span className="envelope-fold envelope-fold-left" />
            <span className="envelope-fold envelope-fold-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
