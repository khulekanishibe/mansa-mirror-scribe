
export interface MCQOption {
  letter: string;
  text: string;
}

export interface MCQSubQuestion {
  number: string;
  required: boolean;
  task: string;
  marks: number;
  options: MCQOption[];
  information?: any;
}

export interface MCQQuestion {
  number: number;
  marks: number;
  subquestions: MCQSubQuestion[];
}

export interface MCQExamData {
  examTitle: string;
  totalMarks: number;
  questions: MCQQuestion[];
}

export const businessStatisticsExam: MCQExamData = {
  examTitle: "Advanced Business Statistics",
  totalMarks: 100,
  questions: [
    {
      number: 1,
      marks: 4,
      subquestions: [
        {
          number: "1",
          required: true,
          task: "Which of the following is NOT a measure of central tendency?",
          marks: 4,
          options: [
            { letter: "A", text: "Mean" },
            { letter: "B", text: "Median" },
            { letter: "C", text: "Mode" },
            { letter: "D", text: "Standard deviation" }
          ]
        }
      ]
    },
    {
      number: 2,
      marks: 4,
      subquestions: [
        {
          number: "2",
          required: true,
          task: "In a normal distribution, approximately what percentage of data falls within two standard deviations of the mean?",
          marks: 4,
          options: [
            { letter: "A", text: "68%" },
            { letter: "B", text: "95%" },
            { letter: "C", text: "99.7%" },
            { letter: "D", text: "50%" }
          ]
        }
      ]
    },
    {
      number: 3,
      marks: 4,
      subquestions: [
        {
          number: "3",
          required: true,
          task: "Based on the data table below, what is the median sales value?",
          marks: 4,
          information: {
            table: {
              columns: ["Month", "Sales (R'000)"],
              rows: [
                ["January", "120"],
                ["February", "135"],
                ["March", "110"],
                ["April", "150"],
                ["May", "125"]
              ]
            }
          },
          options: [
            { letter: "A", text: "R125,000" },
            { letter: "B", text: "R128,000" },
            { letter: "C", text: "R135,000" },
            { letter: "D", text: "R130,000" }
          ]
        }
      ]
    },
    {
      number: 4,
      marks: 4,
      subquestions: [
        {
          number: "4",
          required: true,
          task: "What type of probability distribution is used for modeling the number of successes in a fixed number of independent trials?",
          marks: 4,
          options: [
            { letter: "A", text: "Normal distribution" },
            { letter: "B", text: "Binomial distribution" },
            { letter: "C", text: "Poisson distribution" },
            { letter: "D", text: "Exponential distribution" }
          ]
        }
      ]
    },
    {
      number: 5,
      marks: 4,
      subquestions: [
        {
          number: "5",
          required: true,
          task: "In hypothesis testing, what is a Type I error?",
          marks: 4,
          options: [
            { letter: "A", text: "Accepting a false null hypothesis" },
            { letter: "B", text: "Rejecting a true null hypothesis" },
            { letter: "C", text: "Accepting a true alternative hypothesis" },
            { letter: "D", text: "Rejecting a false alternative hypothesis" }
          ]
        }
      ]
    },
    {
      number: 6,
      marks: 4,
      subquestions: [
        {
          number: "6",
          required: true,
          task: "Based on the frequency distribution below, what is the mode?",
          marks: 4,
          information: {
            table: {
              columns: ["Value", "Frequency"],
              rows: [
                ["10", "3"],
                ["15", "7"],
                ["20", "12"],
                ["25", "8"],
                ["30", "4"]
              ]
            }
          },
          options: [
            { letter: "A", text: "15" },
            { letter: "B", text: "20" },
            { letter: "C", text: "25" },
            { letter: "D", text: "12" }
          ]
        }
      ]
    },
    {
      number: 7,
      marks: 4,
      subquestions: [
        {
          number: "7",
          required: true,
          task: "What is the coefficient of variation if the mean is 50 and the standard deviation is 10?",
          marks: 4,
          options: [
            { letter: "A", text: "0.2 or 20%" },
            { letter: "B", text: "0.5 or 50%" },
            { letter: "C", text: "5.0 or 500%" },
            { letter: "D", text: "0.1 or 10%" }
          ]
        }
      ]
    },
    {
      number: 8,
      marks: 4,
      subquestions: [
        {
          number: "8",
          required: true,
          task: "Using the correlation data below, what type of relationship exists between X and Y?",
          marks: 4,
          information: {
            data: {
              "Correlation coefficient (r)": "-0.85",
              "Sample size": "30"
            }
          },
          options: [
            { letter: "A", text: "Strong positive correlation" },
            { letter: "B", text: "Weak positive correlation" },
            { letter: "C", text: "Strong negative correlation" },
            { letter: "D", text: "No correlation" }
          ]
        }
      ]
    },
    {
      number: 9,
      marks: 4,
      subquestions: [
        {
          number: "9",
          required: true,
          task: "In a chi-square test of independence, what does a large chi-square value indicate?",
          marks: 4,
          options: [
            { letter: "A", text: "Strong association between variables" },
            { letter: "B", text: "No association between variables" },
            { letter: "C", text: "Perfect correlation" },
            { letter: "D", text: "Normal distribution" }
          ]
        }
      ]
    },
    {
      number: 10,
      marks: 4,
      subquestions: [
        {
          number: "10",
          required: true,
          task: "Based on the regression output below, what percentage of variation in Y is explained by X?",
          marks: 4,
          information: {
            data: {
              "R-squared": "0.64",
              "Adjusted R-squared": "0.62",
              "Standard error": "2.5"
            }
          },
          options: [
            { letter: "A", text: "62%" },
            { letter: "B", text: "64%" },
            { letter: "C", text: "0.8%" },
            { letter: "D", text: "2.5%" }
          ]
        }
      ]
    },
    {
      number: 11,
      marks: 4,
      subquestions: [
        {
          number: "11",
          required: true,
          task: "What is the standard error of the mean if the population standard deviation is 20 and the sample size is 100?",
          marks: 4,
          options: [
            { letter: "A", text: "2" },
            { letter: "B", text: "0.2" },
            { letter: "C", text: "20" },
            { letter: "D", text: "200" }
          ]
        }
      ]
    },
    {
      number: 12,
      marks: 4,
      subquestions: [
        {
          number: "12",
          required: true,
          task: "Using the time series data below, what is the trend?",
          marks: 4,
          information: {
            table: {
              columns: ["Quarter", "Sales (R'000)"],
              rows: [
                ["Q1 2024", "100"],
                ["Q2 2024", "110"],
                ["Q3 2024", "120"],
                ["Q4 2024", "130"],
                ["Q1 2025", "140"]
              ]
            }
          },
          options: [
            { letter: "A", text: "Increasing trend" },
            { letter: "B", text: "Decreasing trend" },
            { letter: "C", text: "No trend" },
            { letter: "D", text: "Cyclical pattern" }
          ]
        }
      ]
    },
    {
      number: 13,
      marks: 4,
      subquestions: [
        {
          number: "13",
          required: true,
          task: "In a confidence interval, what happens to the interval width when the confidence level increases?",
          marks: 4,
          options: [
            { letter: "A", text: "It becomes narrower" },
            { letter: "B", text: "It becomes wider" },
            { letter: "C", text: "It remains the same" },
            { letter: "D", text: "It becomes zero" }
          ]
        }
      ]
    },
    {
      number: 14,
      marks: 4,
      subquestions: [
        {
          number: "14",
          required: true,
          task: "What is the probability of getting exactly 3 heads in 5 coin tosses?",
          marks: 4,
          options: [
            { letter: "A", text: "10/32" },
            { letter: "B", text: "5/16" },
            { letter: "C", text: "3/8" },
            { letter: "D", text: "1/2" }
          ]
        }
      ]
    },
    {
      number: 15,
      marks: 4,
      subquestions: [
        {
          number: "15",
          required: true,
          task: "Based on the ANOVA table below, what is the F-statistic?",
          marks: 4,
          information: {
            table: {
              columns: ["Source", "SS", "df", "MS"],
              rows: [
                ["Between Groups", "150", "2", "75"],
                ["Within Groups", "300", "27", "11.11"],
                ["Total", "450", "29", ""]
              ]
            }
          },
          options: [
            { letter: "A", text: "6.75" },
            { letter: "B", text: "13.5" },
            { letter: "C", text: "2.25" },
            { letter: "D", text: "75" }
          ]
        }
      ]
    },
    {
      number: 16,
      marks: 4,
      subquestions: [
        {
          number: "16",
          required: true,
          task: "Which sampling method ensures every member of the population has an equal chance of being selected?",
          marks: 4,
          options: [
            { letter: "A", text: "Systematic sampling" },
            { letter: "B", text: "Stratified sampling" },
            { letter: "C", text: "Simple random sampling" },
            { letter: "D", text: "Cluster sampling" }
          ]
        }
      ]
    },
    {
      number: 17,
      marks: 4,
      subquestions: [
        {
          number: "17",
          required: true,
          task: "Using the box plot data below, what is the interquartile range (IQR)?",
          marks: 4,
          information: {
            data: {
              "Minimum": "10",
              "Q1": "25",
              "Median": "40",
              "Q3": "55",
              "Maximum": "80"
            }
          },
          options: [
            { letter: "A", text: "30" },
            { letter: "B", text: "15" },
            { letter: "C", text: "45" },
            { letter: "D", text: "70" }
          ]
        }
      ]
    },
    {
      number: 18,
      marks: 4,
      subquestions: [
        {
          number: "18",
          required: true,
          task: "What is the expected value of a discrete random variable with the probability distribution shown below?",
          marks: 4,
          information: {
            table: {
              columns: ["X", "P(X)"],
              rows: [
                ["1", "0.2"],
                ["2", "0.3"],
                ["3", "0.4"],
                ["4", "0.1"]
              ]
            }
          },
          options: [
            { letter: "A", text: "2.4" },
            { letter: "B", text: "2.5" },
            { letter: "C", text: "2.0" },
            { letter: "D", text: "3.0" }
          ]
        }
      ]
    },
    {
      number: 19,
      marks: 4,
      subquestions: [
        {
          number: "19",
          required: true,
          task: "In multiple regression analysis, what does multicollinearity refer to?",
          marks: 4,
          options: [
            { letter: "A", text: "High correlation between independent variables" },
            { letter: "B", text: "Low correlation between variables" },
            { letter: "C", text: "Non-linear relationships" },
            { letter: "D", text: "Heteroscedasticity" }
          ]
        }
      ]
    },
    {
      number: 20,
      marks: 4,
      subquestions: [
        {
          number: "20",
          required: true,
          task: "Based on the seasonal indices below, which quarter shows the highest seasonal effect?",
          marks: 4,
          information: {
            table: {
              columns: ["Quarter", "Seasonal Index"],
              rows: [
                ["Q1", "0.85"],
                ["Q2", "1.15"],
                ["Q3", "1.25"],
                ["Q4", "0.75"]
              ]
            }
          },
          options: [
            { letter: "A", text: "Q1" },
            { letter: "B", text: "Q2" },
            { letter: "C", text: "Q3" },
            { letter: "D", text: "Q4" }
          ]
        }
      ]
    },
    {
      number: 21,
      marks: 4,
      subquestions: [
        {
          number: "21",
          required: true,
          task: "What is the margin of error for a 95% confidence interval with a standard error of 2?",
          marks: 4,
          options: [
            { letter: "A", text: "1.96" },
            { letter: "B", text: "3.92" },
            { letter: "C", text: "2.00" },
            { letter: "D", text: "0.98" }
          ]
        }
      ]
    },
    {
      number: 22,
      marks: 4,
      subquestions: [
        {
          number: "22",
          required: true,
          task: "In quality control, what does a control chart primarily help to identify?",
          marks: 4,
          options: [
            { letter: "A", text: "Process variation" },
            { letter: "B", text: "Product defects" },
            { letter: "C", text: "Customer satisfaction" },
            { letter: "D", text: "Cost reduction" }
          ]
        }
      ]
    },
    {
      number: 23,
      marks: 4,
      subquestions: [
        {
          number: "23",
          required: true,
          task: "What is the probability of a Type II error also known as?",
          marks: 4,
          options: [
            { letter: "A", text: "Alpha (α)" },
            { letter: "B", text: "Beta (β)" },
            { letter: "C", text: "Power" },
            { letter: "D", text: "P-value" }
          ]
        }
      ]
    },
    {
      number: 24,
      marks: 4,
      subquestions: [
        {
          number: "24",
          required: true,
          task: "Using the contingency table below, what is the expected frequency for cell (A,Y)?",
          marks: 4,
          information: {
            table: {
              columns: ["", "X", "Y", "Total"],
              rows: [
                ["A", "20", "30", "50"],
                ["B", "40", "10", "50"],
                ["Total", "60", "40", "100"]
              ]
            }
          },
          options: [
            { letter: "A", text: "20" },
            { letter: "B", text: "30" },
            { letter: "C", text: "25" },
            { letter: "D", text: "15" }
          ]
        }
      ]
    },
    {
      number: 25,
      marks: 4,
      subquestions: [
        {
          number: "25",
          required: true,
          task: "Based on the scatter plot data below, what type of relationship best describes the pattern?",
          marks: 4,
          information: {
            table: {
              columns: ["X", "Y"],
              rows: [
                ["1", "2"],
                ["2", "8"],
                ["3", "18"],
                ["4", "32"],
                ["5", "50"]
              ]
            }
          },
          options: [
            { letter: "A", text: "Linear relationship" },
            { letter: "B", text: "Quadratic relationship" },
            { letter: "C", text: "Exponential relationship" },
            { letter: "D", text: "No relationship" }
          ]
        }
      ]
    }
  ]
};
