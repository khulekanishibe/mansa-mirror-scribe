
import React from 'react';
import { ChevronDown, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-emerald-700 text-white">
      <div className="flex items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center space-x-4">
          <span className="font-medium">MANCOSA</span>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>My Modules</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span>We believe in Africa's Future.</span>
          <span>We believe in Cultural Diversity.</span>
          <div className="flex items-center space-x-2">
            <Bell className="w-4 h-4" />
            <div className="flex items-center space-x-1">
              <span>Mhulukazi Sihle</span>
              <User className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
