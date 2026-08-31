import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const Gradebook: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'GRADEBOOK-1001', name: 'Gradebook Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'GRADEBOOK-1002', name: 'Gradebook Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'GRADEBOOK-1003', name: 'Gradebook Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'GRADEBOOK-1004', name: 'Gradebook Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'GRADEBOOK-1005', name: 'Gradebook Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'GRADEBOOK-1006', name: 'Gradebook Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'GRADEBOOK-1007', name: 'Gradebook Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'GRADEBOOK-1008', name: 'Gradebook Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'GRADEBOOK-1009', name: 'Gradebook Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'GRADEBOOK-1010', name: 'Gradebook Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'GRADEBOOK-1011', name: 'Gradebook Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'GRADEBOOK-1012', name: 'Gradebook Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'GRADEBOOK-1013', name: 'Gradebook Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'GRADEBOOK-1014', name: 'Gradebook Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'GRADEBOOK-1015', name: 'Gradebook Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'GRADEBOOK-1016', name: 'Gradebook Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'GRADEBOOK-1017', name: 'Gradebook Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'GRADEBOOK-1018', name: 'Gradebook Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'GRADEBOOK-1019', name: 'Gradebook Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'GRADEBOOK-1020', name: 'Gradebook Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'GRADEBOOK-1021', name: 'Gradebook Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'GRADEBOOK-1022', name: 'Gradebook Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'GRADEBOOK-1023', name: 'Gradebook Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'GRADEBOOK-1024', name: 'Gradebook Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'GRADEBOOK-1025', name: 'Gradebook Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'GRADEBOOK-1026', name: 'Gradebook Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'GRADEBOOK-1027', name: 'Gradebook Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'GRADEBOOK-1028', name: 'Gradebook Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'GRADEBOOK-1029', name: 'Gradebook Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'GRADEBOOK-1030', name: 'Gradebook Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'GRADEBOOK-1031', name: 'Gradebook Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'GRADEBOOK-1032', name: 'Gradebook Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'GRADEBOOK-1033', name: 'Gradebook Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'GRADEBOOK-1034', name: 'Gradebook Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'GRADEBOOK-1035', name: 'Gradebook Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'GRADEBOOK-1036', name: 'Gradebook Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'GRADEBOOK-1037', name: 'Gradebook Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'GRADEBOOK-1038', name: 'Gradebook Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'GRADEBOOK-1039', name: 'Gradebook Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'GRADEBOOK-1040', name: 'Gradebook Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'GRADEBOOK-1041', name: 'Gradebook Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'GRADEBOOK-1042', name: 'Gradebook Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'GRADEBOOK-1043', name: 'Gradebook Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'GRADEBOOK-1044', name: 'Gradebook Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'GRADEBOOK-1045', name: 'Gradebook Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'GRADEBOOK-1046', name: 'Gradebook Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'GRADEBOOK-1047', name: 'Gradebook Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'GRADEBOOK-1048', name: 'Gradebook Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'GRADEBOOK-1049', name: 'Gradebook Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'GRADEBOOK-1050', name: 'Gradebook Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'GRADEBOOK-1051', name: 'Gradebook Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'GRADEBOOK-1052', name: 'Gradebook Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'GRADEBOOK-1053', name: 'Gradebook Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'GRADEBOOK-1054', name: 'Gradebook Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'GRADEBOOK-1055', name: 'Gradebook Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'GRADEBOOK-1056', name: 'Gradebook Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'GRADEBOOK-1057', name: 'Gradebook Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'GRADEBOOK-1058', name: 'Gradebook Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'GRADEBOOK-1059', name: 'Gradebook Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'GRADEBOOK-1060', name: 'Gradebook Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'GRADEBOOK-1061', name: 'Gradebook Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'GRADEBOOK-1062', name: 'Gradebook Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'GRADEBOOK-1063', name: 'Gradebook Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'GRADEBOOK-1064', name: 'Gradebook Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'GRADEBOOK-1065', name: 'Gradebook Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'GRADEBOOK-1066', name: 'Gradebook Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'GRADEBOOK-1067', name: 'Gradebook Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'GRADEBOOK-1068', name: 'Gradebook Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'GRADEBOOK-1069', name: 'Gradebook Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'GRADEBOOK-1070', name: 'Gradebook Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'GRADEBOOK-1071', name: 'Gradebook Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'GRADEBOOK-1072', name: 'Gradebook Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'GRADEBOOK-1073', name: 'Gradebook Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'GRADEBOOK-1074', name: 'Gradebook Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'GRADEBOOK-1075', name: 'Gradebook Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'GRADEBOOK-1076', name: 'Gradebook Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'GRADEBOOK-1077', name: 'Gradebook Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'GRADEBOOK-1078', name: 'Gradebook Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'GRADEBOOK-1079', name: 'Gradebook Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'GRADEBOOK-1080', name: 'Gradebook Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Academic Gradebook & GPA Calculator</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Academic Gradebook & GPA Calculator management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Academic Gradebook & GPA Calculator Record</Button>
      </div>

      <Card title="Academic Gradebook & GPA Calculator Records Registry">
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
