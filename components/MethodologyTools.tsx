
import React, { useState } from 'react';
import PricingGuide from './PricingGuide';

// --- SUB COMPONENTS ---
const TabButton: React.FC<{ active: boolean; onClick: () => void; label: string; icon?: React.ReactNode }> = ({ active, onClick, label, icon }) => (
    <button
        onClick={onClick}
        className={`flex items-center justify-center px-6 py-4 text-sm md:text-base font-bold transition-all border-b-4 flex-1 ${
            active 
                ? 'border-[#6D84E3] text-[#6D84E3] bg-white' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
        }`}
    >
        <span className="mr-2">{icon}</span>
        {label}
    </button>
);

const PillarSection: React.FC<{ 
    number: string; 
    title: string; 
    conceptTitle: string; 
    conceptText: string; 
    children: React.ReactNode; 
}> = ({ number, title, conceptTitle, conceptText, children }) => (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-gray-50 p-4 border-b border-gray-200 flex items-center justify-between">
             <h3 className="text-lg font-bold text-gray-800 flex items-center">
                <span className="bg-[#6D84E3] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">{number}</span>
                {title}
            </h3>
        </div>
        <div className="p-6 md:p-8">
             <div className="bg-blue-50 border-l-4 border-[#6D84E3] p-4 mb-8 rounded-r-lg">
                <p className="text-xs font-bold text-[#6D84E3] uppercase mb-1">📘 Concepto Clave: {conceptTitle}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{conceptText}</p>
             </div>
             {children}
        </div>
    </div>
);

const MeddiccCard: React.FC<{ letter: string; title: string }> = ({ letter, title }) => (
    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg border border-gray-700 text-center min-w-[100px]">
        <span className="text-3xl font-black text-[#6D84E3] mb-1">{letter}</span>
        <span className="text-xs text-white font-medium">{title}</span>
    </div>
);

const ChecklistItem: React.FC<{ category: string; items: string[] }> = ({ category, items }) => (
    <div className="mb-6">
        <h4 className="font-bold text-[#6D84E3] border-b border-gray-200 pb-2 mb-3">{category}</h4>
        <ul className="space-y-2">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="mr-2 text-[#6D84E3]">❓</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const MethodologyTools: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'discovery' | 'objections' | 'resources'>('overview');

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f3f4f6] min-h-screen">
            <header className="text-center py-8">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">3. Metodología & Herramientas</h1>
                <p className="text-lg text-[#6D84E3] mt-2 font-medium">Los "Cómo" de nuestra venta.</p>
            </header>

            <div className="bg-white rounded-t-xl shadow-sm border-b border-gray-200 flex overflow-x-auto sticky top-16 z-30">
                <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} label="3A. Visión General" icon="👁️" />
                <TabButton active={activeTab === 'discovery'} onClick={() => setActiveTab('discovery')} label="3B. Guiones Discovery" icon="🔍" />
                <TabButton active={activeTab === 'objections'} onClick={() => setActiveTab('objections')} label="3C. Manejo Objeciones" icon="🛡️" />
                <TabButton active={activeTab === 'resources'} onClick={() => setActiveTab('resources')} label="3D. Recursos" icon="📂" />
            </div>

            <main className="bg-white rounded-b-xl shadow-lg p-6 md:p-10 min-h-[500px]">
                
                {/* TAB 3A: VISION GENERAL */}
                {activeTab === 'overview' && (
                    <div className="animate-fade-in space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">1. Principios de Nuestra Moción de Venta</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                                {[
                                    { t: "Educación Primero", d: "Creamos categoría. El cliente debe entender el 'Por qué ahora'." },
                                    { t: "Compromiso Mutuo", d: "No trabajamos gratis. Si nosotros invertimos recursos, ellos también." },
                                    { t: "Valor > Precio", d: "Hablamos de ROI y eficiencia, no de coste por hora." },
                                    { t: "Escalabilidad", d: "Procesos diseñados para ser repetibles." },
                                    { t: "Portfolio Entry", d: "Empezamos pequeño (Piloto), escalamos rápido." }
                                ].map((p, i) => (
                                    <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#6D84E3] transition-colors">
                                        <h4 className="font-bold text-[#6D84E3] text-sm mb-2">{p.t}</h4>
                                        <p className="text-xs text-gray-500">{p.d}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-800 pb-2 border-b border-gray-200">2. Los 3 Pilares de la Metodología</h2>
                            </div>

                            <PillarSection number="2.1" title="Manifiesto BPO 2.0" conceptTitle="¿Qué es BPO 2.0?" conceptText="Es la evolución del outsourcing tradicional. En lugar de alquilar personas por hora (input), las empresas contratan resultados operativos (output) garantizados por tecnología, pagando por resolución y no por esfuerzo.">
                                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                    <div className="text-5xl">🎯</div>
                                    <div>
                                        <p className="text-xl text-gray-800 font-medium italic leading-relaxed">"No vendemos servicios, vendemos Resultados de Negocio. Nos posicionamos como educadores que diagnostican y co-crean valor."</p>
                                    </div>
                                </div>
                            </PillarSection>

                            <PillarSection number="2.2" title="Ciclo Consultivo (TOFU-MOFU-BOFU)" conceptTitle="El Embudo de Ventas" conceptText="Dividimos el proceso en 3 fases: Top (Consciencia), Middle (Evaluación) y Bottom (Decisión) para aplicar las herramientas correctas.">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                                        <div className="text-blue-600 font-black text-xl mb-1">TOFU</div>
                                        <div className="text-xs font-bold uppercase tracking-wide text-gray-500">Educación</div>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
                                        <div className="text-green-600 font-black text-xl mb-1">MOFU</div>
                                        <div className="text-xs font-bold uppercase tracking-wide text-gray-500">Cualificación</div>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-center">
                                        <div className="text-orange-600 font-black text-xl mb-1">BOFU</div>
                                        <div className="text-xs font-bold uppercase tracking-wide text-gray-500">Cierre</div>
                                    </div>
                                </div>
                            </PillarSection>

                            <PillarSection number="2.3" title="Rigor MEDDICC" conceptTitle="¿Qué es MEDDICC?" conceptText="Es el checklist mental que nos dice si vamos a ganar o perder un trato. Si no puedes responder a cada letra, estás volando a ciegas.">
                                <div className="bg-gray-900 rounded-xl p-8 text-white shadow-inner">
                                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                                        <MeddiccCard letter="M" title="Metrics" />
                                        <MeddiccCard letter="E" title="Economic Buyer" />
                                        <MeddiccCard letter="D" title="Decision Criteria" />
                                        <MeddiccCard letter="D" title="Decision Process" />
                                        <MeddiccCard letter="I" title="Identify Pain" />
                                        <MeddiccCard letter="C" title="Champion" />
                                        <MeddiccCard letter="C" title="Competition" />
                                    </div>
                                </div>
                            </PillarSection>
                        </section>
                    </div>
                )}

                {/* TAB 3B: DISCOVERY SCRIPTS */}
                {activeTab === 'discovery' && (
                    <div className="animate-fade-in">
                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-8">
                            <div className="flex items-center mb-6 border-b border-blue-200 pb-4">
                                <span className="text-4xl mr-4">🔍</span>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800">Guiones de Discovery (MEDDICC)</h2>
                                    <p className="text-blue-800">Las preguntas exactas para extraer la información crítica.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                <div>
                                    <ChecklistItem 
                                        category="Volumetría y Canales" 
                                        items={[
                                            "¿Cuál es el volumen total de interacciones mensuales? (Voz, Chat, Email)",
                                            "¿Cómo se distribuye ese volumen? (Ej: 70% voz, 30% email)",
                                            "¿Tienen estacionalidad marcada? (Black Friday, Verano, Campañas)",
                                            "¿Cuál es la duración media de la llamada (AHT/TMO) actual?",
                                            "¿Cuál es el horario de atención actual y el deseado (24/7)?"
                                        ]} 
                                    />
                                    <ChecklistItem 
                                        category="Costes y Eficiencia (Pain)" 
                                        items={[
                                            "¿Cuál es el coste por contacto estimado actual? (Interno o externo)",
                                            "¿Cuántos FTEs (agentes equivalentes) tienen dedicados hoy?",
                                            "¿Cuál es la tasa de rotación de agentes anual?",
                                            "¿Qué % de llamadas se abandonan antes de ser atendidas?"
                                        ]} 
                                    />
                                </div>
                                <div>
                                    <div className="bg-white p-6 rounded-xl border border-blue-200 mb-8 shadow-sm">
                                        <h4 className="font-bold text-blue-800 mb-4">El Framework MEDDICC (Preguntas Clave)</h4>
                                        <ul className="space-y-3 text-sm text-gray-700">
                                            <li><strong>M (Metrics):</strong> ¿Qué KPI numérico mejoraremos?</li>
                                            <li><strong>E (Economic Buyer):</strong> ¿Quién tiene el presupuesto final?</li>
                                            <li><strong>D (Decision Criteria):</strong> ¿Qué es más importante: Precio, Técnica o Confianza?</li>
                                            <li><strong>I (Identify Pain):</strong> ¿Qué problema te quita el sueño?</li>
                                            <li><strong>C (Champion):</strong> ¿Quién nos vende internamente cuando no estamos?</li>
                                        </ul>
                                    </div>
                                    <ChecklistItem 
                                        category="Tecnología y Stack" 
                                        items={[
                                            "¿Qué CRM utilizan? (Salesforce, HubSpot, Zendesk, Propio)",
                                            "¿Qué sistema de telefonía/Contact Center tienen?",
                                            "¿Tienen API disponible para integración?",
                                            "¿Ya usan algún bot o IVR? ¿Qué tal funciona?"
                                        ]} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 3C: OBJECTIONS (PRICING GUIDE) */}
                {activeTab === 'objections' && (
                    <div className="animate-fade-in">
                         <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-8">
                            <p className="text-sm text-yellow-800">Esta sección integra nuestra filosofía de precios y cómo manejar la resistencia económica.</p>
                        </div>
                        <PricingGuide />
                    </div>
                )}

                {/* TAB 3D: RESOURCES */}
                {activeTab === 'resources' && (
                    <div className="animate-fade-in">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Centro de Descargas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { name: 'Secuencia Email Outbound', type: '📧' },
                                { name: 'One-Pager General', type: '📄' },
                                { name: 'Guion Discovery', type: '📄' },
                                { name: 'Deck Corporativo (Intro)', type: '📊' },
                                { name: 'Calculadora ROI Preliminar', type: '📗' },
                                { name: 'Template Diagnóstico Light', type: '📄' },
                                { name: 'Checklist Técnico', type: '📄' },
                                { name: 'Guion de Demo Híbrida', type: '📄' },
                                { name: 'Modelo Propuesta Económica', type: '📄' },
                                { name: 'Business Case Detallado', type: '📊' },
                                { name: 'MSA (Contrato Marco)', type: '📄' },
                                { name: 'Kickoff Deck Template', type: '📊' }
                            ].map((res, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center justify-between cursor-pointer" onClick={() => alert('Descargando ' + res.name)}>
                                    <div className="flex items-center">
                                        <span className="text-2xl mr-3">{res.type}</span>
                                        <span className="font-medium text-gray-700">{res.name}</span>
                                    </div>
                                    <span className="text-[#6D84E3]">⬇</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default MethodologyTools;
