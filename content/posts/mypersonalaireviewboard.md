---
title: 'My personal (AI) review board'
description: "An AI review board of six personas that gives several perspectives on documents, proposals and business cases instead of a single voice."
date: 2026-09-23
draft: false
tags: ["AI", "review"]
---

AI is good at reviewing not only code but also documents, tickets, project proposals, business cases and more. You can create review skills that define how you want a review to be done. But I realized that it only gives you one voice, one perspective.

I remembered [a post where someone had set up a personal board of directors with GenAI](https://sloanreview.mit.edu/article/how-i-built-a-personal-board-of-directors-with-genai/), so I built a skill with a board of six "people" who review what I send them. Each one is modeled on how I read the work of someone I think gives good insights:

- **The simplifier** (Steve Jobs) asks what we can remove.
- **The operator** (Andy Grove) asks for the metric and the deadline.
- **The realist** (Charity Majors) asks who wakes up when this breaks.
- **The reframer** (John Cutler) asks if we're solving the right problem.
- **The contrarian** (Nassim Taleb) asks what the downside is.
- **The strategist** (Simon Wardley) asks if we're building something that already exists as a commodity.

Obviously it's a model's interpretation of their public work, not them.

I send a document to the board and each member gives a verdict (approve, push back or kill) and a question. Then I get a summary: what they agree on, where they disagree, the biggest blind spot and a recommended next step. One rule in the skill is that if all six agree, something is wrong. The disagreements are the valuable part. Last week I had two cases where the simplifier made me reduce the scope. 

It's still one model wearing different hats, so it won't replace real people who disagree with you. Build your own board, and make sure some of its members wouldn't agree with you.
