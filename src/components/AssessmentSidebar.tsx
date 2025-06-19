
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
import { examData } from '../data/examData';

interface AssessmentSidebarProps {
  currentQuestion: number;
  onQuestionSelect: (questionId: number) => void;
  answers: Record<number, string>;
}

const AssessmentSidebar = ({ currentQuestion, onQuestionSelect, answers }: AssessmentSidebarProps) => {
  const totalQuestions = examData.questions.length;
  const timeLeft = "1:56:50";
  
  const getQuestionStatus = (questionId: number) => {
    const hasAnswer = answers[questionId] && answers[questionId].trim().length > 50; // Require substantial content
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

  const answeredCount = Object.keys(answers).filter(key => {
    const answer = answers[parseInt(key)];
    return answer && answer.trim().length > 50;
  }).length;

  return (
    <Sidebar className="border-r border-gray-200 dark:border-gray-700">
      <SidebarHeader className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-[#0d643f] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">OSA</span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-100">Assessment Portal</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400">Prototype Test</p>
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
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Total: {examData.totalMarks} marks
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Questions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {examData.questions.map((question) => {
                const status = getQuestionStatus(question.number);
                const subQuestionCount = question.subquestions.length;
                
                return (
                  <SidebarMenuItem key={question.number}>
                    <SidebarMenuButton
                      onClick={() => onQuestionSelect(question.number)}
                      isActive={question.number === currentQuestion}
                      className={`w-full justify-start py-3 ${
                        status === 'answered' ? 'bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/30' : 
                        status === 'current' ? 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30' : 
                        'hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(status)}
                          <div>
                            <span className="font-medium">Question {question.number}</span>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {subQuestionCount} part{subQuestionCount > 1 ? 's' : ''} • {question.marks} marks
                            </div>
                          </div>
                        </div>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <div className="text-xs text-amber-800 dark:text-amber-200">
                <div className="font-medium mb-1">Quick Tips:</div>
                <ul className="space-y-1">
                  <li>• Click any question to jump instantly</li>
                  <li>• Auto-save works every 2 seconds</li>
                  <li>• Use table templates for accounting</li>
                  <li>• Show all working steps</li>
                </ul>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AssessmentSidebar;
