# Medmind Technology — Website Mockup

Static marketing site mockup for Medmind Technology Limited (醫念科技).

## Structure

```
medmind-web/
├── index.html              # Home page
├── about.html               # About page
├── solutions.html           # Products / solutions page
├── css/
│   ├── main.css             # Design tokens, resets, base styles
│   ├── navbar.css           # Navbar / mega-menu styles
│   ├── hero.css             # Hero section styles
│   ├── sections.css         # Shared section/card/grid styles
│   └── footer.css           # Footer + responsive breakpoints
├── js/
│   └── include.js           # Loads shared navbar/footer partials
├── components/
│   ├── navbar.html           # Shared navbar markup
│   └── footer.html           # Shared footer markup
└── README.md
```

## Running locally

Pages load the navbar/footer via `fetch()`, so opening `index.html` directly with a
`file://` URL will fail (browsers block `fetch()` under the file protocol). Serve the
folder with a local server instead:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Bug fixed

The original navbar loader used a page-relative `fetch('navbar.html')` call with no
error handling. This broke on nested pages/deployments and failed silently. It now
uses a root-relative path (`/components/navbar.html`), waits for `DOMContentLoaded`,
and logs/falls back gracefully on failure. See `js/include.js`.
