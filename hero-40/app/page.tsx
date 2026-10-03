import type { Metadata } from "next";
import DitherReveal from "../components/DitherReveal";
import ResearchSection from "../components/ResearchSection";
import GenerationSection from "../components/GenerationSection";
import ProcessSection from "../components/ProcessSection";
import ProjectsSection from "../components/ProjectsSection";
import ResultsSection from "../components/ResultsSection";
import GlobalImpactSection from "../components/GlobalImpactSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "Aditya Jain — Software & AI/ML Engineer Portfolio",
  description:
    "Portfolio of Aditya Jain, Computer Science Engineering undergraduate specializing in Computer Vision, AI/ML Nowcasting, and End-to-End System Prototypes. SIH 2025 Grand Finale Finalist.",
};

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Methodology", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Impact", href: "#impact" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="landing">
      {/* ── 1. Hero Section ── */}
      <section className="hero" id="home">
        <div className="noise" aria-hidden="true" />

        <div className="dither-layer" aria-hidden="true">
          <DitherReveal image={{ src: "/white-hands.png", alt: "" }} />
        </div>

        <header className="site-header">
          <a className="brand" href="#home" aria-label="Aditya Jain home">
            Aditya Jain
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#contact">
            Get in touch
            <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section className="hero-content" aria-labelledby="hero-title">
          <p className="eyebrow">
            Computer Science Engineering Student • Software &amp; AI/ML Internships
          </p>
          <h1 id="hero-title">
            <span className="headline-line headline-line-muted">
              Engineering Vision Pipelines
            </span>
            <span className="headline-line">and Intelligent Prototypes</span>
          </h1>
          <p className="hero-copy">
            Undergraduate at Lakshmi Narain College of Technology, Bhopal. SIH 2025 Grand Finale Finalist
            <br className="desktop-break" />
            building end-to-end systems across computer vision, AI weather nowcasting, and reactive web applications.
          </p>
          <div style={{ display: "flex", gap: "16px", marginTop: "34px", flexWrap: "wrap" }}>
            <a className="primary-cta" href="#projects" style={{ marginTop: 0 }}>
              Explore Projects
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="primary-cta"
              href="#contact"
              style={{
                marginTop: 0,
                background: "rgba(74, 29, 136, 0.12)",
                color: "var(--purple)",
                boxShadow: "none",
                border: "1px solid rgba(74, 29, 136, 0.24)",
              }}
            >
              Contact Aditya
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <footer className="hero-footer">
          <p>Bhopal, Madhya Pradesh, India</p>
          <a className="scroll-cue" href="#about">
            scroll <span aria-hidden="true">↓</span>
          </a>
          <p>
            SIH 2025 Grand Finale Finalist
            <br />
            Seeking Software &amp; AI/ML Internships
          </p>
        </footer>
      </section>

      {/* ── 2. Engineering Philosophy & Perspective ── */}
      <ResearchSection />

      {/* ── 3. Technical Stack & Orbiting Ecosystem ── */}
      <GenerationSection />

      {/* ── 4. Engineering Methodology (Chromatic Waves & Envelopes) ── */}
      <ProcessSection />

      {/* ── 5. Featured Technical Projects (Filtered Grid) ── */}
      <ProjectsSection />

      {/* ── 6. Measured Outcomes (Interactive Spotlight Cards) ── */}
      <ResultsSection />

      {/* ── 7. Aditya in Numbers & 3D Interactive Particle Sphere ── */}
      <GlobalImpactSection />

      {/* ── 8. Achievements, Leadership & Milestones ── */}
      <TestimonialsSection />

      {/* ── 9. Contact & Footer ── */}
      <FooterSection />
    </main>
  );
}
