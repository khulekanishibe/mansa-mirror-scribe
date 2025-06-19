
import React from 'react';

const Breadcrumb = () => {
  return (
    <div className="px-4 py-3 bg-white">
      <div className="flex items-center space-x-2 text-sm">
        <span className="text-blue-600 cursor-pointer">Dashboard</span>
        <span>/</span>
        <span className="text-blue-600 cursor-pointer">My courses</span>
        <span>/</span>
        <span className="text-blue-600 cursor-pointer">Advanced Business Statistics Jan25 V2.51</span>
        <span>/</span>
        <span>Online Summative Assessment: Advanced Business Statistics</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
