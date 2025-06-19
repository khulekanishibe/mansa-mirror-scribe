
import React, { useState } from 'react';
import { Bold, Italic, Underline, List, Table, Image, FileUp, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface AnswerAreaProps {
  questionId: number;
  value: string;
  onChange: (content: string) => void;
}

const AnswerArea = ({ questionId, value, onChange }: AnswerAreaProps) => {
  const [isFormatted, setIsFormatted] = useState(false);

  const formatOptions = [
    { icon: Bold, label: 'Bold', action: 'bold' },
    { icon: Italic, label: 'Italic', action: 'italic' },
    { icon: Underline, label: 'Underline', action: 'underline' },
    { icon: List, label: 'Bullet List', action: 'list' },
    { icon: AlignLeft, label: 'Align Left', action: 'alignLeft' },
    { icon: AlignCenter, label: 'Align Center', action: 'alignCenter' },
    { icon: AlignRight, label: 'Align Right', action: 'alignRight' },
    { icon: Table, label: 'Insert Table', action: 'table' },
    { icon: Image, label: 'Insert Image', action: 'image' },
    { icon: FileUp, label: 'Upload File', action: 'upload' },
  ];

  const handleFormat = (action: string) => {
    // In a real implementation, this would apply formatting to selected text
    console.log(`Applying format: ${action}`);
    setIsFormatted(true);
  };

  const insertTable = () => {
    const tableMarkup = `
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

`;
    onChange(value + tableMarkup);
  };

  return (
    <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="border-b border-gray-200 dark:border-gray-700 p-4">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Your Answer for Question {questionId}
        </h3>
        
        {/* Formatting Toolbar */}
        <div className="flex flex-wrap gap-1 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
          {formatOptions.map((option, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={() => option.action === 'table' ? insertTable() : handleFormat(option.action)}
              className="h-8 w-8 p-0 hover:bg-white dark:hover:bg-gray-600"
              title={option.label}
            >
              <option.icon className="w-4 h-4" />
            </Button>
          ))}
        </div>
      </div>

      <div className="p-4 flex-1">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your answer here... Use the formatting toolbar above for rich text formatting, tables, and file uploads."
          className="min-h-96 resize-none border-0 focus:ring-0 text-base leading-relaxed"
        />
        
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <span>Words: {value.split(/\s+/).filter(word => word.length > 0).length}</span>
            <span>Characters: {value.length}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Auto-saved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerArea;
