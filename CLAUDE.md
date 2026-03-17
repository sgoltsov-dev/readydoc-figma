# CLAUDE.md

## Development

Figma plugin — no build step, no package manager. Files load directly in Figma Desktop.

1. Open Figma Desktop
2. **Plugins → Development → Import plugin from manifest...** → select `manifest.json`
3. Edit `code.js` or `ui.html`, then re-run from **Plugins → Development → Component Readme Generator**

## Critical: ES5 only (Figma sandbox constraint)

**Never use:** `?.` `??` `=>` template literals `` ` ``

**Always use:** `function(){}`, ternary `x ? x : y`, `&&` guard, `"Hello " + name`

## Agents

Use project agents for specialized work:

- `@figma-sandbox-agent` — changes to `code.js` (Figma API, frame building, message handler)
- `@ui-agent` — changes to `ui.html` (CSS, DOM, LLM calls, provider logic)
- `@skill-fetcher-agent` — design/UX guidance fetched live from skills.sh
