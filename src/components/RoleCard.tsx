import React from 'react';
import { Role } from '../types/role';
import { MapPin, Briefcase, Clock, ChevronRight, Zap } from 'lucide-react';

interface RoleCardProps {
  role: Role;
  onViewDetails: (role: Role) => void;
  onApply: (role: Role) => void;
}

const DEPARTMENT_THEMES: Record<Role['department'], { badge: string; text: string; border: string }> = {
  Engineering: {
    badge: 'bg-blue-50 text-blue-700 border-blue-200/80',
    text: 'text-blue-600',
    border: 'hover:border-blue-300',
  },
  'Product & Design': {
    badge: 'bg-purple-50 text-purple-700 border-purple-200/80',
    text: 'text-purple-600',
    border: 'hover:border-purple-300',
  },
  'Curriculum & Learning': {
    badge: 'bg-amber-50 text-amber-700 border-amber-200/80',
    text: 'text-amber-600',
    border: 'hover:border-amber-300',
  },
  'Marketing & Growth': {
    badge: 'bg-rose-50 text-rose-700 border-rose-200/80',
    text: 'text-rose-600',
    border: 'hover:border-rose-300',
  },
  'People & Operations': {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    text: 'text-emerald-600',
    border: 'hover:border-emerald-300',
  },
};

export const RoleCard: React.FC<RoleCardProps> = ({ role, onViewDetails, onApply }) => {
  const theme = DEPARTMENT_THEMES[role.department] || {
    badge: 'bg-slate-50 text-slate-700 border-slate-200',
    text: 'text-slate-600',
    border: 'hover:border-slate-300',
  };

  return (
    <article
      className={`group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-0.5 ${theme.border}`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${theme.badge}`}
            >
              {role.department}
            </span>
            {role.isUrgent && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 text-red-700 border border-red-200">
                <Zap className="w-3 h-3 text-red-500 fill-red-500" />
                Urgent
              </span>
            )}
          </div>
          <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {role.postedAt}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
          {role.title}
        </h2>

        {/* Meta details */}
        <div className="mt-3 flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{role.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
            <span>{role.type}</span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
          {role.description}
        </p>

        {/* Skill tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {role.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              {skill}
            </span>
          ))}
          {role.skills.length > 4 && (
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 text-slate-500 border border-slate-200">
              +{role.skills.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onViewDetails(role)}
          className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/90 active:scale-[0.98] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        >
          <span>Detail Peran</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onApply(role)}
          className="inline-flex items-center justify-center px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] shadow-sm shadow-indigo-200 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          Lamar
        </button>
      </div>
    </article>
  );
};
