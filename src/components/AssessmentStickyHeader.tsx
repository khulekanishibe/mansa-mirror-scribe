import React from 'react';
import { Clock, Save, Send, HelpCircle, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
interface AssessmentStickyHeaderProps {
  currentQuestion: number;
  currentSubQuestion: string;
  timeLeft?: string;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onSave: () => void;
  onSubmit: () => void;
  onHelp: () => void;
}
const AssessmentStickyHeader = ({
  currentQuestion,
  currentSubQuestion,
  timeLeft = "1:56:50",
  isDarkMode,
  onToggleDarkMode,
  onSave,
  onSubmit,
  onHelp
}: AssessmentStickyHeaderProps) => {
  return <div className="sticky top-0 z-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-xl text-green-950">
              Question {currentQuestion}.{currentSubQuestion}
            </span>
            <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
            <span className="text-sm text-lime-700">Database Design and Management OSA</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <Clock className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-700 dark:text-red-400">{timeLeft}</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={onSave} className="text-[#0d643f] border-[#0d643f] hover:bg-[#0d643f] hover:text-white">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            
            <Button variant="outline" size="sm" onClick={onSubmit} className="text-[#1177d1] border-[#1177d1] hover:bg-[#1177d1] hover:text-white">
              <Send className="w-4 h-4 mr-2" />
              Submit
            </Button>

            <Button variant="ghost" size="sm" onClick={onHelp} className="text-gray-600 dark:text-gray-400" title="Help & Instructions">
              <HelpCircle className="w-4 h-4" />
            </Button>

            <Button variant="ghost" size="sm" onClick={onToggleDarkMode} className="text-gray-600 dark:text-gray-400" title="Toggle Dark Mode">
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default AssessmentStickyHeader;