import { Award, Trophy, Users, CodeXml } from "lucide-react";

const achievements = [
  {
    title: "Smart India Hackathon 2025",
    role: "Grand Finale Finalist • Team Ragnarok",
    initials: "SIH",
    description:
      "Advanced to the prestigious national Grand Finale; collaborated intensely on real-world problem analysis, algorithm architecture, and rapid team execution under strict time constraints.",
    tag: "National Hackathon",
  },
  {
    title: "Mood Indigo, IIT Bombay",
    role: "Indigo Squad Member",
    initials: "IIT",
    description:
      "Contributed to student-team coordination and high-tempo event execution at Asia's largest college cultural festival, strengthening cross-functional communication and leadership.",
    tag: "Leadership & Ops",
  },
  {
    title: "Core Algorithmic Rigor",
    role: "C++ Problem Solving & DSA",
    initials: "C++",
    description:
      "Continuous algorithmic practice covering sorting, searching, linked lists, recursion, debugging, and computational time/space complexity analysis.",
    tag: "Core Engineering",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="achievements" aria-labelledby="achievements-title">
      <div className="testimonials-panel">
        <div className="testimonials-label">
          <span>★</span> Achievements & Leadership
        </div>

        <header className="testimonials-heading">
          <h2 id="achievements-title">Milestones.</h2>
          <p>© 2024 – 2028</p>
        </header>

        <div className="testimonials-grid">
          <article className="testimonial-summary">
            <div className="testimonial-score">
              <strong>SIH &apos;25</strong>
              <span style={{ display: "block", fontSize: "14px", color: "var(--purple)", fontWeight: 600 }}>
                Grand Finale Finalist
              </span>
            </div>
            <p>
              Undergraduate at Lakshmi Narain College of Technology, Bhopal. Proven track record in high-pressure competitive hackathons, collaborative technical leadership, and disciplined execution.
            </p>
            <div className="testimonial-summary-bottom">
              <strong>Aditya Jain</strong>
              <div className="testimonial-trust">
                <span>Computer Science Engineering • Software & AI/ML Internships</span>
                <span style={{ color: "var(--muted)" }}>Bhopal, Madhya Pradesh, India</span>
              </div>
              <a href="#contact">Get In Touch With Aditya ↗</a>
            </div>
          </article>

          {achievements.map((item, index) => (
            <article className="testimonial-card" key={item.title}>
              <div className="testimonial-person">
                <span
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #4a1d88 0%, #765f99 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "13px",
                  }}
                >
                  {item.initials}
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.role}</small>
                </div>
              </div>
              <div className="testimonial-review">
                <div className="testimonial-card-meta">
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--purple)" }}>{item.tag}</span>
                  <span>＋</span>
                </div>
                <blockquote style={{ fontSize: "16px", lineHeight: "1.4", marginTop: "16px" }}>
                  &ldquo;{item.description}&rdquo;
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
