import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const TransportManager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'TRANSPORTMANAGER-1001', name: 'TransportManager Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'TRANSPORTMANAGER-1002', name: 'TransportManager Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'TRANSPORTMANAGER-1003', name: 'TransportManager Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'TRANSPORTMANAGER-1004', name: 'TransportManager Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'TRANSPORTMANAGER-1005', name: 'TransportManager Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'TRANSPORTMANAGER-1006', name: 'TransportManager Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'TRANSPORTMANAGER-1007', name: 'TransportManager Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'TRANSPORTMANAGER-1008', name: 'TransportManager Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'TRANSPORTMANAGER-1009', name: 'TransportManager Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'TRANSPORTMANAGER-1010', name: 'TransportManager Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'TRANSPORTMANAGER-1011', name: 'TransportManager Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'TRANSPORTMANAGER-1012', name: 'TransportManager Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'TRANSPORTMANAGER-1013', name: 'TransportManager Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'TRANSPORTMANAGER-1014', name: 'TransportManager Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'TRANSPORTMANAGER-1015', name: 'TransportManager Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'TRANSPORTMANAGER-1016', name: 'TransportManager Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'TRANSPORTMANAGER-1017', name: 'TransportManager Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'TRANSPORTMANAGER-1018', name: 'TransportManager Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'TRANSPORTMANAGER-1019', name: 'TransportManager Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'TRANSPORTMANAGER-1020', name: 'TransportManager Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'TRANSPORTMANAGER-1021', name: 'TransportManager Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'TRANSPORTMANAGER-1022', name: 'TransportManager Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'TRANSPORTMANAGER-1023', name: 'TransportManager Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'TRANSPORTMANAGER-1024', name: 'TransportManager Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'TRANSPORTMANAGER-1025', name: 'TransportManager Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'TRANSPORTMANAGER-1026', name: 'TransportManager Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'TRANSPORTMANAGER-1027', name: 'TransportManager Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'TRANSPORTMANAGER-1028', name: 'TransportManager Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'TRANSPORTMANAGER-1029', name: 'TransportManager Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'TRANSPORTMANAGER-1030', name: 'TransportManager Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'TRANSPORTMANAGER-1031', name: 'TransportManager Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'TRANSPORTMANAGER-1032', name: 'TransportManager Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'TRANSPORTMANAGER-1033', name: 'TransportManager Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'TRANSPORTMANAGER-1034', name: 'TransportManager Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'TRANSPORTMANAGER-1035', name: 'TransportManager Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'TRANSPORTMANAGER-1036', name: 'TransportManager Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'TRANSPORTMANAGER-1037', name: 'TransportManager Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'TRANSPORTMANAGER-1038', name: 'TransportManager Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'TRANSPORTMANAGER-1039', name: 'TransportManager Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'TRANSPORTMANAGER-1040', name: 'TransportManager Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'TRANSPORTMANAGER-1041', name: 'TransportManager Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'TRANSPORTMANAGER-1042', name: 'TransportManager Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'TRANSPORTMANAGER-1043', name: 'TransportManager Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'TRANSPORTMANAGER-1044', name: 'TransportManager Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'TRANSPORTMANAGER-1045', name: 'TransportManager Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'TRANSPORTMANAGER-1046', name: 'TransportManager Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'TRANSPORTMANAGER-1047', name: 'TransportManager Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'TRANSPORTMANAGER-1048', name: 'TransportManager Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'TRANSPORTMANAGER-1049', name: 'TransportManager Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'TRANSPORTMANAGER-1050', name: 'TransportManager Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'TRANSPORTMANAGER-1051', name: 'TransportManager Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'TRANSPORTMANAGER-1052', name: 'TransportManager Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'TRANSPORTMANAGER-1053', name: 'TransportManager Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'TRANSPORTMANAGER-1054', name: 'TransportManager Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'TRANSPORTMANAGER-1055', name: 'TransportManager Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'TRANSPORTMANAGER-1056', name: 'TransportManager Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'TRANSPORTMANAGER-1057', name: 'TransportManager Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'TRANSPORTMANAGER-1058', name: 'TransportManager Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'TRANSPORTMANAGER-1059', name: 'TransportManager Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'TRANSPORTMANAGER-1060', name: 'TransportManager Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'TRANSPORTMANAGER-1061', name: 'TransportManager Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'TRANSPORTMANAGER-1062', name: 'TransportManager Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'TRANSPORTMANAGER-1063', name: 'TransportManager Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'TRANSPORTMANAGER-1064', name: 'TransportManager Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'TRANSPORTMANAGER-1065', name: 'TransportManager Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'TRANSPORTMANAGER-1066', name: 'TransportManager Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'TRANSPORTMANAGER-1067', name: 'TransportManager Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'TRANSPORTMANAGER-1068', name: 'TransportManager Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'TRANSPORTMANAGER-1069', name: 'TransportManager Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'TRANSPORTMANAGER-1070', name: 'TransportManager Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'TRANSPORTMANAGER-1071', name: 'TransportManager Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'TRANSPORTMANAGER-1072', name: 'TransportManager Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'TRANSPORTMANAGER-1073', name: 'TransportManager Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'TRANSPORTMANAGER-1074', name: 'TransportManager Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'TRANSPORTMANAGER-1075', name: 'TransportManager Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'TRANSPORTMANAGER-1076', name: 'TransportManager Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'TRANSPORTMANAGER-1077', name: 'TransportManager Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'TRANSPORTMANAGER-1078', name: 'TransportManager Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'TRANSPORTMANAGER-1079', name: 'TransportManager Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'TRANSPORTMANAGER-1080', name: 'TransportManager Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Transport Routes & Fleet Vehicle Tracker</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Transport Routes & Fleet Vehicle Tracker management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Transport Routes & Fleet Vehicle Tracker Record</Button>
      </div>

      <Card title="Transport Routes & Fleet Vehicle Tracker Records Registry">
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
