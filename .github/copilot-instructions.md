<!-- GitHub Copilot instructions for AI coding agents working on this repo -->
# ZOON CORP — AI Assistant Guidance

This repository is a small, production-ready static website (vanilla HTML/CSS/JS). The guidance below highlights project structure, conventions, integration points, and concrete examples to help an AI coding agent become productive quickly.

- **Big picture**: This is a purely static site (no build tools). Pages are standalone HTML files in the repo root (`index.html`, `about.html`, `services.html`, `contact.html`, etc.). Styling lives in `assets/css/style.css` and behavior in `assets/js/main.js`.

- **Key directories/files**:
  - `assets/css/style.css` — single source of truth for theme variables (edit `:root { ... }` to change colors/typography).
  - `assets/js/main.js` — page interaction patterns (mobile menu, IntersectionObserver animations, form UI handling, seasonal image mapping).
  - `components/header.html`, `components/footer.html` — header/footer fragments used verbatim by pages; these are static HTML snippets, not templates.
  - `logo/` — brand assets referenced with absolute paths (e.g. `/logo/zoon-logo.svg`).

- **Project constraints & assumptions**:
  - No package.json, no bundler, no server-side code — changes are made directly to HTML/CSS/JS files and deployed as static assets.
  - Paths in HTML use absolute-root paths (leading `/`). When testing locally, serve from repository root (see Quick Start below) so absolute paths resolve correctly.

- **Important conventions (do not change without reason)**:
  - Use the `.wrap` container for page width (defined in `style.css`).
  - Reuse component class names: `.btn`, `.card`, `.section-title`, `.lead`, `.page-<name>` (e.g. `page-contact`) for consistent styling.
  - Header/navigation: `nav` element has `id="main-nav"` and the mobile toggle button has class `mobile-menu-toggle` and uses `aria-expanded` (boolean string). JS expects these exact selectors.
    - Example (from `assets/js/main.js`): toggle checks `mobileMenuToggle.getAttribute('aria-expanded')` and toggles `nav.classList.toggle('open')`.
  - Form handling: contact form posts to Formspree. Example `contact.html` uses `action="https://formspree.io/f/mldqlwog"`. The JS provides a UI lock only — do not assume server response handling beyond that.
  - Accessibility: follow existing ARIA usage (mobile menu `aria-controls`, `aria-expanded`, `role="navigation"`) and preserve `sr-only` helper class behavior.

- **Patterns and examples to reference**:
  - Edit theme colors by updating `:root` variables in `assets/css/style.css` (e.g. `--primary`, `--tan`).
  - To alter mobile menu behavior, update `assets/js/main.js` where it selects `.mobile-menu-toggle` and `#main-nav`.
  - IntersectionObserver patterns: animated elements use classes like `.fade-in`, `.slide-in-left`, `.service-card`; JS sets `style.opacity` and `animation` when observed.
  - Seasonal/hero images: `main.js` maps seasons to `/assets/img/hero-*.jpg` — add images with those names or update the mapping in `applySeasonalTheme()`.

- **Developer workflows**:
  - Quick local preview (serve from repo root so absolute paths work):
    - `python3 -m http.server 8000` then open `http://localhost:8000`
    - or `npx http-server` (or `npm i -g http-server`) and open the printed URL.
  - No build step required — editing files and pushing is the deploy flow. Cloudflare Pages or Vercel recommended (set build preset to "None" for Cloudflare Pages).
  - Performance checks: run Lighthouse locally. Form testing: submit test messages to Formspree and confirm delivery.

- **What to avoid**:
  - Don't introduce frameworks or bundlers without explicit agreement; the site is intentionally frameworkless and small.
  - Avoid changing selectors used by `main.js` (IDs/classes listed above) — changes must be synced across HTML, CSS and JS.
  - Do not change absolute path conventions unless you update all references and the local preview instructions.

- **When adding features**:
  - Prefer small, isolated changes: update a page HTML, corresponding styles in `style.css`, and any JS in `main.js` (keep code vanilla, minimal and guarded — follow existing try/catch and guard selectors patterns).
  - Add new images under `assets/img/` and reference them with absolute paths (e.g. `/assets/img/new-hero.jpg`).
  - Update `sitemap.xml` and canonical links when adding/removing pages.

- **Files to inspect for examples**:
  - `contact.html` — canonical, form + Formspree usage, header/footer in-page usage
  - `components/header.html` — canonical header structure (mobile toggle, `main-nav`)
  - `assets/js/main.js` — interaction guard clauses, observers, seasonal mapping
  - `assets/css/style.css` — design tokens in `:root`, responsive breakpoints, focus styles

If any section is unclear or you'd like more examples (e.g., common copy edits, image size guidance, or a checklist for updating the hero), tell me which area to expand and I'll update this file.
