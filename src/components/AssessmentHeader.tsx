
import React from 'react';

const AssessmentHeader = () => {
  return (
    <div className="px-4 py-4 bg-white border-b">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold">
          📝
        </div>
        <div>
          <h1 className="text-lg font-medium text-gray-800">Online Summative Assessment: Advanced Business Statistics</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
            <span className="text-red-600">📅</span>
            <span>Advanced Business Statistics Final Q&A.pdf: May 2025, 2:36 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentHeader;
