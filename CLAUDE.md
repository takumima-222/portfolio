# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Run locally: `npx serve .` (or open `index.html` directly in a browser)
- Run tests: `npm test` (runs `node --test tests/*.test.js`, Node's built-in test runner)
- Run a single test file: `node --test tests/script.test.js`

There is no build step, bundler, or linter configured — this is plain static HTML/CSS/JS with no dependencies.

## Architecture

Three flat files make up the entire site:

- `index.html` — single-page structure (About / Projects / Contact sections)
- `style.css` — all styling
- `script.js` — all behavior, and dual-purpose as both browser script and CommonJS test target:
  - Guards `document`/`module` access (`typeof document !== "undefined"`, `typeof module !== "undefined"`) so the same file runs in the browser (via `<script src="script.js">`) and under Node's test runner (via `require("../script.js")`).
  - `isValidEmail` is the only function exported (`module.exports`) for testing; other functions (`initNavToggle`, `initContactForm`) are DOM-only and wired up on `DOMContentLoaded`.

`tests/script.test.js` uses Node's native `node:test` + `node:assert/strict` — no external test framework.
