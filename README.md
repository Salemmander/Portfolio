# Portfolio

Personal portfolio site built with React and Vite. Live at [salemnassar.com](https://salemnassar.com).

## Development

```bash
npm install
npm run dev       # Start dev server at localhost:5173
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint check
```

## Deployment

Pushes to `master` auto-deploy to GitHub Pages via GitHub Actions. Custom domain (`salemnassar.com`) is configured through Cloudflare DNS.

## Structure

```
src/
  App.jsx          # Main layout, data arrays (projects, skills, education)
  App.css          # Component styles
  Nav.jsx          # Fixed top navigation
  ProjectCard.jsx  # Project card component
  index.css        # Global styles, CSS variables, animations
  main.jsx         # React entry point
public/
  profile.jpg      # Profile photo
  CNAME            # Custom domain for GitHub Pages
  *.mp4, *.gif     # Project demo media
```
