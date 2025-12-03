import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { name: 'Critical', value: 7, color: '#ef4444' }, // Red
    { name: 'Warning', value: 16, color: '#f59e0b' }, // Orange
    { name: 'Safe', value: 45, color: '#10b981' },   // Emerald
];

const AlertsChart = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-lg shadow-soft border border-ocean-100 p-3 h-full"
        >
            <h3 className="text-slate-800 font-bold text-sm mb-3">System Alerts</h3>
            <div className="flex items-center justify-between gap-4">
                {/* Chart Section */}
                <div className="flex-shrink-0 w-40 h-40 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={45}
                                outerRadius={65}
                                paddingAngle={4}
                                dataKey="value"
                                cornerRadius={6}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    borderRadius: '8px',
                                    border: 'none',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }}
                                itemStyle={{ fontSize: '12px', fontWeight: 600 }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-2xl font-bold text-slate-800">68</span>
                        <span className="text-xs text-slate-400 uppercase tracking-wide">Total</span>
                    </div>
                </div>

                {/* Legend Section - Right Side */}
                <div className="flex-1 space-y-2">
                    {data.map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors">
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></span>
                                <span className="text-slate-600 font-medium">{item.name}</span>
                            </span>
                            <span className="font-bold text-slate-800">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default AlertsChart;
