import React, { useEffect } from 'react';
import { Role } from '../types/role';
import { X, MapPin, Briefcase, Clock, CheckCircle2, Award, Zap } from 'lucide-react';

interface RoleDetailModalProps {
  role: Role | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (role: Role) => void;
}

export const RoleDetailModal: React.FC<RoleDetailModalProps> = ({
  role,
  isOpen,
  onClose,
  onApply,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !role) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 z-10 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-slate-100 flex items-start justify-between gap-4 z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                {role.department}
              </span>
              {role.isUrgent && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 text-red-700 border border-red-200">
                  <Zap className="w-3 h-3 fill-red-500 text-red-500" />
                  Urgent Hiring
                </span>
              )}
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-900">
              {role.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Tutup jendela detail"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-6 space-y-6">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
              <div>
                <p className="text-[11px] text-slate-400 font-medium">Lokasi</p>
                <p className="font-semibold text-slate-800">{role.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 border-x border-slate-200 px-3">
              <Briefcase className="w-4 h-4 text-indigo-500 shrink-0" />
              <div>
                <p className="text-[11px] text-slate-400 font-medium">Tipe</p>
                <p className="font-semibold text-slate-800">{role.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 pl-2">
              <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
              <div>
                <p className="text-[11px] text-slate-400 font-medium">Diposting</p>
                <p className="font-semibold text-slate-800">{role.postedAt}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Deskripsi Peran
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {role.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Tanggung Jawab Utama
            </h3>
            <ul className="space-y-2">
              {role.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Kualifikasi & Persyaratan
            </h3>
            <ul className="space-y-2">
              {role.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <Award className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Required */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              Keahlian / Tech Stack Terkait
            </h3>
            <div className="flex flex-wrap gap-2">
              {role.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-end gap-3 rounded-b-3xl">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-200/80 transition-colors cursor-pointer"
          >
            Tutup
          </button>
          <button
            type="button"
            onClick={() => {
              onApply(role);
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] shadow-sm shadow-indigo-200 transition-all cursor-pointer"
          >
            Lamar Posisi Ini
          </button>
        </div>
      </div>
    </div>
  );
};
