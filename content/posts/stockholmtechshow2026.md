---
title: 'Reflections from Stockholm Tech Show talk 2026'
date: 2026-05-29
draft: false
tags: ["conference", "trends", "stockholm tech show"]
---

I had a talk at [Stockholm Tech Show](https://stockholmtechshow.se/talarprogram-2026/?selectedRooms=81). I talked about s DevOps journey in large scale Software - Hardware systems. As usual Ericsson context but applicable for many industries with large scale projects that combine software and hardware. I focused on three journeys to get the DevOps benefits of fast feedback loops between dev and ops. Here is a summary of the talk.

# From Months to Minutes: What DevOps Really Looks Like in Hardware–Software Products

Most DevOps stories are told from a cloud‑native, web‑services perspective: small teams, fast rollbacks, frequent deployments. This talk  explores what DevOps looks like when software ships together with hardware, across thousands of developers, strict traceability requirements, and release cycles that once stretched from 6 to 18 months. 

## The Problem: Slow Feedback Is a Competitive Disadvantage

In complex HW/SW products, a large part of release time wasn’t spent on engineering—it was spent on process overhead. Field defects were dramatically more expensive than issues caught early in the pipeline, and long release cycles meant painfully slow feedback. This wasn’t a tooling problem alone; it was a business problem. 

## Why Most DevOps Advice Doesn’t Apply

The presentation makes an important reset: most DevOps best practices assume conditions that simply don’t exist in embedded or hardware‑coupled products. There’s no easy rollback. A bad release becomes a field issue, not a failed deploy. Regulatory requirements, long product lifetimes, and custom hardware fundamentally change the rules of the game. 

## The Flow Journey: Stop Optimizing Locally

One of the core lessons is how the question teams ask must evolve over time:

Early: “How do I optimize my pipeline step?”
Later: “How do we optimize our component pipelines?”
Now: “How do we optimize the end‑to‑end flow from code to customer?”
Local optimization gave way to system thinking. 

## Build vs. Buy vs. Own

Early on, nothing off‑the‑shelf could meet traceability needs across hardware and software, which led to significant in‑house tooling (including event‑driven CI/CD frameworks). As the industry matured, the question changed from “Can we build this?” to “Should we?”—and eventually to “Should we still own this?”.

A key takeaway: shared ownership is the same as no ownership—it just fails more slowly. Tooling needs clear, named owners with real authority. 

## Responsibility: From Components to Systems

Responsibility followed the same maturity curve as flow:

From “Does my thing work?”
To “Do these things work together?”
To “Does the system work?”
True DevOps emerged only when teams owned outcomes, not just components. 

## AI in the Pipeline: Pragmatism Over Hype

Where it helps today: test generation, CI failure analysis, documentation.
Where it doesn’t: fixing broken pipelines, replacing human judgment in safety‑critical gating.
It is a challenge to handle security and compliance when AI allows product and tools to change much faster.

## The Result: From Months to Minutes

The transformation wasn’t triggered by a dramatic executive mandate. It happened when manual processes simply stopped scaling with complexity. The outcome:

Daily releases instead of months‑long stabilization
Traceability built into the system, not spreadsheets
Faster feedback loops across thousands of developers 

DevOps at scale needs flow, ownership, and focus on deployed value—even (and especially) when hardware is part of the equation. 