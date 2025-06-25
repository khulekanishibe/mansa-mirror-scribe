
export interface ExamModule {
  id: string;
  title: string;
  programme: string;
  year: string;
  intake: string;
  date: string;
  duration: number; // in minutes
  totalMarks: number;
  examType: 'calculation' | 'mcq' | 'essay' | 'mixed';
  description: string;
  startTime: string;
  endTime: string;
}

export const availableModules: ExamModule[] = [
  {
    id: 'management-accounting',
    title: 'Management Accounting',
    programme: 'Bachelor of Business Administration, Bachelor of Commerce',
    year: 'Two (2)',
    intake: 'January 2025 Semester 1',
    date: '17 June 2025',
    duration: 480, // 8 hours
    totalMarks: 100,
    examType: 'calculation',
    description: 'Calculation-heavy exam with financial tables, EOQ calculations, variance analysis, and cash budgets.',
    startTime: '08:00',
    endTime: '16:00'
  },
  {
    id: 'advanced-business-statistics',
    title: 'Advanced Business Statistics',
    programme: 'Bachelor of Commerce in Information and Technology Management',
    year: 'Two (2)',
    intake: 'January 2025 Semester 1',
    date: '19 June 2025',
    duration: 480,
    totalMarks: 100,
    examType: 'mcq',
    description: 'Multiple choice questions covering statistical analysis, probability distributions, and data interpretation.',
    startTime: '08:00',
    endTime: '16:00'
  },
  {
    id: 'database-design-management',
    title: 'Database Design and Management',
    programme: 'Bachelor of Commerce in Information and Technology Management',
    year: 'Two (2)',
    intake: 'January 2025 Semester 1',
    date: '12 June 2025',
    duration: 480,
    totalMarks: 100,
    examType: 'essay',
    description: 'Essay-based exam focusing on database design principles, ERDs, normalization, and SQL concepts.',
    startTime: '08:00',
    endTime: '16:00'
  },
  {
    id: 'principles-it-management',
    title: 'Principles of Information Technology Management',
    programme: 'Bachelor of Commerce in Information and Technology Management',
    year: 'Two (2)',
    intake: 'January 2025 Semester 1',
    date: '10 June 2025',
    duration: 480,
    totalMarks: 100,
    examType: 'mixed',
    description: 'Mixed format exam with essay questions on BPM, IT trends, and organizational technology frameworks.',
    startTime: '08:00',
    endTime: '16:00'
  }
];

export const getModuleById = (id: string): ExamModule | undefined => {
  return availableModules.find(module => module.id === id);
};
