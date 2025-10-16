import React, { useState, useCallback } from 'react';
import { PlaybookSection } from './types';
import PlaybookHome from './components/PlaybookHome';
import ProcessGuide from './components/ProcessGuide';
import ClientManifesto from './components/ClientManifesto';
import ConversationArsenal from './components/ConversationArsenal';
import PricingGuide from './components/PricingGuide';
import BookingVP from './components/solutions/BookingVP';
import FcrVP from './components/solutions/FcrVP';
import IvrVP from './components/solutions/IvrVP';
import OrderVP from './components/solutions/OrderVP';
import { useFeedback } from './hooks/useFeedback';
import FeedbackModal from './components/shared/FeedbackModal';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<PlaybookSection>(PlaybookSection.HOME);
    const { isModalOpen, closeModal, handleFeedbackSubmit, resetTimer } = useFeedback();

    const navigateTo = useCallback((section: PlaybookSection) => {
        setActiveSection(section);
        window.scrollTo(0, 0);
        resetTimer();
    }, [resetTimer]);

    const renderSection = () => {
        switch (activeSection) {
            case PlaybookSection.PROCESS:
                return <ProcessGuide />;
            case PlaybookSection.CLIENT:
                return <ClientManifesto />;
            case PlaybookSection.MESSAGE:
                return <ConversationArsenal onNavigate={navigateTo} />;
            case PlaybookSection.PRICING:
                return <PricingGuide />;
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

    const navItems = [
        { section: PlaybookSection.HOME, label: 'Inicio' },
        { section: PlaybookSection.PROCESS, label: '1. El Proceso' },
        { section: PlaybookSection.CLIENT, label: '2. El Cliente' },
        { section: PlaybookSection.MESSAGE, label: '3. El Mensaje' },
        { section: PlaybookSection.PRICING, label: '4. El Precio' },
    ];

    return (
        <div className="min-h-screen bg-[#e3e3e3] text-gray-800">
            <FeedbackModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                onSubmit={handleFeedbackSubmit}
            />
            <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <span className="font-bold text-xl text-[#6D84E3]">BeyondCX Sales Playbook</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map(item => (
                                    <button
                                        key={item.section}
                                        onClick={() => navigateTo(item.section)}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === item.section ? 'bg-[#6D84E3] text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                {renderSection()}
            </main>
        </div>
    );
};

export default App;