import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const KPICard = ({ title, value, subtext, subtextClass, footer, className }) => {
    return (
        <div className={twMerge(
            "bg-white rounded-lg shadow-soft border border-ocean-100 p-3 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-ocean-200 relative overflow-hidden group",
            className
        )}>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-ocean-50 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{title}</h4>
                <div className="text-lg font-bold text-slate-800 mb-1 tracking-tight">{value}</div>
                {subtext && (
                    <div className={twMerge("text-xs font-medium flex items-center gap-1", subtextClass || "text-slate-500")}>
                        {subtext}
                    </div>
                )}
            </div>
            {footer && (
                <div className="mt-2 text-xs text-slate-400 border-t border-slate-100 pt-2 relative z-10">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default KPICard;
