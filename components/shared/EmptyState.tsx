import React from 'react';

interface EmptyStateProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, action }) => {
    return (
        <div className="flex flex-col items-center justify-center p-12 text-center">
            {icon && (
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-400">
                    {icon}
                </div>
            )}
            <h3 className="text-xl font-bold text-gray-800 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                {title}
            </h3>
            {description && (
                <p className="text-gray-600 mb-6 max-w-md">
                    {description}
                </p>
            )}
            {action && (
                <button
                    onClick={action.onClick}
                    className="bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white font-semibold py-3 px-8 rounded-lg transition-all"
                >
                    {action.label}
                </button>
            )}
        </div>
    );
};

export default EmptyState;
