import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import RichTextEditor, { EditorValue } from 'react-rte';

// Define table interface
interface TableProps {
  allowAddColumns: boolean;
  columns: Array<{ name: string; width: number }>;
  rows: Array<string[]>;
  onAddRow: () => void;
  onRemoveRow: (index: number) => void;
  onAddColumn: () => void;
  onRemoveColumn: (index: number) => void;
  // other necessary props here...
}

const EditableTable: React.FC<TableProps> = ({
  allowAddColumns,
  columns,
  rows,
  onAddRow,
  onRemoveRow,
  onAddColumn,
  onRemoveColumn,
  // additional props...
}) => {
  const [editorStates, setEditorStates] = useState<EditorValue[][]>(
    rows.map((row) => row.map(() => RichTextEditor.createEmptyValue()))
  );

  const handleColumnResize = (newWidth: number, index: number) => {
    const updatedColumns = columns.map((col, i) => 
      i === index ? { ...col, width: newWidth } : col
    );
    // Call a state update or context/provider to update columns externally if needed
  };

  const handleEditorChange = (rowIndex: number, cellIndex: number, newValue: EditorValue) => {
    const updatedEditorStates = editorStates.map((rowStates, rIdx) => 
      rIdx === rowIndex ? rowStates.map((cellState, cIdx) =>
        cIdx === cellIndex ? newValue : cellState
      ) : rowStates
    );
    setEditorStates(updatedEditorStates);
    // Additional logic if you want to persist these changes
  };

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>
              <Rnd
                size={{ width: column.width, height: 'auto' }}
                enableResizing={{ right: true }}
                onResizeStop={(e, direction, ref) => 
                  handleColumnResize(parseFloat(ref.style.width), index)
                }
                style={{ display: 'inline-block', width: '100%' }}
              >
                {allowAddColumns ? (
                  <input
                    type="text"
                    value={column.name}
                    onChange={(e) => { /* Handle column name change */ }}
                  />
                ) : (
                  column.name
                )}
              </Rnd>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>
                <RichTextEditor
                  value={editorStates[rowIndex][cellIndex]}
                  onChange={(newValue) => handleEditorChange(rowIndex, cellIndex, newValue)}
                  toolbarClassName="toolbarAbove"
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditableTable;