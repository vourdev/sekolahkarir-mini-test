import React from 'react';
import { Briefcase } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg text-slate-900">
                  Sekolah<span className="text-indigo-600">Karir</span>
                </span>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                  Batch 2
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">Paid Internship Program</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              Pendaftaran Dibuka
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
