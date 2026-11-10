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
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white rounded-2xl border border-dashed border-sk-line-strong max-w-lg mx-auto my-6">
      <div className="w-14 h-14 rounded-2xl bg-sk-blue-50 border border-sk-blue-100 flex items-center justify-center text-sk-accent mb-4 shadow-xs">
        <SearchX className="w-7 h-7 stroke-[2]" />
      </div>

      <h3 className="text-base sm:text-lg font-extrabold text-sk-navy">
        Tidak Ada Posisi yang Cocok
      </h3>

      <p className="mt-2 text-xs sm:text-sm text-sk-muted max-w-sm leading-relaxed">
        {searchQuery ? (
          <>
            Tidak ditemukan posisi untuk kata kunci{' '}
            <span className="font-bold text-sk-navy">"{searchQuery}"</span>
            {selectedDepartment !== 'all' && (
              <> pada departemen <span className="font-bold text-sk-navy">{departmentName}</span></>
            )}
            .
          </>
        ) : (
          <>Belum ada posisi terbuka untuk departemen <span className="font-bold text-sk-navy">{departmentName}</span>.</>
        )}
      </p>

      <p className="mt-1 text-xs text-sk-muted/80">
        Coba ganti filter departemen atau hapus kata kunci pencarian.
      </p>

      <button
        type="button"
        onClick={onResetFilters}
        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-sk-navy hover:bg-sk-navy-hover transition-colors cursor-pointer shadow-sm"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Reset Filter</span>
      </button>
    </div>
  );
};
