import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import { Department } from '../types/role';

interface EmptyStateProps {
  selectedDepartment: Department;
  searchQuery: string;
  onResetFilters: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  selectedDepartment,
  searchQuery,
  onResetFilters,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white rounded-3xl border border-dashed border-slate-300 max-w-xl mx-auto my-8">
      {/* Icon Circle */}
      <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 shadow-inner">
        <SearchX className="w-8 h-8 stroke-[1.75]" />
      </div>

      {/* Heading */}
      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
        Tidak Ada Posisi yang Sesuai
      </h3>

      {/* Contextual Description */}
      <p className="mt-2 text-sm text-slate-500 max-w-md leading-relaxed">
        {searchQuery ? (
          <>
            Tidak ditemukan peran untuk kata kunci{' '}
            <span className="font-semibold text-slate-700">"{searchQuery}"</span>{' '}
            {selectedDepartment !== 'All' && (
              <>
                pada departemen <span className="font-semibold text-slate-700">{selectedDepartment}</span>
              </>
            )}
            .
          </>
        ) : (
          <>
            Belum ada posisi terbuka untuk departemen{' '}
            <span className="font-semibold text-slate-700">{selectedDepartment}</span> saat ini.
          </>
        )}
      </p>

      {/* Suggestion hints */}
      <p className="mt-1 text-xs text-slate-400">
        Silakan periksa kembali ejaan kata kunci atau pilih departemen lain.
      </p>

      {/* Reset Action */}
      <button
        type="button"
        onClick={onResetFilters}
        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] shadow-sm shadow-indigo-200 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        <RotateCcw className="w-4 h-4" />
        <span>Reset Semua Filter</span>
      </button>
    </div>
  );
};
