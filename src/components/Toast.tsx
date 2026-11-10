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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-900/20 border border-slate-700 animate-in slide-in-from-bottom-5 duration-200"
    >
      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
      <span className="text-sm font-medium">{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="ml-2 p-1 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
        aria-label="Tutup notifikasi"
      >
        <X className="w-4 h-4" />
      </button>
    </aside>
  );
};
