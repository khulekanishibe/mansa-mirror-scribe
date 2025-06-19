
import React, { useState, useEffect } from 'react';
import { Bold, Italic, Underline, List, Table, Image, FileUp, AlignLeft, AlignCenter, AlignRight, Save } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface AnswerAreaProps {
  questionId: number;
  value: string;
  onChange: (content: string) => void;
}

const AnswerArea = ({ questionId, value, onChange }: AnswerAreaProps) => {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Auto-save functionality
  useEffect(() => {
    if (!value.trim()) return;
    
    const saveTimeout = setTimeout(() => {
      setIsSaving(true);
      // Simulate save operation
      setTimeout(() => {
        setLastSaved(new Date());
        setIsSaving(false);
      }, 500);
    }, 2000); // Auto-save after 2 seconds of inactivity

    return () => clearTimeout(saveTimeout);
  }, [value]);

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
    console.log(`Applying format: ${action}`);
  };

  const insertTable = () => {
    const tableMarkup = `

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
|          |          |          |
|          |          |          |
|          |          |          |

`;
    onChange(value + tableMarkup);
  };

  const insertAccountingTable = () => {
    const accountingTable = `

Cash Budget - [Month] 2025
|                          | Amount (R) |
|--------------------------|------------|
| Opening Balance          |            |
| Add: Receipts            |            |
|   Cash Sales             |            |
|   Credit Collections     |            |
| Total Available          |            |
| Less: Payments           |            |
|   Materials              |            |
|   Labour                 |            |
|   Overheads              |            |
| Closing Balance          |            |

`;
    onChange(value + accountingTable);
  };

  const manualSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setLastSaved(new Date());
      setIsSaving(false);
    }, 300);
  };

  return (
    <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Answer for Question {questionId}
          </h3>
          <Button
            onClick={manualSave}
            variant="outline"
            size="sm"
            className="text-[#1177d1] border-[#1177d1] hover:bg-[#1177d1] hover:text-white"
            disabled={isSaving}
          >
            <Save className="w-4 h-4 mr-2" />
            {isSaving ? 'Saving...' : 'Save Now'}
          </Button>
        </div>
        
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
          
          {/* Accounting-specific table button */}
          <div className="border-l border-gray-300 dark:border-gray-500 mx-2"></div>
          <Button
            variant="ghost"
            size="sm"
            onClick={insertAccountingTable}
            className="h-8 px-2 hover:bg-white dark:hover:bg-gray-600 text-xs"
            title="Insert Accounting Table Template"
          >
            Cash Budget
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your answer here... 

For calculations, show all working steps clearly. For tables, use the formatting toolbar above to insert structured tables.

Example format for calculations:
1. Given information:
   - Variable cost per unit: R150
   - Fixed costs: R70,000
   
2. Formula:
   Break-even units = Fixed costs ÷ Contribution per unit
   
3. Calculation:
   Break-even units = R70,000 ÷ R200 = 350 units"
          className="min-h-96 resize-none border-0 focus:ring-0 text-base leading-relaxed font-mono"
          style={{ minHeight: '400px' }}
        />
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <span>Words: {value.split(/\s+/).filter(word => word.length > 0).length}</span>
            <span>Characters: {value.length}</span>
          </div>
          <div className="flex items-center gap-2">
            {isSaving ? (
              <>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span>Saving...</span>
              </>
            ) : lastSaved ? (
              <>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Saved at {lastSaved.toLocaleTimeString()}</span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Not saved</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerArea;
