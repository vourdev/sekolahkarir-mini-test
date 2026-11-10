import React, { useEffect } from 'react';
import { Role } from '../types/role';
import { X, MapPin, Briefcase, Clock, Check } from 'lucide-react';

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
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-xl border border-slate-200 z-10 flex flex-col">
        <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-5 py-4 border-b border-slate-100 flex items-start justify-between gap-3">
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 mb-1">
              {role.department}
            </span>
            <h2 id="modal-title" className="text-lg sm:text-xl font-bold text-slate-900">
              {role.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Tutup detail peran"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 py-5 space-y-5 text-sm text-slate-700">
          <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block">Lokasi</span>
              <span className="font-medium text-slate-800 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-slate-500" />
                {role.location}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Tipe</span>
              <span className="font-medium text-slate-800 flex items-center gap-1 mt-0.5">
                <Briefcase className="w-3 h-3 text-slate-500" />
                {role.type}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Diperbarui</span>
              <span className="font-medium text-slate-800 flex items-center gap-1 mt-0.5">
                <Clock className="w-3 h-3 text-slate-500" />
                {role.postedAt}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Deskripsi
            </h3>
            <p className="leading-relaxed text-slate-600">{role.description}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Tanggung Jawab
            </h3>
            <ul className="space-y-1.5">
              {role.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Kualifikasi
            </h3>
            <ul className="space-y-1.5">
              {role.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600">
                  <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Keahlian Terkait
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {role.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-100 px-5 py-3 flex items-center justify-end gap-2 rounded-b-2xl">
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Tutup
          </button>
          <button
            type="button"
            onClick={() => {
              onApply(role);
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            Lamar Posisi Ini
          </button>
        </div>
      </div>
    </div>
  );
};
