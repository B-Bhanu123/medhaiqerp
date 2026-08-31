import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const LeaveManager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'LEAVEMANAGER-1001', name: 'LeaveManager Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'LEAVEMANAGER-1002', name: 'LeaveManager Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'LEAVEMANAGER-1003', name: 'LeaveManager Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'LEAVEMANAGER-1004', name: 'LeaveManager Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'LEAVEMANAGER-1005', name: 'LeaveManager Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'LEAVEMANAGER-1006', name: 'LeaveManager Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'LEAVEMANAGER-1007', name: 'LeaveManager Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'LEAVEMANAGER-1008', name: 'LeaveManager Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'LEAVEMANAGER-1009', name: 'LeaveManager Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'LEAVEMANAGER-1010', name: 'LeaveManager Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'LEAVEMANAGER-1011', name: 'LeaveManager Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'LEAVEMANAGER-1012', name: 'LeaveManager Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'LEAVEMANAGER-1013', name: 'LeaveManager Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'LEAVEMANAGER-1014', name: 'LeaveManager Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'LEAVEMANAGER-1015', name: 'LeaveManager Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'LEAVEMANAGER-1016', name: 'LeaveManager Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'LEAVEMANAGER-1017', name: 'LeaveManager Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'LEAVEMANAGER-1018', name: 'LeaveManager Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'LEAVEMANAGER-1019', name: 'LeaveManager Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'LEAVEMANAGER-1020', name: 'LeaveManager Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'LEAVEMANAGER-1021', name: 'LeaveManager Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'LEAVEMANAGER-1022', name: 'LeaveManager Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'LEAVEMANAGER-1023', name: 'LeaveManager Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'LEAVEMANAGER-1024', name: 'LeaveManager Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'LEAVEMANAGER-1025', name: 'LeaveManager Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'LEAVEMANAGER-1026', name: 'LeaveManager Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'LEAVEMANAGER-1027', name: 'LeaveManager Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'LEAVEMANAGER-1028', name: 'LeaveManager Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'LEAVEMANAGER-1029', name: 'LeaveManager Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'LEAVEMANAGER-1030', name: 'LeaveManager Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'LEAVEMANAGER-1031', name: 'LeaveManager Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'LEAVEMANAGER-1032', name: 'LeaveManager Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'LEAVEMANAGER-1033', name: 'LeaveManager Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'LEAVEMANAGER-1034', name: 'LeaveManager Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'LEAVEMANAGER-1035', name: 'LeaveManager Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'LEAVEMANAGER-1036', name: 'LeaveManager Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'LEAVEMANAGER-1037', name: 'LeaveManager Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'LEAVEMANAGER-1038', name: 'LeaveManager Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'LEAVEMANAGER-1039', name: 'LeaveManager Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'LEAVEMANAGER-1040', name: 'LeaveManager Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'LEAVEMANAGER-1041', name: 'LeaveManager Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'LEAVEMANAGER-1042', name: 'LeaveManager Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'LEAVEMANAGER-1043', name: 'LeaveManager Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'LEAVEMANAGER-1044', name: 'LeaveManager Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'LEAVEMANAGER-1045', name: 'LeaveManager Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'LEAVEMANAGER-1046', name: 'LeaveManager Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'LEAVEMANAGER-1047', name: 'LeaveManager Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'LEAVEMANAGER-1048', name: 'LeaveManager Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'LEAVEMANAGER-1049', name: 'LeaveManager Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'LEAVEMANAGER-1050', name: 'LeaveManager Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'LEAVEMANAGER-1051', name: 'LeaveManager Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'LEAVEMANAGER-1052', name: 'LeaveManager Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'LEAVEMANAGER-1053', name: 'LeaveManager Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'LEAVEMANAGER-1054', name: 'LeaveManager Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'LEAVEMANAGER-1055', name: 'LeaveManager Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'LEAVEMANAGER-1056', name: 'LeaveManager Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'LEAVEMANAGER-1057', name: 'LeaveManager Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'LEAVEMANAGER-1058', name: 'LeaveManager Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'LEAVEMANAGER-1059', name: 'LeaveManager Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'LEAVEMANAGER-1060', name: 'LeaveManager Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'LEAVEMANAGER-1061', name: 'LeaveManager Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'LEAVEMANAGER-1062', name: 'LeaveManager Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'LEAVEMANAGER-1063', name: 'LeaveManager Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'LEAVEMANAGER-1064', name: 'LeaveManager Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'LEAVEMANAGER-1065', name: 'LeaveManager Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'LEAVEMANAGER-1066', name: 'LeaveManager Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'LEAVEMANAGER-1067', name: 'LeaveManager Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'LEAVEMANAGER-1068', name: 'LeaveManager Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'LEAVEMANAGER-1069', name: 'LeaveManager Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'LEAVEMANAGER-1070', name: 'LeaveManager Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'LEAVEMANAGER-1071', name: 'LeaveManager Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'LEAVEMANAGER-1072', name: 'LeaveManager Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'LEAVEMANAGER-1073', name: 'LeaveManager Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'LEAVEMANAGER-1074', name: 'LeaveManager Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'LEAVEMANAGER-1075', name: 'LeaveManager Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'LEAVEMANAGER-1076', name: 'LeaveManager Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'LEAVEMANAGER-1077', name: 'LeaveManager Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'LEAVEMANAGER-1078', name: 'LeaveManager Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'LEAVEMANAGER-1079', name: 'LeaveManager Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'LEAVEMANAGER-1080', name: 'LeaveManager Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Employee Leave & Attendance Portal</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Employee Leave & Attendance Portal management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Employee Leave & Attendance Portal Record</Button>
      </div>

      <Card title="Employee Leave & Attendance Portal Records Registry">
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
