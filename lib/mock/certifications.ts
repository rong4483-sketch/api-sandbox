export interface CertificationRequirement {
  category: string;
  items: { label: string; hours?: number; detail?: string }[];
}

export interface Certification {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  overview: string;
  eligibility: string[];
  requirements: CertificationRequirement[];
  mentorHours: number;
  renewalPeriodYears: number;
  assessmentFormat: string;
  indicativeDurationMonths: number;
}

export const certifications: Certification[] = [
  {
    slug: "cpv",
    code: "CPV",
    name: "Certified Practising Valuer",
    tagline: "The gold standard in Australian property valuation.",
    overview:
      "The CPV is the API's flagship certification for property valuers. It recognises demonstrated competency across residential, commercial, and specialist property valuation and carries statutory recognition for a range of professional practice areas.",
    eligibility: [
      "Associate membership of the API (or progressing towards it)",
      "Relevant tertiary qualification accredited by the API",
      "Minimum 2 years of supervised valuation practice",
      "Current Professional Indemnity Insurance (through APIV or equivalent)",
    ],
    requirements: [
      {
        category: "Structured CPD (10 hours per year)",
        items: [
          { label: "API Code of Ethics & Professional Standards refresher", hours: 2, detail: "Compulsory annually" },
          { label: "Valuation Protocol updates workshop", hours: 2, detail: "Compulsory annually" },
          { label: "Sector-specific technical modules", hours: 4, detail: "Choose from Residential, Commercial, Rural, Specialist" },
          { label: "API-endorsed conferences / masterclasses", hours: 2 },
        ],
      },
      {
        category: "Unstructured CPD (10 hours per year)",
        items: [
          { label: "Reading API guidance papers, technical bulletins", hours: 4 },
          { label: "Mentoring of Provisional / Associate members", hours: 3 },
          { label: "Industry publications, podcasts, research review", hours: 3 },
        ],
      },
      {
        category: "Ongoing Professional Obligations",
        items: [
          { label: "Maintain PI Insurance via APIV scheme" },
          { label: "Submit annual CPD declaration via Cockpit" },
          { label: "Adhere to the API Code of Ethics" },
          { label: "Respond to disciplinary or audit requests within 14 days" },
        ],
      },
    ],
    mentorHours: 6,
    renewalPeriodYears: 1,
    assessmentFormat: "Written submission + panel interview",
    indicativeDurationMonths: 6,
  },
  {
    slug: "rpv",
    code: "RPV",
    name: "Residential Property Valuer",
    tagline: "Specialist recognition for residential valuation practice.",
    overview:
      "The RPV credential recognises valuers who specialise in the residential sector, providing assurance to banks, lenders, and consumers of deep residential competency.",
    eligibility: [
      "Associate membership of the API",
      "Demonstrated residential practice portfolio",
      "Completion of RPV prerequisite modules",
    ],
    requirements: [
      {
        category: "Structured CPD (8 hours per year)",
        items: [
          { label: "Residential valuation methodology refresh", hours: 3 },
          { label: "Consumer protection & lender panel standards", hours: 2 },
          { label: "Sector ethics module", hours: 1 },
          { label: "Endorsed residential masterclass", hours: 2 },
        ],
      },
      {
        category: "Unstructured CPD (6 hours per year)",
        items: [
          { label: "Reading Residential Valuation Insights reports", hours: 3 },
          { label: "Industry publications and case law review", hours: 3 },
        ],
      },
    ],
    mentorHours: 3,
    renewalPeriodYears: 1,
    assessmentFormat: "Portfolio review",
    indicativeDurationMonths: 3,
  },
];

export const cpv = certifications[0];
export const rpv = certifications[1];
