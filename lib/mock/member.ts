export interface Member {
  firstName: string;
  lastName: string;
  email: string;
  memberSince: string;
  grade: "Student" | "Provisional" | "Associate" | "Fellow";
  certifications: string[];
  cpd: {
    total: number;       // required
    structured: number;  // completed
    unstructured: number;// completed
    requiredStructured: number;
    requiredUnstructured: number;
    periodEnd: string;
  };
  renewalDue: string;    // ISO date
  memberNumber: string;
  state: string;
}

export const currentMember: Member = {
  firstName: "Jane",
  lastName: "Valuer",
  email: "jane.valuer@example.com",
  memberSince: "2019-03-14",
  grade: "Associate",
  certifications: ["CPV"],
  cpd: {
    total: 20,
    structured: 8,
    unstructured: 4,
    requiredStructured: 10,
    requiredUnstructured: 10,
    periodEnd: "2026-12-31",
  },
  renewalDue: "2026-06-30",
  memberNumber: "API-44817",
  state: "NSW",
};

export const recentActivity = [
  { id: "1", type: "cpd", title: "Attended: Retail Valuation Masterclass", hours: 2, when: "2026-04-02" },
  { id: "2", type: "cpd", title: "Completed: API Code of Ethics Refresher", hours: 1.5, when: "2026-03-18" },
  { id: "3", type: "invoice", title: "Invoice INV-09122 paid", when: "2026-03-01" },
  { id: "4", type: "cpd", title: "Read: Valuation Protocol 4.2 guidance paper", hours: 1, when: "2026-02-22" },
];
