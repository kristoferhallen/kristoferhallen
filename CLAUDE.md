# kristoferhallen.com

Kristofer Hallén's blog: essays on software development, technical
leadership, engineering strategy and CI/CD. Hugo site, written in English;
Kristofer writes to Claude in Swedish.

- **Who it is for and why:** `PRODUCT.md`. **How it looks:** `DESIGN.md`.
  Read both before any visual change, and use the `site-design` skill.
- **Open work:** `docs/todo.md`. Read it when asked what is left; tick off or
  remove items when done.
- **Workflows:** new post or reviewing a draft, use the `new-post` skill;
  SEO or traffic questions, use the user-level `seo-review` skill.

## Publishing

- A push to `main` publishes (GitHub Actions: `hugo --minify`, FTP upload of
  `public/`). Commit and push only when Kristofer asks. `public/` is
  gitignored; the build happens in CI.
- **Stage files by name, never `git add -A`.** Unfinished posts often sit
  untracked in `content/posts/` with past dates; adding them would publish
  them. Check `git status` and ask if unsure.
- Check `git log HEAD..origin/main` before pushing; he sometimes commits on
  the GitHub web UI.
- The FTP deploy uploads but never deletes. Renamed or removed pages stay on
  the server until Kristofer deletes them at the host; add a 301 in
  `static/.htaccess` for every rename.
- `buildFuture` is off: a post with a future `date` is published by the
  first build after that date. He uses this to schedule series.
- Local preview: `.claude/launch.json` (Hugo on port 1313).

## Structure

- Posts: `content/posts/<slug>.md` (single files, not bundles). Front matter:
  `title`, `date`, `draft`, `tags`, optional `series: ["Name"]` and
  `description`. One `h1` per post (the title); section headings start at
  `##`.
- Series: taxonomy `series`; intro and description in
  `content/series/<slug>/_index.md`; overview at `/series/`.
- Pages: `content/pages/about.md`. The About page and bio say Ericsson until
  Kristofer starts at Saab in December 2026; ask before changing the role.
- Theme `themes/hugo-blog-awesome` (submodule): never edit it, override in
  `layouts/` and `assets/sass/_custom.scss`.
- Fonts: Source Serif 4 self-hosted in `static/fonts/source-serif-4/`, cut
  down with fontTools (weights 400–600, optical size 18) and cached for a
  year in `static/.htaccess`. A changed font file needs a new file name.
- Visits: GoatCounter fed from server logs (`scripts/filter_access_log.py`),
  no tracking script on the site.

## Writing style (for drafting help and reviews)

- Conversational but professional, direct, opinion-forward, first person.
- 400–2500 words. Opens with a hook or question, uses headings, ends with
  concrete guidance.
- Often cites books and research (Gene Kim, Martin Fowler, David Farley,
  Will Larson, Rumelt) and links to sources.
- Provocative titles now and then ("Death to the X!", "Management by
  Cookies").
- No tutorials or code; no personal stories outside professional life.
- Recurring ideas: ownership over process; deploy early and learn (value
  within three months); the 10x rule for changing tools; technical leadership
  as an invisible role; measurement (lead time, adoption, ROI); shared
  vocabulary; platform and CI/CD thinking; inspiration debt.

Kristofer writes the posts. Help with structure, clarity and facts; do not
rewrite his voice unless he asks.
