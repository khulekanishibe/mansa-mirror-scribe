import React, { useState } from 'react';
import { Clock, CheckCircle, Circle, AlertCircle, ChevronRight, ChevronDown, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
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
import { Button } from './ui/button';
import { BaseExamData } from '../types/examTypes';

interface AssessmentSidebarProps {
  currentQuestion: number;
  currentSubQuestion?: string;
  onQuestionSelect: (questionId: number, subQuestionId?: string) => void;
  answers: Record<string, string>;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  examData: BaseExamData;
}

const AssessmentSidebar = ({ 
  currentQuestion, 
  currentSubQuestion = "1",
  onQuestionSelect, 
  answers,
  isCollapsed,
  onToggleCollapse,
  examData
}: AssessmentSidebarProps) => {
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([currentQuestion]);
  const timeLeft = "1:56:50";
  
  const toggleQuestionExpansion = (questionNumber: number) => {
    setExpandedQuestions(prev => 
      prev.includes(questionNumber)
        ? prev.filter(q => q !== questionNumber)
        : [...prev, questionNumber]
    );
  };

  const getQuestionStatus = (questionId: number, subQuestionId?: string) => {
    const answerKey = subQuestionId ? `${questionId}.${subQuestionId}` : questionId.toString();
    const hasAnswer = answers[answerKey] && answers[answerKey].trim().length > 50;
    const isCurrent = questionId === currentQuestion && (!subQuestionId || subQuestionId === currentSubQuestion);
    
    if (hasAnswer) return 'answered';
    if (isCurrent) return 'current';
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

  const totalQuestions = examData.questions.length;
  const answeredCount = Object.keys(answers).filter(key => {
    const answer = answers[key];
    return answer && answer.trim().length > 50;
  }).length;

  if (isCollapsed) {
    return (
      <div className="w-16 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center py-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleCollapse}
          className="mb-4"
          title="Expand Sidebar"
        >
          <PanelLeftOpen className="w-5 h-5" />
        </Button>
        <div className="space-y-2">
          {examData.questions.map((question) => {
            const status = getQuestionStatus(question.number);
            return (
              <Button
                key={question.number}
                variant="ghost"
                size="sm"
                onClick={() => onQuestionSelect(question.number, "1")}
                className={`w-10 h-10 p-0 ${
                  status === 'answered' ? 'bg-emerald-50 hover:bg-emerald-100' : 
                  status === 'current' ? 'bg-blue-50 hover:bg-blue-100' : ''
                }`}
                title={`Question ${question.number}`}
              >
                <span className="text-sm font-medium">{question.number}</span>
              </Button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <Sidebar className="border-r border-gray-200 dark:border-gray-700">
      <SidebarHeader className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0d643f] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">OSA</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">Assessment Portal</h2>
              <p className="text-xs text-gray-600 dark:text-gray-400">Enhanced Navigation</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            title="Collapse Sidebar"
          >
            <PanelLeftClose className="w-5 h-5" />
          </Button>
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
                const isExpanded = expandedQuestions.includes(question.number);
                const hasSubQuestions = question.subquestions.length > 1;
                const mainStatus = getQuestionStatus(question.number);
                
                return (
                  <div key={question.number}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        onClick={() => {
                          if (hasSubQuestions) {
                            toggleQuestionExpansion(question.number);
                          } else {
                            onQuestionSelect(question.number, "1");
                          }
                        }}
                        className={`w-full justify-between py-3 ${
                          mainStatus === 'answered' ? 'bg-emerald-50 dark:bg-emerald-900/20' : 
                          mainStatus === 'current' ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {getStatusIcon(mainStatus)}
                          <div>
                            <span className="font-medium">Question {question.number}</span>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {question.subquestions.length} part{question.subquestions.length > 1 ? 's' : ''} • {question.marks} marks
                            </div>
                          </div>
                        </div>
                        {hasSubQuestions && (
                          isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    
                    {hasSubQuestions && isExpanded && (
                      <div className="ml-6 space-y-1 py-2">
                        {question.subquestions.map((subQuestion, index) => {
                          const subStatus = getQuestionStatus(question.number, (index + 1).toString());
                          const isCurrentSub = question.number === currentQuestion && (index + 1).toString() === currentSubQuestion;
                          
                          return (
                            <SidebarMenuItem key={subQuestion.number}>
                              <SidebarMenuButton
                                onClick={() => onQuestionSelect(question.number, (index + 1).toString())}
                                className={`w-full justify-start py-2 text-sm ${
                                  isCurrentSub ? 'bg-blue-100 dark:bg-blue-900/30 font-medium' : ''
                                } ${
                                  subStatus === 'answered' ? 'bg-emerald-25 dark:bg-emerald-900/10' : ''
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  {getStatusIcon(subStatus)}
                                  <span>{subQuestion.number}</span>
                                  <span className="text-xs text-gray-500">({subQuestion.marks}m)</span>
                                </div>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </div>
                    )}
                  </div>
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
                  <li>• Expand questions to see sub-parts</li>
                  <li>• Auto-save works every 2 seconds</li>
                  <li>• Use table templates for calculations</li>
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
