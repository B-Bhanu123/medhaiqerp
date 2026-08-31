import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const NoticeBoard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'NOTICEBOARD-1001', name: 'NoticeBoard Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'NOTICEBOARD-1002', name: 'NoticeBoard Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'NOTICEBOARD-1003', name: 'NoticeBoard Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'NOTICEBOARD-1004', name: 'NoticeBoard Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'NOTICEBOARD-1005', name: 'NoticeBoard Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'NOTICEBOARD-1006', name: 'NoticeBoard Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'NOTICEBOARD-1007', name: 'NoticeBoard Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'NOTICEBOARD-1008', name: 'NoticeBoard Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'NOTICEBOARD-1009', name: 'NoticeBoard Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'NOTICEBOARD-1010', name: 'NoticeBoard Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'NOTICEBOARD-1011', name: 'NoticeBoard Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'NOTICEBOARD-1012', name: 'NoticeBoard Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'NOTICEBOARD-1013', name: 'NoticeBoard Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'NOTICEBOARD-1014', name: 'NoticeBoard Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'NOTICEBOARD-1015', name: 'NoticeBoard Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'NOTICEBOARD-1016', name: 'NoticeBoard Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'NOTICEBOARD-1017', name: 'NoticeBoard Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'NOTICEBOARD-1018', name: 'NoticeBoard Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'NOTICEBOARD-1019', name: 'NoticeBoard Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'NOTICEBOARD-1020', name: 'NoticeBoard Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'NOTICEBOARD-1021', name: 'NoticeBoard Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'NOTICEBOARD-1022', name: 'NoticeBoard Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'NOTICEBOARD-1023', name: 'NoticeBoard Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'NOTICEBOARD-1024', name: 'NoticeBoard Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'NOTICEBOARD-1025', name: 'NoticeBoard Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'NOTICEBOARD-1026', name: 'NoticeBoard Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'NOTICEBOARD-1027', name: 'NoticeBoard Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'NOTICEBOARD-1028', name: 'NoticeBoard Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'NOTICEBOARD-1029', name: 'NoticeBoard Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'NOTICEBOARD-1030', name: 'NoticeBoard Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'NOTICEBOARD-1031', name: 'NoticeBoard Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'NOTICEBOARD-1032', name: 'NoticeBoard Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'NOTICEBOARD-1033', name: 'NoticeBoard Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'NOTICEBOARD-1034', name: 'NoticeBoard Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'NOTICEBOARD-1035', name: 'NoticeBoard Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'NOTICEBOARD-1036', name: 'NoticeBoard Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'NOTICEBOARD-1037', name: 'NoticeBoard Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'NOTICEBOARD-1038', name: 'NoticeBoard Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'NOTICEBOARD-1039', name: 'NoticeBoard Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'NOTICEBOARD-1040', name: 'NoticeBoard Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'NOTICEBOARD-1041', name: 'NoticeBoard Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'NOTICEBOARD-1042', name: 'NoticeBoard Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'NOTICEBOARD-1043', name: 'NoticeBoard Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'NOTICEBOARD-1044', name: 'NoticeBoard Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'NOTICEBOARD-1045', name: 'NoticeBoard Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'NOTICEBOARD-1046', name: 'NoticeBoard Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'NOTICEBOARD-1047', name: 'NoticeBoard Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'NOTICEBOARD-1048', name: 'NoticeBoard Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'NOTICEBOARD-1049', name: 'NoticeBoard Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'NOTICEBOARD-1050', name: 'NoticeBoard Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'NOTICEBOARD-1051', name: 'NoticeBoard Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'NOTICEBOARD-1052', name: 'NoticeBoard Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'NOTICEBOARD-1053', name: 'NoticeBoard Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'NOTICEBOARD-1054', name: 'NoticeBoard Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'NOTICEBOARD-1055', name: 'NoticeBoard Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'NOTICEBOARD-1056', name: 'NoticeBoard Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'NOTICEBOARD-1057', name: 'NoticeBoard Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'NOTICEBOARD-1058', name: 'NoticeBoard Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'NOTICEBOARD-1059', name: 'NoticeBoard Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'NOTICEBOARD-1060', name: 'NoticeBoard Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'NOTICEBOARD-1061', name: 'NoticeBoard Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'NOTICEBOARD-1062', name: 'NoticeBoard Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'NOTICEBOARD-1063', name: 'NoticeBoard Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'NOTICEBOARD-1064', name: 'NoticeBoard Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'NOTICEBOARD-1065', name: 'NoticeBoard Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'NOTICEBOARD-1066', name: 'NoticeBoard Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'NOTICEBOARD-1067', name: 'NoticeBoard Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'NOTICEBOARD-1068', name: 'NoticeBoard Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'NOTICEBOARD-1069', name: 'NoticeBoard Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'NOTICEBOARD-1070', name: 'NoticeBoard Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'NOTICEBOARD-1071', name: 'NoticeBoard Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'NOTICEBOARD-1072', name: 'NoticeBoard Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'NOTICEBOARD-1073', name: 'NoticeBoard Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'NOTICEBOARD-1074', name: 'NoticeBoard Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'NOTICEBOARD-1075', name: 'NoticeBoard Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'NOTICEBOARD-1076', name: 'NoticeBoard Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'NOTICEBOARD-1077', name: 'NoticeBoard Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'NOTICEBOARD-1078', name: 'NoticeBoard Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'NOTICEBOARD-1079', name: 'NoticeBoard Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'NOTICEBOARD-1080', name: 'NoticeBoard Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Campus Announcement & Notice Board</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Campus Announcement & Notice Board management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Campus Announcement & Notice Board Record</Button>
      </div>

      <Card title="Campus Announcement & Notice Board Records Registry">
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
