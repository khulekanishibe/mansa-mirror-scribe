
import React, { useState } from 'react';
import { Bold, Italic, Underline, List, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

const AnswerBooklet = () => {
  const [content, setContent] = useState('');

  return (
    <div className="px-4 py-6 bg-white">
      <h2 className="text-lg font-medium mb-4">Online Answer Booklet (Please type your answers below)</h2>
      
      {/* Toolbar */}
      <div className="border border-gray-300 bg-gray-50 p-2 mb-0 flex items-center space-x-1">
        <select className="text-sm border border-gray-300 px-2 py-1">
          <option>A+</option>
        </select>
        <div className="w-px h-6 bg-gray-300 mx-2"></div>
        <button className="p-1 hover:bg-gray-200 rounded">
          <Bold className="w-4 h-4" />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <Italic className="w-4 h-4" />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <Underline className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-2"></div>
        <button className="p-1 hover:bg-gray-200 rounded">
          <List className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-2"></div>
        <button className="p-1 hover:bg-gray-200 rounded">
          <AlignLeft className="w-4 h-4" />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <AlignCenter className="w-4 h-4" />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <AlignRight className="w-4 h-4" />
        </button>
      </div>
      
      {/* Editor Area */}
      <div className="border border-gray-300 border-t-0 min-h-96 bg-white p-4">
        <div className="text-center mb-6">
          <img src="/lovable-uploads/7df0dd8f-aa74-4bff-b64d-6487507cec6c.png" alt="MANCOSA Logo" className="mx-auto mb-4 w-24 h-16 object-contain" />
        </div>
        
        <div className="text-center text-sm text-gray-600 mb-6">
          Start typing below the table. Copy and paste features will not work in this template. Do not work offline as you are unable to copy and paste.
        </div>
        
        <div className="text-center mb-6">
          <h3 className="font-bold text-lg">FINAL ONLINE SUMMATIVE ASSESSMENT - ANSWER BOOKLET</h3>
        </div>
        
        {/* Student Information Table */}
        <div className="max-w-2xl mx-auto border border-gray-300">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="bg-gray-100 p-3 font-medium border-r">PROGRAMME</td>
                <td className="p-3">Bachelor of Commerce in Information and Technology Management</td>
              </tr>
              <tr className="border-b">
                <td className="bg-gray-100 p-3 font-medium border-r">MODULE</td>
                <td className="p-3">Advanced Business Statistics</td>
              </tr>
              <tr className="border-b">
                <td className="bg-gray-100 p-3 font-medium border-r">NAME</td>
                <td className="p-3">Mhulukazi</td>
              </tr>
              <tr className="border-b">
                <td className="bg-gray-100 p-3 font-medium border-r">SURNAME</td>
                <td className="p-3">Sihle</td>
              </tr>
              <tr className="border-b">
                <td className="bg-gray-100 p-3 font-medium border-r">ID NUMBER</td>
                <td className="p-3">9803015295081</td>
              </tr>
              <tr className="border-b">
                <td className="bg-gray-100 p-3 font-medium border-r">STUDENT NUMBER</td>
                <td className="p-3">219844</td>
              </tr>
              <tr className="border-b">
                <td className="bg-gray-100 p-3 font-medium border-r">YEAR</td>
                <td className="p-3">2025</td>
              </tr>
              <tr className="border-b">
                <td className="bg-gray-100 p-3 font-medium border-r">INTAKE</td>
                <td className="p-3">January 2025 Semester 1</td>
              </tr>
              <tr className="border-b">
                <td className="bg-gray-100 p-3 font-medium border-r">DATE</td>
                <td className="p-3">2025/06/19</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 font-medium text-center" colSpan={2}>FOR OFFICIAL USE ONLY</td>
              </tr>
              <tr>
                <td className="bg-gray-100 p-3 font-medium border-r">TOTAL MARKS</td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-8">
          <textarea 
            className="w-full min-h-64 border-0 outline-none resize-none text-sm leading-relaxed"
            placeholder="Start typing your answers here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default AnswerBooklet;
