# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start dev server (Vite, HMR, usually <http://localhost:5173>)
- `npm run build` - Production build to `dist/`
- `npm run lint` - ESLint check
- `npm run preview` - Preview production build locally

## Architecture

Single-page React 19 portfolio (plain JS, no TypeScript). Vite for bundling.

**App.jsx** is the main component containing the page layout (hero, projects, skills, experience, education, about, footer) and data arrays (`projects`, `skills`, `education`) inline. Each project object has: `title`, `description`, `achievements`, `tags`, `github`, optional `demo`, and optional `media` (`{ type: 'video'|'image', src }`)

**ProjectCard.jsx** is a pure presentational component that renders a single project card from a `project` prop. Supports video (autoplay/loop/muted/playsInline) and image/GIF media, plus achievement bullet points.

**Nav.jsx** is a fixed top navigation bar with smooth-scroll anchor links to each section.

## Styling

- Dark theme only, defined via CSS custom properties in `index.css`
- `index.css` = global resets, variables, typography, fade-in animation
- `App.css` = layout and component styles (no CSS modules)
- Shared `.card` class for consistent card styling (bg, border, radius, hover lift)
- Shared `.bullet-list` class for consistent list bullet styling
- Shared `.tag` class for skill/project tags
- Accent color: `--accent: #64b5f6` (blue), `--accent-secondary: #a78bfa` (purple)
- Max content width: 1000px, project cards full-width with alternating media layout

## Deployment

Auto-deploys to GitHub Pages on push to `master` via `.github/workflows/deploy.yml`. Custom domain `salemnassar.com` configured through Cloudflare DNS (A record + CNAME for www). The `public/CNAME` file is required for GitHub Pages custom domain to persist across deploys.

## Static Assets

Large media files (videos, GIFs) go in `public/` and are referenced by absolute path (e.g., `/autonomous_rc_car_demo.mp4`). Small assets imported from `src/assets/` get processed by Vite.
