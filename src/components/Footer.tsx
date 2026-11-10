import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-sk-line bg-white py-10 text-sk-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Sekolah Karir"
              width={28}
              height={28}
              className="rounded-md object-contain"
            />
            <div>
              <p className="font-extrabold text-sm text-sk-navy">
                Sekolah<span className="text-sk-accent">Karir</span>
              </p>
              <p className="text-[11px] text-sk-muted">
                Belajar dari praktisi. Bangun bukti kerja. Tumbuh bersama komunitas.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-[11px] font-medium">
            <span>Paid Internship Batch 2: Front-End Engineer</span>
            <span className="text-sk-navy font-bold">© 2026 Sekolah Karir</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
