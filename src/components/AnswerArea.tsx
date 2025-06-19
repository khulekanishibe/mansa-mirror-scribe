
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Table as TableIcon, 
  Upload, 
  FileText,
  Calculator,
  Save,
  Clock
} from 'lucide-react';
import EditableTable from './EditableTable';
import { tableTemplates } from '../data/tableConfigs';

interface AnswerAreaProps {
  questionId: number;
  subQuestionId: string;
  value: string;
  onChange: (content: string) => void;
}

const AnswerArea = ({ questionId, subQuestionId, value, onChange }: AnswerAreaProps) => {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [activeTable, setActiveTable] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState('');

  // Auto-save functionality
  useEffect(() => {
    if (value.trim()) {
      const saveTimer = setTimeout(() => {
        setLastSaved(new Date());
      }, 2000);
      
      return () => clearTimeout(saveTimer);
    }
  }, [value]);

  const formatText = (format: string) => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    if (selectedText) {
      let formattedText = '';
      switch (format) {
        case 'bold':
          formattedText = `**${selectedText}**`;
          break;
        case 'italic':
          formattedText = `*${selectedText}*`;
          break;
        case 'underline':
          formattedText = `__${selectedText}__`;
          break;
        default:
          formattedText = selectedText;
      }
      
      const newValue = value.substring(0, start) + formattedText + value.substring(end);
      onChange(newValue);
    }
  };

  const insertSymbol = (symbol: string) => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const newValue = value.substring(0, start) + symbol + value.substring(start);
    onChange(newValue);
  };

  const insertList = (ordered: boolean = false) => {
    const listItem = ordered ? '1. ' : '• ';
    insertSymbol(`\n${listItem}`);
  };

  const mathSymbols = ['√', '²', '³', '±', '≤', '≥', '×', '÷', '%', 'R', '$', '€'];

  const getTableSuggestions = () => {
    const questionKey = `${questionId}.${subQuestionId}`;
    
    // Suggest relevant tables based on question content
    const suggestions = [];
    
    if (questionKey === "1.1") suggestions.push('eoq');
    if (questionKey === "1.2") suggestions.push('fifo');
    if (questionKey === "1.3") suggestions.push('labourCost');
    if (questionKey === "2.2") suggestions.push('incomeStatement');
    if (questionKey === "4") suggestions.push('cashBudget');
    
    return suggestions;
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Answer Area - Question {questionId}.{subQuestionId}
          </CardTitle>
          <div className="flex items-center gap-4">
            {lastSaved && (
              <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                <Save className="w-4 h-4" />
                <span>Saved at {lastSaved.toLocaleTimeString()}</span>
              </div>
            )}
            <Badge variant="outline" className="text-xs">
              {value.length} characters
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Formatting Toolbar */}
        <div className="flex flex-wrap items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => formatText('bold')}
              title="Bold (Ctrl+B)"
            >
              <Bold className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => formatText('italic')}
              title="Italic (Ctrl+I)"
            >
              <Italic className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => formatText('underline')}
              title="Underline (Ctrl+U)"
            >
              <Underline className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
          
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => insertList(false)}
              title="Bullet List"
            >
              <List className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => insertList(true)}
              title="Numbered List"
            >
              <ListOrdered className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600 dark:text-gray-400">Math:</span>
            {mathSymbols.map((symbol) => (
              <Button
                key={symbol}
                variant="outline"
                size="sm"
                onClick={() => insertSymbol(symbol)}
                className="h-8 w-8 p-0 text-sm"
                title={`Insert ${symbol}`}
              >
                {symbol}
              </Button>
            ))}
          </div>
          
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
          
          <Button
            variant="outline"
            size="sm"
            title="Upload File"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
        </div>

        {/* Table Templates */}
        {getTableSuggestions().length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Suggested Accounting Templates
            </h4>
            <div className="flex flex-wrap gap-2">
              {getTableSuggestions().map((templateKey) => (
                <Button
                  key={templateKey}
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveTable(activeTable === templateKey ? null : templateKey)}
                  className={`text-[#0d643f] border-[#0d643f] hover:bg-[#0d643f] hover:text-white ${
                    activeTable === templateKey ? 'bg-[#0d643f] text-white' : ''
                  }`}
                >
                  <TableIcon className="w-4 h-4 mr-2" />
                  {tableTemplates[templateKey]?.title || templateKey}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Active Table */}
        {activeTable && tableTemplates[activeTable] && (
          <EditableTable 
            config={tableTemplates[activeTable]}
            onChange={(data) => {
              console.log('Table data changed:', data);
            }}
          />
        )}

        {/* Main Answer Textarea */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Answer:
          </label>
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={`Type your answer for Question ${questionId}.${subQuestionId} here...

You can use formatting like:
• **bold text**
• *italic text*
• __underlined text__

Show all your working steps clearly.`}
            className="min-h-[400px] font-mono text-sm leading-relaxed resize-y"
          />
        </div>

        {/* File Attachments Section */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
          <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Drag and drop files here, or click to browse
          </p>
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Choose Files
          </Button>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            Supported: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
          </p>
        </div>

        {/* Auto-save Status */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>Auto-save every 2 seconds</span>
          </div>
          <div>
            Word count: {value.split(/\s+/).filter(word => word.length > 0).length}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnswerArea;
