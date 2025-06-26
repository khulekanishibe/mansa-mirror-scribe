
export interface BaseSubQuestion {
  number: string;
  required: boolean;
  task: string;
  marks: number;
  information?: any;
}

export interface BaseQuestion {
  number: number;
  marks: number;
  subquestions: BaseSubQuestion[];
  appendices?: Array<{
    name: string;
    description: string;
    link: string;
  }>;
}

export interface BaseExamData {
  examTitle: string;
  totalMarks: number;
  examType: 'calculation' | 'mcq' | 'essay' | 'mixed';
  questions: BaseQuestion[];
  caseStudy?: {
    title: string;
    content: string;
  };
  articleExtract?: {
    title: string;
    content: string;
  };
  sections?: {
    sectionA: BaseQuestion[];
    sectionB: BaseQuestion[];
  };
}
