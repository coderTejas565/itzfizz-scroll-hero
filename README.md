# Itzfizz Digital — Scroll-Driven Hero

A cinematic, scroll-driven hero experience built for the Itzfizz Digital internship assignment. The design combines warm editorial styling, bold typography, layered geometric artwork, and GSAP-powered scroll interactions.

## Overview

**Concept:** Structural Reveal — the work assembles itself as you arrive.

The hero introduces the studio through a minimal editorial layout. As the user scrolls, the artwork separates into layers, the headline shifts to create visual hierarchy, and studio metrics transition through a controlled animation sequence.

### Key Features

* **Animated introduction:** Staggered entrance animations for the headline and artwork.
* **Scroll-driven storytelling:** The hero composition evolves as the user scrolls.
* **Layered SVG artwork:** Independent transforms create depth and movement.
* **Metric transitions:** Studio highlights change throughout the scroll sequence.
* **Scroll progress indicator:** A progress bar communicates the animation journey.
* **Responsive layout:** Desktop and mobile animation values are adjusted for different screen sizes.
* **Reduced-motion support:** Respects the operating system's reduced-motion preference.
* **Production-ready build:** TypeScript checks and the optimized Next.js build complete successfully.

## Tech Stack

* **Framework:** Next.js 16
* **UI:** React and TypeScript
* **Styling:** CSS and Tailwind CSS
* **Animation:** GSAP 3 with ScrollTrigger
* **Build:** Next.js production build with Turbopack

## Getting Started

### Prerequisites

* Node.js and npm
* Git

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone <your-repository-url>
cd itzfizz-scroll-hero
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Run the production server locally:

```bash
npm run start
```

Then open http://localhost:3000.

## Animation Architecture

The hero separates presentation from animation logic to keep the implementation maintainable.

```text
app/
  page.tsx
  layout.tsx
  globals.css

components/
  hero/
    Hero.tsx
    HeroBrand.tsx
    HeroHeadline.tsx
    HeroMetric.tsx
    HeroProgress.tsx
    HeroVisual.tsx

animations/
  hero/
    scroll.ts

data/
  hero.ts
```

### Animation Sequence

1. **Introduction:** The headline and artwork enter with staggered fade-and-rise animations.
2. **Composition movement:** The artwork scales and shifts as scrolling begins.
3. **Structural reveal:** Individual SVG layers move independently to create depth.
4. **Visual transition:** The headline adjusts in scale and position while supporting text recedes.
5. **Metric sequence:** Studio highlights transition as the user progresses through the hero.
6. **Final composition:** The artwork settles into its final arrangement and the progress indicator completes.

GSAP's `ScrollTrigger` pins the hero stage during the scroll sequence. The animation uses a responsive scroll distance and a scrubbed timeline to connect motion to the user's scroll position.

## Accessibility and Responsiveness

* Uses `prefers-reduced-motion` to disable the main animated sequence when reduced motion is requested.
* Uses semantic HTML elements and accessible labels for major sections.
* Updates metric visibility attributes as the active metric changes.
* Adjusts artwork movement and scaling for mobile screens.

## Author

**Tejas A.**

GitHub: [coderTejas565](https://github.com/coderTejas565)

LinkedIn: [tejas-a-5174b0399](https://www.linkedin.com/in/tejas-a-5174b0399)

---

Built as part of the Itzfizz Digital internship assignment.
