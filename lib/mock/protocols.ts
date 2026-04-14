export type ProtocolSector = "Residential" | "Commercial" | "Agricultural" | "Specialist";
export type ProtocolStatus = "Current" | "Historical" | "Exposure Draft";

export interface Protocol {
  id: string;
  title: string;
  sector: ProtocolSector;
  status: ProtocolStatus;
  version: string;
  issuedDate: string;   // ISO
  summary: string;
  appliesTo: string[];
}

export const protocols: Protocol[] = [
  { id: "VP-001", title: "General Valuation Practice", sector: "Residential", status: "Current", version: "4.2", issuedDate: "2025-11-14", summary: "Foundational protocol covering scope, inspection, and reporting standards for all valuations.", appliesTo: ["CPV", "RPV"] },
  { id: "VP-002", title: "Single Dwelling Valuations for Mortgage", sector: "Residential", status: "Current", version: "3.1", issuedDate: "2025-07-01", summary: "Standards for bank-instructed residential valuations including PEXA and ValEx submission.", appliesTo: ["CPV", "RPV"] },
  { id: "VP-003", title: "Strata & Unit Title Valuations", sector: "Residential", status: "Current", version: "2.4", issuedDate: "2024-09-22", summary: "Specific requirements for strata, community title, and company share schemes.", appliesTo: ["CPV", "RPV"] },
  { id: "VP-004", title: "Off-The-Plan Residential Valuations", sector: "Residential", status: "Exposure Draft", version: "1.0-draft", issuedDate: "2026-02-10", summary: "Draft standards addressing OTP contract valuations, risk disclosure, and settlement re-valuations. Open for member consultation.", appliesTo: ["CPV", "RPV"] },
  { id: "VP-010", title: "Commercial Investment Properties", sector: "Commercial", status: "Current", version: "5.0", issuedDate: "2025-10-05", summary: "Income capitalisation, DCF, and comparable sales methodology for commercial investment.", appliesTo: ["CPV"] },
  { id: "VP-011", title: "Retail Shopping Centre Valuations", sector: "Commercial", status: "Current", version: "2.2", issuedDate: "2024-11-30", summary: "Shopping centre specific protocols including MAT, occupancy cost ratios, and tenant covenant analysis.", appliesTo: ["CPV"] },
  { id: "VP-012", title: "Office Tower & CBD Valuations", sector: "Commercial", status: "Current", version: "3.3", issuedDate: "2025-03-18", summary: "Premium grade office valuations including ESG and flexible-space considerations.", appliesTo: ["CPV"] },
  { id: "VP-013", title: "Industrial & Logistics Valuations", sector: "Commercial", status: "Current", version: "2.1", issuedDate: "2024-12-12", summary: "Post-pandemic industrial standards with updated e-commerce premium guidance.", appliesTo: ["CPV"] },
  { id: "VP-014", title: "Going Concern Commercial Valuations", sector: "Commercial", status: "Historical", version: "1.9", issuedDate: "2022-08-01", summary: "Superseded by VP-015. Retained for audit trail. See VP-015 Current.", appliesTo: ["CPV"] },
  { id: "VP-015", title: "Going Concern & Trading Properties", sector: "Commercial", status: "Current", version: "2.0", issuedDate: "2024-01-15", summary: "Updated methodology for hotels, pubs, childcare, service stations and other trading entities.", appliesTo: ["CPV"] },
  { id: "VP-020", title: "Broad Acre Rural Valuations", sector: "Agricultural", status: "Current", version: "3.0", issuedDate: "2025-06-22", summary: "Broad acre dryland and grazing country valuation methodology.", appliesTo: ["CPV"] },
  { id: "VP-021", title: "Irrigated Horticulture", sector: "Agricultural", status: "Current", version: "2.1", issuedDate: "2024-05-14", summary: "Water entitlement, orchard, and vineyard specific valuation protocols.", appliesTo: ["CPV"] },
  { id: "VP-022", title: "Intensive Livestock Operations", sector: "Agricultural", status: "Current", version: "1.3", issuedDate: "2024-08-02", summary: "Feedlot, piggery, and poultry operation valuations including biosecurity risk factors.", appliesTo: ["CPV"] },
  { id: "VP-023", title: "Water Entitlements", sector: "Agricultural", status: "Exposure Draft", version: "0.9-draft", issuedDate: "2026-03-28", summary: "New draft protocol on valuing water entitlements as a standalone asset class. Member feedback open.", appliesTo: ["CPV"] },
  { id: "VP-030", title: "Compulsory Acquisition", sector: "Specialist", status: "Current", version: "4.1", issuedDate: "2025-02-08", summary: "Standards for government acquisition valuations, disturbance, solatium, and severance.", appliesTo: ["CPV"] },
  { id: "VP-031", title: "Heritage Properties", sector: "Specialist", status: "Current", version: "2.0", issuedDate: "2024-10-19", summary: "Valuation of heritage-listed assets, depreciation adjustments, and statutory overlays.", appliesTo: ["CPV"] },
  { id: "VP-032", title: "Infrastructure & Utility Easements", sector: "Specialist", status: "Current", version: "1.5", issuedDate: "2024-06-03", summary: "Methodology for easement valuations, before-and-after analysis, and diminution calculations.", appliesTo: ["CPV"] },
  { id: "VP-033", title: "Plant & Machinery", sector: "Specialist", status: "Historical", version: "1.2", issuedDate: "2021-04-11", summary: "Legacy P&M standards. Refer to AVI-jointly maintained Protocol for current guidance.", appliesTo: ["CPV"] },
  { id: "VP-034", title: "ESG & Climate Risk Adjustments", sector: "Specialist", status: "Exposure Draft", version: "0.6-draft", issuedDate: "2026-01-20", summary: "Emerging-practice protocol for integrating climate risk and ESG considerations in valuations.", appliesTo: ["CPV"] },
  { id: "VP-035", title: "Digital Tokenised Property Assets", sector: "Specialist", status: "Exposure Draft", version: "0.3-draft", issuedDate: "2026-04-04", summary: "Early-stage draft exploring valuation approach for fractionalised tokenised property interests.", appliesTo: ["CPV"] },
];

export const protocolSectors: ProtocolSector[] = ["Residential", "Commercial", "Agricultural", "Specialist"];
export const protocolStatuses: ProtocolStatus[] = ["Current", "Historical", "Exposure Draft"];
