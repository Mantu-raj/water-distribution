import React from 'react';

const DistrictDetails = ({ district }) => {
    if (!district) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full flex items-center justify-center text-gray-400">
                Select a district to view details
            </div>
        );
    }

    // Mock data generation based on district name
    const population = (Math.random() * 500000 + 100000).toFixed(0);
    const area = (Math.random() * 100 + 20).toFixed(1);
    const density = (population / area).toFixed(2);
    const wards = Math.floor(Math.random() * 50 + 10);

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
            <h3 className="text-xl font-bold text-gray-800 mb-1">Odisha <span className="text-orange-500">|</span> {district}</h3>
            <p className="text-sm text-gray-500 mb-6">District Profile</p>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <div className="text-2xl font-bold text-gray-800">{parseInt(population).toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Population</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-gray-800">{area} Sq km</div>
                    <div className="text-xs text-gray-500">Area</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-gray-800">{wards}</div>
                    <div className="text-xs text-gray-500">Wards</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-gray-800">{parseInt(density).toLocaleString()}/ Sq km</div>
                    <div className="text-xs text-gray-500">Population Density</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-gray-800">7</div>
                    <div className="text-xs text-gray-500">Years of financial data</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-gray-800">No</div>
                    <div className="text-xs text-gray-500">Part of UA</div>
                </div>
            </div>
        </div>
    );
};

export default DistrictDetails;
