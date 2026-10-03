"use client";

import { useState, type FormEvent } from "react";
import { Mail, MoveUpRight, MapPin, Send, Loader2, CheckCircle2, AlertCircle, Copy, Check, ExternalLink } from "lucide-react";

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.78v8.37H6.46v-8.37M7.86 6.81a1.63 1.63 0 0 0-1.63 1.63 1.63 1.63 0 0 0 1.63 1.63 1.63 1.63 0 0 0 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

const portfolioNavigation = [
  ["About", "#about"],
  ["Technical Skills", "#skills"],
  ["Methodology", "#process"],
  ["Featured Projects", "#projects"],
  ["Milestones", "#achievements"],
];

const highlightsNavigation = [
  ["LunarMatch AI", "#projects"],
  ["TempestIQ Nowcasting", "#projects"],
  ["SolarSense-AI", "#projects"],
  ["Smart India Hackathon", "#achievements"],
];

export default function FooterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jaadi1229@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/jaadi1229@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name || "Website Visitor",
          email,
          message,
          _subject: `New Portfolio Message from ${name || "Visitor"} (${email})`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const mailtoFallback = `mailto:jaadi1229@gmail.com?subject=${encodeURIComponent(
    `Portfolio Message from ${name || "Website Visitor"}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  const gmailWebCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=jaadi1229@gmail.com&su=${encodeURIComponent(
    `Portfolio Message from ${name || "Visitor"}`
  )}&body=${encodeURIComponent(message)}`;

  return (
    <footer className="closing-footer" id="contact">
      <div className="footer-cards">
        <section className="footer-brand-card" aria-label="Aditya Jain Portfolio">
          <a href="#home" className="footer-brand">
            <span>AJ</span>Aditya Jain
          </a>
          <p>
            Engineering intelligent systems,
            <br />
            computer vision, and real-world software.
          </p>
          <div className="footer-social-row">
            <span>Get in touch</span>
            <div>
              <a
                href="mailto:jaadi1229@gmail.com"
                aria-label="Send email to Aditya"
                title="Email: jaadi1229@gmail.com"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com/in/aditya-jain-a429b532b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#home"
                aria-label="Bhopal, MP, India"
                title="Bhopal, Madhya Pradesh, India"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="footer-info-card">
          <div className="footer-link-group">
            <p>Navigation</p>
            {portfolioNavigation.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
          <div className="footer-link-group">
            <p>Selected Focus</p>
            {highlightsNavigation.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>

          <div className="footer-badge" aria-hidden="true">
            <MoveUpRight />
          </div>

          <div className="footer-newsletter">
            <p>
              <span>Have an opportunity or question?</span>
              Send a message directly to Aditya&apos;s Gmail.
            </p>

            <form onSubmit={handleSubmit} className="contact-direct-form">
              <div className="contact-input-row">
                <input
                  type="text"
                  className="contact-input"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === "loading"}
                />
                <input
                  type="email"
                  className="contact-input"
                  placeholder="Your Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading"}
                />
              </div>

              <textarea
                className="contact-textarea"
                placeholder="Write your message, project idea, or internship query here... *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={status === "loading"}
              />

              <div className="contact-action-row">
                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" /> Sending to Gmail...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </button>

                <div className="contact-shortcuts">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="contact-pill-btn"
                    title="Click to copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={12} style={{ color: "#166534" }} /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={12} /> Copy jaadi1229@gmail.com
                      </>
                    )}
                  </button>

                  <a
                    href={gmailWebCompose}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-pill-btn"
                    title="Open in Gmail Web"
                  >
                    Open in Gmail <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              {status === "success" && (
                <div className="contact-status-box contact-status-success">
                  <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Message Delivered!</strong>
                    <p style={{ margin: "2px 0 0", opacity: 0.9 }}>
                      Your message has been sent directly to <strong>jaadi1229@gmail.com</strong>. Aditya will review and reply to your email soon.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="contact-status-box contact-status-error">
                  <AlertCircle size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong>Network Relay Note</strong>
                    <p style={{ margin: "2px 0 4px", opacity: 0.9 }}>
                      Could not reach automated relay. Click below to send directly via your email client or Gmail:
                    </p>
                    <a
                      href={mailtoFallback}
                      style={{
                        color: "#7f1d1d",
                        fontWeight: 600,
                        textDecoration: "underline",
                      }}
                    >
                      Click here to send via Email App ↗
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>

          <small>
            © 2026 Aditya Jain • B.Tech CSE, Lakshmi Narain College of Technology • Bhopal, India
          </small>
        </section>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        ADITYA
      </div>
    </footer>
  );
}
