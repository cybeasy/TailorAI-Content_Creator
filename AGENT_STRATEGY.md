# AGENT_STRATEGY.md — Operational Strategy & Behavior Reference

> **Master Behavior Reference:** This document defines *how* the AI Agents behave, reason, and make editorial decisions inside `TailorAi-Content_Creator`.
> It is the behavioral counterpart to `AGENT_BLUEPRINT.md` (which defines *what* the system is and *why* it was built that way).
>
> **Audience:** Developers and AI maintainers refining the agent behavior.
> Last Updated: 2026-10-21

---

## 1. Dual-Agent Operational Division

The system operates strictly with two distinct agent roles:

```
┌────────────────────────────────────────────────────────┐
│                   STAGE 1: SETUP AGENT                 │
│               (Triggered via init-agent.md)            │
├────────────────────────────────────────────────────────┤
│  1. Interview Client (Company, Industry, Audience)     │
│  2. Ingest Knowledge Base (Decks, Whitepapers, FAQs)   │
│  3. Standard Guidelines Q&A (Hooks, Length, Tone)      │
│  4. Special Directives (Taboos, CTAs, Edge Cases)      │
│  5. Synthesize .tailorai/ Configuration Artifacts      │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│              STAGE 2: CONTENT CREATOR AGENT            │
│                 (Governed by Agent.md)                 │
├────────────────────────────────────────────────────────┤
│  • Reads Brand Voice & Knowledge Base                  │
│  • Generates high-impact, tailored articles & posts    │
│  • Enforces Anti-AI Slop & Fact-Check Audits           │
│  • Formats for target channels (SEO, LinkedIn, X, etc.)│
└────────────────────────────────────────────────────────┘
```

---

## 2. Core Strategic Pillars

| # | Pillar | Strategic Intent | Enforced In |
|---|--------|------------------|-------------|
| 1 | **Context Discipline** | Load only the relevant brand guideline and template per task. Avoid sending unrelated documents to preserve prompt clarity. | `Agent.md` §2 |
| 2 | **Factual Anchoring** | Ground claims in the client's `.tailorai/Knowledge_Base/`. Never hallucinate statistics or partner logos. | `Agent.md` §3 |
| 3 | **Anti-AI Slop Mandate** | Strip out filler phrases, predictable transitions, and synthetic sentence patterns. Write with human punch. | `Skills/Anti_AI_Slop.md` |
| 4 | **Audience Resonance** | Every sentence must directly speak to the target reader's specific pain point, goal, or curiosity. | `Brand/Brand_Voice_Identity.md` |
| 5 | **Platform-Native Formatting** | Format articles with clean H2/H3s and tables; format LinkedIn with white-space and punchy hooks; format X threads with numbered nuggets. | `Guidelines/Social_Media_Standards.md` |

---

## 3. Content Generation Decision Tree

For every content request, the Content Creator Agent executes this exact pipeline:

```
CONTENT REQUEST RECEIVED
        │
        ▼
[1] Scope & Intent Check
    - What is the topic, target platform, and primary goal?
    - If underspecified, clarify the target audience or angle.
        │
        ▼
[2] Context Retrieval
    - Load .tailorai/Brand/Brand_Voice_Identity.md (Tone, Vocabulary)
    - Scan .tailorai/Knowledge_Base/Overview.md (Matching products, facts, case studies)
    - Load specific template from .tailorai/Templates/
        │
        ▼
[3] Hook & Angle Construction
    - Draft 3 high-impact hooks using .tailorai/Skills/Headline_Psychology.md
    - Outline key narrative sections with clear takeaways.
        │
        ▼
[4] Drafting & Voice Injection
    - Write draft adopting brand persona and tone pillars.
    - Anchor core arguments with real examples from Knowledge Base.
        │
        ▼
[5] Editorial & Anti-Slop Audit
    - Run .tailorai/Skills/Anti_AI_Slop.md filter.
    - Check .tailorai/Guidelines/Custom_Instructions.md for taboo words and required CTAs.
        │
        ▼
[6] Final Delivery & Social Repurposing
    - Deliver complete publication-ready content with metadata.
    - Present optional companion posts (e.g. LinkedIn teaser or Twitter thread).
```

---

## 4. Anti-AI Writing Playbook

The agent systematically identifies and replaces the following common AI writing defects:

| AI Cliché Pattern | Why it Fails | Required Alternative |
|-------------------|--------------|----------------------|
| *"In today's fast-paced digital world..."* | Generic filler, zero value. | Start immediately in media res with a problem or surprising stat. |
| *"Delve into / Tapestry / Beacon"* | Dead giveaways of lazy LLM text. | Use everyday strong verbs: "analyze", "examine", "build", "break down". |
| *"It is important to remember that..."* | Condescending passive throat-clearing. | State the assertion directly. |
| Parallel adjective triplets (*"robust, scalable, and seamless"*) | Predictable rhythm readers skim over. | Choose the single most accurate adjective, or provide a metric. |
| *"In conclusion / Summary"* endings | School essay relic that kills momentum. | End with a definitive forward-looking thought or direct CTA. |

---

## 5. Dialect & Bilingual Handling

When producing Arabic content:
- **Default:** Clean, fluent Modern Standard Arabic (*فصحى معاصرة*) that avoids archaic grammar and awkward literal translations from English.
- **English Terminology:** Technical concepts (e.g., *DevOps, Zero-Trust, SaaS, Conversion Rate, Pipeline*) should be either kept in English or transliterated with clear contextual explanation, never awkwardly over-translated.
- **Social Adaptability:** For informal platforms or specific regional campaigns, the agent switches to prestigious Egyptian or Gulf phrasing based on the client's `Brand_Voice_Identity.md`.
