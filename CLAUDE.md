# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # dev server with Turbopack
pnpm build        # next build → docs/ + touch docs/.nojekyll + lint
pnpm lint         # prettier --write . && eslint --fix src
```

No test suite.

## Architecture

Next.js 16 static export site. Output goes to `docs/` (GitHub Pages). No server runtime — all data fetching either happens at build time (server components) or client-side.

**Routing:** Each tool lives at `src/app/<tool-name>/page.tsx`. Sub-routes within a tool get their own `TableOfContentsPage` with auto-discovered links.

**Auto-navigation:** `TableOfContents` calls `getDirectories(import.meta.url)` which uses `fs.readdirSync` on the directory of the calling file to list subdirectories at build time. Adding a new subdirectory automatically adds it to the nav — no manual registration.

**Page shell:** Wrap every page with `<Page title="...">`. This adds breadcrumbs (auto-generated from URL path) and an `<h1>`.

**Styling:** PicoCSS classless green theme — no class names needed on semantic HTML. CSS modules for component-specific overrides. No Tailwind.

**State:** Jotai atoms. Use `atomWithStorage` for anything that should survive page reload.

**Client vs server:** Pages that use browser APIs, hooks, or Jotai must be `'use client'`. Pure display pages with only static data can be server components.

**Adding a new tool:**

1. Create `src/app/<tool-name>/page.tsx`
2. Use `<Page title="...">` as wrapper
3. It auto-appears in parent directory's `TableOfContents`
