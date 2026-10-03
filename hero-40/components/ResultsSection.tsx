"use client";

import type { PointerEvent } from "react";

const results = [
  {
    value: "< 1.2",
    label: "RMSE Precision",
    text: "Geometric alignment error achieved via SIFT feature matching and RANSAC verification on Chandrayaan-2 lunar imagery.",
  },
  {
    value: "SIH '25",
    label: "Grand Finale",
    text: "National Grand Finale finalist at Smart India Hackathon 2025; rapid problem analysis and technical execution under time limits.",
  },
  {
    value: "5+",
    label: "End-to-End Systems",
    text: "Prototypes engineered across computer vision, meteorological nowcasting, telemetry dashboards, and reactive web applications.",
  },
  {
    value: "'24-'28",
    label: "B.Tech CSE",
    text: "Focused academic and practical training in Data Structures, Algorithms, System Design, and Machine Learning at LNCT Bhopal.",
  },
];

const partners = [
  { name: "Python", src: "/file.svg" },
  { name: "C++", src: "/file.svg" },
  { name: "OpenCV", src: "/window.svg" },
  { name: "React / Vite", src: "/globe.svg" },
  { name: "FastAPI", src: "/window.svg" },
  { name: "scikit-learn", src: "/file.svg" },
];

export default function ResultsSection() {
  const moveReveal = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    event.currentTarget.style.setProperty("--hover-x", `${x}%`);
    event.currentTarget.style.setProperty("--hover-y", `${Math.max(48, y)}%`);
  };

  const resetReveal = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--hover-x", "50%");
    event.currentTarget.style.setProperty("--hover-y", "76%");
  };

  return (
    <section className="results-section" id="outcomes" aria-labelledby="results-title">
      <div className="results-intro">
        <p>Selected Engineering Outcomes</p>
        <h2 id="results-title">Measurable precision, rigorous execution</h2>
        <span>
          Every project is built from first principles — optimizing mathematical pipelines, validating models against real data, and integrating intuitive interfaces for maximum operational utility.
        </span>
      </div>

      <div className="results-grid">
        {results.map((result) => (
          <article
            className="result-card"
            key={result.value}
            onPointerMove={moveReveal}
            onPointerLeave={resetReveal}
          >
            <p>{result.text}</p>
            <strong>{result.value}</strong>
          </article>
        ))}
      </div>

      <div className="results-partners" aria-label="Core technologies and frameworks">
        <p>Core Technologies and Frameworks in Practice</p>
        <div>
          {partners.map((partner) => (
            <span key={partner.name}>
              <img src={partner.src} alt="" />
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
