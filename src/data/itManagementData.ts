
export interface ITEssaySubQuestion {
  number: string;
  required: boolean;
  task: string;
  marks: number;
  information?: any;
}

export interface ITEssayQuestion {
  number: number;
  marks: number;
  subquestions: ITEssaySubQuestion[];
}

export interface ITEssayExamData {
  examTitle: string;
  totalMarks: number;
  articleExtract?: {
    title: string;
    content: string;
  };
  sections: {
    sectionA: ITEssayQuestion[];
    sectionB: ITEssayQuestion[];
  };
}

export const itManagementExam: ITEssayExamData = {
  examTitle: "Principles of Information Technology Management",
  totalMarks: 100,
  articleExtract: {
    title: "Business Process Management in the Digital Age",
    content: "Business Process Management (BPM) has evolved significantly with the advent of digital technologies. Organizations are increasingly adopting BPM to streamline operations, reduce costs, and improve customer satisfaction. The integration of artificial intelligence, machine learning, and automation technologies has revolutionized how businesses approach process optimization. Modern BPM systems enable real-time monitoring, predictive analytics, and intelligent decision-making. However, successful BPM implementation requires careful consideration of organizational culture, change management, and technology infrastructure. Companies that embrace BPM often see improvements in efficiency, compliance, and agility. The key to successful BPM lies in understanding that it's not just about technology, but about redesigning business processes to create value. Organizations must also consider the human element, ensuring that employees are trained and motivated to work with new processes and technologies."
  },
  sections: {
    sectionA: [
      {
        number: 1,
        marks: 25,
        subquestions: [
          {
            number: "1",
            required: true,
            task: "Based on the article extract provided, critically analyze the role of Business Process Management (BPM) in modern organizations. Discuss how digital technologies have transformed BPM practices and evaluate the benefits and challenges organizations face when implementing BPM systems.",
            marks: 25,
            information: {
              requirements: [
                "Critical analysis of BPM's role in modern organizations",
                "Discussion of digital transformation impact on BPM",
                "Evaluation of benefits and challenges",
                "Reference to the article extract",
                "Use of relevant examples"
              ]
            }
          }
        ]
      },
      {
        number: 2,
        marks: 25,
        subquestions: [
          {
            number: "2",
            required: true,
            task: "Examine the relationship between information technology strategy and business strategy in contemporary organizations. Discuss how IT can be used as a competitive advantage and analyze the factors that organizations should consider when aligning IT strategy with business objectives.",
            marks: 25,
            information: {
              requirements: [
                "Examination of IT-business strategy relationship",
                "Discussion of IT as competitive advantage",
                "Analysis of alignment factors",
                "Contemporary organizational context",
                "Strategic considerations and frameworks"
              ]
            }
          }
        ]
      }
    ],
    sectionB: [
      {
        number: 3,
        marks: 25,
        subquestions: [
          {
            number: "3",
            required: false,
            task: "Evaluate the impact of cloud computing on organizational IT infrastructure and operations. Discuss the various cloud service models (IaaS, PaaS, SaaS) and analyze the strategic considerations organizations should make when migrating to cloud-based solutions.",
            marks: 25,
            information: {
              requirements: [
                "Evaluation of cloud computing impact",
                "Discussion of cloud service models",
                "Analysis of migration considerations",
                "Strategic implications",
                "Benefits and risks assessment"
              ]
            }
          }
        ]
      },
      {
        number: 4,
        marks: 25,
        subquestions: [
          {
            number: "4",
            required: false,
            task: "Analyze the challenges and opportunities presented by digital transformation in organizations. Discuss the role of emerging technologies (such as AI, IoT, blockchain) in driving digital transformation and examine the organizational capabilities required for successful digital transformation initiatives.",
            marks: 25,
            information: {
              requirements: [
                "Analysis of digital transformation challenges and opportunities",
                "Discussion of emerging technologies role",
                "Examination of required organizational capabilities",
                "Success factors for digital transformation",
                "Change management considerations"
              ]
            }
          }
        ]
      },
      {
        number: 5,
        marks: 25,
        subquestions: [
          {
            number: "5",
            required: false,
            task: "Critically examine the importance of IT governance and risk management in modern organizations. Discuss the frameworks and best practices that organizations can adopt to ensure effective IT governance, and analyze how IT risk management contributes to overall organizational resilience.",
            marks: 25,
            information: {
              requirements: [
                "Critical examination of IT governance importance",
                "Discussion of frameworks and best practices",
                "Analysis of IT risk management contribution",
                "Organizational resilience considerations",
                "Governance structures and processes"
              ]
            }
          }
        ]
      },
      {
        number: 6,
        marks: 25,
        subquestions: [
          {
            number: "6",
            required: false,
            task: "Evaluate the role of data management and analytics in supporting business decision-making. Discuss the challenges organizations face in managing big data and analyze how business intelligence and analytics tools can be leveraged to create competitive advantage.",
            marks: 25,
            information: {
              requirements: [
                "Evaluation of data management role in decision-making",
                "Discussion of big data challenges",
                "Analysis of BI and analytics tools",
                "Competitive advantage creation",
                "Data governance and quality considerations"
              ]
            }
          }
        ]
      }
    ]
  }
};
