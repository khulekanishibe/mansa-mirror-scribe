import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import TableCell from '@tiptap/extension-table-cell';

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

  const editor = useEditor({
    extensions: [
      StarterKit,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: '<p>Rich text editor for table cells</p>',
  });

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
    const updatedData = tableData.filter((_, idx) => idx !== index);
    setTableData(updatedData);
    onChange(updatedData);
  };

  const addColumn = () => {
    if (!config.allowAddColumns) return;
    
    const newColumn = { name: `Column ${columns.length + 1}`, width: 150 };
    const updatedColumns = [...columns, newColumn];
    const updatedData = tableData.map(row => [...row, '']);
    
    setColumns(updatedColumns);
    setTableData(updatedData);
    onChange(updatedData);
  };

  const removeColumn = (index: number) => {
    if (!config.allowAddColumns) return;
    
    const updatedColumns = columns.filter((_, idx) => idx !== index);
    const updatedData = tableData.map(row => row.filter((_, idx) => idx !== index));
    
    setColumns(updatedColumns);
    setTableData(updatedData);
    onChange(updatedData);
  };

  const handleColumnResize = (newWidth: number, index: number) => {
    const updatedColumns = columns.map((col, i) => 
      i === index ? { ...col, width: newWidth } : col
    );
    setColumns(updatedColumns);
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800 p-3 border-b">
        <h3 className="font-medium text-gray-900 dark:text-gray-100">{config.title}</h3>
        <div className="flex gap-2 mt-2">
          <button
            onClick={addRow}
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Row
          </button>
          {config.allowAddColumns && (
            <button
              onClick={addColumn}
              className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add Column
            </button>
          )}
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              {columns.map((column, index) => (
                <th key={index} className="border border-gray-300 dark:border-gray-600">
                  <Rnd
                    size={{ width: column.width, height: 'auto' }}
                    enableResizing={{ right: true }}
                    disableDragging
                    onResizeStop={(e, direction, ref) => 
                      handleColumnResize(parseFloat(ref.style.width), index)
                    }
                    className="p-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{column.name}</span>
                      {config.allowAddColumns && columns.length > 1 && (
                        <button
                          onClick={() => removeColumn(index)}
                          className="ml-2 text-red-500 hover:text-red-700 text-xs"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </Rnd>
                </th>
              ))}
              <th className="border border-gray-300 dark:border-gray-600 w-12">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 dark:border-gray-600 p-0">
                    <textarea
                      value={cell}
                      onChange={(e) => handleCellChange(rowIndex, cellIndex, e.target.value)}
                      className="w-full h-full min-h-[60px] p-2 border-none resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                      placeholder="Enter value..."
                    />
                  </td>
                ))}
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">
                  <button
                    onClick={() => removeRow(rowIndex)}
                    className="text-red-500 hover:text-red-700 text-sm"
                    disabled={tableData.length <= 1}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditableTable;