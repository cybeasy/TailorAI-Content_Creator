# Onboarding_Protocol.md — Setup Agent Interview Script & Logic

> **Purpose:** Detailed question flows, branch logic, and validation checks executed by the Setup Agent during client onboarding.

---

## Stage 1: Brand & Company Identity Flow

### Prompt 1.1: Company & Legal Identity
> *"Welcome! Let's build your dedicated AI Content Creator. First, what is the official name of your company or brand, and what website or link represents you best?"*
- **Validation:** Ensure company name is recorded.

### Prompt 1.2: Industry & Value Proposition
> *"In 2-3 sentences, what industry do you operate in, and what core problem do you solve for your customers?"*
- **Validation:** Identify industry sector and core value proposition.

### Prompt 1.3: Target Audience (ICP)
> *"Who is your primary target reader or customer? (e.g. B2B founders, technical developers, marketing managers, everyday consumers) What is their biggest headache right now?"*
- **Validation:** Define target reader profile and pain points.

---

## Stage 2: Knowledge Base & Ingestion Flow

### Prompt 2.1: Reference Materials
> *"To ensure your Content Creator writes with authentic authority and exact product knowledge, do you have any documentation, pitch decks, whitepapers, or website pages to reference? You can upload files or paste text/links here."*
- **Action:** Read files placed in `Knowledge_Base/Sources/` or parse provided snippets into `Knowledge_Base/Overview.md`.

### Prompt 2.2: Proof Points & Numbers
> *"Are there any verified metrics, customer statistics, or flagship features you want your agent to highlight? (e.g. 'Saved clients 30%', 'Over 5,000 customers', 'Proprietary AI engine')?"*
- **Action:** Record in `Knowledge_Base/Overview.md` §3.

---

## Stage 3: Content Guidelines Q&A Flow

### Prompt 3.1: Headline Style
> *"When it comes to article titles, which style resonates most with your brand?*
> 1. *Direct & Educational (e.g. 'How to Build X in 5 Steps')*
> 2. *Contrarian & Thought Leadership (e.g. 'Why Most Founders Fail at X')*
> 3. *Data & Case Study (e.g. 'How We Scaled from 0 to 10k Users')*
> 4. *A balanced mix depending on the platform"*

### Prompt 3.2: Content Length & Depth
> *"What is your preferred default length for articles?*
> - *A) Quick reads (600–800 words)*
> - *B) Standard industry guides (1,200–1,500 words)*
> - *C) In-depth pillar guides (2,000+ words)*
> *And for social media (e.g., LinkedIn / Twitter), do you prefer short punchy insights or long narrative stories?"*

### Prompt 3.3: Tone of Voice & Dialect
> *"How should your brand voice feel to readers? (e.g., Authoritative, Friendly, Witty, Academic, Inspirational). And what language/dialect do you want as default? (e.g. Modern Standard Arabic فصحى, Egyptian مصري, Gulf خليجي, English)?"*

---

## Stage 4: Special Instructions & Edge Cases

### Prompt 4.1: Taboo Words & Guardrails
> *"Are there any forbidden words, buzzwords, or competitor names your agent should NEVER use?"*

### Prompt 4.2: Call to Action (CTA)
> *"What is the main action you want readers to take at the end of an article or post? (e.g. Book a discovery call, join the newsletter, comment, visit a link)?"*

---

## Stage 5: Synthesis & Review Gate

### Action:
1. Synthesize all answers into:
   - `.tailorai/Brand/Brand_Voice_Identity.md`
   - `.tailorai/Knowledge_Base/Overview.md`
   - `.tailorai/Guidelines/Article_Standards.md`
   - `.tailorai/Guidelines/Social_Media_Standards.md`
   - `.tailorai/Guidelines/Custom_Instructions.md`
   - `.tailorai/Agent.md`
2. Present a sample generated title and hook for user approval.
3. Mark `.tailorai/PROJECT_MAP.md` as Configured!
