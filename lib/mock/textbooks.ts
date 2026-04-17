export interface Textbook {
  slug: string;
  title: string;
  authors: string;
  price: number;
  year: number;
  format: string;
  audience: string;
  description: string;
}

export const textbooks: Textbook[] = [
  {
    slug: "rural-valuations",
    title: "Rural Valuations",
    authors: "Prof. James Baxter & Ralph Cohen",
    price: 156,
    year: 2023,
    format: "Hardcover · 512pp",
    audience: "Rural valuers, property investors, lawyers, students",
    description: "The definitive Australian reference on rural valuation. Covers productive capacity, market analysis and ownership patterns. Both authors are recipients of the API's S.F. Whittington Medal.",
  },
  {
    slug: "valuation-principles-australia",
    title: "Valuation Principles & Practice: Australia",
    authors: "API Editorial Panel",
    price: 189,
    year: 2024,
    format: "Hardcover · 640pp",
    audience: "Undergraduate & CPV candidates",
    description: "The foundation text for Australian valuation practice. Aligned to the API's Valuation Protocols and the latest IVS. Required reading for several API-accredited university programs.",
  },
  {
    slug: "statutory-valuation-australia",
    title: "Statutory Valuation in Australia",
    authors: "M. Kay LFAPI (ed.)",
    price: 172,
    year: 2024,
    format: "Softcover · 380pp",
    audience: "Government valuers, statutory valuation practitioners",
    description: "Comprehensive treatment of statutory valuation across state and territory regimes, including Just Terms Acquisition, rating, taxing and compulsory acquisition.",
  },
  {
    slug: "commercial-property-valuation",
    title: "Commercial Property Valuation",
    authors: "G. Sugars OAM",
    price: 198,
    year: 2024,
    format: "Hardcover · 576pp",
    audience: "Commercial valuers, analysts, students",
    description: "Income, cost, and sales comparison approaches applied to Australian commercial property. Extensive case studies on office, retail, industrial and specialised assets.",
  },
  {
    slug: "esg-and-property",
    title: "ESG & Property: A Practitioner's Guide",
    authors: "Dr G. Warren-Myers FAPI",
    price: 145,
    year: 2025,
    format: "Softcover · 310pp",
    audience: "All property professionals",
    description: "How climate risk, sustainability performance and social factors are reshaping valuation, investment and advisory practice in Australia.",
  },
  {
    slug: "residential-valuation-handbook",
    title: "Residential Valuation Handbook",
    authors: "API Residential Valuation Industry Group",
    price: 134,
    year: 2025,
    format: "Softcover · 280pp",
    audience: "Residential valuers, lender panel valuers",
    description: "Practical guidance aligned to the PropertyPRO Supporting Memorandum and the ABFI Residential Valuation Standing Instructions.",
  },
];
