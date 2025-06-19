
import React, { useState } from 'react';
import { SidebarProvider } from '../components/ui/sidebar';
import AssessmentSidebar from '../components/AssessmentSidebar';
import AssessmentHeader from '../components/AssessmentHeader';
import QuestionArea from '../components/QuestionArea';
import AnswerArea from '../components/AnswerArea';
import SubmissionFooter from '../components/SubmissionFooter';
import { ThemeProvider } from '../components/ThemeProvider';
import { examData } from '../data/examData';

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  const totalQuestions = examData.questions.length;

  const handleAnswerChange = (questionId: number, content: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: content
    }));
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-gray-50 dark:bg-gray-900">
          <AssessmentSidebar 
            currentQuestion={currentQuestion}
            onQuestionSelect={setCurrentQuestion}
            answers={answers}
          />
          <div className="flex-1 flex flex-col">
            <AssessmentHeader 
              isDarkMode={isDarkMode}
              onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
            />
            <div className="flex-1 flex flex-col lg:flex-row gap-6 p-6">
              <QuestionArea currentQuestion={currentQuestion} />
              <AnswerArea 
                questionId={currentQuestion}
                value={answers[currentQuestion] || ''}
                onChange={(content) => handleAnswerChange(currentQuestion, content)}
              />
            </div>
            <SubmissionFooter 
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Index;
