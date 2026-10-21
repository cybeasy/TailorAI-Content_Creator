# Article_Standards.md — Blog & Article Editorial Standards

> **Purpose:** Structural and stylistic rules for generating long-form articles, guides, and blog posts.
> Configured during Step 3 of `init-agent.md`.

---

## 1. Headline & Title Standards

### Title Rules:
- **Length:** 50–70 characters (optimal for search engine results pages).
- **Core Formula:** Every title must combine **Relevance** + **Curiosity or Concrete Benefit**.
- **Approved Patterns:**
  1. *How-To / Problem-Solver:* "How to [Achieve Desired Outcome] Without [Pain Point]"
  2. *Contrarian / Insight:* "Why Most [Industry Roles] Fail at [Topic] (And What to Do Instead)"
  3. *Data / Case Study:* "How [Action] Increased [Metric] by [X]%"
  4. *Definitive Guide:* "The Complete Guide to [Topic] for [Target Year/Role]"
- **Formatting:** Clean title case, avoid clickbait deception, and never use all-caps.

---

## 2. Excerpt & Meta Description Standards

- **Length:** 140–160 characters.
- **Components:**
  1. Hook describing the reader's core challenge.
  2. Direct statement of the solution or takeaway.
  3. Clear reading incentive.
- **Example:** *"Struggling with slow CI/CD pipelines? Discover 5 architectural patterns that cut build times by 40% without increasing cloud infrastructure costs."*

---

## 3. Article Length & Structural Blueprint

- **Standard Length:** {{ARTICLE_TARGET_LENGTH}} (Default: 1,200 – 1,800 words).
- **Required Sections:**
  - **H1:** Single, magnetic title.
  - **Hook / Lead Paragraph (50–100 words):** Start in media res. Zero fluff, zero "In this article we will explore...". Introduce a real tension or surprising metric.
  - **Executive Summary / Key Takeaways Box:** 3 bullet points highlighting what the reader will learn.
  - **H2 Sections (3 to 5 core sections):** Each answering a distinct sub-question.
  - **Sub-headings (H3):** Maximum 300 words under any single subheading to preserve scannability.
  - **Visual Elements:** Include at least one Markdown Comparison Table or Diagram or Callout Quote.
  - **Conclusion & Next Steps:** Forward-looking synthesis (never titled "Conclusion").
  - **Call to Action (CTA):** Seamless transition to {{PRIMARY_CTA}}.
