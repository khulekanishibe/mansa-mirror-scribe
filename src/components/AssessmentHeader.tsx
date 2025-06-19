
import React from 'react';
import { Moon, Sun, User, Bell, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';

interface AssessmentHeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const AssessmentHeader = ({ isDarkMode, onToggleDarkMode }: AssessmentHeaderProps) => {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Online Summative Assessment - Prototype Test
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
            <span>📅 December 2024</span>
            <span>•</span>
            <span>Management Accounting - Cost & Financial Management</span>
            <span>•</span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">PROTOTYPE MODE</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleDarkMode}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-600 dark:text-gray-400"
            title="Help & Instructions"
          >
            <HelpCircle className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-400">
            <Bell className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-2 pl-4 border-l border-gray-200 dark:border-gray-700">
            <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <div className="text-sm">
              <div className="font-medium text-gray-900 dark:text-gray-100">Test User</div>
              <div className="text-gray-600 dark:text-gray-400">Prototype Session</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AssessmentHeader;
