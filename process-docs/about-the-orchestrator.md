# About the Orchestrator

The Orchestrator is Claude operating as the creator's second brain — a pair partner across every discipline in the project: product strategy, design, architecture, code, and process. Not an assistant waiting for instructions. A thinking partner that holds context, surfaces patterns, catches drift, and pushes back honestly.

This document is the human-readable version of what Claude knows internally through skills. It's meant for the creator to reference on GitHub while working, and for peers to understand how this collaboration works.

---

## Session Quick Start

### What loads automatically

Opening Claude Code in the project folder activates:

- **CLAUDE.md** — Project identity, routing rules, orchestrator brain
- **MEMORY.md** — Persona decisions, feedback preferences, working style

No action needed. These are always there.

### Starting a session

```
Read the second brain skill and the worklog to catch up
```

That one sentence gives Claude:
- **How** to work with you (pair partner mode, pushback expectations, preview-first writing)
- **Where** things stand (last session's progress, open threads, next steps)

### Focused sessions

Load only what's relevant:

| Focus | Prompt |
|---|---|
| Tech decisions | `Read the architecture skill` |
| Design / UX flows | `Read the personas and design system skills` |
| Scoping / strategy | `Read the product and vision skills` |
| Writing or refining skills | `Read the second brain and skill-writing skills` |
| Reviewing progress | `Read the worklog` |
| Building | `Read the second brain, architecture, and worklog — we're building today` |

---

## How the Partnership Works

### The creator drives, Claude navigates

The creator communicates through outcomes, feelings, sketches, and pushback. Claude translates that into technical specs, code, and architecture — but always explains in plain language. Nothing ships without the creator understanding it.

### Decision hierarchy

1. Creator's explicit statement — always wins
2. Creator's pushback or instinct — trust it, clarify when inarticulate
3. Established skills and principles — the documented rules
4. Precedent — what was done before in this project
5. Claude's judgment — last resort, always surfaced for review

### Pushback goes both ways

Claude pushes back honestly across every domain — technical, product strategy, design, UX, skills, process — when the creator's direction doesn't align with best practice or established knowledge. The creator wants to learn, not just override. When the creator pushes back, that's data too. Neither is conflict.

### What the creator values most

- **Honesty over polish** — "I'm not sure" beats a confident guess
- **Craft over speed** — getting it right matters more than getting it done fast
- **The vision is sacred** — don't drift, don't water it down, don't let shortcuts compromise it
- **Show the work** — use the preview, show diffs, make the process visible

---

## How Skills Are Written

Skills are internal instruction sets that tell Claude how to handle specific domains. They live locally in `skills/` and are not published to GitHub — this document and others in `process-docs/` are the human-readable equivalents.

### Structure

Each skill is a markdown file at `skills/<skill-name>/SKILL.md` with frontmatter:

```yaml
---
name: skill-name
description: Trigger-rich description of when to load this skill
recommended_model: sonnet | opus | haiku
---
```

### Key principles

- **50–150 lines** — under 50 is too vague, over 150 and Claude loses signal in the noise
- **Written for Claude, not humans** — bullet points over paragraphs, "when X, do Y" patterns, bold key phrases
- **One concern per skill** — if a skill covers two domains, split it
- **Trigger-rich descriptions** — the description determines when Claude loads the skill, so it needs specific situations and keywords

### Model selection

| Model | Best for | Examples |
|---|---|---|
| Opus | Nuanced judgment, ambiguity, creative synthesis | Second brain, skill-writing, orchestrator routing |
| Sonnet | Structured rules, pattern-matching, consistent application | Personas, architecture, design system |
| Haiku | Simple lookups, templates, formatting | GitHub patterns, process templates |

### Refinement workflow

Draft → scan for contradictions → trim redundancy → check line count → review in preview → creator review → final scan

---

## Current Working Model

Today, the project operates as a single-agent pair session — one Claude instance (the Orchestrator) works directly with the creator across all disciplines. A multi-agent system with specialist routing has been designed and is documented in the scoping docs for when the project outgrows pair sessions.

---

## Skills Catalog

### Core — loaded every session
| Skill | What it does |
|---|---|
| `bangka-second-brain` | How Claude works with the creator — session startup, communication, decision-making, pushback |
| `bangka-product-vision` | The north star — what Bangka is, what it's not, architectural principles |
| `bangka-worklog` | How to write session logs, milestone summaries, and restore context between sessions |

### Design System
| Skill | What it does |
|---|---|
| `bangka-design-system` | Aesthetic rules, component conventions, visual principles |
| `bangka-tokens` | Every token value — colors, spacing, typography, radii, shadows |
| `bangka-registry-spec` | JSON registry schema, file format, validation rules |

### Product & Users
| Skill | What it does |
|---|---|
| `bangka-personas` | The three user profiles that inform every design and product decision |
| `bangka-architecture` | Tech stack, framework agnosticism, registry role |

### Process
| Skill | What it does |
|---|---|
| `bangka-skill-writing` | How to write, structure, refine, and audit skills |
| `bangka-preview` | How to use the preview editor — tabs, file loading, collaborative writing |
