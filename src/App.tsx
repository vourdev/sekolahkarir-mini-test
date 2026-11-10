import { useState, useMemo, useEffect, useCallback } from 'react';
import { Department, Role } from './types/role';
import { MOCK_ROLES, DEPARTMENTS, DEPARTMENT_LABELS } from './data/mockRoles';
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
    return 'all';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoleForDetail, setSelectedRoleForDetail] = useState<Role | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (selectedDepartment === 'all') {
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
        selectedDepartment === 'all' || role.department === selectedDepartment;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        role.title.toLowerCase().includes(query) ||
        role.description.toLowerCase().includes(query) ||
        role.departmentLabel.toLowerCase().includes(query) ||
        role.department.includes(query) ||
        role.skills.some((skill) => skill.toLowerCase().includes(query));

      return matchesDepartment && matchesSearch;
    });
  }, [selectedDepartment, searchQuery]);

  const departmentCounts = useMemo(() => {
    const counts: Record<Department, number> = {
      all: MOCK_ROLES.length,
      engineering: 0,
      product_and_design: 0,
      curriculum_and_learning: 0,
      marketing_and_growth: 0,
      people_and_operations: 0,
    };

    MOCK_ROLES.forEach((role) => {
      if (counts[role.department] !== undefined) {
        counts[role.department]++;
      }
    });

    return counts;
  }, []);

  const handleResetFilters = useCallback(() => {
    setSelectedDepartment('all');
    setSearchQuery('');
  }, []);

  const handleApplyRole = useCallback((role: Role) => {
    setToastMessage(`Lamaran untuk ${role.title} dicatat.`);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-sk-soft text-sk-ink font-['Plus_Jakarta_Sans',system-ui,sans-serif]">
      <Navbar />

      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalRoles={MOCK_ROLES.length}
        totalDepartments={DEPARTMENTS.length - 1}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="space-y-6">
          <DepartmentFilter
            activeDepartment={selectedDepartment}
            onSelectDepartment={setSelectedDepartment}
            departmentCounts={departmentCounts}
          />

          <div className="flex items-center justify-between gap-3 pt-2 pb-3 border-b border-sk-line text-xs sm:text-sm text-sk-muted">
            <div>
              Menampilkan <strong className="text-sk-navy font-bold">{filteredRoles.length}</strong> posisi
              {selectedDepartment !== 'all' && (
                <> di departemen <span className="font-bold text-sk-navy">{DEPARTMENT_LABELS[selectedDepartment]}</span></>
              )}
              {searchQuery && (
                <> untuk pencarian "<span className="font-bold text-sk-navy">{searchQuery}</span>"</>
              )}
            </div>

            {(selectedDepartment !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-bold text-sk-accent hover:text-sk-accent-hover transition-colors cursor-pointer"
              >
                Reset Filter
              </button>
            )}
          </div>
        </div>

        <section id="role-grid" className="mt-6" aria-label="Daftar lowongan">
          {filteredRoles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
