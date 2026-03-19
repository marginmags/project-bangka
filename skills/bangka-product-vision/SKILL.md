---
name: bangka-vision
description: The north star for Project Bangka — identity, pitch, hard boundaries, and non-negotiable principles. Read this at the start of EVERY session. This is the shortest and most essential skill — it tells you what Bangka is, what it will never be, and the principles that cannot be violated. For personas, see bangka-personas. For architecture, see bangka-architecture. For product features, see bangka-product.
---

# Project Bangka — Vision

## What Project Bangka Is

Project Bangka is an open source, browser-based product builder for the next generation of designer-builders. Go from a sketch or an idea to a real functioning product, built on whatever framework you decide — with a living design system as the foundation, not a handoff artifact. Built for designers who are ready to ship.

Project Bangka is built on a conviction: the next generation of designers shouldn't have to choose between craft and code. They can focus on users, sweat the details, and ship real products — with design truly steering the wheel. Not handing off to someone else's interpretation, but driving the product directly. Not a dev handoff bolted onto a drawing tool. A single place where design and product are the same thing.

**The one-sentence pitch:** Project Bangka empowers designers to stop handing off and start shipping — leading with vision, driving craft, from idea to real framework-agnostic product, with a living design system as the infrastructure beneath every decision.

---

## What Project Bangka Is Not

These are hard boundaries. Never suggest features or architecture that crosses them.

**Not a handoff tool.** It is where the designer builds it. There is no handoff — there is only shipping.

**Not a rigid canvas.** Designers can work at whatever fidelity serves their vision. The canvas meets the designer where they are, not where the tool expects them to be.

**Not a code-locking platform.** Everything output is standard, readable, portable code. No proprietary formats, ever.

**Not a UI generator that ignores the design system.** Will not generate or suggest UI outside the established token and component registry.

**Not a backend builder.** No user databases, no server-side state, no auth systems. Cloudflare Workers allowed only for stateless AI proxying.

**Not a team tool — yet.** Solo designers for v1. Don't build for teams now, but don't make it impossible later.

---

## The Building Loop

The designer's day-to-day workflow:

```
Sketch  →  AI Implementation  →  Refine  →  GitHub PR  →  Ship  →  Iterate
```

Beneath the loop sit two infrastructure layers the AI always references: the **Design System** (tokens, components, registry) and **UX Context** (personas, user flows, journey maps, design rationale). Neither is a phase — both are always present, always growing. See `bangka-product` for full detail.

---

## Architectural Principles

These are decisions already made. Do not re-litigate them.

1. **Registry-first.** All state derives from the JSON registry. No parallel state stores.
2. **No persistent backend.** GitHub is the shipping layer. Serverless only for AI proxying.
3. **Standard outputs.** All generated code must be human-readable and usable without Bangka.
4. **Own your components.** Bangka's UI uses Bangka's own design system — no third-party libraries.
5. **Designer-legible decisions.** Every decision must be explainable in plain language.

---

## Skill Map

This vision skill is the north star. Everything else builds on it:

- **`bangka-personas`** — who Bangka is for (designer with agency, junior designer, creator)
- **`bangka-architecture`** — tech stack, framework agnosticism, registry role
- **`bangka-product`** — features, entry points, starter system, GitHub integration
- **`bangka-design-system`** — tokens, aesthetic, component conventions
- **`bangka-registry-spec`** — JSON registry schema and validation rules
- **`bangka-component-rules`** — when to create vs extend components
- **`bangka-prd-translation`** — how to interpret design artifacts
- **`bangka-github-patterns`** — GitHub API conventions and PR workflow
- **`bangka-process`** — build order, session workflow, phase planning
- **`bangka-worklog`** — session notes and institutional memory
