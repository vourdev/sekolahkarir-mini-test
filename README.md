# Role Explorer: Sekolah Karir (Paid Internship Batch 2)

Mini assignment seleksi posisi Front-End Engineer di Sekolah Karir.

## Ringkasan Tugas

Proyek ini mengimplementasikan komponen penjelajah peran (role explorer) responsif sesuai instruksi brief:
- Filter lowongan berdasarkan departemen.
- Menampilkan tiga kondisi tampilan: kondisi default, hasil filter, dan kondisi kosong jika pencarian tidak menemukan hasil.
- Data menggunakan mock data lokal tanpa backend.
- Komponen dirancang responsif untuk tampilan layar ponsel hingga desktop.

## State Handling dan Logika Komponen

Aplikasi menggunakan pendekatan derived state untuk menjaga alur data tetap sederhana dan mudah dilacak:

1. State utama:
   Hanya dua nilai yang disimpan dalam state di `App.tsx`, yaitu kategori departemen yang aktif (`selectedDepartment`) dan teks pencarian (`searchQuery`).

2. Logika penyaringan (Derived State):
   Daftar lowongan yang tampil dihitung langsung menggunakan `useMemo` berdasarkan kombinasi filter departemen dan teks pencarian. Pendekatan ini menghindari pembuatan state ganda (`useState` + `useEffect`) yang rawan desinkronisasi data.

3. Tiga kondisi tampilan:
   - Default state: Menampilkan seluruh 10 posisi dari lima departemen saat filter berada pada pilihan "Semua Departemen".
   - Filtered state: Menampilkan kartu posisi yang sesuai ketika pengguna memilih departemen tertentu atau mengetik kata kunci.
   - Empty state: Menampilkan komponen `EmptyState` jika tidak ada posisi yang cocok, dilengkapi tombol reset untuk mengembalikan filter ke kondisi awal.

4. Sinkronisasi URL (Format Slug):
   Nilai state departemen menggunakan format huruf kecil dan snake_case (`all`, `engineering`, `product_and_design`, `curriculum_and_learning`, `marketing_and_growth`, `people_and_operations`). Nilai ini disinkronkan ke parameter URL (`?department=product_and_design`), sehingga tautan filter dapat dibagikan langsung dengan format slug yang rapi.

## Catatan Penggunaan AI (Tools & AI Policy)

Bagian ini disertakan sesuai ketentuan brief seleksi Sekolah Karir:

- Tool yang digunakan: Antigravity (Google DeepMind) dan dokumentasi resmi Tailwind CSS.
- Bagaimana tool membantu:
  1. Membantu penyusunan data mock peran agar relevan dengan posisi umum di Sekolah Karir (Engineering, Product, Curriculum, Marketing, dan Operations).
  2. Memberikan referensi atribut aksesibilitas WAI-ARIA (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-modal`) agar tombol filter dan dialog ramah pembaca layar.
  3. Mempercepat konfigurasi awal proyek React, TypeScript, dan Tailwind CSS.
- Tanggung jawab teknis: Seluruh baris kode, arsitektur komponen, dan alur penanganan state dipahami oleh kandidat dan siap dijelaskan pada sesi wawancara teknis.

## Struktur Direktori

```text
sekolahkarir-mini-test/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Navigasi atas
│   │   ├── HeroSection.tsx        # Judul, input pencarian, dan ringkasan angka
│   │   ├── DepartmentFilter.tsx   # Tombol filter departemen dengan hitungan posisi
│   │   ├── RoleCard.tsx           # Kartu informasi lowongan
│   │   ├── RoleDetailModal.tsx    # Modal detail kualifikasi dan tanggung jawab
│   │   ├── EmptyState.tsx         # Tampilan saat hasil pencarian kosong
│   │   ├── Toast.tsx              # Notifikasi umpan balik
│   │   └── Footer.tsx             # Informasi penutup
│   ├── data/
│   │   └── mockRoles.ts           # Data mock lowongan
│   ├── types/
│   │   └── role.ts                # Definisi tipe TypeScript
│   ├── App.tsx                    # Komponen utama dan logika filter
│   ├── main.tsx                   # Entry point aplikasi
│   └── index.css                  # Konfigurasi Tailwind CSS
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Cara Menjalankan Project

1. Pastikan Node.js (versi 18 ke atas) sudah terpasang.
2. Pasang dependensi:
   ```bash
   npm install
   ```
3. Jalankan server lokal:
   ```bash
   npm run dev
   ```
   Buka alamat `http://localhost:5173` di browser.
4. Buat build produksi:
   ```bash
   npm run build
   npm run preview
   ```

## Informasi Pengumpulan

- Repository: `https://github.com/vourdev/sekolahkarir-mini-test`
- Live Demo: `[URL deploy Vercel atau Netlify]`
- Format penamaan repositori dan file: `[NamaLengkap]_FrontEndEngineer_SKBatch2`
