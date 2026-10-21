---
title: 'The sofa in the stairwell - Software development according to Dirk Gently'
description: "Some legacy states in software systems can't be explained or undone. Isolate them, pin their behaviour with tests, document them, and spend your time where it matters."
date: 2026-10-21
draft: false
tags: ["leadership", "softwaredevelopment", "Dirk Gently", "technical debt"]
---

Douglas Adams' Dirk Gently's Holistic Detective Agency has a running joke that is really a working theory: everything is connected to everything else, so any thread you pull will eventually lead you to the answer. Most of the time this is used as a punchline. Once, it explains a sofa.

Dirk's friend Richard has a sofa stuck in his staircase. It is jammed at an angle that, according to a computer model Richard builds, cannot exist. There is no sequence of moves that gets the sofa into that position, and no sequence that gets it out. And yet there it is.

Every old codebase, or system of tools, has this sofa. A module in a state that no sane sequence of commits could have produced. It works, nobody knows why, and you cannot remove it either, because removing it creates new problems.

## Choose where your week goes

The natural reaction is to start pulling. You will spend a week on it and might lose. And even if you win, what did you get? A system that does the same thing as before, and a week that did not go to anything your users will notice.

Leaving the sofa where it is can be the best engineering decision you make this quarter. But only if you do it on purpose. Leaving it because nobody dares to touch it is technical debt. Leaving it because you decided where your time creates value is leadership.

## Build around the sofa

Building around it is active work, not doing nothing:

- **Put a wall around it.** Give it a clear interface and let new code talk to the interface, never to the sofa. New functionality grows around the old, the way Martin Fowler describes the [Strangler Fig](https://martinfowler.com/bliki/StranglerFigApplication.html). One day you may notice that nothing uses the sofa anymore.
- **Pin its behaviour with tests.** You don't know why it works, but you can know if it stops working. Michael Feathers calls these [characterization tests](https://en.wikipedia.org/wiki/Characterization_test) in Working Effectively with Legacy Code: they describe what the code does today, not what it should do. Just make sure they test something real, or they become an [Electric Monk]({{< relref "softwaredevelopmentaccordingtodirkgently.md" >}}) believing on your behalf.
- **Write down that it is impossible.** The documentation is not "here is how this works". It is "this should not work, we don't know why it does, here is what we tried, do not start pulling unless you have a lot of time to spend". An [architecture decision record](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html) is a good home for it. That note saves the next person their week.

It is the other side of [Chesterton's fence]({{< relref "chestertonsfence.md" >}}). Chesterton says: understand why the fence is there before you tear it down. The sofa is the case where you can't understand. Then you build a fence of your own around it.

## When to pull anyway

Building around the sofa is a decision, so revisit it. Start pulling when:

- **It is in the way.** A change you need to make has to go through it, and the wall around it is no longer enough.
- **It is a risk.** Security, compliance or a dependency that is no longer supported.
- **It starts to move.** It breaks more often, or the tests around it start to fail.
- **Someone finally understands it.** A new person, a new tool or an old commit message can be the thread that solves the mystery.

Until then, let it sit.

## The sofas at Cambridge

The sofa is not only a joke. [When Douglas Adams studied at St John's College in Cambridge](https://en.wikipedia.org/wiki/Dirk_Gently%27s_Holistic_Detective_Agency#Writing), furniture was placed in some rooms while the staircases were refurbished. When the work was done, the sofas could no longer be taken out. They stayed for decades, and the college kept working just fine around them.

So find your sofa, put a wall and some tests around it, write down that it is impossible, and spend the week on something that matters.
