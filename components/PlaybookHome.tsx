
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
            description: 'ICP, Segmentación, Narrativa de Valor y Messaging.',
            section: PlaybookSection.STRATEGY,
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        },
        {
            title: '2. Sales Process Blueprint',
            description: 'Funnel de Ventas: etapas, actividades clave y criterios de salida.',
            section: PlaybookSection.BLUEPRINT,
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
        },
        {
            title: '3. Metodología',
            description: 'Frameworks y metodologías de ventas consultivas (MEDDICC, SPIN).',
            section: PlaybookSection.METHODOLOGY,
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        },
        {
            title: '4. Modelo Operativo',
            description: 'Gobernanza, Higiene del Dato, Rituales y Dashboards.',
            section: PlaybookSection.OPERATIONS,
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
        }
    ];

    const tools = [
        { title: 'Discovery Scripts', description: 'Guiones MEDDICC por categoría', section: PlaybookSection.DISCOVERY_SCRIPTS, icon: '❓' },
        { title: 'Pricing & Negotiation', description: 'Objeciones y framework de negociación', section: PlaybookSection.PRICING_NEGOTIATION, icon: '💵' },
        { title: 'Case Studies', description: 'Casos de éxito con métricas', section: PlaybookSection.CASE_STUDIES, icon: '📊' },
        { title: 'Sales Plays', description: '20 plays por fase del ciclo', section: PlaybookSection.SALES_PLAYS, icon: '🎯' },
        { title: 'ROI Calculator', description: 'Calculadora de retorno de inversión', section: PlaybookSection.ROI_CALCULATOR, icon: '💰' },
        { title: 'Email Templates', description: '15 templates por etapa', section: PlaybookSection.EMAIL_TEMPLATES, icon: '✉️' },
        { title: 'Competitive Intel', description: 'Battlecards y análisis SWOT', section: PlaybookSection.COMPETITIVE, icon: '⚔️' }
    ];

    return (
        <div className="container mx-auto p-4 md:p-8">
            <header className="text-center py-16 md:py-24">
                <h1 className="text-5xl md:text-7xl font-bold text-[#3F3F3F] tracking-tight mb-6" style={{fontFamily: 'Outfit, sans-serif'}}>
                    BeyondCX Sales Playbook
                </h1>
                <p className="text-xl md:text-2xl text-[#B1B1B0] mt-4 max-w-3xl mx-auto leading-relaxed">
                    Framework Estratégico para Equipos Comerciales
                </p>
            </header>
            <main>
                <section id="pillars" className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto">
                        {pillars.map(pillar => <PillarCard key={pillar.section} {...pillar} onNavigate={onNavigate} />)}
                    </div>
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
