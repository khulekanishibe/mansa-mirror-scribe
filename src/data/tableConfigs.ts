
import { TableCell } from '../components/EditableTable';

export interface TableConfig {
  title: string;
  headers: string[];
  initialRows: Array<{value: string; isFormula?: boolean; isReadOnly?: boolean}>[];
  allowAddRows?: boolean;
  allowAddColumns?: boolean;
  showCalculations?: boolean;
}

export const tableConfigs = {
  eoq: {
    title: "Economic Order Quantity (EOQ) Calculation",
    headers: ["Description", "Symbol", "Value", "Units"],
    initialRows: [
      [
        { value: "Annual demand", isReadOnly: true },
        { value: "D", isReadOnly: true },
        { value: "" },
        { value: "units" }
      ],
      [
        { value: "Ordering cost per order", isReadOnly: true },
        { value: "S", isReadOnly: true },
        { value: "" },
        { value: "R" }
      ],
      [
        { value: "Holding cost per unit per year", isReadOnly: true },
        { value: "H", isReadOnly: true },
        { value: "" },
        { value: "R" }
      ],
      [
        { value: "EOQ = √(2DS/H)", isReadOnly: true },
        { value: "EOQ", isReadOnly: true },
        { value: "", isFormula: true },
        { value: "units" }
      ],
      [
        { value: "Number of orders per year = D / EOQ", isReadOnly: true },
        { value: "Orders", isReadOnly: true },
        { value: "", isFormula: true },
        { value: "orders" }
      ]
    ],
    allowAddRows: false,
    showCalculations: true
  } as TableConfig,

  fifo: {
    title: "FIFO Inventory Calculation",
    headers: ["Date", "Purchases (Qty)", "Purchases (Price)", "Issues (Qty)", "Balance (Qty)", "Balance (Price)", "Balance (Amount R)"],
    initialRows: [
      [
        { value: "01 May" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "300" },
        { value: "10.00" },
        { value: "3,000.00" }
      ]
    ],
    allowAddRows: true,
    showCalculations: true
  } as TableConfig,

  labourCost: {
    title: "Labour Cost Calculation",
    headers: ["Description", "Amount (R)", "Notes"],
    initialRows: [
      [
        { value: "Monthly salary (gross)", isReadOnly: true },
        { value: "" },
        { value: "Before deductions" }
      ],
      [
        { value: "Employee deductions", isReadOnly: true },
        { value: "" },
        { value: "Tax, UIF, etc." }
      ],
      [
        { value: "Net salary paid", isReadOnly: true },
        { value: "", isFormula: true },
        { value: "Gross - Deductions" }
      ],
      [
        { value: "Annual bonus", isReadOnly: true },
        { value: "" },
        { value: "December payment" }
      ],
      [
        { value: "Employer contributions", isReadOnly: true },
        { value: "" },
        { value: "Pension + Medical" }
      ],
      [
        { value: "Total labour cost", isReadOnly: true },
        { value: "", isFormula: true },
        { value: "All costs to employer" }
      ]
    ],
    allowAddRows: false,
    showCalculations: true
  } as TableConfig,

  cashBudget: {
    title: "Cash Budget",
    headers: ["Description", "August 2025", "September 2025", "October 2025"],
    initialRows: [
      [
        { value: "Opening Balance", isReadOnly: true },
        { value: "" },
        { value: "" },
        { value: "" }
      ],
      [
        { value: "Cash Receipts:", isReadOnly: true },
        { value: "", isReadOnly: true },
        { value: "", isReadOnly: true },
        { value: "", isReadOnly: true }
      ],
      [
        { value: "  Cash Sales", isReadOnly: true },
        { value: "" },
        { value: "" },
        { value: "" }
      ],
      [
        { value: "  Credit Collections", isReadOnly: true },
        { value: "" },
        { value: "" },
        { value: "" }
      ],
      [
        { value: "Total Available", isReadOnly: true },
        { value: "", isFormula: true },
        { value: "", isFormula: true },
        { value: "", isFormula: true }
      ],
      [
        { value: "Cash Payments:", isReadOnly: true },
        { value: "", isReadOnly: true },
        { value: "", isReadOnly: true },
        { value: "", isReadOnly: true }
      ],
      [
        { value: "  Materials", isReadOnly: true },
        { value: "" },
        { value: "" },
        { value: "" }
      ],
      [
        { value: "  Labour", isReadOnly: true },
        { value: "" },
        { value: "" },
        { value: "" }
      ],
      [
        { value: "  Equipment", isReadOnly: true },
        { value: "" },
        { value: "" },
        { value: "" }
      ],
      [
        { value: "Closing Balance", isReadOnly: true },
        { value: "", isFormula: true },
        { value: "", isFormula: true },
        { value: "", isFormula: true }
      ]
    ],
    allowAddRows: true,
    showCalculations: true
  } as TableConfig,

  incomeStatement: {
    title: "Income Statement - Absorption Costing",
    headers: ["Description", "Amount (R)", "Calculation"],
    initialRows: [
      [
        { value: "Sales Revenue", isReadOnly: true },
        { value: "", isFormula: true },
        { value: "Units sold × Selling price" }
      ],
      [
        { value: "Cost of Goods Sold:", isReadOnly: true },
        { value: "", isReadOnly: true },
        { value: "" }
      ],
      [
        { value: "  Variable Manufacturing Costs", isReadOnly: true },
        { value: "" },
        { value: "Per unit × Units sold" }
      ],
      [
        { value: "  Fixed Manufacturing Costs", isReadOnly: true },
        { value: "" },
        { value: "Allocated to production" }
      ],
      [
        { value: "Gross Profit", isReadOnly: true },
        { value: "", isFormula: true },
        { value: "Sales - COGS" }
      ],
      [
        { value: "Operating Expenses:", isReadOnly: true },
        { value: "", isReadOnly: true },
        { value: "" }
      ],
      [
        { value: "  Variable Admin Costs", isReadOnly: true },
        { value: "" },
        { value: "Per unit × Units sold" }
      ],
      [
        { value: "  Fixed Selling & Admin", isReadOnly: true },
        { value: "" },
        { value: "Fixed amount" }
      ],
      [
        { value: "  Sales Commission", isReadOnly: true },
        { value: "" },
        { value: "% of sales" }
      ],
      [
        { value: "Net Profit", isReadOnly: true },
        { value: "", isFormula: true },
        { value: "Gross profit - Expenses" }
      ]
    ],
    allowAddRows: false,
    showCalculations: true
  } as TableConfig
};
