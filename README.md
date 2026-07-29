# |MQH⟩ — Midwest Quantum Hackathon

[![Next.js](https://img.shields.io/badge/Next.js-16.2.10-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel Status](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://midwest-quantum-hackathon.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **Autumn 2026 | Chicago, IL**  
> A collaborative student-led initiative co-organized by quantum computing student organizations across six Midwest universities, converging in Chicago.

---

## 🚀 Live Demo & Links

- **Live Production Site**: **[https://midwest-quantum-hackathon.vercel.app](https://midwest-quantum-hackathon.vercel.app)**
- **Public GitHub Repository**: **[https://github.com/RockyTaco/Midwest-Quantum-Hackathon](https://github.com/RockyTaco/Midwest-Quantum-Hackathon)**

---

## 🏛️ Participating Student Organizations

| University | Student Organization | Location |
|---|---|---|
| **Purdue University** | [Quantum Student Organization (QSO)](https://qsopurdue.org) | West Lafayette, IN |
| **UIUC** | Illinois Student Quantum Club | Urbana-Champaign, IL |
| **University of Chicago** | Chicago Student Quantum Group | Hyde Park, Chicago, IL |
| **UW-Madison** | Wisconsin Quantum Student Club | Madison, WI |
| **Purdue University Northwest** | Purdue NW Quantum Chapter | Hammond, IN |
| **University of Illinois Chicago** | UIC Quantum Chapter | Near West Side, Chicago, IL |

---

## ✨ Features

- **Interactive Scroll-Driven Midwest Map**: Dynamic map rendered with `react-simple-maps` and `d3-geo` projection (`geoAlbers`), featuring crisp state outlines, hover card tooltips, and scroll-triggered trajectory lines with arrowhead (`>`) tips extending into Chicago.
- **Student Coalition Directory**: Profiles of founding university chapters with links and background context.
- **Formal Sponsorship Model**: Multi-tiered partner packages (`Coherence` $1,500, `Superposition` $3,000, `Entanglement` $5,000) and budget breakdown table.
- **Multi-Step Pre-Registration Portal**: Interactive form for student hackers to demonstrate early interest and request regional travel stipends.
- **Cosmic Indigo Design System**: Pristine dark mode aesthetics with cosmic purple (`#a855f7`), photon cyan (`#38bdf8`), electric blue (`#3b82f6`), and ambient lighting glow effects.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS Variables design system
- **Geographic Projection**: `react-simple-maps` + `d3-geo`
- **Typography**: Inter & Space Mono (via `next/font/google`)
- **Hosting & CI/CD**: Vercel

---

## 📂 Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── page.tsx               # Homepage (Hero, Interactive Map, Partners Bar, Gateways)
│   │   ├── about/
│   │   │   ├── page.tsx           # Mission, Event Tracks, Student Orgs & FAQ
│   │   │   └── AboutPage.module.css
│   │   ├── sponsor/
│   │   │   ├── page.tsx           # Sponsorship Tiers & Budget Allocation
│   │   │   └── Sponsor.module.css
│   │   ├── register/
│   │   │   ├── page.tsx           # Student Pre-Registration Waitlist Portal
│   │   │   └── RegisterPage.module.css
│   │   ├── globals.css            # Cosmic Indigo design tokens & root styles
│   │   └── layout.tsx             # Root layout & font configurations
│   ├── components/
│   │   ├── Header.tsx             # Fixed navbar with |MQH⟩ logo
│   │   ├── Hero.tsx               # Main hero section
│   │   ├── MidwestMap.tsx         # Scroll-animated Midwest convergence map
│   │   ├── PreRegisterForm.tsx    # Multi-step waitlist form
│   │   └── Footer.tsx             # Site footer
│   └── public/
│       └── images/                # Logos & image assets
├── vercel.json                    # Vercel deployment configuration
└── package.json
```

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RockyTaco/Midwest-Quantum-Hackathon.git
   cd Midwest-Quantum-Hackathon
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Building for Production

```bash
# Type check and build Next.js production bundle
npm run build

# Start production server
npm start
```

---

## 🤝 Contributing

We welcome contributions from student chapters, developers, and designers across the Midwest!

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/new-chapter-profile`)
3. **Commit** your changes (`git commit -m "feat: add chapter profile"`)
4. **Push** to the branch (`git push origin feature/new-chapter-profile`)
5. **Open** a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
