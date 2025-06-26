import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { BaseExamData } from '../types/examTypes';

interface QuestionAreaProps {
  currentQuestion: number;
  currentSubQuestion?: number;
  examType?: 'calculation' | 'mcq' | 'essay' | 'mixed';
  examData: BaseExamData;
}

const QuestionArea = ({
  currentQuestion,
  currentSubQuestion = 1,
  examType = 'calculation',
  examData
}: QuestionAreaProps) => {
  const question = examData.questions.find(q => q.number === currentQuestion);
  
  if (!question) {
    return (
      <Card className="mb-6">
        <CardContent className="p-6">
          <p className="text-gray-500">Question not found.</p>
        </CardContent>
      </Card>
    );
  }

  const subQuestion = question.subquestions[currentSubQuestion - 1];
  
  if (!subQuestion) {
    return (
      <Card className="mb-6">
        <CardContent className="p-6">
          <p className="text-gray-500">Sub-question not found.</p>
        </CardContent>
      </Card>
    );
  }

  const renderInformation = (info: any) => {
    if (!info) return null;
    if (typeof info === 'string') {
      return <p className="text-gray-700 dark:text-gray-300 mb-4">{info}</p>;
    }
    if (typeof info === 'object') {
      return <div className="space-y-4">
          {info.text && <p className="text-gray-700 dark:text-gray-300">{info.text}</p>}
          
          {info.table && <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                <thead>
                  <tr className="bg-[#0d643f] text-white">
                    {info.table.columns.map((col: string, index: number) => <th key={index} className="border border-gray-300 dark:border-gray-600 p-3 text-left">
                        {col}
                      </th>)}
                  </tr>
                </thead>
                <tbody>
                  {info.table.rows.map((row: string[], rowIndex: number) => <tr key={rowIndex} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      {row.map((cell: string, cellIndex: number) => <td key={cellIndex} className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">
                          {cell}
                        </td>)}
                    </tr>)}
                </tbody>
              </table>
            </div>}
          
          {info.details && <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-2">Details:</h4>
              <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-300">
                {Object.entries(info.details).map(([key, value]) => <li key={key}>
                    <strong>{key}:</strong> {value as string}
                  </li>)}
              </ul>
            </div>}
          
          {info.data && <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h4 className="font-medium text-green-900 dark:text-green-200 mb-2">Data:</h4>
              <ul className="space-y-1 text-sm text-green-800 dark:text-green-300">
                {Object.entries(info.data).map(([key, value]) => <li key={key}>
                    <strong>{key}:</strong> {value as string}
                  </li>)}
              </ul>
            </div>}
          
          {info.workRecord && <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h4 className="font-medium text-purple-900 dark:text-purple-200 mb-2">Work Record (Units per day):</h4>
              <div className="grid grid-cols-5 gap-2 text-sm">
                {Object.entries(info.workRecord).map(([day, units]) => <div key={day} className="text-center">
                    <div className="font-medium text-purple-800 dark:text-purple-300">{day}</div>
                    <div className="text-purple-700 dark:text-purple-400">{units as string}</div>
                  </div>)}
              </div>
            </div>}
          
          {info.labourCostPerUnit && <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <h4 className="font-medium text-orange-900 dark:text-orange-200 mb-2">Labour Cost Structure:</h4>
              <ul className="space-y-1 text-sm text-orange-800 dark:text-orange-300">
                {info.labourCostPerUnit.map((item: string, index: number) => <li key={index}>• {item}</li>)}
              </ul>
            </div>}
        </div>;
    }
    return null;
  };

  const renderMCQOptions = (options: any[]) => {
    if (!options) return null;
    
    return (
      <div className="mt-4 space-y-2">
        <h4 className="font-medium text-gray-900 dark:text-gray-100">Options:</h4>
        {options.map((option: any, index: number) => (
          <div key={index} className="flex items-center space-x-2 p-2 border border-gray-200 dark:border-gray-700 rounded">
            <span className="font-medium text-[#0d643f]">{option.letter}.</span>
            <span className="text-gray-700 dark:text-gray-300">{option.text}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderCaseStudy = (caseStudy: any) => {
    if (!caseStudy) return null;
    
    return (
      <div className="mb-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
        <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">{caseStudy.title}</h3>
        <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">{caseStudy.content}</p>
      </div>
    );
  };

  const renderArticleExtract = (article: any) => {
    if (!article) return null;
    
    return (
      <div className="mb-6 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
        <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">{article.title}</h3>
        <p className="text-indigo-800 dark:text-indigo-300 text-sm leading-relaxed">{article.content}</p>
      </div>
    );
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center">
            Question {question.number}{subQuestion.number !== question.number.toString() ? `.${subQuestion.number}` : ''}
          </CardTitle>
          <div className="flex gap-2">
            <Badge variant="secondary" className="bg-[#0d643f] text-white">
              {subQuestion.marks} marks
            </Badge>
            {subQuestion.required && <Badge variant="destructive">Required</Badge>}
            {examType === 'mcq' && <Badge variant="outline">Multiple Choice</Badge>}
            {examType === 'essay' && <Badge variant="outline">Essay</Badge>}
            {examType === 'calculation' && <Badge variant="outline">Calculation</Badge>}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Render case study or article extract at the top if available */}
          {examData.caseStudy && renderCaseStudy(examData.caseStudy)}
          {examData.articleExtract && renderArticleExtract(examData.articleExtract)}
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 dark:text-blue-200 mb-2">Required:</h3>
            <p className="text-blue-800 dark:text-blue-300">{subQuestion.task}</p>
          </div>
          
          {renderInformation(subQuestion.information)}
          
          {/* Render MCQ options if available */}
          {examType === 'mcq' && subQuestion.information?.options && renderMCQOptions(subQuestion.information.options)}
          
          {/* Show requirements for essay questions */}
          {(examType === 'essay' || examType === 'mixed') && subQuestion.information?.requirements && (
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-gray-200 mb-2">Requirements:</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {subQuestion.information.requirements.map((req: string, index: number) => (
                  <li key={index}>• {req}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionArea;
