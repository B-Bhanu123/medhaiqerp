import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const LibraryCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'LIBRARYCATALOG-1001', name: 'LibraryCatalog Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'LIBRARYCATALOG-1002', name: 'LibraryCatalog Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'LIBRARYCATALOG-1003', name: 'LibraryCatalog Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'LIBRARYCATALOG-1004', name: 'LibraryCatalog Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'LIBRARYCATALOG-1005', name: 'LibraryCatalog Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'LIBRARYCATALOG-1006', name: 'LibraryCatalog Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'LIBRARYCATALOG-1007', name: 'LibraryCatalog Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'LIBRARYCATALOG-1008', name: 'LibraryCatalog Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'LIBRARYCATALOG-1009', name: 'LibraryCatalog Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'LIBRARYCATALOG-1010', name: 'LibraryCatalog Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'LIBRARYCATALOG-1011', name: 'LibraryCatalog Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'LIBRARYCATALOG-1012', name: 'LibraryCatalog Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'LIBRARYCATALOG-1013', name: 'LibraryCatalog Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'LIBRARYCATALOG-1014', name: 'LibraryCatalog Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'LIBRARYCATALOG-1015', name: 'LibraryCatalog Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'LIBRARYCATALOG-1016', name: 'LibraryCatalog Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'LIBRARYCATALOG-1017', name: 'LibraryCatalog Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'LIBRARYCATALOG-1018', name: 'LibraryCatalog Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'LIBRARYCATALOG-1019', name: 'LibraryCatalog Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'LIBRARYCATALOG-1020', name: 'LibraryCatalog Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'LIBRARYCATALOG-1021', name: 'LibraryCatalog Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'LIBRARYCATALOG-1022', name: 'LibraryCatalog Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'LIBRARYCATALOG-1023', name: 'LibraryCatalog Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'LIBRARYCATALOG-1024', name: 'LibraryCatalog Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'LIBRARYCATALOG-1025', name: 'LibraryCatalog Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'LIBRARYCATALOG-1026', name: 'LibraryCatalog Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'LIBRARYCATALOG-1027', name: 'LibraryCatalog Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'LIBRARYCATALOG-1028', name: 'LibraryCatalog Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'LIBRARYCATALOG-1029', name: 'LibraryCatalog Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'LIBRARYCATALOG-1030', name: 'LibraryCatalog Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'LIBRARYCATALOG-1031', name: 'LibraryCatalog Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'LIBRARYCATALOG-1032', name: 'LibraryCatalog Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'LIBRARYCATALOG-1033', name: 'LibraryCatalog Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'LIBRARYCATALOG-1034', name: 'LibraryCatalog Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'LIBRARYCATALOG-1035', name: 'LibraryCatalog Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'LIBRARYCATALOG-1036', name: 'LibraryCatalog Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'LIBRARYCATALOG-1037', name: 'LibraryCatalog Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'LIBRARYCATALOG-1038', name: 'LibraryCatalog Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'LIBRARYCATALOG-1039', name: 'LibraryCatalog Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'LIBRARYCATALOG-1040', name: 'LibraryCatalog Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'LIBRARYCATALOG-1041', name: 'LibraryCatalog Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'LIBRARYCATALOG-1042', name: 'LibraryCatalog Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'LIBRARYCATALOG-1043', name: 'LibraryCatalog Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'LIBRARYCATALOG-1044', name: 'LibraryCatalog Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'LIBRARYCATALOG-1045', name: 'LibraryCatalog Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'LIBRARYCATALOG-1046', name: 'LibraryCatalog Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'LIBRARYCATALOG-1047', name: 'LibraryCatalog Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'LIBRARYCATALOG-1048', name: 'LibraryCatalog Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'LIBRARYCATALOG-1049', name: 'LibraryCatalog Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'LIBRARYCATALOG-1050', name: 'LibraryCatalog Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'LIBRARYCATALOG-1051', name: 'LibraryCatalog Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'LIBRARYCATALOG-1052', name: 'LibraryCatalog Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'LIBRARYCATALOG-1053', name: 'LibraryCatalog Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'LIBRARYCATALOG-1054', name: 'LibraryCatalog Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'LIBRARYCATALOG-1055', name: 'LibraryCatalog Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'LIBRARYCATALOG-1056', name: 'LibraryCatalog Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'LIBRARYCATALOG-1057', name: 'LibraryCatalog Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'LIBRARYCATALOG-1058', name: 'LibraryCatalog Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'LIBRARYCATALOG-1059', name: 'LibraryCatalog Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'LIBRARYCATALOG-1060', name: 'LibraryCatalog Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'LIBRARYCATALOG-1061', name: 'LibraryCatalog Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'LIBRARYCATALOG-1062', name: 'LibraryCatalog Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'LIBRARYCATALOG-1063', name: 'LibraryCatalog Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'LIBRARYCATALOG-1064', name: 'LibraryCatalog Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'LIBRARYCATALOG-1065', name: 'LibraryCatalog Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'LIBRARYCATALOG-1066', name: 'LibraryCatalog Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'LIBRARYCATALOG-1067', name: 'LibraryCatalog Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'LIBRARYCATALOG-1068', name: 'LibraryCatalog Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'LIBRARYCATALOG-1069', name: 'LibraryCatalog Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'LIBRARYCATALOG-1070', name: 'LibraryCatalog Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'LIBRARYCATALOG-1071', name: 'LibraryCatalog Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'LIBRARYCATALOG-1072', name: 'LibraryCatalog Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'LIBRARYCATALOG-1073', name: 'LibraryCatalog Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'LIBRARYCATALOG-1074', name: 'LibraryCatalog Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'LIBRARYCATALOG-1075', name: 'LibraryCatalog Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'LIBRARYCATALOG-1076', name: 'LibraryCatalog Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'LIBRARYCATALOG-1077', name: 'LibraryCatalog Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'LIBRARYCATALOG-1078', name: 'LibraryCatalog Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'LIBRARYCATALOG-1079', name: 'LibraryCatalog Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'LIBRARYCATALOG-1080', name: 'LibraryCatalog Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>OPAC Library Catalog & Book Registry</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise OPAC Library Catalog & Book Registry management dashboard.</p>
        </div>
        <Button variant="primary">+ Create OPAC Library Catalog & Book Registry Record</Button>
      </div>

      <Card title="OPAC Library Catalog & Book Registry Records Registry">
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
