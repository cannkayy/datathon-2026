# N.B AI — Datathon 2026

Interactive site built from Figma: Report, Dashboard, and About (Team Bad Bunnies). The dark boxes are placeholders for **Tableau** (or other) visualizations.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Use the header to switch between **Report**, **Dashboard**, and **about**.

## Embedding Tableau

Each black box is a `VizPlaceholder` in `src/components/VizPlaceholder.jsx`. To embed Tableau:

1. Publish the view in Tableau and copy the **embed code** (iframe).
2. In the page component (e.g. `Report.jsx`, `Dashboard.jsx`, `About.jsx`), pass the iframe as the `embed` prop:

```jsx
<VizPlaceholder
  embed={
    <iframe
      src="https://your-tableau-server/views/..."
      width="100%"
      height="100%"
      allowFullScreen
    />
  }
/>
```

The placeholder already uses `overflow: hidden` and full width/height so the iframe fills the box.

## Project structure

- `src/App.jsx` — Router and layout
- `src/components/Header.jsx` — Logo + Report / Dashboard / about nav
- `src/components/VizPlaceholder.jsx` — Reusable container for Tableau (or other) embeds
- `src/pages/Report.jsx` — Datathon 2026, 3 sections with title + text + 3 boxes each
- `src/pages/Dashboard.jsx` — Grid of 7 visualization boxes
- `src/pages/About.jsx` — Team Bad Bunnies, 4 profile cards
