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
    <section className="relative overflow-hidden bg-white border-b border-sk-line pt-12 pb-10">
      <div className="absolute inset-0 sk-hero-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sk-blue-50 text-sk-accent-hover border border-sk-blue-100 mb-3.5">
            Paid Internship Batch 2
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-sk-navy tracking-tight leading-tight">
            Eksplorasi Peran di Sekolah Karir
          </h1>

          <p className="mt-3 text-sm sm:text-base text-sk-muted leading-relaxed">
            Pilih departemen atau cari posisi internship untuk melihat tanggung jawab dan kualifikasi yang dibutuhkan.
          </p>

          <div className="mt-6">
            <div className="relative flex items-center rounded-xl border border-sk-line-strong bg-white shadow-sm focus-within:ring-2 focus-within:ring-sk-accent/20 focus-within:border-sk-accent transition-all">
              <div className="pl-3.5 text-sk-muted">
                <Search className="w-4 h-4" aria-hidden="true" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Cari nama posisi atau keahlian..."
                className="w-full py-2.5 pl-2.5 pr-9 text-sm text-sk-navy placeholder:text-sk-muted/70 bg-transparent focus:outline-none"
                aria-label="Cari posisi kerja"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 p-1 text-sk-muted hover:text-sk-navy rounded-md transition-colors"
                  aria-label="Hapus kata kunci pencarian"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-7 pt-5 border-t border-sk-line grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 text-xs text-sk-muted">
                <Users className="w-3.5 h-3.5 text-sk-accent" />
                <span>Total Posisi</span>
              </div>
              <p className="text-base font-bold text-sk-navy mt-0.5">{totalRoles}</p>
            </div>

            <div className="border-x border-sk-line">
              <div className="flex items-center justify-center gap-1 text-xs text-sk-muted">
                <Layers className="w-3.5 h-3.5 text-sk-accent" />
                <span>Departemen</span>
              </div>
              <p className="text-base font-bold text-sk-navy mt-0.5">{totalDepartments}</p>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1 text-xs text-sk-muted">
                <MapPin className="w-3.5 h-3.5 text-sk-accent" />
                <span>Format</span>
              </div>
              <p className="text-base font-bold text-sk-navy mt-0.5">Remote & Hybrid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
