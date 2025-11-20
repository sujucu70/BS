
import React, { useState } from 'react';

const RoleKpiCard: React.FC<{ role: string; northStar: string; inputs: string[]; outputs: string[]; color: string }> = ({ role, northStar, inputs, outputs, color }) => (
    <div className={`bg-white rounded-xl shadow border-t-4 ${color} p-6 flex flex-col h-full`}>
        <h3 className="text-lg font-bold text-gray-800 mb-1">{role}</h3>
        <div className="mb-4 pb-4 border-b border-gray-100">
            <p className="text-xs text-gray-500 uppercase font-bold">North Star Metric</p>
            <p className="text-xl font-black text-gray-800">{northStar}</p>
        </div>
        <div className="flex-grow space-y-4">
            <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-2">Inputs (Esfuerzo)</p>
                <ul className="text-sm text-gray-600 space-y-1">
                    {inputs.map((i, idx) => <li key={idx} className="flex items-start"><span className="mr-2 text-gray-400">•</span>{i}</li>)}
                </ul>
            </div>
            <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-2">Outputs (Resultados)</p>
                <ul className="text-sm text-gray-600 space-y-1">
                    {outputs.map((o, idx) => <li key={idx} className="flex items-start"><span className="mr-2 text-gray-400">→</span>{o}</li>)}
                </ul>
            </div>
        </div>
    </div>
);

const RaciRow: React.FC<{ task: string; deliverable: string; sdr: string; ae: string; mgr: string }> = ({ task, deliverable, sdr, ae, mgr }) => (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
        <td className="py-3 px-4 text-sm font-medium text-gray-700 w-1/3">{task}</td>
        <td className="py-3 px-4 text-sm text-gray-600 italic border-r border-gray-100 w-1/3">{deliverable}</td>
        <td className="py-3 px-4 text-center text-xs font-bold text-gray-500 w-1/9">{sdr}</td>
        <td className="py-3 px-4 text-center text-xs font-bold text-gray-500 w-1/9">{ae}</td>
        <td className="py-3 px-4 text-center text-xs font-bold text-gray-500 w-1/9">{mgr}</td>
    </tr>
);

const OperatingModel: React.FC = () => {
    const [showRaci, setShowRaci] = useState(false);

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f3f4f6] min-h-screen">
            <header className="text-center py-8">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">4. Modelo Operativo (Sales Ops)</h1>
                <p className="text-lg text-[#6D84E3] mt-2 font-medium">Personas, Datos y Rituales.</p>
            </header>

            <main className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-16">
                
                {/* BLOQUE 1: GOBERNANZA */}
                <section>
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center pb-2 border-b border-gray-200">
                        <span className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                        Gobernanza del Equipo (Quién)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <RoleKpiCard role="SDR (Desarrollo)" color="border-green-500" northStar="SQLs (Reuniones Agendadas)" inputs={["Llamadas salientes", "Cuentas tocadas", "Tasa de Contacto"]} outputs={["Reuniones (SQLs)", "Conversión a Opp"]} />
                        <RoleKpiCard role="AE (Cierre)" color="border-blue-500" northStar="New MRR (Ingresos)" inputs={["Demos Ejecutadas", "Propuestas Enviadas", "Pipeline Generado"]} outputs={["Win Rate %", "Ciclo de Venta", "Ticket Medio"]} />
                        <RoleKpiCard role="Sales Manager" color="border-purple-500" northStar="Forecast Accuracy" inputs={["Coaching Hours", "Deal Reviews", "Pipeline Coverage"]} outputs={["% Attainment Equipo", "Participación", "Retención"]} />
                    </div>
                    <div className="text-center">
                        <button onClick={() => setShowRaci(!showRaci)} className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                            {showRaci ? 'Ocultar Matriz' : 'Ver Matriz de Responsabilidades (RACI)'}
                            <span className="ml-2 text-xs">{showRaci ? '▲' : '▼'}</span>
                        </button>
                    </div>
                    {showRaci && (
                        <div className="mt-6 overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm animate-fade-in">
                            <table className="min-w-full"><thead className="bg-gray-100 text-gray-700 uppercase text-xs"><tr><th className="py-3 px-4 text-left w-1/3">Fase del Pipeline</th><th className="py-3 px-4 text-left w-1/3 text-[#6D84E3]">Entregable / Gatekeeper</th><th className="py-3 px-4 text-center w-1/9">SDR</th><th className="py-3 px-4 text-center w-1/9">AE</th><th className="py-3 px-4 text-center w-1/9">Manager</th></tr></thead><tbody><RaciRow task="1. Lead (MQL)" deliverable="Gate 1: Reunión en cal." sdr="R/A" ae="I" mgr="I" /><RaciRow task="2. Discovery" deliverable="MEDDICC: Pain & Metrics" sdr="C" ae="R/A" mgr="C" /><RaciRow task="3. Diagnóstico / Fit" deliverable="Gate 2: Check Técnico" sdr="-" ae="R/A" mgr="I" /><RaciRow task="4. Solución & Demo" deliverable="MEDDICC: Champion OK" sdr="-" ae="R/A" mgr="I" /><RaciRow task="5. Propuesta & BC" deliverable="MEDDICC: Economic Buyer OK" sdr="-" ae="R/A" mgr="A" /><RaciRow task="6. Negociación" deliverable="Contrato Firmado" sdr="-" ae="R/A" mgr="A" /><RaciRow task="7. Cierre & Handoff" deliverable="Gate 3: Kick-off Agendado" sdr="-" ae="R" mgr="I" /></tbody></table>
                        </div>
                    )}
                </section>

                {/* BLOQUE 2: HIGIENE DEL DATO */}
                <section>
                     <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center pb-2 border-b border-gray-200">
                        <span className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                        Higiene del Dato y Reglas de Negocio (Con Qué)
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
                            <h4 className="font-bold text-gray-800 mb-2 flex items-center"><span className="text-xl mr-2">🚦</span> Datos de Cualificación</h4>
                            <ul className="space-y-3 text-sm flex-grow">
                                <li className="p-2 bg-gray-50 rounded border border-gray-100"><span className="block font-bold text-gray-700 text-xs">📌 Pain Point Principal</span><div className="flex flex-wrap gap-1 mt-1"><span className="bg-red-100 text-red-800 text-[10px] px-1 rounded">Costes</span><span className="bg-red-100 text-red-800 text-[10px] px-1 rounded">NPS</span></div></li>
                                <li className="p-2 bg-gray-50 rounded border border-gray-100"><span className="block font-bold text-gray-700 text-xs">🚦 Fuente del Lead</span><div className="flex flex-wrap gap-1 mt-1"><span className="bg-blue-100 text-blue-800 text-[10px] px-1 rounded">Inbound</span><span className="bg-blue-100 text-blue-800 text-[10px] px-1 rounded">Outbound</span></div></li>
                                <li className="p-2 bg-gray-50 rounded border border-gray-100"><span className="block font-bold text-gray-700 text-xs">👤 Buyer Persona</span><span className="text-gray-500 text-xs block mt-1">[CXO | COO | CEO]</span></li>
                                <li className="p-2 bg-gray-50 rounded border border-gray-100"><span className="block font-bold text-gray-700 text-xs">🔢 Volumen Actual</span><span className="text-gray-400 text-xs italic block mt-1">_____ interacciones/mes</span></li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
                            <h4 className="font-bold text-gray-800 mb-2 flex items-center"><span className="text-xl mr-2">🛠️</span> Datos Solución & Técnica</h4>
                            <ul className="space-y-3 text-sm flex-grow">
                                <li className="p-2 bg-gray-50 rounded border border-gray-100"><span className="block font-bold text-gray-700 text-xs">🛠 Tech Stack Actual</span><span className="text-gray-500 text-xs block mt-1">(Salesforce, Genesys...)</span></li>
                                <li className="p-2 bg-gray-50 rounded border border-gray-100 flex justify-between items-center"><span className="font-bold text-gray-700 text-xs">✅ Viabilidad Técnica</span><span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Sí/No</span></li>
                                <li className="p-2 bg-gray-50 rounded border border-gray-100 flex justify-between items-center"><span className="font-bold text-gray-700 text-xs">🗺 MAP Activo</span><span className="text-xs text-gray-500">Boolean</span></li>
                                <li className="p-2 bg-gray-50 rounded border border-gray-100"><span className="block font-bold text-gray-700 text-xs">👥 Roles Identificados</span><span className="text-gray-500 text-xs block mt-1">Champion & Tech Buyer</span></li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
                            <h4 className="font-bold text-gray-800 mb-2 flex items-center"><span className="text-xl mr-2">💰</span> Datos Económicos & Cierre</h4>
                            <ul className="space-y-3 text-sm flex-grow">
                                <li className="p-2 bg-gray-50 rounded border border-gray-100"><span className="block font-bold text-gray-700 text-xs">💰 Valor del Contrato (TCV)</span><span className="text-gray-400 text-xs italic block mt-1">€ _________</span></li>
                                <li className="p-2 bg-gray-50 rounded border border-gray-100"><span className="block font-bold text-gray-700 text-xs">📅 Fecha de Cierre</span><span className="text-gray-500 text-xs block mt-1">Actualizar semanalmente</span></li>
                                <li className="p-2 bg-red-50 rounded border border-red-100"><span className="block font-bold text-red-800 text-xs">📉 Motivo de Pérdida</span><span className="text-red-600 text-xs block mt-1">Obligatorio en Closed Lost</span></li>
                                <li className="p-2 bg-green-50 rounded border border-green-100"><span className="block font-bold text-green-800 text-xs">🚀 Fecha Inicio Servicio</span><span className="text-green-600 text-xs block mt-1">Para facturación</span></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* BLOQUE 3: RITUALES */}
                <section>
                     <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center pb-2 border-b border-gray-200">
                        <span className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                        Ritmo de Negocio (Cuándo)
                    </h3>
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-10">
                        <table className="min-w-full text-sm text-left"><thead className="bg-gray-50 text-gray-700 uppercase text-xs font-bold"><tr><th className="px-6 py-3">Ritual</th><th className="px-6 py-3">Frecuencia</th><th className="px-6 py-3">Objetivo Crítico</th><th className="px-6 py-3">Audiencia</th></tr></thead><tbody className="divide-y divide-gray-100"><tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-gray-800">Daily Standup</td><td className="px-6 py-4">Diario (15 min)</td><td className="px-6 py-4">Foco en IGAs y desbloqueo.</td><td className="px-6 py-4 text-gray-500">SDRs + Manager</td></tr><tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-gray-800">Pipeline Review</td><td className="px-6 py-4">Semanal</td><td className="px-6 py-4">Sanidad y Next Steps reales.</td><td className="px-6 py-4 text-gray-500">AEs + Manager</td></tr><tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-gray-800">Deal Clinic</td><td className="px-6 py-4">Ad-hoc</td><td className="px-6 py-4">Creatividad para desbloquear.</td><td className="px-6 py-4 text-gray-500">Equipo Completo</td></tr><tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-gray-800">Forecast Call</td><td className="px-6 py-4">Mensual</td><td className="px-6 py-4">Precisión (Commit vs Gap).</td><td className="px-6 py-4 text-gray-500">Manager + Dirección</td></tr><tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-gray-800">QBR</td><td className="px-6 py-4">Trimestral</td><td className="px-6 py-4">Aprendizaje y Territorio.</td><td className="px-6 py-4 text-gray-500">Toda la compañía</td></tr></tbody></table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default OperatingModel;
