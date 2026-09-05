# Gourav Fagna — Portfolio (React + Tailwind CSS)

A personal portfolio site built with React, Vite, and Tailwind CSS v4, based on Gourav Fagna's resume (Senior DevOps & Cloud Infrastructure Engineer).

## Getting started

Requires Node.js 18+.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a production-ready build into the `dist/` folder. You can preview it with:

```bash
npm run preview
```

## Project structure

```
src/
  components/   # Navbar, Hero, Metrics, Profile, Skills, Experience, Projects, Credentials, Contact
  data.js       # All resume content (edit this to update text/links)
  App.jsx       # Assembles all sections
  index.css     # Tailwind import + custom theme tokens (colors, fonts)
```

To update your info, edit `src/data.js` — no need to touch the components.
