# Shahul Shaik - Portfolio

React.js + Bootstrap 5 portfolio (Vite), styled after the Nova template.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the build
```

## Edit content

All text (skills, experience, projects, education, contact) is in `src/data/portfolio.js`.

## Photos

In `src/assets/`:
- `hero.jpg`: hero blob image
- `formal.jpg`: About section
- `cover-web.jpg`: Contact banner

## Structure

```
shahul-portfolio/
  index.html
  package.json
  vite.config.js
  public/Shahul_Shaik_Resume.pdf
  src/
    main.jsx
    App.jsx
    styles.css
    data/portfolio.js
    assets/        (hero.jpg, formal.jpg, cover-web.jpg)
    components/    (Navbar, Hero, About, Skills, Experience,
                    Projects, Education, Contact, Footer, SectionHeading)
```

## Deploy

Push to GitHub and import into Vercel or Netlify (build: `npm run build`, output: `dist`).
