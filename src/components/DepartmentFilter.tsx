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
      <div className="flex items-center justify-between mb-2.5">
        <label htmlFor="dept-tablist" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Departemen
        </label>
        <span className="text-xs text-slate-400 hidden sm:inline">
          Pilih kategori untuk memfilter daftar
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
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{dept.label}</span>
              <span
                className={`inline-flex items-center justify-center px-1.5 py-0.2 rounded text-[11px] font-semibold ${
                  isActive ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-600'
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
