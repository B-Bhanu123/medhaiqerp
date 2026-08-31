
import React from 'react';

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, icon }) => {
  return (
    <div className="stat-card">
      <div>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>{title}</span>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.25rem 0' }}>{value}</h2>
        {change && (
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: isPositive ? 'var(--success)' : 'var(--danger)' }}>
            {isPositive ? '↑' : '↓'} {change} from last month
          </span>
        )}
      </div>
      {icon && <div style={{ fontSize: '2rem', opacity: 0.8 }}>{icon}</div>}
    </div>
  );
};
