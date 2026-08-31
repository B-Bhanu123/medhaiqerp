import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const SystemSettings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'SYSTEMSETTINGS-1001', name: 'SystemSettings Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'SYSTEMSETTINGS-1002', name: 'SystemSettings Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'SYSTEMSETTINGS-1003', name: 'SystemSettings Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'SYSTEMSETTINGS-1004', name: 'SystemSettings Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'SYSTEMSETTINGS-1005', name: 'SystemSettings Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'SYSTEMSETTINGS-1006', name: 'SystemSettings Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'SYSTEMSETTINGS-1007', name: 'SystemSettings Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'SYSTEMSETTINGS-1008', name: 'SystemSettings Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'SYSTEMSETTINGS-1009', name: 'SystemSettings Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'SYSTEMSETTINGS-1010', name: 'SystemSettings Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'SYSTEMSETTINGS-1011', name: 'SystemSettings Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'SYSTEMSETTINGS-1012', name: 'SystemSettings Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'SYSTEMSETTINGS-1013', name: 'SystemSettings Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'SYSTEMSETTINGS-1014', name: 'SystemSettings Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'SYSTEMSETTINGS-1015', name: 'SystemSettings Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'SYSTEMSETTINGS-1016', name: 'SystemSettings Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'SYSTEMSETTINGS-1017', name: 'SystemSettings Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'SYSTEMSETTINGS-1018', name: 'SystemSettings Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'SYSTEMSETTINGS-1019', name: 'SystemSettings Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'SYSTEMSETTINGS-1020', name: 'SystemSettings Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'SYSTEMSETTINGS-1021', name: 'SystemSettings Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'SYSTEMSETTINGS-1022', name: 'SystemSettings Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'SYSTEMSETTINGS-1023', name: 'SystemSettings Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'SYSTEMSETTINGS-1024', name: 'SystemSettings Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'SYSTEMSETTINGS-1025', name: 'SystemSettings Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'SYSTEMSETTINGS-1026', name: 'SystemSettings Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'SYSTEMSETTINGS-1027', name: 'SystemSettings Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'SYSTEMSETTINGS-1028', name: 'SystemSettings Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'SYSTEMSETTINGS-1029', name: 'SystemSettings Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'SYSTEMSETTINGS-1030', name: 'SystemSettings Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'SYSTEMSETTINGS-1031', name: 'SystemSettings Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'SYSTEMSETTINGS-1032', name: 'SystemSettings Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'SYSTEMSETTINGS-1033', name: 'SystemSettings Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'SYSTEMSETTINGS-1034', name: 'SystemSettings Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'SYSTEMSETTINGS-1035', name: 'SystemSettings Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'SYSTEMSETTINGS-1036', name: 'SystemSettings Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'SYSTEMSETTINGS-1037', name: 'SystemSettings Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'SYSTEMSETTINGS-1038', name: 'SystemSettings Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'SYSTEMSETTINGS-1039', name: 'SystemSettings Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'SYSTEMSETTINGS-1040', name: 'SystemSettings Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'SYSTEMSETTINGS-1041', name: 'SystemSettings Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'SYSTEMSETTINGS-1042', name: 'SystemSettings Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'SYSTEMSETTINGS-1043', name: 'SystemSettings Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'SYSTEMSETTINGS-1044', name: 'SystemSettings Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'SYSTEMSETTINGS-1045', name: 'SystemSettings Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'SYSTEMSETTINGS-1046', name: 'SystemSettings Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'SYSTEMSETTINGS-1047', name: 'SystemSettings Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'SYSTEMSETTINGS-1048', name: 'SystemSettings Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'SYSTEMSETTINGS-1049', name: 'SystemSettings Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'SYSTEMSETTINGS-1050', name: 'SystemSettings Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'SYSTEMSETTINGS-1051', name: 'SystemSettings Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'SYSTEMSETTINGS-1052', name: 'SystemSettings Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'SYSTEMSETTINGS-1053', name: 'SystemSettings Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'SYSTEMSETTINGS-1054', name: 'SystemSettings Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'SYSTEMSETTINGS-1055', name: 'SystemSettings Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'SYSTEMSETTINGS-1056', name: 'SystemSettings Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'SYSTEMSETTINGS-1057', name: 'SystemSettings Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'SYSTEMSETTINGS-1058', name: 'SystemSettings Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'SYSTEMSETTINGS-1059', name: 'SystemSettings Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'SYSTEMSETTINGS-1060', name: 'SystemSettings Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'SYSTEMSETTINGS-1061', name: 'SystemSettings Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'SYSTEMSETTINGS-1062', name: 'SystemSettings Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'SYSTEMSETTINGS-1063', name: 'SystemSettings Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'SYSTEMSETTINGS-1064', name: 'SystemSettings Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'SYSTEMSETTINGS-1065', name: 'SystemSettings Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'SYSTEMSETTINGS-1066', name: 'SystemSettings Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'SYSTEMSETTINGS-1067', name: 'SystemSettings Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'SYSTEMSETTINGS-1068', name: 'SystemSettings Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'SYSTEMSETTINGS-1069', name: 'SystemSettings Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'SYSTEMSETTINGS-1070', name: 'SystemSettings Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'SYSTEMSETTINGS-1071', name: 'SystemSettings Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'SYSTEMSETTINGS-1072', name: 'SystemSettings Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'SYSTEMSETTINGS-1073', name: 'SystemSettings Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'SYSTEMSETTINGS-1074', name: 'SystemSettings Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'SYSTEMSETTINGS-1075', name: 'SystemSettings Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'SYSTEMSETTINGS-1076', name: 'SystemSettings Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'SYSTEMSETTINGS-1077', name: 'SystemSettings Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'SYSTEMSETTINGS-1078', name: 'SystemSettings Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'SYSTEMSETTINGS-1079', name: 'SystemSettings Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'SYSTEMSETTINGS-1080', name: 'SystemSettings Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Role-Based Access & Security Configuration</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Role-Based Access & Security Configuration management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Role-Based Access & Security Configuration Record</Button>
      </div>

      <Card title="Role-Based Access & Security Configuration Records Registry">
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
