import { useState, useMemo, useEffect, useCallback } from 'react';
import { Department, Role } from './types/role';
import { MOCK_ROLES, DEPARTMENTS } from './data/mockRoles';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DepartmentFilter } from './components/DepartmentFilter';
import { RoleCard } from './components/RoleCard';
import { EmptyState } from './components/EmptyState';
import { RoleDetailModal } from './components/RoleDetailModal';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';
import { SlidersHorizontal } from 'lucide-react';

export function App() {
  // Sync state with URL Search Params for bookmarkable & shareable state
  const [selectedDepartment, setSelectedDepartment] = useState<Department>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const deptParam = params.get('department') as Department;
      if (deptParam && DEPARTMENTS.some((d) => d.id === deptParam)) {
        return deptParam;
      }
    }
    return 'All';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoleForDetail, setSelectedRoleForDetail] = useState<Role | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Update URL parameter when department changes
  useEffect(() => {
    const url = new URL(window.location.href);
    if (selectedDepartment === 'All') {
      url.searchParams.delete('department');
    } else {
      url.searchParams.set('department', selectedDepartment);
    }
    window.history.replaceState({}, '', url.toString());
  }, [selectedDepartment]);

  // Toast auto-dismiss after 4 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Derived state: filtered roles based on Department and Search Query
  const filteredRoles = useMemo(() => {
    return MOCK_ROLES.filter((role) => {
      // 1. Department match
      const matchesDepartment =
        selectedDepartment === 'All' || role.department === selectedDepartment;

      // 2. Search query match (title, description, skills, location)
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        role.title.toLowerCase().includes(query) ||
        role.description.toLowerCase().includes(query) ||
        role.department.toLowerCase().includes(query) ||
        role.skills.some((skill) => skill.toLowerCase().includes(query));

      return matchesDepartment && matchesSearch;
    });
  }, [selectedDepartment, searchQuery]);

  // Dynamic counts for each department based on the dataset
  const departmentCounts = useMemo(() => {
    const counts: Record<Department, number> = {
      All: MOCK_ROLES.length,
      Engineering: 0,
      'Product & Design': 0,
      'Curriculum & Learning': 0,
      'Marketing & Growth': 0,
      'People & Operations': 0,
    };

    MOCK_ROLES.forEach((role) => {
      if (counts[role.department] !== undefined) {
        counts[role.department]++;
      }
    });

    return counts;
  }, []);

  const handleResetFilters = useCallback(() => {
    setSelectedDepartment('All');
    setSearchQuery('');
  }, []);

  const handleApplyRole = useCallback((role: Role) => {
    setToastMessage(`Pilihan tercatat: Anda memilih melamar sebagai "${role.title}"!`);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero section with live search & quick stats */}
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalRoles={MOCK_ROLES.length}
        totalDepartments={DEPARTMENTS.length - 1}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Filter Section */}
        <div className="space-y-6">
          <DepartmentFilter
            activeDepartment={selectedDepartment}
            onSelectDepartment={setSelectedDepartment}
            departmentCounts={departmentCounts}
          />

          {/* Results Summary Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
              <span>
                Menampilkan{' '}
                <strong className="text-slate-900 font-bold">{filteredRoles.length}</strong> posisi
                {selectedDepartment !== 'All' && (
                  <>
                    {' '}
                    di departemen <strong className="text-indigo-600">{selectedDepartment}</strong>
                  </>
                )}
                {searchQuery && (
                  <>
                    {' '}
                    dengan kata kunci <strong className="text-slate-900">"{searchQuery}"</strong>
                  </>
                )}
              </span>
            </div>

            {(selectedDepartment !== 'All' || searchQuery) && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors self-start sm:self-auto cursor-pointer"
              >
                Reset Semua Filter
              </button>
            )}
          </div>
        </div>

        {/* Roles Display Grid or Empty State */}
        <section id="role-grid" className="mt-8" aria-label="Daftar Lowongan Peran">
          {filteredRoles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRoles.map((role) => (
                <RoleCard
                  key={role.id}
                  role={role}
                  onViewDetails={setSelectedRoleForDetail}
                  onApply={handleApplyRole}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              selectedDepartment={selectedDepartment}
              searchQuery={searchQuery}
              onResetFilters={handleResetFilters}
            />
          )}
        </section>
      </main>

      {/* Modal Detail Peran */}
      <RoleDetailModal
        role={selectedRoleForDetail}
        isOpen={Boolean(selectedRoleForDetail)}
        onClose={() => setSelectedRoleForDetail(null)}
        onApply={handleApplyRole}
      />

      {/* Notification Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
