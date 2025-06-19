
import React, { useState } from 'react';
import { Plus, Minus, Calculator, Download, Copy } from 'lucide-react';
import { Button } from './ui/button';

interface TableCell {
  value: string;
  isFormula?: boolean;
  isReadOnly?: boolean;
}

interface TableConfig {
  title: string;
  headers: string[];
  initialRows: TableCell[][];
  allowAddRows?: boolean;
  allowAddColumns?: boolean;
  showCalculations?: boolean;
}

interface EditableTableProps {
  config: TableConfig;
  onChange?: (data: TableCell[][]) => void;
}

const EditableTable = ({ config, onChange }: EditableTableProps) => {
  const [data, setData] = useState<TableCell[][]>(config.initialRows);
  const [showCalculations, setShowCalculations] = useState(false);

  const updateCell = (rowIndex: number, colIndex: number, value: string) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = { ...newData[rowIndex][colIndex], value };
    setData(newData);
    onChange?.(newData);
  };

  const addRow = () => {
    if (!config.allowAddRows) return;
    const newRow = config.headers.map(() => ({ value: '', isFormula: false }));
    setData([...data, newRow]);
  };

  const removeRow = (index: number) => {
    if (data.length <= 1) return;
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const calculateTotal = (colIndex: number): string => {
    const sum = data.reduce((acc, row) => {
      const value = parseFloat(row[colIndex]?.value || '0');
      return acc + (isNaN(value) ? 0 : value);
    }, 0);
    return sum.toString();
  };

  const exportToPDF = () => {
    console.log('Exporting to PDF...', data);
  };

  const copyToExcel = () => {
    const csvContent = [
      config.headers.join('\t'),
      ...data.map(row => row.map(cell => cell.value).join('\t'))
    ].join('\n');
    
    navigator.clipboard.writeText(csvContent);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {config.title}
        </h3>
        <div className="flex gap-2">
          {config.showCalculations && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCalculations(!showCalculations)}
              className="text-[#1177d1] border-[#1177d1]"
            >
              <Calculator className="w-4 h-4 mr-2" />
              {showCalculations ? 'Hide' : 'Show'} Calculations
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={copyToExcel}>
            <Copy className="w-4 h-4 mr-2" />
            Copy
          </Button>
          <Button variant="outline" size="sm" onClick={exportToPDF}>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-[#0d643f] text-white">
              {config.headers.map((header, index) => (
                <th key={index} className="border border-gray-300 dark:border-gray-600 p-3 text-left font-medium">
                  {header}
                </th>
              ))}
              {config.allowAddRows && (
                <th className="border border-gray-300 dark:border-gray-600 p-3 w-16">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                {row.map((cell, colIndex) => (
                  <td key={colIndex} className="border border-gray-300 dark:border-gray-600 p-2">
                    {cell.isReadOnly ? (
                      <div className="p-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium">
                        {cell.value}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={cell.value}
                        onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
                        className="w-full p-2 border-0 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#1177d1] rounded font-mono"
                        placeholder="Enter value..."
                      />
                    )}
                  </td>
                ))}
                {config.allowAddRows && (
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeRow(rowIndex)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {config.allowAddRows && (
        <div className="mt-4 flex justify-start">
          <Button
            variant="outline"
            onClick={addRow}
            className="text-[#0d643f] border-[#0d643f] hover:bg-[#0d643f] hover:text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Row
          </Button>
        </div>
      )}

      {showCalculations && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
          <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-2">Auto-calculations:</h4>
          <div className="text-sm text-blue-800 dark:text-blue-300">
            {config.headers.slice(1).map((header, index) => (
              <div key={index}>
                {header} Total: R{calculateTotal(index + 1)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableTable;
