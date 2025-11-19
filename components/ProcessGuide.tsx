
import React from 'react';
import MeddiccImpactChart from './charts/MeddiccImpactChart';
import PipelineHealthChart from './charts/PipelineHealthChart';
import Accordion from './shared/Accordion';

const PrincipleCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 h-full flex flex-col">
        <div className="mx-auto bg-blue-100 text-[#6D84E3] w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mt-5">{title}</h3>
        <p className="mt-3 text-gray-600 font-light text-sm flex-grow">{description}</p>
    </div>
);

const StageCard: React.FC<{ stage: string; title: string; objective: string; gatekeeper: string; hubspotMission: React.ReactNode; isLast?: boolean }> = ({ stage, title, objective, gatekeeper, hubspotMission, isLast }) => (
    <div className={`w-full lg:flex-1 bg-white p-0 rounded-xl shadow-md border-t-8 ${isLast ? 'border-green-500' : 'border-[#6D84E3]'} flex flex-col transition-transform transform hover:-translate-y-1 overflow-hidden`}>
        <div className="p-6 text-center bg-gray-50 border-b border-gray-100">
            <div className={`text-2xl font-black ${isLast ? 'text-green-600' : 'text-[#6D84E3]'}`}>{stage}. {title}</div>
            <p className="text-gray-600 mt-2 text-sm font-medium uppercase tracking-wide">Objetivo</p>
            <p className="text-gray-800 text-sm">{objective}</p>
        </div>
        
        {/* Gatekeeper Section - The "McKinsey" Checkpoint */}
        <div className="p-4 bg-yellow-50 border-b border-yellow-100">
             <p className="text-xs font-bold text-yellow-800 uppercase tracking-wider mb-1">🔒 Gatekeeper Question (Criterio de Paso)</p>
             <p className="text-sm font-bold text-gray-800 italic">"{gatekeeper}"</p>
        </div>

        <div className="p-4 text-left flex-grow">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">🛠 Tu Misión en HubSpot</p>
            <div className="text-xs text-gray-600 space-y-1">
                {hubspotMission}
            </div>
        </div>
    </div>
);

const stages = [
    {
        stage: "1", title: "Lead (MQL)",
        objective: "Contactar y agendar discovery.",
        gatekeeper: "¿El cliente ha aceptado una reunión de Discovery con fecha y hora?",
        hubspotMission: <ul className="list-disc list-inside mt-1"><li>Deal creado.</li><li>Campos: <code>Origen</code>, <code>País</code>.</li><li>Reunión agendada.</li></ul>,
    },
    {
        stage: "2", title: "Discovery",
        objective: "Diagnosticar dolor y champion.",
        gatekeeper: "¿Hemos identificado un dolor cuantificable y tenemos acceso al Champion?",
        hubspotMission: <ul className="list-disc list-inside mt-1"><li>MEDDICC: <code>Pain</code>, <code>Metrics</code>.</li><li>Notas de dolor.</li><li><code>Next Step</code> actualizado.</li></ul>,
    },
    {
        stage: "3", title: "Fit & Viabilidad",
        objective: "Confirmar encaje técnico/económico.",
        gatekeeper: "¿El cliente ha confirmado que nuestra solución técnica y rango de precio son viables?",
        hubspotMission: <ul className="list-disc list-inside mt-1"><li><code>Decision Criteria</code> completado.</li><li>Technical Buyer identificado.</li><li>Tarea: Preparar Demo.</li></ul>,
    },
    {
        stage: "4", title: "Solución & Demo",
        objective: "Demostrar valor y acordar plan.",
        gatekeeper: "¿El cliente ha validado que la solución resuelve su dolor y ha aceptado ver una propuesta?",
        hubspotMission: <ul className="list-disc list-inside mt-1"><li><code>MAP activo</code> = Sí.</li><li>Adjuntar borrador MAP.</li><li>Agendar Propuesta.</li></ul>,
    },
    {
        stage: "5", title: "Propuesta",
        objective: "Presentar Business Case.",
        gatekeeper: "¿El Economic Buyer ha validado el ROI y estamos listos para legal/compras?",
        hubspotMission: <ul className="list-disc list-inside mt-1"><li>Propuesta adjunta.</li><li><code>Valor</code> y <code>Close Date</code>.</li><li>Feedback stakeholders.</li></ul>,
    },
    {
        stage: "6", title: "Negociación",
        objective: "Resolver flecos finales.",
        gatekeeper: "¿Tenemos un acuerdo verbal final sobre términos y precio?",
        hubspotMission: <ul className="list-disc list-inside mt-1"><li>Log de negociación.</li><li>Revisión legal.</li><li><code>Next Step</code> DIARIO.</li></ul>,
    },
    {
        stage: "7", title: "Cierre",
        objective: "Firma y Handoff.",
        gatekeeper: "¿Contrato firmado y Kickoff agendado?",
        hubspotMission: <ul className="list-disc list-inside mt-1"><li><strong>Won:</strong> Kickoff agendado.</li><li><strong>Lost:</strong> <code>Motivo pérdida</code> obligatorio.</li></ul>,
        isLast: true,
    }
];

const salesProcessContent = (
    <div className="text-sm text-gray-700 space-y-6">
        <p className="italic">Nuestro proceso se divide en 3 fases alineadas con el embudo de ventas B2B, enfocadas en educar, cualificar y demostrar impacto tangible.</p>
        
        <div className="flex flex-col md:flex-row justify-around items-center text-center my-6 p-4 bg-gray-50 rounded-lg space-y-4 md:space-y-0">
            <div><h4 className="font-bold text-blue-600 text-lg">TOFU</h4><p>Educación y Awareness</p></div>
            <div className="text-gray-400 text-2xl hidden md:block">→</div>
            <div><h4 className="font-bold text-green-600 text-lg">MOFU</h4><p>Cualificación y Valor</p></div>
            <div className="text-gray-400 text-2xl hidden md:block">→</div>
            <div><h4 className="font-bold text-orange-600 text-lg">BOFU</h4><p>Negociación e Impacto</p></div>
        </div>

        <div>
            <h4 className="font-bold text-lg text-blue-600 mb-2">Fase 1: TOFU – Educación & Awareness (Crear Demanda)</h4>
            <p className="mb-2"><strong>Qué / Por qué:</strong> Nos dirigimos a una audiencia amplia para generar awareness y educar al mercado sobre los desafíos actuales del CX. Nos posicionamos como un socio consultivo, no como un vendedor.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Objetivos Clave:</strong> Posicionar la categoría BPO 2.0, elevar el "dolor consciente" y convertir Leads en MQLs sin venta directa.</li>
                <li><strong>Estrategias:</strong> Contenido educativo (posts, webinars), assets descargables (benchmarks), y campañas de ABM a cuentas objetivo.</li>
                <li><strong>Handoff a MOFU:</strong> Un MQL se define cuando cumple nuestro perfil de cliente ideal (Fit Score ≥ 60) y ha mostrado intención clara (Intent Score ≥ 40).</li>
            </ul>
        </div>

        <div>
            <h4 className="font-bold text-lg text-green-600 mb-2">Fase 2: MOFU – Cualificación & Hipótesis de Valor</h4>
            <p className="mb-2"><strong>Qué / Por qué:</strong> Mediante conversaciones directas, cualificamos rigurosamente al prospecto para desarrollar la oportunidad. Respondemos a la pregunta: ¿Tiene un problema que podemos resolver con impacto, y está en condiciones de resolverlo ahora?</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Enfoque Metódico:</strong> Validamos con el framework MEDDICC, cuantificamos el impacto (pre-ROI) y co-creamos un Plan de Acción Mutuo (MAP).</li>
                <li><strong>Estrategias:</strong> Discovery consultivo estructurado, entrega de un "Resumen de Descubrimiento", Demo guiada, y borrador de MAP.</li>
                <li><strong>Handoff a BOFU:</strong> Se avanza solo cuando hay un dolor concreto priorizado, viabilidad técnica confirmada, potencial de ROI atractivo y voluntad del cliente de evaluar una propuesta formal.</li>
            </ul>
        </div>

        <div>
            <h4 className="font-bold text-lg text-orange-600 mb-2">Fase 3: BOFU – Propuesta, Negociación & Cierre</h4>
            <p className="mb-2"><strong>Qué / Por qué:</strong> El foco absoluto está en la propuesta de valor personalizada y el impacto tangible para el cliente.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Objetivos Finales:</strong> Formalizar un business case sólido con datos reales, entregar una propuesta comercial convincente y reducir cualquier percepción de riesgo.</li>
                <li><strong>Puntos de Foco (Diferenciadores):</strong> No ofertamos precio, sino transformación con alto ROI. Atamos cada elemento tecnológico a un beneficio de negocio. Ofrecemos impacto sin riesgo a través de una suscripción flexible.</li>
                <li><strong>Handoff a Entrega:</strong> Con el contrato firmado, se entrega una carpeta de traspaso completa a Operaciones para un kickoff en ≤7 días.</li>
            </ul>
        </div>
    </div>
);

const salesProcessAccordion = [{
    title: 'Nuestro Modelo Operativo de Venta',
    content: salesProcessContent
}];


const ProcessGuide: React.FC = () => {
    const firstRowStages = stages.slice(0, 3);
    const secondRowStages = stages.slice(3);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <header className="text-center py-12">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight">Playbook de Ventas Beyond</h1>
                <p className="text-xl md:text-2xl text-[#6D84E3] mt-4 font-light">Tu Guía Práctica para Ejecutar el Proceso</p>
                <div className="mt-8 bg-white inline-block p-4 rounded-xl shadow-sm">
                    <p className="text-lg font-medium text-gray-700">La disciplina es nuestra ventaja. <span className="text-[#6D84E3] font-bold">Sin respuesta al Gatekeeper, no se avanza.</span></p>
                </div>
            </header>

            <main>
                <section id="principles" className="mb-16 md:mb-24">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Principios de Ejecución</h2>
                    <p className="text-center text-lg text-gray-500 font-light mb-12">La filosofía detrás de la acción.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center max-w-7xl mx-auto">
                        <PrincipleCard title="Educación Primero" description="Lideramos creando categoría y educando." icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>} />
                        <PrincipleCard title="Compromiso Mutuo" description="Solo avanzamos con sponsor y recursos confirmados." icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>} />
                        <PrincipleCard title="Valor > Precio" description="Vendemos business case y outcomes, no horas." icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>} />
                        <PrincipleCard title="Escalabilidad" description="Procesos diseñados para ser repetibles." icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>} />
                        <PrincipleCard title="Portfolio Entry" description="Empezamos pequeño, escalamos rápido." icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>} />
                    </div>
                </section>

                <section id="hubspot-in-action" className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 lg:p-12 mb-16 md:mb-24">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Pipeline: Las 7 Etapas de Rigor</h2>
                    <div className="text-center bg-blue-50 p-4 rounded-xl border border-blue-100 mb-12">
                         <p className="text-blue-800"><strong>Instrucción:</strong> No muevas un deal en HubSpot si no puedes responder "SÍ" a la pregunta Gatekeeper.</p>
                    </div>

                    <div>
                        <div className="flex flex-col lg:flex-row items-stretch justify-center space-y-8 lg:space-y-0 lg:space-x-6 mb-8">
                            {firstRowStages.map((stage, index) => (
                                <React.Fragment key={stage.stage}>
                                    <StageCard {...stage} />
                                    {index < firstRowStages.length - 1 && <div className="text-3xl text-gray-300 self-center hidden lg:block">➜</div>}
                                </React.Fragment>
                            ))}
                        </div>
                        
                        <div className="flex flex-col lg:flex-row items-stretch justify-center space-y-8 lg:space-y-0 lg:space-x-6">
                             {secondRowStages.map((stage, index) => (
                                <React.Fragment key={stage.stage}>
                                    <StageCard {...stage} />
                                    {index < secondRowStages.length - 1 && <div className="text-3xl text-gray-300 self-center hidden lg:block">➜</div>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="deep-dive" className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Por qué funciona</h2>
                    
                    <div className="mb-8 bg-white rounded-xl shadow-lg p-6 md:p-8">
                        <Accordion items={salesProcessAccordion} />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">🔬 Impacto MEDDICC</h3>
                            <p className="text-gray-600 font-light mb-6 text-sm">MEDDICC no es burocracia, es probabilidad matemática de cierre.</p>
                            <MeddiccImpactChart />
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">📈 Pipeline Saludable</h3>
                            <p className="text-gray-600 font-light mb-6 text-sm">Tu objetivo: Alto volumen en MQL y alta conversión en BOFU.</p>
                            <PipelineHealthChart />
                        </div>
                    </div>
                </section>
                
            </main>

            <footer className="text-center py-8 border-t border-gray-200 mt-8"><p className="text-xl font-medium text-gray-700">Beyond: Rigor en la Ejecución.</p></footer>
        </div>
    );
};

export default ProcessGuide;
