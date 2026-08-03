# |MQH⟩ — Midwest Quantum Hackathon

> **November 14–15, 2026 · Chicago, IL**
> A student-led quantum computing hackathon organized by student chapters across five Midwest universities.

---

## Participating Student Organizations

| University | Student Organization |
|---|---|
| **University of Illinois Urbana-Champaign** | SIGQuantum @ UIUC |
| **Purdue University** | [Quantum Student Organization (QSO)](https://qsopurdue.org) |
| **University of Chicago** | Chicago Student Quantum Group |
| **University of Illinois Chicago** | UIC Quantum Chapter |
| **University of Wisconsin–Madison** | Wisconsin Quantum Student Club |

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript + React 19
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- **Typography**: Montserrat (headings) & IBM Plex Sans (body) via `next/font/google`
- **Design**: Minimalist, light theme

---

## Project Structure

```
.
├── public/
│   └── logo.png                  # MQH logo mark
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home (hero, chapters, gateways)
│   │   ├── about/page.tsx        # Mission, tracks, chapters & FAQ
│   │   ├── sponsor/page.tsx      # Sponsorship tiers & budget
│   │   ├── register/page.tsx     # Pre-registration waitlist
│   │   ├── globals.css           # Tailwind v4 tokens & base styles
│   │   └── layout.tsx            # Root layout & fonts
│   ├── components/
│   │   ├── Header.tsx            # Sticky navbar
│   │   ├── Hero.tsx              # Landing hero
│   │   ├── Chapters.tsx          # Participating chapters grid
│   │   ├── Footer.tsx            # Site footer
│   │   ├── PreRegisterForm.tsx   # Multi-step waitlist form
│   │   └── ui/                   # shadcn/ui components
│   └── lib/
│       └── utils.ts              # cn() class helper
├── components.json               # shadcn config
└── package.json
```

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

---

## License

Distributed under the MIT License. See `LICENSE` for details.
