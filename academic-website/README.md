# Academic Website

A personal academic site built with [Next.js](https://nextjs.org) (Pages Router), TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js 18+
- npm / yarn / pnpm

## Quick Start

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Pages hot-reload as you edit.

### Run with nodemon (auto-restart on config/env changes)

If you change `next.config.ts` or `.env` files, the dev server does not restart automatically. Use:

```bash
npm run dev:watch
```

Nodemon watches `next.config.ts`, `.env`, `.env.local`, and `.env.*`; when they change, it restarts `npm run dev`. Page code is still hot-reloaded by Next.js.

## Scripts

| Command           | Description                                                |
|-------------------|------------------------------------------------------------|
| `npm run dev`     | Start dev server with Turbopack (hot reload)               |
| `npm run dev:watch` | Same as `dev`, with nodemon restart on config/env changes |
| `npm run build`   | Build for production                                       |
| `npm run start`   | Run production server (run `build` first)                  |
| `npm run lint`    | Run ESLint                                                 |

## Project structure

```
academic-website/
├── public/           # Static assets (images, PDFs, etc.)
├── src/
│   ├── components/   # Reusable UI (e.g. Layout)
│   ├── data/        # Site config (siteConfig.ts)
│   ├── pages/       # Routes and API routes
│   └── styles/      # Global CSS
├── next.config.ts
├── package.json
└── README.md
```

Main pages: Home (`/`), Research (`/research`), Publications (`/publications`), Contact (`/contact`). CV links directly to PDF. Edit `src/data/siteConfig.ts` to change site content and metadata.

## Deploy

- **Vercel**: Connect the repo to [Vercel](https://vercel.com); default settings work.
- **Static export**: If you need a static site, configure `output: 'export'` in `next.config.ts` and run `npm run build`; output will be in `out/`.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
