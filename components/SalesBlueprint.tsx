
import React from 'react';
import MeddiccImpactChart from './charts/MeddiccImpactChart';
import PipelineHealthChart from './charts/PipelineHealthChart';

interface Artifact {
    name: string;
    type: 'doc' | 'deck' | 'email' | 'sheet';
    url?: string;
}

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
        {!isLast && (
            <div className="absolute left-[1.35rem] md:left-[1.85rem] top-12 bottom-0 w-1 bg-gray-200"></div>
        )}
        <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-[#6D84E3] rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
            <span className="text-white font-black text-lg md:text-2xl">{stage}</span>
        </div>
        <div className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all hover:shadow-xl ml-4`}>
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100 pb-4 lg:pb-0 lg:pr-4">
                    <h3 className="text-2xl font-bold text-[#3F3F3F]">{title}</h3>
                    <p className="text-sm text-[#6D84E3] font-bold mt-1 uppercase tracking-wide">Objetivo</p>
                    <p className="text-sm text-[#B1B1B0] mt-1">{objective}</p>
                    <div className="mt-4 flex items-center">
                        <span className="text-xs font-bold bg-[#E4E3E3] text-[#B1B1B0] px-2 py-1 rounded">Roles: {roles}</span>
                    </div>
                </div>
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

const SalesBlueprint: React.FC = () => {
    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f3f4f6] min-h-screen">
             <header className="text-center py-8">
                <h1 className="text-3xl md:text-5xl font-bold text-[#3F3F3F] tracking-tight">2. Sales Process Blueprint</h1>
                <p className="text-lg text-[#6D84E3] mt-2 font-medium">Metodología Consultiva: Del Diagnóstico al Escalado</p>
            </header>

            <main className="bg-white rounded-xl shadow-lg p-6 md:p-10">
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

            </main>
        </div>
    );
};

export default SalesBlueprint;
