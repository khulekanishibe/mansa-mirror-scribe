
import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Button } from './ui/button';

interface QuestionAreaProps {
  currentQuestion: number;
}

const QuestionArea = ({ currentQuestion }: QuestionAreaProps) => {
  // Sample question data - in real app this would come from props/context
  const questionData = {
    1: {
      title: "Financial Analysis and Business Statistics",
      content: "Analyze the provided financial data and calculate the following statistical measures. Show all your working and provide detailed explanations for each step.",
      attachments: ["Financial_Data_Q1.xlsx", "Instructions.pdf"],
      marks: 25
    },
    // Add more questions as needed
  };

  const question = questionData[currentQuestion as keyof typeof questionData] || questionData[1];

  return (
    <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1177d1] rounded-full flex items-center justify-center text-white text-sm font-bold">
            Q{currentQuestion}
          </div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Question {currentQuestion}
          </h2>
        </div>
        <div className="bg-[#f0ad4e] text-white px-3 py-1 rounded-full text-sm font-medium">
          {question.marks} marks
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
          {question.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {question.content}
        </p>
      </div>

      {question.attachments && question.attachments.length > 0 && (
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Attachments
          </h4>
          <div className="space-y-2">
            {question.attachments.map((filename, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#5bc0de]" />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{filename}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-[#1177d1] hover:text-[#0d5aa7]">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-2">Instructions:</h4>
        <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
          <li>• Show all calculations and working steps</li>
          <li>• Provide clear explanations for your methodology</li>
          <li>• Use appropriate statistical terminology</li>
          <li>• Round final answers to 2 decimal places where applicable</li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionArea;
