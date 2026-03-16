# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start dev server (Vite, HMR, usually <http://localhost:5173>)
- `npm run build` - Production build to `dist/`
- `npm run lint` - ESLint check
- `npm run preview` - Preview production build locally

## Architecture

React 19 portfolio with client-side routing (plain JS, no TypeScript). Vite for bundling, react-router-dom for routing.

**App.jsx** is the router shell with two routes: `/` (Home) and `/projects/:slug` (ProjectDetail).

**Home.jsx** is the main page layout (hero, projects list, experience, education, footer).

**data.js** contains all data arrays (`projects`, `education`, `experience`). Each project object has: `title`, `slug`, `description`, `achievements`, `tags`, `github`, optional `demo`, optional `media` (`{ type: 'video'|'image', src }`), and `details` (story, howItWorks, challenges, results, whatsNext).

**Project.jsx** renders a project card on the home page. Cards link to `/projects/{slug}`.

**ProjectDetail.jsx** renders a full project detail page from the `details` object in data.

**Nav.jsx** is a fixed top navigation bar with smooth-scroll anchor links.

## Styling

- Dark theme only, defined via CSS custom properties in `index.css`
- `index.css` = global resets, variables, typography, fade-in animation
- `App.css` = shared classes and layout styles
- Each component has co-located CSS (e.g., `Project.css`, `Education.css`)
- Shared `.card` class for consistent card styling (bg, border, radius, hover lift)
- Shared `.bullet-list` class for consistent list bullet styling
- Shared `.tag` class for project tags
- Accent color: `--accent: #64b5f6` (blue), `--accent-secondary: #a78bfa` (purple)
- Max content width: 1000px, project cards full-width with alternating media layout

## Deployment

Auto-deploys to Cloudflare Pages on push to `master`. Custom domain `salemnassar.com` configured through Cloudflare. The `public/_redirects` file handles SPA fallback routing.

## Static Assets

Large media files (videos, GIFs) go in `public/` and are referenced by absolute path (e.g., `/autonomous_rc_car_demo.mp4`). Small assets imported from `src/assets/` get processed by Vite.
