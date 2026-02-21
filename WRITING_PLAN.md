# Augustin Fanclub - Writing Plan

## Product Goals + Target Vibe

**Mission**: Build a polished, fun, modern fan site celebrating Augustin - a mysterious tech polymath with Cairo/StarkNet, Rust, ZK, Japan, and piano obsessions.

**Target Vibe**: 
- Mythic-tech aesthetic (like a video game character backstory meets crypto culture)
- Playful but impressive - show off frontend skills
- Web3-native but accessible
- Slight Japanese influence (aesthetic, not forced)
- "L'anaconda des Charentes" energy - powerful, coiled, lurking

**Success Metrics**:
- Runs with `npm install && npm run dev`
- Mobile-responsive, dark/light theme toggle
- All sections functional with smooth animations
- Clean commit history on GitHub

---

## Information Architecture

### Page Sections (Single Page App)
1. **Hero/Landing** - Big headline, personality subtitle, CTAs
2. **Lore Timeline** - Scrollable saga entries (expandable)
3. **Skills Shrine** - Power-level cards for each skill
4. **Fanclub Oath** - Form + Fan ID card generation
5. **Hymn Generator** - Rap-ish original lyrics generator

### Navigation
- Sticky header with smooth scroll links
- Japan mode toggle
- Theme toggle (dark/light)

### URL Structure
- Single page with section IDs for anchor navigation
- `/` is the only route

---

## Visual System

### Color Palette
```
--bg-primary: #0a0a0f (deep void black)
--bg-secondary: #12121a (card backgrounds)
--bg-tertiary: #1a1a25 (elevated surfaces)

--accent-primary: #7c3aed (violet - primary CTA)
--accent-secondary: #06b6d4 (cyan - highlights)
--accent-tertiary: #f472b6 (pink - Japan mode accent)

--text-primary: #f8fafc (white text)
--text-secondary: #94a3b8 (muted text)
--text-accent: #c4b5fd (violet accent text)

--success: #22c55e (green for power levels)
--gold: #fbbf24 (legendary/rare elements)
```

### Typography
- **Headings**: "Orbitron" (futuristic, techy) - Google Font
- **Body**: "Outfit" (modern, clean, readable) - Google Font
- **Accent/Monospace**: "JetBrains Mono" (code vibes)

### Spacing System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Card padding: 24px
- Gap between cards: 24px
- Container max-width: 1200px

### Visual Effects
- Glassmorphism cards (backdrop-blur, subtle borders)
- Glow effects on hover (box-shadow with accent colors)
- Subtle gradient overlays
- Noise texture background (CSS)

---

## Content Voice Guidelines

### Tone
- Mythic-tech poetry
- Slightly over-the-top praising (it's a fanclub)
- Use rich adjectives: "legendary", "arcane", "forged", "ascended"
- Tech-nerd humor acceptable
- Self-aware playful ego

### Naming Conventions
- "The Saga" (timeline)
- "Shrine" (skills section)
- "Oath" (form)
- "Hymn" (generator)
- "Fan ID" (generated card)

### Sample Voice
- "In the Year of the Bear, Augustin emerged from the Charentes..."
- "His Cairo incantations summon protocols from the void..."
- "Power Level: ∞ (Unmeasurable)"

---

## Component List

### Layout
- `Layout` - Main wrapper with theme provider
- `Header` - Nav, logo, theme/japan toggles
- `Footer` - Simple credits

### Sections
- `Hero` - Main landing with CTAs
- `LoreTimeline` - Timeline container
- `TimelineEntry` - Individual expandable entry
- `SkillsShrine` - Skills container
- `SkillCard` - Individual skill with power meter
- `FanclubOath` - Form + Fan ID display
- `HymnGenerator` - Generator with controls
- `JapanToggle` - Hidden/visible toggle

### UI Components
- `Button` - Primary/secondary variants
- `Card` - Glassmorphism base
- `PowerMeter` - Animated progress bar
- `ThemeToggle` - Dark/light switch
- `Toast` - Notifications

---

## Data Model

### Timeline Entry
```typescript
interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
  details: string; // expanded content
  rarity: 'common' | 'rare' | 'legendary' | 'mythic';
}
```

### Skill
```typescript
interface Skill {
  id: string;
  name: string;
  description: string;
  powerLevel: number; // 0-100
  icon: string;
  category: 'backend' | 'frontend' | 'blockchain' | 'meta';
}
```

### FanMember (localStorage)
```typescript
interface FanMember {
  id: string;
  name: string;
  pledge: string;
  joinedAt: string;
  japanMode: boolean;
}
```

### Hymn Line (generated)
```typescript
interface HymnLine {
  lines: string[];
  style: 'rap' | 'epic' | 'haiku';
}
```

---

## Milestones + Checklist

### Phase 1: Foundation
- [ ] Initialize Next.js + TS + Tailwind
- [ ] Set up fonts, colors, base styles
- [ ] Create Layout + Header + Footer

### Phase 2: Core Content
- [ ] Create data modules (lore.json, skills.ts)
- [ ] Build Hero section with CTAs
- [ ] Build Lore Timeline (expandable)
- [ ] Build Skills Shrine (power meters)

### Phase 3: Interactive Features
- [ ] Build Fanclub Oath form
- [ ] Implement localStorage for Fan ID
- [ ] Build Hymn Generator
- [ ] Add Japan mode toggle

### Phase 4: Polish
- [ ] Add Framer Motion animations
- [ ] Implement Easter eggs (Konami code)
- [ ] Accessibility audit
- [ ] Theme toggle (dark/light)
- [ ] Mobile responsiveness

### Phase 5: Ship
- [ ] Write README
- [ ] Clean up code, lint
- [ ] Test build
- [ ] Push to GitHub

---

## Subagent Assignments

### Subagent A: Product + IA
- Design section flow and navigation
- Define component hierarchy
- Plan responsive breakpoints
- Coordinate overall structure

### Subagent B: Copywriting + Lore
- Write timeline entries (mythic, fun, specific to Augustin)
- Create skill descriptions
- Draft hymn generator templates
- Write all UI text and labels

### Subagent C: Engineering + Architecture
- Set up Next.js project
- Implement all React components
- Handle localStorage logic
- Add animations

### Subagent D: QA + Accessibility + Performance
- Test responsive behavior
- Check accessibility (contrast, labels, focus)
- Verify all features work
- Optimize build

---

## Commit Strategy

1. `init` - Project setup with dependencies
2. `layout + theme` - Base layout, header, theme system
3. `lore + skills` - Timeline and skills data + components
4. `oath + storage` - Fan form and localStorage
5. `hymn generator` - Hymn generation feature
6. `polish + README` - Animations, easter eggs, final polish
