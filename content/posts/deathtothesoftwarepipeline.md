---
title: 'Death to the software pipeline!'
date: 2024-10-09
draft: false
tags: ["ci pipeline", "software pipeline", "software testing"]
---

CI pipelines, CD pipelines, devops pipelines, why do we talk so much about pipelines?

A recent discussion on LinkedIn, along with an example from my own work, made me realize something: we need to stop obsessing over the “pipelines” themselves! The issue is that when we focus on the pipeline we forget about why we have them, to automate the value adding activities we want to run before deploying or shipping. If teams focus more on pipeline engine selection and logic than what you actually want to do in the pipeline you focus on the wrong things. 

Instead, start by describing what you want or must do with your code and product before it is shipped or deployed. Things like builds, tests, compliance and security checks. Then, build your pipelines around these requirements to fit both the activities and your product effectively. And maybe find out that it was hard to do all the things you wanted within a reasonable time and/or budget so then go back to redefining activities and improve the pipeline.