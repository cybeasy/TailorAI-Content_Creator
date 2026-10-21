# init-agent.md — TailorAI Content Creator Onboarding & Setup Protocol

> **Master Setup Protocol:** Use this document to initialize the `.tailorai/` Content Creator governance workspace for any company or client.
> Contains 6 numbered steps (0 to 5). Execute step-by-step: prompt the AI Agent with **"Read `init-agent.md` and execute Step X"**.

---

## 🎯 How to Use

1. Open an AI Agent session in this repository.
2. Instruct the Agent: **"Read `init-agent.md` and execute Step 0"**.
3. The Setup Agent will guide you through the 6-stage tailoring process:
   - **Step 0:** Discovery & Setup Mode Check
   - **Step 1:** Company & Brand Identity Capture
   - **Step 2:** Knowledge Base Ingestion (Documents, URLs, Offerings)
   - **Step 3:** Standard Content Guidelines Q&A (Titles, Descriptions, Length, Tone, Dialect)
   - **Step 4:** Custom Directives & Constraints (Taboo phrases, CTAs, Edge cases)
   - **Step 5:** Persona Synthesis & Tailored Agent Activation

---

## Step 0: Pre-flight Discovery & Mode Check

### Objective:
Verify workspace readiness, introduce the Setup Agent, and explain the onboarding journey to the client.

### Execution Instructions:
1. **Welcome the Client:** Greet the user in their preferred language (Arabic/English) and explain that this session will configure their dedicated, custom AI Content Creator Agent.
2. **Explain the Roadmap:** Outline the 5 sequential steps:
   - 🏢 **Step 1:** Company & Brand Profile
   - 📚 **Step 2:** Knowledge Base & Reference Materials
   - ✍️ **Step 3:** Standard Content Structure & Voice Q&A
   - 🛡️ **Step 4:** Special Instructions & Guardrails
   - 🚀 **Step 5:** Final Synthesis & Activation
3. **Ask the Client:** "Are you ready to begin with Step 1 (Company & Brand Identity)?"

### Deliverable:
- Confirmed client readiness and language preference.

---

## Step 1: Company & Brand Identity Capture

### Objective:
Collect core business information to establish the foundation of the client's brand.

### Execution Instructions:
Prompt the client with the following questions (or extract them from existing files if provided):
1. **Company / Brand Name:** What is the legal/trade name of the business or personal brand?
2. **Industry & Niche:** What sector do you operate in? (e.g., B2B SaaS, Cybersecurity, E-commerce, Real Estate, Health, EdTech).
3. **What You Offer:** Briefly describe your core products or services.
4. **Target Audience (Ideal Customer Profile):** Who are we writing for?
   - Demographics (B2B executives, developers, consumers, students)
   - Key pain points they want solved
   - Goals and aspirations
5. **Brand Mission & Positioning:** What makes your brand unique compared to competitors? What is your core value promise?

### Deliverable:
- Draft values for `.tailorai/Brand/Brand_Voice_Identity.md`.

---

## Step 2: Knowledge Base Ingestion & Document Indexing

### Objective:
Ingest client documentation, product sheets, and background context so the agent writes with factual authority.

### Execution Instructions:
The Setup Agent supports **three flexible ingestion paths** depending on what the client provides:

#### 🌐 Path A: Website URL Provided (رابط موقع إلكتروني)
If the user provides a company or product URL (e.g. `https://mycompany.com`):
1. **Fetch & Analyze Content:** Use web reading tools (e.g., `read_url_content` or HTTP GET) to inspect the homepage, About page, Features/Products, and FAQ.
2. **Extract Key Components:**
   - Exact value proposition & slogan.
   - Core products, features, and capabilities.
   - Verified customer statistics, proof points, or case studies.
   - Pricing models and target audience signals.
3. **Write to Knowledge Base:** Synthesize directly into `.tailorai/Knowledge_Base/Overview.md`.

#### 📄 Path B: Files & Documents Provided (ملفات ومستندات)
If the user uploads or places files in `.tailorai/Knowledge_Base/Sources/` (PDFs, Word docs, pitch decks, FAQs, raw notes):
1. **Inspect & Extract:** Read files using file reading tools.
2. **Catalog Findings:** Extract technical specifications, verified metrics, customer quotes, and product feature tables.
3. **Archive & Index:** Store sources in `.tailorai/Knowledge_Base/Sources/` and index summaries in `.tailorai/Knowledge_Base/Overview.md`.

#### 💡 Path C: Keyword or Short Concept Provided (مجرد كلمة أو فكرة مبسطة)
If the client only has a brief idea or keyword (e.g., *"وكيل ذكاء اصطناعي للرد على العملاء على ماسنجر"* or *"SaaS Cloud Security"*):
1. **Autonomous Knowledge Scaffolding:**
   - Analyze the niche: extract standard industry problems, typical buyer personas, and critical pain points.
   - Synthesize a comprehensive baseline draft in `.tailorai/Knowledge_Base/Overview.md` with recommended core features and common customer objections.
2. **Interactive Validation Gate:**
   - Present the drafted facts to the client: *"بناءً على تخصصكم في [الكلمة/المجال]، قمت بصياغة مصفوفة المعرفة التالية (الميزات، القيمة، المشكلات التي نحلها)... هل توافق عليها أم تحب نعدل أي أرقام أو تفاصيل محددة؟"*

### Deliverable:
- Thoroughly populated `.tailorai/Knowledge_Base/Overview.md` with indexed sources and verified facts.

---

## Step 3: Standard Content Guidelines Q&A

### Objective:
Structure the general editorial standards via a guided Q&A checklist.

### Execution Instructions:
Ask the client the following structured questions:

#### 1. Headlines & Hooks:
- **Style:** Which headline formulas do you prefer?
  - A) Value-driven / How-To (e.g., "How to Secure Your Cloud in 5 Steps")
  - B) Contrarian / Pattern-interrupt (e.g., "Why Most Cybersecurity Advice is Dead Wrong")
  - C) Direct & Educational (e.g., "The Complete Guide to Modern Zero-Trust Architecture")
  - D) Data & Case-study driven (e.g., "How Company X Cut Cloud Waste by 42%")
- **Formatting:** Do you want numbers in titles? Subheadings? Capitalization rules?

#### 2. Description & Excerpt:
- Should each article include a concise meta description / summary?
- Target length (e.g., 140–160 characters for SEO, or 2–3 sentence executive hook)?

#### 3. Content Length & Depth:
- **Short-form Posts (Social):** 100–250 words (LinkedIn / Facebook).
- **Medium Articles:** 800–1,200 words (Standard blog post / guide).
- **Long-form Pillar Pieces:** 1,800–3,000+ words (Deep dives, whitepapers).
- What is your default target length for primary articles?

#### 4. Tone of Voice:
- Select your primary tone combination:
  - [ ] **Authoritative & Expert** (Professional, data-backed, confident)
  - [ ] **Conversational & Friendly** (Warm, approachable, peer-to-peer)
  - [ ] **Inspiring & Visionary** (Bold, motivational, forward-looking)
  - [ ] **Educational & Clear** (Step-by-step, simplified, zero jargon)
  - [ ] **Witty & Energetic** (Sharp, humorous, engaging)

#### 5. Language & Dialect:
- Which language and dialect should the agent default to?
  - **Modern Standard Arabic (فصحى معاصرة):** Smooth, elegant, accessible across the Arab world.
  - **Egyptian Arabic (لهجة مصرية رصينة/ودودة):** High engagement for social media.
  - **Gulf Arabic (خليجي):** Tailored for GCC markets.
  - **English (US / UK):** Global tech / business tone.
  - **Bilingual / Arabizi / Tech-Arabic:** Arabic with English technical terms retained.

### Deliverable:
- Populated `.tailorai/Guidelines/Article_Standards.md` and `.tailorai/Guidelines/Social_Media_Standards.md`.

---

## Step 4: Custom Directives & Special Guardrails

### Objective:
Capture the client's unique rules, taboo phrases, CTAs, and edge-case preferences.

### Execution Instructions:
Ask the client:
1. **Forbidden Words & Taboo Phrases:**
   - Are there specific words or clichés you NEVER want to see?
   - *(Default AI anti-slop: "In this digital era", "delve into", "tapestry", "revolutionize", "game-changer", empty superlatives).*
2. **Calls to Action (CTAs):**
   - What is the primary CTA? (e.g., "Book a demo at example.com", "Sign up for our newsletter", "Leave a comment below", "Contact our sales team").
3. **Competitor & Industry Rules:**
   - How should competitors be handled? (Never mention, mention neutrally, contrast features).
4. **Any Other Special Requests:**
   - Emoji usage (None / Subtle & professional / Frequent)?
   - Formatting quirks (Bullet point styles, bolding frequency, short 1-line paragraphs)?

### Deliverable:
- Populated `.tailorai/Guidelines/Custom_Instructions.md`.

---

## Step 5: Persona Synthesis, Activation & Setup Cleanup

### Objective:
Compile all collected data into the runtime `.tailorai/Agent.md` constitution, activate the Content Creator, and clean up the setup folder/files so only `.tailorai/` and `Content/` remain in the user's workspace.

### Execution Instructions:
1. **Synthesize `.tailorai/Agent.md`:**
   - Embed the Company Profile, Brand Voice, Editorial Rules, and Knowledge Base references.
   - Inject the Anti-AI Slop filter and verification protocols.
2. **Update `.tailorai/PROJECT_MAP.md`:**
   - Log the newly created brand profile and initialized guidelines.
3. **Present the Activation Report:**
   - Summary of the configured agent persona.
   - Sample generated Hook & Intro for an article on the client's core topic.
4. **Setup Cleanup & Handover (تنظيف مجلد الإعداد):**
   - **If setup was executed from a target project root** (where `TailorAi-Content_Creator/` was cloned as an installer folder):
     - Ensure `.tailorai/` and `Content/` exist at the target project root.
     - Automatically remove the temporary setup folder:
       ```bash
       rm -rf TailorAi-Content_Creator/
       ```
   - **If setup was executed directly inside this workspace root:**
     - Remove the setup onboarding protocol:
       ```bash
       rm -f init-agent.md
       ```
   - Confirm to the client:
     > *"✅ تم تفعيل وكيل صناعة المحتوى بنجاح، وتم تنظيف ملفات الإعداد بالكامل. مشروعك الآن يحتوي فقط على مجلد الوكيل الخاص بك `.tailorai/` ومجلد المخرجات `Content/`."*
5. **Confirmation & Next Action:**
   - Prompt: **"Your TailorAI Content Creator is now active and tailored to your brand! Would you like to generate your first article or social post in `Content/`?"**

### Deliverable:
- Fully operational, tailored AI Content Creator Agent with a clean repository containing only `.tailorai/` and `Content/`.
