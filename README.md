# |MQH⟩ — Midwest Quantum Hackathon

A student-led quantum computing hackathon organized by student organizations from six Midwest universities, converging in Chicago for autumn 2026.

## Participating Student Organizations

| University | Student Org |
|---|---|
| Purdue University | [Quantum Student Organization (QSO)](https://qsopurdue.org) |
| UIUC | Illinois Student Quantum Club |
| University of Chicago | Chicago Student Quantum Group |
| UW-Madison | Wisconsin Quantum Student Club |
| Purdue University Northwest | Purdue NW Quantum Chapter |
| University of Illinois Chicago | UIC Quantum Chapter |

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Map**: [react-simple-maps](https://www.react-simple-maps.io/) with d3-geo
- **Fonts**: Inter, Lora, Space Mono (via `next/font/google`)

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx            # Homepage — hero, map, partner grid, gateway cards
│   ├── about/page.tsx      # About — mission, what to expect, student orgs, FAQ
│   ├── sponsor/page.tsx    # Sponsorship tiers & budget breakdown
│   ├── register/page.tsx   # Pre-registration waitlist form
│   ├── globals.css         # Design system tokens & base styles
│   └── layout.tsx          # Root layout with font loading
├── components/
│   ├── Header.tsx          # Fixed navbar with |MQH⟩ logo
│   ├── Hero.tsx            # Landing hero section
│   ├── MidwestMap.tsx      # Interactive scroll-animated map
│   └── Footer.tsx          # Site footer
└── public/
    └── images/             # Logos and assets
```

## Contributing

This project is organized by student orgs across the Midwest. If your university has a quantum computing student organization and you'd like to get involved:

1. Fork this repo
2. Add your student org to the About page
3. Submit a pull request

## License

MIT
