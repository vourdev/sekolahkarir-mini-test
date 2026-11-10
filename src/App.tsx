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

export function App() {
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

  useEffect(() => {
    const url = new URL(window.location.href);
    if (selectedDepartment === 'All') {
      url.searchParams.delete('department');
    } else {
      url.searchParams.set('department', selectedDepartment);
    }
    window.history.replaceState({}, '', url.toString());
  }, [selectedDepartment]);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const filteredRoles = useMemo(() => {
    return MOCK_ROLES.filter((role) => {
      const matchesDepartment =
        selectedDepartment === 'All' || role.department === selectedDepartment;

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
    setToastMessage(`Lamaran untuk ${role.title} dicatat.`);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalRoles={MOCK_ROLES.length}
        totalDepartments={DEPARTMENTS.length - 1}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-5">
          <DepartmentFilter
            activeDepartment={selectedDepartment}
            onSelectDepartment={setSelectedDepartment}
            departmentCounts={departmentCounts}
          />

          <div className="flex items-center justify-between gap-3 pt-2 pb-3 border-b border-slate-200 text-xs sm:text-sm text-slate-600">
            <div>
              Menampilkan <strong>{filteredRoles.length}</strong> posisi
              {selectedDepartment !== 'All' && (
                <> di departemen <span className="font-semibold text-slate-800">{selectedDepartment}</span></>
              )}
              {searchQuery && (
                <> untuk pencarian "<span className="font-semibold text-slate-800">{searchQuery}</span>"</>
              )}
            </div>

            {(selectedDepartment !== 'All' || searchQuery) && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
              >
                Reset Filter
              </button>
            )}
          </div>
        </div>

        <section id="role-grid" className="mt-6" aria-label="Daftar lowongan">
          {filteredRoles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <RoleDetailModal
        role={selectedRoleForDetail}
        isOpen={Boolean(selectedRoleForDetail)}
        onClose={() => setSelectedRoleForDetail(null)}
        onApply={handleApplyRole}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      <Footer />
    </div>
  );
}

export default App;
