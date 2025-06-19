
interface TableCell {
  value: string;
  isFormula?: boolean;
  isReadOnly?: boolean;
}

interface TableConfig {
  title: string;
  headers: string[];
  initialRows: TableCell[][];
  allowAddRows?: boolean;
  allowAddColumns?: boolean;
  showCalculations?: boolean;
}

export const tableTemplates: Record<string, TableConfig> = {
  eoq: {
    title: "Economic Order Quantity (EOQ) Calculation",
    headers: ["Description", "Value"],
    initialRows: [
      [{ value: "Annual demand (D)", isReadOnly: true }, { value: "" }],
      [{ value: "Ordering cost per order (S)", isReadOnly: true }, { value: "" }],
      [{ value: "Holding cost per unit per year (H)", isReadOnly: true }, { value: "" }],
      [{ value: "EOQ = √(2DS/H)", isReadOnly: true }, { value: "", isFormula: true }],
      [{ value: "Number of orders per year = D/EOQ", isReadOnly: true }, { value: "", isFormula: true }]
    ],
    allowAddRows: false,
    showCalculations: true
  },

  fifo: {
    title: "FIFO Inventory Calculation",
    headers: ["Date", "Purchases (Units)", "Purchases (Rate)", "Issues (Units)", "Balance (Units)", "Balance (Rate)", "Balance (Amount)"],
    initialRows: [
      [{ value: "01" }, { value: "" }, { value: "" }, { value: "" }, { value: "300" }, { value: "R10" }, { value: "R3,000" }],
      [{ value: "06" }, { value: "" }, { value: "" }, { value: "200" }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "12" }, { value: "1,200" }, { value: "R12" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "13" }, { value: "-100" }, { value: "R12" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "18" }, { value: "200" }, { value: "R13" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "25" }, { value: "" }, { value: "" }, { value: "1,000" }, { value: "" }, { value: "" }, { value: "" }]
    ],
    allowAddRows: true,
    showCalculations: true
  },

  labourCost: {
    title: "Labour Cost Calculation",
    headers: ["Description", "Amount"],
    initialRows: [
      [{ value: "Monthly salary after deductions", isReadOnly: true }, { value: "R20,000" }],
      [{ value: "Employee deductions for the month", isReadOnly: true }, { value: "R5,000" }],
      [{ value: "Gross monthly salary", isReadOnly: true }, { value: "", isFormula: true }],
      [{ value: "Annual bonus payable", isReadOnly: true }, { value: "R15,000" }],
      [{ value: "Employer contributions (pension/medical)", isReadOnly: true }, { value: "R4,000" }],
      [{ value: "Total labour cost", isReadOnly: true }, { value: "", isFormula: true }]
    ],
    allowAddRows: false,
    showCalculations: true
  },

  cashBudget: {
    title: "Cash Budget",
    headers: ["", "August", "September", "October"],
    initialRows: [
      [{ value: "Opening Balance", isReadOnly: true }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "RECEIPTS:", isReadOnly: true }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "Capital contribution", isReadOnly: true }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "Cash sales", isReadOnly: true }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "Credit sales collections", isReadOnly: true }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "Total Receipts", isReadOnly: true }, { value: "", isFormula: true }, { value: "", isFormula: true }, { value: "", isFormula: true }],
      [{ value: "PAYMENTS:", isReadOnly: true }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "Equipment deposit", isReadOnly: true }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "Equipment instalments", isReadOnly: true }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "Direct materials", isReadOnly: true }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "Direct labour", isReadOnly: true }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "Overheads", isReadOnly: true }, { value: "" }, { value: "" }, { value: "" }],
      [{ value: "Total Payments", isReadOnly: true }, { value: "", isFormula: true }, { value: "", isFormula: true }, { value: "", isFormula: true }],
      [{ value: "Net Cash Flow", isReadOnly: true }, { value: "", isFormula: true }, { value: "", isFormula: true }, { value: "", isFormula: true }],
      [{ value: "Closing Balance", isReadOnly: true }, { value: "", isFormula: true }, { value: "", isFormula: true }, { value: "", isFormula: true }]
    ],
    allowAddRows: true,
    showCalculations: false
  },

  incomeStatement: {
    title: "Income Statement (Absorption Costing)",
    headers: ["", "Amount"],
    initialRows: [
      [{ value: "Sales (4,500 × R200)", isReadOnly: true }, { value: "R900,000" }],
      [{ value: "Cost of goods sold:", isReadOnly: true }, { value: "" }],
      [{ value: "Variable manufacturing costs (5,000 × R80)", isReadOnly: true }, { value: "R400,000" }],
      [{ value: "Fixed manufacturing overhead", isReadOnly: true }, { value: "R60,000" }],
      [{ value: "Total manufacturing costs", isReadOnly: true }, { value: "", isFormula: true }],
      [{ value: "Less: Closing inventory (500 × R92)", isReadOnly: true }, { value: "" }],
      [{ value: "Cost of goods sold", isReadOnly: true }, { value: "", isFormula: true }],
      [{ value: "Gross profit", isReadOnly: true }, { value: "", isFormula: true }],
      [{ value: "Operating expenses:", isReadOnly: true }, { value: "" }],
      [{ value: "Variable administrative costs (4,500 × R3)", isReadOnly: true }, { value: "" }],
      [{ value: "Sales commission (5% × R900,000)", isReadOnly: true }, { value: "" }],
      [{ value: "Fixed selling and administrative costs", isReadOnly: true }, { value: "R50,000" }],
      [{ value: "Total operating expenses", isReadOnly: true }, { value: "", isFormula: true }],
      [{ value: "Net profit", isReadOnly: true }, { value: "", isFormula: true }]
    ],
    allowAddRows: false,
    showCalculations: false
  }
};
