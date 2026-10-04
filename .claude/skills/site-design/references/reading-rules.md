# Rules for reading sites

General design knowledge behind DESIGN.md, for judging any change to a site
people come to read. DESIGN.md wins where the two differ; it holds this site's
decisions. Sources are listed at the end.

## Body text decides the quality

Most of every page is body text, so tune it before anything else.

| Decision | Range | Notes |
|---|---|---|
| Size | 15–25 px; 16 px is the floor | serif reading faces usually want 17–19 px |
| Line height | 1.2–1.45 in print; 1.45–1.7 on screen for long serif lines | wider lines need more; light-on-dark needs a little more |
| Measure | 45–90 characters; 60–75 is the sweet spot for prose | the column width follows the measure, not the screen |
| Face | a professional reading face; one family is usually enough | a second family needs a role only it can do |

Paragraphs: space between them **or** a first-line indent, not both.

## Contrast is measured, not judged

- Text ≥ **4.5:1** against its background (WCAG AA). Large text (≥ 24 px, or
  ≥ 18.5 px bold) ≥ 3:1. 7:1 is AAA.
- The ratio uses relative luminance, so hue barely matters; it works for
  colour-blind readers and can be computed by a script (scripts/measure.js).
- Thresholds are not rounded: 4.49 fails.
- Faded text (`opacity`, semi-transparent colours) lowers contrast in ways that
  are easy to miss. Give muted text a solid colour and measure it.
- Light text on dark: slightly more line height, a touch more letter spacing,
  and one weight heavier if the face looks thin.

## Colour by role

Pick a colour by its job, not by taste (Radix's 12-step scales):

| Steps | Job |
|---|---|
| 1–2 | page and subtle surface backgrounds |
| 3–5 | component backgrounds: normal, hover, pressed |
| 6–8 | borders: subtle separators, controls, focus rings |
| 9–10 | solid accent and its hover |
| 11–12 | text: muted, then high contrast |

Each scale has a dark twin, so a design written in roles switches theme by
swapping values. A reading site needs few roles: background, surface, text,
heading, muted, link, border, focus.

## Reading surfaces: frame and column

- The reader came to understand something. An article must read as an
  article; wayfinding (where am I, where next) stays intact.
- **The frame carries personality, the column stays calm.** Masthead, site
  name, title and section openers, the setting of quotes and code may have
  character. The running text gets a reading face, real contrast and a real
  measure, with nothing performing behind it.
- Monospace is for code and small technical labels, never headings or body.
- Self-check: can a reader tell where they are and read comfortably? Cover the
  site name: could this be anyone's blog? Then the frame is too generic. Does
  the page read as an artefact before it reads as an article? Then the frame
  has leaked into the column.

## Verify on the rendered page

Checks run on the built page, not on intentions:
- contrast of every text style, both modes;
- body size, line height and measure at phone and desktop width;
- more space above a heading than below it;
- keyboard focus visible on every link; link underlines visible in body text;
- only loaded font weights are used (a missing weight is faked by the browser);
- one `h1` per page;
- no third-party requests the site did not decide on.

## Refuse unless the brief asks for it

These are what generated UI defaults to. Reaching for one without a reason
means no decision was made.
- A label or kicker above a heading (never), section numbers as decoration.
- Cards as the page structure; cards inside cards.
- Gradient text; glass and blur as decoration.
- A thick coloured left border on boxes, callouts or list items.
- Monospace as a "technical" costume.
- Emoji or unicode glyphs as icons.
- Hard offset shadows; a 1 px border plus a wide soft shadow.
- Sketch-style SVG illustrations; striped or grid backgrounds without reason.
- Light or dark chosen by category instead of by where and how people read.

## Micro-typography

Curly quotes; real dashes and ellipses; one space after a full stop; bold and
italic sparingly and never together; underline only links; all caps only for
short labels, with 5–12 % extra letter spacing.

## Sources

- Matthew Butterick, *Practical Typography*: "Typography in ten minutes" and
  "Summary of key rules" (practicaltypography.com).
- W3C WAI, *Understanding SC 1.4.3 Contrast (Minimum)*.
- Radix, *Colors: Understanding the scale* (radix-ui.com).
- Paul Bakaus, Impeccable skill references `mode-read`, `typeset` and
  `craft-floor` (github.com/pbakaus/impeccable, Apache-2.0). The frame/column
  rule, the verification list and the refuse list are adapted from these.
- Notes in Kristofer's second brain: `wiki/concepts/design-for-reading.md`.
