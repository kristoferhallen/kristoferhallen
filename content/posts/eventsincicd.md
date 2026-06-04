---
title: 'Events in CICD'
date: 2025-03-09
draft: false
tags: ["cicd", "events"]
---

What do you do when you have a large scale setup of build, integration, test and release pipelines that continuously evolve?

At Ericsson, we have used events in CI/CD for many years ([Ericsson blog post](https://www.ericsson.com/en/blog/2022/11/software-production-event-driven-architectures)). This approach gives us valuable flexibility — we can quickly adapt CI/CD pipelines to meet new product requirements. Whether it’s setting up a new integration pipeline for a product variant, reusing test results from another pipeline, or triggering pipelines based on upstream results, event-driven architectures make it (relatively) easy.

A key advantage is that events are decoupled from their sources and broadcasted, meaning they are not tied to a specific receiver or pipeline technology. This allows us to modify or add pipelines without disrupting other parts of the product flow—as long as the events continue to be published.

Want to switch from Jenkins to Argo? No problem—the consumers of your events remain unaffected since they rely only on the event data, not its origin. Need to introduce a new product integration pipeline? Simply subscribe to the necessary events, and existing pipelines remain untouched.

To have a common understanding of the events we use we have mainly used the [Eiffel protocol](https://eiffel-community.github.io/) but you can also look into [CDEvents](https://cdevents.dev/).   