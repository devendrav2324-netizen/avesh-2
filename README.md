# AVESH 2026

The official website for the 2026 cultural and technical festival of Government Engineering College (GEC).

## Features

- Responsive festival landing page with animated visual effects
- Technical and cultural event listings with detail modals
- Festival schedule, sponsors, and college information
- Registration and poster dialogs
- Event-specific landing pages and Three.js visual assets

## Tech stack

- React 19 and TypeScript
- Vite 6
- Tailwind CSS 3
- Framer Motion, Radix UI, Lucide React, and Canvas Confetti

## Getting started

Prerequisites: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production site |
| `npm run preview` | Preview the production build locally |

## Project layout

```text
src/           React application, components, data, styles, and utilities
assets/        Source artwork and reference images
public/        Static files served as-is, including landing-page assets
effects/       Reusable visual effects
```

## Build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.
