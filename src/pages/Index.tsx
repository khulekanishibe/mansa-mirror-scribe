import React, { useState, useEffect } from 'react';
import { SidebarProvider } from '../components/ui/sidebar';
import AssessmentSidebar from '../components/AssessmentSidebar';
import AssessmentStickyHeader from '../components/AssessmentStickyHeader';
import QuestionArea from '../components/QuestionArea';
import AnswerArea from '../components/AnswerArea';
import ModuleSelection from '../components/ModuleSelection';
import ExamVerification from '../components/ExamVerification';
import { ThemeProvider } from '../components/ThemeProvider';
import { examData } from '../data/examData';
import { ExamModule, getExamDataByModule } from '../data/moduleData';
import { BaseExamData } from '../types/examTypes';

type ExamState = 'module-selection' | 'verification' | 'in-progress';

const Index = () => {
  const [examState, setExamState] = useState<ExamState>('module-selection');
  const [selectedModule, setSelectedModule] = useState<ExamModule | null>(null);
  const [currentExamData, setCurrentExamData] = useState<BaseExamData>({
    ...examData,
    examType: 'calculation'
  });
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentSubQuestion, setCurrentSubQuestion] = useState("1");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [examStartTime, setExamStartTime] = useState<Date | null>(null);

  const handleModuleSelect = (module: ExamModule) => {
    setSelectedModule(module);
    setExamState('verification');
  };

  const normalizeExamData = (data: any, examType: string): BaseExamData => {
    // Handle different exam data structures
    if (data.sections) {
      // IT Management format with sections
      return {
        examTitle: data.examTitle,
        totalMarks: data.totalMarks,
        examType: examType as 'calculation' | 'mcq' | 'essay' | 'mixed',
        questions: [...data.sections.sectionA, ...data.sections.sectionB],
        articleExtract: data.articleExtract,
        sections: data.sections
      };
    } else {
      // Standard format
      return {
        examTitle: data.examTitle,
        totalMarks: data.totalMarks,
        examType: examType as 'calculation' | 'mcq' | 'essay' | 'mixed',
        questions: data.questions,
        caseStudy: data.caseStudy
      };
    }
  };

  const handleStartExam = async () => {
    if (selectedModule) {
      try {
        const examData = await getExamDataByModule(selectedModule);
        const normalizedData = normalizeExamData(examData, selectedModule.examType);
        setCurrentExamData(normalizedData);
        setExamStartTime(new Date());
        setExamState('in-progress');
      } catch (error) {
        console.error('Failed to load exam data:', error);
        // Fallback to default exam data
        setCurrentExamData({
          ...examData,
          examType: 'calculation'
        });
        setExamStartTime(new Date());
        setExamState('in-progress');
      }
    }
  };

  const handleBackToModuleSelection = () => {
    setSelectedModule(null);
    setExamState('module-selection');
  };

  const handleAnswerChange = (questionId: number, subQuestionId: string, content: string) => {
    const answerKey = `${questionId}.${subQuestionId}`;
    setAnswers(prev => ({
      ...prev,
      [answerKey]: content
    }));
  };

  const handleQuestionSelect = (questionId: number, subQuestionId: string = "1") => {
    setCurrentQuestion(questionId);
    setCurrentSubQuestion(subQuestionId);
  };

  const calculateTimeLeft = () => {
    if (!examStartTime || !selectedModule) return "0:00:00";
    
    const now = new Date();
    const examEndTime = new Date(examStartTime.getTime() + selectedModule.duration * 60000);
    const timeLeft = examEndTime.getTime() - now.getTime();
    
    if (timeLeft <= 0) return "0:00:00";
    
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSave = () => {
    console.log('Saving answers...', answers);
    // Implement save logic
  };

  const handleSubmit = () => {
    console.log('Submitting exam...', answers);
    // Implement submit logic
  };

  const handleHelp = () => {
    console.log('Opening help...');
    // Implement help logic
  };

  // Module Selection Phase
  if (examState === 'module-selection') {
    return (
      <ThemeProvider isDarkMode={isDarkMode}>
        <ModuleSelection onModuleSelect={handleModuleSelect} />
      </ThemeProvider>
    );
  }

  // Verification Phase
  if (examState === 'verification' && selectedModule) {
    return (
      <ThemeProvider isDarkMode={isDarkMode}>
        <ExamVerification 
          selectedModule={selectedModule}
          onStartExam={handleStartExam}
          onBack={handleBackToModuleSelection}
        />
      </ThemeProvider>
    );
  }

  // Exam In Progress Phase
  const currentAnswerKey = `${currentQuestion}.${currentSubQuestion}`;
  const currentAnswer = answers[currentAnswerKey] || '';
  const timeLeft = calculateTimeLeft();

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-gray-50 dark:bg-gray-900">
          <AssessmentSidebar 
            currentQuestion={currentQuestion}
            currentSubQuestion={currentSubQuestion}
            onQuestionSelect={handleQuestionSelect}
            answers={answers}
            isCollapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
            examData={currentExamData}
          />
          <div className="flex-1 flex flex-col">
            <AssessmentStickyHeader
              currentQuestion={currentQuestion}
              currentSubQuestion={currentSubQuestion}
              timeLeft={timeLeft}
              isDarkMode={isDarkMode}
              onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
              onSave={handleSave}
              onSubmit={handleSubmit}
              onHelp={handleHelp}
            />
            <div className="flex-1 overflow-auto">
              <div className="max-w-6xl mx-auto p-6 space-y-6">
                <QuestionArea 
                  currentQuestion={currentQuestion}
                  currentSubQuestion={parseInt(currentSubQuestion)}
                  examType={currentExamData.examType}
                  examData={currentExamData}
                />
                <AnswerArea 
                  questionId={currentQuestion}
                  subQuestionId={currentSubQuestion}
                  value={currentAnswer}
                  onChange={(content) => handleAnswerChange(currentQuestion, currentSubQuestion, content)}
                  examType={currentExamData.examType}
                />
              </div>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Index;
