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

## 🤖 Kepatuhan Tools & AI Policy (Catatan Resmi Penggunaan AI)

Sesuai dengan ketentuan pada dokumen assignment:
> *"Kamu boleh menggunakan AI tools, internet references, coding/design assistants, atau tools lain yang relevan. Jika menggunakan AI, tambahkan catatan singkat berisi tool yang digunakan dan bagaimana tool tersebut membantu. Kamu tetap harus memahami dan mampu menjelaskan seluruh hasil yang dikumpulkan."*

### 1. Tools yang Digunakan:
- **Antigravity (Google DeepMind Coding Assistant)**
- **Tailwind CSS Documentation & Context7** (referensi konfigurasi Vite + Tailwind v4)

### 2. Bagaimana Tools Tersebut Membantu:
- **Penyusunan Mock Dataset**: Membantu menyusun data lowongan realistis yang merefleksikan kebutuhan nyata Sekolah Karir (Engineering, Product & Design, Curriculum & Learning, Marketing & Growth, People & Operations).
- **Best Practice Aksesibilitas (a11y)**: Memberikan rekomendasi struktur semantic HTML (`<article>`, `<section>`, `<main>`) serta standar WAI-ARIA (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-modal`) agar navigasi filter ramah keyboard dan pembaca layar.
- **Scaffolding & Responsive Styling**: Mempercepat pembuatan boilerplate React + TypeScript dan konfigurasi utilitas Tailwind CSS v4 untuk breakpoint mobile, tablet, dan desktop.

### 3. Pernyataan Pemahaman Kandidat:
Seluruh baris kode, arsitektur komponen, dan alur penanganan state (`useState`, `useMemo`, *derived state*) telah dikaji, dipahami secara penuh, dan kandidat mampu menjelaskan setiap keputusan teknis secara transparan pada sesi evaluasi teknis.

---

## 💡 Alur Logika & State Handling (Reasoning)

Untuk menjaga kode tetap **sederhana, mudah dipahami, dan mudah di-maintain**, arsitektur aplikasi dirancang dengan prinsip:

1. **Single Source of Truth & Derived State**:
   - `MOCK_ROLES` berperan sebagai data mentah (sumber utama).
   - Filter departemen dikontrol oleh satu state utama: `selectedDepartment`.
   - Data yang tampil ke pengguna (`filteredRoles`) dihitung secara langsung menggunakan **derived state** via `useMemo`, **bukan** disimpan di `state` terpisah menggunakan `useEffect`. Pendekatan ini mencegah bug desinkronisasi data dan menghilangkan re-render berlebih.

2. **3 State Utama yang Ditangani**:
   - **Default State**: Saat `selectedDepartment === 'All'` dan kotak pencarian kosong, seluruh 10 posisi langsung ditampilkan.
   - **Filtered State**: Saat pengguna mengklik salah satu tombol kategori (misal: *Engineering*), daftar peran disaring secara instan.
   - **Empty State**: Jika hasil filter atau kata kunci pencarian tidak menghasilkan role apapun (`filteredRoles.length === 0`), komponen `EmptyState` akan dirender menggantikan grid kartu, dilengkapi tombol aksi yang mereset filter kembali ke `'All'`.

3. **Sinkronisasi URL Parameter (Bookmarkable)**:
   - Nilai departemen yang aktif disinkronkan ke URL query parameter (`?department=...`) menggunakan `history.replaceState`. Hal ini memungkinkan pengguna membagikan link filter spesifik kepada rekan mereka tanpa perlu state management library eksternal yang rumit.

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
