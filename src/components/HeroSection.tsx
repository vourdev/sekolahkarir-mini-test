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
    <section className="bg-white border-b border-slate-200 pt-10 pb-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">
            Paid Internship Batch 2
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Daftar Posisi di Sekolah Karir
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-normal">
            Pilih departemen atau cari posisi internship untuk melihat tanggung jawab dan kualifikasi yang dibutuhkan.
          </p>

          <div className="mt-6">
            <div className="relative flex items-center rounded-xl border border-slate-300 bg-white focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all">
              <div className="pl-3.5 text-slate-400">
                <Search className="w-4 h-4" aria-hidden="true" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Cari nama posisi atau keahlian..."
                className="w-full py-2.5 pl-2.5 pr-9 text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
                aria-label="Cari posisi kerja"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors"
                  aria-label="Hapus kata kunci pencarian"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 text-xs text-slate-500">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                <span>Total Posisi</span>
              </div>
              <p className="text-base font-semibold text-slate-800 mt-0.5">{totalRoles}</p>
            </div>

            <div className="border-x border-slate-100">
              <div className="flex items-center justify-center gap-1 text-xs text-slate-500">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                <span>Departemen</span>
              </div>
              <p className="text-base font-semibold text-slate-800 mt-0.5">{totalDepartments}</p>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Format</span>
              </div>
              <p className="text-base font-semibold text-slate-800 mt-0.5">Remote & Hybrid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
