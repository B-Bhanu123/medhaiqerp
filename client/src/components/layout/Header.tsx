
import React from 'react';

export const Header: React.FC<{ user?: { name: string; role: string } }> = ({ user }) => {
  return (
    <header style={{ height: '64px', background: 'var(--surface)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem' }}>
      <div>
        <h4 style={{ fontWeight: 600 }}>University Portal</h4>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{user?.name || 'System Admin'}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user?.role || 'SUPER_ADMIN'}</div>
        </div>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#4f46e5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
          SA
        </div>
      </div>
    </header>
  );
};
