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
4. Port: Nginx listens on **both port 3000 and port 80** inside the container,
   specifically so it matches Coolify's default regardless of which one your
   app's "Ports Exposes" setting is locked to. You shouldn't need to change
   anything, but if the healthcheck still fails, see the troubleshooting note
   below.
5. Deploy. Coolify builds the image, runs the container, and wires up your domain
   + HTTPS through its built-in proxy automatically.

> **Troubleshooting: "Healthcheck unhealthy — Connection refused"**
> This project's healthcheck explicitly targets `127.0.0.1` (not `localhost`).
> That's intentional: on Alpine/musl-based images, `wget localhost` frequently
> resolves to the IPv6 address `::1` before the IPv4 `127.0.0.1`, and if Nginx
> isn't listening on IPv6 that connection is refused instantly — even though
> Nginx started up perfectly fine on IPv4. `nginx.conf` now listens on both
> `0.0.0.0` and `[::]` for ports 3000 and 80, and the healthcheck bypasses the
> ambiguity entirely by using the literal IP `127.0.0.1`. If you still hit
> this error after redeploying:
> 1. Open a shell into the running container from Coolify (or
>    `docker exec -it <container> sh`) and run
>    `cat /etc/nginx/conf.d/default.conf` to confirm your latest `nginx.conf`
>    actually made it into the image (rule out a stale build cache — try a
>    "force rebuild without cache" in Coolify).
> 2. From inside that same shell, run `wget -qO- http://127.0.0.1:3000/` — if
>    that succeeds but Coolify still reports unhealthy, the issue is in how
>    Coolify's own health check is configured (not the container), so check
>    the app's **Ports Exposes** field or simply toggle **Health Check off**
>    in Coolify's UI as a quick unblock.

### Option B — Docker Compose deployment
1. In Coolify: **New Resource -> Application -> Docker Compose**.
2. Point it at the repo; Coolify will read `docker-compose.yml`.
3. Note: Coolify manages its own reverse proxy/port routing, so if you use this
   route you may need to remove the fixed `ports` mapping in
   `docker-compose.yml` and instead let Coolify assign/proxy the port (Coolify's
   UI will guide you -- expose port `3000` or `80` from the `web` service,
   both work).
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
