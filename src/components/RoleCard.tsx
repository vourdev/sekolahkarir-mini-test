import React from 'react';
import { Role } from '../types/role';
import { MapPin, Briefcase, Clock, ChevronRight } from 'lucide-react';

interface RoleCardProps {
  role: Role;
  onViewDetails: (role: Role) => void;
  onApply: (role: Role) => void;
}

export const RoleCard: React.FC<RoleCardProps> = ({ role, onViewDetails, onApply }) => {
  return (
    <article className="flex flex-col justify-between bg-white rounded-xl border border-slate-200 p-5 transition-shadow hover:shadow-md hover:border-slate-300">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
            {role.department}
          </span>
          <span className="text-[11px] text-slate-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {role.postedAt}
          </span>
        </div>

        <h2 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-1">
          {role.title}
        </h2>

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{role.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
            <span>{role.type}</span>
          </div>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
          {role.description}
        </p>

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {role.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 rounded text-[11px] bg-slate-50 text-slate-600 border border-slate-200"
            >
              {skill}
            </span>
          ))}
          {role.skills.length > 4 && (
            <span className="px-1.5 py-0.5 rounded text-[11px] bg-slate-50 text-slate-500 border border-slate-200">
              +{role.skills.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onViewDetails(role)}
          className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <span>Detail</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onApply(role)}
          className="px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          Lamar
        </button>
      </div>
    </article>
  );
};
