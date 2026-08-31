import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const HostelManager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'HOSTELMANAGER-1001', name: 'HostelManager Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'HOSTELMANAGER-1002', name: 'HostelManager Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'HOSTELMANAGER-1003', name: 'HostelManager Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'HOSTELMANAGER-1004', name: 'HostelManager Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'HOSTELMANAGER-1005', name: 'HostelManager Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'HOSTELMANAGER-1006', name: 'HostelManager Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'HOSTELMANAGER-1007', name: 'HostelManager Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'HOSTELMANAGER-1008', name: 'HostelManager Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'HOSTELMANAGER-1009', name: 'HostelManager Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'HOSTELMANAGER-1010', name: 'HostelManager Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'HOSTELMANAGER-1011', name: 'HostelManager Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'HOSTELMANAGER-1012', name: 'HostelManager Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'HOSTELMANAGER-1013', name: 'HostelManager Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'HOSTELMANAGER-1014', name: 'HostelManager Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'HOSTELMANAGER-1015', name: 'HostelManager Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'HOSTELMANAGER-1016', name: 'HostelManager Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'HOSTELMANAGER-1017', name: 'HostelManager Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'HOSTELMANAGER-1018', name: 'HostelManager Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'HOSTELMANAGER-1019', name: 'HostelManager Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'HOSTELMANAGER-1020', name: 'HostelManager Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'HOSTELMANAGER-1021', name: 'HostelManager Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'HOSTELMANAGER-1022', name: 'HostelManager Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'HOSTELMANAGER-1023', name: 'HostelManager Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'HOSTELMANAGER-1024', name: 'HostelManager Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'HOSTELMANAGER-1025', name: 'HostelManager Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'HOSTELMANAGER-1026', name: 'HostelManager Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'HOSTELMANAGER-1027', name: 'HostelManager Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'HOSTELMANAGER-1028', name: 'HostelManager Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'HOSTELMANAGER-1029', name: 'HostelManager Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'HOSTELMANAGER-1030', name: 'HostelManager Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'HOSTELMANAGER-1031', name: 'HostelManager Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'HOSTELMANAGER-1032', name: 'HostelManager Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'HOSTELMANAGER-1033', name: 'HostelManager Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'HOSTELMANAGER-1034', name: 'HostelManager Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'HOSTELMANAGER-1035', name: 'HostelManager Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'HOSTELMANAGER-1036', name: 'HostelManager Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'HOSTELMANAGER-1037', name: 'HostelManager Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'HOSTELMANAGER-1038', name: 'HostelManager Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'HOSTELMANAGER-1039', name: 'HostelManager Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'HOSTELMANAGER-1040', name: 'HostelManager Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'HOSTELMANAGER-1041', name: 'HostelManager Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'HOSTELMANAGER-1042', name: 'HostelManager Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'HOSTELMANAGER-1043', name: 'HostelManager Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'HOSTELMANAGER-1044', name: 'HostelManager Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'HOSTELMANAGER-1045', name: 'HostelManager Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'HOSTELMANAGER-1046', name: 'HostelManager Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'HOSTELMANAGER-1047', name: 'HostelManager Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'HOSTELMANAGER-1048', name: 'HostelManager Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'HOSTELMANAGER-1049', name: 'HostelManager Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'HOSTELMANAGER-1050', name: 'HostelManager Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'HOSTELMANAGER-1051', name: 'HostelManager Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'HOSTELMANAGER-1052', name: 'HostelManager Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'HOSTELMANAGER-1053', name: 'HostelManager Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'HOSTELMANAGER-1054', name: 'HostelManager Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'HOSTELMANAGER-1055', name: 'HostelManager Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'HOSTELMANAGER-1056', name: 'HostelManager Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'HOSTELMANAGER-1057', name: 'HostelManager Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'HOSTELMANAGER-1058', name: 'HostelManager Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'HOSTELMANAGER-1059', name: 'HostelManager Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'HOSTELMANAGER-1060', name: 'HostelManager Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'HOSTELMANAGER-1061', name: 'HostelManager Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'HOSTELMANAGER-1062', name: 'HostelManager Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'HOSTELMANAGER-1063', name: 'HostelManager Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'HOSTELMANAGER-1064', name: 'HostelManager Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'HOSTELMANAGER-1065', name: 'HostelManager Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'HOSTELMANAGER-1066', name: 'HostelManager Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'HOSTELMANAGER-1067', name: 'HostelManager Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'HOSTELMANAGER-1068', name: 'HostelManager Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'HOSTELMANAGER-1069', name: 'HostelManager Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'HOSTELMANAGER-1070', name: 'HostelManager Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'HOSTELMANAGER-1071', name: 'HostelManager Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'HOSTELMANAGER-1072', name: 'HostelManager Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'HOSTELMANAGER-1073', name: 'HostelManager Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'HOSTELMANAGER-1074', name: 'HostelManager Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'HOSTELMANAGER-1075', name: 'HostelManager Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'HOSTELMANAGER-1076', name: 'HostelManager Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'HOSTELMANAGER-1077', name: 'HostelManager Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'HOSTELMANAGER-1078', name: 'HostelManager Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'HOSTELMANAGER-1079', name: 'HostelManager Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'HOSTELMANAGER-1080', name: 'HostelManager Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Hostel Room Allocation & Occupancy</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Hostel Room Allocation & Occupancy management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Hostel Room Allocation & Occupancy Record</Button>
      </div>

      <Card title="Hostel Room Allocation & Occupancy Records Registry">
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
