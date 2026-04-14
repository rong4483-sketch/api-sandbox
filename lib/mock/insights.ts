export type InsightCategory = "Submission" | "Report" | "Campaign";

export interface Insight {
  id: string;
  category: InsightCategory;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

export const insights: Insight[] = [
  {
    id: "ins-001",
    category: "Report",
    title: "2026 Valuation Insights Report — Commercial",
    excerpt:
      "API's annual deep-dive into the Australian commercial property market — yields, capital flows, ESG pricing, and the office sector outlook post-hybrid.",
    date: "2026-03-14",
    tags: ["Commercial", "Annual", "Flagship"],
    featured: true,
  },
  {
    id: "ins-002",
    category: "Report",
    title: "2026 Valuation Insights Report — Residential",
    excerpt:
      "National residential outlook, interest rate sensitivity analysis, rental yield trends, and off-the-plan market health.",
    date: "2026-03-14",
    tags: ["Residential", "Annual"],
  },
  {
    id: "ins-003",
    category: "Submission",
    title: "API Submission — Treasury Review of Foreign Investment Framework",
    excerpt:
      "The API's formal response to Treasury's 2026 review, calling for clearer foreign-investor valuation disclosure standards and a consistent methodology.",
    date: "2026-02-18",
    tags: ["Policy", "Regulation"],
  },
  {
    id: "ins-004",
    category: "Campaign",
    title: "Value of a Valuer — National Awareness Campaign",
    excerpt:
      "A cross-channel public campaign highlighting the role of API-certified valuers in lending, insurance, and consumer protection.",
    date: "2026-01-22",
    tags: ["Brand", "Consumer"],
  },
  {
    id: "ins-005",
    category: "Submission",
    title: "APIV Professional Indemnity Insurance — 2026 Update",
    excerpt:
      "Annual update on the Australian Property Institute Valuers scheme, policy changes, and member impact.",
    date: "2025-12-02",
    tags: ["PI Insurance", "Member Protection"],
  },
  {
    id: "ins-006",
    category: "Campaign",
    title: "Climate & Valuation — National Webinar Series",
    excerpt:
      "Six-part series exploring how Australian valuers are integrating climate risk and ESG factors into property valuation methodology.",
    date: "2025-11-10",
    tags: ["ESG", "Education"],
  },
];
