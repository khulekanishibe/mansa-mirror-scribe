
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white">
      <div className="px-4 py-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm mb-2">Supported by GP HelpHub</p>
            <p className="text-sm">You are logged in as <span className="font-medium">Mhulukazi Sihle</span> (Log out)</p>
            <p className="text-sm">Advanced Business Statistics Jan25 V2.51</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg">Mancosa</p>
            <p className="text-sm">https://www.mancosa.co.za/student-services-support-desk/</p>
            <p className="text-sm">studentservices@mancosa.co.za</p>
            <p className="text-sm">📞 +27 861 800 000</p>
          </div>
        </div>
      </div>
      
      <div className="bg-emerald-800 px-4 py-4 flex justify-between items-center">
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded text-sm font-medium">
          Submit
        </button>
        <button className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded text-sm font-medium">
          Save
        </button>
      </div>
    </footer>
  );
};

export default Footer;
