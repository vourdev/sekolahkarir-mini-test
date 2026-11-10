import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white py-6 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-slate-600">
            Sekolah Karir (Paid Internship Batch 2)
          </p>
          <p className="text-slate-400">
            Mini Assignment: Front-End Engineer
          </p>
        </div>
      </div>
    </footer>
  );
};
