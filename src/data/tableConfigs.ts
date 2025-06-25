
interface TableConfig {
  title: string;
  allowAddColumns: boolean;
  columns: Array<{ name: string; width: number }>;
  rows: Array<string[]>;
}

export const tableTemplates: Record<string, TableConfig> = {
  eoq: {
    title: "Economic Order Quantity (EOQ) Calculation",
    allowAddColumns: false,
    columns: [
      { name: "Description", width: 300 },
      { name: "Value", width: 200 }
    ],
    rows: [
      ["Annual demand (D)", ""],
      ["Ordering cost per order (S)", ""],
      ["Holding cost per unit per year (H)", ""],
      ["EOQ = √(2DS/H)", ""],
      ["Number of orders per year = D/EOQ", ""]
    ]
  },

  fifo: {
    title: "FIFO Inventory Calculation",
    allowAddColumns: true,
    columns: [
      { name: "Date", width: 80 },
      { name: "Purchases (Units)", width: 120 },
      { name: "Purchases (Rate)", width: 120 },
      { name: "Issues (Units)", width: 120 },
      { name: "Balance (Units)", width: 120 },
      { name: "Balance (Rate)", width: 120 },
      { name: "Balance (Amount)", width: 130 }
    ],
    rows: [
      ["01", "", "", "", "300", "R10", "R3,000"],
      ["06", "", "", "200", "", "", ""],
      ["12", "1,200", "R12", "", "", "", ""],
      ["13", "-100", "R12", "", "", "", ""],
      ["18", "200", "R13", "", "", "", ""],
      ["25", "", "", "1,000", "", "", ""]
    ]
  },

  labourCost: {
    title: "Labour Cost Calculation",
    allowAddColumns: false,
    columns: [
      { name: "Description", width: 300 },
      { name: "Amount", width: 150 }
    ],
    rows: [
      ["Monthly salary after deductions", "R20,000"],
      ["Employee deductions for the month", "R5,000"],
      ["Gross monthly salary", ""],
      ["Annual bonus payable", "R15,000"],
      ["Employer contributions (pension/medical)", "R4,000"],
      ["Total labour cost", ""]
    ]
  },

  cashBudget: {
    title: "Cash Budget",
    allowAddColumns: true,
    columns: [
      { name: "", width: 200 },
      { name: "August", width: 120 },
      { name: "September", width: 120 },
      { name: "October", width: 120 }
    ],
    rows: [
      ["Opening Balance", "", "", ""],
      ["RECEIPTS:", "", "", ""],
      ["Capital contribution", "", "", ""],
      ["Cash sales", "", "", ""],
      ["Credit sales collections", "", "", ""],
      ["Total Receipts", "", "", ""],
      ["PAYMENTS:", "", "", ""],
      ["Equipment deposit", "", "", ""],
      ["Equipment instalments", "", "", ""],
      ["Direct materials", "", "", ""],
      ["Direct labour", "", "", ""],
      ["Overheads", "", "", ""],
      ["Total Payments", "", "", ""],
      ["Net Cash Flow", "", "", ""],
      ["Closing Balance", "", "", ""]
    ]
  },

  incomeStatement: {
    title: "Income Statement (Absorption Costing)",
    allowAddColumns: false,
    columns: [
      { name: "", width: 350 },
      { name: "Amount", width: 150 }
    ],
    rows: [
      ["Sales (4,500 × R200)", "R900,000"],
      ["Cost of goods sold:", ""],
      ["Variable manufacturing costs (5,000 × R80)", "R400,000"],
      ["Fixed manufacturing overhead", "R60,000"],
      ["Total manufacturing costs", ""],
      ["Less: Closing inventory (500 × R92)", ""],
      ["Cost of goods sold", ""],
      ["Gross profit", ""],
      ["Operating expenses:", ""],
      ["Variable administrative costs (4,500 × R3)", ""],
      ["Sales commission (5% × R900,000)", ""],
      ["Fixed selling and administrative costs", "R50,000"],
      ["Total operating expenses", ""],
      ["Net profit", ""]
    ]
  }
};
