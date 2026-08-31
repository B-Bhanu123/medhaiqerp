
import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { ExecutiveDashboard } from './pages/ExecutiveDashboard';
import { StudentDirectory } from './pages/StudentDirectory';
import { FeeConfiguration } from './pages/FeeConfiguration';

export const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState('dashboard');

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <ExecutiveDashboard />;
      case 'students':
        return <StudentDirectory />;
      case 'finance':
        return <FeeConfiguration />;
      default:
        return <ExecutiveDashboard />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
      <Sidebar activeModule={activeModule} onSelectModule={setActiveModule} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1, padding: '2rem', background: '#f8fafc' }}>
          {renderModule()}
        </main>
      </div>
    </div>
  );
};

export default App;
