import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const FilterSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-soft mb-4 border border-ocean-100 relative overflow-hidden"
        >
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-ocean-50 rounded-lg text-ocean-600">
                        <Filter size={18} />
                    </div>
                    <h3 className="text-slate-700 font-bold text-sm uppercase tracking-wider">Dashboard Filters</h3>
                </div>
                <button className="text-xs text-ocean-600 font-medium hover:text-ocean-700 flex items-center gap-1">
                    Advanced View <ChevronDown size={14} />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Row 1 */}
                <div className="space-y-1 group">
                    <label className="text-xs font-semibold text-slate-500 group-hover:text-ocean-600 transition-colors">Time Range</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:border-ocean-500 transition-all hover:bg-white">
                        <option>Today</option>
                        <option>Yesterday</option>
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                    </select>
                </div>

                <div className="space-y-1 group">
                    <label className="text-xs font-semibold text-slate-500 group-hover:text-ocean-600 transition-colors">From Date</label>
                    <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:border-ocean-500 transition-all hover:bg-white" />
                </div>

                <div className="space-y-1 group">
                    <label className="text-xs font-semibold text-slate-500 group-hover:text-ocean-600 transition-colors">To Date</label>
                    <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:border-ocean-500 transition-all hover:bg-white" />
                </div>

                <div className="space-y-1 group">
                    <label className="text-xs font-semibold text-slate-500 group-hover:text-ocean-600 transition-colors">Scheme Type</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:border-ocean-500 transition-all hover:bg-white">
                        <option>All</option>
                        <option>Mega</option>
                        <option>Mini</option>
                        <option>Mini Mega</option>
                    </select>
                </div>

                {/* Row 2 */}
                <div className="space-y-1 group">
                    <label className="text-xs font-semibold text-slate-500 group-hover:text-ocean-600 transition-colors">District</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:border-ocean-500 transition-all hover:bg-white">
                        <option>All Districts</option>
                        <option>Cuttack</option>
                        <option>Khordha</option>
                        <option>Puri</option>
                    </select>
                </div>

                <div className="space-y-1.5 group">
                    <label className="text-xs font-semibold text-slate-500 group-hover:text-ocean-600 transition-colors">Block</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:border-ocean-500 transition-all hover:bg-white">
                        <option>All Blocks</option>
                        <option>Banapur</option>
                        <option>Kalyanpur</option>
                        <option>Kashipur</option>
                    </select>
                </div>

                <div className="space-y-1.5 group">
                    <label className="text-xs font-semibold text-slate-500 group-hover:text-ocean-600 transition-colors">Parameter Focus</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:border-ocean-500 transition-all hover:bg-white">
                        <option>All Parameters</option>
                        <option>Flow Rate</option>
                        <option>Pressure</option>
                        <option>Temperature</option>
                        <option>Water Level</option>
                        <option>Water Quality</option>
                        <option>ESR Status</option>
                        <option>Communication Status</option>
                    </select>
                </div>

                <div className="space-y-1.5 group">
                    <label className="text-xs font-semibold text-slate-500 group-hover:text-ocean-600 transition-colors">Alert Severity</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:border-ocean-500 transition-all hover:bg-white">
                        <option>All</option>
                        <option>Critical</option>
                        <option>Warning</option>
                    </select>
                </div>

                {/* Row 3 */}
                <div className="space-y-1.5 group">
                    <label className="text-xs font-semibold text-slate-500 group-hover:text-ocean-600 transition-colors">ESR Status</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:border-ocean-500 transition-all hover:bg-white">
                        <option>All ESRs</option>
                        <option>Normal Storage</option>
                        <option>Low Storage</option>
                        <option>Critical/empty</option>
                    </select>
                </div>

                <div className="space-y-1.5 group">
                    <label className="text-xs font-semibold text-slate-500 group-hover:text-ocean-600 transition-colors">Communication Status</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:border-ocean-500 transition-all hover:bg-white">
                        <option>All</option>
                        <option>Online</option>
                        <option>Offline</option>
                        <option>Intermittent</option>
                    </select>
                </div>

                <div className="space-y-1.5 group">
                    <label className="text-xs font-semibold text-slate-500 group-hover:text-ocean-600 transition-colors">KPI View</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:border-ocean-500 transition-all hover:bg-white">
                        <option>State Summary</option>
                        <option>Block Wise</option>
                        <option>District Wise</option>
                        <option>Scheme Wise</option>
                    </select>
                </div>

                <div className="space-y-1.5 group">
                    <label className="text-xs font-semibold text-slate-500 group-hover:text-ocean-600 transition-colors">Search</label>
                    <input
                        type="text"
                        placeholder="Search scheme, ESR..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:border-ocean-500 transition-all hover:bg-white"
                    />
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-4 pt-3 border-t border-slate-100">
                <button className="px-5 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-800 transition-colors">Reset</button>
                <button className="px-5 py-2 text-sm font-medium text-white bg-ocean-600 rounded-lg shadow-lg shadow-ocean-500/30 hover:bg-ocean-700 hover:shadow-ocean-500/40 transition-all transform hover:-translate-y-0.5">Apply Filters</button>
            </div>
        </motion.div>
    );
};

export default FilterSection;
