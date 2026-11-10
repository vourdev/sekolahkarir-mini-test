import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white py-10 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">Sekolah Karir</span>
            <span>—</span>
            <span>Paid Internship Assessment Batch 2</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-500">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>untuk seleksi Front-End Engineer</span>
          </div>

          <div className="flex items-center gap-1.5 text-indigo-600 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Responsive Role Filter Component</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
