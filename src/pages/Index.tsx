
import React, { useState } from 'react';
import { SidebarProvider } from '../components/ui/sidebar';
import AssessmentSidebar from '../components/AssessmentSidebar';
import AssessmentStickyHeader from '../components/AssessmentStickyHeader';
import QuestionArea from '../components/QuestionArea';
import AnswerArea from '../components/AnswerArea';
import { ThemeProvider } from '../components/ThemeProvider';
import { examData } from '../data/examData';

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentSubQuestion, setCurrentSubQuestion] = useState("1");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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

  const currentAnswerKey = `${currentQuestion}.${currentSubQuestion}`;
  const currentAnswer = answers[currentAnswerKey] || '';

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
          />
          <div className="flex-1 flex flex-col">
            <AssessmentStickyHeader
              currentQuestion={currentQuestion}
              currentSubQuestion={currentSubQuestion}
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
                />
                <AnswerArea 
                  questionId={currentQuestion}
                  subQuestionId={currentSubQuestion}
                  value={currentAnswer}
                  onChange={(content) => handleAnswerChange(currentQuestion, currentSubQuestion, content)}
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
