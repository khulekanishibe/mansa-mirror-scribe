
import React from 'react';
import { Clock, CheckCircle, Circle, AlertCircle } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from './ui/sidebar';

interface AssessmentSidebarProps {
  currentQuestion: number;
  onQuestionSelect: (questionId: number) => void;
  answers: Record<number, string>;
}

const AssessmentSidebar = ({ currentQuestion, onQuestionSelect, answers }: AssessmentSidebarProps) => {
  const totalQuestions = 10;
  const timeLeft = "1:56:50";
  
  const getQuestionStatus = (questionId: number) => {
    const hasAnswer = answers[questionId] && answers[questionId].trim().length > 0;
    if (hasAnswer) return 'answered';
    if (questionId === currentQuestion) return 'current';
    return 'unanswered';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'answered':
        return <CheckCircle className="w-4 h-4 text-emerald-600" />;
      case 'current':
        return <AlertCircle className="w-4 h-4 text-blue-600" />;
      default:
        return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };

  const answeredCount = Object.keys(answers).filter(key => answers[parseInt(key)]?.trim().length > 0).length;

  return (
    <Sidebar className="border-r border-gray-200 dark:border-gray-700">
      <SidebarHeader className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-[#0d643f] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">M</span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-100">MANCOSA</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400">Online Assessment</p>
          </div>
        </div>
        
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-700 dark:text-red-400">Time Remaining</span>
          </div>
          <div className="text-lg font-bold text-red-700 dark:text-red-400">{timeLeft}</div>
          <div className="text-xs text-red-600 dark:text-red-500 mt-1">Auto-submit at 00:00:00</div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Progress Overview</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-2 py-3">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Completed</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {answeredCount}/{totalQuestions}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-[#0d643f] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Questions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((questionId) => {
                const status = getQuestionStatus(questionId);
                return (
                  <SidebarMenuItem key={questionId}>
                    <SidebarMenuButton
                      onClick={() => onQuestionSelect(questionId)}
                      isActive={questionId === currentQuestion}
                      className={`w-full justify-start ${
                        status === 'answered' ? 'bg-emerald-50 dark:bg-emerald-900/20' : 
                        status === 'current' ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                      }`}
                    >
                      {getStatusIcon(status)}
                      <span>Question {questionId}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AssessmentSidebar;
