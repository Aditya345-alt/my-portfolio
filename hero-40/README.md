# Aditya Jain — Software & AI/ML Engineer Portfolio

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-38bdf8.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)

> **Computer Science Engineering Undergraduate | Software & AI/ML Internships**  
> *Jai Narain College of Technology, Bhopal (Sep 2024 – Aug 2028)*  
> **Smart India Hackathon 2025 Grand Finale Finalist** (Team Ragnarok)  
> Email: [jaadi1229@gmail.com](mailto:jaadi1229@gmail.com) • LinkedIn: [linkedin.com/in/aditya-jain-a429b532b](https://linkedin.com/in/aditya-jain-a429b532b)

---

## 🌟 Overview

Welcome to my personal developer portfolio! This repository contains the source code for my portfolio website, engineered to showcase my projects across computer vision, AI weather nowcasting, full-stack prototypes, and algorithmic problem-solving.

### Key Interactive Features
- **Hero & Dither Interaction**: Dynamic noise and dither reveal layers with smooth navigation.
- **Engineering Philosophy**: Real-time `ScrollHighlight` word-by-word reveal reflecting core principles.
- **Interactive Technical Orbit**: Continuous rotating multi-icon ecosystem built with `ProximityOrbit`.
- **Engineering Methodology**: Animated chromatic wave envelopes (Ingest → Model → Interface).
- **Featured Projects Filter**: Dynamic category filtering (All, Computer Vision, AI/ML, Full-Stack).
- **Quantified Outcomes**: Hover spotlight cards displaying sub-pixel precision (`RMSE < 1.2px`) and hackathon milestones.
- **3D Particle Sphere**: Interactive Three.js particle sphere with real-time cursor gravity and drag dynamics.
- **Direct Gmail Contact**: Interactive form sending messages directly to `jaadi1229@gmail.com` with instant copy and Gmail web shortcuts.

---

## 🛠️ Technical Skills & Proficiencies

| Category | Technologies & Tools |
| :--- | :--- |
| **Languages** | C++, Python, JavaScript, TypeScript |
| **AI / ML & Data** | scikit-learn, XGBoost, PyTorch, SHAP, Pandas, NumPy, Matplotlib, Streamlit |
| **Computer Vision & Backend** | OpenCV, SIFT, RANSAC, Image Registration, FastAPI, REST APIs |
| **Frontend & UI** | React 19, Next.js, Vite, Tailwind CSS, HTML5, CSS3, GSAP, Framer Motion |
| **Core CS & Algorithms** | Data Structures & Algorithms, OOP, Complexity Analysis, Sorting, Recursion |
| **Tools & Environments** | Git, GitHub, VS Code, Figma, Linux |

---

## 🚀 Selected Technical Projects

### 1. Lunar Fusion / LunarMatch AI — Chandrayaan-2 Multi-Modal Image Registration
- **Problem**: Multi-sensor lunar imagery across varying altitudes, sun angles, and scales are challenging to align.
- **Approach**: SIFT feature detection, FLANN/BF ratio-test filtering, RANSAC geometric verification, and homography matrix transformation.
- **Stack**: OpenCV, Python, SIFT, RANSAC, FastAPI, React, Vite.
- **Outcome**: Sub-pixel geometric precision (`RMSE < 1.2px`) and interactive verification dashboard.

### 2. TempestIQ — AI-Powered Weather Nowcasting
- **Objective**: Meteorological sensor data ingestion, feature preparation, and localized precipitation prediction.
- **Stack**: Python, scikit-learn, Pandas, NumPy, Streamlit, FastAPI.
- **Outcome**: Short-horizon weather forecasting with clear observed vs. predicted telemetry visualizers.

### 3. SolarSense-AI — Solar Activity Monitoring Dashboard
- **Concept**: Solar-observation data streaming, anomaly detection status, and automated alert presentation.
- **Stack**: Python, Visual Analytics, Telemetry Dashboards, REST APIs.

### 4. Smart Tourist Safety Monitoring & Incident Response System
- **Objective**: Digital safety workflow connecting citizen emergency reporting to automated dispatch coordination.
- **Stack**: React, FastAPI, Geospatial Architecture, REST APIs.

### 5. Skill Sanka / NGO Awareness Platform
- **Objective**: Information architecture connecting rural youth to vocational skills training and community impact.
- **Stack**: React, Vite, Modern CSS, Responsive Information Architecture.

---

## 🏆 Achievements & Leadership

- **Smart India Hackathon 2025 — Grand Finale Finalist**: Advanced to the national Grand Finale with *Team Ragnarok*; collaborated on rapid problem analysis, algorithm architecture, and prototype delivery under strict deadlines.
- **Mood Indigo, IIT Bombay — Indigo Squad Member**: Contributed to student-team coordination, event execution, and logistics at Asia's premier cultural fest.
- **Competitive Algorithmic Practice**: Continuous problem solving in C++ across arrays, linked lists, recursion, trees, and time/space complexity optimization.

---

## 💻 Local Setup & Development

### Prerequisites
- Node.js `>=20.0.0` (Recommended: `>=22.13.0`)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production
```bash
# Type check and build production bundle
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Core design tokens, dark purple palette & animations
│   ├── layout.tsx           # Root HTML layout & font configuration
│   └── page.tsx             # Main assembled single-page portfolio
├── components/
│   ├── ChromaticWaves.tsx   # WebGL chromatic wave visualizer
│   ├── CountUp.tsx          # Dynamic metric counting animation
│   ├── DitherReveal.tsx     # Hero dither visual canvas
│   ├── DraggableSticker.tsx # Interactive physics sticker component
│   ├── FooterSection.tsx    # Contact form with Gmail relay & quick copy
│   ├── GenerationSection.tsx# Orbiting technical stack ecosystem
│   ├── GlobalImpactSection.tsx # Metrics with 3D Particle Sphere
│   ├── ParticleSphere.tsx   # Three.js 3D interactive particle sphere
│   ├── ProcessSection.tsx   # 3-stage engineering methodology cards
│   ├── ProjectsSection.tsx  # Categorized project showcase gallery
│   ├── ProximityOrbit.tsx   # Interactive proximity orbit component
│   ├── ResearchSection.tsx  # Philosophy statement & framed portrait
│   ├── ResultsSection.tsx   # Quantified spotlight outcome cards
│   └── ScrollHighlight.tsx  # GSAP scroll-driven word-by-word reveal
├── public/                  # Static assets, SVG logos & portrait images
├── package.json             # Project metadata, scripts & dependencies
└── tsconfig.json            # TypeScript configuration
```

---

## 📬 Contact & Connect

- **Email**: [jaadi1229@gmail.com](mailto:jaadi1229@gmail.com)
- **LinkedIn**: [linkedin.com/in/aditya-jain-a429b532b](https://linkedin.com/in/aditya-jain-a429b532b)
- **Location**: Bhopal, Madhya Pradesh, India

*Built with passion by Aditya Jain.*
