import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const CirculationDesk: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'CIRCULATIONDESK-1001', name: 'CirculationDesk Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'CIRCULATIONDESK-1002', name: 'CirculationDesk Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'CIRCULATIONDESK-1003', name: 'CirculationDesk Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'CIRCULATIONDESK-1004', name: 'CirculationDesk Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'CIRCULATIONDESK-1005', name: 'CirculationDesk Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'CIRCULATIONDESK-1006', name: 'CirculationDesk Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'CIRCULATIONDESK-1007', name: 'CirculationDesk Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'CIRCULATIONDESK-1008', name: 'CirculationDesk Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'CIRCULATIONDESK-1009', name: 'CirculationDesk Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'CIRCULATIONDESK-1010', name: 'CirculationDesk Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'CIRCULATIONDESK-1011', name: 'CirculationDesk Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'CIRCULATIONDESK-1012', name: 'CirculationDesk Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'CIRCULATIONDESK-1013', name: 'CirculationDesk Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'CIRCULATIONDESK-1014', name: 'CirculationDesk Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'CIRCULATIONDESK-1015', name: 'CirculationDesk Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'CIRCULATIONDESK-1016', name: 'CirculationDesk Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'CIRCULATIONDESK-1017', name: 'CirculationDesk Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'CIRCULATIONDESK-1018', name: 'CirculationDesk Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'CIRCULATIONDESK-1019', name: 'CirculationDesk Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'CIRCULATIONDESK-1020', name: 'CirculationDesk Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'CIRCULATIONDESK-1021', name: 'CirculationDesk Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'CIRCULATIONDESK-1022', name: 'CirculationDesk Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'CIRCULATIONDESK-1023', name: 'CirculationDesk Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'CIRCULATIONDESK-1024', name: 'CirculationDesk Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'CIRCULATIONDESK-1025', name: 'CirculationDesk Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'CIRCULATIONDESK-1026', name: 'CirculationDesk Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'CIRCULATIONDESK-1027', name: 'CirculationDesk Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'CIRCULATIONDESK-1028', name: 'CirculationDesk Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'CIRCULATIONDESK-1029', name: 'CirculationDesk Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'CIRCULATIONDESK-1030', name: 'CirculationDesk Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'CIRCULATIONDESK-1031', name: 'CirculationDesk Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'CIRCULATIONDESK-1032', name: 'CirculationDesk Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'CIRCULATIONDESK-1033', name: 'CirculationDesk Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'CIRCULATIONDESK-1034', name: 'CirculationDesk Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'CIRCULATIONDESK-1035', name: 'CirculationDesk Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'CIRCULATIONDESK-1036', name: 'CirculationDesk Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'CIRCULATIONDESK-1037', name: 'CirculationDesk Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'CIRCULATIONDESK-1038', name: 'CirculationDesk Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'CIRCULATIONDESK-1039', name: 'CirculationDesk Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'CIRCULATIONDESK-1040', name: 'CirculationDesk Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'CIRCULATIONDESK-1041', name: 'CirculationDesk Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'CIRCULATIONDESK-1042', name: 'CirculationDesk Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'CIRCULATIONDESK-1043', name: 'CirculationDesk Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'CIRCULATIONDESK-1044', name: 'CirculationDesk Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'CIRCULATIONDESK-1045', name: 'CirculationDesk Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'CIRCULATIONDESK-1046', name: 'CirculationDesk Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'CIRCULATIONDESK-1047', name: 'CirculationDesk Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'CIRCULATIONDESK-1048', name: 'CirculationDesk Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'CIRCULATIONDESK-1049', name: 'CirculationDesk Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'CIRCULATIONDESK-1050', name: 'CirculationDesk Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'CIRCULATIONDESK-1051', name: 'CirculationDesk Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'CIRCULATIONDESK-1052', name: 'CirculationDesk Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'CIRCULATIONDESK-1053', name: 'CirculationDesk Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'CIRCULATIONDESK-1054', name: 'CirculationDesk Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'CIRCULATIONDESK-1055', name: 'CirculationDesk Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'CIRCULATIONDESK-1056', name: 'CirculationDesk Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'CIRCULATIONDESK-1057', name: 'CirculationDesk Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'CIRCULATIONDESK-1058', name: 'CirculationDesk Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'CIRCULATIONDESK-1059', name: 'CirculationDesk Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'CIRCULATIONDESK-1060', name: 'CirculationDesk Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'CIRCULATIONDESK-1061', name: 'CirculationDesk Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'CIRCULATIONDESK-1062', name: 'CirculationDesk Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'CIRCULATIONDESK-1063', name: 'CirculationDesk Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'CIRCULATIONDESK-1064', name: 'CirculationDesk Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'CIRCULATIONDESK-1065', name: 'CirculationDesk Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'CIRCULATIONDESK-1066', name: 'CirculationDesk Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'CIRCULATIONDESK-1067', name: 'CirculationDesk Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'CIRCULATIONDESK-1068', name: 'CirculationDesk Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'CIRCULATIONDESK-1069', name: 'CirculationDesk Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'CIRCULATIONDESK-1070', name: 'CirculationDesk Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'CIRCULATIONDESK-1071', name: 'CirculationDesk Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'CIRCULATIONDESK-1072', name: 'CirculationDesk Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'CIRCULATIONDESK-1073', name: 'CirculationDesk Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'CIRCULATIONDESK-1074', name: 'CirculationDesk Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'CIRCULATIONDESK-1075', name: 'CirculationDesk Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'CIRCULATIONDESK-1076', name: 'CirculationDesk Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'CIRCULATIONDESK-1077', name: 'CirculationDesk Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'CIRCULATIONDESK-1078', name: 'CirculationDesk Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'CIRCULATIONDESK-1079', name: 'CirculationDesk Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'CIRCULATIONDESK-1080', name: 'CirculationDesk Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Book Issue, Return & Fine Desk</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Book Issue, Return & Fine Desk management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Book Issue, Return & Fine Desk Record</Button>
      </div>

      <Card title="Book Issue, Return & Fine Desk Records Registry">
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
