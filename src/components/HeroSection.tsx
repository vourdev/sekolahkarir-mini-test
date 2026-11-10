import React from 'react';
import { Search, X } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  totalRoles: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  totalRoles,
}) => {
  return (
    <section className="bg-white border-b border-sk-line pt-8 pb-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="max-w-xl">
            <p className="text-xs font-bold text-sk-accent uppercase tracking-wider mb-1.5">
              Paid Internship Batch 2
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-sk-navy tracking-tight">
              Eksplorasi Peran Magang
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-sk-muted leading-relaxed">
              Tersedia {totalRoles} posisi terbuka. Pilih kategori departemen atau cari posisi berdasarkan keahlian teknis.
            </p>
          </div>

          <div className="w-full md:w-72 lg:w-80 shrink-0">
            <div className="relative flex items-center rounded-xl border border-sk-line bg-white shadow-xs focus-within:border-sk-accent focus-within:ring-2 focus-within:ring-sk-accent/15 transition-all">
              <div className="pl-3.5 text-sk-muted">
                <Search className="w-4 h-4" aria-hidden="true" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Cari posisi atau keahlian..."
                className="w-full py-2.5 pl-2.5 pr-8 text-sm text-sk-navy placeholder:text-sk-muted/70 bg-transparent focus:outline-none"
                aria-label="Cari posisi kerja"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 p-1 text-sk-muted hover:text-sk-navy rounded-md transition-colors cursor-pointer"
                  aria-label="Hapus kata kunci pencarian"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
