---
name: site-design
description: Design work on kristoferhallen.com (Hugo blog) — critique, polish, audit, or show options for any visual change to layout, typography, colour, home page, post page or components. Use whenever the site's look or a page's structure changes, even for small CSS tweaks.
---

# Site design for kristoferhallen.com

Kristofer is not a designer and says so. This skill turns design into two kinds
of work: **checks** that follow from written rules (no taste needed), and
**choices** that Kristofer makes by looking at two or three rendered options.
Never ask him to specify colours, sizes or fonts in words.

## Always read first

1. `PRODUCT.md` — who the site serves and what they need to do.
2. `DESIGN.md` — this site's decisions, colour roles, type scale, components,
   and the current gaps (section 10).
3. `references/reading-rules.md` — the general rules behind DESIGN.md. Read it
   for critique and audit, or when DESIGN.md does not cover the case.

Before changing anything, name the PRODUCT.md goal the change serves. If none
fits, ask whether the change is worth making.

## Verbs

Kristofer may ask in plain language; map the request to one of these.

- **audit** — run the checks (see Verify) on the pages in question and report
  failures against DESIGN.md. No edits. Report as a short table: rule, page,
  measured value, target.
- **critique** — audit plus judgement: walk the page as each PRODUCT.md reader
  (a technical leader on a phone from LinkedIn; an organiser evaluating
  Kristofer on the home page) and say what helps or gets in the way. Use the
  self-checks in reading-rules.md (frame vs column, "could this be anyone's
  blog?"). Rank findings by how much the reader would notice. No edits.
- **polish** — fix what the rules decide, within the existing design: spacing,
  type sizes, contrast, weights, states. No change of character, no new
  colours or fonts. Verify after.
- **options** — for anything marked **[decide]** in DESIGN.md, or any change to
  the site's character: render two or three clearly different variants, show
  them side by side, let Kristofer pick, then implement the pick and record it
  in DESIGN.md (remove the [decide] tag, write the decision and the date).
- **build** — a new page or component (e.g. the home introduction, the author
  note, a talks page): sketch it against DESIGN.md section 4, then go through
  options if the look is not already decided.

## Where changes go (Hugo)

- Styles: `assets/sass/_custom.scss` (loaded after the theme). Theme variables
  live in `themes/hugo-blog-awesome/assets/sass/main.scss` for reference only.
- Templates: copy the theme file into `layouts/` with the same path, then edit
  the copy. Existing overrides: `layouts/index.html`, `layouts/404.html`,
  `layouts/_default/baseof.html`, `layouts/partials/{head,bio}.html`.
- Site settings (author intro, tagline, colour mode default, menu):
  `hugo.toml`.
- Static files (self-hosted fonts, icons): `static/` or `assets/`.
- **Never edit `themes/`.** It is a git submodule pinned to upstream.
- Colour mode is driven by a class on `<html>` (`light`/`dark`) and
  `data-theme` on `<body>`, plus `@media (prefers-color-scheme: dark)` rules
  for `html:not(.light)`. Style both paths when changing colours.

## Preview

Start the local server (it reloads on save):

```bash
hugo server --port 1313 --disableFastRender
```

Run it in the background, then open `http://localhost:1313` in the built-in
browser pane. Pages to check by default: `/` (home), one long post with
headings and links (e.g. `/posts/technicalleadership2/`), `/posts/`,
`/pages/about/`.

Note: posts that exist locally but are not committed also show up in the
local build. Don't treat them as published.

## Verify

Every change ends with these checks on the rendered pages:

1. For each page, at **375 px** and **1280 px**, in **light** and **dark**: run
   `scripts/measure.js`. It reports body size, line height, measure, every text
   style below its contrast floor, faded text, faux bold, `h1` count and
   third-party hosts. The fast way to cover the whole matrix in one call:
   - serve the script once in the background (from the skill's `scripts/`
     folder): a small Python `http.server` on port 1314 that sends
     `Access-Control-Allow-Origin: *` and `Cache-Control: no-store`;
   - in the browser's JavaScript tool, on any page of the local site, fetch
     `http://localhost:1314/measure.js`, then for each width and page create
     an off-screen `<iframe>` of that width, load the page, and for each mode
     set `iframe.contentWindow.__designMode` and
     `await iframe.contentWindow.eval(src)`.
   The script disables CSS transitions while measuring (the theme animates
   colour changes) and does not rely on `requestAnimationFrame`, which never
   fires while the browser pane is hidden. Ignore `localhost:1314` in the
   third-party list.
2. Compare with the targets in DESIGN.md sections 2–3. Anything outside them
   is either fixed or explicitly accepted by Kristofer and written into
   DESIGN.md.
3. Take one screenshot per changed page (mobile, his likely reading mode) and
   look at it: the numbers can pass while the page still looks wrong.
4. `hugo` (a full build) must finish without errors or warnings.
5. Reset the viewport to desktop when done.

Report what was checked and the results, including what still fails.

## Options workflow

To show alternatives without committing to code:
1. Write each variant as a small CSS block (and, if needed, markup changes) in
   the scratchpad.
2. In the preview, inject one variant at a time with a `<style>` tag through
   the browser's JavaScript tool, take a screenshot at mobile width, remove it,
   and repeat. Same page, same scroll position for every variant.
3. Show the screenshots together with a one-line description each. Describe
   differences in plain words ("warmer paper background, darker text"), not in
   hex codes.
4. Make each variant clearly different; three near-identical options are not a
   choice. Every variant must pass the checks.
5. After the pick: implement it in the real files, verify, and record the
   decision in DESIGN.md.

## Don't

- Don't commit or deploy without Kristofer asking; pushing to `main` deploys
  the live site.
- Don't add tracking, third-party scripts, or fonts from external hosts.
- Don't use the refuse list patterns in reading-rules.md.
- Don't change post content (Markdown) as part of a design change without
  saying so; content fixes (like `#` → `##` headings) are a separate,
  reviewable change.
