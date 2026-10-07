---
title: 'Your CI pipeline is an Electric Monk - Software development according to Dirk Gently'
description: "Your CI pipeline is Douglas Adams' Electric Monk: it believes your build is fine so you don't have to. What that means for testing and trust."
date: 2026-08-05
draft: false
tags: ["leadership", "cicd", "Dirk Gently", "testing"]
---

Have you read Dirk Gently's Holistic Detective Agency? Do it, at least if you like The Hitchhiker's Guide to the Galaxy. Douglas Adams wrote it, and buried inside the detective plot is a small invention that says more about software delivery than most books about software delivery: the Electric Monk.

An Electric Monk is a labour-saving device, like a dishwasher or a video recorder. A dishwasher washes the dishes so you don't have to. A video recorder watches television so you don't have to. An Electric Monk believes things for you, so you don't have to do the tedious work of believing them yourself.

The one in the book is broken. It has developed a fault and started believing things more or less at random — "It was even beginning to believe things they’d have difficulty believing in Salt Lake City".

## The Monk on your team

Your CI pipeline is an Electric Monk. So is your coverage gate and your green checkmark. You built them so you would not have to personally believe, every time, that the code is fine. Most days this is good. It is the whole point. You cannot re-derive trust in the build system every morning.

The problem is the same as in the book. When the Monk breaks, it keeps believing, and now everyone downstream believes too. A green build that tests nothing is worse than a red build, because the red build at least tells the truth. I have seen teams protect a passing pipeline the way you protect a religion. Nobody asks what it actually checks. It is green, so we are fine.

The cost of the broken Monk is not the failed deploy. It is the six weeks where everyone shipped on faith and the faith was misplaced. You do not find that on an incident report. You find it in the next quarter.

## What to check

Check what your Monks actually believe, once in a while. Not whether they are green. What they check when they go green. A pipeline you never interrogate is not protecting you. It is just a very confident device, believing things on your behalf, and you have forgotten to ask if it is right.
