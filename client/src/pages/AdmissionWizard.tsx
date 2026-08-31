import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const AdmissionWizard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'ADMISSIONWIZARD-1001', name: 'AdmissionWizard Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'ADMISSIONWIZARD-1002', name: 'AdmissionWizard Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'ADMISSIONWIZARD-1003', name: 'AdmissionWizard Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'ADMISSIONWIZARD-1004', name: 'AdmissionWizard Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'ADMISSIONWIZARD-1005', name: 'AdmissionWizard Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'ADMISSIONWIZARD-1006', name: 'AdmissionWizard Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'ADMISSIONWIZARD-1007', name: 'AdmissionWizard Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'ADMISSIONWIZARD-1008', name: 'AdmissionWizard Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'ADMISSIONWIZARD-1009', name: 'AdmissionWizard Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'ADMISSIONWIZARD-1010', name: 'AdmissionWizard Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'ADMISSIONWIZARD-1011', name: 'AdmissionWizard Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'ADMISSIONWIZARD-1012', name: 'AdmissionWizard Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'ADMISSIONWIZARD-1013', name: 'AdmissionWizard Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'ADMISSIONWIZARD-1014', name: 'AdmissionWizard Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'ADMISSIONWIZARD-1015', name: 'AdmissionWizard Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'ADMISSIONWIZARD-1016', name: 'AdmissionWizard Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'ADMISSIONWIZARD-1017', name: 'AdmissionWizard Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'ADMISSIONWIZARD-1018', name: 'AdmissionWizard Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'ADMISSIONWIZARD-1019', name: 'AdmissionWizard Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'ADMISSIONWIZARD-1020', name: 'AdmissionWizard Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'ADMISSIONWIZARD-1021', name: 'AdmissionWizard Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'ADMISSIONWIZARD-1022', name: 'AdmissionWizard Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'ADMISSIONWIZARD-1023', name: 'AdmissionWizard Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'ADMISSIONWIZARD-1024', name: 'AdmissionWizard Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'ADMISSIONWIZARD-1025', name: 'AdmissionWizard Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'ADMISSIONWIZARD-1026', name: 'AdmissionWizard Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'ADMISSIONWIZARD-1027', name: 'AdmissionWizard Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'ADMISSIONWIZARD-1028', name: 'AdmissionWizard Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'ADMISSIONWIZARD-1029', name: 'AdmissionWizard Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'ADMISSIONWIZARD-1030', name: 'AdmissionWizard Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'ADMISSIONWIZARD-1031', name: 'AdmissionWizard Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'ADMISSIONWIZARD-1032', name: 'AdmissionWizard Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'ADMISSIONWIZARD-1033', name: 'AdmissionWizard Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'ADMISSIONWIZARD-1034', name: 'AdmissionWizard Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'ADMISSIONWIZARD-1035', name: 'AdmissionWizard Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'ADMISSIONWIZARD-1036', name: 'AdmissionWizard Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'ADMISSIONWIZARD-1037', name: 'AdmissionWizard Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'ADMISSIONWIZARD-1038', name: 'AdmissionWizard Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'ADMISSIONWIZARD-1039', name: 'AdmissionWizard Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'ADMISSIONWIZARD-1040', name: 'AdmissionWizard Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'ADMISSIONWIZARD-1041', name: 'AdmissionWizard Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'ADMISSIONWIZARD-1042', name: 'AdmissionWizard Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'ADMISSIONWIZARD-1043', name: 'AdmissionWizard Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'ADMISSIONWIZARD-1044', name: 'AdmissionWizard Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'ADMISSIONWIZARD-1045', name: 'AdmissionWizard Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'ADMISSIONWIZARD-1046', name: 'AdmissionWizard Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'ADMISSIONWIZARD-1047', name: 'AdmissionWizard Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'ADMISSIONWIZARD-1048', name: 'AdmissionWizard Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'ADMISSIONWIZARD-1049', name: 'AdmissionWizard Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'ADMISSIONWIZARD-1050', name: 'AdmissionWizard Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'ADMISSIONWIZARD-1051', name: 'AdmissionWizard Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'ADMISSIONWIZARD-1052', name: 'AdmissionWizard Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'ADMISSIONWIZARD-1053', name: 'AdmissionWizard Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'ADMISSIONWIZARD-1054', name: 'AdmissionWizard Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'ADMISSIONWIZARD-1055', name: 'AdmissionWizard Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'ADMISSIONWIZARD-1056', name: 'AdmissionWizard Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'ADMISSIONWIZARD-1057', name: 'AdmissionWizard Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'ADMISSIONWIZARD-1058', name: 'AdmissionWizard Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'ADMISSIONWIZARD-1059', name: 'AdmissionWizard Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'ADMISSIONWIZARD-1060', name: 'AdmissionWizard Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'ADMISSIONWIZARD-1061', name: 'AdmissionWizard Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'ADMISSIONWIZARD-1062', name: 'AdmissionWizard Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'ADMISSIONWIZARD-1063', name: 'AdmissionWizard Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'ADMISSIONWIZARD-1064', name: 'AdmissionWizard Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'ADMISSIONWIZARD-1065', name: 'AdmissionWizard Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'ADMISSIONWIZARD-1066', name: 'AdmissionWizard Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'ADMISSIONWIZARD-1067', name: 'AdmissionWizard Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'ADMISSIONWIZARD-1068', name: 'AdmissionWizard Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'ADMISSIONWIZARD-1069', name: 'AdmissionWizard Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'ADMISSIONWIZARD-1070', name: 'AdmissionWizard Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'ADMISSIONWIZARD-1071', name: 'AdmissionWizard Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'ADMISSIONWIZARD-1072', name: 'AdmissionWizard Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'ADMISSIONWIZARD-1073', name: 'AdmissionWizard Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'ADMISSIONWIZARD-1074', name: 'AdmissionWizard Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'ADMISSIONWIZARD-1075', name: 'AdmissionWizard Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'ADMISSIONWIZARD-1076', name: 'AdmissionWizard Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'ADMISSIONWIZARD-1077', name: 'AdmissionWizard Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'ADMISSIONWIZARD-1078', name: 'AdmissionWizard Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'ADMISSIONWIZARD-1079', name: 'AdmissionWizard Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'ADMISSIONWIZARD-1080', name: 'AdmissionWizard Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Student Admissions & Document Portal</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Student Admissions & Document Portal management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Student Admissions & Document Portal Record</Button>
      </div>

      <Card title="Student Admissions & Document Portal Records Registry">
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
