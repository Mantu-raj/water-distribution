import React from 'react';
import Header from './Header';

const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-ocean-50 via-white to-ocean-100 font-sans text-slate-900">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
