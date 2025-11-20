
import React, { useState, useCallback } from 'react';
import { PlaybookSection } from './types';
import PlaybookHome from './components/PlaybookHome';
import StrategyGuide from './components/StrategyGuide';
import SalesBlueprint from './components/SalesBlueprint';
import MethodologyTools from './components/MethodologyTools';
import OperatingModel from './components/OperatingModel';
import BookingVP from './components/solutions/BookingVP';
import FcrVP from './components/solutions/FcrVP';
import IvrVP from './components/solutions/IvrVP';
import OrderVP from './components/solutions/OrderVP';
import BackToTop from './components/shared/BackToTop';
import CaseStudies from './components/CaseStudies';
import SalesPlays from './components/SalesPlays';
import ROICalculator from './components/ROICalculator';
import EmailTemplates from './components/EmailTemplates';
import CompetitiveBattlecards from './components/CompetitiveBattlecards';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<PlaybookSection>(PlaybookSection.HOME);

    const navigateTo = useCallback((section: PlaybookSection) => {
        setActiveSection(section);
        window.scrollTo(0, 0);
    }, []);

    const renderSection = () => {
        switch (activeSection) {
            case PlaybookSection.STRATEGY:
                return <StrategyGuide />;
            case PlaybookSection.BLUEPRINT:
                return <SalesBlueprint />;
            case PlaybookSection.METHODOLOGY:
                return <MethodologyTools />;
            case PlaybookSection.OPERATIONS:
                return <OperatingModel />;
            
            // Strategic content sections
            case PlaybookSection.CASE_STUDIES:
                return <CaseStudies />;
            case PlaybookSection.SALES_PLAYS:
                return <SalesPlays />;
            case PlaybookSection.ROI_CALCULATOR:
                return <ROICalculator />;
            case PlaybookSection.EMAIL_TEMPLATES:
                return <EmailTemplates />;
            case PlaybookSection.COMPETITIVE:
                return <CompetitiveBattlecards />;
            
            // Solution pages
            case PlaybookSection.BOOKING_VP:
                return <BookingVP />;
            case PlaybookSection.FCR_VP:
                return <FcrVP />;
            case PlaybookSection.IVR_VP:
                return <IvrVP />;
            case PlaybookSection.ORDER_VP:
                return <OrderVP />;
            
            case PlaybookSection.HOME:
            default:
                return <PlaybookHome onNavigate={navigateTo} />;
        }
    };

    const [showToolsMenu, setShowToolsMenu] = useState(false);

    const navItems = [
        { section: PlaybookSection.HOME, label: 'Inicio' },
        { section: PlaybookSection.STRATEGY, label: '1. Estrategia' },
        { section: PlaybookSection.BLUEPRINT, label: '2. Blueprint' },
        { section: PlaybookSection.METHODOLOGY, label: '3. Metodología' },
        { section: PlaybookSection.OPERATIONS, label: '4. Operaciones' },
    ];

    const toolsItems = [
        { section: PlaybookSection.CASE_STUDIES, label: 'Case Studies', icon: '📊' },
        { section: PlaybookSection.SALES_PLAYS, label: 'Sales Plays', icon: '🎯' },
        { section: PlaybookSection.ROI_CALCULATOR, label: 'ROI Calculator', icon: '💰' },
        { section: PlaybookSection.EMAIL_TEMPLATES, label: 'Email Templates', icon: '✉️' },
        { section: PlaybookSection.COMPETITIVE, label: 'Competitive Intel', icon: '⚔️' },
    ];

    return (
        <div className="min-h-screen bg-[#f8f9fa] text-gray-800">
            <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">📊</span>
                            <span className="font-bold text-xl text-[#1e3a5f]" style={{fontFamily: 'Playfair Display, serif'}}>BeyondCX</span>
                            <span className="hidden sm:inline text-sm text-gray-500 ml-2">Sales Playbook</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map(item => (
                                    <button
                                        key={item.section}
                                        onClick={() => navigateTo(item.section)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === item.section ? 'bg-[#1e3a5f] text-white shadow-sm' : 'text-gray-700 hover:bg-gray-100 hover:text-[#1e3a5f]'}`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                                {/* Tools Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={() => setShowToolsMenu(!showToolsMenu)}
                                        className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-700 hover:bg-gray-100 hover:text-[#1e3a5f] flex items-center gap-1"
                                    >
                                        🛠️ Herramientas
                                        <svg className={`w-4 h-4 transition-transform ${showToolsMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {showToolsMenu && (
                                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                                            {toolsItems.map(tool => (
                                                <button
                                                    key={tool.section}
                                                    onClick={() => {
                                                        navigateTo(tool.section);
                                                        setShowToolsMenu(false);
                                                    }}
                                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                                                >
                                                    <span>{tool.icon}</span>
                                                    <span>{tool.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                {renderSection()}
            </main>
            <BackToTop />
        </div>
    );
};

export default App;
