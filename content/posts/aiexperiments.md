---
title: 'AI experiments: what I have built so far'
description: "A product manager's AI assistant in the terminal that gathers context from calendar, mail, tracker and budget data to prepare decisions, not make them."
date: 2026-07-13
draft: false
tags: ["ai", "product manager", "experiments"]
---

I'm a product manager for CI/CD. A lot of my job is meeting triage, budget analysis, stakeholder writing, and keeping track of a portfolio with 50+ items across several teams. Most of that work is gathering context from different systems before I can actually make a call. I wanted an AI to do the gathering and prepare the decision, not make it for me.

## What I built

A CLI tool I talk to in my terminal. It has access to my calendar, mail, project tracker, budget data and my own notes. It has a handful of defined tasks - plan my week from calendar and mail, parse a budget export, assess a technical proposal, draft in my voice, maintain my notes. Each task is described in a short markdown file: when to use it, what tools it's allowed to touch, what good output looks like.


## What works

Meeting triage. I say yes to too much and end up with three meetings stacked on top of each other. The AI scans my week, flags conflicts, unanswered invites, and meetings that were cancelled but never removed from my calendar.

Budget analysis. I had a large cost export to split into categories, normally half a day of copy-pasting and checking allocation codes. The AI did it in minutes, including catching a cryptic key where percentages were hidden in parentheses I'd probably have missed.

Writing support. I write constantly - decision briefs, vision docs, stakeholder mail. The AI drafts a first pass in something close to my voice. I trained it the way I'd coach a junior writer: not by showing it what I write, but by showing it what I delete. Editing its draft down to something I'd actually send now takes about five minutes instead of thirty.

## What I've learned

Instructions matter more than the model. A clear description of when to act, what tools to use, and what to never do beats a smarter model with vague instructions. Most of my tasks run fine on a standard model. The bottleneck is context and access, not reasoning.

Skip the framework. I looked at the multi-agent frameworks before starting. For one person working from a terminal, they add ceremony without adding value. A single AI with a few well-defined tasks and access to my actual tools is easier to reason about and easier to fix when something breaks.

Give it the real tools, not an API wrapper. It calls the same command-line tools I use and searches the same systems I search. The only question when adding a new capability is whether I can do it from a terminal myself.

## What doesn't work yet

I want to be able to access more data directly.

I also don't have a good way to measure whether the system is getting better over time. Right now that's a gut feeling, not a measurement.

## Where this leaves me

Gathering context used to take most of my day. Now it takes a fraction of it, and the time goes back into the actual decision. This is the first post about the experiment. I'll keep writing as I learn what holds up.

