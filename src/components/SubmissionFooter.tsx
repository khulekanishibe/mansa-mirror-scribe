
import React, { useState } from 'react';
import { Save, Send, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';

interface SubmissionFooterProps {
  currentQuestion: number;
  totalQuestions: number;
  onNext: () => void;
  onPrevious: () => void;
}

const SubmissionFooter = ({ currentQuestion, totalQuestions, onNext, onPrevious }: SubmissionFooterProps) => {
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={currentQuestion === 1}
            className="border-gray-300 dark:border-gray-600"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Question {currentQuestion} of {totalQuestions}
          </span>
          
          <Button
            variant="outline"
            onClick={onNext}
            disabled={currentQuestion === totalQuestions}
            className="border-gray-300 dark:border-gray-600"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="bg-[#5bc0de] text-white border-[#5bc0de] hover:bg-[#46b8da]"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Progress
          </Button>
          
          {!showSubmitConfirm ? (
            <Button
              onClick={() => setShowSubmitConfirm(true)}
              className="bg-[#0d643f] text-white hover:bg-[#0a5235]"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Assessment
            </Button>
          ) : (
            <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <div>
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  Confirm Submission
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-300">
                  This action cannot be undone
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowSubmitConfirm(false)}
                  className="border-amber-300 dark:border-amber-700"
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  className="bg-[#d9534f] text-white hover:bg-[#c9302c]"
                >
                  Submit Final
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default SubmissionFooter;
