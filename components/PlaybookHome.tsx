
import React from 'react';
import { PlaybookSection } from '../types';

interface PlaybookHomeProps {
    onNavigate: (section: PlaybookSection) => void;
}

const PillarCard: React.FC<{ title: string; description: string; section: PlaybookSection; onNavigate: (section: PlaybookSection) => void; icon: React.ReactNode; }> = ({ title, description, section, onNavigate, icon }) => (
    <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center text-center transition-transform transform hover:-translate-y-2">
        <div className="mx-auto bg-blue-100 text-[#6D84E3] w-20 h-20 rounded-full flex items-center justify-center mb-6">{icon}</div>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 font-light mt-4 mb-8 flex-grow">{description}</p>
        <button onClick={() => onNavigate(section)} className="inline-block bg-[#6D84E3] hover:bg-[#5a6fbf] text-white font-bold py-3 px-10 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all">
            Ver
        </button>
    </div>
);


const PlaybookHome: React.FC<PlaybookHomeProps> = ({ onNavigate }) => {
    const pillars = [
        {
            title: '1. El Proceso',
            description: 'La guía paso a paso de nuestro camino de venta. Define las 7 etapas, tus acciones clave en HubSpot y los criterios de avance.',
            section: PlaybookSection.PROCESS,
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        },
        {
            title: '2. El Cliente',
            description: 'El manifiesto de nuestro Cliente Ideal. Aprende a identificarlo (ICP), qué dolores tiene y cómo cualificarlo eficazmente.',
            section: PlaybookSection.CLIENT,
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        },
        {
            title: '3. El Mensaje',
            description: 'Tu arsenal de conversación. Contiene nuestra Propuesta de Valor, guiones de descubrimiento y manejo de objeciones.',
            section: PlaybookSection.MESSAGE,
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
        },
        {
            title: '4. El Valor y el Precio',
            description: 'Cómo construir un caso de negocio sólido, presentar el precio como una inversión lógica y manejar la negociación.',
            section: PlaybookSection.PRICING,
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01V5M12 20v-1m0 1v.01M12 18v-1m0-1v-1m0-1v-1m0-1V9m0 9v-1m0-1V9m0-1V7m0-1V4"></path></svg>
        }
    ];

    return (
        <div className="container mx-auto p-4 md:p-8">
            <header className="text-center py-16">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 tracking-tight">BeyondCX Sales Playbook</h1>
                <p className="text-xl md:text-2xl text-[#6D84E3] mt-4 font-light">Define cómo nos presentamos al mercado, cómo aportamos valor y cómo escalamos de manera predecible</p>
            </header>
            <main>
                <section id="pillars" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto">
                    {pillars.map(pillar => <PillarCard key={pillar.section} {...pillar} onNavigate={onNavigate} />)}
                </section>
            </main>
            <footer className="text-center py-16 mt-8">
                <p className="text-xl font-medium text-gray-700">BeyondCX: Construyendo un motor de ingresos predecible.</p>
            </footer>
        </div>
    );
};

export default PlaybookHome;