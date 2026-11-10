import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-sk-line bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo Sekolah Karir"
              width={34}
              height={34}
              className="rounded-lg object-contain"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-sk-navy">
                  Sekolah<span className="text-sk-accent">Karir</span>
                </span>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[11px] font-bold bg-sk-blue-50 text-sk-accent-hover border border-sk-blue-100">
                  Batch 2
                </span>
              </div>
              <p className="text-[11px] text-sk-muted hidden sm:block">Paid Internship Program</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1.5"></span>
              Pendaftaran Dibuka
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
