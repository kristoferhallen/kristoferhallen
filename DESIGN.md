# DESIGN.md — kristoferhallen.com

How the site looks and why. Read PRODUCT.md first (who it serves), then this
file, before any visual change. Each rule is stated so it can be checked on the
rendered page.

Status: **draft, 2026-10-04.** Sections 1–9 describe the target. Section 10
records how the live site measures today and what does not meet the target yet.
Items marked **[decide]** need Kristofer's choice, ideally between two or three
rendered options.

---

## 1. Theme and atmosphere

Calm and bookish: a well-set essay collection. A reading face, generous space,
almost no colour, nothing that moves. The reading column is quiet; any
personality lives in the frame (site name, home page introduction, headings,
how quotes and the author note are set), never behind or inside the running
text.

The site belongs to one author writing for technical and product leaders. It
should not look like a product, a company or a theme demo.

## 2. Colour roles

Colours are named by role, never used as raw values in templates. Both modes
exist; the default follows the visitor's system setting.

| Role | Use | Light today | Dark today |
|---|---|---|---|
| `bg` | page background | `#ffffff` | `#131418` |
| `surface` | code blocks, inline code, table header | `#d8dbe2` | `#2d2d2d` |
| `text` | body text | `#434648` | `#babdc4` |
| `heading` | titles and headings | `#0d122b` | `#eaeaea` |
| `muted` | dates, excerpts, captions, tagline | `#6b7886` | `#767f87` |
| `link` | links in text | `#2a6db5` | `#6a9fd8` |
| `link-hover` | hovered link | `#1a5a9e` | `#5b8fc8` |
| `border` | rules between list items, blockquote bar | `#ececec` / `#c4c8cc` | `#1b1d25` / `#4a4d56` |

Rules:
- Every text role must reach **4.5:1** against `bg` in both modes (3:1 only for
  text ≥ 24 px, or ≥ 18.5 px bold). Measure it; do not judge by eye.
- **Muted text gets its own solid colour.** Never fade text with `opacity`; it
  silently drops below the contrast floor.
- One accent at most, used for links. No second colour for decoration.
- **[decide]** Character of the neutrals: today's cool blue-greys, or warmer
  paper-like neutrals (off-white background, warm dark grey text) that suit a
  bookish tone. Show both before choosing.

## 3. Typography

One family, a serif reading face, for everything except code.

| Role | Size | Line height | Weight | Notes |
|---|---|---|---|---|
| Body | 18 px desktop, 17 px phone | 1.55–1.6 | 400 | the most important decision on the site |
| Post title | 2em desktop, 1.75em phone | 1.2 | 600 | |
| Section heading (h2) | 1.35em | 1.3 | 600 | more space above than below |
| Sub-heading (h3) | 1.1em | 1.4 | 600 | |
| Metadata (date, tags) | 0.85em | 1.4 | 400 | italic allowed for the date |
| Home excerpt | 1em of body | body | 400 | `muted` colour, not smaller type |
| Code | 0.9em | 1.5 | 400 | monospace only for code |

Rules:
- **Measure 60–75 characters** for body text on desktop; never above 80.
- Only load the weights that are used (400, 400 italic, 600). Never request a
  weight that is not loaded; the browser fakes it.
- Bold and italic sparingly, never together. Underline only links.
- Paragraphs are separated by space, not by indents.
- Curly quotes, real dashes and ellipses in content.
- **[decide]** Keep Source Serif 4 or try another reading serif (for example
  Literata or Newsreader). Compare on a real post before changing.
- **Fonts are self-hosted**, not loaded from Google Fonts, so the site makes no
  third-party requests (see PRODUCT.md: no tracking).

## 4. Components

**Post page.** Title, date, then the body. No hero image, no share buttons, no
"related posts" grid. At the end: one short **author note**: who Kristofer is in
one sentence, a link to follow him on LinkedIn, and a link to the About page.
Same note on every post; it serves following and visible expertise at once.

**Home page.** Top: a short introduction that answers *who is this and why
listen*. Name, one line on what he does, his two or three areas, and one line of
proof (talks, Eiffel, publications). Then the list of recent posts: title,
excerpt, date, separated by thin rules. Ends with a link to all posts. **[decide]**
The layout of the introduction (centred block as today, or left-aligned like
the start of an essay); render options.

**Talks / About.** Evidence over titles: talks with event, year and a link to
video or slides, publications, Eiffel. A plain "how to invite me to speak" line
with contact. **[decide]** Keep this inside About or give talks their own page.

**Post list and tag pages.** Title and date per line, grouped by year.

**Navigation.** Site name (links home) and three or four text links. No icons
standing in for words.

**Blockquote.** Indented with a thin `border` bar, text in `text` colour,
italic optional. Not a coloured box.

**Code.** `surface` background, monospace, horizontal scroll inside the block,
never overflow the page.

**States.** Visible keyboard focus on every link (outline, not just colour).
Link underline stays visible in body text.

## 5. Layout and spacing

- One centred reading column. Width follows the measure rule: about
  `36em` of body text, which with 18 px body is ≈ 650 px.
- Side gutter at least 16 px on a phone (20 px preferred).
- Vertical rhythm from the body line height: paragraphs separated by one line
  of space; section headings get about two lines above and half a line below.
- The home introduction and the post list share the reading column width.

## 6. Depth and elevation

Flat. No shadows, no cards, no rounded panels. Separation comes from space and
thin rules only.

## 7. Do's and don'ts

**Do**
- Let the text carry the page; spend design effort on body text first.
- Make every choice checkable: contrast, measure, size.
- Keep one short author note at the end of posts.
- Keep pages fast and static: no client-side frameworks.

**Don't**
- Labels or kickers above headings, section numbers as decoration.
- Gradient text, glass or blur, coloured left borders on boxes, cards for
  content, cards inside cards.
- Monospace as a "technical" costume for headings or labels.
- Emoji or unicode glyphs as icons.
- Popups, newsletter prompts, share-button rows, "trending" lists.
- Faded text via `opacity`.
- Animations other than an instant theme change.

## 8. Responsive behaviour

- Phone (≤ 480 px) is the primary reading case: 17 px body, 16–20 px side
  gutters, title at 1.75em, nothing side by side.
- Tablet and desktop: the column stays at its measure; extra width becomes
  margin, never wider text.
- Images scale to the column width. Wide code blocks scroll inside themselves.
- Check every change at 375 px and at a desktop width, in light and dark mode.

## 9. Agent prompt guide

When changing the design of this site:
1. Read PRODUCT.md and this file. Name which PRODUCT.md goal the change serves.
2. Change only `layouts/` and `assets/sass/_custom.scss` (and `static/`); never
   `themes/`. Use the colour roles in section 2, not new hex values.
3. Build with `hugo` and check the result in a browser at 375 px and desktop,
   light and dark: contrast of every text role, body measure, sizes against
   section 3.
4. For anything marked **[decide]** or any change to the site's character,
   show two or three rendered options and let Kristofer choose. Record the
   choice here.

---

## 10. Current state (measured 2026-10-04)

Measured on the live site with the theme `hugo-blog-awesome` plus
`assets/sass/_custom.scss`. Post: `/posts/technicalleadership/`.

**What already fits**
- Source Serif 4 for body and headings; one family throughout.
- Body text contrast: 9.5:1 (light), 9.8:1 (dark). Headings well above.
- Phone measure ≈ 46 characters, 15 px side gutters.
- Flat design, no cards, no popups, no tracking script.

**Gaps against the target**

Status after the polish pass of 2026-10-04 (local, not yet deployed). Measured
on home, a long post, the post list, About and a tag page, at 375 px and
1280 px, light and dark: no contrast failures, no faded text, no faux bold.

| # | Gap | Was | Now |
|---|---|---|---|
| 1 | Default mode | dark for everyone | **fixed**: `auto`, follows the system |
| 2 | Body size | 16 px | **fixed**: 17 px phone, 18 px from 769 px |
| 3 | Line height | 1.85 | **fixed**: 1.6 |
| 4 | Desktop measure | ≈ 86 characters | **fixed**: ≈ 73 (column 34em); phone ≈ 43 |
| 5 | Muted text contrast | 3.1–4.5:1 via `opacity` | **fixed**: solid `muted` #5f6b78 (5.4:1) / #8a929a (5.8:1) |
| 6 | Faux bold | title, content headings and labels at 700/500 | **fixed**: 600 everywhere |
| 7 | Small type on home | excerpt 14 px, date 12.8 px | **fixed**: excerpt at body size, dates 0.85em |
| 8 | Link colours | two hover colours | **partly fixed**: one hover colour per mode; link colour outside posts still inherits text colour (theme) |
| 9 | Fonts from Google | `fonts.googleapis.com`, `fonts.gstatic.com` | open: self-host (needs the font files downloaded) |
| 10 | Section headings in posts | 14 of 42 posts use `#` (h1) | open: content fix, separate change |
| 11 | Home introduction | centred bio, no areas or proof | open: **build** + options |
| 12 | Author note after posts | none | open: **build** |
| 13 | Talks | a list inside About | open: **build**, [decide] own page or not |
| 14 | Home page has no h1 | author name is an h2 | open: make the name the page's h1 |
