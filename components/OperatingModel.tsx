
import React, { useState } from 'react';

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

const RaciRow: React.FC<{ task: string; deliverable: string; sdr: string; ae: string; mgr: string }> = ({ task, deliverable, sdr, ae, mgr }) => (
    <tr className="border-b border-gray-100 hover:bg-[#E4E3E3] transition-colors">
        <td className="py-3 px-4 text-sm font-medium text-[#3F3F3F] w-1/3">{task}</td>
        <td className="py-3 px-4 text-sm text-[#B1B1B0] italic border-r border-gray-100 w-1/3">{deliverable}</td>
        <td className="py-3 px-4 text-center text-xs font-bold text-[#B1B1B0] w-1/9">{sdr}</td>
        <td className="py-3 px-4 text-center text-xs font-bold text-[#B1B1B0] w-1/9">{ae}</td>
        <td className="py-3 px-4 text-center text-xs font-bold text-[#B1B1B0] w-1/9">{mgr}</td>
    </tr>
);

const OperatingModel: React.FC = () => {
    const [showRaci, setShowRaci] = useState(false);

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f3f4f6] min-h-screen">
            <header className="text-center py-8">
                <h1 className="text-3xl md:text-5xl font-bold text-[#3F3F3F] tracking-tight">4. Modelo Operativo (Sales Ops)</h1>
                <p className="text-lg text-[#6D84E3] mt-2 font-medium">Personas, Datos y Rituales.</p>
            </header>

            <main className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-16">
                
                {/* BLOQUE 1: GOBERNANZA */}
                <section>
                    <h3 className="text-2xl font-bold text-[#3F3F3F] mb-8 flex items-center pb-2 border-b border-gray-200">
                        <span className="bg-[#3F3F3F] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                        Gobernanza del Equipo (Quién)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <RoleKpiCard role="SDR (Desarrollo)" color="border-green-500" northStar="SQLs (Reuniones Agendadas)" inputs={["Llamadas salientes", "Cuentas tocadas", "Tasa de Contacto"]} outputs={["Reuniones (SQLs)", "Conversión a Opp"]} />
                        <RoleKpiCard role="AE (Cierre)" color="border-blue-500" northStar="New MRR (Ingresos)" inputs={["Demos Ejecutadas", "Propuestas Enviadas", "Pipeline Generado"]} outputs={["Win Rate %", "Ciclo de Venta", "Ticket Medio"]} />
                        <RoleKpiCard role="Sales Manager" color="border-purple-500" northStar="Forecast Accuracy" inputs={["Coaching Hours", "Deal Reviews", "Pipeline Coverage"]} outputs={["% Attainment Equipo", "Participación", "Retención"]} />
                    </div>
                    <div className="text-center">
                        <button onClick={() => setShowRaci(!showRaci)} className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-[#3F3F3F] bg-white hover:bg-[#E4E3E3] focus:outline-none">
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

                {/* BLOQUE 2: HIGIENE DEL DATO */}
                <section>
                     <h3 className="text-2xl font-bold text-[#3F3F3F] mb-4 flex items-center">
                        <span className="bg-[#3F3F3F] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                        Higiene del Dato y Reglas de Negocio (Con Qué)
                    </h3>
                    <p className="text-sm text-[#B1B1B0] mb-8">La calidad de los datos determina la calidad de la decisión. Si no está en el CRM, no existe.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Col 1: Objetos Críticos */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h4 className="font-bold text-[#3F3F3F] mb-4 flex items-center">
                                <span className="text-xl mr-2">📁</span> Objetos Críticos
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 p-3 bg-[#E4E3E3] rounded-lg">
                                    <div className="bg-[#6D84E3] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">L</div>
                                    <div>
                                        <div className="font-bold text-[#3F3F3F] text-sm">Lead (Persona)</div>
                                        <p className="text-xs text-[#B1B1B0]">Individuo antes de cualificar.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 p-3 bg-[#E4E3E3] rounded-lg">
                                    <div className="bg-[#6D84E3] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">C</div>
                                    <div>
                                        <div className="font-bold text-[#3F3F3F] text-sm">Company (Empresa)</div>
                                        <p className="text-xs text-[#B1B1B0]">Entidad legal. Fuente de verdad.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 p-3 bg-[#E4E3E3] rounded-lg">
                                    <div className="bg-[#6D84E3] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">D</div>
                                    <div>
                                        <div className="font-bold text-[#3F3F3F] text-sm">Deal (Oportunidad)</div>
                                        <p className="text-xs text-[#B1B1B0]">Posible venta con valor €.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Col 2: Campos Obligatorios */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h4 className="font-bold text-[#3F3F3F] mb-4 flex items-center">
                                <span className="text-xl mr-2">🔵</span> Campos Obligatorios
                            </h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold text-[#B1B1B0] mb-2">Etapa 2 (Discovery)</p>
                                    <p className="text-sm text-[#3F3F3F]">Pain, Métrica, Champion (MEDDICC).</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#B1B1B0] mb-2">Etapa 4 (Solución)</p>
                                    <p className="text-sm text-[#3F3F3F]">Importe Estimado, Fecha Cierre.</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#B1B1B0] mb-2">Etapa 5 (Propuesta)</p>
                                    <p className="text-sm text-[#3F3F3F]">Link a Propuesta, Competidor.</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#B1B1B0] mb-2">Closed Lost</p>
                                    <p className="text-sm text-[#3F3F3F]">Motivo de Pérdida (Reason Code).</p>
                                </div>
                                <div className="mt-6 p-3 bg-[#E4E3E3] rounded-lg">
                                    <p className="text-xs text-[#B1B1B0]">
                                        <strong>🚦 Datos de Cualificación:</strong> Pain Point Principal, Fuente del Lead, Buyer Persona, Volumen Actual
                                    </p>
                                </div>
                                <div className="p-3 bg-[#E4E3E3] rounded-lg">
                                    <p className="text-xs text-[#B1B1B0]">
                                        <strong>🛠️ Datos Solución:</strong> Tech Stack Actual, Viabilidad Técnica, MAP Activo, Roles Identificados
                                    </p>
                                </div>
                                <div className="p-3 bg-[#E4E3E3] rounded-lg">
                                    <p className="text-xs text-[#B1B1B0]">
                                        <strong>💰 Datos Económicos:</strong> TCV, Fecha de Cierre, Motivo de Pérdida, Fecha Inicio Servicio
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Col 3: Trigger Events */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h4 className="font-bold text-[#3F3F3F] mb-4 flex items-center">
                                <span className="text-xl mr-2">⚡</span> Trigger Events
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-sm">→</span>
                                    <div>
                                        <p className="text-sm font-bold text-[#3F3F3F]">Cambio a "Propuesta"</p>
                                        <p className="text-xs text-[#B1B1B0]">Alerta automática a Manager para revisión.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-sm">→</span>
                                    <div>
                                        <p className="text-sm font-bold text-[#3F3F3F]">Deal Estancado &gt; 14 días</p>
                                        <p className="text-xs text-[#B1B1B0]">Tarea auto-generada: "Limpiar Pipeline".</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-sm">→</span>
                                    <div>
                                        <p className="text-sm font-bold text-[#3F3F3F]">Closed Won</p>
                                        <p className="text-xs text-[#B1B1B0]">Slack a #wins, Email a Ops y Finanzas.</p>
                                    </div>
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
            </main>
        </div>
    );
};

export default OperatingModel;
