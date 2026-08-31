import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const CourseCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'COURSECATALOG-1001', name: 'CourseCatalog Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'COURSECATALOG-1002', name: 'CourseCatalog Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'COURSECATALOG-1003', name: 'CourseCatalog Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'COURSECATALOG-1004', name: 'CourseCatalog Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'COURSECATALOG-1005', name: 'CourseCatalog Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'COURSECATALOG-1006', name: 'CourseCatalog Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'COURSECATALOG-1007', name: 'CourseCatalog Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'COURSECATALOG-1008', name: 'CourseCatalog Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'COURSECATALOG-1009', name: 'CourseCatalog Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'COURSECATALOG-1010', name: 'CourseCatalog Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'COURSECATALOG-1011', name: 'CourseCatalog Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'COURSECATALOG-1012', name: 'CourseCatalog Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'COURSECATALOG-1013', name: 'CourseCatalog Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'COURSECATALOG-1014', name: 'CourseCatalog Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'COURSECATALOG-1015', name: 'CourseCatalog Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'COURSECATALOG-1016', name: 'CourseCatalog Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'COURSECATALOG-1017', name: 'CourseCatalog Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'COURSECATALOG-1018', name: 'CourseCatalog Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'COURSECATALOG-1019', name: 'CourseCatalog Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'COURSECATALOG-1020', name: 'CourseCatalog Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'COURSECATALOG-1021', name: 'CourseCatalog Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'COURSECATALOG-1022', name: 'CourseCatalog Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'COURSECATALOG-1023', name: 'CourseCatalog Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'COURSECATALOG-1024', name: 'CourseCatalog Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'COURSECATALOG-1025', name: 'CourseCatalog Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'COURSECATALOG-1026', name: 'CourseCatalog Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'COURSECATALOG-1027', name: 'CourseCatalog Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'COURSECATALOG-1028', name: 'CourseCatalog Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'COURSECATALOG-1029', name: 'CourseCatalog Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'COURSECATALOG-1030', name: 'CourseCatalog Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'COURSECATALOG-1031', name: 'CourseCatalog Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'COURSECATALOG-1032', name: 'CourseCatalog Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'COURSECATALOG-1033', name: 'CourseCatalog Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'COURSECATALOG-1034', name: 'CourseCatalog Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'COURSECATALOG-1035', name: 'CourseCatalog Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'COURSECATALOG-1036', name: 'CourseCatalog Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'COURSECATALOG-1037', name: 'CourseCatalog Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'COURSECATALOG-1038', name: 'CourseCatalog Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'COURSECATALOG-1039', name: 'CourseCatalog Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'COURSECATALOG-1040', name: 'CourseCatalog Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'COURSECATALOG-1041', name: 'CourseCatalog Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'COURSECATALOG-1042', name: 'CourseCatalog Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'COURSECATALOG-1043', name: 'CourseCatalog Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'COURSECATALOG-1044', name: 'CourseCatalog Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'COURSECATALOG-1045', name: 'CourseCatalog Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'COURSECATALOG-1046', name: 'CourseCatalog Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'COURSECATALOG-1047', name: 'CourseCatalog Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'COURSECATALOG-1048', name: 'CourseCatalog Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'COURSECATALOG-1049', name: 'CourseCatalog Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'COURSECATALOG-1050', name: 'CourseCatalog Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'COURSECATALOG-1051', name: 'CourseCatalog Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'COURSECATALOG-1052', name: 'CourseCatalog Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'COURSECATALOG-1053', name: 'CourseCatalog Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'COURSECATALOG-1054', name: 'CourseCatalog Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'COURSECATALOG-1055', name: 'CourseCatalog Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'COURSECATALOG-1056', name: 'CourseCatalog Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'COURSECATALOG-1057', name: 'CourseCatalog Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'COURSECATALOG-1058', name: 'CourseCatalog Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'COURSECATALOG-1059', name: 'CourseCatalog Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'COURSECATALOG-1060', name: 'CourseCatalog Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'COURSECATALOG-1061', name: 'CourseCatalog Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'COURSECATALOG-1062', name: 'CourseCatalog Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'COURSECATALOG-1063', name: 'CourseCatalog Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'COURSECATALOG-1064', name: 'CourseCatalog Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'COURSECATALOG-1065', name: 'CourseCatalog Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'COURSECATALOG-1066', name: 'CourseCatalog Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'COURSECATALOG-1067', name: 'CourseCatalog Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'COURSECATALOG-1068', name: 'CourseCatalog Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'COURSECATALOG-1069', name: 'CourseCatalog Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'COURSECATALOG-1070', name: 'CourseCatalog Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'COURSECATALOG-1071', name: 'CourseCatalog Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'COURSECATALOG-1072', name: 'CourseCatalog Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'COURSECATALOG-1073', name: 'CourseCatalog Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'COURSECATALOG-1074', name: 'CourseCatalog Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'COURSECATALOG-1075', name: 'CourseCatalog Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'COURSECATALOG-1076', name: 'CourseCatalog Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'COURSECATALOG-1077', name: 'CourseCatalog Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'COURSECATALOG-1078', name: 'CourseCatalog Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'COURSECATALOG-1079', name: 'CourseCatalog Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'COURSECATALOG-1080', name: 'CourseCatalog Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>University Course Catalog & Syllabus</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise University Course Catalog & Syllabus management dashboard.</p>
        </div>
        <Button variant="primary">+ Create University Course Catalog & Syllabus Record</Button>
      </div>

      <Card title="University Course Catalog & Syllabus Records Registry">
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
