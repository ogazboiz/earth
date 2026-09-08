# Earth

Landing page for Earth — a global import/export and natural-resource trading business spanning agriculture, energy, minerals, metals, forestry and raw materials.

## Stack

- React 19 + TypeScript
- TanStack Start (SSR, file-based routing) + TanStack Query
- Vite 8 + Nitro
- Tailwind CSS v4 + shadcn/ui + Motion

## Development

```sh
bun install
bun run dev        # http://localhost:8080
```

## Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `bun run dev`     | Start the dev server           |
| `bun run build`   | Production build (`dist/`)     |
| `bun run preview` | Preview the production build   |
| `bun run lint`    | ESLint                         |
| `bun run format`  | Prettier                       |

## Structure

```
src/
  routes/          file-based routes (__root.tsx is the app shell)
  components/earth landing-page sections
  components/ui    shadcn/ui primitives
  assets/          imagery
  lib/             utilities and SSR error handling
```
