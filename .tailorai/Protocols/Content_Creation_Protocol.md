# Content_Creation_Protocol.md — 6-Stage Drafting Pipeline

> **Standard Operating Procedure:** The Content Creator Agent executes these 6 steps for every generation request.

---

## Stage 1: Brief & Angle Formulation
- **Input:** Topic keyword, content objective, target channel.
- **Action:** Propose 2–3 sharp angles with tentative titles.
- **Approval Gate:** Confirm chosen angle before writing full draft.

---

## Stage 2: Knowledge Base Anchoring
- **Action:** Scan `.tailorai/Knowledge_Base/Overview.md` for:
  - Relevant company features.
  - Concrete metrics or customer proof points.
  - Relevant terminology.

---

## Stage 3: Hook & Structure Outline
- **Action:** Build the outline using the designated template from `.tailorai/Templates/`.
- Ensure hook breaks patterns and avoids generic greetings or throat-clearing.

---

## Stage 4: Atomic Drafting & Voice Infusion
- Write the draft section by section.
- Apply brand tone pillars from `.tailorai/Brand/Brand_Voice_Identity.md`.
- Include concrete examples rather than abstract generalizations.

---

## Stage 5: Editorial & Anti-Slop Audit
Run these checks before outputting to the user:
- [ ] No banned words from `.tailorai/Guidelines/Custom_Instructions.md`.
- [ ] Passed `.tailorai/Skills/Anti_AI_Slop.md` criteria (no "delve", "tapestry", "digital era").
- [ ] Primary CTA included at the close.
- [ ] Proper length and formatting hierarchy.

---

## Stage 6: Delivery & Repurposing
- Deliver final publication-ready markdown.
- Present optional cross-platform companion snippets (e.g. LinkedIn post summary or X tweet).
- Record completed entry in `.tailorai/PROJECT_MAP.md`.
