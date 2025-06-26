
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
  examDataFile: string; // Links to the specific exam data file
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
    endTime: '16:00',
    examDataFile: 'managementAccountingData'
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
    endTime: '16:00',
    examDataFile: 'businessStatisticsData'
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
    endTime: '16:00',
    examDataFile: 'databaseDesignData'
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
    endTime: '16:00',
    examDataFile: 'itManagementData'
  }
];

export const getModuleById = (id: string): ExamModule | undefined => {
  return availableModules.find(module => module.id === id);
};

// Helper function to get exam data based on module
export const getExamDataByModule = async (module: ExamModule) => {
  switch (module.examDataFile) {
    case 'managementAccountingData':
      const { managementAccountingExam } = await import('./managementAccountingData');
      return managementAccountingExam;
    case 'businessStatisticsData':
      const { businessStatisticsExam } = await import('./businessStatisticsData');
      return businessStatisticsExam;
    case 'databaseDesignData':
      const { databaseDesignExam } = await import('./databaseDesignData');
      return databaseDesignExam;
    case 'itManagementData':
      const { itManagementExam } = await import('./itManagementData');
      return itManagementExam;
    default:
      throw new Error(`Unknown exam data file: ${module.examDataFile}`);
  }
};
