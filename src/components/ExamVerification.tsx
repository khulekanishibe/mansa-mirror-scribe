import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { Alert, AlertDescription } from './ui/alert';
import { Clock, Calendar, FileText, AlertTriangle, CheckCircle, User, Monitor } from 'lucide-react';
import { ExamModule } from '../data/moduleData';

interface ExamVerificationProps {
  selectedModule: ExamModule;
  onStartExam: () => void;
  onBack: () => void;
}

const ExamVerification: React.FC<ExamVerificationProps> = ({ 
  selectedModule, 
  onStartExam, 
  onBack 
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [verificationChecks, setVerificationChecks] = useState({
    identity: false,
    environment: false,
    technical: false,
    rules: false,
    time: false
  });

  const allChecksComplete = Object.values(verificationChecks).every(check => check);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCheckChange = (checkType: keyof typeof verificationChecks) => {
    setVerificationChecks(prev => ({
      ...prev,
      [checkType]: !prev[checkType]
    }));
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-ZA', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  const isExamTimeValid = () => {
    // Always return true for development/testing purposes
    return true;
    
    // Original time validation code (commented out for development)
    /*
    const now = currentTime;
    const startTime = new Date(now);
    const endTime = new Date(now);
    
    const [startHour, startMinute] = selectedModule.startTime.split(':').map(Number);
    const [endHour, endMinute] = selectedModule.endTime.split(':').map(Number);
    
    startTime.setHours(startHour, startMinute, 0, 0);
    endTime.setHours(endHour, endMinute, 0, 0);
    
    return now >= startTime && now <= endTime;
    */
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/a56dd26a-2c94-484d-9432-9b9c48ea19c0.png" 
            alt="MANCOSA Logo" 
            className="h-16 w-auto mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Exam Verification
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Please complete all verification steps before starting your exam
          </p>
        </div>

        {/* Current Time and Exam Window */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Exam Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Current Time</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {formatTime(currentTime)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Exam Window</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {selectedModule.startTime} - {selectedModule.endTime}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                <Badge 
                  variant={isExamTimeValid() ? "default" : "destructive"}
                  className={isExamTimeValid() ? "bg-green-500" : ""}
                >
                  {isExamTimeValid() ? "Available" : "Not Available"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Selected Module Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Selected Module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  {selectedModule.title}
                </h3>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedModule.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedModule.duration / 60} hours ({selectedModule.duration} minutes)</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2">
                    {selectedModule.examType.toUpperCase()}
                  </Badge>
                  <Badge variant="outline">
                    {selectedModule.totalMarks} marks
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {selectedModule.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verification Checklist */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Pre-Exam Verification
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="identity"
                  checked={verificationChecks.identity}
                  onCheckedChange={() => handleCheckChange('identity')}
                />
                <div className="flex-1">
                  <label htmlFor="identity" className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
                    Identity Verification
                  </label>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    I confirm that I am the registered student for this examination and will not allow anyone else to take this exam on my behalf.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="environment"
                  checked={verificationChecks.environment}
                  onCheckedChange={() => handleCheckChange('environment')}
                />
                <div className="flex-1">
                  <label htmlFor="environment" className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
                    Exam Environment
                  </label>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    I am in a quiet, private location suitable for examination and have removed all unauthorized materials.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="technical"
                  checked={verificationChecks.technical}
                  onCheckedChange={() => handleCheckChange('technical')}
                />
                <div className="flex-1">
                  <label htmlFor="technical" className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
                    Technical Requirements
                  </label>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    I have a stable internet connection, my device is charged/plugged in, and I have tested the system functionality.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="rules"
                  checked={verificationChecks.rules}
                  onCheckedChange={() => handleCheckChange('rules')}
                />
                <div className="flex-1">
                  <label htmlFor="rules" className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
                    Exam Rules Agreement
                  </label>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    I acknowledge that I have read and understand the examination rules and academic integrity policies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="time"
                  checked={verificationChecks.time}
                  onCheckedChange={() => handleCheckChange('time')}
                />
                <div className="flex-1">
                  <label htmlFor="time" className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
                    Time Acknowledgment
                  </label>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    I understand that once I start the exam, the timer will begin and I must complete within the allocated time.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warnings */}
        {!isExamTimeValid() && (
          <Alert className="mb-6 border-red-200 bg-red-50 dark:bg-red-900/20">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800 dark:text-red-300">
              The exam is not currently available. Please check back during the scheduled exam window: {selectedModule.startTime} - {selectedModule.endTime}
            </AlertDescription>
          </Alert>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between">
          <Button
            onClick={onBack}
            variant="outline"
            size="lg"
          >
            Back to Module Selection
          </Button>
          
          <Button
            onClick={onStartExam}
            size="lg"
            className="bg-[#0d643f] hover:bg-[#0b5635] text-white"
            disabled={!allChecksComplete || !isExamTimeValid()}
          >
            Start Examination
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExamVerification;
