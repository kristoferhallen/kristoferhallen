---
title: 'From Pipeline Plumbers to Pipeline Architects: Pipeline as Prompt'
description: "After Pipeline as Code comes Pipeline as Prompt: describe goals and constraints and let an AI agent generate and maintain your CI/CD pipeline."
date: 2026-01-20
draft: false
tags: ["ai", "prompt", "cicd", "pipeline"]
---

Pipeline as Code was a huge win. We moved from clicking around in Jenkins UIs to versioning our pipelines alongside our code. But I think we're about to see another shift, you heard it here first: Pipeline as Prompt.

Here's the idea: instead of writing YAML, you tell an AI agent what you need. "I want daily deployments, sub-10-minute builds, and NIST compliance." You give it your tech stack, your security constraints, your performance targets. The agent generates the pipeline and it maintains it as your needs change and as the tooling evolves.

With Pipeline as Code, we still think in terms of how – which Docker image, which test runner, how to parallelize jobs. With Pipeline as Prompt, we think in what and why. This takes us from pipeline plumbers to pipeline architects. We focus on business outcomes, KPIs. The agent handles the implementation details.
