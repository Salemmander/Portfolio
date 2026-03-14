# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start dev server (Vite, HMR, usually <http://localhost:5173>)
- `npm run build` - Production build to `dist/`
- `npm run lint` - ESLint check
- `npm run preview` - Preview production build locally

## Architecture

Single-page React 19 portfolio (plain JS, no TypeScript). Vite for bundling.

**App.jsx** is the main component containing the page layout (hero, projects grid, about, contact, footer) and the `projects` data array inline. Each project object has: `title`, `description`, `tags`, `github`, optional `demo`, and optional `media` (`{ type: 'video'|'image', src }`)

**ProjectCard.jsx** is a pure presentational component that renders a single project card from a `project` prop. Supports video (autoplay/loop/muted) and image/GIF media.

## Styling

- Dark theme only, defined via CSS custom properties in `index.css`
- `index.css` = global resets, variables, typography
- `App.css` = layout and component styles (no CSS modules)
- Accent color: `--accent: #64b5f6` (blue)
- Max content width: 900px, cards fixed at 340px with flex centering

## Static Assets

Large media files (videos, GIFs) go in `public/` and are referenced by absolute path (e.g., `/autonomous_rc_car_demo.mp4`). Small assets imported from `src/assets/` get processed by Vite.
