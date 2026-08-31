
import React from 'react';
import { Card } from '../components/ui/Card';
import { StatCard } from '../components/ui/StatCard';
import { Button } from '../components/ui/Button';

export const FeeConfiguration: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Fee Management & Invoicing Desk</h1>
          <p style={{ color: 'var(--text-muted)' }}>Fee structures, student invoices, ledger accounts, and collections.</p>
        </div>
        <Button variant="primary">+ Generate Invoices</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        <StatCard title="Total Collections" value="$4,250,000" isPositive={true} change="14%" />
        <StatCard title="Pending Outstanding" value="$320,000" isPositive={false} change="2%" />
        <StatCard title="Scholarship Disbursed" value="$180,000" isPositive={true} change="5%" />
      </div>

      <Card title="Recent Invoices & Payment Ledger">
        <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '6px', textAlign: 'center', color: 'var(--text-muted)' }}>
          [Displaying 1,240 Student Invoices - All Sync Status OK]
        </div>
      </Card>
    </div>
  );
};
