import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { zone: 'Banapur Mega', nrw: 4.3 },
    { zone: 'Kalyanpur Mini Mega', nrw: 9.8 },
    { zone: 'Kashipur Mini', nrw: 12.1 },
    { zone: 'Zone-4 Cluster', nrw: 7.5 },
    { zone: 'Zone-5 Cluster', nrw: 6.2 },
];

const NRWChart = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-lg shadow-soft border border-ocean-100 p-3 h-full"
        >
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-slate-800 font-bold text-sm">Non-Revenue Water by Zone</h3>
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">Top loss-making zones</span>
            </div>
            <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            dataKey="zone"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                            dy={10}
                            angle={-15}
                            textAnchor="end"
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                            label={{ value: 'NRW (%)', angle: -90, position: 'insideLeft', style: { fill: '#64748b', fontSize: 12 } }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                borderRadius: '12px',
                                border: 'none',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }}
                            itemStyle={{ fontSize: '12px', fontWeight: 500 }}
                            formatter={(value) => [`${value}%`, 'NRW']}
                        />
                        <Bar
                            dataKey="nrw"
                            fill="#38bdf8"
                            radius={[8, 8, 0, 0]}
                            maxBarSize={60}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default NRWChart;
