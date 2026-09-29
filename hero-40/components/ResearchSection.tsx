import ScrollHighlight from "./ScrollHighlight";

export default function ResearchSection() {
  const statement =
    "Great engineering unites algorithmic depth with intuitive usability. Whether aligning multi-sensor planetary imagery via SIFT and RANSAC, architecting predictive weather nowcasting pipelines, or solving complex C++ data structures, I build software engineered for reliability, mathematical precision, and real-world impact.";

  return (
    <section className="research-section" id="about" aria-labelledby="about-title">
      <aside className="research-index" aria-label="Aditya Jain Profile">
        <div className="research-portrait-card">
          <img
            src="/aditya-jain.png"
            alt="Aditya Jain — Software & AI/ML Engineer"
            className="research-portrait-img"
          />
          <div className="research-portrait-badge">Aditya Jain</div>
        </div>
      </aside>

      <div className="research-statement">
        <h2 id="about-title" className="sr-only">Aditya Jain Engineering Philosophy</h2>
        <ScrollHighlight
          text={statement}
          className="research-highlight"
          splitBy="words"
          dimColor="rgba(87, 36, 156, 0.14)"
          highlightColor="#57249c"
          scrollStart="top center"
          scrollEnd="bottom center"
          scrub
        />
      </div>
    </section>
  );
}
