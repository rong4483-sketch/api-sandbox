export interface CpdEvent {
  id: string;
  title: string;
  format: "Webinar" | "In-person" | "On-demand" | "Masterclass";
  state: string;
  date: string;
  hours: number;
  type: "Structured" | "Unstructured";
  price: number;
  memberPrice: number;
  presenter: string;
  description: string;
  seats: number;
  seatsLeft: number;
}

export const cpdEvents: CpdEvent[] = [
  {
    id: "CPD-2026-041",
    title: "Retail Valuation Masterclass",
    format: "Masterclass",
    state: "NSW",
    date: "2026-05-14",
    hours: 4,
    type: "Structured",
    price: 495,
    memberPrice: 345,
    presenter: "Darren Austin AAPI",
    description: "Retail property valuation in a post-COVID Australian market. Case studies across regional centres, CBD strip and shopping centre assets.",
    seats: 80,
    seatsLeft: 22,
  },
  {
    id: "CPD-2026-042",
    title: "ESG & Climate Risk in Valuation",
    format: "Webinar",
    state: "National",
    date: "2026-05-21",
    hours: 2,
    type: "Structured",
    price: 195,
    memberPrice: 125,
    presenter: "Dr Georgia Warren-Myers FAPI",
    description: "Integrating climate risk disclosures and sustainability performance into commercial and residential valuations.",
    seats: 500,
    seatsLeft: 318,
  },
  {
    id: "CPD-2026-043",
    title: "PropertyPRO 2020 Supporting Memorandum — Annual Refresher",
    format: "On-demand",
    state: "National",
    date: "2026-06-01",
    hours: 1.5,
    type: "Structured",
    price: 145,
    memberPrice: 95,
    presenter: "Residential Valuation Industry Group",
    description: "Mandatory-style refresher on the ABFI Residential Valuation Standing Instructions and PropertyPRO report obligations.",
    seats: 2000,
    seatsLeft: 1760,
  },
  {
    id: "CPD-2026-044",
    title: "Just Terms Acquisition: Practical Workshop",
    format: "In-person",
    state: "QLD",
    date: "2026-06-12",
    hours: 6,
    type: "Structured",
    price: 695,
    memberPrice: 495,
    presenter: "Mark Kay LFAPI",
    description: "Compulsory acquisition, compensation assessment and Just Terms valuation for government and infrastructure projects.",
    seats: 40,
    seatsLeft: 11,
  },
  {
    id: "CPD-2026-045",
    title: "Rural Valuation Fundamentals",
    format: "In-person",
    state: "VIC",
    date: "2026-06-20",
    hours: 6,
    type: "Structured",
    price: 695,
    memberPrice: 495,
    presenter: "Victoria Gracie",
    description: "Two-session workshop covering productive capacity, rural market analysis, and specialist asset classes including viticulture and horticulture.",
    seats: 35,
    seatsLeft: 14,
  },
  {
    id: "CPD-2026-046",
    title: "Valuation Ethics & Professional Conduct",
    format: "Webinar",
    state: "National",
    date: "2026-07-02",
    hours: 1,
    type: "Structured",
    price: 95,
    memberPrice: 0,
    presenter: "API Standards Committee",
    description: "Annual refresher on the API Code of Ethics and Professional Conduct. Complimentary for members.",
    seats: 1000,
    seatsLeft: 842,
  },
  {
    id: "CPD-2026-047",
    title: "AI & Automated Valuation Models",
    format: "Webinar",
    state: "National",
    date: "2026-07-15",
    hours: 1.5,
    type: "Structured",
    price: 165,
    memberPrice: 95,
    presenter: "Innovation Futures Advisory Group",
    description: "Where AVMs add value, where they don't, and the professional obligations when reviewing or relying on model-generated estimates.",
    seats: 500,
    seatsLeft: 402,
  },
];
