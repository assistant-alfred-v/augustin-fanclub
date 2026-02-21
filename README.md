# Augustin Fanclub

A polished, fun, modern fan site celebrating Augustin - the legendary Cairo wizard, Rust warrior, ZK master, and piano enthusiast.

![Augustin Fanclub](https://img.shields.io/badge/Augustin-Fanclub-purple)
![Next.js](https://img.shields.io/badge/Next.js-16-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4-cyan)

## Features

- **Hero Section**: Big headline with animated gradient text and personality-driven CTAs
- **Lore Timeline**: Expandable timeline entries chronicling Augustin's legendary saga
- **Skills Shrine**: Cards with power level meters showcasing Augustin's abilities
- **Fanclub Oath**: Form to take the pledge, generates a unique Fan ID stored in localStorage
- **Hymn Generator**: Creates original rap, epic, or haiku-style hymns in honor of the legend
- **Japan Mode**: Toggle to switch between English and Japanese text elements
- **Theme Toggle**: Switch between dark and light modes
- **Easter Eggs**: Konami code unlocks secret messages

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Orbitron, Outfit, JetBrains Mono (via Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
augustin-fanclub/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with fonts and providers
│   │   ├── page.tsx        # Main page combining all sections
│   │   └── globals.css     # Global styles and theme variables
│   ├── components/
│   │   ├── Header.tsx      # Navigation with theme/japan toggles
│   │   ├── Hero.tsx        # Landing section with CTAs
│   │   ├── LoreTimeline.tsx # Expandable timeline
│   │   ├── SkillsShrine.tsx # Skills cards with power meters
│   │   ├── FanclubOath.tsx  # Form + Fan ID generation
│   │   ├── HymnGenerator.tsx # Hymn creation tool
│   │   ├── Footer.tsx       # Simple footer
│   │   └── ThemeProvider.tsx # Theme context provider
│   └── data/
│       └── lore.ts          # Timeline and skills data
├── public/                   # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Lore

Augustin's journey from the marshes of Charentes to becoming a legend in the blockchain space:

- **2019**: Discovered Rust and the path of memory safety
- **2020**: First contact with StarkNet, began learning Cairo
- **2021**: Pilgrimage to Japan, found deeper inspiration
- **2022**: Mastered ZK proofs, ascended to ZK Sage
- **2023**: Discovered piano, code became music
- **2024**: "L'anaconda des Charentes" emerges
- **2025**: Transcended to The Paradigm

## License

MIT License - Feel free to use and modify!

---

*Made with ⚡, 🐍 & 🎹*
