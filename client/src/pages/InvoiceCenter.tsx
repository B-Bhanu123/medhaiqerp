import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const InvoiceCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'INVOICECENTER-1001', name: 'InvoiceCenter Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'INVOICECENTER-1002', name: 'InvoiceCenter Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'INVOICECENTER-1003', name: 'InvoiceCenter Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'INVOICECENTER-1004', name: 'InvoiceCenter Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'INVOICECENTER-1005', name: 'InvoiceCenter Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'INVOICECENTER-1006', name: 'InvoiceCenter Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'INVOICECENTER-1007', name: 'InvoiceCenter Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'INVOICECENTER-1008', name: 'InvoiceCenter Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'INVOICECENTER-1009', name: 'InvoiceCenter Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'INVOICECENTER-1010', name: 'InvoiceCenter Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'INVOICECENTER-1011', name: 'InvoiceCenter Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'INVOICECENTER-1012', name: 'InvoiceCenter Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'INVOICECENTER-1013', name: 'InvoiceCenter Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'INVOICECENTER-1014', name: 'InvoiceCenter Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'INVOICECENTER-1015', name: 'InvoiceCenter Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'INVOICECENTER-1016', name: 'InvoiceCenter Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'INVOICECENTER-1017', name: 'InvoiceCenter Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'INVOICECENTER-1018', name: 'InvoiceCenter Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'INVOICECENTER-1019', name: 'InvoiceCenter Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'INVOICECENTER-1020', name: 'InvoiceCenter Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'INVOICECENTER-1021', name: 'InvoiceCenter Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'INVOICECENTER-1022', name: 'InvoiceCenter Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'INVOICECENTER-1023', name: 'InvoiceCenter Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'INVOICECENTER-1024', name: 'InvoiceCenter Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'INVOICECENTER-1025', name: 'InvoiceCenter Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'INVOICECENTER-1026', name: 'InvoiceCenter Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'INVOICECENTER-1027', name: 'InvoiceCenter Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'INVOICECENTER-1028', name: 'InvoiceCenter Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'INVOICECENTER-1029', name: 'InvoiceCenter Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'INVOICECENTER-1030', name: 'InvoiceCenter Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'INVOICECENTER-1031', name: 'InvoiceCenter Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'INVOICECENTER-1032', name: 'InvoiceCenter Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'INVOICECENTER-1033', name: 'InvoiceCenter Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'INVOICECENTER-1034', name: 'InvoiceCenter Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'INVOICECENTER-1035', name: 'InvoiceCenter Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'INVOICECENTER-1036', name: 'InvoiceCenter Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'INVOICECENTER-1037', name: 'InvoiceCenter Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'INVOICECENTER-1038', name: 'InvoiceCenter Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'INVOICECENTER-1039', name: 'InvoiceCenter Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'INVOICECENTER-1040', name: 'InvoiceCenter Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'INVOICECENTER-1041', name: 'InvoiceCenter Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'INVOICECENTER-1042', name: 'InvoiceCenter Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'INVOICECENTER-1043', name: 'InvoiceCenter Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'INVOICECENTER-1044', name: 'InvoiceCenter Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'INVOICECENTER-1045', name: 'InvoiceCenter Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'INVOICECENTER-1046', name: 'InvoiceCenter Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'INVOICECENTER-1047', name: 'InvoiceCenter Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'INVOICECENTER-1048', name: 'InvoiceCenter Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'INVOICECENTER-1049', name: 'InvoiceCenter Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'INVOICECENTER-1050', name: 'InvoiceCenter Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'INVOICECENTER-1051', name: 'InvoiceCenter Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'INVOICECENTER-1052', name: 'InvoiceCenter Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'INVOICECENTER-1053', name: 'InvoiceCenter Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'INVOICECENTER-1054', name: 'InvoiceCenter Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'INVOICECENTER-1055', name: 'InvoiceCenter Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'INVOICECENTER-1056', name: 'InvoiceCenter Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'INVOICECENTER-1057', name: 'InvoiceCenter Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'INVOICECENTER-1058', name: 'InvoiceCenter Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'INVOICECENTER-1059', name: 'InvoiceCenter Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'INVOICECENTER-1060', name: 'InvoiceCenter Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'INVOICECENTER-1061', name: 'InvoiceCenter Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'INVOICECENTER-1062', name: 'InvoiceCenter Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'INVOICECENTER-1063', name: 'InvoiceCenter Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'INVOICECENTER-1064', name: 'InvoiceCenter Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'INVOICECENTER-1065', name: 'InvoiceCenter Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'INVOICECENTER-1066', name: 'InvoiceCenter Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'INVOICECENTER-1067', name: 'InvoiceCenter Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'INVOICECENTER-1068', name: 'InvoiceCenter Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'INVOICECENTER-1069', name: 'InvoiceCenter Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'INVOICECENTER-1070', name: 'InvoiceCenter Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'INVOICECENTER-1071', name: 'InvoiceCenter Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'INVOICECENTER-1072', name: 'InvoiceCenter Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'INVOICECENTER-1073', name: 'InvoiceCenter Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'INVOICECENTER-1074', name: 'InvoiceCenter Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'INVOICECENTER-1075', name: 'InvoiceCenter Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'INVOICECENTER-1076', name: 'InvoiceCenter Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'INVOICECENTER-1077', name: 'InvoiceCenter Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'INVOICECENTER-1078', name: 'InvoiceCenter Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'INVOICECENTER-1079', name: 'InvoiceCenter Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'INVOICECENTER-1080', name: 'InvoiceCenter Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Student Fee Invoicing & Billing Portal</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Student Fee Invoicing & Billing Portal management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Student Fee Invoicing & Billing Portal Record</Button>
      </div>

      <Card title="Student Fee Invoicing & Billing Portal Records Registry">
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
