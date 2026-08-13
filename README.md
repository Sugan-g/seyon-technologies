# Seyon Technologies — Website

React + Vite frontend, Express + MongoDB backend (MERN-style). Plain CSS,
no UI/animation libraries.

## Structure

```
seyon-technologies/
├── frontend/          React + Vite + React Router
│   ├── public/
│   │   ├── logo.png                    # favicon copy of the logo
│   │   └── seyon-services-flyer.docx   # Portfolio page download
│   └── src/
│       ├── components/   Header, Footer, Logo, HeroCarousel, PipelineCard,
│       │                 CoreValues, BuildGrowSecure
│       ├── pages/        Home, About, Services, Portfolio, Contact, NotFound
│       ├── data/         services.js (single source of truth for the 6 services)
│       └── styles/       index.css (all styling, brand palette as CSS variables)
└── backend/           Express API
    ├── server.js
    ├── routes/contact.js
    └── models/Contact.js
```

## Run locally

### 1. Backend

```bash
cd backend
cp .env.example .env      # adjust MONGO_URI if needed
npm install
npm run dev                # http://localhost:5000
```

If MongoDB isn't running, the API still responds successfully to contact
form submissions — it just logs them instead of persisting, so the frontend
flow is never blocked in local dev.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev                # http://localhost:5173
```

Vite's dev server proxies `/api/*` calls to `http://localhost:5000` (see
`vite.config.js`), so the Contact form works against your local backend
without extra setup.

### 3. Production build

```bash
cd frontend
npm run build               # outputs frontend/dist
```

Serve `frontend/dist` from any static host, and point it at your deployed
backend by updating the contact form's fetch URL or your hosting proxy
rules.

## Editing content

- **Services** (names/descriptions used on Home, Services, and Portfolio):
  `frontend/src/data/services.js`
- **Core Values**: `frontend/src/components/CoreValues.jsx`
- **Hero carousel slides**: `frontend/src/components/HeroCarousel.jsx`
- **Contact details / hours / map**: `frontend/src/pages/Contact.jsx` —
  replace the Google Maps `iframe src` with your own embed URL.
- **Logo**: replace `frontend/src/assets/logo.png` (and `frontend/public/logo.png`
  for the favicon) — it's used everywhere via the single `Logo` component.
- **Brand colors**: CSS variables at the top of `frontend/src/styles/index.css`.

## Routing

Five routes, all client-side via React Router: `/`, `/about`, `/services`,
`/portfolio`, `/contact`. Unknown paths render a lightweight 404.

## Notes

- No console warnings/errors by design — every interactive element has
  accessible labels and keyboard focus states.
- `prefers-reduced-motion` is respected; there are no heavy animations, 3D,
  or video assets anywhere on the site.
