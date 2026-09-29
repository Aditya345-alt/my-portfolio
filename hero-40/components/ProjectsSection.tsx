"use client";

import { useState } from "react";
import { ArrowUpRight, Cpu, Eye, CloudRain, Sun, ShieldAlert, Globe } from "lucide-react";

interface Project {
  id: string;
  category: "all" | "vision" | "aiml" | "web";
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  metrics: string;
  icon: any;
}

const projects: Project[] = [
  {
    id: "lunar-fusion",
    category: "vision",
    categoryLabel: "Computer Vision",
    title: "Lunar Fusion / LunarMatch AI",
    subtitle: "Chandrayaan-2 Multi-Modal Image Registration",
    description:
      "End-to-end computer vision pipeline aligning lunar surface images across differing scale, sensor, and illumination conditions using SIFT extraction, Lowe's ratio test, and RANSAC geometric verification.",
    stack: ["OpenCV", "SIFT", "RANSAC", "FastAPI", "React", "Vite"],
    metrics: "RMSE < 1.2px • Inlier Verification • Live Match UI",
    icon: Eye,
  },
  {
    id: "tempestiq",
    category: "aiml",
    categoryLabel: "AI & Machine Learning",
    title: "TempestIQ Weather Nowcasting",
    subtitle: "Short-Horizon Meteorological Forecast Pipeline",
    description:
      "Real-time meteorological observation ingestion, feature engineering, and predictive ML classification for short-term localized weather change detection and precipitation alerts.",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Streamlit"],
    metrics: "Real-time Telemetry • Feature Prep • Anomaly Alerts",
    icon: CloudRain,
  },
  {
    id: "solarsense",
    category: "aiml",
    categoryLabel: "Data & Telemetry",
    title: "SolarSense-AI Monitoring",
    subtitle: "Solar Observation & Anomaly Detection Dashboard",
    description:
      "Telemetry dashboard organizing solar radiation observations, time-series visualizations, predictive status indicators, and automated flare alert thresholds.",
    stack: ["Python", "Data Processing", "Visual Analytics", "REST APIs"],
    metrics: "Solar Telemetry • Multi-Sensor Stream • Visual Analytics",
    icon: Sun,
  },
  {
    id: "tourist-safety",
    category: "web",
    categoryLabel: "Full-Stack System",
    title: "Smart Tourist Safety & Response",
    subtitle: "Incident Reporting & Emergency Coordination",
    description:
      "Digital workflow connecting citizen-facing emergency reporting to rapid response coordination, geo-location logging, and automated dispatch management.",
    stack: ["React", "FastAPI", "REST API", "Geospatial UI"],
    metrics: "Real-Time Dispatch • Multi-Role UI • Incident Tracking",
    icon: ShieldAlert,
  },
  {
    id: "skill-sanka",
    category: "web",
    categoryLabel: "Web Architecture",
    title: "Skill Sanka / NGO Awareness",
    subtitle: "Vocational Skills & Impact Platform",
    description:
      "Comprehensive information architecture connecting rural youth to vocational skills training, community initiatives, and transparent donor impact measurement.",
    stack: ["React", "HTML5", "CSS3", "Responsive UX"],
    metrics: "Clear IA • Vocational Discovery • Impact Metrics",
    icon: Globe,
  },
];

const categories = [
  { key: "all", label: "All Projects" },
  { key: "vision", label: "Computer Vision" },
  { key: "aiml", label: "AI / ML & Data" },
  { key: "web", label: "Full-Stack & Systems" },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="insights-section" id="projects" aria-labelledby="projects-title">
      <div className="insights-heading">
        <p className="section-kicker">Featured Technical Work</p>
        <h2 id="projects-title">
          Selected Projects.
          <span>Engineered from First Principles.</span>
        </h2>

        <div className="category-tabs" role="tablist" aria-label="Project categories">
          {categories.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              className={activeTab === tab.key ? "active" : ""}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="insight-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        {filteredProjects.map((project) => {
          const Icon = project.icon;
          return (
            <article className="insight-card" key={project.id}>
              <div className="card-dot-background" />
              <div className="card-content">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span className="more-pill">{project.categoryLabel}</span>
                  <Icon size={20} strokeWidth={1.75} style={{ opacity: 0.8 }} />
                </div>
                <h3>{project.title}</h3>
                <p style={{ fontWeight: 500, color: "var(--purple)", marginBottom: "8px", fontSize: "13px" }}>
                  {project.subtitle}
                </p>
                <p>{project.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px" }}>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "11px",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        background: "rgba(74, 29, 136, 0.08)",
                        color: "inherit",
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-source" style={{ borderTop: "1px solid rgba(74, 29, 136, 0.1)", paddingTop: "14px", marginTop: "20px" }}>
                <div>
                  <span style={{ fontSize: "11px", fontWeight: 600, display: "block" }}>Key Highlight</span>
                  <small style={{ opacity: 0.85, fontSize: "11px" }}>{project.metrics}</small>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
