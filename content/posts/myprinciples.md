---
title: 'My Software development principles'
description: "My software development principles and hypotheses: deliver value within three months, value means deployed and used, projects over programs."
date: 2025-04-27
draft: false
tags: ["principles", "strategy"]
---

This is a test to put into words what I have learned and believe about software development. Will probably change when learn more so this blog post will probably be updated. There are two parts, principles, ideas I consider proven, and hypotheses, ideas that seem reasonable but that I want to test more before considering them proven. 

Of course these ideas are context specific and should be tested and evaluated in your own context. My thinking is mostly in the context of supporting company internal users with an engineering environment.


## Principles

### If you can’t add value within three months the plan is wrong. 

It does not have to be all the value. But if you have not been able to deploy something and get feedback on it withing three months you have a very high risk of working on the wrong things and that other people will be faster (e.g. if you have internal “customers” they might find a solution themselves)

### Value is deployment and feedback from users. 
Value is not: a plan, an architecture, a part of the solution that can’t be used yet. 

### Projects over programs. 
[Death to the program! Long live the project.]({{< relref "deathtotheprogram.md" >}})

### Focus on impact over activities. 
Activities are tasks like writing code or deploying; impact is the actual effect and value created.

### Beware the metagame
[https://amasad.me/meta](https://amasad.me/meta)

### Reuse over buy over build
When it is not core business. 

### Combined business and technology perspective all the way down to individuals
Understand business context and think entrepreneurially, even as an employee. Look beyond your immediate role to understand how the company makes money.

## Hypotheses

### Work as close to product as possible
Evolving Engineering environment in projects/programs separated from product projects/programs is more expensive and slower than evolving engineering environment in the product project. 

Some argue that running central projects gives cost control and alignment. But it is also easy to loose track of your (internal) customer needs and deadlines and then your risk building things that are not needed or used. Note that you can still have central tools and services, the point is that evolving them to meet the user needs is most efficient when done in the product development where the users are. 

### Product thinking over project thinking.

Focus on smaller iterative improvements rather than big improvement projects. There are two problems I see with this. One is that in many companies the financial models prefer a project setup. You plan for a longer time, you assign a budget to a wanted outcome. And the other is that you many times have deadlines, external customer commitments. Do those things make product thinking impossible? You could make a roadmap with wanted outcomes, this could be used for a longer term investment decision. Try to focus on measurable improvements instead of specific artifacts (e.g. happier developers instead of “new IDE”). And you can in the team still commit to deadlines, it gives an input to prioritization and a sense of urgency for the team.