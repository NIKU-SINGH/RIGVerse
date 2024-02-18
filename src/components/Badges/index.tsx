import React from 'react';
import { Tag, CheckCircle, Lock } from 'lucide-react';

// On Sale Badge
export const OnSaleBadge = () => {
    return (
        <div className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-xl flex items-center">
            <Tag className="text-black mr-1" size={16} />
            On Sale
        </div>
    );
};

// Purchased Badge
export const PurchasedBadge = () => {
    return (
        <div className="bg-green-400 text-black text-sm font-bold px-3 py-1 rounded-xl flex items-center">
            <CheckCircle className="text-black mr-1" size={16} />
            Purchased
        </div>
    );
};

// Require Game Pass Badge
export const RequireGamePassBadge = () => {
    return (
        <div className="bg-red-200 text-black text-sm font-bold px-3 py-1 rounded-xl flex items-center">
            <Lock className="text-black mr-1" size={16} />
            Require Game Pass
        </div>
    );
};
