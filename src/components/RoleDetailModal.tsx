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
        className="fixed inset-0 bg-sk-navy/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-sk-line z-10 flex flex-col">
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-sk-line flex items-start justify-between gap-3">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-sk-blue-50 text-sk-accent-hover border border-sk-blue-100 mb-2">
              {role.departmentLabel}
            </span>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-sk-navy">
              {role.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-sk-muted hover:text-sk-navy rounded-full hover:bg-sk-soft transition-colors cursor-pointer"
            aria-label="Tutup detail peran"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6 text-sm text-sk-ink">
          <div className="grid grid-cols-3 gap-2.5 p-4 rounded-2xl bg-sk-soft border border-sk-line text-xs font-medium">
            <div>
              <span className="text-sk-muted block">Lokasi</span>
              <span className="font-bold text-sk-navy flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-sk-accent" />
                {role.location}
              </span>
            </div>
            <div>
              <span className="text-sk-muted block">Tipe</span>
              <span className="font-bold text-sk-navy flex items-center gap-1 mt-0.5">
                <Briefcase className="w-3.5 h-3.5 text-sk-accent" />
                {role.type}
              </span>
            </div>
            <div>
              <span className="text-sk-muted block">Diperbarui</span>
              <span className="font-bold text-sk-navy flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-sk-accent" />
                {role.postedAt}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-sk-navy uppercase tracking-wider mb-2">
              Deskripsi
            </h3>
            <p className="leading-relaxed text-sk-muted">{role.description}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-sk-navy uppercase tracking-wider mb-2.5">
              Tanggung Jawab
            </h3>
            <ul className="space-y-2">
              {role.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sk-muted">
                  <Check className="w-4 h-4 text-sk-accent shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-sk-navy uppercase tracking-wider mb-2.5">
              Kualifikasi
            </h3>
            <ul className="space-y-2">
              {role.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sk-muted">
                  <Check className="w-4 h-4 text-sk-accent shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-sk-navy uppercase tracking-wider mb-2.5">
              Keahlian Terkait
            </h3>
            <div className="flex flex-wrap gap-2">
              {role.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-sk-soft text-sk-ink border border-sk-line"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-sk-soft border-t border-sk-line px-6 py-4 flex items-center justify-end gap-2.5 rounded-b-3xl">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-bold text-sk-navy bg-white border border-sk-line hover:bg-sk-blue-50 transition-colors cursor-pointer"
          >
            Tutup
          </button>
          <button
            type="button"
            onClick={() => {
              onApply(role);
              onClose();
            }}
            className="px-5 py-2 rounded-full text-xs font-bold text-white bg-sk-navy hover:bg-sk-navy-hover transition-colors cursor-pointer shadow-sm"
          >
            Lamar Posisi Ini
          </button>
        </div>
      </div>
    </div>
  );
};
