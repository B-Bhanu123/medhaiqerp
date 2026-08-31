
import React from 'react';
import { StatCard } from '../components/ui/StatCard';
import { Card } from '../components/ui/Card';

export const ExecutiveDashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Executive Analytics Overview</h1>
        <p style={{ color: 'var(--text-muted)' }}>Real-time institutional performance metrics and operational summaries.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        <StatCard title="Total Enrolled Students" value="4,850" change="12%" isPositive={true} icon="🎓" />
        <StatCard title="Active Faculty & Staff" value="342" change="3%" isPositive={true} icon="👥" />
        <StatCard title="Fee Collection YTD" value="$12.4M" change="8%" isPositive={true} icon="💳" />
        <StatCard title="Library Circulation" value="1,240" change="5%" isPositive={false} icon="📖" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <Card title="Monthly Revenue & Expenditure Ledger">
          <div style={{ height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', borderRadius: '6px', color: 'var(--text-muted)' }}>
            [Interactive Financial Chart: Revenue $1.2M / Expense $850k]
          </div>
        </Card>

        <Card title="Recent Announcements">
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
              <strong>Mid-Term Examination Schedule Released</strong>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Posted by Academic Dean • 2 hours ago</div>
            </li>
            <li style={{ borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
              <strong>Hostel Room Allocation Window Open</strong>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Posted by Warden • 1 day ago</div>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};
