
import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Table } from '../components/ui/Table';
import { Button } from '../components/ui/Button';

export const StudentDirectory: React.FC = () => {
  const [students] = useState([
    { id: '1', admissionNo: 'STU24102', name: 'Alex Morgan', program: 'B.Tech CS', semester: 3, email: 'alex@student.medhaiq.edu', status: 'ACTIVE' },
    { id: '2', admissionNo: 'STU24103', name: 'Jordan Lee', program: 'B.Tech CS', semester: 3, email: 'jordan@student.medhaiq.edu', status: 'ACTIVE' },
    { id: '3', admissionNo: 'STU24104', name: 'Taylor Swift', program: 'B.Sc Physics', semester: 1, email: 'taylor@student.medhaiq.edu', status: 'ACTIVE' }
  ]);

  const columns = [
    { key: 'admissionNo', title: 'Admission No' },
    { key: 'name', title: 'Full Name' },
    { key: 'program', title: 'Academic Program' },
    { key: 'semester', title: 'Semester' },
    { key: 'email', title: 'Email Address' },
    {
      key: 'status',
      title: 'Status',
      render: (row: any) => <span className="badge badge-success">{row.status}</span>
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Student Information System (SIS)</h1>
          <p style={{ color: 'var(--text-muted)' }}>Manage student admissions, profiles, and academic status.</p>
        </div>
        <Button variant="primary">+ Register New Student</Button>
      </div>

      <Card title="Student Directory & Roster">
        <Table columns={columns} data={students} keyExtractor={row => row.id} />
      </Card>
    </div>
  );
};
