# Executech Interiors

A modern, single-page site for Executech Interiors, a licensed and insured
general contractor with over 20 years renovating homes in New York City and
Westchester County. Plain HTML/CSS/JS, no build step, no dependencies.

## Structure

```
index.html        All page content and section markup
css/style.css      All styling (brand color, type, layout, responsive rules)
js/main.js         Header scroll state, mobile menu, scroll-reveal animation, contact form
```

## Customizing

- **Brand blue**: set in one place, `--blue` in `css/style.css` (top of file).
  It's currently set to `#123c5e`, matched by eye from the logo. A few related
  shades (`--blue-deep`, `--blue-light`) are derived from it, so if you get
  the exact brand hex, swap it in there and adjust the other two to taste.
- **Logo**: the header, footer, and favicon use an inline SVG reconstruction
  of the grid logo mark (three rects forming an "E" and "I") rather than an
  image file, so it stays crisp at any size and always matches `--blue`. It's
  defined inline in `index.html` (search for `logomark`). If you have the
  original logo as a vector or high-res file, it's simpler to swap in an
  `<img>` pointing at that file instead.
- **Copy**: all text lives directly in `index.html`, including the company
  description, services, process steps, testimonials, service-area towns, and
  phone/email.
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

This is a static site with no server or build process required. It can be
deployed as-is to GitHub Pages, Netlify, Vercel, or any static host by
pointing it at the repository root.
