# Role Explorer — Sekolah Karir (Paid Internship Batch 2)

> **Front-End Engineer Mini Assignment**  
> Dibuat sebagai bagian dari seleksi **Paid Internship Batch 2 di Sekolah Karir**.

---

## 📌 Ringkasan Tugas & Solusi

Aplikasi ini adalah implementasi dari komponen **Responsive Role Explorer** yang memungkinkan pengguna mencari dan memfilter lowongan peran (*roles*) berdasarkan departemen di Sekolah Karir.

### 🌟 Fitur Utama & State Handling
1. **Default State**:
   - Menampilkan seluruh lowongan yang tersedia (total 10 posisi pada 5 departemen).
   - Menyajikan ringkasan statistik (jumlah posisi terbuka, jumlah departemen, mode kerja Remote/Hybrid).
2. **Filtered State**:
   - Filter departemen interaktif menggunakan tombol tab/chips (*Engineering*, *Product & Design*, *Curriculum & Learning*, *Marketing & Growth*, *People & Operations*).
   - Dilengkapi *live search bar* untuk mencari peran berdasarkan judul, kata kunci skill (misal: *React*, *Figma*, *Node.js*), atau deskripsi.
   - Sinkronisasi **URL Query Parameters** (`?department=Engineering`), sehingga status filter dapat dibagikan (*shareable link*) dan di-*bookmark*.
   - Badge counter dinamis pada setiap tombol departemen.
3. **Empty State**:
   - Ditampilkan secara dinamis jika tidak ada posisi yang cocok dengan departemen atau kata kunci pencarian.
   - Memberikan pesan kontekstual yang jelas serta tombol aksi **"Reset Semua Filter"** yang mengembalikan state ke tampilan default dalam satu klik.
4. **UX & Micro-interactions Tambahan**:
   - **Role Detail Modal**: Dialog modal untuk melihat detail tanggung jawab, kualifikasi, dan keahlian yang dibutuhkan secara lengkap. Mendukung penutupan via tombol `Escape`, klik *backdrop*, atau tombol tutup.
   - **Simulasi Lamaran & Toast Feedback**: Feedback visual cepat saat pengguna menekan tombol "Lamar".
   - **Desain Responsif**: Grid adaptif (1 kolom di mobile, 2 kolom di tablet, 3 kolom di desktop) dan *touch-friendly horizontal scroll* pada kategori filter mobile.

---

## 🛠️ Tech Stack & Keputusan Arsitektur

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/) (Strict typing untuk model data Role dan Department)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Desain Tipografi**: Plus Jakarta Sans

### 📂 Struktur Direktori

```text
sekolahkarir-mini-test/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Navigasi atas & branding Sekolah Karir
│   │   ├── HeroSection.tsx        # Judul, search bar, & statistik ringkas
│   │   ├── DepartmentFilter.tsx   # Filter tabs berstatus aria-selected & badge count
│   │   ├── RoleCard.tsx           # Kartu informasi lowongan pekerjaan
│   │   ├── RoleDetailModal.tsx    # Modal detail lowongan peran & kualifikasi
│   │   ├── EmptyState.tsx         # Tampilan kosong informatif + tombol reset
│   │   ├── Toast.tsx              # Notifikasi feedback aksi pengguna
│   │   └── Footer.tsx             # Footer informasi seleksi
│   ├── data/
│   │   └── mockRoles.ts           # Mock dataset lowongan realistis Sekolah Karir
│   ├── types/
│   │   └── role.ts                # TypeScript types & interface definitions
│   ├── App.tsx                    # State management & koordinasi komponen
│   ├── main.tsx                   # Entry point aplikasi
│   └── index.css                  # Konfigurasi Tailwind CSS v4 & custom scrollbar
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🤖 Catatan Penggunaan AI (*AI Tools Policy Disclosure*)

Sesuai dengan panduan **Tools & AI Policy** pada dokumen brief assignment:

- **Tool yang digunakan**: **Antigravity (Google DeepMind Coding Assistant)**
- **Bagaimana AI membantu**:
  1. Membantu *brainstorming* dan menyusun dataset *mock* posisi yang relevan dan realistis dengan ekosistem Sekolah Karir (Engineering, Product, Curriculum, Marketing, Ops).
  2. Memberikan rekomendasi struktur semantic HTML dan aksesibilitas ARIA (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-modal`) untuk memastikan komponen inklusif dan ramah pembaca layar.
  3. Mempercepat *scaffolding* boilerplate komponen dan integrasi Tailwind CSS v4.
- **Pernyataan Kandidat**: Seluruh arsitektur kode, penanganan state, dan implementasi UX dipahami secara menyeluruh dan siap dipertanggungjawabkan serta dijelaskan dalam sesi wawancara teknis.

---

## 🚀 Panduan Menjalankan Secara Lokal

### Prasyarat
- Node.js versi 18+ (disarankan Node.js v20 atau v22)
- NPM atau PNPM / Yarn

### Langkah Instalasi
1. Clone repositori ini:
   ```bash
   git clone <link-repository>
   cd sekolahkarir-mini-test
   ```

2. Pasang dependensi:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:5173`.

4. Untuk build produksi:
   ```bash
   npm run build
   npm run preview
   ```

---

## 🔗 Live Demo & Submission Details

- **Live Demo Link**: *(Cantumkan link deploy Vercel / Netlify setelah dideploy)*
- **Repository**: *(Cantumkan link repositori GitHub)*
- **Format Penamaan**: `[NamaLengkap]_FrontEndEngineer_SKBatch2`
