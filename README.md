# Sofomeutex Global Wholesale & Import

Institutional import/export showcase site (Double A Paper, Argentine Popcorn, European
Used Apparel, Industrial Plaster, and Home Refrigeration & Appliances). Built with
React 19 + Vite 6 + Tailwind 4, served as a static site behind Nginx in production.

---

## 1. Local development

```bash
npm install
npm run dev
```

Open the printed local URL (defaults to `http://localhost:3000`).

Type-check and production build:

```bash
npm run lint    # tsc --noEmit
npm run build   # outputs to ./dist
npm run preview # serve the production build locally on :3000
```

---

## 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Sofomeutex site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

`node_modules`, `dist`, and any `.env*` files are already excluded via `.gitignore`.

---

## 3. Run with Docker (locally, to sanity-check before deploying)

The project ships with a multi-stage `Dockerfile`:
1. **Builder stage** — Node 20 Alpine installs deps and runs `npm run build`.
2. **Production stage** — the static `dist/` output is served by Nginx (`nginx.conf`
   includes gzip, long-term caching for hashed assets, and an SPA fallback to
   `index.html`).

```bash
# Build and run with plain Docker
docker build -t sofomeutex-web .
docker run --rm -p 3000:80 sofomeutex-web
# -> open http://localhost:3000

# Or with docker-compose
docker compose up --build
# -> open http://localhost:3000
```

There are no required environment variables — this is a fully static site.

---

## 4. Deploy on Coolify

Coolify can build straight from this repo. Two supported approaches:

### Option A — Dockerfile deployment (recommended, simplest)
1. In Coolify: **New Resource -> Application -> Public/Private Git Repository**.
2. Point it at your GitHub repo and branch.
3. Build Pack: choose **Dockerfile** (Coolify will auto-detect the `Dockerfile` at
   the repo root).
4. Port: this app listens on **port 3000** inside the container (matches
   Coolify's default "Ports Exposes" value, so you usually don't need to touch
   it). If your app's port setting was left at something else, or you changed
   the default previously, set **Ports Exposes = 3000** in the app's General
   settings.
5. Deploy. Coolify builds the image, runs the container, and wires up your domain
   + HTTPS through its built-in proxy automatically.

> **Troubleshooting: "Healthcheck unhealthy — Connection refused"**
> This means Coolify's healthcheck is probing a different port than the one
> Nginx is listening on inside the container. This project listens on **3000**
> (see `nginx.conf`). In the app's Coolify settings, make sure **Ports
> Exposes** is set to `3000`. If you'd rather run Nginx on port 80 instead,
> change `listen 3000;` in `nginx.conf`, `EXPOSE 3000` and the `HEALTHCHECK`
> line in the `Dockerfile` to `80`, and set Coolify's Ports Exposes to `80` to
> match — the two must always agree.

### Option B — Docker Compose deployment
1. In Coolify: **New Resource -> Application -> Docker Compose**.
2. Point it at the repo; Coolify will read `docker-compose.yml`.
3. Note: Coolify manages its own reverse proxy/port routing, so if you use this
   route you may need to remove the fixed `ports: ["3000:3000"]` mapping in
   `docker-compose.yml` and instead let Coolify assign/proxy the port (Coolify's
   UI will guide you -- expose port `3000` from the `web` service).
4. Deploy.

No secrets or environment variables are needed for either option since the app
is a fully static bundle with no backend/API calls.

---

## 5. Project structure

```
├── Dockerfile               # Multi-stage build (Node build -> Nginx serve)
├── docker-compose.yml       # Local/Compose-based deployment
├── nginx.conf                # SPA routing, gzip, caching, security headers
├── .dockerignore
├── .gitignore
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
├── public/assets/images/    # Static product photos served as-is
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── types.ts
    ├── i18n/                # EN/FR translations
    ├── context/             # Language context
    ├── data/importData.ts   # All product, hero, shipping-lane & client data
    ├── utils/                # GSAP animation helpers
    ├── components/           # Pages (Home, Supply, Logistics, About, etc.)
    └── assets/images/        # Source images (also copied into /public)
```

---

## 6. Updating content later

All product data -- names, specs, images, hero slides, shipping lanes, client
testimonials -- lives in `src/data/importData.ts` in both English and French.
Product photos live in `public/assets/images/` (and are mirrored in
`src/assets/images/` for reference); reference them as `/assets/images/<file>`
in `importData.ts`.
