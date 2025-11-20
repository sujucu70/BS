import React from 'react';

interface LoadingProps {
    size?: 'sm' | 'md' | 'lg';
    text?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = 'md', text }) => {
    const sizeClasses = {
        sm: 'w-6 h-6 border-2',
        md: 'w-12 h-12 border-3',
        lg: 'w-16 h-16 border-4'
    };

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <div className={`${sizeClasses[size]} border-[#1e3a5f] border-t-transparent rounded-full animate-spin`}></div>
            {text && <p className="mt-4 text-gray-600 text-sm">{text}</p>}
        </div>
    );
};

export default Loading;
