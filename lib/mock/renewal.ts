export interface Invoice {
  id: string;
  description: string;
  periodStart: string;
  periodEnd: string;
  amount: number;
  gst: number;
  total: number;
  dueDate: string;
  status: "Outstanding" | "Paid";
  lineItems: { label: string; amount: number }[];
}

export const outstandingInvoices: Invoice[] = [
  {
    id: "INV-2026-09311",
    description: "2026 Membership Renewal — Associate (AAPI)",
    periodStart: "2026-01-01",
    periodEnd: "2026-12-31",
    amount: 720,
    gst: 72,
    total: 792,
    dueDate: "2026-02-04",
    status: "Outstanding",
    lineItems: [
      { label: "Associate annual membership fee", amount: 680 },
      { label: "CPV certification maintenance", amount: 40 },
    ],
  },
  {
    id: "INV-2026-09312",
    description: "APREF voluntary research contribution",
    periodStart: "2026-01-01",
    periodEnd: "2026-12-31",
    amount: 50,
    gst: 5,
    total: 55,
    dueDate: "2026-06-30",
    status: "Outstanding",
    lineItems: [
      { label: "APREF research fund contribution (voluntary)", amount: 50 },
    ],
  },
];

export const paidInvoices: Invoice[] = [
  {
    id: "INV-2025-08744",
    description: "2025 Membership Renewal — Associate (AAPI)",
    periodStart: "2025-01-01",
    periodEnd: "2025-12-31",
    amount: 695,
    gst: 69.5,
    total: 764.5,
    dueDate: "2025-02-01",
    status: "Paid",
    lineItems: [
      { label: "Associate annual membership fee", amount: 655 },
      { label: "CPV certification maintenance", amount: 40 },
    ],
  },
];
