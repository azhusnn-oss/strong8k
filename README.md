# Strong 8K IPTV — Website

A plain HTML/CSS/JS marketing site for Strong 8K IPTV. No build step, no framework —
open any `.html` file directly or serve the folder with any static file server.

## Pages

- `index.html` — Home
- `iptv-subscription.html` — IPTV Subscription plans
- `strong-8k-app.html` — Strong 8K App / IPTV Player
- `strong-8k-iptv-installation.html` — Setup & Installation guide
- `strong-8k-reseller-panel.html` — IPTV Reseller panel
- `contact-us.html` — Contact Us

## Structure

```
assets/
  css/style.css   — one shared stylesheet for the entire site (no per-page overrides)
  js/main.js      — one shared script (mobile nav, sticky header, contact form)
  img/            — favicon + social share image (SVG)
*.html            — the six pages above, each linking the same css/js files
```

Every page shares the same `<head>` stylesheet link and the same header/footer
markup, so styling changes are made once in `assets/css/style.css` and apply
site-wide.

## Running locally

No build step required — just serve the folder:

```bash
python3 -m http.server 8000
# or: npx serve .
```

Then open `http://localhost:8000`.

## Before going live

Update the placeholders in `assets/img` links and in the page templates:

- **Support contact details** — `WHATSAPP_NUMBER` and `SUPPORT_EMAIL` are set as
  placeholders wherever the site was generated from `scripts/build_pages.py`
  (search the HTML for `447000000000` / `support@strong8k.com.co` and replace,
  or regenerate from the script with real values).
- **Contact form** — works client-side (shows a success state) but isn't wired
  to a backend/email service yet. Point the `<form>` at an endpoint (e.g. a
  serverless function, Formspree, or your own PHP/Node handler) before launch.
- **Legal pages** — Privacy Policy / Terms / Refund Policy footer links are
  placeholders (`#`) — add real pages when ready.

## Regenerating the pages

The six HTML pages are generated from `scripts/build_pages.py` (a small Python
templating script — no external dependencies) so header/footer/content stay
consistent across all pages. To make a content change, edit
`scripts/site_components.py` / `scripts/build_pages.py` and re-run:

```bash
python3 scripts/build_pages.py
```

This regenerates all six `.html` files in place. Editing the generated HTML
files directly also works fine for small tweaks — the generator is just there
to keep six long, structurally-similar pages in sync.
