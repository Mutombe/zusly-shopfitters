# Zusly — v3

A static, multi-page site for **Zusly Shopfitters & Projects** — architectural
aluminium & glazing studio in Harare, Zimbabwe.

Editorial "architectural" design: a full-bleed rounded hero, Michroma display
type, survey-linework decorative patterns, a grayscale→colour services wall, a
filterable project index, project detail pages with a scope panel + spec table +
bleeding photo carousel and lightbox, and a floating WhatsApp button. Themed in
Zusly **deep navy (#003D70)** + **orange (#F26603)** on paper white.

## Pages
- `index.html` — home (hero, about, featured work, process, stats band, CTA)
- `projects.html` — filterable project index (category / location / year)
- `project.html?p=<slug>` — project detail (scope, spec, gallery, prev/next)
- `services.html` — the six disciplines
- `about.html` — story, values, leadership & structure, clients
- `contact.html` — enquiry form (email **or** WhatsApp) + map

No build step, no framework — plain HTML/CSS/JS. All content lives in
`assets/js/data.js`; all images in `assets/img/`.

## Run locally
Any static server, e.g.:
```bash
python -m http.server 8099      # then open http://127.0.0.1:8099
# or:  npx serve .
```

## Deploy to Render (Static Site)

### Option A — Dashboard
1. Push this folder to a GitHub repo.
2. Render dashboard → **New + → Static Site** → connect the repo.
3. Settings:
   - **Build Command:** *(leave empty)*
   - **Publish Directory:** `.`
4. **Create Static Site.** Render serves the files and gives you a
   `*.onrender.com` URL; every push to the default branch auto-deploys.

### Option B — Blueprint
This repo ships `render.yaml`. In Render: **New + → Blueprint**, connect the
repo, and it reads the config automatically.

## Edit content
Open `assets/js/data.js` and edit the `window.ZUSLY` object — company details,
services, projects (with image file names from `assets/img/`), leadership,
values, clients and testimonials. No rebuild needed; just refresh.
