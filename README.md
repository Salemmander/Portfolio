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
  App.jsx              # Main layout (hero, about, footer)
  App.css              # Shared and layout styles
  data.js              # All data arrays (projects, skills, education, experience)
  index.css            # Global styles, CSS variables, animations
  main.jsx             # React entry point
  components/
    Nav.jsx + .css     # Fixed top navigation
    Project.jsx + .css # Project card
    Skills.jsx + .css  # Skills grid
    Experience.jsx + .css # Experience entries
    Education.jsx + .css  # Education timeline
public/
  profile.jpg          # Profile photo
  CNAME                # Custom domain for GitHub Pages
  *.mp4, *.gif         # Project demo media
```
