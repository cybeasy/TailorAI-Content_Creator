# TailorAI Content Creator — Architecture Blueprint & Knowledge Base

> **Master Knowledge Base:** Primary architecture documentation for the `TailorAi-Content_Creator` project.
> This is the **What + Why** reference — it documents the dual-agent architecture, the setup onboarding pipeline, the content engine structure, and design decisions.
> For **How** the agent behaves at runtime, see `AGENT_STRATEGY.md`.
> Read this file in any new session to understand the system design and decision log without re-explaining context.
> Last Updated: 2026-10-21

---

## 1. System Vision

The **TailorAI Content Creator** is an AI agent system powered by **TailorAI** ([tailorai.me](https://tailorai.me)). Unlike generic AI writers that produce repetitive, cliché-filled "AI slop", TailorAI uses a **Dual-Agent Architecture**:

1. **Setup Agent (Onboarding / Tailoring Engine):**
   - Conducts an interactive, phased interview with the client.
   - Extracts Company Identity, Audience Personas, Knowledge Base documents, and Editorial Guidelines (Headlines, Length, Tone, Dialect, Custom Directives).
   - Generates a bespoke **Brand Constitution & Knowledge Index** stored in `.tailorai/`.

2. **Tailored Content Creator Agent (Execution Engine):**
   - Operates with strict fidelity to the client's brand voice, fact-checked knowledge base, and formatting standards.
   - Executes atomic content generation (Articles, LinkedIn Thought Leadership, X/Twitter Threads, Case Studies, Newsletters).
   - Applies an active **Anti-AI Slop Guard** and **Voice Alignment Audit** before delivering content.

---

## 2. Dual-Agent Documentation Topology

| File | Scope | Question it answers | Audience |
|------|-------|----------------------|----------|
| `AGENT_BLUEPRINT.md` (this file) | Architecture & design knowledge | **What** is the system + **Why** was it built this way? | Developers & Maintainers |
| `AGENT_STRATEGY.md` | Operational behavior & decisions | **How** does the agent behave + **When** does it act? | Developers & Maintainers |
| `init-agent.md` | Onboarding & Setup Protocol (Steps 0–5) | **How is a tailored agent workspace instantiated?** | Any AI Agent running Setup |
| `.tailorai/Agent.md` | Runtime Constitution | **What rules bind the Content Creator at runtime?** | The AI Agent itself |
| `.tailorai/Brand/Brand_Voice_Identity.md` | Brand DNA & Voice Matrix | **Who are we, who do we speak to, and how?** | Content Creator Agent |
| `.tailorai/Knowledge_Base/Overview.md` | Fact & Source Index | **What are the verified facts, products, and proofs?** | Content Creator Agent |
| `.tailorai/Guidelines/*.md` | Editorial Standards | **What are the structural rules for articles & posts?** | Content Creator Agent |

---

## 3. Directory Hierarchy

```text
TailorAi-Content_Creator/
├── AGENT_BLUEPRINT.md              # Architecture & Knowledge Base (What + Why)
├── AGENT_STRATEGY.md               # Operational Behavior & Strategy (How + When)
├── init-agent.md                   # Master Setup Protocol (Steps 0–5)
├── README.md                       # Repository Documentation & Quickstart
├── Content/                        # Generated Content Repository (Created by Agent)
│   ├── Articles/                   # Long-form blog posts & SEO pillar guides (.md)
│   ├── Social/                     # LinkedIn posts & X/Twitter threads (.md)
│   ├── Newsletters/                # Email campaigns & broadcasts (.md)
│   └── Case_Studies/               # Customer case studies & breakdowns (.md)
├── .tailorai/                      # Master Governance Workspace
│   ├── Agent.md                    # Runtime Constitution for the Tailored Creator
│   ├── ACTIVE_TASKS.md             # In-flight Content Tasks Register
│   ├── PROJECT_MAP.md              # Cumulative Memory & Content Inventory
│   ├── README.md                   # Workspace Internal Index
│   ├── Brand/
│   │   ├── Brand_Voice_Identity.md # Active Brand Profile
│   │   └── Brand_Guide_Template.md # Reusable Template with Placeholders
│   ├── Knowledge_Base/
│   │   ├── Overview.md             # Knowledge Base catalog & verified stats
│   │   └── Sources/                # Uploaded client documents & references
│   ├── Guidelines/
│   │   ├── Article_Standards.md    # Blog & Article formulas, SEO, word count
│   │   ├── Social_Media_Standards.md # LinkedIn, X, Instagram, Facebook rules
│   │   └── Custom_Instructions.md  # Client-specific rules, taboos, CTAs
│   ├── Protocols/
│   │   ├── Content_Creation_Protocol.md # 6-stage drafting & review protocol
│   │   └── Onboarding_Protocol.md       # Step-by-step Setup Agent questionnaire
│   ├── Templates/
│   │   ├── Article_Template.md
│   │   ├── LinkedIn_Post_Template.md
│   │   ├── Twitter_Thread_Template.md
│   │   ├── Case_Study_Template.md
│   │   └── Newsletter_Template.md
│   ├── Skills/
│   │   ├── SEO_Optimization.md
│   │   ├── Headline_Psychology.md
│   │   └── Anti_AI_Slop.md
│   └── Audits/
│       ├── Brand_Voice_Audit.md
│       └── Fact_Check_Audit.md
```

---

## 4. Key Architectural Decisions

### Decision 1: Separation of Setup Agent from Creator Agent
- **Why:** Mixing onboarding questions with content generation leads to context drift, bloated prompts, and inconsistent tone.
- **Solution:** The **Setup Agent** runs once (or during brand updates) to curate persistent Markdown artifacts in `.tailorai/`. The **Creator Agent** reads *only* these curated files at runtime.

### Decision 2: Markdown-First System (No Scripts, Pure File Artifacts)
- **Why:** Every AI agent across every IDE (Antigravity, Cursor, Windsurf, Claude Code, ChatGPT, Gemini) can natively parse, validate, and execute Markdown protocols.
- **Output:** Every generated article or post is written directly to disk as a production-ready Markdown file inside `Content/`.

### Decision 3: Anti-AI Slop Guard as a Primary Component
- **Why:** Readers quickly detect and ignore generic AI text containing words like "delve", "tapestry", "game changer", or meaningless summaries.
- **Solution:** Dedicated skill file (`Anti_AI_Slop.md`) enforced in `.tailorai/Agent.md` that bans 30+ cliché patterns and forces original syntax and concrete examples.

### Decision 4: Persistent File System & Task Logging
- **Why:** Content marketing requires long-term memory to prevent repeating the same topics and to track publishing cadence.
- **Solution:** Every piece created in `Content/` is registered in `.tailorai/ACTIVE_TASKS.md` and indexed permanently in `.tailorai/PROJECT_MAP.md`.

---

## 5. Dynamic Placeholder Contract

When running `init-agent.md`, the following tokens are populated:

| Token | Scope | Example |
|-------|-------|---------|
| `{{COMPANY_NAME}}` | Brand Identity | "CloudGuard Technologies" |
| `{{INDUSTRY_NICHE}}` | Market Sector | "Cloud Security & DevSecOps" |
| `{{TARGET_AUDIENCE}}` | Ideal Customer Profile | "CTOs, CISOs, and Senior DevOps Engineers" |
| `{{CORE_OFFERINGS}}` | Products/Services | "Automated CSPM & Kubernetes Compliance Suite" |
| `{{VALUE_PROPOSITION}}` | Brand Promise | "Zero-friction cloud compliance in under 15 minutes" |
| `{{TONE_PILLARS}}` | Brand Voice | "Authoritative, Precise, Direct, Witty" |
| `{{DEFAULT_LANGUAGE}}` | Language / Dialect | "Modern Standard Arabic (فصحى) with English Tech Terms" |
| `{{HEADLINE_STYLE}}` | Article Titles | "Contrarian Hooks & Case-study Numbers" |
| `{{ARTICLE_TARGET_LENGTH}}` | Word Count | "1,200 – 1,600 words" |
| `{{PRIMARY_CTA}}` | Call To Action | "Book a 15-minute architecture review" |
| `{{TABOO_WORDS}}` | Forbidden Terms | "In this fast-paced world, delve, seamless, revolutionary" |
