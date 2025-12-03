import React from 'react';
import ProductionChart from './ProductionChart';
import AlertsChart from './AlertsChart';
import NRWChart from './NRWChart';
import ZoneScorecard from './ZoneScorecard';

const ChartsSection = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
                <div className="lg:col-span-2">
                    <ProductionChart />
                </div>
                <div>
                    <AlertsChart />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
                <NRWChart />
                <ZoneScorecard />
            </div>
        </>
    );
};

export default ChartsSection;
