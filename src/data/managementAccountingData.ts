
export interface SubQuestion {
  number: string;
  required: boolean;
  task: string;
  marks: number;
  information?: any;
}

export interface Question {
  number: number;
  marks: number;
  subquestions: SubQuestion[];
  appendices?: Array<{
    name: string;
    description: string;
    link: string;
  }>;
}

export interface ExamData {
  examTitle: string;
  totalMarks: number;
  questions: Question[];
}

export const managementAccountingExam: ExamData = {
  examTitle: "Management Accounting",
  totalMarks: 100,
  questions: [
    {
      number: 1,
      marks: 20,
      subquestions: [
        {
          number: "1.1",
          required: true,
          task: "Calculate the number of orders required per year, based on the economic order quantity.",
          marks: 4,
          information: {
            text: "Havana Limited produces a product which has a constant monthly demand of 7,500 units. The product requires a component that is purchased from a supplier at R100 per unit. The order cost is R20 per order. The holding cost is 10% of the unit purchase price."
          }
        },
        {
          number: "1.2",
          required: true,
          task: "Use the first-in-first-out (FIFO) method to complete the table provided below for the stated transactions.",
          marks: 4,
          information: {
            text: "The following transactions of Tempa Manufacturers took place during May 2025 in respect of a component used in production:",
            table: {
              columns: ["Date", "Transactions"],
              rows: [
                ["01", "Opening inventory 300 units at R10 per unit"],
                ["06", "Issued to production 200 units"],
                ["12", "Purchased from a supplier 1,200 units at R12 per unit"],
                ["13", "Returned to the supplier (see 12th) 100 units"],
                ["18", "Purchased from a supplier 200 units at R13 per unit"],
                ["25", "Issued to production 1,000 units"]
              ]
            }
          }
        },
        {
          number: "1.3",
          required: true,
          task: "Calculate the total labour cost of Donald to Trump Enterprises for December 2024.",
          marks: 4,
          information: {
            text: "The following details apply to Donald, an employee of Trump Enterprises, for December 2024:",
            details: {
              "Monthly salary after deductions": "R20,000",
              "Employee deductions for the month": "R5,000",
              "Annual bonus payable in December": "R15,000",
              "Employer's contribution to pension and medical aid funds per month": "R4,000"
            }
          }
        },
        {
          number: "1.4",
          required: true,
          task: "Calculate Mary's remuneration for 03 March 2025.",
          marks: 4,
          information: {
            text: "Mary is a machine operator at Ndlovu Manufacturers. She is paid a guaranteed weekly wage of R2,500. In addition, she receives a bonus for every unit produced in excess of the weekly target of 600 units. The bonus is R8 per unit. On 03 March 2025, Mary produced 720 units."
          }
        },
        {
          number: "1.5",
          required: true,
          task: "Calculate the labour efficiency variance and indicate whether the variance is favourable or unfavourable.",
          marks: 4,
          information: {
            text: "The standard time and labour cost of Strava Manufacturers for each unit of Product X is 3.5 hours at R40 per hour. The expected monthly production is 4,500 units. The actual figures for May 2025 are as follows:",
            data: {
              "Production": "4,000 units",
              "Direct labour incurred": "15,000 hours at R39 per hour"
            }
          }
        }
      ]
    },
    {
      number: 2,
      marks: 20,
      subquestions: [
        {
          number: "2.1",
          required: true,
          task: "Use the information given below to calculate the earnings of Jane per day using Taylor's differential piecework system.",
          marks: 10,
          information: {
            text: "The standard production at Yardley Limited is 20 units per hour. During the first week of February, the work record of Jane (who works 8 hours per day at Yardley Limited), is as follows:",
            workRecord: {
              "Monday": 150,
              "Tuesday": 170,
              "Wednesday": 210,
              "Thursday": 160,
              "Friday": 194
            },
            labourCostPerUnit: [
              "R8 per unit if below standard.",
              "R9 per unit at standard and up to 20% above standard.",
              "R10 per unit if the daily output exceeds 20% above standard."
            ],
            note: "Earnings are calculated daily."
          }
        },
        {
          number: "2.2",
          required: true,
          task: "Study the information given below and prepare the Income statement of Ceres Manufacturers for May 2025 using the absorption costing method.",
          marks: 10,
          information: {
            text: "The following information relates to the only product produced by Ceres Manufacturers during May 2025:",
            data: {
              "Opening inventory": "Nil",
              "Number of units manufactured": "5,000",
              "Number of units sold": "4,500",
              "Selling price per unit": "R200",
              "Variable manufacturing costs per unit": "R80",
              "Fixed manufacturing overhead costs": "R60,000",
              "Fixed selling costs and administrative costs": "R50,000",
              "Variable administrative costs per unit sold": "R3",
              "Sales commission as a percentage of sales": "5%"
            }
          }
        }
      ]
    },
    {
      number: 3,
      marks: 20,
      subquestions: [
        {
          number: "3.1",
          required: true,
          task: "Calculate Break-even value, using the marginal income ratio",
          marks: 4,
          information: {
            text: "A company manufactures a single product. Production and sales are expected to be 1,000 units. The following budget has been produced by the management accountant:",
            budget: {
              "Sales at R500 each": "R500,000",
              "Direct materials cost per unit": "R150",
              "Direct labour cost per unit": "R105",
              "Variable manufacturing overhead costs per unit": "R20",
              "Variable selling costs": "5% of sales",
              "Fixed manufacturing overhead costs": "R70,000",
              "Fixed selling and administrative costs": "R30,000"
            }
          }
        },
        {
          number: "3.2",
          required: true,
          task: "Calculate Margin of safety (expressed in units)",
          marks: 4,
          information: "Use the same information from Question 3.1."
        },
        {
          number: "3.3",
          required: true,
          task: "Calculate Total Marginal Income and Net Profit/Loss, if the sales price is reduced to R480 per unit.",
          marks: 4,
          information: "Use the same information from Question 3.1."
        },
        {
          number: "3.4",
          required: true,
          task: "Calculate the marginal income per unit.",
          marks: 3,
          information: {
            text: "Antler Limited expects to incur the following costs to produce 35,000 units of its product which it aims to sell at R30 each:",
            costs: {
              "Variable manufacturing costs": "R245,000",
              "Fixed manufacturing costs": "R90,000",
              "Variable marketing costs": "R105,000",
              "Fixed marketing and administrative costs": "R50,000"
            }
          }
        },
        {
          number: "3.5",
          required: true,
          task: "If Antler Limited decides on a selling price of R35 and a profit objective of R750,000, calculate the target sales volume.",
          marks: 5,
          information: "Use the same information from Question 3.4."
        }
      ]
    },
    {
      number: 4,
      marks: 20,
      subquestions: [
        {
          number: "4",
          required: true,
          task: "Use the information provided below to prepare the Cash Budget for August, September and October 2025.",
          marks: 20,
          information: {
            text: "The following information relates to Joanus Manufacturers which will commence business on 01 August 2025 with a capital contribution of R200,000 cash, manufacturing a product called Jetta:",
            details: [
              "Machinery and equipment will be purchased on credit on 01 August 2025 for R200,000. A deposit of 20% will be paid upon purchase and the balance will be paid in five equal monthly instalments commencing September 2025.",
              "Production units for each month are expected to exceed the following month's estimated sales units by 20%. Production will commence on 02 August 2025.",
              "Estimated sales at R50 per unit are as follows: August 0, September 7,000, October 8,000, November 9,000.",
              "Cash sales are forecasted at 60% of the total sales. The balance of the sales will be on credit and the customers are expected to pay in the month after the sale.",
              "Variable manufacturing costs per unit are as follows: Direct materials R12, Direct labour R7, Variable overheads R5.",
              "Direct materials will be purchased for cash for the production requirements of each month.",
              "Direct workers will have their salaries paid on the last working day of each month.",
              "Fixed overheads amount to R10,000 per month and this includes depreciation of R1,000 per month. Fixed and variable overheads are paid in the month after they are incurred."
            ]
          }
        }
      ]
    },
    {
      number: 5,
      marks: 20,
      subquestions: [
        {
          number: "5.1.1",
          required: true,
          task: "Calculate Payback Period of both alternatives (expressed in years and months).",
          marks: 4,
          information: {
            text: "Joe Root Cafe is considering two alternative equipment purchases. The details are as follows:",
            alternatives: {
              "Alternative A": {
                "Initial cost": "R450,000",
                "Annual cash inflows": "R150,000 for 5 years"
              },
              "Alternative B": {
                "Initial cost": "R600,000",
                "Cash inflows": "Year 1: R200,000, Year 2: R250,000, Year 3: R200,000, Year 4: R150,000"
              }
            },
            note: "Ignore taxes."
          }
        },
        {
          number: "5.1.2",
          required: true,
          task: "Calculate Accounting Rate of Return on average investment of the first alternative (expressed to two decimal places).",
          marks: 4,
          information: "Use the same information from Question 5.1.1. Ignore taxes."
        },
        {
          number: "5.1.3",
          required: true,
          task: "Calculate Net Present Value of both alternatives (include present values and NPV calculations). Use discount factors from Appendix 2 ONLY.",
          marks: 6,
          information: "Use the same information from Question 5.1.1. Cost of capital is 12%. Ignore taxes."
        },
        {
          number: "5.2",
          required: true,
          task: "Calculate the Internal Rate of Return (expressed to two decimal places) using two net present value calculations and interpolation. Use discount factors from Appendix 2 ONLY.",
          marks: 6,
          information: {
            text: "Flabella Limited is considering an investment with the following details:",
            investment: {
              "Initial cost": "R500,000",
              "Annual cash inflows": "R180,000 for 4 years",
              "Note": "Ignore taxes"
            }
          }
        }
      ],
      appendices: [
        {
          name: "Appendix 1: Present value of R1",
          description: "Discount factor table for single payments.",
          link: "Included in the original document."
        },
        {
          name: "Appendix 2: Present value of a regular annuity of R1 per period for n periods",
          description: "Discount factor table for annuities.",
          link: "Included in the original document."
        }
      ]
    }
  ]
};
