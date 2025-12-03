import React from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import FilterSection from './components/dashboard/FilterSection';
import KPIGrid from './components/dashboard/KPIGrid';
import ChartsSection from './components/dashboard/ChartsSection';
import MapSection from './components/dashboard/MapSection';

function App() {
  return (
    <DashboardLayout>
      <div className="space-y-3">
        <FilterSection />
        <KPIGrid />
        <ChartsSection />
        <MapSection />
      </div>
    </DashboardLayout>
  );
}

export default App;
