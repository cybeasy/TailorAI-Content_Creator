<div align="center">

# TailorAI Content Creator Workspace

### Turn any AI agent into an elite, brand-tailored Content Creator & Editorial Team.

[![Powered by TailorAi.me](https://img.shields.io/badge/powered%20by-TailorAi.me-0891b2.svg)](https://tailorai.me)
[![Status](https://img.shields.io/badge/status-ready-success.svg)](#)
[![Language](https://img.shields.io/badge/language-Arabic%20%7C%20English-0891b2.svg)](#)
[![Stack](https://img.shields.io/badge/stack-Markdown%20%2B%20Web%20Studio-6d28d9.svg)](#)
[![IDE](https://img.shields.io/badge/IDE-all%20supported-blueviolet.svg)](#)
[![LLM](https://img.shields.io/badge/LLM-all%20models-10b981.svg)](#)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

</div>

---

## 📖 Overview

**TailorAI Content Creator** is a complete, dual-agent editorial system designed by **TailorAI** ([tailorai.me](https://tailorai.me)). It solves the biggest problem with generic AI-generated content: **repetitive, robotic "AI slop" that lacks brand personality, verified facts, and authentic human voice.**

The workspace combines two dedicated agent layers:

1. 🛠️ **The Setup Agent (Onboarding Engine):** An interactive interviewer that asks the client about their company, ingests their knowledge base documents, captures standard editorial rules (headline formats, lengths, tones, languages), and captures custom directives/taboos. It automatically synthesizes a bespoke `.tailorai/` brand governance workspace.
2. ✍️ **The Content Creator Agent (Execution Engine):** A disciplined writer bound by the synthesized brand constitution (`.tailorai/Agent.md`). It crafts high-CTR SEO articles, thought-provoking LinkedIn posts, viral X/Twitter threads, case studies, and email newsletters with active anti-slop filters.

Included alongside the Markdown-first workspace is an **Interactive Web Studio** that allows clients to run the setup wizard visually and generate content in real time.

---

## 🚀 The 4-Phase Guided Setup Flow

```
┌────────────────────────────────────────────────────────┐
│               PHASE 1: COMPANY & BRAND IDENTITY        │
│   Company name, industry niche, value proposition,     │
│   and target audience personas.                        │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│               PHASE 2: KNOWLEDGE BASE INGESTION        │
│   Client documentation, product catalogs, verified     │
│   statistics, and customer proof points.               │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│               PHASE 3: CONTENT GUIDELINES Q&A          │
│   Headline styles, meta description rules, target      │
│   lengths, tone matrix, and language/dialect.          │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│               PHASE 4: CUSTOM DIRECTIVES & SYNTHESIS   │
│   Forbidden words (Anti-Slop), primary CTAs,           │
│   special formatting, and Agent.md activation!         │
└────────────────────────────────────────────────────────┘
```

---

## 🛠️ Quickstart

Works with **Antigravity**, **Cursor**, **Windsurf**, **Claude Code**, or **ChatGPT**:

### Step 1: Run the Onboarding Setup Agent
Instruct your AI agent:
```text
Read init-agent.md and execute Step 0
```
Follow the step-by-step questionnaire. The Setup Agent will ingest your knowledge base, record your brand voice, and write out your tailored [`.tailorai/Agent.md`](file://.tailorai/Agent.md).

### Step 2: Request Your First Content Piece
Ask the Content Creator Agent to write any piece:
```text
Write a 1,500-word SEO article about: [your topic]
```
The agent automatically:
- Reads your brand guidelines and knowledge base facts.
- Strips any AI clichés using the Anti-Slop filter.
- Writes the article directly to [`Content/Articles/YYYY-MM-DD-[slug].md`](file://Content/Articles/).
- Logs the delivery in [`.tailorai/PROJECT_MAP.md`](file://.tailorai/PROJECT_MAP.md).

---

## 🗂️ Workspace Architecture

```text
TailorAi-Content_Creator/
├── AGENT_BLUEPRINT.md              # What & Why (Architecture & Design Decisions)
├── AGENT_STRATEGY.md               # How & When (Runtime Operational Behavior)
├── init-agent.md                   # Master 6-Phase Onboarding Protocol
├── README.md                       # This documentation
├── Content/                        # Generated Content Repository (Output Files)
│   ├── Articles/                   # Long-form blog posts & SEO pillar guides (.md)
│   ├── Social/                     # LinkedIn posts & X/Twitter threads (.md)
│   ├── Newsletters/                # Email campaigns & broadcasts (.md)
│   └── Case_Studies/               # Customer case studies & breakdowns (.md)
├── .tailorai/                      # Tailored Governance Directory
│   ├── Agent.md                    # Runtime Constitution for Content Creator
│   ├── ACTIVE_TASKS.md             # In-flight content generation register
│   ├── PROJECT_MAP.md              # Master directory of brand assets & archive
│   ├── Brand/                      # Brand voice, persona & tone matrix
│   ├── Knowledge_Base/             # Document storage & verified facts catalog
│   ├── Guidelines/                 # Editorial standards (Articles, Social, Custom)
│   ├── Protocols/                  # Standard operating procedures
│   ├── Templates/                  # Skeletons for Articles, LinkedIn, Twitter, etc.
│   ├── Skills/                     # Anti-AI Slop, Headlines, SEO skills
│   └── Audits/                     # Quality & Fact-check assurance checklists
```

---

## 🛡️ Anti-AI Slop Quality Guarantee

Every article generated through TailorAI passes an automated anti-slop audit:
- 🚫 **Banned Clichés:** Zero instances of *"In this digital era"*, *"delve into"*, *"rich tapestry"*, *"game changer"*, or *"robust solution"*.
- 🎯 **No Throat-Clearing:** The article starts immediately with tension, insight, or data.
- 🎵 **Rhythmic Sentence Variety:** Short punchy sentences balanced with analytical depth.
- 📊 **Factual Grounding:** Every feature and metric is cross-referenced with `.tailorai/Knowledge_Base/Overview.md`.

---

## 📄 License

MIT License. Designed with excellence for **[TailorAi.me](https://tailorai.me)**.
