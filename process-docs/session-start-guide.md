# Session Start Guide

How to calibrate Claude at the start of every session.

## What loads automatically

Just by opening Claude Code in the project folder, these are always active:

- **CLAUDE.md** — Orchestrator brain, project identity, routing rules
- **MEMORY.md** — Persona decisions, feedback preferences, working style

You don't need to do anything for these. They're always there.

## What to say when you start

### Default (catch up on where we left off)

> "Read the second brain skill and the worklog to catch up"

This gives Claude:
- **How** to work with you (pair partner mode, pushback expectations, preview-first writing)
- **Where** things stand (last session's progress, open threads, next steps)

### If you're doing focused work

Load only what's relevant to the session:

| Focus | What to say |
|---|---|
| Tech decisions | "Read the architecture skill" |
| Design / UX flows | "Read the personas skill and design system skill" |
| Scoping / strategy | "Read the product skill and vision skill" |
| Writing skills or agents | "Read the second brain skill" |
| Reviewing progress | "Read the worklog" |

You can combine these: *"Read the second brain, architecture, and worklog — we're building today"*

## What you should never need to re-explain

These are already persisted across sessions:

- How you like to work (second brain skill)
- Project vision and boundaries (vision skill)
- Technical stack decisions (architecture skill)

## Quick reference: skill locations

| Skill | Path | Used by |
|---|---|---|
| Second Brain | `skills/bangka-second-brain/` | Orchestrator |
| Vision | `skills/bangka-product-vision/` | Orchestrator, Product |
| Personas | `skills/bangka-personas/` | UX, Product |
| Architecture | `skills/bangka-architecture/` | Dev |
| Product | `skills/bangka-product/` | Product, UX |
| Design System | `skills/bangka-design-system/` | UX, Dev |
| Registry Spec | `skills/bangka-registry-spec/` | Dev |
| Component Rules | `skills/bangka-component-rules/` | Dev, UX |
| PRD Translation | `skills/bangka-prd-translation/` | UX |
| GitHub Patterns | `skills/bangka-github-patterns/` | Dev |
| Process | `skills/bangka-process/` | Process, Orchestrator |
| Worklog | `skills/bangka-worklog/` | Historian, Process |
