
import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { examData, type Question, type SubQuestion } from '../data/examData';

interface QuestionAreaProps {
  currentQuestion: number;
}

const QuestionArea = ({ currentQuestion }: QuestionAreaProps) => {
  const question = examData.questions[currentQuestion - 1];
  
  if (!question) return null;

  const renderInformation = (info: any) => {
    if (!info || info === "") return null;
    
    if (typeof info === 'string') {
      return <p className="text-gray-700 dark:text-gray-300 mb-4">{info}</p>;
    }

    return (
      <div className="mb-4 space-y-4">
        {info.text && (
          <p className="text-gray-700 dark:text-gray-300">{info.text}</p>
        )}
        
        {info.table && (
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  {info.table.columns.map((col: string, idx: number) => (
                    <TableHead key={idx} className="font-semibold">{col}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {info.table.rows.map((row: string[], idx: number) => (
                  <TableRow key={idx}>
                    {row.map((cell: string, cellIdx: number) => (
                      <TableCell key={cellIdx}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {info.details && (
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            {Object.entries(info.details).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-1">
                <span className="text-gray-700 dark:text-gray-300">{key}:</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{value as string}</span>
              </div>
            ))}
          </div>
        )}

        {info.data && (
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            {Object.entries(info.data).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-1">
                <span className="text-gray-700 dark:text-gray-300">{key}:</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{value as string}</span>
              </div>
            ))}
          </div>
        )}

        {info.budget && (
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h5 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Budget Information:</h5>
            {Object.entries(info.budget).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-1">
                <span className="text-blue-700 dark:text-blue-300">{key}:</span>
                <span className="font-medium text-blue-900 dark:text-blue-100">{value as string}</span>
              </div>
            ))}
          </div>
        )}

        {info.costs && (
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h5 className="font-semibold text-green-900 dark:text-green-200 mb-2">Cost Information:</h5>
            {Object.entries(info.costs).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-1">
                <span className="text-green-700 dark:text-green-300">{key}:</span>
                <span className="font-medium text-green-900 dark:text-green-100">{value as string}</span>
              </div>
            ))}
          </div>
        )}

        {info.workRecord && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h5 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Work Record (units produced):</h5>
            {Object.entries(info.workRecord).map(([day, units]) => (
              <div key={day} className="flex justify-between items-center py-1">
                <span className="text-yellow-700 dark:text-yellow-300">{day}:</span>
                <span className="font-medium text-yellow-900 dark:text-yellow-100">{units as string}</span>
              </div>
            ))}
          </div>
        )}

        {info.labourCostPerUnit && (
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h5 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">Labour Cost Structure:</h5>
            <ul className="space-y-1">
              {info.labourCostPerUnit.map((cost: string, idx: number) => (
                <li key={idx} className="text-purple-700 dark:text-purple-300">• {cost}</li>
              ))}
            </ul>
          </div>
        )}

        {info.details && Array.isArray(info.details) && (
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <ul className="space-y-2">
              {info.details.map((detail: string, idx: number) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300">• {detail}</li>
              ))}
            </ul>
          </div>
        )}

        {info.note && (
          <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded border-l-4 border-amber-400">
            <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">Note: {info.note}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1177d1] rounded-full flex items-center justify-center text-white text-lg font-bold">
            Q{currentQuestion}
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Question {currentQuestion}
          </h2>
        </div>
        <div className="bg-[#f0ad4e] text-white px-4 py-2 rounded-full text-sm font-medium">
          {question.marks} marks
        </div>
      </div>

      <div className="space-y-6">
        {question.subquestions.map((subQ: SubQuestion) => (
          <div key={subQ.number} className="border-l-4 border-[#1177d1] pl-4">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                {subQ.number}
                {subQ.required && <span className="text-red-500 ml-1">*</span>}
              </h3>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                [{subQ.marks} marks]
              </span>
            </div>
            
            <p className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
              {subQ.task}
            </p>
            
            {renderInformation(subQ.information)}
          </div>
        ))}

        {question.appendices && question.appendices.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Appendices
            </h4>
            <div className="space-y-3">
              {question.appendices.map((appendix, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-gray-100">{appendix.name}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{appendix.description}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#1177d1] hover:text-[#0d5aa7]">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-2">Instructions:</h4>
        <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
          <li>• Show all calculations and working steps clearly</li>
          <li>• Use appropriate accounting terminology and format</li>
          <li>• Round final answers to 2 decimal places where applicable</li>
          <li>• Ensure all required subquestions are answered</li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionArea;
