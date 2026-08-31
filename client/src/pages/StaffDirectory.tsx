import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const StaffDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'STAFFDIRECTORY-1001', name: 'StaffDirectory Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'STAFFDIRECTORY-1002', name: 'StaffDirectory Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'STAFFDIRECTORY-1003', name: 'StaffDirectory Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'STAFFDIRECTORY-1004', name: 'StaffDirectory Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'STAFFDIRECTORY-1005', name: 'StaffDirectory Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'STAFFDIRECTORY-1006', name: 'StaffDirectory Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'STAFFDIRECTORY-1007', name: 'StaffDirectory Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'STAFFDIRECTORY-1008', name: 'StaffDirectory Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'STAFFDIRECTORY-1009', name: 'StaffDirectory Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'STAFFDIRECTORY-1010', name: 'StaffDirectory Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'STAFFDIRECTORY-1011', name: 'StaffDirectory Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'STAFFDIRECTORY-1012', name: 'StaffDirectory Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'STAFFDIRECTORY-1013', name: 'StaffDirectory Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'STAFFDIRECTORY-1014', name: 'StaffDirectory Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'STAFFDIRECTORY-1015', name: 'StaffDirectory Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'STAFFDIRECTORY-1016', name: 'StaffDirectory Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'STAFFDIRECTORY-1017', name: 'StaffDirectory Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'STAFFDIRECTORY-1018', name: 'StaffDirectory Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'STAFFDIRECTORY-1019', name: 'StaffDirectory Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'STAFFDIRECTORY-1020', name: 'StaffDirectory Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'STAFFDIRECTORY-1021', name: 'StaffDirectory Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'STAFFDIRECTORY-1022', name: 'StaffDirectory Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'STAFFDIRECTORY-1023', name: 'StaffDirectory Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'STAFFDIRECTORY-1024', name: 'StaffDirectory Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'STAFFDIRECTORY-1025', name: 'StaffDirectory Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'STAFFDIRECTORY-1026', name: 'StaffDirectory Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'STAFFDIRECTORY-1027', name: 'StaffDirectory Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'STAFFDIRECTORY-1028', name: 'StaffDirectory Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'STAFFDIRECTORY-1029', name: 'StaffDirectory Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'STAFFDIRECTORY-1030', name: 'StaffDirectory Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'STAFFDIRECTORY-1031', name: 'StaffDirectory Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'STAFFDIRECTORY-1032', name: 'StaffDirectory Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'STAFFDIRECTORY-1033', name: 'StaffDirectory Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'STAFFDIRECTORY-1034', name: 'StaffDirectory Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'STAFFDIRECTORY-1035', name: 'StaffDirectory Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'STAFFDIRECTORY-1036', name: 'StaffDirectory Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'STAFFDIRECTORY-1037', name: 'StaffDirectory Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'STAFFDIRECTORY-1038', name: 'StaffDirectory Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'STAFFDIRECTORY-1039', name: 'StaffDirectory Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'STAFFDIRECTORY-1040', name: 'StaffDirectory Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'STAFFDIRECTORY-1041', name: 'StaffDirectory Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'STAFFDIRECTORY-1042', name: 'StaffDirectory Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'STAFFDIRECTORY-1043', name: 'StaffDirectory Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'STAFFDIRECTORY-1044', name: 'StaffDirectory Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'STAFFDIRECTORY-1045', name: 'StaffDirectory Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'STAFFDIRECTORY-1046', name: 'StaffDirectory Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'STAFFDIRECTORY-1047', name: 'StaffDirectory Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'STAFFDIRECTORY-1048', name: 'StaffDirectory Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'STAFFDIRECTORY-1049', name: 'StaffDirectory Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'STAFFDIRECTORY-1050', name: 'StaffDirectory Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'STAFFDIRECTORY-1051', name: 'StaffDirectory Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'STAFFDIRECTORY-1052', name: 'StaffDirectory Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'STAFFDIRECTORY-1053', name: 'StaffDirectory Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'STAFFDIRECTORY-1054', name: 'StaffDirectory Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'STAFFDIRECTORY-1055', name: 'StaffDirectory Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'STAFFDIRECTORY-1056', name: 'StaffDirectory Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'STAFFDIRECTORY-1057', name: 'StaffDirectory Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'STAFFDIRECTORY-1058', name: 'StaffDirectory Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'STAFFDIRECTORY-1059', name: 'StaffDirectory Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'STAFFDIRECTORY-1060', name: 'StaffDirectory Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'STAFFDIRECTORY-1061', name: 'StaffDirectory Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'STAFFDIRECTORY-1062', name: 'StaffDirectory Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'STAFFDIRECTORY-1063', name: 'StaffDirectory Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'STAFFDIRECTORY-1064', name: 'StaffDirectory Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'STAFFDIRECTORY-1065', name: 'StaffDirectory Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'STAFFDIRECTORY-1066', name: 'StaffDirectory Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'STAFFDIRECTORY-1067', name: 'StaffDirectory Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'STAFFDIRECTORY-1068', name: 'StaffDirectory Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'STAFFDIRECTORY-1069', name: 'StaffDirectory Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'STAFFDIRECTORY-1070', name: 'StaffDirectory Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'STAFFDIRECTORY-1071', name: 'StaffDirectory Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'STAFFDIRECTORY-1072', name: 'StaffDirectory Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'STAFFDIRECTORY-1073', name: 'StaffDirectory Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'STAFFDIRECTORY-1074', name: 'StaffDirectory Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'STAFFDIRECTORY-1075', name: 'StaffDirectory Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'STAFFDIRECTORY-1076', name: 'StaffDirectory Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'STAFFDIRECTORY-1077', name: 'StaffDirectory Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'STAFFDIRECTORY-1078', name: 'StaffDirectory Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'STAFFDIRECTORY-1079', name: 'StaffDirectory Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'STAFFDIRECTORY-1080', name: 'StaffDirectory Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Faculty & Employee HR Directory</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Faculty & Employee HR Directory management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Faculty & Employee HR Directory Record</Button>
      </div>

      <Card title="Faculty & Employee HR Directory Records Registry">
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
