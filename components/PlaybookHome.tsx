
import React from 'react';
import { PlaybookSection } from '../types';

interface PlaybookHomeProps {
    onNavigate: (section: PlaybookSection) => void;
}

const PillarCard: React.FC<{ title: string; description: string; section: PlaybookSection; onNavigate: (section: PlaybookSection) => void; icon: React.ReactNode; }> = ({ title, description, section, onNavigate, icon }) => (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-xl hover:border-[#6D84E3] h-full group">
        <div className="mx-auto bg-gradient-to-br from-[#6D84E3] to-[#3F3F3F] text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{icon}</div>
        <h2 className="text-2xl font-bold text-[#3F3F3F]" style={{fontFamily: 'Outfit, sans-serif'}}>{title}</h2>
        <p className="text-[#B1B1B0] mt-4 mb-8 flex-grow text-sm leading-relaxed">{description}</p>
        <button onClick={() => onNavigate(section)} className="inline-block bg-[#6D84E3] hover:bg-[#3F3F3F] text-white font-semibold py-3 px-10 rounded-lg text-base shadow-sm hover:shadow-md transition-all">
            Explorar
        </button>
    </div>
);

const PlaybookHome: React.FC<PlaybookHomeProps> = ({ onNavigate }) => {
    const pillars = [
        {
            title: '1. Estrategia & Posicionamiento',
            description: 'Definición del Cliente Ideal (ICP), Segmentación y nuestra Narrativa de Valor única (Messaging).',
            section: PlaybookSection.STRATEGY,
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        },
        {
            title: '2. Sales Process Blueprint',
            description: 'El mapa detallado del Funnel de Ventas. Etapas, actividades clave y criterios de salida (Gatekeepers).',
            section: PlaybookSection.BLUEPRINT,
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
        },
        {
            title: '3. Metodología & Herramientas',
            description: 'Los "Cómo": Guiones de Discovery (MEDDICC), Manejo de Objeciones y Recursos descargables.',
            section: PlaybookSection.METHODOLOGY,
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
        },
        {
            title: '4. Modelo Operativo',
            description: 'Gobernanza, Higiene del Dato en CRM, Rituales de Gestión y Cuadros de Mando.',
            section: PlaybookSection.OPERATIONS,
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
        }
    ];

    return (
        <div className="container mx-auto p-4 md:p-8">
            <header className="text-center py-16 md:py-24">
                <div className="inline-block bg-gradient-to-r from-[#6D84E3] to-[#3F3F3F] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    🚀 Sales Enablement Framework
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-[#3F3F3F] tracking-tight mb-6" style={{fontFamily: 'Outfit, sans-serif'}}>
                    BeyondCX Sales Playbook
                </h1>
                <p className="text-xl md:text-2xl text-[#B1B1B0] mt-4 max-w-3xl mx-auto leading-relaxed">
                    Framework Estratégico para Equipos Comerciales de Alto Rendimiento
                </p>
            </header>
            <main>
                <section id="pillars" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto">
                    {pillars.map(pillar => <PillarCard key={pillar.section} {...pillar} onNavigate={onNavigate} />)}
                </section>
            </main>
             <footer className="text-center py-16 mt-16">
                <div className="max-w-2xl mx-auto">
                    <p className="text-2xl font-bold text-[#3F3F3F] mb-4" style={{fontFamily: 'Outfit, sans-serif'}}>
                        Construyendo un motor de ingresos predecible
                    </p>
                    <p className="text-[#B1B1B0]">
                        Metodologías probadas • Procesos escalables • Resultados medibles
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default PlaybookHome;
