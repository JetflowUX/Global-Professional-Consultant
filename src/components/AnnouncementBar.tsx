import React from 'react';
export function AnnouncementBar() {
  return (
    <div className="bg-navy text-white py-2 px-4 text-sm font-medium flex justify-between items-center">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <span>IRS-Authorized e-File Provider • Licensed in CA</span>
        <div className="flex items-center gap-2">
          <button className="hover:text-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded px-1">
            EN
          </button>
          <span className="text-white/50">|</span>
          <button className="hover:text-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded px-1">
            ES
          </button>
        </div>
      </div>
    </div>);

}