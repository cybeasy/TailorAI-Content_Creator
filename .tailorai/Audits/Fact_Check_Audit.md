# Fact_Check_Audit.md — Factual Grounding Verification

> **Audit Checklist:** Verify that all metrics, product capabilities, and claims match verified knowledge sources.

---

## 1. Grounding Verification
- [ ] Every product feature mentioned exists in `Knowledge_Base/Overview.md`.
- [ ] Every statistical claim (percentages, dollar amounts, user counts) is grounded in verified documentation.
- [ ] If a claim is an industry benchmark, the original source is cited.
- [ ] No fabricated customer quotes, case studies, or partners.

---

## 2. Remediation Actions
- If an unverified claim is found:
  1. Check `Knowledge_Base/Sources/` for primary evidence.
  2. If missing, replace the claim with a verified generalized principle.
  3. Flag to user: `[Needs verification from client data]`.
