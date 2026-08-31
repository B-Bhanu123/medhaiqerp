import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const ExamScheduler: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'EXAMSCHEDULER-1001', name: 'ExamScheduler Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'EXAMSCHEDULER-1002', name: 'ExamScheduler Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'EXAMSCHEDULER-1003', name: 'ExamScheduler Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'EXAMSCHEDULER-1004', name: 'ExamScheduler Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'EXAMSCHEDULER-1005', name: 'ExamScheduler Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'EXAMSCHEDULER-1006', name: 'ExamScheduler Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'EXAMSCHEDULER-1007', name: 'ExamScheduler Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'EXAMSCHEDULER-1008', name: 'ExamScheduler Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'EXAMSCHEDULER-1009', name: 'ExamScheduler Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'EXAMSCHEDULER-1010', name: 'ExamScheduler Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'EXAMSCHEDULER-1011', name: 'ExamScheduler Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'EXAMSCHEDULER-1012', name: 'ExamScheduler Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'EXAMSCHEDULER-1013', name: 'ExamScheduler Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'EXAMSCHEDULER-1014', name: 'ExamScheduler Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'EXAMSCHEDULER-1015', name: 'ExamScheduler Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'EXAMSCHEDULER-1016', name: 'ExamScheduler Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'EXAMSCHEDULER-1017', name: 'ExamScheduler Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'EXAMSCHEDULER-1018', name: 'ExamScheduler Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'EXAMSCHEDULER-1019', name: 'ExamScheduler Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'EXAMSCHEDULER-1020', name: 'ExamScheduler Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'EXAMSCHEDULER-1021', name: 'ExamScheduler Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'EXAMSCHEDULER-1022', name: 'ExamScheduler Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'EXAMSCHEDULER-1023', name: 'ExamScheduler Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'EXAMSCHEDULER-1024', name: 'ExamScheduler Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'EXAMSCHEDULER-1025', name: 'ExamScheduler Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'EXAMSCHEDULER-1026', name: 'ExamScheduler Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'EXAMSCHEDULER-1027', name: 'ExamScheduler Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'EXAMSCHEDULER-1028', name: 'ExamScheduler Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'EXAMSCHEDULER-1029', name: 'ExamScheduler Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'EXAMSCHEDULER-1030', name: 'ExamScheduler Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'EXAMSCHEDULER-1031', name: 'ExamScheduler Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'EXAMSCHEDULER-1032', name: 'ExamScheduler Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'EXAMSCHEDULER-1033', name: 'ExamScheduler Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'EXAMSCHEDULER-1034', name: 'ExamScheduler Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'EXAMSCHEDULER-1035', name: 'ExamScheduler Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'EXAMSCHEDULER-1036', name: 'ExamScheduler Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'EXAMSCHEDULER-1037', name: 'ExamScheduler Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'EXAMSCHEDULER-1038', name: 'ExamScheduler Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'EXAMSCHEDULER-1039', name: 'ExamScheduler Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'EXAMSCHEDULER-1040', name: 'ExamScheduler Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'EXAMSCHEDULER-1041', name: 'ExamScheduler Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'EXAMSCHEDULER-1042', name: 'ExamScheduler Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'EXAMSCHEDULER-1043', name: 'ExamScheduler Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'EXAMSCHEDULER-1044', name: 'ExamScheduler Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'EXAMSCHEDULER-1045', name: 'ExamScheduler Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'EXAMSCHEDULER-1046', name: 'ExamScheduler Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'EXAMSCHEDULER-1047', name: 'ExamScheduler Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'EXAMSCHEDULER-1048', name: 'ExamScheduler Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'EXAMSCHEDULER-1049', name: 'ExamScheduler Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'EXAMSCHEDULER-1050', name: 'ExamScheduler Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'EXAMSCHEDULER-1051', name: 'ExamScheduler Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'EXAMSCHEDULER-1052', name: 'ExamScheduler Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'EXAMSCHEDULER-1053', name: 'ExamScheduler Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'EXAMSCHEDULER-1054', name: 'ExamScheduler Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'EXAMSCHEDULER-1055', name: 'ExamScheduler Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'EXAMSCHEDULER-1056', name: 'ExamScheduler Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'EXAMSCHEDULER-1057', name: 'ExamScheduler Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'EXAMSCHEDULER-1058', name: 'ExamScheduler Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'EXAMSCHEDULER-1059', name: 'ExamScheduler Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'EXAMSCHEDULER-1060', name: 'ExamScheduler Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'EXAMSCHEDULER-1061', name: 'ExamScheduler Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'EXAMSCHEDULER-1062', name: 'ExamScheduler Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'EXAMSCHEDULER-1063', name: 'ExamScheduler Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'EXAMSCHEDULER-1064', name: 'ExamScheduler Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'EXAMSCHEDULER-1065', name: 'ExamScheduler Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'EXAMSCHEDULER-1066', name: 'ExamScheduler Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'EXAMSCHEDULER-1067', name: 'ExamScheduler Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'EXAMSCHEDULER-1068', name: 'ExamScheduler Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'EXAMSCHEDULER-1069', name: 'ExamScheduler Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'EXAMSCHEDULER-1070', name: 'ExamScheduler Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'EXAMSCHEDULER-1071', name: 'ExamScheduler Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'EXAMSCHEDULER-1072', name: 'ExamScheduler Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'EXAMSCHEDULER-1073', name: 'ExamScheduler Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'EXAMSCHEDULER-1074', name: 'ExamScheduler Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'EXAMSCHEDULER-1075', name: 'ExamScheduler Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'EXAMSCHEDULER-1076', name: 'ExamScheduler Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'EXAMSCHEDULER-1077', name: 'ExamScheduler Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'EXAMSCHEDULER-1078', name: 'ExamScheduler Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'EXAMSCHEDULER-1079', name: 'ExamScheduler Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'EXAMSCHEDULER-1080', name: 'ExamScheduler Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
  ]);

  const columns = [
    { key: 'code', title: 'Code' },
    { key: 'name', title: 'Name & Details' },
    { key: 'category', title: 'Category' },
    { key: 'lastUpdated', title: 'Last Modified' },
    { key: 'status', title: 'Status', render: (row: any) => <span className="badge badge-success">{row.status}</span> }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Examination & Seating Plan Manager</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Examination & Seating Plan Manager management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Examination & Seating Plan Manager Record</Button>
      </div>

      <Card title="Examination & Seating Plan Manager Records Registry">
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Search records..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid var(--border)', width: '100%', maxWidth: '320px' }}
          />
        </div>
        <Table columns={columns} data={items.filter(i => i.name.toLowerCase().includes(searchTerm.toLowerCase()))} keyExtractor={row => row.id} />
      </Card>
    </div>
  );
};
