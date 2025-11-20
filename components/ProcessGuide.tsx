
import React, { useState } from 'react';
import MeddiccImpactChart from './charts/MeddiccImpactChart';
import PipelineHealthChart from './charts/PipelineHealthChart';

// --- TYPES ---

interface Artifact {
    name: string;
    type: 'doc' | 'deck' | 'email' | 'sheet';
    url?: string;
}

// --- SUB-COMPONENTS FOR UI ---

const TabButton: React.FC<{ active: boolean; onClick: () => void; label: string; icon?: React.ReactNode }> = ({ active, onClick, label, icon }) => (
    <button
        onClick={onClick}
        className={`flex items-center justify-center px-6 py-4 text-sm md:text-base font-bold transition-all border-b-4 ${
            active 
                ? 'border-[#6D84E3] text-[#6D84E3] bg-white' 
                : 'border-transparent text-[#B1B1B0] hover:text-[#3F3F3F] hover:bg-[#E4E3E3]'
        }`}
    >
        <span className="mr-2">{icon}</span>
        {label}
    </button>
);

const ArtifactChip: React.FC<{ artifact: Artifact }> = ({ artifact }) => {
    const getIcon = (type: string) => {
        switch(type) {
            case 'deck': return '📊';
            case 'email': return '📧';
            case 'sheet': return '📗';
            case 'doc': default: return '📄';
        }
    };

    return (
        <button 
            className="flex items-center bg-white border border-gray-200 hover:border-[#6D84E3] hover:bg-blue-50 text-xs font-medium text-[#3F3F3F] px-3 py-2 rounded-md transition-all shadow-sm group"
            onClick={() => alert(`Descargando plantilla: ${artifact.name}...`)}
        >
            <span className="mr-2 text-base">{getIcon(artifact.type)}</span>
            <span>{artifact.name}</span>
            <span className="ml-2 opacity-0 group-hover:opacity-100 text-[#6D84E3]">⬇</span>
        </button>
    );
};

const PillarSection: React.FC<{ 
    number: string; 
    title: string; 
    conceptTitle: string; 
    conceptText: string; 
    children: React.ReactNode; 
}> = ({ number, title, conceptTitle, conceptText, children }) => (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-[#E4E3E3] p-4 border-b border-gray-200 flex items-center justify-between">
             <h3 className="text-lg font-bold text-[#3F3F3F] flex items-center">
                <span className="bg-[#6D84E3] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">{number}</span>
                {title}
            </h3>
        </div>
        <div className="p-6 md:p-8">
             {/* Concept Block */}
             <div className="bg-blue-50 border-l-4 border-[#6D84E3] p-4 mb-8 rounded-r-lg">
                <p className="text-xs font-bold text-[#6D84E3] uppercase mb-1">📘 Concepto Clave: {conceptTitle}</p>
                <p className="text-sm text-[#3F3F3F] leading-relaxed">{conceptText}</p>
             </div>
             {/* Content */}
             {children}
        </div>
    </div>
);

const BlueprintCard: React.FC<{ 
    stage: string; 
    title: string; 
    objective: string; 
    gatekeeper: string; 
    hubspot: React.ReactNode; 
    roles: string;
    artifacts: Artifact[];
    isLast?: boolean 
}> = ({ stage, title, objective, gatekeeper, hubspot, roles, artifacts, isLast }) => (
    <div className="relative pl-12 md:pl-16 py-2">
        {/* Timeline Line */}
        {!isLast && (
            <div className="absolute left-[1.35rem] md:left-[1.85rem] top-12 bottom-0 w-1 bg-gray-200"></div>
        )}
        
        {/* Stage Number Badge */}
        <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-[#6D84E3] rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
            <span className="text-white font-black text-lg md:text-2xl">{stage}</span>
        </div>

        {/* Card Content */}
        <div className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all hover:shadow-xl ml-4`}>
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Header */}
                <div className="lg:col-span-4 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100 pb-4 lg:pb-0 lg:pr-4">
                    <h3 className="text-2xl font-bold text-[#3F3F3F]">{title}</h3>
                    <p className="text-sm text-[#6D84E3] font-bold mt-1 uppercase tracking-wide">Objetivo</p>
                    <p className="text-sm text-[#B1B1B0] mt-1">{objective}</p>
                    <div className="mt-4 flex items-center">
                        <span className="text-xs font-bold bg-[#E4E3E3] text-[#B1B1B0] px-2 py-1 rounded">Roles: {roles}</span>
                    </div>
                </div>

                {/* Operational Core */}
                <div className="lg:col-span-4 flex flex-col space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                        <p className="text-xs font-bold text-blue-800 uppercase mb-2 flex items-center">
                            <span className="mr-1">🛠</span> Misión en HubSpot
                        </p>
                        <div className="text-sm text-[#3F3F3F] space-y-1 pl-1">{hubspot}</div>
                    </div>
                    
                    <div>
                        <p className="text-xs font-bold text-[#B1B1B0] uppercase mb-2">📂 Plantillas & Entregables</p>
                        <div className="flex flex-wrap gap-2">
                            {artifacts.map((art, idx) => <ArtifactChip key={idx} artifact={art} />)}
                        </div>
                    </div>
                </div>

                {/* Gatekeeper (Exit Criteria) */}
                <div className="lg:col-span-4 flex flex-col justify-center">
                     <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <p className="text-xs font-bold text-yellow-800 uppercase tracking-wider mb-2">🔒 Gatekeeper (Exit Criteria)</p>
                        <p className="text-sm font-bold text-[#3F3F3F] italic">"{gatekeeper}"</p>
                        <p className="text-xs text-yellow-700 mt-2">Si la respuesta es NO, el deal no avanza.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ChecklistItem: React.FC<{ category: string; items: string[] }> = ({ category, items }) => (
    <div className="mb-6">
        <h4 className="font-bold text-[#6D84E3] border-b border-gray-200 pb-2 mb-3">{category}</h4>
        <ul className="space-y-2">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-[#3F3F3F]">
                    <input type="checkbox" className="mt-1 mr-3 text-[#6D84E3] focus:ring-[#6D84E3] rounded" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const RoleKpiCard: React.FC<{ role: string; northStar: string; inputs: string[]; outputs: string[]; color: string }> = ({ role, northStar, inputs, outputs, color }) => (
    <div className={`bg-white rounded-xl shadow border-t-4 ${color} p-6 flex flex-col h-full`}>
        <h3 className="text-lg font-bold text-[#3F3F3F] mb-1">{role}</h3>
        <div className="mb-4 pb-4 border-b border-gray-100">
            <p className="text-xs text-[#B1B1B0] uppercase font-bold">North Star Metric</p>
            <p className="text-xl font-black text-[#3F3F3F]">{northStar}</p>
        </div>
        <div className="flex-grow space-y-4">
            <div>
                <p className="text-xs text-[#B1B1B0] uppercase font-bold mb-2">Inputs (Esfuerzo)</p>
                <ul className="text-sm text-[#B1B1B0] space-y-1">
                    {inputs.map((i, idx) => <li key={idx} className="flex items-start"><span className="mr-2 text-gray-400">•</span>{i}</li>)}
                </ul>
            </div>
            <div>
                <p className="text-xs text-[#B1B1B0] uppercase font-bold mb-2">Outputs (Resultados)</p>
                <ul className="text-sm text-[#B1B1B0] space-y-1">
                    {outputs.map((o, idx) => <li key={idx} className="flex items-start"><span className="mr-2 text-gray-400">→</span>{o}</li>)}
                </ul>
            </div>
        </div>
    </div>
);

const MeddiccCard: React.FC<{ letter: string; title: string }> = ({ letter, title }) => (
    <div className="flex flex-col items-center p-4 bg-[#3F3F3F] rounded-lg border border-[#3F3F3F] text-center min-w-[100px]">
        <span className="text-3xl font-black text-[#6D84E3] mb-1">{letter}</span>
        <span className="text-xs text-white font-medium">{title}</span>
    </div>
);

const RaciRow: React.FC<{ task: string; deliverable: string; sdr: string; ae: string; mgr: string }> = ({ task, deliverable, sdr, ae, mgr }) => (
    <tr className="border-b border-gray-100 hover:bg-[#E4E3E3] transition-colors">
        <td className="py-3 px-4 text-sm font-medium text-[#3F3F3F] w-1/3">{task}</td>
        <td className="py-3 px-4 text-sm text-[#B1B1B0] italic border-r border-gray-100 w-1/3">{deliverable}</td>
        <td className="py-3 px-4 text-center text-xs font-bold text-[#B1B1B0] w-1/9">{sdr}</td>
        <td className="py-3 px-4 text-center text-xs font-bold text-[#B1B1B0] w-1/9">{ae}</td>
        <td className="py-3 px-4 text-center text-xs font-bold text-[#B1B1B0] w-1/9">{mgr}</td>
    </tr>
);

// --- MAIN COMPONENT ---

const ProcessGuide: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'blueprint' | 'ops'>('overview');
    const [showRaci, setShowRaci] = useState(false);

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f3f4f6] min-h-screen">
            
            {/* HEADER */}
            <header className="text-center py-10">
                <h1 className="text-4xl md:text-5xl font-bold text-[#3F3F3F] tracking-tight">Sales Process Blueprint</h1>
                <p className="text-xl text-[#6D84E3] mt-4 font-medium">Metodología Consultiva: Del Diagnóstico al Escalado</p>
            </header>

            {/* TABS NAVIGATION */}
            <div className="bg-white rounded-t-xl shadow-sm border-b border-gray-200 flex flex-wrap justify-center md:justify-start overflow-x-auto sticky top-16 z-30">
                <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} label="A. Visión General" icon="🔭" />
                <TabButton active={activeTab === 'blueprint'} onClick={() => setActiveTab('blueprint')} label="B. Funnel & Blueprint" icon="🗺️" />
                <TabButton active={activeTab === 'ops'} onClick={() => setActiveTab('ops')} label="C. Modelo Operativo" icon="⚙️" />
            </div>

            {/* CONTENT AREA */}
            <main className="bg-white rounded-b-xl shadow-lg p-6 md:p-10 min-h-[500px]">

                {/* TAB A: VISION GENERAL */}
                {activeTab === 'overview' && (
                    <div className="animate-fade-in space-y-12">
                        
                        {/* 1. PRINCIPIOS OPERATIVOS */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#3F3F3F] mb-6 pb-2 border-b border-gray-200">1. Principios de Nuestra Moción de Venta</h2>
                            <div className="prose max-w-none text-[#B1B1B0] mb-6">
                                <p className="text-lg">
                                    No somos vendedores de licencias; somos consultores de operaciones. Nuestra moción comercial está diseñada para reducir el riesgo percibido por el cliente y demostrar valor incremental antes de pedir grandes compromisos.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                                {[
                                    { t: "Educación Primero", d: "Creamos categoría. El cliente debe entender el 'Por qué ahora'." },
                                    { t: "Compromiso Mutuo", d: "No trabajamos gratis. Si nosotros invertimos recursos, ellos también." },
                                    { t: "Valor > Precio", d: "Hablamos de ROI y eficiencia, no de coste por hora." },
                                    { t: "Escalabilidad", d: "Procesos diseñados para ser repetibles." },
                                    { t: "Portfolio Entry", d: "Empezamos pequeño (Piloto), escalamos rápido." }
                                ].map((p, i) => (
                                    <div key={i} className="bg-[#E4E3E3] p-4 rounded-lg border border-gray-100 hover:border-[#6D84E3] transition-colors">
                                        <h4 className="font-bold text-[#6D84E3] text-sm mb-2">{p.t}</h4>
                                        <p className="text-xs text-[#B1B1B0]">{p.d}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 2. LOS 3 PILARES */}
                        <section>
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-[#3F3F3F] pb-2 border-b border-gray-200">2. Los 3 Pilares de la Metodología</h2>
                                <p className="text-[#B1B1B0] mt-2">Nuestra base estratégica para ganar en un mercado competitivo.</p>
                            </div>

                            {/* 2.1 MANIFESTO */}
                            <PillarSection 
                                number="2.1" 
                                title="Manifiesto BPO 2.0"
                                conceptTitle="¿Qué es BPO 2.0?"
                                conceptText="Es la evolución del outsourcing tradicional. En lugar de alquilar personas por hora (input), las empresas contratan resultados operativos (output) garantizados por tecnología, pagando por resolución y no por esfuerzo."
                            >
                                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                    <div className="text-5xl">🎯</div>
                                    <div>
                                        <p className="text-xl text-[#3F3F3F] font-medium italic leading-relaxed">
                                            "No vendemos servicios, vendemos Resultados de Negocio. Nos posicionamos como educadores que diagnostican y co-crean valor, no como vendedores transaccionales."
                                        </p>
                                    </div>
                                </div>
                            </PillarSection>

                            {/* 2.2 FRAMEWORK (TOFU/MOFU/BOFU) */}
                            <PillarSection 
                                number="2.2" 
                                title="Ciclo Consultivo (Framework TOFU-MOFU-BOFU)"
                                conceptTitle="El Embudo de Ventas"
                                conceptText="El viaje del cliente no es lineal, pero nuestra gestión sí debe serlo. Dividimos el proceso en 3 fases: Top (Consciencia), Middle (Evaluación) y Bottom (Decisión) para aplicar las herramientas correctas en el momento justo."
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                                        <div className="text-blue-600 font-black text-xl mb-1">TOFU</div>
                                        <div className="text-xs font-bold uppercase tracking-wide text-[#B1B1B0]">Educación & Awareness</div>
                                        <p className="text-sm text-[#B1B1B0] mt-2">Posicionar BPO 2.0 y elevar el dolor consciente.</p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
                                        <div className="text-green-600 font-black text-xl mb-1">MOFU</div>
                                        <div className="text-xs font-bold uppercase tracking-wide text-[#B1B1B0]">Cualificación & Valor</div>
                                        <p className="text-sm text-[#B1B1B0] mt-2">Diagnóstico, MEDDICC y Business Case.</p>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-center">
                                        <div className="text-orange-600 font-black text-xl mb-1">BOFU</div>
                                        <div className="text-xs font-bold uppercase tracking-wide text-[#B1B1B0]">Cierre & Impacto</div>
                                        <p className="text-sm text-[#B1B1B0] mt-2">Negociación, Firma y Piloto.</p>
                                    </div>
                                </div>
                            </PillarSection>

                            {/* 2.3 MEDDICC */}
                            <PillarSection 
                                number="2.3" 
                                title="Rigor en la Cualificación (MEDDICC)"
                                conceptTitle="¿Qué es MEDDICC?"
                                conceptText="Es el estándar global en ventas empresariales (B2B) para cualificar oportunidades. Es un checklist mental que nos dice si vamos a ganar o perder un trato. Si no puedes responder a cada letra, estás volando a ciegas."
                            >
                                <div className="bg-[#3F3F3F] rounded-xl p-8 text-white shadow-inner">
                                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                                        <MeddiccCard letter="M" title="Metrics" />
                                        <MeddiccCard letter="E" title="Economic Buyer" />
                                        <MeddiccCard letter="D" title="Decision Criteria" />
                                        <MeddiccCard letter="D" title="Decision Process" />
                                        <MeddiccCard letter="I" title="Identify Pain" />
                                        <MeddiccCard letter="C" title="Champion" />
                                        <MeddiccCard letter="C" title="Competition" />
                                    </div>
                                    <p className="text-center italic text-gray-400 text-sm">
                                        "No buscamos leads, buscamos oportunidades cualificadas donde el dolor y el presupuesto están confirmados."
                                    </p>
                                </div>
                            </PillarSection>
                        </section>
                    </div>
                )}

                {/* TAB B: BLUEPRINT (FUNNEL & DEEP DIVES) */}
                {activeTab === 'blueprint' && (
                    <div className="animate-fade-in space-y-8">
                        
                        {/* GOLDEN RULE */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#6D84E3] flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                            <div>
                                <h3 className="font-bold text-[#3F3F3F] flex items-center"><span className="text-xl mr-2">📏</span> REGLA DE ORO:</h3>
                                <p className="text-sm text-[#B1B1B0]">La disciplina es nuestra ventaja. No muevas un deal si no superas el Gatekeeper. Calidad &gt; Cantidad.</p>
                            </div>
                            <a href="https://app.hubspot.com" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap bg-[#ff7a59] hover:bg-[#d95e3e] text-white font-bold py-2 px-4 rounded-lg shadow transition-all flex items-center text-sm">
                                ABRIR HUBSPOT CRM
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                        </div>

                        <div className="flex justify-between items-end mb-6 border-b pb-4">
                            <div>
                                <h2 className="text-3xl font-bold text-[#3F3F3F]">B1. El Flujo de Trabajo (Stages)</h2>
                                <p className="text-[#B1B1B0] mt-1">Pipeline lineal de 7 etapas. Sigue el camino crítico.</p>
                            </div>
                        </div>

                        {/* TIMELINE STAGES */}
                        <div className="space-y-0 mb-16">
                            <BlueprintCard 
                                stage="1" 
                                title="Lead (MQL)" 
                                objective="Contactar al prospecto y conseguir una reunión."
                                roles="SDR / AE"
                                hubspot={<ul className="list-disc list-inside"><li>Crear Deal.</li><li>Campos: <code>Origen</code>, <code>País</code>.</li><li>Agendar Reunión en Calendario.</li></ul>}
                                gatekeeper="¿El cliente ha aceptado una reunión de Discovery con fecha y hora confirmada?"
                                artifacts={[
                                    { name: 'Secuencia Email Outbound', type: 'email' },
                                    { name: 'One-Pager General', type: 'doc' }
                                ]}
                            />
                            
                            <BlueprintCard 
                                stage="2" 
                                title="Discovery" 
                                objective="Diagnosticar dolor, métricas y acceder al Champion."
                                roles="AE"
                                hubspot={<ul className="list-disc list-inside"><li>MEDDICC: <code>Pain</code>, <code>Metrics</code>.</li><li>Log de notas de dolor.</li><li>Actualizar <code>Next Step</code>.</li></ul>}
                                gatekeeper="¿Hemos identificado un dolor cuantificable y tenemos acceso confirmado al Champion?"
                                artifacts={[
                                    { name: 'Guion Discovery', type: 'doc' },
                                    { name: 'Deck Corporativo (Intro)', type: 'deck' },
                                    { name: 'Calculadora ROI Preliminar', type: 'sheet' }
                                ]}
                            />

                            <BlueprintCard 
                                stage="3" 
                                title="Diagnóstico / Fit" 
                                objective="Validar viabilidad técnica y económica preliminar."
                                roles="AE + Solutions Eng (Opcional)"
                                hubspot={<ul className="list-disc list-inside"><li><code>Decision Criteria</code> completado.</li><li>Identificar Technical Buyer.</li><li>Tarea: Preparar Demo.</li></ul>}
                                gatekeeper="¿El cliente confirma que la solución es técnicamente viable y el rango de precio es aceptable?"
                                artifacts={[
                                    { name: 'Template Diagnóstico Light', type: 'doc' },
                                    { name: 'Checklist Técnico', type: 'doc' }
                                ]}
                            />

                            <BlueprintCard 
                                stage="4" 
                                title="Solución & Demo" 
                                objective="Demostrar valor con solución personalizada."
                                roles="AE + Solutions Eng"
                                hubspot={<ul className="list-disc list-inside"><li><code>MAP activo</code> = Sí.</li><li>Adjuntar borrador MAP (Mutual Action Plan).</li><li>Agendar presentación propuesta.</li></ul>}
                                gatekeeper="¿El cliente ha validado que la demo resuelve su dolor y ha aceptado ver una propuesta formal?"
                                artifacts={[
                                    { name: 'Guion de Demo Híbrida', type: 'doc' },
                                    { name: 'Borrador MAP', type: 'doc' }
                                ]}
                            />

                            <BlueprintCard 
                                stage="5" 
                                title="Propuesta & Business Case" 
                                objective="Presentar el caso de negocio al Economic Buyer."
                                roles="AE + Sales Director"
                                hubspot={<ul className="list-disc list-inside"><li>Adjuntar Propuesta.</li><li>Campos: <code>Valor</code> y <code>Close Date</code>.</li><li>Feedback stakeholders registrado.</li></ul>}
                                gatekeeper="¿El Economic Buyer ha validado el ROI y estamos listos para Legal/Compras?"
                                artifacts={[
                                    { name: 'Modelo Propuesta Económica', type: 'doc' },
                                    { name: 'Business Case Detallado', type: 'deck' }
                                ]}
                            />

                            <BlueprintCard 
                                stage="6" 
                                title="Negociación / Piloto" 
                                objective="Acordar términos del Piloto o Contrato Final."
                                roles="AE + Legal + Ops"
                                hubspot={<ul className="list-disc list-inside"><li>Log de negociación.</li><li>Revisión legal completada.</li><li><code>Next Step</code> DIARIO.</li></ul>}
                                gatekeeper="¿Tenemos un acuerdo verbal final sobre términos, alcance del piloto y precio?"
                                artifacts={[
                                    { name: 'MSA (Contrato Marco)', type: 'doc' },
                                    { name: 'Plan de Trabajo Piloto (SOW)', type: 'doc' }
                                ]}
                            />

                            <BlueprintCard 
                                stage="7" 
                                title="Cierre & Handoff" 
                                objective="Firma y traspaso ordenado a Operaciones."
                                roles="AE -> Customer Success / Ops"
                                hubspot={<ul className="list-disc list-inside"><li><strong>Won:</strong> Kickoff agendado.</li><li><strong>Lost:</strong> <code>Motivo pérdida</code> obligatorio.</li></ul>}
                                gatekeeper="¿Contrato firmado y reunión de Kickoff agendada con Operaciones?"
                                artifacts={[
                                    { name: 'Checklist Handoff Ops', type: 'sheet' },
                                    { name: 'Kickoff Deck Template', type: 'deck' }
                                ]}
                                isLast={true}
                            />
                        </div>

                        {/* DEEP DIVE: DISCOVERY (Embedded) */}
                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-16">
                            <div className="flex items-center mb-6 border-b border-blue-200 pb-4">
                                <span className="text-4xl mr-4">🔍</span>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#3F3F3F]">B2. Deep Dive: Checklist de Discovery (Etapa 2)</h2>
                                    <p className="text-blue-800">No salgas de la fase de Discovery sin estos datos. Son el combustible del ROI.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                <div>
                                    <ChecklistItem 
                                        category="1. Volumetría y Canales (Dimensionamiento)" 
                                        items={[
                                            "¿Cuál es el volumen total de interacciones mensuales? (Voz, Chat, Email)",
                                            "¿Cómo se distribuye ese volumen? (Ej: 70% voz, 30% email)",
                                            "¿Tienen estacionalidad marcada? (Black Friday, Verano, Campañas)",
                                            "¿Cuál es la duración media de la llamada (AHT/TMO) actual?",
                                            "¿Cuál es el horario de atención actual y el deseado (24/7)?"
                                        ]} 
                                    />
                                    <ChecklistItem 
                                        category="2. Costes y Eficiencia (El Dolor Económico)" 
                                        items={[
                                            "¿Cuál es el coste por contacto estimado actual? (Interno o externo)",
                                            "¿Cuántos FTEs (agentes equivalentes) tienen dedicados hoy?",
                                            "¿Cuál es la tasa de rotación de agentes anual?",
                                            "¿Qué % de llamadas se abandonan antes de ser atendidas?",
                                            "¿Cuál es el FCR (Resolución al Primer Contacto) actual?"
                                        ]} 
                                    />
                                    <ChecklistItem 
                                        category="3. Tecnología y Stack (Viabilidad)" 
                                        items={[
                                            "¿Qué CRM utilizan? (Salesforce, HubSpot, Zendesk, Propio)",
                                            "¿Qué sistema de telefonía/Contact Center tienen? (Genesys, Avaya, Aircall)",
                                            "¿Tienen API disponible para integración?",
                                            "¿Ya usan algún bot o IVR? ¿Qué tal funciona?",
                                            "¿Hay limitaciones de seguridad/IT críticas (VPN, On-premise)?"
                                        ]} 
                                    />
                                </div>
                                <div>
                                    <div className="bg-white p-6 rounded-xl border border-blue-200 mb-8 shadow-sm">
                                        <h4 className="font-bold text-blue-800 mb-4">El Framework MEDDICC (Cualificación)</h4>
                                        <ul className="space-y-3 text-sm text-[#3F3F3F]">
                                            <li><strong>M (Metrics):</strong> ¿Qué KPI mejoraremos? (Ej: Bajar TMO 30%).</li>
                                            <li><strong>E (Economic Buyer):</strong> ¿Quién tiene el presupuesto?</li>
                                            <li><strong>D (Decision Criteria):</strong> ¿Técnica, Precio o Confianza?</li>
                                            <li><strong>D (Decision Process):</strong> ¿Pasos legales/compras?</li>
                                            <li><strong>I (Identify Pain):</strong> ¿Qué problema les quita el sueño?</li>
                                            <li><strong>C (Champion):</strong> ¿Quién nos vende internamente?</li>
                                            <li><strong>C (Competition):</strong> ¿Contra quién luchamos?</li>
                                        </ul>
                                    </div>
                                    <ChecklistItem 
                                        category="4. Aceleradores (Quick Wins)" 
                                        items={[
                                            "¿Hay algún tipo de interacción simple y repetitiva que sea &gt;20% del volumen? (Ej: Estado de pedido)",
                                            "¿Tienen scripts o base de conocimiento documentada?",
                                            "¿Estarían dispuestos a empezar con un piloto en una sola línea de negocio?"
                                        ]} 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* DEEP DIVE: PILOT (Embedded) */}
                        <div className="bg-green-50 p-8 rounded-2xl border border-green-100 mb-16">
                            <div className="flex items-center mb-6 border-b border-green-200 pb-4">
                                <span className="text-4xl mr-4">🚀</span>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#3F3F3F]">B3. Deep Dive: Estrategia de Piloto (Etapa 6)</h2>
                                    <p className="text-green-800">Cómo diseñar el "Low-Risk Entry Point". El objetivo es validar para escalar.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                                <div className="bg-white border border-green-200 p-6 rounded-xl shadow-sm">
                                    <div className="text-3xl mb-4">🎯</div>
                                    <h3 className="font-bold text-[#3F3F3F] mb-2">1. Selección del Caso de Uso</h3>
                                    <p className="text-sm text-[#B1B1B0] mb-4">No intentes automatizar todo. Busca la victoria rápida.</p>
                                    <ul className="text-sm text-[#B1B1B0] list-disc list-inside space-y-1">
                                        <li><strong>Alto Volumen:</strong> &gt;1.000 interacciones/mes.</li>
                                        <li><strong>Baja Complejidad:</strong> Reglas claras (Ej: Citas, Pedidos).</li>
                                        <li><strong>Medible:</strong> KPI actual conocido.</li>
                                    </ul>
                                </div>
                                <div className="bg-white border border-green-200 p-6 rounded-xl shadow-sm">
                                    <div className="text-3xl mb-4">⏱️</div>
                                    <h3 className="font-bold text-[#3F3F3F] mb-2">2. Duración y Alcance</h3>
                                    <p className="text-sm text-[#B1B1B0] mb-4">Acotado en tiempo y riesgo.</p>
                                    <ul className="text-sm text-[#B1B1B0] list-disc list-inside space-y-1">
                                        <li><strong>Duración:</strong> 4 a 8 semanas máximo.</li>
                                        <li><strong>Setup:</strong> 2 semanas de configuración.</li>
                                        <li><strong>Canal:</strong> Preferiblemente 1 canal (ej: Voz).</li>
                                    </ul>
                                </div>
                                <div className="bg-white border border-green-200 p-6 rounded-xl shadow-sm">
                                    <div className="text-3xl mb-4">📊</div>
                                    <h3 className="font-bold text-[#3F3F3F] mb-2">3. KPIs de Éxito</h3>
                                    <p className="text-sm text-[#B1B1B0] mb-4">Define qué es "ganar" antes de empezar.</p>
                                    <ul className="text-sm text-[#B1B1B0] list-disc list-inside space-y-1">
                                        <li><strong>FCR Piloto:</strong> &gt;70% resolución IA.</li>
                                        <li><strong>CSAT:</strong> Igual o superior al humano.</li>
                                        <li><strong>Cero Errores Críticos.</strong></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl border border-green-200 shadow-sm">
                                <h3 className="text-xl font-bold text-[#3F3F3F] mb-4">Plan de Implementación Estándar</h3>
                                <div className="relative">
                                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                                    <div className="space-y-6 pl-10">
                                        {[
                                            { t: "Semana 1: Kickoff & Ingesta", d: "Reunión alineación, acceso a sistemas, entrega de manuales/scripts." },
                                            { t: "Semana 2: Configuración & Training", d: "Configuración IA, entrenamiento de agentes humanos, integraciones API." },
                                            { t: "Semana 3: Go-Live (Soft Launch)", d: "Lanzamiento con tráfico controlado (ej: 10-20% del volumen)." },
                                            { t: "Semana 4-6: Operación & Ajuste", d: "Monitorización diaria, re-entrenamiento de modelo, ajuste de prompts." },
                                            { t: "Semana 7: Review & Escalado", d: "Informe final de resultados. Firma de contrato de expansión (Full Rollout)." }
                                        ].map((step, i) => (
                                            <div key={i} className="relative">
                                                <div className="absolute -left-[31px] bg-green-500 w-4 h-4 rounded-full border-2 border-white shadow"></div>
                                                <h4 className="font-bold text-[#3F3F3F]">{step.t}</h4>
                                                <p className="text-sm text-[#B1B1B0]">{step.d}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* VISUAL APPENDIX */}
                        <div className="mt-12 bg-[#E4E3E3] p-6 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-[#3F3F3F] mb-4 text-center border-b pb-2">Apéndice Visual: Salud del Pipeline y MEDDICC</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="bg-white rounded-xl shadow p-4 h-[450px] flex flex-col">
                                    <h4 className="text-sm font-bold text-center text-[#B1B1B0] mb-2">Probabilidad de Cierre (Impacto MEDDICC)</h4>
                                    <div className="flex-grow">
                                        <MeddiccImpactChart />
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl shadow p-4 h-[450px] flex flex-col">
                                    <h4 className="text-sm font-bold text-center text-[#B1B1B0] mb-2">Conversión por Etapa del Funnel</h4>
                                    <div className="flex-grow">
                                        <PipelineHealthChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB C: SALES OPS MODEL (RITUALS & KPIs) */}
                {activeTab === 'ops' && (
                    <div className="animate-fade-in space-y-16">
                        <div>
                            <h2 className="text-3xl font-bold text-[#3F3F3F] mb-4">C. Modelo Operativo de Ventas (Sales Ops)</h2>
                            <p className="text-xl text-[#6D84E3] font-medium">Personas, Datos y Rituales</p>
                            <p className="text-[#B1B1B0] mt-2">La estructura que soporta la ejecución. Definimos quién hace qué, cómo lo medimos y cuándo lo revisamos.</p>
                        </div>
                        
                        {/* BLOQUE 1: EQUIPO Y GOBERNANZA */}
                        <section>
                            <h3 className="text-2xl font-bold text-[#3F3F3F] mb-8 flex items-center pb-2 border-b border-gray-200">
                                <span className="bg-[#3F3F3F] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                                Gobernanza del Equipo (Quién)
                            </h3>
                            
                            {/* Role Definitions */}
                            <div className="bg-[#E4E3E3] p-4 rounded-lg border border-gray-200 mb-6 text-sm">
                                <h4 className="font-bold text-[#3F3F3F] mb-2">📚 Definición de Roles:</h4>
                                <ul className="space-y-2 text-[#B1B1B0]">
                                    <li><strong>SDR (Sales Development Representative):</strong> Responsable de la prospección inicial. Su trabajo es encontrar leads, contactarlos y agendar reuniones cualificadas. No cierran ventas.</li>
                                    <li><strong>AE (Account Executive):</strong> Responsable del cierre. Toma la reunión agendada por el SDR, gestiona el ciclo de venta (Discovery, Demo, Propuesta) y firma el contrato.</li>
                                    <li><strong>Sales Manager:</strong> Líder del equipo. Responsable del Forecast, Coaching de repeticiones y desbloqueo de oportunidades complejas. Asegura que el proceso se cumpla.</li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <RoleKpiCard 
                                    role="SDR (Desarrollo)"
                                    color="border-green-500"
                                    northStar="SQLs (Reuniones Agendadas)"
                                    inputs={["Llamadas salientes / día", "Cuentas tocadas / semana", "Tasa de Contacto"]}
                                    outputs={["Reuniones Realizadas (SQLs)", "Tasa de Conversión a Opp"]}
                                />
                                <RoleKpiCard 
                                    role="AE (Cierre)"
                                    color="border-blue-500"
                                    northStar="New MRR (Ingresos)"
                                    inputs={["Demos Ejecutadas", "Propuestas Enviadas", "Pipeline Generado (Self-Sourced)"]}
                                    outputs={["Win Rate %", "Ciclo de Venta (Días)", "Ticket Medio (ACV)"]}
                                />
                                <RoleKpiCard 
                                    role="Sales Manager"
                                    color="border-purple-500"
                                    northStar="Forecast Accuracy"
                                    inputs={["Coaching Hours / Rep", "Deal Reviews Realizadas", "Pipeline Coverage Ratio"]}
                                    outputs={["% Attainment del Equipo", "Participación (quién llega a cuota)", "Retención de Talento"]}
                                />
                            </div>

                            {/* RACI Matrix Toggle */}
                            <div className="text-center">
                                <button 
                                    onClick={() => setShowRaci(!showRaci)}
                                    className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-[#3F3F3F] bg-white hover:bg-[#E4E3E3] focus:outline-none"
                                >
                                    {showRaci ? 'Ocultar Matriz' : 'Ver Matriz de Responsabilidades (RACI)'}
                                    <span className="ml-2 text-xs">{showRaci ? '▲' : '▼'}</span>
                                </button>
                            </div>

                            {showRaci && (
                                <div className="mt-6 overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm animate-fade-in">
                                    <div className="p-4 bg-[#E4E3E3] border-b border-gray-200">
                                        <p className="text-xs text-[#B1B1B0] italic"><strong>R:</strong> Responsable (Hace), <strong>A:</strong> Accountable (Dueño), <strong>C:</strong> Consultado, <strong>I:</strong> Informado</p>
                                    </div>
                                    <table className="min-w-full">
                                        <thead className="bg-[#E4E3E3] text-[#3F3F3F] uppercase text-xs">
                                            <tr>
                                                <th className="py-3 px-4 text-left w-1/3">Fase del Pipeline</th>
                                                <th className="py-3 px-4 text-left w-1/3 text-[#6D84E3]">Entregable / Gatekeeper</th>
                                                <th className="py-3 px-4 text-center w-1/9">SDR</th>
                                                <th className="py-3 px-4 text-center w-1/9">AE</th>
                                                <th className="py-3 px-4 text-center w-1/9">Manager</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <RaciRow task="1. Lead (MQL)" deliverable="Gate 1: Reunión aceptada en cal." sdr="R/A" ae="I" mgr="I" />
                                            <RaciRow task="2. Discovery" deliverable="MEDDICC: Metrics & Pain identificados." sdr="C" ae="R/A" mgr="C" />
                                            <RaciRow task="3. Diagnóstico / Fit" deliverable="Gate 2: Check de Viabilidad Técnica (Semáforo Verde)." sdr="-" ae="R/A" mgr="I" />
                                            <RaciRow task="4. Solución & Demo" deliverable="MEDDICC: Champion valida la solución." sdr="-" ae="R/A" mgr="I" />
                                            <RaciRow task="5. Propuesta & BC" deliverable="MEDDICC: Economic Buyer da el 'Sí'." sdr="-" ae="R/A" mgr="A" />
                                            <RaciRow task="6. Negociación / Piloto" deliverable="MEDDICC: Paper Process (Proceso de firma claro)." sdr="-" ae="R/A" mgr="A" />
                                            <RaciRow task="7. Cierre & Handoff" deliverable="Gate 3: Kick-off Meeting Agendada." sdr="-" ae="R" mgr="I" />
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </section>

                        {/* BLOQUE 2: ARQUITECTURA DE DATOS */}
                        <section>
                             <h3 className="text-2xl font-bold text-[#3F3F3F] mb-8 flex items-center pb-2 border-b border-gray-200">
                                <span className="bg-[#3F3F3F] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                                Higiene del Dato y Reglas de Negocio (Con Qué)
                            </h3>
                            <p className="text-[#B1B1B0] mb-6">La calidad de los datos determina la calidad de la decisión. Si no está en el CRM, no existe.</p>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Col 1: Datos de Cualificación */}
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
                                    <h4 className="font-bold text-[#3F3F3F] mb-2 flex items-center"><span className="text-xl mr-2">🚦</span> Datos de Cualificación</h4>
                                    <p className="text-xs text-[#B1B1B0] mb-4 uppercase font-bold">Objetivo: Pipeline Limpio</p>
                                    <ul className="space-y-3 text-sm flex-grow">
                                        <li className="p-2 bg-[#E4E3E3] rounded border border-gray-100">
                                            <span className="block font-bold text-[#3F3F3F] text-xs">📌 Pain Point Principal</span>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="bg-red-100 text-red-800 text-[10px] px-1 rounded">Costes</span>
                                                <span className="bg-red-100 text-red-800 text-[10px] px-1 rounded">NPS</span>
                                                <span className="bg-red-100 text-red-800 text-[10px] px-1 rounded">Escalabilidad</span>
                                            </div>
                                        </li>
                                        <li className="p-2 bg-[#E4E3E3] rounded border border-gray-100">
                                             <span className="block font-bold text-[#3F3F3F] text-xs">🚦 Fuente del Lead</span>
                                              <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="bg-blue-100 text-blue-800 text-[10px] px-1 rounded">Inbound</span>
                                                <span className="bg-blue-100 text-blue-800 text-[10px] px-1 rounded">Outbound</span>
                                                <span className="bg-blue-100 text-blue-800 text-[10px] px-1 rounded">Evento</span>
                                            </div>
                                        </li>
                                        <li className="p-2 bg-[#E4E3E3] rounded border border-gray-100">
                                            <span className="block font-bold text-[#3F3F3F] text-xs">👤 Buyer Persona</span>
                                            <span className="text-[#B1B1B0] text-xs block mt-1">[Director CX | COO | CEO]</span>
                                        </li>
                                        <li className="p-2 bg-[#E4E3E3] rounded border border-gray-100">
                                            <span className="block font-bold text-[#3F3F3F] text-xs">🔢 Volumen Actual</span>
                                            <span className="text-gray-400 text-xs italic block mt-1">_____ interacciones/mes</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Col 2: Datos de Solución */}
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
                                    <h4 className="font-bold text-[#3F3F3F] mb-2 flex items-center"><span className="text-xl mr-2">🛠️</span> Datos Solución & Técnica</h4>
                                    <p className="text-xs text-[#B1B1B0] mb-4 uppercase font-bold">Objetivo: Viabilidad</p>
                                    <ul className="space-y-3 text-sm flex-grow">
                                        <li className="p-2 bg-[#E4E3E3] rounded border border-gray-100">
                                            <span className="block font-bold text-[#3F3F3F] text-xs">🛠 Tech Stack Actual</span>
                                            <span className="text-[#B1B1B0] text-xs block mt-1">(Salesforce, Genesys, Avaya...)</span>
                                        </li>
                                        <li className="p-2 bg-[#E4E3E3] rounded border border-gray-100 flex justify-between items-center">
                                            <span className="font-bold text-[#3F3F3F] text-xs">✅ Viabilidad Técnica</span>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Sí/No</span>
                                        </li>
                                        <li className="p-2 bg-[#E4E3E3] rounded border border-gray-100 flex justify-between items-center">
                                            <span className="font-bold text-[#3F3F3F] text-xs">🗺 MAP Activo</span>
                                            <span className="text-xs text-[#B1B1B0]">Boolean</span>
                                        </li>
                                        <li className="p-2 bg-[#E4E3E3] rounded border border-gray-100">
                                            <span className="block font-bold text-[#3F3F3F] text-xs">👥 Roles Identificados</span>
                                            <span className="text-[#B1B1B0] text-xs block mt-1">Champion & Technical Buyer asignados</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Col 3: Datos Económicos */}
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
                                    <h4 className="font-bold text-[#3F3F3F] mb-2 flex items-center"><span className="text-xl mr-2">💰</span> Datos Económicos & Cierre</h4>
                                    <p className="text-xs text-[#B1B1B0] mb-4 uppercase font-bold">Objetivo: Forecast</p>
                                    <ul className="space-y-3 text-sm flex-grow">
                                        <li className="p-2 bg-[#E4E3E3] rounded border border-gray-100">
                                            <span className="block font-bold text-[#3F3F3F] text-xs">💰 Valor del Contrato (TCV)</span>
                                            <span className="text-gray-400 text-xs italic block mt-1">€ _________ (Total Contract Value)</span>
                                        </li>
                                        <li className="p-2 bg-[#E4E3E3] rounded border border-gray-100">
                                            <span className="block font-bold text-[#3F3F3F] text-xs">📅 Fecha de Cierre</span>
                                            <span className="text-[#B1B1B0] text-xs block mt-1">Actualizar semanalmente</span>
                                        </li>
                                        <li className="p-2 bg-red-50 rounded border border-red-100">
                                            <span className="block font-bold text-red-800 text-xs">📉 Motivo de Pérdida</span>
                                            <span className="text-red-600 text-xs block mt-1">Obligatorio en Closed Lost (Precio, Competencia...)</span>
                                        </li>
                                        <li className="p-2 bg-green-50 rounded border border-green-100">
                                            <span className="block font-bold text-green-800 text-xs">🚀 Fecha Inicio Servicio</span>
                                            <span className="text-green-600 text-xs block mt-1">Para facturación</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* BLOQUE 3: RITUALES DE GESTIÓN */}
                        <section>
                             <h3 className="text-2xl font-bold text-[#3F3F3F] mb-8 flex items-center pb-2 border-b border-gray-200">
                                <span className="bg-[#3F3F3F] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                                Ritmo de Negocio (Cuándo)
                            </h3>
                            
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-10">
                                <table className="min-w-full text-sm text-left">
                                    <thead className="bg-[#E4E3E3] text-[#3F3F3F] uppercase text-xs font-bold">
                                        <tr>
                                            <th className="px-6 py-3">Ritual</th>
                                            <th className="px-6 py-3">Frecuencia</th>
                                            <th className="px-6 py-3">Objetivo Crítico</th>
                                            <th className="px-6 py-3">Audiencia</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-[#E4E3E3]">
                                            <td className="px-6 py-4 font-bold text-[#3F3F3F]">Daily Standup</td>
                                            <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold">Diario (15 min)</span></td>
                                            <td className="px-6 py-4">Eliminar bloqueos inmediatos y asegurar foco en actividades generadoras de ingresos (IGA).</td>
                                            <td className="px-6 py-4 text-[#B1B1B0]">SDRs + Manager</td>
                                        </tr>
                                        <tr className="hover:bg-[#E4E3E3]">
                                            <td className="px-6 py-4 font-bold text-[#3F3F3F]">Pipeline Review</td>
                                            <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">Semanal (Lunes)</span></td>
                                            <td className="px-6 py-4">Validar 'Next Steps' con fecha futura y sanear la higiene del dato (eliminar zombies).</td>
                                            <td className="px-6 py-4 text-[#B1B1B0]">AEs + Manager</td>
                                        </tr>
                                        <tr className="hover:bg-[#E4E3E3]">
                                            <td className="px-6 py-4 font-bold text-[#3F3F3F]">Deal Strategy (Clinic)</td>
                                            <td className="px-6 py-4"><span className="bg-[#E4E3E3] text-[#B1B1B0] text-xs px-2 py-1 rounded font-bold">Ad-hoc / Jueves</span></td>
                                            <td className="px-6 py-4">Desbloquear estancamientos en cuentas Tier 1 y definir plan de ataque con Executive Sponsorship.</td>
                                            <td className="px-6 py-4 text-[#B1B1B0]">Equipo Completo</td>
                                        </tr>
                                        <tr className="hover:bg-[#E4E3E3]">
                                            <td className="px-6 py-4 font-bold text-[#3F3F3F]">Forecast Call</td>
                                            <td className="px-6 py-4"><span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-bold">Mensual</span></td>
                                            <td className="px-6 py-4">Confirmar la cifra de 'Commit' (Cierre seguro) y analizar desviaciones (Gap).</td>
                                            <td className="px-6 py-4 text-[#B1B1B0]">Manager + Dirección</td>
                                        </tr>
                                         <tr className="hover:bg-[#E4E3E3]">
                                            <td className="px-6 py-4 font-bold text-[#3F3F3F]">QBR (Quarterly Review)</td>
                                            <td className="px-6 py-4"><span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded font-bold">Trimestral</span></td>
                                            <td className="px-6 py-4">Revisión de rendimiento trimestral (Win/Loss) y re-alineación de territorios/cuotas.</td>
                                            <td className="px-6 py-4 text-[#B1B1B0]">Toda la compañía</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 className="text-lg font-bold text-[#3F3F3F] mb-6">Output: Cuadros de Mando (Dashboards)</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                
                                {/* Dashboard 1 */}
                                <div className="flex flex-col h-full">
                                    <div className="bg-white p-5 rounded-t-xl border border-gray-200 shadow-sm flex-grow">
                                        <h4 className="font-bold text-[#3F3F3F] mb-2">1. The Morning Coffee (Reps)</h4>
                                        <p className="text-xs text-[#B1B1B0] mb-4">Para que el comercial sepa qué hacer hoy.</p>
                                        <ul className="text-sm text-[#B1B1B0] list-disc list-inside">
                                            <li>Tareas vencidas hoy.</li>
                                            <li>Deals sin "Next Step" futuro.</li>
                                            <li>Nuevos MQLs asignados.</li>
                                        </ul>
                                    </div>
                                    {/* Mockup 1 */}
                                    <div className="bg-[#E4E3E3] p-4 rounded-b-xl border-x border-b border-gray-200 text-xs font-mono shadow-inner">
                                        <div className="flex justify-between mb-2 border-b border-gray-300 pb-1">
                                            <span className="font-bold text-[#B1B1B0]">📅 HOY</span>
                                            <span className="text-red-500 font-bold">3 Tareas</span>
                                        </div>
                                        <div className="space-y-2 mb-3">
                                            <div className="flex items-center"><div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div><span className="truncate">Llamar: Hospital Central</span></div>
                                            <div className="flex items-center"><div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div><span className="truncate">Email: Propuesta Acme</span></div>
                                        </div>
                                        <div className="bg-blue-100 p-2 rounded text-center text-blue-800 font-bold border border-blue-200">
                                            🔔 2 Nuevos MQLs
                                        </div>
                                    </div>
                                </div>

                                {/* Dashboard 2 */}
                                <div className="flex flex-col h-full">
                                    <div className="bg-white p-5 rounded-t-xl border border-gray-200 shadow-sm flex-grow">
                                        <h4 className="font-bold text-[#3F3F3F] mb-2">2. Pipeline Velocity (Manager)</h4>
                                        <p className="text-xs text-[#B1B1B0] mb-4">Para detectar cuellos de botella.</p>
                                        <ul className="text-sm text-[#B1B1B0] list-disc list-inside">
                                            <li>Deals estancados (&gt;15 días).</li>
                                            <li>Tasa de conversión.</li>
                                            <li>Pipeline Coverage.</li>
                                        </ul>
                                    </div>
                                    {/* Mockup 2 */}
                                    <div className="bg-[#E4E3E3] p-4 rounded-b-xl border-x border-b border-gray-200 text-xs font-mono shadow-inner">
                                        <div className="text-center font-bold mb-2 text-[#B1B1B0] uppercase">⚠️ Stuck Deals</div>
                                        <table className="w-full mb-3 text-[10px]">
                                            <thead><tr className="text-gray-400"><td>Deal</td><td className="text-right">Días</td></tr></thead>
                                            <tbody>
                                                <tr><td>Clínica Sur</td><td className="text-right text-red-600 font-bold">22</td></tr>
                                                <tr><td>Seguros Y</td><td className="text-right text-red-600 font-bold">18</td></tr>
                                            </tbody>
                                        </table>
                                        <div className="mt-2">
                                            <div className="flex justify-between text-[10px] mb-1"><span>Coverage</span><span>3.5x</span></div>
                                            <div className="h-1.5 bg-gray-300 rounded-full overflow-hidden"><div className="w-[70%] h-full bg-green-500"></div></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Dashboard 3 */}
                                <div className="flex flex-col h-full">
                                    <div className="bg-white p-5 rounded-t-xl border border-gray-200 shadow-sm flex-grow">
                                        <h4 className="font-bold text-[#3F3F3F] mb-2">3. The Board Pack (Exec)</h4>
                                        <p className="text-xs text-[#B1B1B0] mb-4">La foto fija de la salud del negocio.</p>
                                        <ul className="text-sm text-[#B1B1B0] list-disc list-inside">
                                            <li>Forecast vs. Objetivo.</li>
                                            <li>Win Rate global.</li>
                                            <li>Ingresos por Producto (Mix).</li>
                                        </ul>
                                    </div>
                                    {/* Mockup 3 */}
                                    <div className="bg-[#E4E3E3] p-4 rounded-b-xl border-x border-b border-gray-200 text-xs font-mono shadow-inner">
                                        <div className="flex justify-between items-end mb-3">
                                            <div>
                                                <div className="text-gray-400 text-[9px] uppercase">Forecast Q3</div>
                                                <div className="text-sm font-bold text-[#3F3F3F]">€150k</div>
                                            </div>
                                            <div className="text-green-600 font-bold text-[10px]">▲ 12% YoY</div>
                                        </div>
                                        <div className="flex space-x-1 h-8 items-end mb-2">
                                            <div className="w-1/4 bg-blue-300 h-[40%]"></div>
                                            <div className="w-1/4 bg-blue-400 h-[60%]"></div>
                                            <div className="w-1/4 bg-blue-500 h-[80%]"></div>
                                            <div className="w-1/4 bg-blue-600 h-[95%]"></div>
                                        </div>
                                        <div className="text-center text-[9px] text-[#B1B1B0]">Proyección MRR</div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                )}

            </main>
        </div>
    );
};

export default ProcessGuide;
