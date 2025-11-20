
import React, { useState } from 'react';
import ClientManifesto from './ClientManifesto';
import ConversationArsenal from './ConversationArsenal';
import { PlaybookSection } from '../types';

const TabButton: React.FC<{ active: boolean; onClick: () => void; label: string; icon?: React.ReactNode }> = ({ active, onClick, label, icon }) => (
    <button
        onClick={onClick}
        className={`flex items-center justify-center px-6 py-4 text-sm md:text-base font-bold transition-all border-b-4 flex-1 ${
            active 
                ? 'border-[#6D84E3] text-[#6D84E3] bg-white' 
                : 'border-transparent text-[#B1B1B0] hover:text-[#3F3F3F] hover:bg-[#E4E3E3]'
        }`}
    >
        <span className="mr-2">{icon}</span>
        {label}
    </button>
);

const StrategyGuide: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'client' | 'message'>('client');

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f3f4f6] min-h-screen">
            <header className="text-center py-8">
                <h1 className="text-3xl md:text-5xl font-bold text-[#3F3F3F] tracking-tight">1. Estrategia & Posicionamiento</h1>
                <p className="text-lg text-[#6D84E3] mt-2 font-medium">A quién vendemos y qué les decimos.</p>
            </header>

            <div className="bg-white rounded-t-xl shadow-sm border-b border-gray-200 flex sticky top-16 z-30">
                <TabButton active={activeTab === 'client'} onClick={() => setActiveTab('client')} label="1A. El Cliente (ICP & Targeting)" icon="🎯" />
                <TabButton active={activeTab === 'message'} onClick={() => setActiveTab('message')} label="1B. El Mensaje (Narrativa)" icon="📣" />
            </div>

            <main className="bg-white rounded-b-xl shadow-lg min-h-[500px]">
                {activeTab === 'client' && <div className="p-4"><ClientManifesto /></div>}
                {activeTab === 'message' && <div className="p-4"><ConversationArsenal onNavigate={() => {}} /></div>}
            </main>
        </div>
    );
};

export default StrategyGuide;
