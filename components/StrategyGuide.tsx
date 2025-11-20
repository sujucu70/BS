
import React, { useState } from 'react';
import ClientManifesto from './ClientManifesto';
import ConversationArsenal from './ConversationArsenal';
import { PlaybookSection } from '../types';

const TabButton: React.FC<{ active: boolean; onClick: () => void; label: string; icon?: React.ReactNode }> = ({ active, onClick, label, icon }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-8 py-4 text-sm font-semibold transition-all rounded-t-lg ${
            active 
                ? 'bg-[#6D84E3] text-white shadow-md' 
                : 'bg-[#E4E3E3] text-[#B1B1B0] hover:text-[#3F3F3F] hover:bg-white'
        }`}
    >
        <span className="text-lg">{icon}</span>
        <span>{label}</span>
    </button>
);

const StrategyGuide: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'client' | 'message'>('client');

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f3f4f6] min-h-screen">
            <header className="py-8">
                <h1 className="text-3xl font-bold text-[#3F3F3F] mb-2" style={{fontFamily: 'Outfit, sans-serif'}}>1. Estrategia & Posicionamiento</h1>
                <p className="text-base text-[#B1B1B0]">A quién vendemos y qué les decimos</p>
            </header>

            <div className="flex gap-2 mb-6">
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
