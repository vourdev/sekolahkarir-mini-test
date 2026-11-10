import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import { Department } from '../types/role';
import { DEPARTMENT_LABELS } from '../data/mockRoles';

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
  const departmentName = DEPARTMENT_LABELS[selectedDepartment];

  return (
    <div className="flex flex-col items-center justify-center py-14 px-4 text-center bg-white rounded-xl border border-dashed border-slate-300 max-w-lg mx-auto my-6">
      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 mb-3">
        <SearchX className="w-6 h-6" />
      </div>

      <h3 className="text-base sm:text-lg font-bold text-slate-900">
        Tidak Ada Posisi yang Cocok
      </h3>

      <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
        {searchQuery ? (
          <>
            Tidak ditemukan posisi untuk kata kunci{' '}
            <span className="font-semibold text-slate-800">"{searchQuery}"</span>
            {selectedDepartment !== 'all' && (
              <> pada departemen {departmentName}</>
            )}
            .
          </>
        ) : (
          <>Belum ada posisi terbuka untuk departemen {departmentName}.</>
        )}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        Coba ganti filter departemen atau hapus kata kunci pencarian.
      </p>

      <button
        type="button"
        onClick={onResetFilters}
        className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Reset Filter</span>
      </button>
    </div>
  );
};
