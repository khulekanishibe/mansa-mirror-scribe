
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, Calendar, FileText, Calculator, CheckCircle, BookOpen, Database } from 'lucide-react';
import { availableModules, ExamModule } from '../data/moduleData';

interface ModuleSelectionProps {
  onModuleSelect: (module: ExamModule) => void;
}

const ModuleSelection: React.FC<ModuleSelectionProps> = ({ onModuleSelect }) => {
  const [selectedModule, setSelectedModule] = useState<ExamModule | null>(null);

  const getExamTypeIcon = (examType: string) => {
    switch (examType) {
      case 'calculation':
        return <Calculator className="w-5 h-5" />;
      case 'mcq':
        return <CheckCircle className="w-5 h-5" />;
      case 'essay':
        return <BookOpen className="w-5 h-5" />;
      case 'mixed':
        return <FileText className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getExamTypeColor = (examType: string) => {
    switch (examType) {
      case 'calculation':
        return 'bg-blue-500';
      case 'mcq':
        return 'bg-green-500';
      case 'essay':
        return 'bg-purple-500';
      case 'mixed':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleContinue = () => {
    if (selectedModule) {
      onModuleSelect(selectedModule);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/a56dd26a-2c94-484d-9432-9b9c48ea19c0.png" 
            alt="MANCOSA Logo" 
            className="h-16 w-auto mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Online Summative Assessment
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Select your examination module to begin
          </p>
        </div>

        {/* Module Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {availableModules.map((module) => (
            <Card 
              key={module.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedModule?.id === module.id 
                  ? 'ring-2 ring-[#0d643f] border-[#0d643f]' 
                  : 'hover:border-gray-300'
              }`}
              onClick={() => setSelectedModule(module)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {module.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      {getExamTypeIcon(module.examType)}
                      <Badge 
                        variant="secondary" 
                        className={`${getExamTypeColor(module.examType)} text-white text-xs`}
                      >
                        {module.examType.toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {module.totalMarks} marks
                      </Badge>
                    </div>
                  </div>
                  {selectedModule?.id === module.id && (
                    <CheckCircle className="w-6 h-6 text-[#0d643f] flex-shrink-0" />
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {module.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{module.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{module.startTime} - {module.endTime} ({module.duration / 60} hours)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Database className="w-4 h-4" />
                    <span>{module.programme}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continue Button */}
        {selectedModule && (
          <div className="text-center">
            <Button
              onClick={handleContinue}
              size="lg"
              className="bg-[#0d643f] hover:bg-[#0b5635] text-white px-8 py-3 text-lg"
            >
              Continue to Verification
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleSelection;
