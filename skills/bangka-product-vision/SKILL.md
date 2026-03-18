---
name: bangka-product-vision
description: The foundational product vision and architecture reference for Project Bangka — an open source, browser-based product builder for the next generation of designer-builders. Read this skill at the start of EVERY session before writing any code, making architectural decisions, creating components, or planning features. If the user mentions Project Bangka, mentions tokens, mentions components, mentions the canvas, mentions GitHub integration, or asks about anything related to this project — read this skill first. This is the north star document. Everything else builds on it.
---

# Project Bangka — Product Vision & Architecture

## What Project Bangka Is

Project Bangka is an open source, browser-based product builder for the next generation of designer-builders. Go from a sketch or an idea to a real functioning product, built on whatever framework you decide — with a living design system as the foundation, not a handoff artifact. Built for designers who are ready to ship.

Project Bangka is built on a conviction: the next generation of designers shouldn't have to choose between craft and code. They can focus on users, sweat the details, and ship real products — with design truly steering the wheel. Not handing off to someone else's interpretation, but driving the product directly, crafting better and better experiences for the humans who use it. Not a dev handoff bolted onto a drawing tool. A single place where design and product are the same thing.

**The one-sentence pitch:** Project Bangka empowers designers to stop handing off and start shipping — leading with vision, driving craft, from idea to real framework-agnostic product, with a living design system as the infrastructure beneath every decision.

---

## What Project Bangka Is Not

These are hard boundaries. Never suggest features or architecture that crosses them.

**Not a handoff tool.** Project Bangka is not the last step before a developer builds something. It is where the designer builds it. There is no handoff — there is only shipping.

**Not a rigid canvas.** Project Bangka doesn't force pixel-perfect screen design — but it doesn't prevent it either. Designers can work at whatever fidelity serves their vision: a rough flow to validate an interaction, a detailed component to nail a moment of craft, or a full layout to see everything together. The canvas meets the designer where they are, not where the tool expects them to be.

**Not a code-locking platform.** Everything Project Bangka outputs is standard, readable, portable code. The user is never dependent on Project Bangka to read or use their own codebase. No proprietary formats, ever.

**Not a UI generator that ignores the design system.** Project Bangka will not generate or suggest UI that falls outside the established token and component registry. The designer's vision sets the system — Project Bangka builds within it.

**Not a backend builder.** No user databases, no server-side state, no auth systems. GitHub is the version control and shipping layer — all code lives in repos, all changes ship as PRs. Project Bangka may use lightweight serverless functions (Cloudflare Workers) purely to proxy AI API calls securely — stateless, holding no data.

**Not a team tool — yet.** Solo designers are the primary citizen for v1. Collaboration features are a future priority. Do not build for teams now, but do not make architectural decisions that make teams impossible later.

---

## The User: The Designer with Agency

This person is:
- A designer with strong visual and UX instincts, fluent in Figma or similar tools
- Someone with a product vision they're ready to own end to end — not just design, but ship
- Navigating a new era where the line between designer and builder is dissolving
- Frustrated that the tools haven't caught up — design lives here, code lives there, and something is always lost in between
- Capable of defining what they want visually and experientially; needs Project Bangka to reliably translate that vision into real, working product

They are not waiting for permission to ship. They are the designer in the next epoch of technology — where craft and agency are the same thing.

Design decisions, copy, hierarchy, and user experience: this person leads. Implementation details, architecture, and code patterns: Project Bangka (and Claude) handle, but must always be explainable in plain language when asked.


## The Secondary User: The Design Student

This person is:
- Earlier in their craft — still developing their visual instincts, learning what good looks and feels like
- Hungry to build real things, not just mockups that live in a Figma file and never get seen
- Learning through sharing — critique from mentors, feedback from community and users, and the humbling reality of shipping something real are how they grow fastest
- Underserved by tools that assume professional-level context or charge professional-level prices
- Entering an industry where vibe coding is becoming the norm — but where the learning curve to do it well is steep, even for seniors

Project Bangka being open source is a direct statement to this person: **you don't have to wait until you're senior to build real things and put them in front of people.** The ability to go from idea to something shareable — a live product, a real component, something a mentor can actually critique or a user to actually try — accelerates the feedback loop that builds great designers.

This isn't just about speed. It's about access. A design student with Project Bangka can flesh out their ideas fully, ship them, and open themselves up to the kind of real-world critique that Figma files in a portfolio never invite. They enter the new world of design not as observers but as builders — with a community around them and the tools to keep up with a landscape that isn't slowing down for anyone.

Vibe coding is where the industry is heading — but doing it well requires a mental model that designers, even experienced ones, are still developing. Project Bangka gives students that visual layer: a way to engage with AI-assisted building confidently, see what's being made in real time, and understand the relationship between their design decisions and the code that results. Not a shortcut around learning — a better on-ramp into it.

Claude should always keep this person in mind when making decisions about complexity, onboarding language, and error states. If a design student would feel lost or intimidated, Project Bangka hasn't done its job.


## The Creator as User

Project Bangka is being built by its primary persona. The creator is a classically-trained UX and systems designer — someone who puts people at the center of their work and thinks naturally in design systems, but is still learning the new evolution of technology with AI-powered tooling and how to build with it confidently. Not every type of senior designer, just one — with a particular lens on UX and systems thinking, and a lot still being figured out along the way.

The approach is personal by necessity: building for yourself is the fastest feedback loop. But the creator is actively thinking about peers with different expertise and focus — visual designers, product designers, design leads — and letting those perspectives shape Project Bangka as it grows.

The technical barrier is real and shared. The creator is non-technical by background, navigating the same landscape of vibe coding and AI-assisted development that Project Bangka is designed to make accessible. The frustration isn't with design systems — it's that the tools have never given designers the agency to own the full stack of their product vision without handing control to someone else.

This matters architecturally: every decision about complexity, language, onboarding, and workflow should be validated against the question **"would the person building this tool be able to use it?"** If the creator would find something confusing, intimidating, or unnecessarily technical — it needs to be rethought.

Project Bangka is being designed from the inside out, by someone living the problem it solves. That's its most honest quality signal.

**How this project documents itself:**

As Project Bangka is built, two companion skills capture the evolving process and accumulated knowledge:

- **`bangka-process`** — the working method, what to build in what order, and lessons learned about designer-led AI development. Read this at the start of any session where direction is unclear.
- **`bangka-worklog`** — session notes and milestone summaries stored as markdown files in `/worklogs`. Point Claude at this folder at the start of any session to restore context from previous work.

Both skills are living documents. They change as the creator learns. When the process skill stops reflecting how work actually happens, update it. When a worklog reveals a pattern worth capturing in a skill, surface it.


---

## Core Workflow

### The Building Loop

The designer's day-to-day workflow is a tight loop. The design system already exists (via one of the three entry points). The work is building with it.

```
Sketch  →  AI Implementation  →  Refine  →  GitHub PR  →  Merge  →  Test  →  Iterate
```

- **Sketch** — the designer expresses intent: a rough layout, a flow, a wireframe, a description. Whatever fidelity serves the moment.
- **AI Implementation** — Bangka's AI reads the sketch and the infrastructure layers (design system + UX context), then generates real code that stays within the system. New tokens or components are created as needed and added to the registry automatically.
- **Refine** — the designer's craft. The AI gets you most of the way; the designer's eye and judgment close the gap. This is what makes Bangka a design tool, not just a code generator.
- **GitHub PR → Merge → Test → Iterate** — ship it, see it live, learn from it, loop back.

Early iterations are big (sketch → whole new feature). Later iterations are small (tweak spacing, adjust an interaction, polish a transition). Same loop, different scope.

### Three Entry Points

Every designer enters through one of three equally first-class paths. Each one gives you a design system to build with:

```
  Starter system ──┐
                   │
  Figma import ────┼──→  [ Sketch → AI Implementation → Refine → GitHub PR → Merge → Test → Iterate ]
                   │
  GitHub repo ─────┘
```

- **Starter system** — Project Bangka's neutral token foundation. Zero decisions, start building immediately.
- **Figma import** — Tokens exported from Figma via plugin or REST API. Designer's existing system becomes the starting point.
- **GitHub repo** — Connect an existing repo with tokens or components. Pick up where you left off.

All three converge at the same building loop. From that point forward, the workflow is identical.

### The Infrastructure Layers

Beneath the building loop sit two persistent, always-available layers that the AI references at every step:

```
┌───────────────────────────────────────────────────────────────────────────┐
│  Sketch  →  AI Implementation  →  Refine  →  GitHub PR  →  Test  →  ↩   │
│                                                                           │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   │
│  Design System: tokens, components, registry (JSON)                       │
│  (established via entry point, extended during the loop as needed)        │
│                                                                           │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   │
│  UX Context: personas, user flows, journey maps, design rationale         │
│  (designer-contributed, AI-readable, grows over time)                     │
└───────────────────────────────────────────────────────────────────────────┘
```

**The Design System layer** — tokens, components, and the JSON registry. Established when the designer picks an entry point, then extended naturally during the building loop. When the AI implements a sketch and needs a new component or token, it creates one within the existing system and adds it to the registry. Token definition and component creation aren't separate pipeline steps — they're part of the infrastructure that grows as you build.

The designer can also step out of the building loop at any time to work on the design system directly — tweaking global token values, refining component APIs, restructuring the token hierarchy. Changes ripple through everything that references them. This is how a designer evolves their system over time: a spacing scale that felt right at first gets tightened, a color palette shifts, a component gets a new variant. The design system is infrastructure, but it's *the designer's* infrastructure — always accessible, never locked away.

**The UX Context layer** — personas, user flows, journey maps, and design rationale that the designer builds up over time. This is not documentation. It is **executable context** — the AI reads it before generating code, suggesting interactions, or scaffolding screens. When a designer defines a persona or maps a user flow inside Bangka, that artifact becomes a living input to every build decision the AI makes.

Both layers work like a skill system for the product being built — the designer teaches Bangka about their system and their users, and Bangka references that knowledge at every step. A dedicated skill for validating designs against accumulated UX context is planned for a future phase.

**What Claude should know:** Neither layer is a phase or a step. They are always present, always growing, and always informing the AI's decisions. The building loop runs on top of them.

---

# Architecture & Tech Stack

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Build tool | Vite + TypeScript | Fast, modern, what the prototype used |
| Components | Vanilla web components (custom) | Framework-agnostic, philosophically consistent with what Project Bangka enables for others |
| Tokens | CSS custom properties, W3C DTCG format (2025.10 spec) | Open standard, stable, cross-tool portable |
| Icons | Phosphor Icons (MIT) + custom SVGs for Project Bangka-specific concepts | Multi-weight system supports UI state expression; MIT = no commercial restrictions |
| Hosting | Cloudflare Pages | Free tier has no commercial use restriction, globally fast, no surprise bills |
| AI (v1) | BYOK (Bring Your Own Key) | User provides their own API key (Claude, OpenAI, etc.), stored locally. No server needed, no cost. This is the standard open-source AI tool pattern. |
| AI (future) | Optional AI proxy via Cloudflare Workers | Adds caching, retries, token counting, multi-provider abstraction. Only needed if/when a hosted version or middleware layer is justified. |
| License | AGPL v3 | Open source core, forever; commercial use of the platform requires open sourcing |

## Framework Agnosticism

**Bangka the app** is built with vanilla web components and CSS custom properties — that's an internal tech stack choice for the tool itself.

**Bangka's output** has two layers:
- **The design system** (tokens + components) is always framework-agnostic. Stored as JSON in the registry (W3C DTCG format for tokens), exportable to any framework's format: React, Vue, Svelte, Tailwind, plain CSS, etc. The JSON registry is the universal source of truth; framework-specific code is always a downstream export, never the canonical representation.
- **Product and feature code** is built in the user's chosen framework. The designer picks a framework when they start a project, and Bangka generates real code in that framework — using the design system's tokens and components. The product code lives in the repo alongside the registry.

## The JSON Registry

The heart of Project Bangka is a `registry.json` (or equivalent) that tracks:
- All design tokens (name, value, type, group — W3C DTCG format)
- All components (name, description, properties, token references, file path)

**This registry is the single source of truth for the user's design system.** Every part of Bangka's UI — the token editor, component browser, canvas — reads from and writes to this registry. No feature should store design system data in a separate location (localStorage, a side config, in-memory only). If a token or component isn't in the registry, it doesn't exist. This is what makes the output portable: the registry is a self-contained, framework-agnostic snapshot of the entire design system that can be versioned, exported, or handed to any tool.

**What the registry does NOT track:** Product and feature code. The features a designer builds using the design system live in the repo as normal source files in the user's chosen framework. The registry tracks the design system infrastructure; the repo holds everything — design system and product code together.

## Architectural Principles

These are the decisions already made. Do not re-litigate them or suggest alternatives without strong reason.

1. **Registry-first.** All state derives from the JSON registry. No parallel state stores.
2. **No persistent backend.** GitHub is the version control and shipping layer. Serverless functions are allowed only to proxy AI API calls securely — they hold no state, no user data, nothing proprietary.
3. **Standard outputs.** All generated code must be readable by a human and usable without Project Bangka.
4. **Own your components.** Project Bangka's UI is built with Project Bangka's own design system — not a third-party component library.
5. **Designer-legible decisions.** Every architectural or implementation decision Claude makes must be explainable in plain language. If it can't be explained simply, it's probably wrong.

---

# Product Features

## The Starter System

Project Bangka ships with one opinionated starter design system — built by Project Bangka, used by Project Bangka, available to every user from day one.

**Why one, not many:** Choice at first-run creates friction. One great starter system creates confidence. Users can always build from scratch, but the starter gives them a real foundation to restyle and make their own immediately.

**What it is:** A minimal, neutral token foundation — not opinionated about aesthetic, but opinionated about structure. It defines the right layers (primitive → semantic → component tokens), sensible spacing and type scales, and a small set of core components. It doesn't look like anything in particular — that's intentional. It's a canvas, not a brand.

**The meta-principle:** Project Bangka's own UI is built on this same starter system. Every design decision in Project Bangka's interface is a living demonstration of what the starter system enables. If Project Bangka's UI looks good, the starter system is credible. They must never diverge.

**First-run flow:** A new user opens Project Bangka, and immediately chooses one of the entry points - no blank canvas anxiety, no setup screens. 


## Three Entry Points

Every user starts one of three ways. These are equally first-class — not a primary path and two afterthoughts. If they don't start with signing into GitHub, they will be prompted to when they are ready to ship something.

**1. Start from the Project Bangka starter system**
The default. Sign in, start with Project Bangka's neutral minimal token foundation. Zero decisions required to get going. Sign into GitHub when they're ready to ship. Best for designers starting fresh.

**2. Start from a Figma file**
Project Bangka has a companion Figma plugin (exists as a private repo, pre-polish) that exports tokens in W3C DTCG format and can push them directly to a GitHub repo — bypassing the Figma Variables REST API restriction that locks token export to Enterprise users. This means any Figma user, on any plan, can export their tokens into Project Bangka.

The plugin currently exports: colors, typography, spacing and other primitive tokens.
Future plugin scope: component metadata, semantic token structure.

The v1 Figma import flow is:
1. Designer installs the Project Bangka Figma plugin
2. Exports tokens to their GitHub repo (or lets Project Bangka create one)
3. Opens Project Bangka — tokens are already there, ready to build on

The plugin UX will be rough in v1. That's acceptable — do not rebuild or over-invest in the plugin until Project Bangka's own design system is established. The plugin redesign is a Phase 2 task, intentionally done using Project Bangka's own components and tokens. It becomes a showcase of what Project Bangka produces, not a prerequisite to building Project Bangka.

- REST API styles import is a secondary fallback for users who prefer not to install a plugin
- AI visual import (paste a Figma link or screenshot) is the most ambitious path, planned but not v1
- Figma Variables REST API import (Enterprise only) is a future paid-tier feature

**3. Start from a GitHub repo**
User connects an existing GitHub repo that already contains token files or component code. Project Bangka reads the registry, maps it to the W3C DTCG format if needed, and picks up where the designer left off. Best for returning users or designers migrating from another tool.

**What Claude should know:** Never design a flow that assumes one entry point is default and the others are edge cases. All three must feel equally polished and intentional.

## The Figma Standard for Getting Started

Project Bangka must be as easy to pick up as Figma. A designer should be able to go from zero to designing in under 5 minutes with no technical setup required.

**The hosted version is the primary experience.** Open a browser, start working, sign in with GitHub, and push a commit into a branch. No terminal, no npm install, no config files, no reading docs first.

Self-hosting is a power-user option — it exists but is never the default assumption. When building onboarding flows, setup screens, or first-run experiences, always design for the hosted browser experience first.

**The zero-friction checklist — Project Bangka must never require a new user to:**
- Open a terminal
- Edit a config file manually
- Understand token file formats before they can start
- Have to write JSON themselves
- Know what a pull request is to ship their first change (Project Bangka explains it in plain language)
- Pay anything for full features

GitHub auth is the one technical step — and even that should feel like "sign in with GitHub," not "configure OAuth credentials."

## GitHub Integration

GitHub is the shipping layer for everything built in Bangka — not just the design system (tokens, components), but the actual product and features the designer builds using those components. The full pipeline from sketch to working product ends with code in a real repo.

Two modes:

- **Connect to an existing repo** — the user already has a codebase (e.g. a Next.js app). They point Bangka at it. Bangka reads the repo and writes changes back as PRs — design system updates, new components, and feature implementations alike. This is for designers working on a real, in-progress product.
- **Bangka-managed repo** — the user is starting from scratch. Bangka creates and initializes a new repo with the right structure (registry, tokens, components, feature code). This is for someone building a product from the ground up inside Bangka.

In both cases, all writes happen as pull requests — never direct commits to main. Auth is via GitHub OAuth or personal access token. All GitHub API calls happen directly from the browser — no backend required.

### Constraints:
- Never store GitHub tokens in localStorage or any persistent browser storage insecurely
- Always respect GitHub API rate limits — cache aggressively, batch requests where possible
- PR descriptions must be human-readable, not just machine-generated diffs

---

# Design & Guidelines

## Design Aesthetic: Project Bangka's Own UI

Project Bangka is a **professional tool**, not a marketing site. The UI should feel like:
- Figma-level density and polish — neutral, calm, precise
- Nothing decorative that doesn't serve function
- Phosphor icons at `regular` weight for UI chrome, `fill` for active/selected states
- The design system Project Bangka uses to build itself is a living demonstration of what Project Bangka enables

For full token conventions, component rules, and aesthetic specifications — read the `bangka-design-system` skill.

## What Claude Should Always Do in This Project

- Read this skill before making any code or architecture decision
- Explain significant decisions in plain language, before implementing them
- Flag when a request would cross one of the "Project Bangka won't do" boundaries
- Default to industry-standard patterns where they exist — but recognize that Project Bangka is building a new category of tool. When a novel pattern is needed, surface it to the creator for review rather than implementing it silently. Clever is fine when it's intentional and designed together; clever is dangerous when it's buried in an implementation detail.
- When in doubt about a design or UX decision, ask — don't invent
- Treat the registry as sacred — never suggest architecture that works around it

## What Claude Should Never Do in This Project

- Generate UI that doesn't use Project Bangka's own token and component system
- Add a persistent backend or server-side state — Cloudflare Workers are allowed only to proxy AI API calls, never to store data
- Make any decision silently — always surface them
- Use a third-party component library for Project Bangka's own UI
- Store sensitive data (GitHub tokens, user data) insecurely
- Introduce framework-specific patterns into token or component output
