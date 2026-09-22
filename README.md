# Will-Oats Tree

- `/` — the 3D rainbow willow (12 zones, chime physics). `index.html`, three.js from CDN.
- `/map` — MAP: mind map of every online connect point in the Will-Oats Universe. `map.html` + `tree-data.js`.
  To add a link, add a leaf under its branch in `tree-data.js`. `CHECK LIVE` pings every leaf.

Static, no build step. `vercel.json` has `cleanUrls` so `/map` serves `map.html`. Push to `main` deploys to will-oats-tree.vercel.app.

Versions: tree v3.3 · map v0.1.1
