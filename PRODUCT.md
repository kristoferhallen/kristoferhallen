# PRODUCT.md — kristoferhallen.com

Who this site serves and what they need to do. Read this before any design
work; DESIGN.md says how it looks, this file says why.

## What the site is

A personal blog of essays on software development, technical leadership,
engineering strategy and CI/CD, by Kristofer Hallén. Written in English.
Opinionated, example-driven posts of 400–2500 words, published every few weeks,
sometimes as short series (technical leadership, Dirk Gently). No code
tutorials. The site has a home page, a post list, single posts, tag pages and
an About page with talks and publications.

## Who reads it

**Primary reader: technical leaders.** Tech leads, architects, staff engineers
and managers who came from engineering. They care about how software gets built
in large organisations, not about a specific framework.

**Also: product leaders.** Product owners and product managers working with
engineering, a growing share of the topics since Kristofer moved into product
management.

**And the author himself.** The blog is first a practice: a place to put
thoughts into words and keep getting better at expressing them. The site should
make publishing easy and never make a short or unfinished-feeling post look out
of place.

How they arrive (access logs, Sept–Oct 2026):
- Almost all visits are direct: links shared on LinkedIn or Bluesky, most likely
  opened in a mobile app. Search sends very little traffic.
- They land on a single post, not the home page, and usually read only that one.
- A large share of requests are bots and scrapers; design for the humans.

So the single-post page on a phone is the most important surface.

**Second audience: people evaluating Kristofer.** Conference organisers,
potential collaborators and future employers. They land on the home page or
About page, often after a search or a recommendation, and want to know within
30 seconds who he is, what he is an expert in, what proves it, and how to reach
him. The goal is **visible expertise**, not job-seeking: nothing on the site
should read as looking for the next job.

## What a reader should be able to do

1. **Read one essay comfortably**, on a phone or a laptop, in light or dark
   surroundings. This is the job; everything else is secondary.
2. **Follow Kristofer, preferably on LinkedIn.** After a post, it should be
   obvious who wrote it and how to follow. One clear invitation, not a row of
   buttons or a popup.
3. **Understand who the author is** from the home page: what he writes about and
   why it is worth following. *The current home page does not do this well;
   it is the part Kristofer likes least.*
4. Find another post when curious, without the site pushing it.

For the second audience:

5. **See the expertise at a glance** on the home page: who he is, his two or
   three areas, and why he is worth listening to.
6. **Find evidence over titles**: talks (with video or slides where they
   exist), publications, the Eiffel protocol. The site should not depend on
   his current employer to make the case.
7. **Invite him to speak**: topics he talks about, past talks, and how to get in
   touch, in one obvious place.

Branding stays out of the reading column. On a post, a single short author note
at the end serves both following (goal 2) and visible expertise.

## Tone

**Calm and bookish.** Like a well-set essay collection: a reading face, generous
space, almost no colour. Nothing animates, nothing competes with the text.

## Constraints and decisions

- **Keep:** the home page list of recent posts with a short excerpt.
- **Light and dark mode both stay; the default follows the visitor's system
  setting.** (Today the site defaults to dark; that should change.)
- **Open to change:** the typeface (Source Serif 4 today), the theme toggle,
  tags. None of these are sacred.
- **Separate from the Sherlock site** (sherlock.kristoferhallen.com). Different
  identity and audience; no shared visual system needed.
- **No tracking scripts.** Visitor counting is done from server logs.
- **Hugo static site** on shared hosting, deployed from GitHub. Theme
  `hugo-blog-awesome` with site overrides in `layouts/` and
  `assets/sass/_custom.scss`; never edit `themes/`.
- Accessibility: text contrast at least WCAG AA (4.5:1) in both modes.

## Not goals

- Growth tricks: popups, newsletter nags, share-button rows, "trending" lists.
- Looking like a product or company site.
- Visual novelty for its own sake.
