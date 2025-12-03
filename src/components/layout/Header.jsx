import React from 'react';
import { Menu, User } from 'lucide-react';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-ocean-100 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-ocean-600 to-primary bg-clip-text text-transparent">
                        Unified Water Supply Command Dashboard
                    </h1>
                    <nav className="text-sm text-slate-500 mt-1 font-medium flex gap-2 items-center">
                        <span className="hover:text-ocean-600 cursor-pointer transition-colors">Mega</span>
                        <span className="text-slate-300">•</span>
                        <span className="hover:text-ocean-600 cursor-pointer transition-colors">Mini Mega</span>
                        <span className="text-slate-300">•</span>
                        <span className="hover:text-ocean-600 cursor-pointer transition-colors">Mini</span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs uppercase tracking-wider text-slate-400">Intake → WTP → CWPH → ESR → Village</span>
                    </nav>
                </div>
                <div className="text-right text-sm">
                    <div className="flex items-center justify-end gap-3">
                        <div className="flex items-center gap-2 px-3 py-1 bg-ocean-50 rounded-full border border-ocean-100">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-ocean-700 font-medium">Live Sync</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-2 mt-2 text-slate-600">
                        <User size={16} className="text-ocean-500" />
                        <span>Logged in as: <strong className="text-slate-800">State HQ (Admin)</strong></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
