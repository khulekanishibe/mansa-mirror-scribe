
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Breadcrumb from '../components/Breadcrumb';
import AssessmentHeader from '../components/AssessmentHeader';
import AnswerBooklet from '../components/AnswerBooklet';
import SubmissionStatus from '../components/SubmissionStatus';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Navigation />
      <Breadcrumb />
      <AssessmentHeader />
      <div className="flex-1">
        <AnswerBooklet />
      </div>
      <SubmissionStatus />
      <Footer />
    </div>
  );
};

export default Index;
