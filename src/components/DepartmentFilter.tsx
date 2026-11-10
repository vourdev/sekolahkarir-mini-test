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
        <label htmlFor="dept-tablist" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Filter Departemen
        </label>
        <span className="text-xs text-slate-500 hidden sm:inline">
          Pilih salah satu kategori untuk melihat peran terkait
        </span>
      </div>

      {/* Filter Tabs Container */}
      <div
        id="dept-tablist"
        role="tablist"
        aria-label="Filter Departemen"
        className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap"
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
              className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-300/50 hover:bg-indigo-700'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <span>{dept.label}</span>
              <span
                className={`inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-[11px] font-semibold transition-colors ${
                  isActive
                    ? 'bg-white/25 text-white'
                    : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
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
