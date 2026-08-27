# Srivathsa SH — Portfolio

Personal portfolio of **Srivathsa SH**, Full Stack Developer based in Bengaluru.

Live: [portfolio-six-mu-62.vercel.app](https://portfolio-six-mu-62.vercel.app)

## About

Cool-luxury portfolio showcasing work at Geekonomy Technology and DRDO (CABS), plus projects in full-stack development, automation, NLP, and deep learning.

## Features

- Responsive single-page layout (Hero, About, Skills, Experience, Projects, Contact)
- Motion animations via [Motion Primitives](https://github.com/ibelick/motion-primitives) (`TextEffect`, `Magnetic`, `Spotlight`, `Tilt`, `InfiniteSlider`, `ScrollProgress`)
- Cool silver canvas theme with Syne / DM Sans / JetBrains Mono
- Email contact form via EmailJS
- Resume download and social links (GitHub, LinkedIn)

## Tech Stack

| Area | Tools |
|------|--------|
| UI | React 18, Tailwind CSS, Motion |
| Motion | Motion Primitives, `motion/react` |
| Icons | React Icons, Heroicons |
| Contact | EmailJS |
| Deploy | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or pnpm)

### Setup

```bash
git clone https://github.com/srivathsa26/portfolio.git
cd portfolio
npm install
cp .env.example .env
```

Fill in EmailJS values in `.env` (see [EmailJS docs](https://www.emailjs.com/docs/)):

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

On Vercel, set the same variables in **Project Settings → Environment Variables**.

### Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

Static output is written to `build/`.

## Project Structure

```
src/
  components/
    motion-primitives/   # Motion Primitives ports
    Hero.js, About.js, Skills.js, Experience.js, Projects.js, Contact.js, Navbar.js
  lib/                   # motion helpers + cn()
  App.js
  index.js
public/                  # resume PDF, photo, favicons
DESIGN.md                # design tokens and rules
```

## Customization

- **Content** — edit files under `src/components/`
- **Design tokens** — `DESIGN.md`, `tailwind.config.js`, `src/index.css`
- **SEO / meta** — `public/index.html`
- **Resume** — replace `public/Srivathsa_resume_FSD__25_aug.pdf` and update the Hero download `href` if the filename changes

## License

Private personal portfolio. All rights reserved © Srivathsa SH.
