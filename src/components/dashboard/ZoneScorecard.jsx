import React from 'react';
import { motion } from 'framer-motion';

const zones = [
    {
        name: 'Banapur Mega',
        supply: 105,
        nrw: '4.3%',
        esrStatus: 'Normal',
        esrClass: 'text-green-700 bg-green-50',
        quality: 'Within Norms',
        qualityClass: 'text-green-700 bg-green-50',
        alerts: 0,
        alertClass: 'text-slate-500'
    },
    {
        name: 'Kalyanpur Mini Mega',
        supply: 84,
        nrw: '9.8%',
        esrStatus: 'Low',
        esrClass: 'text-blue-700 bg-blue-50',
        quality: 'OK',
        qualityClass: 'text-green-700 bg-green-50',
        alerts: 2,
        alertClass: 'text-orange-600 font-semibold'
    },
    {
        name: 'Kashipur Mini',
        supply: 72,
        nrw: '12.1%',
        esrStatus: 'Critical',
        esrClass: 'text-red-700 bg-red-50',
        quality: 'Chlorine Low',
        qualityClass: 'text-red-700 bg-red-50',
        alerts: 3,
        alertClass: 'text-red-600 font-semibold'
    },
    {
        name: 'Zone-4 ESR Cluster',
        supply: 91,
        nrw: '7.5%',
        esrStatus: 'Low',
        esrClass: 'text-blue-700 bg-blue-50',
        quality: 'OK',
        qualityClass: 'text-green-700 bg-green-50',
        alerts: 1,
        alertClass: 'text-blue-600 font-semibold'
    },
];

const ZoneScorecard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white rounded-lg shadow-soft border border-ocean-100 p-3 h-full"
        >
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-slate-800 font-bold text-sm">Zone Scorecard</h3>
                <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">Key supply & risk indicators</span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-slate-200">
                            <th className="text-left py-2 px-2 font-semibold text-slate-600 text-xs uppercase tracking-wider">Zone / Scheme</th>
                            <th className="text-left py-3 px-2 font-semibold text-slate-600 text-xs uppercase tracking-wider">Supply (LPCD)</th>
                            <th className="text-left py-3 px-2 font-semibold text-slate-600 text-xs uppercase tracking-wider">NRW %</th>
                            <th className="text-left py-3 px-2 font-semibold text-slate-600 text-xs uppercase tracking-wider">ESR Status</th>
                            <th className="text-left py-3 px-2 font-semibold text-slate-600 text-xs uppercase tracking-wider">Quality</th>
                            <th className="text-left py-3 px-2 font-semibold text-slate-600 text-xs uppercase tracking-wider">Alerts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {zones.map((zone, index) => (
                            <tr
                                key={index}
                                className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                            >
                                <td className="py-2 px-2 font-medium text-slate-700">{zone.name}</td>
                                <td className="py-2 px-2 text-slate-600">{zone.supply}</td>
                                <td className="py-3 px-2 text-slate-600">{zone.nrw}</td>
                                <td className="py-2 px-2">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${zone.esrClass}`}>
                                        {zone.esrStatus}
                                    </span>
                                </td>
                                <td className="py-2 px-2">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${zone.qualityClass}`}>
                                        {zone.quality}
                                    </span>
                                </td>
                                <td className="py-2 px-2">
                                    <span className={zone.alertClass}>
                                        {zone.alerts}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default ZoneScorecard;
