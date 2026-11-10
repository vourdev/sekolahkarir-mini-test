import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <aside
      aria-label="Notifikasi status"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-sk-navy text-white shadow-xl shadow-sk-navy/20 border border-sk-line-strong text-xs font-semibold"
    >
      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
      <span>{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="ml-2 p-1 text-slate-300 hover:text-white rounded-full transition-colors cursor-pointer"
        aria-label="Tutup notifikasi"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
