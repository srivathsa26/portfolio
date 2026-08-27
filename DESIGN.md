# DESIGN.md — Srivathsa SH Portfolio

Premium cool-luxury language informed by [Taste Skill](https://github.com/Leonxlnx/taste-skill) + Resend-style restraint from [awesome-design-md](https://github.com/VoltAgent/awesome-design-md).

**Design read:** Developer portfolio for recruiters — calm, expensive, high whitespace, singular accent.

**Dials:** VARIANCE 6 · MOTION 7 · DENSITY 3

## Palette

| Token | Value | Role |
|-------|-------|------|
| canvas | `#F3F4F6` | Cool silver page ground |
| surface | `#FFFFFF` | Panels / forms |
| ink | `#0C0C0E` | Primary text / primary CTA |
| mute | `#5E616B` | Secondary copy |
| accent | `#1A5FFF` | Links, labels, emphasis |

## Type

- Display: **Syne** (brand + section titles)
- Body: **DM Sans**
- Labels / tags: **JetBrains Mono**

## Rules

- No purple gradients, glow orbs, Inter, or pill badge clusters
- Brand name is the hero signal
- Full-bleed photo hero with soft light overlays
- Projects as numbered editorial rows, not equal card grids
- One accent locked site-wide
- Motion: [motion-primitives](https://github.com/ibelick/motion-primitives) (TextEffect, Magnetic, Spotlight, Tilt, InfiniteSlider, ScrollProgress, InView, TextShimmer); all gated by `prefers-reduced-motion`
