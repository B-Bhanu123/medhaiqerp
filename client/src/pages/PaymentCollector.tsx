import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';

export const PaymentCollector: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { id: '1', code: 'PAYMENTCOLLECTOR-1001', name: 'PaymentCollector Item 1', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '2', code: 'PAYMENTCOLLECTOR-1002', name: 'PaymentCollector Item 2', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '3', code: 'PAYMENTCOLLECTOR-1003', name: 'PaymentCollector Item 3', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '4', code: 'PAYMENTCOLLECTOR-1004', name: 'PaymentCollector Item 4', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '5', code: 'PAYMENTCOLLECTOR-1005', name: 'PaymentCollector Item 5', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '6', code: 'PAYMENTCOLLECTOR-1006', name: 'PaymentCollector Item 6', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '7', code: 'PAYMENTCOLLECTOR-1007', name: 'PaymentCollector Item 7', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '8', code: 'PAYMENTCOLLECTOR-1008', name: 'PaymentCollector Item 8', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '9', code: 'PAYMENTCOLLECTOR-1009', name: 'PaymentCollector Item 9', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '10', code: 'PAYMENTCOLLECTOR-1010', name: 'PaymentCollector Item 10', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '11', code: 'PAYMENTCOLLECTOR-1011', name: 'PaymentCollector Item 11', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '12', code: 'PAYMENTCOLLECTOR-1012', name: 'PaymentCollector Item 12', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '13', code: 'PAYMENTCOLLECTOR-1013', name: 'PaymentCollector Item 13', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '14', code: 'PAYMENTCOLLECTOR-1014', name: 'PaymentCollector Item 14', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '15', code: 'PAYMENTCOLLECTOR-1015', name: 'PaymentCollector Item 15', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '16', code: 'PAYMENTCOLLECTOR-1016', name: 'PaymentCollector Item 16', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '17', code: 'PAYMENTCOLLECTOR-1017', name: 'PaymentCollector Item 17', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '18', code: 'PAYMENTCOLLECTOR-1018', name: 'PaymentCollector Item 18', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '19', code: 'PAYMENTCOLLECTOR-1019', name: 'PaymentCollector Item 19', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '20', code: 'PAYMENTCOLLECTOR-1020', name: 'PaymentCollector Item 20', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '21', code: 'PAYMENTCOLLECTOR-1021', name: 'PaymentCollector Item 21', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '22', code: 'PAYMENTCOLLECTOR-1022', name: 'PaymentCollector Item 22', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '23', code: 'PAYMENTCOLLECTOR-1023', name: 'PaymentCollector Item 23', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '24', code: 'PAYMENTCOLLECTOR-1024', name: 'PaymentCollector Item 24', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '25', code: 'PAYMENTCOLLECTOR-1025', name: 'PaymentCollector Item 25', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '26', code: 'PAYMENTCOLLECTOR-1026', name: 'PaymentCollector Item 26', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '27', code: 'PAYMENTCOLLECTOR-1027', name: 'PaymentCollector Item 27', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '28', code: 'PAYMENTCOLLECTOR-1028', name: 'PaymentCollector Item 28', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '29', code: 'PAYMENTCOLLECTOR-1029', name: 'PaymentCollector Item 29', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '30', code: 'PAYMENTCOLLECTOR-1030', name: 'PaymentCollector Item 30', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '31', code: 'PAYMENTCOLLECTOR-1031', name: 'PaymentCollector Item 31', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '32', code: 'PAYMENTCOLLECTOR-1032', name: 'PaymentCollector Item 32', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '33', code: 'PAYMENTCOLLECTOR-1033', name: 'PaymentCollector Item 33', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '34', code: 'PAYMENTCOLLECTOR-1034', name: 'PaymentCollector Item 34', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '35', code: 'PAYMENTCOLLECTOR-1035', name: 'PaymentCollector Item 35', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '36', code: 'PAYMENTCOLLECTOR-1036', name: 'PaymentCollector Item 36', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '37', code: 'PAYMENTCOLLECTOR-1037', name: 'PaymentCollector Item 37', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '38', code: 'PAYMENTCOLLECTOR-1038', name: 'PaymentCollector Item 38', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '39', code: 'PAYMENTCOLLECTOR-1039', name: 'PaymentCollector Item 39', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '40', code: 'PAYMENTCOLLECTOR-1040', name: 'PaymentCollector Item 40', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '41', code: 'PAYMENTCOLLECTOR-1041', name: 'PaymentCollector Item 41', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '42', code: 'PAYMENTCOLLECTOR-1042', name: 'PaymentCollector Item 42', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '43', code: 'PAYMENTCOLLECTOR-1043', name: 'PaymentCollector Item 43', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '44', code: 'PAYMENTCOLLECTOR-1044', name: 'PaymentCollector Item 44', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '45', code: 'PAYMENTCOLLECTOR-1045', name: 'PaymentCollector Item 45', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '46', code: 'PAYMENTCOLLECTOR-1046', name: 'PaymentCollector Item 46', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '47', code: 'PAYMENTCOLLECTOR-1047', name: 'PaymentCollector Item 47', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '48', code: 'PAYMENTCOLLECTOR-1048', name: 'PaymentCollector Item 48', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '49', code: 'PAYMENTCOLLECTOR-1049', name: 'PaymentCollector Item 49', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '50', code: 'PAYMENTCOLLECTOR-1050', name: 'PaymentCollector Item 50', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '51', code: 'PAYMENTCOLLECTOR-1051', name: 'PaymentCollector Item 51', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '52', code: 'PAYMENTCOLLECTOR-1052', name: 'PaymentCollector Item 52', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '53', code: 'PAYMENTCOLLECTOR-1053', name: 'PaymentCollector Item 53', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '54', code: 'PAYMENTCOLLECTOR-1054', name: 'PaymentCollector Item 54', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '55', code: 'PAYMENTCOLLECTOR-1055', name: 'PaymentCollector Item 55', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '56', code: 'PAYMENTCOLLECTOR-1056', name: 'PaymentCollector Item 56', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '57', code: 'PAYMENTCOLLECTOR-1057', name: 'PaymentCollector Item 57', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '58', code: 'PAYMENTCOLLECTOR-1058', name: 'PaymentCollector Item 58', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '59', code: 'PAYMENTCOLLECTOR-1059', name: 'PaymentCollector Item 59', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '60', code: 'PAYMENTCOLLECTOR-1060', name: 'PaymentCollector Item 60', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '61', code: 'PAYMENTCOLLECTOR-1061', name: 'PaymentCollector Item 61', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '62', code: 'PAYMENTCOLLECTOR-1062', name: 'PaymentCollector Item 62', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '63', code: 'PAYMENTCOLLECTOR-1063', name: 'PaymentCollector Item 63', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '64', code: 'PAYMENTCOLLECTOR-1064', name: 'PaymentCollector Item 64', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '65', code: 'PAYMENTCOLLECTOR-1065', name: 'PaymentCollector Item 65', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '66', code: 'PAYMENTCOLLECTOR-1066', name: 'PaymentCollector Item 66', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '67', code: 'PAYMENTCOLLECTOR-1067', name: 'PaymentCollector Item 67', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '68', code: 'PAYMENTCOLLECTOR-1068', name: 'PaymentCollector Item 68', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '69', code: 'PAYMENTCOLLECTOR-1069', name: 'PaymentCollector Item 69', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '70', code: 'PAYMENTCOLLECTOR-1070', name: 'PaymentCollector Item 70', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '71', code: 'PAYMENTCOLLECTOR-1071', name: 'PaymentCollector Item 71', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '72', code: 'PAYMENTCOLLECTOR-1072', name: 'PaymentCollector Item 72', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '73', code: 'PAYMENTCOLLECTOR-1073', name: 'PaymentCollector Item 73', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '74', code: 'PAYMENTCOLLECTOR-1074', name: 'PaymentCollector Item 74', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '75', code: 'PAYMENTCOLLECTOR-1075', name: 'PaymentCollector Item 75', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '76', code: 'PAYMENTCOLLECTOR-1076', name: 'PaymentCollector Item 76', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '77', code: 'PAYMENTCOLLECTOR-1077', name: 'PaymentCollector Item 77', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '78', code: 'PAYMENTCOLLECTOR-1078', name: 'PaymentCollector Item 78', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '79', code: 'PAYMENTCOLLECTOR-1079', name: 'PaymentCollector Item 79', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
    { id: '80', code: 'PAYMENTCOLLECTOR-1080', name: 'PaymentCollector Item 80', category: 'General', status: 'ACTIVE', lastUpdated: '2026-08-31' },
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Payment Processing & Cash Register</h1>
          <p style={{ color: 'var(--text-muted)' }}>Enterprise Payment Processing & Cash Register management dashboard.</p>
        </div>
        <Button variant="primary">+ Create Payment Processing & Cash Register Record</Button>
      </div>

      <Card title="Payment Processing & Cash Register Records Registry">
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
