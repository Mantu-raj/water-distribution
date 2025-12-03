import React from 'react';
import KPICard from './KPICard';

const KPIGrid = () => {
    const kpiData = [
        {
            title: "Total Production (MLD)",
            value: "145.2",
            subtext: "+4.8% vs last 7 days",
            subtextClass: "text-green-500",
        },
        {
            title: "Total Distribution (MLD)",
            value: "132.5",
            subtext: "Water Balance: 12.7 MLD",
            subtextClass: "text-blue-500",
        },
        {
            title: "Non-Revenue Water",
            value: "8.7%",
            subtext: "Target < 5%",
            subtextClass: "text-red-500",
        },
        {
            title: "Avg Per Capita Supply",
            value: "89 LPCD",
            subtext: "Norm: 100 LPCD",
            subtextClass: "text-orange-500",
        },
        {
            title: "ESRs in Low / Critical",
            value: "23 / 410",
            subtext: "7 Critical • 16 Low",
            subtextClass: "text-red-500",
        },
        {
            title: "Quality Compliance",
            value: "97.4%",
            subtext: "Chlorine & Turbidity within norms",
            subtextClass: "text-green-500",
        },
        {
            title: "Active Alerts",
            value: "14",
            subtext: "5 Critical • 9 Warning",
            subtextClass: "text-red-500",
        },
        {
            title: "Pump Uptime",
            value: "98.2%",
            subtext: "Last 30 days",
            subtextClass: "text-green-500",
        },
        {
            title: "Energy Efficiency",
            value: "0.69 kWh/m³",
            subtext: "Benchmark: 0.75 kWh/m³",
            subtextClass: "text-green-500",
        },
        {
            title: "Communication Health",
            value: "92%",
            subtext: "Online ESR endpoints",
            subtextClass: "text-blue-500",
        },
        {
            title: "Schemes Monitored",
            value: "68",
            subtext: "22 Mega • 18 Mini Mega • 28 Mini",
            subtextClass: "text-gray-500",
        },
        {
            title: "Service Level",
            value: "93%",
            subtext: "Hours with adequate pressure",
            subtextClass: "text-green-500",
        },
    ];

    return (
        <div className="mb-3">
            <h3 className="text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Key Performance Indicators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {kpiData.map((kpi, index) => (
                    <KPICard key={index} {...kpi} />
                ))}
            </div>
        </div>
    );
};

export default KPIGrid;
