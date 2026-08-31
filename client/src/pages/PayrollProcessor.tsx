import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const PayrollProcessor: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'PAYROLLPROCESSOR-1001', name: 'PayrollProcessor Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'PAYROLLPROCESSOR-1002', name: 'PayrollProcessor Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'PAYROLLPROCESSOR-1003', name: 'PayrollProcessor Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'PAYROLLPROCESSOR-1004', name: 'PayrollProcessor Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'PAYROLLPROCESSOR-1005', name: 'PayrollProcessor Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'PAYROLLPROCESSOR-1006', name: 'PayrollProcessor Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'PAYROLLPROCESSOR-1007', name: 'PayrollProcessor Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'PAYROLLPROCESSOR-1008', name: 'PayrollProcessor Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'PAYROLLPROCESSOR-1009', name: 'PayrollProcessor Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'PAYROLLPROCESSOR-1010', name: 'PayrollProcessor Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'PAYROLLPROCESSOR-1011', name: 'PayrollProcessor Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'PAYROLLPROCESSOR-1012', name: 'PayrollProcessor Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'PAYROLLPROCESSOR-1013', name: 'PayrollProcessor Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'PAYROLLPROCESSOR-1014', name: 'PayrollProcessor Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'PAYROLLPROCESSOR-1015', name: 'PayrollProcessor Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'PAYROLLPROCESSOR-1016', name: 'PayrollProcessor Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'PAYROLLPROCESSOR-1017', name: 'PayrollProcessor Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'PAYROLLPROCESSOR-1018', name: 'PayrollProcessor Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'PAYROLLPROCESSOR-1019', name: 'PayrollProcessor Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'PAYROLLPROCESSOR-1020', name: 'PayrollProcessor Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'PAYROLLPROCESSOR-1021', name: 'PayrollProcessor Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'PAYROLLPROCESSOR-1022', name: 'PayrollProcessor Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'PAYROLLPROCESSOR-1023', name: 'PayrollProcessor Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'PAYROLLPROCESSOR-1024', name: 'PayrollProcessor Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'PAYROLLPROCESSOR-1025', name: 'PayrollProcessor Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'PAYROLLPROCESSOR-1026', name: 'PayrollProcessor Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'PAYROLLPROCESSOR-1027', name: 'PayrollProcessor Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'PAYROLLPROCESSOR-1028', name: 'PayrollProcessor Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'PAYROLLPROCESSOR-1029', name: 'PayrollProcessor Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'PAYROLLPROCESSOR-1030', name: 'PayrollProcessor Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'PAYROLLPROCESSOR-1031', name: 'PayrollProcessor Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'PAYROLLPROCESSOR-1032', name: 'PayrollProcessor Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'PAYROLLPROCESSOR-1033', name: 'PayrollProcessor Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'PAYROLLPROCESSOR-1034', name: 'PayrollProcessor Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'PAYROLLPROCESSOR-1035', name: 'PayrollProcessor Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'PAYROLLPROCESSOR-1036', name: 'PayrollProcessor Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'PAYROLLPROCESSOR-1037', name: 'PayrollProcessor Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'PAYROLLPROCESSOR-1038', name: 'PayrollProcessor Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'PAYROLLPROCESSOR-1039', name: 'PayrollProcessor Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'PAYROLLPROCESSOR-1040', name: 'PayrollProcessor Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'PAYROLLPROCESSOR-1041', name: 'PayrollProcessor Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'PAYROLLPROCESSOR-1042', name: 'PayrollProcessor Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'PAYROLLPROCESSOR-1043', name: 'PayrollProcessor Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'PAYROLLPROCESSOR-1044', name: 'PayrollProcessor Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'PAYROLLPROCESSOR-1045', name: 'PayrollProcessor Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'PAYROLLPROCESSOR-1046', name: 'PayrollProcessor Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'PAYROLLPROCESSOR-1047', name: 'PayrollProcessor Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'PAYROLLPROCESSOR-1048', name: 'PayrollProcessor Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'PAYROLLPROCESSOR-1049', name: 'PayrollProcessor Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'PAYROLLPROCESSOR-1050', name: 'PayrollProcessor Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'PAYROLLPROCESSOR-1051', name: 'PayrollProcessor Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'PAYROLLPROCESSOR-1052', name: 'PayrollProcessor Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'PAYROLLPROCESSOR-1053', name: 'PayrollProcessor Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'PAYROLLPROCESSOR-1054', name: 'PayrollProcessor Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'PAYROLLPROCESSOR-1055', name: 'PayrollProcessor Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'PAYROLLPROCESSOR-1056', name: 'PayrollProcessor Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'PAYROLLPROCESSOR-1057', name: 'PayrollProcessor Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'PAYROLLPROCESSOR-1058', name: 'PayrollProcessor Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'PAYROLLPROCESSOR-1059', name: 'PayrollProcessor Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'PAYROLLPROCESSOR-1060', name: 'PayrollProcessor Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'PAYROLLPROCESSOR-1061', name: 'PayrollProcessor Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'PAYROLLPROCESSOR-1062', name: 'PayrollProcessor Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'PAYROLLPROCESSOR-1063', name: 'PayrollProcessor Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'PAYROLLPROCESSOR-1064', name: 'PayrollProcessor Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'PAYROLLPROCESSOR-1065', name: 'PayrollProcessor Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'PAYROLLPROCESSOR-1066', name: 'PayrollProcessor Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'PAYROLLPROCESSOR-1067', name: 'PayrollProcessor Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'PAYROLLPROCESSOR-1068', name: 'PayrollProcessor Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'PAYROLLPROCESSOR-1069', name: 'PayrollProcessor Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'PAYROLLPROCESSOR-1070', name: 'PayrollProcessor Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'PAYROLLPROCESSOR-1071', name: 'PayrollProcessor Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'PAYROLLPROCESSOR-1072', name: 'PayrollProcessor Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'PAYROLLPROCESSOR-1073', name: 'PayrollProcessor Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'PAYROLLPROCESSOR-1074', name: 'PayrollProcessor Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'PAYROLLPROCESSOR-1075', name: 'PayrollProcessor Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'PAYROLLPROCESSOR-1076', name: 'PayrollProcessor Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'PAYROLLPROCESSOR-1077', name: 'PayrollProcessor Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'PAYROLLPROCESSOR-1078', name: 'PayrollProcessor Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'PAYROLLPROCESSOR-1079', name: 'PayrollProcessor Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'PAYROLLPROCESSOR-1080', name: 'PayrollProcessor Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Payroll Processing & Salary Slips</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Payroll Processing & Salary Slips management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Payroll Processing & Salary Slips Record</Button>
      </div>

      <Card title="Payroll Processing & Salary Slips Records Registry">
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
