import React from 'react';
import { Search, X, Layers, Users, MapPin } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  totalRoles: number;
  totalDepartments: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  totalRoles,
  totalDepartments,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/80 via-white to-slate-50 pt-12 pb-10 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60 mb-4">
            <span>✨ Program Paid Internship Batch 2</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Eksplorasi Peran & Peluang Karir di{' '}
            <span className="text-indigo-600 bg-clip-text">Sekolah Karir</span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Temukan kesempatan mengasah kemampuan praktis melalui proyek nyata. Pilih departemen atau cari posisi yang paling sesuai dengan minatmu.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative flex items-center shadow-sm rounded-2xl border border-slate-300 bg-white focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all">
              <div className="pl-4 text-slate-400">
                <Search className="w-5 h-5" aria-hidden="true" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Cari berdasarkan nama role, skill, atau kata kunci..."
                className="w-full py-3.5 pl-3 pr-10 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none rounded-2xl"
                aria-label="Cari posisi kerja"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Hapus kata kunci pencarian"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Key Quick Stats */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-4 text-center max-w-lg mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Users className="w-4 h-4 text-indigo-500" />
                <span>Posisi Tersedia</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">{totalRoles} Peran</span>
            </div>

            <div className="flex flex-col items-center border-x border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Layers className="w-4 h-4 text-indigo-500" />
                <span>Departemen</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">{totalDepartments} Tim</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>Mode Kerja</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">Remote & Hybrid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
