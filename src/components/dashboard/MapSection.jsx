import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OdishaMap from './OdishaMap';
import DistrictDetails from './DistrictDetails';

const MapSection = () => {
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 h-[500px]">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 bg-white/80 backdrop-blur-sm p-1 rounded-2xl shadow-soft border border-ocean-100 relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ocean-400 to-transparent opacity-50"></div>

                <div className="h-full w-full bg-white/50 rounded-xl flex items-center justify-center relative z-10">
                    <OdishaMap onDistrictSelect={setSelectedDistrict} selectedDistrict={selectedDistrict} />

                    {/* Decorative UI Elements */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur border border-ocean-100 rounded-full text-xs font-mono text-ocean-600 shadow-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        LIVE MONITORING
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <DistrictDetails district={selectedDistrict} />
            </motion.div>
        </div>
    );
};

export default MapSection;
