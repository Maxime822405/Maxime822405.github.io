# CLAUDE.md

This file provides guidance to AI assistants working with this repository.

## Project Overview

This is a **single-file static web application** — a Social Media Analytics Dashboard for tracking Instagram and Facebook post performance. It is deployed via GitHub Pages at `https://maxime822405.github.io`.

The entire application lives in one file: `Dashboard.html`. There is no build step, no package manager, and no framework.

## Repository Structure

```
Maxime822405.github.io/
├── Dashboard.html    # The complete application (HTML + CSS + JS, ~40 KB)
├── README.md         # French-language user documentation
└── LICENSE           # MIT License
```

## Tech Stack

All dependencies are loaded from CDN — nothing is installed locally.

| Dependency     | Version | CDN Source                                |
|----------------|---------|-------------------------------------------|
| Tailwind CSS   | 2.2.19  | cdn.jsdelivr.net/npm/tailwindcss          |
| Font Awesome   | 6.5.2   | cdnjs.cloudflare.com                      |
| Chart.js       | 4.4.3   | cdn.jsdelivr.net/npm/chart.js             |
| Inter font     | variable | cdn.jsdelivr.net/npm/@fontsource/inter    |

## Architecture of Dashboard.html

The file is structured in three main sections inside a single `<html>` document:

1. **`<head>`** — Meta tags, CDN imports, and a large `<style>` block with:
   - Dark mode overrides (via `body.dark` class)
   - Custom scrollbar styles
   - `fadeInX` keyframe animation
   - Focus/hover states for editable table cells

2. **`<body>`** — Pure HTML markup divided into:
   - Top navbar (date/time, theme toggle, Airtable sync button)
   - KPI cards row (reach, engagements, engagement rate, post count)
   - Charts section (Chart.js doughnut + line chart)
   - Predictive analytics row
   - Posts data table with inline editing
   - Modals (add post form, Airtable config form)

3. **`<script>`** — Vanilla JavaScript containing:
   - In-memory data store: `postsDB` array with demo data
   - CRUD functions: `renderPostsTable()`, `openEditRow()`, `saveEditRow()`, `deletePost()`
   - KPI aggregation: `updateKPIs()`
   - Chart rendering: `updateCharts()` using Chart.js
   - Airtable integration: async fetch-based API calls
   - Theme persistence via `localStorage`
   - Date/time ticker via `setInterval`

## Key JavaScript Conventions

- **No framework** — pure vanilla JS with DOM manipulation
- **Global state** — `postsDB` is a module-level array; all functions read/write it directly
- **Re-render pattern** — after any mutation, call `renderPostsTable()`, `updateKPIs()`, and `updateCharts()` to sync the UI
- **Async/await** — used for all Airtable API calls; errors are caught and shown via `alert()`
- **LocalStorage keys**:
  - `theme` — stores `"dark"` or `"light"`
  - `airtableToken`, `airtableBaseId`, `airtableTableName` — Airtable credentials
- **Inline HTML generation** — table rows are built via template literals and assigned to `innerHTML`
- **Event binding** — mostly via `onclick` attributes in HTML markup, not `addEventListener`

## CSS Conventions

- **Tailwind utility classes** are the primary styling mechanism
- **Dark mode** is applied by toggling the `dark` class on `<body>`; dark overrides live in the `<style>` block using `body.dark selector` selectors
- **Responsive** — uses Tailwind's `md:` breakpoint prefix for larger screens
- Custom styles that can't be expressed with Tailwind utilities are written in the `<style>` block

## Data Model

Each post in `postsDB` is a plain object with these fields:

```js
{
  id: Number,          // auto-incremented
  date: String,        // "YYYY-MM-DD"
  platform: String,    // "Instagram" | "Facebook"
  type: String,        // "Image" | "Video" | "Reel" | "Story"
  title: String,       // post title or caption
  reach: Number,
  likes: Number,
  comments: Number,
  shares: Number,
  views: Number,
  engagementRate: Number,  // percentage, e.g. 4.2
  url: String          // post URL
}
```

## Airtable Integration

Three integration modes are documented:

1. **Direct API** — token stored in `localStorage`, calls made directly from the browser (CORS must be enabled)
2. **Proxy mode** — token stored server-side (Pipedream / n8n.io as proxy)
3. **Webhook mode** — via Zapier (recommended for production)

Airtable credentials are never committed to the repository; they are entered by the user at runtime via the config modal.

## Development Workflow

There is no build system. To work on the project:

1. Open `Dashboard.html` directly in a browser, or serve it locally:
   ```bash
   python3 -m http.server 8080
   # then visit http://localhost:8080/Dashboard.html
   ```
2. Edit `Dashboard.html` in any text editor
3. Refresh the browser to see changes

## Deployment

This repository is named `Maxime822405.github.io`, which means GitHub Pages serves it automatically from the `master` branch at:

```
https://maxime822405.github.io/Dashboard.html
```

No CI/CD pipeline or build step is required — just push to `master`.

## Editing Guidelines for AI Assistants

- **Never split the single file** into multiple files unless the user explicitly requests a refactor. The single-file design is intentional.
- **Always keep all three sections in sync**: if you add a new data field, update the table header, the `renderPostsTable()` function, the add-post modal form, and the Airtable sync logic.
- **After any JS mutation to `postsDB`**, ensure `renderPostsTable()`, `updateKPIs()`, and `updateCharts()` are called.
- **Tailwind first** — use Tailwind utility classes before adding custom CSS. Only add to the `<style>` block if Tailwind cannot express the style.
- **Preserve the dark mode pattern** — any new UI elements need both a default (light) and a `body.dark` override if colors differ.
- **No npm packages** — all new dependencies must be added as CDN `<script>` or `<link>` tags in `<head>`.
- **Language** — the UI is in French; keep any new user-facing text in French to match the existing interface.
- **README.md** is French-language user documentation; update it if you add or change features visible to the end user.
