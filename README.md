# Ajith KS - Professional Portfolio Rebuild

Personal portfolio website for **Ajith KS**, Automation Engineer specializing in enterprise automation, workflow optimization, systems integration, and data engineering.

Built with **Vite**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, featuring interactive Lightswind components, Lenis smooth scrolling, dark mode, accessible native dialog modals, and responsive layout.

---

## 🛠️ Tech Stack

- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation & Scrolling:** Framer Motion, Lenis
- **Icons:** Lucide React + custom SVG icons
- **Deployment:** GitHub Pages via GitHub Actions

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 22 recommended)
- npm

### Installation

```bash
# Install dependencies cleanly
npm ci
```

### Development Server

```bash
# Run local dev server (default: http://localhost:5173/Portfolio/)
npm run dev
```

### Production Build

```bash
# Build production bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 📝 Content Management

All website content (bio, skills, experience, project case studies, certifications, education, contact details) is centralized and strictly typed in:
```text
src/data/content.ts
```

To update any section, edit the relevant field in `src/data/content.ts`.

---

## 🚢 Deployment Workflow

This project is configured for automated continuous deployment to **GitHub Pages** using GitHub Actions:

- **Workflow configuration:** `.github/workflows/deploy.yml`
- **Trigger:** Automatic deployment on `push` to `main`, or manual trigger via `workflow_dispatch`.
- **Target URL:** `https://ajith-ks.github.io/Portfolio/`
