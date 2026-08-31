
import React from 'react';

export interface SidebarProps {
  activeModule: string;
  onSelectModule: (module: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeModule, onSelectModule }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Executive Dashboard', icon: '📊' },
    { id: 'students', label: 'Student SIS', icon: '🎓' },
    { id: 'academics', label: 'Academic & Courses', icon: '📚' },
    { id: 'finance', label: 'Finance & Fees', icon: '💳' },
    { id: 'hr', label: 'Staff HR & Payroll', icon: '👥' },
    { id: 'library', label: 'Library Catalog', icon: '📖' },
    { id: 'hostel', label: 'Hostel & Dorms', icon: '🏢' },
    { id: 'transport', label: 'Transport & Fleet', icon: '🚌' },
    { id: 'notices', label: 'Noticeboard', icon: '📢' }
  ];

  return (
    <aside style={{ width: '260px', background: '#0f172a', color: '#f8fafc', height: '100vh', padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column' }}>
      <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #334155', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>🏛</span> MedhaIQ ERP
        </h2>
        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>v1.0.0 Enterprise Edition</span>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', flex: 1 }}>
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => onSelectModule(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              border: 'none',
              background: activeModule === item.id ? '#1e293b' : 'transparent',
              color: activeModule === item.id ? '#38bdf8' : '#94a3b8',
              fontWeight: activeModule === item.id ? 600 : 400,
              fontSize: '0.875rem',
              textAlign: 'left'
            }}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};
