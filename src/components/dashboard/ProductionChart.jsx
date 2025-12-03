import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { time: '00:00', production: 120, distribution: 110 },
    { time: '04:00', production: 125, distribution: 115 },
    { time: '08:00', production: 140, distribution: 125 },
    { time: '12:00', production: 150, distribution: 135 },
    { time: '16:00', production: 145, distribution: 130 },
    { time: '20:00', production: 135, distribution: 120 },
    { time: '23:59', production: 125, distribution: 115 },
];

const ProductionChart = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-lg shadow-soft border border-ocean-100 p-3 h-full"
        >
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-slate-800 font-bold text-sm">Water Production vs Distribution</h3>
                <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">MLD</span>
            </div>
            <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                borderRadius: '12px',
                                border: 'none',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }}
                            itemStyle={{ fontSize: '12px', fontWeight: 500 }}
                        />
                        <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="circle" />
                        <Line
                            type="monotone"
                            dataKey="production"
                            stroke="#0ea5e9"
                            strokeWidth={3}
                            dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                            name="Production (MLD)"
                        />
                        <Line
                            type="monotone"
                            dataKey="distribution"
                            stroke="#64748b"
                            strokeWidth={3}
                            strokeDasharray="5 5"
                            dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                            name="Distribution (MLD)"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default ProductionChart;
