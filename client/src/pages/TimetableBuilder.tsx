import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const TimetableBuilder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'TIMETABLEBUILDER-1001', name: 'TimetableBuilder Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'TIMETABLEBUILDER-1002', name: 'TimetableBuilder Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'TIMETABLEBUILDER-1003', name: 'TimetableBuilder Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'TIMETABLEBUILDER-1004', name: 'TimetableBuilder Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'TIMETABLEBUILDER-1005', name: 'TimetableBuilder Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'TIMETABLEBUILDER-1006', name: 'TimetableBuilder Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'TIMETABLEBUILDER-1007', name: 'TimetableBuilder Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'TIMETABLEBUILDER-1008', name: 'TimetableBuilder Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'TIMETABLEBUILDER-1009', name: 'TimetableBuilder Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'TIMETABLEBUILDER-1010', name: 'TimetableBuilder Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'TIMETABLEBUILDER-1011', name: 'TimetableBuilder Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'TIMETABLEBUILDER-1012', name: 'TimetableBuilder Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'TIMETABLEBUILDER-1013', name: 'TimetableBuilder Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'TIMETABLEBUILDER-1014', name: 'TimetableBuilder Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'TIMETABLEBUILDER-1015', name: 'TimetableBuilder Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'TIMETABLEBUILDER-1016', name: 'TimetableBuilder Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'TIMETABLEBUILDER-1017', name: 'TimetableBuilder Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'TIMETABLEBUILDER-1018', name: 'TimetableBuilder Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'TIMETABLEBUILDER-1019', name: 'TimetableBuilder Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'TIMETABLEBUILDER-1020', name: 'TimetableBuilder Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'TIMETABLEBUILDER-1021', name: 'TimetableBuilder Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'TIMETABLEBUILDER-1022', name: 'TimetableBuilder Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'TIMETABLEBUILDER-1023', name: 'TimetableBuilder Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'TIMETABLEBUILDER-1024', name: 'TimetableBuilder Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'TIMETABLEBUILDER-1025', name: 'TimetableBuilder Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'TIMETABLEBUILDER-1026', name: 'TimetableBuilder Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'TIMETABLEBUILDER-1027', name: 'TimetableBuilder Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'TIMETABLEBUILDER-1028', name: 'TimetableBuilder Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'TIMETABLEBUILDER-1029', name: 'TimetableBuilder Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'TIMETABLEBUILDER-1030', name: 'TimetableBuilder Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'TIMETABLEBUILDER-1031', name: 'TimetableBuilder Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'TIMETABLEBUILDER-1032', name: 'TimetableBuilder Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'TIMETABLEBUILDER-1033', name: 'TimetableBuilder Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'TIMETABLEBUILDER-1034', name: 'TimetableBuilder Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'TIMETABLEBUILDER-1035', name: 'TimetableBuilder Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'TIMETABLEBUILDER-1036', name: 'TimetableBuilder Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'TIMETABLEBUILDER-1037', name: 'TimetableBuilder Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'TIMETABLEBUILDER-1038', name: 'TimetableBuilder Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'TIMETABLEBUILDER-1039', name: 'TimetableBuilder Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'TIMETABLEBUILDER-1040', name: 'TimetableBuilder Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'TIMETABLEBUILDER-1041', name: 'TimetableBuilder Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'TIMETABLEBUILDER-1042', name: 'TimetableBuilder Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'TIMETABLEBUILDER-1043', name: 'TimetableBuilder Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'TIMETABLEBUILDER-1044', name: 'TimetableBuilder Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'TIMETABLEBUILDER-1045', name: 'TimetableBuilder Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'TIMETABLEBUILDER-1046', name: 'TimetableBuilder Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'TIMETABLEBUILDER-1047', name: 'TimetableBuilder Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'TIMETABLEBUILDER-1048', name: 'TimetableBuilder Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'TIMETABLEBUILDER-1049', name: 'TimetableBuilder Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'TIMETABLEBUILDER-1050', name: 'TimetableBuilder Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'TIMETABLEBUILDER-1051', name: 'TimetableBuilder Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'TIMETABLEBUILDER-1052', name: 'TimetableBuilder Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'TIMETABLEBUILDER-1053', name: 'TimetableBuilder Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'TIMETABLEBUILDER-1054', name: 'TimetableBuilder Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'TIMETABLEBUILDER-1055', name: 'TimetableBuilder Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'TIMETABLEBUILDER-1056', name: 'TimetableBuilder Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'TIMETABLEBUILDER-1057', name: 'TimetableBuilder Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'TIMETABLEBUILDER-1058', name: 'TimetableBuilder Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'TIMETABLEBUILDER-1059', name: 'TimetableBuilder Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'TIMETABLEBUILDER-1060', name: 'TimetableBuilder Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'TIMETABLEBUILDER-1061', name: 'TimetableBuilder Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'TIMETABLEBUILDER-1062', name: 'TimetableBuilder Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'TIMETABLEBUILDER-1063', name: 'TimetableBuilder Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'TIMETABLEBUILDER-1064', name: 'TimetableBuilder Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'TIMETABLEBUILDER-1065', name: 'TimetableBuilder Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'TIMETABLEBUILDER-1066', name: 'TimetableBuilder Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'TIMETABLEBUILDER-1067', name: 'TimetableBuilder Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'TIMETABLEBUILDER-1068', name: 'TimetableBuilder Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'TIMETABLEBUILDER-1069', name: 'TimetableBuilder Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'TIMETABLEBUILDER-1070', name: 'TimetableBuilder Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'TIMETABLEBUILDER-1071', name: 'TimetableBuilder Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'TIMETABLEBUILDER-1072', name: 'TimetableBuilder Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'TIMETABLEBUILDER-1073', name: 'TimetableBuilder Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'TIMETABLEBUILDER-1074', name: 'TimetableBuilder Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'TIMETABLEBUILDER-1075', name: 'TimetableBuilder Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'TIMETABLEBUILDER-1076', name: 'TimetableBuilder Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'TIMETABLEBUILDER-1077', name: 'TimetableBuilder Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'TIMETABLEBUILDER-1078', name: 'TimetableBuilder Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'TIMETABLEBUILDER-1079', name: 'TimetableBuilder Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'TIMETABLEBUILDER-1080', name: 'TimetableBuilder Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Algorithmic Class Schedule & Timetable</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Algorithmic Class Schedule & Timetable management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Algorithmic Class Schedule & Timetable Record</Button>
      </div>

      <Card title="Algorithmic Class Schedule & Timetable Records Registry">
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
