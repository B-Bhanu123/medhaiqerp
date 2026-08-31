import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const StudentProfile: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'STUDENTPROFILE-1001', name: 'StudentProfile Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'STUDENTPROFILE-1002', name: 'StudentProfile Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'STUDENTPROFILE-1003', name: 'StudentProfile Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'STUDENTPROFILE-1004', name: 'StudentProfile Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'STUDENTPROFILE-1005', name: 'StudentProfile Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'STUDENTPROFILE-1006', name: 'StudentProfile Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'STUDENTPROFILE-1007', name: 'StudentProfile Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'STUDENTPROFILE-1008', name: 'StudentProfile Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'STUDENTPROFILE-1009', name: 'StudentProfile Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'STUDENTPROFILE-1010', name: 'StudentProfile Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'STUDENTPROFILE-1011', name: 'StudentProfile Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'STUDENTPROFILE-1012', name: 'StudentProfile Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'STUDENTPROFILE-1013', name: 'StudentProfile Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'STUDENTPROFILE-1014', name: 'StudentProfile Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'STUDENTPROFILE-1015', name: 'StudentProfile Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'STUDENTPROFILE-1016', name: 'StudentProfile Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'STUDENTPROFILE-1017', name: 'StudentProfile Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'STUDENTPROFILE-1018', name: 'StudentProfile Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'STUDENTPROFILE-1019', name: 'StudentProfile Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'STUDENTPROFILE-1020', name: 'StudentProfile Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'STUDENTPROFILE-1021', name: 'StudentProfile Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'STUDENTPROFILE-1022', name: 'StudentProfile Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'STUDENTPROFILE-1023', name: 'StudentProfile Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'STUDENTPROFILE-1024', name: 'StudentProfile Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'STUDENTPROFILE-1025', name: 'StudentProfile Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'STUDENTPROFILE-1026', name: 'StudentProfile Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'STUDENTPROFILE-1027', name: 'StudentProfile Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'STUDENTPROFILE-1028', name: 'StudentProfile Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'STUDENTPROFILE-1029', name: 'StudentProfile Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'STUDENTPROFILE-1030', name: 'StudentProfile Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'STUDENTPROFILE-1031', name: 'StudentProfile Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'STUDENTPROFILE-1032', name: 'StudentProfile Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'STUDENTPROFILE-1033', name: 'StudentProfile Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'STUDENTPROFILE-1034', name: 'StudentProfile Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'STUDENTPROFILE-1035', name: 'StudentProfile Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'STUDENTPROFILE-1036', name: 'StudentProfile Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'STUDENTPROFILE-1037', name: 'StudentProfile Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'STUDENTPROFILE-1038', name: 'StudentProfile Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'STUDENTPROFILE-1039', name: 'StudentProfile Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'STUDENTPROFILE-1040', name: 'StudentProfile Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'STUDENTPROFILE-1041', name: 'StudentProfile Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'STUDENTPROFILE-1042', name: 'StudentProfile Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'STUDENTPROFILE-1043', name: 'StudentProfile Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'STUDENTPROFILE-1044', name: 'StudentProfile Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'STUDENTPROFILE-1045', name: 'StudentProfile Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'STUDENTPROFILE-1046', name: 'StudentProfile Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'STUDENTPROFILE-1047', name: 'StudentProfile Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'STUDENTPROFILE-1048', name: 'StudentProfile Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'STUDENTPROFILE-1049', name: 'StudentProfile Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'STUDENTPROFILE-1050', name: 'StudentProfile Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'STUDENTPROFILE-1051', name: 'StudentProfile Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'STUDENTPROFILE-1052', name: 'StudentProfile Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'STUDENTPROFILE-1053', name: 'StudentProfile Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'STUDENTPROFILE-1054', name: 'StudentProfile Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'STUDENTPROFILE-1055', name: 'StudentProfile Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'STUDENTPROFILE-1056', name: 'StudentProfile Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'STUDENTPROFILE-1057', name: 'StudentProfile Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'STUDENTPROFILE-1058', name: 'StudentProfile Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'STUDENTPROFILE-1059', name: 'StudentProfile Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'STUDENTPROFILE-1060', name: 'StudentProfile Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'STUDENTPROFILE-1061', name: 'StudentProfile Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'STUDENTPROFILE-1062', name: 'StudentProfile Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'STUDENTPROFILE-1063', name: 'StudentProfile Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'STUDENTPROFILE-1064', name: 'StudentProfile Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'STUDENTPROFILE-1065', name: 'StudentProfile Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'STUDENTPROFILE-1066', name: 'StudentProfile Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'STUDENTPROFILE-1067', name: 'StudentProfile Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'STUDENTPROFILE-1068', name: 'StudentProfile Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'STUDENTPROFILE-1069', name: 'StudentProfile Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'STUDENTPROFILE-1070', name: 'StudentProfile Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'STUDENTPROFILE-1071', name: 'StudentProfile Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'STUDENTPROFILE-1072', name: 'StudentProfile Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'STUDENTPROFILE-1073', name: 'StudentProfile Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'STUDENTPROFILE-1074', name: 'StudentProfile Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'STUDENTPROFILE-1075', name: 'StudentProfile Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'STUDENTPROFILE-1076', name: 'StudentProfile Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'STUDENTPROFILE-1077', name: 'StudentProfile Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'STUDENTPROFILE-1078', name: 'StudentProfile Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'STUDENTPROFILE-1079', name: 'StudentProfile Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'STUDENTPROFILE-1080', name: 'StudentProfile Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Student 360 Degree Profile & Transcript</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Student 360 Degree Profile & Transcript management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Student 360 Degree Profile & Transcript Record</Button>
      </div>

      <Card title="Student 360 Degree Profile & Transcript Records Registry">
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
