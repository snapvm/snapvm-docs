# SnapVM Documentation

Documentation site for `docs.snapvm.dev`.

This site is built with Astro and Starlight, then deployed as static output on Cloudflare Pages.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://127.0.0.1:4321`.

## Checks

```bash
pnpm check
pnpm build
```

`pnpm build` writes static files to `dist`.

## Cloudflare Pages

Use these Pages settings:

| Setting                | Value              |
| ---------------------- | ------------------ |
| Framework preset       | Astro              |
| Build command          | `pnpm build`       |
| Build output directory | `dist`             |
| Root directory         | Repository root    |
| Node.js version        | `24.11.0` or newer |

`public/_redirects` preserves old `/jp/*` links by redirecting them to `/ja/*`.
`public/_headers` applies security headers to the static site.

## Content

- English: `src/content/docs`
- Japanese: `src/content/docs/ja`
- Sidebar and language config: `astro.config.mjs`
- Theme overrides: `src/styles/custom.css`
