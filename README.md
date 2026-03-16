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

Pushes to `master` auto-deploy to Cloudflare Pages. Custom domain (`salemnassar.com`) is configured through Cloudflare.

## Structure

```
src/
  App.jsx              # Router setup
  App.css              # Shared and layout styles
  data.js              # All data arrays (projects, education, experience)
  index.css            # Global styles, CSS variables, animations
  main.jsx             # React entry point
  pages/
    Home.jsx           # Home page layout
  components/
    Nav.jsx + .css     # Fixed top navigation
    Project.jsx + .css # Project card
    ProjectDetail.jsx + .css # Project detail page
    Experience.jsx + .css # Experience entries
    Education.jsx + .css  # Education timeline
public/
  profile.jpg          # Profile photo
  _redirects           # Cloudflare Pages SPA fallback
  *.mp4, *.gif         # Project demo media
```
