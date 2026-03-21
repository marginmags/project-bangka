# Project Bangka

![AGPL v3](https://img.shields.io/badge/license-AGPL--v3-blue) ![Status: Early Development](https://img.shields.io/badge/status-early%20development-orange)

**An open source product builder for designers who are ready to ship.**

Go from a sketch or an idea to a real functioning product — built on whatever framework you choose, with a living design system as the foundation. Not a handoff artifact. Not a code generator. A single place where design and product are the same thing.

---

## The Problem

Designers have more agency than ever. The line between designer and builder is dissolving. But the tools haven't caught up.

Design lives here. Code lives there. Something is always lost in between. You either hand off your vision and hope, or you learn to code and leave your design instincts at the door.

Project Bangka is built on a conviction: **the next generation of designers shouldn't have to choose between craft and code.** They can focus on users, sweat the details, and ship real products — with design truly steering the wheel.

## Who It's For

**The designer with agency.** You have a product vision you're ready to own end to end — not just design, but ship. You're fluent in tools like Figma, you think in systems, and you're tired of the gap between what you design and what gets built.

**The junior designer.** You know the process — wireframes, user flows, design methodology — but you're still developing your eye. You're curious about vibe coding and AI-assisted building, and you sense the market shifting under you. Project Bangka being open source is a direct statement: you shouldn't need a senior engineer or an enterprise budget to ship what you can already design and test, accelerating the feedback loop that develops the eye faster than any portfolio project sitting in Figma.

## How It Works

```
Sketch  →  AI Implementation  →  Refine  →  GitHub PR  →  Ship  →  Iterate
```

1. **Start with a design system.** Pick an entry point — use Bangka's starter system, import from Figma, or connect an existing GitHub repo.
2. **Sketch your intent.** A rough layout, a wireframe, a description — whatever fidelity serves the moment.
3. **AI builds it.** Bangka's AI reads your sketch, references your design system and UX context, and generates real code in your chosen framework — staying within your system.
4. **You refine it.** The AI gets you most of the way. Your eye and judgment close the gap. This is what makes it a design tool, not just a generator.
5. **Ship it.** Push to GitHub as a PR. Merge, test, iterate. The full pipeline from idea to live product.

### The Infrastructure Layers

Beneath the building loop sit two foundations the AI always references:

- **Your Design System** — tokens, components, and a JSON registry that acts as the universal source of truth. Because the registry is framework-agnostic JSON (W3C DTCG format), your design system travels with you — across frameworks, across tools, into any stack. Established when you start, extended as you build. Always accessible for direct edits — tweak global tokens, refine components, restructure the hierarchy. Changes ripple through everything.
- **Your UX Context** — personas, user flows, journey maps, design rationale. You teach Bangka about your users; Bangka references that context at every step.

## What Makes It Different

- **Design system as infrastructure, not product.** The design system is the foundation you build on, not the thing you're shipping. You're shipping real products and features.
- **A JSON registry underneath it all.** Your design system lives as portable, framework-agnostic JSON — not locked inside any tool or format. This is the layer that makes everything else possible: switch frameworks, export to any stack, take your system with you. The JSON registry is the single source of truth; framework-specific code is always a downstream export.
- **AI constrained by your system.** Bangka won't generate UI that falls outside your tokens and components. Your vision sets the rules — the AI builds within them.
- **Open source, forever.** AGPL v3. No vendor lock-in, no proprietary formats, no surprise paywalls. Everything Bangka outputs is standard, readable, portable code.

## Tech Stack

| Layer | Choice |
|---|---|
| Build tool | Vite + TypeScript |
| App components | Vanilla web components |
| Design tokens | CSS custom properties, W3C DTCG format |
| Design system registry | Framework-agnostic JSON (portable across tools and stacks) |
| AI | BYOK — bring your own API key |
| Hosting | Cloudflare Pages |
| Shipping | GitHub PRs via browser API |
| License | AGPL v3 |

## Status

🚧 **Early development.** Project Bangka is being built by its primary persona — a designer navigating the same landscape of AI-assisted building that the tool is designed to make accessible. The vision is sharp. The implementation is underway.

**v0 foundation complete.** Design tokens are defined in W3C DTCG format and imported into Figma as variables. The Figma plugin API has been validated — variable bindings, variant properties, auto-layout, text styles, and token references all extract cleanly. Now scoping the v1 plugin: token export, component registration, web component output, and GitHub integration.

This README is an invitation for feedback, not a launch announcement.

## Get Involved

This project is in its formative stage. If you're a designer, a junior designer finding your footing, or someone who thinks about the intersection of design tools and shipping product — your perspective matters.

- **Open an issue** — questions, reactions, disagreements, ideas. All welcome.
- **Start a discussion** — if something resonates or something feels wrong, say so.

---

*Project Bangka is being designed from the inside out, by someone living the problem it solves.*

---

<sub>**Bangka** (bah-ngkah) means "boat" in Tagalog — a small vessel for shipping. Not a cargo ship, not a cruise liner. A bangka is personal, nimble, and built to move. That's the energy.</sub>
