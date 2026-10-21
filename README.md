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

### Method 1: Markdown-First via Any AI Agent / IDE
Works with **Antigravity**, **Cursor**, **Windsurf**, **Claude Code**, or **ChatGPT**:
1. Open this workspace in your favorite IDE.
2. Tell your AI Agent:
   ```text
   Read init-agent.md and execute Step 0
   ```
3. Answer the step-by-step interview. The agent will populate `.tailorai/` and activate your tailored Content Creator!
4. Request your first content piece:
   ```text
   Write a 1,200-word SEO article explaining how our solution solves [problem]
   ```

---

### Method 2: Launch the Interactive Web Studio
Prefer a visual dashboard? Launch the included local web studio:

```bash
# Option A: Using Node.js
node web/server.js

# Option B: Using Python
python3 -m http.server 3050 --directory web/
```
Open **`http://localhost:3050`** in your browser to experience the 4-step Setup Wizard and real-time Content Studio.

---

## 🗂️ Workspace Architecture

```text
TailorAi-Content_Creator/
├── AGENT_BLUEPRINT.md              # What & Why (Architecture & Design Decisions)
├── AGENT_STRATEGY.md               # How & When (Runtime Operational Behavior)
├── init-agent.md                   # Master 6-Phase Onboarding Protocol
├── README.md                       # This documentation
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
└── web/                            # Interactive Web Studio (Vanilla HTML/CSS/JS)
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
