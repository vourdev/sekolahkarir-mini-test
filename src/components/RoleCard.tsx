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
    <article className="group flex flex-col justify-between bg-white rounded-2xl border border-sk-line p-5 sm:p-6 transition-all duration-200 hover:border-sk-blue-200 hover:shadow-lg hover:shadow-sk-navy/5 hover:-translate-y-0.5">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-sk-blue-50 text-sk-accent-hover border border-sk-blue-100">
            {role.departmentLabel}
          </span>
          <span className="text-[11px] text-sk-muted flex items-center gap-1 font-medium">
            <Clock className="w-3 h-3" />
            {role.postedAt}
          </span>
        </div>

        <h2 className="text-base sm:text-lg font-extrabold text-sk-navy group-hover:text-sk-accent transition-colors line-clamp-1">
          {role.title}
        </h2>

        <div className="mt-2.5 flex flex-wrap items-center gap-x-3.5 gap-y-1 text-xs text-sk-muted font-medium">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-sk-accent" />
            <span>{role.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5 text-sk-accent" />
            <span>{role.type}</span>
          </div>
        </div>

        <p className="mt-3.5 text-xs sm:text-sm text-sk-muted leading-relaxed line-clamp-2">
          {role.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {role.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-sk-soft text-sk-ink border border-sk-line"
            >
              {skill}
            </span>
          ))}
          {role.skills.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-sk-soft text-sk-muted border border-sk-line">
              +{role.skills.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-sk-line flex items-center gap-2">
        <button
          type="button"
          onClick={() => onViewDetails(role)}
          className="flex-1 inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-full text-xs font-bold text-sk-navy bg-sk-soft border border-sk-line hover:bg-sk-blue-50 hover:border-sk-blue-100 transition-colors cursor-pointer"
        >
          <span>Detail Peran</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onApply(role)}
          className="px-4 py-2 rounded-full text-xs font-bold text-white bg-sk-navy hover:bg-sk-navy-hover transition-colors cursor-pointer shadow-sm"
        >
          Lamar
        </button>
      </div>
    </article>
  );
};
