
import React, { useState, useEffect } from 'react';
import { Bold, Italic, Underline, List, Table, Image, FileUp, AlignLeft, AlignCenter, AlignRight, Save, Calculator } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import EditableTable from './EditableTable';
import { tableConfigs } from '../data/tableConfigs';

interface AnswerAreaProps {
  questionId: number;
  value: string;
  onChange: (content: string) => void;
}

const AnswerArea = ({ questionId, value, onChange }: AnswerAreaProps) => {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [showTableMenu, setShowTableMenu] = useState(false);
  const [activeTable, setActiveTable] = useState<string | null>(null);

  // Auto-save functionality
  useEffect(() => {
    if (!value.trim()) return;
    
    const saveTimeout = setTimeout(() => {
      setIsSaving(true);
      setTimeout(() => {
        setLastSaved(new Date());
        setIsSaving(false);
      }, 500);
    }, 2000);

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
    { icon: Image, label: 'Insert Image', action: 'image' },
    { icon: FileUp, label: 'Upload File', action: 'upload' },
  ];

  const handleFormat = (action: string) => {
    console.log(`Applying format: ${action}`);
  };

  const insertMathSymbol = (symbol: string) => {
    onChange(value + symbol);
  };

  const insertTable = (tableType: string) => {
    setActiveTable(tableType);
    setShowTableMenu(false);
  };

  const manualSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setLastSaved(new Date());
      setIsSaving(false);
    }, 300);
  };

  const mathSymbols = ['√', '±', '÷', '×', '²', '³', '∑', '%', '≤', '≥', '≠', '∞'];

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
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
            {formatOptions.map((option, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => handleFormat(option.action)}
                className="h-8 w-8 p-0 hover:bg-white dark:hover:bg-gray-600"
                title={option.label}
              >
                <option.icon className="w-4 h-4" />
              </Button>
            ))}
            
            {/* Table Menu */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowTableMenu(!showTableMenu)}
                className="h-8 w-8 p-0 hover:bg-white dark:hover:bg-gray-600 bg-[#1177d1] text-white"
                title="Insert Accounting Table"
              >
                <Table className="w-4 h-4" />
              </Button>
              
              {showTableMenu && (
                <div className="absolute top-10 left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-10 min-w-48">
                  <div className="p-2">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Accounting Tables</h4>
                    <div className="space-y-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => insertTable('eoq')}
                        className="w-full justify-start text-xs"
                      >
                        EOQ Calculation
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => insertTable('fifo')}
                        className="w-full justify-start text-xs"
                      >
                        FIFO Inventory
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => insertTable('labourCost')}
                        className="w-full justify-start text-xs"
                      >
                        Labour Cost
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => insertTable('cashBudget')}
                        className="w-full justify-start text-xs"
                      >
                        Cash Budget
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => insertTable('incomeStatement')}
                        className="w-full justify-start text-xs"
                      >
                        Income Statement
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Math Symbols */}
          <div className="flex flex-wrap gap-1 p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
            <span className="text-xs font-medium text-amber-800 dark:text-amber-200 mr-2">Math Symbols:</span>
            {mathSymbols.map((symbol, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => insertMathSymbol(symbol)}
                className="h-6 w-6 p-0 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-800 text-xs"
                title={`Insert ${symbol}`}
              >
                {symbol}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-6">
        {/* Active Table */}
        {activeTable && (
          <div className="mb-6">
            <EditableTable 
              config={tableConfigs[activeTable as keyof typeof tableConfigs]} 
              onChange={(data) => console.log('Table data updated:', data)}
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveTable(null)}
              className="mt-2 text-gray-600"
            >
              Remove Table
            </Button>
          </div>
        )}

        {/* Text Area */}
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your answer here... 

For calculations, show all working steps clearly:

1. Given information:
   - Annual demand (D): 12,000 units
   - Ordering cost (S): R500 per order
   - Holding cost (H): R25 per unit per year
   
2. Formula:
   EOQ = √(2DS/H)
   
3. Calculation:
   EOQ = √(2 × 12,000 × 500 ÷ 25)
   EOQ = √(480,000)
   EOQ = 693 units (rounded)
   
4. Number of orders:
   Orders = D ÷ EOQ = 12,000 ÷ 693 = 17.3 ≈ 17 orders per year

Use the table templates above for structured calculations."
          className="min-h-96 resize-none border-0 focus:ring-0 text-base leading-relaxed font-mono"
          style={{ minHeight: '300px' }}
        />
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <span>Words: {value.split(/\s+/).filter(word => word.length > 0).length}</span>
            <span>Characters: {value.length}</span>
            {activeTable && <span className="text-[#1177d1]">Table: {tableConfigs[activeTable as keyof typeof tableConfigs]?.title}</span>}
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
