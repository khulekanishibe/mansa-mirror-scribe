
import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Plus, Minus, GripVertical } from 'lucide-react';

interface TableConfig {
  title: string;
  allowAddColumns: boolean;
  columns: Array<{ name: string; width: number }>;
  rows: Array<string[]>;
}

interface EditableTableProps {
  config: TableConfig;
  onChange: (data: any) => void;
}

const EditableTable: React.FC<EditableTableProps> = ({ config, onChange }) => {
  const [tableData, setTableData] = useState(config.rows);
  const [columns, setColumns] = useState(config.columns);
  const [selectedCell, setSelectedCell] = useState<{row: number, col: number} | null>(null);

  const handleCellChange = (rowIndex: number, cellIndex: number, value: string) => {
    const updatedData = tableData.map((row, rIdx) => 
      rIdx === rowIndex ? row.map((cell, cIdx) =>
        cIdx === cellIndex ? value : cell
      ) : row
    );
    setTableData(updatedData);
    onChange(updatedData);
  };

  const addRow = () => {
    const newRow = new Array(columns.length).fill('');
    const updatedData = [...tableData, newRow];
    setTableData(updatedData);
    onChange(updatedData);
  };

  const removeRow = (index: number) => {
    if (tableData.length <= 1) return;
    const updatedData = tableData.filter((_, idx) => idx !== index);
    setTableData(updatedData);
    onChange(updatedData);
  };

  const addColumn = () => {
    if (!config.allowAddColumns) return;
    
    const newColumn = { name: `Column ${columns.length + 1}`, width: 120 };
    const updatedColumns = [...columns, newColumn];
    const updatedData = tableData.map(row => [...row, '']);
    
    setColumns(updatedColumns);
    setTableData(updatedData);
    onChange(updatedData);
  };

  const removeColumn = (index: number) => {
    if (!config.allowAddColumns || columns.length <= 1) return;
    
    const updatedColumns = columns.filter((_, idx) => idx !== index);
    const updatedData = tableData.map(row => row.filter((_, idx) => idx !== index));
    
    setColumns(updatedColumns);
    setTableData(updatedData);
    onChange(updatedData);
  };

  return (
    <div className="border rounded-lg bg-white shadow-sm">
      {/* Table Header */}
      <div className="bg-gray-50 p-3 border-b flex items-center justify-between">
        <h3 className="font-medium text-gray-900">{config.title}</h3>
        <div className="flex gap-2">
          <Button
            onClick={addRow}
            size="sm"
            variant="outline"
            className="h-8 px-3"
          >
            <Plus className="w-4 h-4 mr-1" />
            Row
          </Button>
          {config.allowAddColumns && (
            <Button
              onClick={addColumn}
              size="sm"
              variant="outline"
              className="h-8 px-3"
            >
              <Plus className="w-4 h-4 mr-1" />
              Column
            </Button>
          )}
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-auto max-h-96">
        <table className="w-full border-collapse">
          {/* Table Headers */}
          <thead>
            <tr className="bg-gray-100">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="border border-gray-300 p-0 relative group"
                  style={{ minWidth: column.width }}
                >
                  <div className="p-2 flex items-center justify-between">
                    <span className="font-medium text-sm text-gray-700">
                      {column.name}
                    </span>
                    {config.allowAddColumns && columns.length > 1 && (
                      <Button
                        onClick={() => removeColumn(index)}
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Minus className="w-3 h-3 text-red-500" />
                      </Button>
                    )}
                  </div>
                </th>
              ))}
              <th className="border border-gray-300 w-12 p-1">
                <GripVertical className="w-4 h-4 mx-auto text-gray-400" />
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border border-gray-300 p-0"
                  >
                    <textarea
                      value={cell}
                      onChange={(e) => handleCellChange(rowIndex, cellIndex, e.target.value)}
                      onFocus={() => setSelectedCell({row: rowIndex, col: cellIndex})}
                      onBlur={() => setSelectedCell(null)}
                      className={`
                        w-full h-full min-h-[40px] p-2 border-none resize-none 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset
                        bg-transparent text-sm
                        ${selectedCell?.row === rowIndex && selectedCell?.col === cellIndex 
                          ? 'bg-blue-50' : ''
                        }
                      `}
                      placeholder="Enter value..."
                      rows={1}
                      style={{ 
                        minWidth: columns[cellIndex]?.width || 120,
                        fontFamily: 'inherit'
                      }}
                    />
                  </td>
                ))}
                <td className="border border-gray-300 p-1 text-center">
                  <Button
                    onClick={() => removeRow(rowIndex)}
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 hover:bg-red-50"
                    disabled={tableData.length <= 1}
                  >
                    <Minus className="w-3 h-3 text-red-500" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="bg-gray-50 p-2 border-t text-xs text-gray-500 flex justify-between">
        <span>{tableData.length} rows × {columns.length} columns</span>
        <span>Click any cell to edit • Use Tab to move between cells</span>
      </div>
    </div>
  );
};

export default EditableTable;
