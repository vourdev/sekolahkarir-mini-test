import React from 'react';
import { Department } from '../types/role';
import { DEPARTMENTS } from '../data/mockRoles';

interface DepartmentFilterProps {
  activeDepartment: Department;
  onSelectDepartment: (dept: Department) => void;
  departmentCounts: Record<Department, number>;
}

export const DepartmentFilter: React.FC<DepartmentFilterProps> = ({
  activeDepartment,
  onSelectDepartment,
  departmentCounts,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <label htmlFor="dept-tablist" className="text-xs font-bold text-sk-navy uppercase tracking-wider">
          Filter Departemen
        </label>
        <span className="text-xs text-sk-muted hidden sm:inline">
          Pilih kategori untuk menyaring posisi kerja
        </span>
      </div>

      <div
        id="dept-tablist"
        role="tablist"
        aria-label="Filter Departemen"
        className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap"
      >
        {DEPARTMENTS.map((dept) => {
          const isActive = activeDepartment === dept.id;
          const count = departmentCounts[dept.id] ?? 0;

          return (
            <button
              key={dept.id}
              role="tab"
              aria-selected={isActive}
              aria-controls="role-grid"
              onClick={() => onSelectDepartment(dept.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-sk-accent ${
                isActive
                  ? 'bg-sk-navy text-white shadow-sm'
                  : 'bg-white text-sk-ink border border-sk-line hover:border-sk-line-strong hover:bg-sk-blue-50/50'
              }`}
            >
              <span>{dept.label}</span>
              <span
                className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[11px] font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-sk-blue-50 text-sk-accent-hover'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
