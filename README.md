# Executech Interiors

A modern, single-page site for Executech Interiors — custom high-end interior
renovations in Westchester County and New York City. Plain HTML/CSS/JS, no
build step, no dependencies.

## Structure

```
index.html        All page content and section markup
css/style.css      All styling (brand color, type, layout, responsive rules)
js/main.js         Header scroll state, mobile menu, scroll-reveal animation, contact form
```

## Customizing

- **Brand blue**: set in one place, `--blue` in `css/style.css` (top of file).
  A few related shades (`--blue-deep`, `--blue-light`) are derived from it —
  swap in the exact hex from the current logo/header and adjust the other two
  to taste.
- **Copy**: all text lives directly in `index.html` — company description,
  services, process steps, testimonials, service-area towns, phone/email.
- **Project photos**: the "Selected Work" grid (`#work` in `index.html`) uses
  styled placeholder blocks (`.project-photo.hatch-1` … `hatch-6`) instead of
  real photography. To swap in a real photo, add an inline style, e.g.:

  ```html
  <div class="project-photo" style="background-image:url('assets/img/scarsdale-01.jpg'); background-size:cover; background-position:center;"></div>
  ```

  Put photos in a new `assets/img/` folder. Landscape shots at ~1600px wide
  work well.
- **Contact form**: currently front-end only (shows a "thank you" message on
  submit, does not send anywhere). Wire it up by pointing the `<form>` at a
  service like Formspree, Netlify Forms, or a serverless function, per that
  service's docs.

## Deployment

This is a static site — no server or build process required. It can be
deployed as-is to GitHub Pages, Netlify, Vercel, or any static host by
pointing it at the repository root.
