
import React from 'react';
import { Clock } from 'lucide-react';

const SubmissionStatus = () => {
  return (
    <div className="px-4 py-3 bg-gray-50 border-t">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>Last saved: - 2025-06-19 09:46:16</span>
        </div>
        <div className="text-sm text-red-600 font-medium">
          Countdown: 1:56:50
        </div>
      </div>
    </div>
  );
};

export default SubmissionStatus;
